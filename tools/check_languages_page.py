#!/usr/bin/env python3
"""Check the visual-language library page (languages/) in headless Chrome before it is committed.

    python3 tools/check_languages_page.py                 # assert, at 1400px and at a true 390px
    python3 tools/check_languages_page.py --shots DIR     # also write screenshots there (look at them)

It serves the site from 127.0.0.1, loads a harness that frames /languages/ at the width under test (headless Chrome's
window cannot be narrower than ~500px, so 390 is a 390px iframe, and the check asserts the frame really is 390 wide),
then drives the page the way a visitor does and reads back what changed:
  - one card per language in library.json, and every image path it names exists on disk;
  - a ground switch swaps the card's sample sheet; search and the kind filter narrow the grid;
  - #ink opens the dialog with one image per page type, and closing it clears the hash;
  - the 中文 toggle swaps names and blurbs; #nosuch opens nothing;
  - no horizontal scroll; no console error or uncaught exception (Chrome's own log).
Exit 1 on any failure, naming it. Needs Chrome or Chromium (CHROME=/path overrides discovery).
"""
import argparse
import functools
import http.server
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
import threading
from pathlib import Path

SITE = Path(__file__).resolve().parent.parent

HARNESS = r"""<!doctype html><html><head><meta charset="utf-8"><style>body{margin:0}iframe{border:0;display:block}</style>
</head><body><iframe id="f" width="%(w)d" height="%(h)d" src="/languages/%(hash)s"></iframe><pre id="out"></pre><script>
(async function () {
  const out = {fails: [], notes: []};
  const fail = (m) => out.fails.push(m);
  const sleep = (ms) => new Promise(r => setTimeout(r, ms));
  const f = document.getElementById('f');
  const lib = await (await fetch('/languages/library.json')).json();
  let w = f.contentWindow, d;
  for (let i = 0; i < 200; i++) { d = f.contentDocument; if (d && d.querySelectorAll('.card').length) break; await sleep(50); }
  w = f.contentWindow; d = f.contentDocument;
  const cards = () => [...d.querySelectorAll('.card')];
  const mode = %(mode)s;
  // every image inside the frame's viewport must actually load (lazy images included): a path that exists on disk
  // can still be an image the browser never shows
  async function settled(root) {
    let pending = [];
    for (let i = 0; i < 100; i++) {
      const vh = w.innerHeight;
      pending = [...root.querySelectorAll('img')].filter(im => {
        const r = im.getBoundingClientRect();
        return r.bottom > 0 && r.top < vh && r.width > 0 && !(im.complete && im.naturalWidth > 0);
      });
      if (!pending.length) return [];
      await sleep(50);
    }
    return pending.map(im => im.getAttribute('src'));
  }
  if (mode === 'shot') {      // a screenshot must show decoded pictures, not the frame they will paint into
    await settled(d);
    await Promise.all([...d.querySelectorAll('img')].filter(im => im.complete && im.naturalWidth).map(im => im.decode().catch(() => 0)));
    await sleep(300); document.getElementById('out').textContent = 'shot'; return;
  }
  try {
    const unloaded = await settled(d);
    if (unloaded.length) fail('images in view never loaded: ' + unloaded.slice(0, 4).join(', ') + (unloaded.length > 4 ? ' …' : ''));
    if (w.innerWidth !== %(w)d) fail('the frame is ' + w.innerWidth + 'px wide, not %(w)d');
    if (d.documentElement.scrollWidth > w.innerWidth + 1) fail('horizontal scroll: content ' + d.documentElement.scrollWidth + 'px in ' + w.innerWidth);
    if (cards().length !== lib.languages.length) fail('cards ' + cards().length + ' != languages ' + lib.languages.length);
    const ids = cards().map(c => c.dataset.id);
    if (JSON.stringify(ids) !== JSON.stringify(lib.languages.map(x => x.id))) fail('cards out of order: ' + ids.join(','));
    // stats are the exporter's numbers
    const nums = [...d.querySelectorAll('.stat .n')].map(n => +n.textContent);
    const s = lib.stats;
    if (JSON.stringify(nums) !== JSON.stringify([s.languages, s.grounds, s.page_types, s.components])) fail('stats ' + nums);
    // ground switch
    const x = lib.languages.find(l => l.grounds.length > 1);
    if (x) {
      const b = d.querySelector('#card-' + x.id + ' .grounds button[data-ground="' + x.grounds[1].id + '"]');
      if (!b) fail(x.id + ': no ground button for ' + x.grounds[1].id);
      else {
        b.click(); await sleep(50);
        const src = d.querySelector('#card-' + x.id + ' .sheet img').getAttribute('src');
        if (src !== x.grounds[1].sample) fail(x.id + ': ground switch left the sheet at ' + src);
        d.querySelector('#card-' + x.id + ' .grounds button[data-ground="' + x.grounds[0].id + '"]').click(); await sleep(50);
      }
    }
    // search
    const q = d.getElementById('q');
    q.value = 'ink'; q.dispatchEvent(new Event('input', {bubbles: true})); await sleep(300);
    if (cards().length !== 1 || cards()[0].dataset.id !== 'ink') fail('search "ink" shows ' + cards().map(c => c.dataset.id));
    q.value = 'zzzz-no-such'; q.dispatchEvent(new Event('input', {bubbles: true})); await sleep(300);
    if (cards().length !== 0 || d.getElementById('empty').hidden) fail('a search matching nothing shows no empty state');
    d.getElementById('clearBtn').click(); await sleep(50);
    if (cards().length !== lib.languages.length) fail('clear filters did not restore every card');
    // a best-for tag searches for itself
    const tag = d.querySelector('.tags button');
    if (tag) { const tt = tag.textContent; tag.click(); await sleep(80);
      if (q.value !== tt || !cards().length || cards().length === lib.languages.length && lib.languages.some(l => !(l.best_for.en || []).includes(tt) && !(l.best_for.zh || []).includes(tt)))
        fail('the tag "' + tt + '" did not filter to its languages (' + cards().length + ')');
      d.getElementById('clearBtn').click(); await sleep(50); }
    // kind filter
    d.querySelector('[data-kind="drawn"]').click(); await sleep(50);
    const nd = lib.languages.filter(l => l.kind === 'drawn').length;
    if (cards().length !== nd) fail('Drawn shows ' + cards().length + ', expected ' + nd);
    if (!/kind=drawn/.test(w.location.search)) fail('the kind filter is not in the URL (' + w.location.search + ')');
    d.querySelector('[data-kind="all"]').click(); await sleep(50);
    // the dialog
    w.location.hash = 'ink'; await sleep(200);
    const dlg = d.getElementById('detail');
    const ink = lib.languages.find(l => l.id === 'ink');
    if (!dlg.open) fail('#ink did not open the dialog');
    else {
      const imgs = [...dlg.querySelectorAll('.pages img')];
      const want = lib.page_types.filter(p => ink.grounds[0].pages[p.id]).length;
      if (want !== lib.page_types.length) out.notes.push('ink has ' + want + ' rendered pages on ' + ink.grounds[0].id);
      if (imgs.length !== want) fail('the dialog shows ' + imgs.length + ' page images, expected ' + want);
      const dl = await settled(dlg);
      if (dl.length) fail('dialog images in view never loaded: ' + dl.slice(0, 4).join(', '));
      const caps = [...dlg.querySelectorAll('.pages figcaption')].map(c => c.textContent);
      if (want && caps[0] !== lib.page_types[0].name.en && caps[0] !== lib.page_types[0].name.zh) fail('page captions: ' + caps);
      const gb = dlg.querySelector('.grounds button[data-ground="' + ink.grounds[1].id + '"]');
      if (gb) { gb.click(); await sleep(80);
        const src = (dlg.querySelector('.pages img') || {}).getAttribute ? dlg.querySelector('.pages img').getAttribute('src') : '';
        if (want && src !== ink.grounds[1].pages.cover) fail('the dialog ground switch left the cover at ' + src); }
      if (dlg.scrollWidth > dlg.clientWidth + 1) fail('the dialog scrolls sideways (' + dlg.scrollWidth + ' > ' + dlg.clientWidth + ')');
      d.getElementById('closeBtn').click(); await sleep(80);
      if (dlg.open) fail('the close button left the dialog open');
      if (w.location.hash) fail('closing left the hash ' + w.location.hash);
    }
    w.location.hash = 'nosuch'; await sleep(150);
    if (dlg.open) fail('#nosuch opened the dialog');
    w.location.hash = ''; await sleep(50);
    // 中文
    const first = lib.languages[0];
    const before = d.querySelector('.card h3').textContent;
    d.getElementById('langBtn').click(); await sleep(80);
    const now = d.querySelector('.card h3').textContent;
    const other = before === first.name.en ? first.name.zh : first.name.en;
    if (now !== other) fail('the language toggle left the first name at "' + now + '" (expected "' + other + '")');
    const blurb = d.querySelector('.card .blurb').textContent;
    if (blurb !== first.blurb.en && blurb !== first.blurb.zh) fail('the first blurb is not the manifest\'s');
    if (d.documentElement.scrollWidth > w.innerWidth + 1) fail('horizontal scroll after the toggle: ' + d.documentElement.scrollWidth);
    d.getElementById('langBtn').click(); await sleep(50);
  } catch (e) { fail('the harness threw: ' + e + ' ' + (e.stack || '')); }
  document.getElementById('out').textContent = JSON.stringify(out);
})();
</script></body></html>"""


def find_chrome():
    c = os.environ.get("CHROME")
    if c:
        return c
    for p in ("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
              "/Applications/Chromium.app/Contents/MacOS/Chromium"):
        if Path(p).exists():
            return p
    for n in ("google-chrome", "google-chrome-stable", "chromium", "chromium-browser", "chrome"):
        if shutil.which(n):
            return shutil.which(n)
    return None


class Handler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a):
        pass

    def do_GET(self):
        m = re.match(r"^/__probe__\.html\?w=(\d+)&h=(\d+)&mode=(\w+)&hash=(\w*)$", self.path)
        if m:
            w, h, mode, hsh = int(m.group(1)), int(m.group(2)), m.group(3), m.group(4)
            body = (HARNESS % {"w": w, "h": h, "mode": json.dumps(mode), "hash": ("#" + hsh) if hsh else ""}).encode()
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        super().do_GET()


def chrome(binary, url, width, height, *, dump=False, shot=None, profile):
    cmd = [binary, "--headless=new", "--disable-gpu", "--hide-scrollbars", "--no-first-run", "--no-sandbox",
           "--user-data-dir=" + profile, "--window-size={},{}".format(width, height), "--virtual-time-budget=15000",
           "--enable-logging=stderr", "--v=0"]
    cmd += ["--dump-dom"] if dump else ["--screenshot=" + str(shot)]
    return subprocess.run(cmd + [url], capture_output=True, text=True, timeout=120)


def console_errors(stderr):
    return [ln.strip()[:240] for ln in stderr.splitlines()
            if "CONSOLE" in ln and ("Uncaught" in ln or ":ERROR:" in ln or "error" in ln.lower())
            and "favicon" not in ln]


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    ap.add_argument("--shots", metavar="DIR", help="also write screenshots here")
    a = ap.parse_args(argv)
    fails = []
    lib_p = SITE / "languages" / "library.json"
    if not lib_p.is_file():
        print("FAIL no languages/library.json — run the skill's vl_library_export.py --site {}".format(SITE))
        return 1
    lib = json.loads(lib_p.read_text(encoding="utf-8"))
    for x in lib.get("languages", []):
        for g in x.get("grounds", []):
            for rel in [g.get("sample")] + list((g.get("pages") or {}).values()):
                if not rel or not (SITE / "languages" / rel).is_file():
                    fails.append("{}/{}: library.json names {} and it is not on disk".format(x.get("id"), g.get("id"), rel))
    binary = find_chrome()
    if not binary:
        print("FAIL no Chrome/Chromium found (set CHROME=/path) — the page was not checked")
        return 1
    srv = http.server.ThreadingHTTPServer(("127.0.0.1", 0), functools.partial(Handler, directory=str(SITE)))
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    base = "http://127.0.0.1:{}".format(srv.server_address[1])
    try:
        with tempfile.TemporaryDirectory() as prof:
            for w in (1400, 390):
                r = chrome(binary, "{}/__probe__.html?w={}&h=1000&mode=check&hash=".format(base, w), max(w, 520) + 40,
                           1100, dump=True, profile=prof)
                m = re.search(r'<pre id="out">(.*?)</pre>', r.stdout, re.S)
                raw = m.group(1).replace("&quot;", '"').replace("&lt;", "<").replace("&gt;", ">").replace("&amp;", "&") if m else ""
                if not raw:
                    fails.append("{}px: the harness never reported (Chrome exit {}): {}".format(w, r.returncode, r.stderr[-300:]))
                    continue
                res = json.loads(raw)
                fails += ["{}px: {}".format(w, f) for f in res["fails"]]
                for n in res.get("notes", []):
                    print("note {}px: {}".format(w, n))
                fails += ["{}px: console: {}".format(w, e) for e in console_errors(r.stderr)]
            if a.shots:
                out = Path(a.shots).expanduser()
                out.mkdir(parents=True, exist_ok=True)
                for w, h, hsh, name in ((1400, 2600, "", "page-1400.png"), (390, 3200, "", "page-390.png"),
                                        (1400, 1300, "ink", "dialog-1400.png"), (390, 1600, "ink", "dialog-390.png")):
                    shot = out / name
                    chrome(binary, "{}/__probe__.html?w={}&h={}&mode=shot&hash={}".format(base, w, h, hsh),
                           max(w, 520), h, shot=shot, profile=prof)
                    print(("wrote " if shot.exists() else "FAILED to write ") + str(shot))
    finally:
        srv.shutdown()
    for f in fails:
        print("FAIL " + f)
    print("[check_languages_page] {}".format("FAILED: {} problem(s)".format(len(fails)) if fails else
                                              "ok — {} languages, 1400px and 390px".format(len(lib.get("languages", [])))))
    return 1 if fails else 0


if __name__ == "__main__":
    sys.exit(main())
