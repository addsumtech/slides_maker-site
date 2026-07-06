import subprocess, os
SP = os.path.dirname(os.path.abspath(__file__))

CARDS = {
"en": dict(
  steps=[("1","Install once","git clone + one command<br>Codex &amp; Claude Code"),
         ("2","Start /slide-maker","answer step by step (best)<br>or just one line + a file"),
         ("3","Read or research","your paper, repo, or doc,<br>or web-researches a topic"),
         ("4","Confirm story &amp; look","two quick tables in chat:<br>content plan, then design"),
         ("5","Build + critic review","code lays it out; a critic<br>agent reviews the render"),
         ("6","Get .pptx, then tune","editable · notes · builds;<br>refine in plain chat")],
  footer="Later changes take the same path. Say it in chat, get a clean rebuild. No manual editing.",
  font="-apple-system, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif"),
"zh": dict(
  steps=[("1","装一次","git clone + 一条命令<br>Codex 与 Claude Code"),
         ("2","敲 /slide-maker","逐题回答最稳（推荐）<br>或一句话带上文件"),
         ("3","读材料或联网调研","读你的论文、代码、文档<br>没有材料就先联网调研"),
         ("4","确认故事和观感","对话里两张小表：<br>先结构稿，后设计方案"),
         ("5","生成 + 独立评审","代码排版，评审 agent<br>复查渲染图并修正"),
         ("6","拿到 pptx，再微调","可编辑 · 备注 · 点击渐显<br>用自然语言继续改")],
  footer="后续修改也走同一条路：对话里说一句，干净重出一版，不用手工编辑。",
  font="-apple-system, 'PingFang SC', 'Hiragino Sans GB', sans-serif"),
}

TPL = """<!DOCTYPE html><html><head><meta charset="utf-8"><style>
* {{ margin:0; padding:0; box-sizing:border-box; }}
body {{ width:1840px; height:384px; font-family:{font};
  background:linear-gradient(135deg,#FBF5EA 0%,#F6ECDB 100%); overflow:hidden; }}
.row {{ display:flex; align-items:center; justify-content:center; gap:0; padding-top:28px; }}
.card {{ width:256px; height:250px; background:linear-gradient(160deg,#FFFEFB 0%,#FDF8F0 100%);
  border-radius:22px; box-shadow:0 10px 24px rgba(140,100,60,.10), 0 2px 6px rgba(140,100,60,.06);
  padding:26px 21px; flex:none; }}
.badge {{ width:44px; height:44px; border-radius:12px; background:linear-gradient(160deg,#CE4E2B,#AC3A20);
  color:#fff; font-size:24px; font-weight:700; display:flex; align-items:center; justify-content:center;
  box-shadow:0 5px 10px rgba(172,58,32,.35); margin-bottom:26px; }}
.t {{ font-size:21px; font-weight:700; color:#20242E; margin-bottom:14px; letter-spacing:-0.4px; white-space:nowrap; }}
.b {{ font-size:16px; line-height:1.55; color:#6E675A; }}
.chev {{ color:#E2854E; font-size:30px; font-weight:600; padding:0 7px; flex:none;
  transform:translateY(-8px); font-family:Arial; }}
.footer {{ text-align:center; font-size:18.5px; color:#7A7263; margin-top:26px; }}
</style></head><body>
<div class="row">{cards}</div>
<div class="footer">{footer}</div>
</body></html>"""

CARD = '<div class="card"><div class="badge">{n}</div><div class="t">{t}</div><div class="b">{b}</div></div>'
CHEV = '<div class="chev">&#8250;</div>'

chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
for lang, d in CARDS.items():
    cards = CHEV.join(CARD.format(n=n, t=t, b=b) for n, t, b in d["steps"])
    html = TPL.format(font=d["font"], cards=cards, footer=d["footer"])
    fp = f"{SP}/qs_{lang}.html"
    open(fp, "w").write(html)
    out = f"{SP}/quickstart_{lang}.png"
    subprocess.run([chrome, "--headless", "--disable-gpu", f"--screenshot={out}",
                    "--window-size=1840,384", "--force-device-scale-factor=2",
                    "--hide-scrollbars", f"file://{fp}"], capture_output=True, timeout=60)
    print(out, os.path.getsize(out) if os.path.exists(out) else "FAIL")
