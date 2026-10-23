/* The visual-language library, a section of the home page (index.html, cn/index.html — #languages). Renders whatever
   /languages/library.json lists — written by the skill's scripts/vl_library_export.py, never by hand — so a new
   language needs no change here. Ids and classes carry a vl prefix: the deck gallery beside it has its own .grid and
   .card. The home page owns the language: it calls window.slideMakerLibrary.setLang(lang) on every switch. */
(function () {
  'use strict';
  var REPO = 'https://github.com/addsumtech/slides_maker';
  var REF = REPO + '/blob/main/skills/slide-maker/references/visual-languages.md';
  var NEW_DAYS = 30;
  var BASE = '/languages/';           // library.json and its media stay where the exporter writes them
  var HASH = 'vl-';                   // #vl-<id> opens a language (a bare #<id> could be any section of the page)

  var T = {
    en: {
      crumb: 'Visual languages', gallery: 'Deck gallery', searchLabel: 'Search languages',
      search: 'Search by name or topic', all: 'All', imageLed: 'Image-led', drawn: 'Drawn',
      headline: function (n) { return [n + ' visual languages, ', 'each a whole look']; },
      langLabel: 'Switch the page to Chinese',
      lede: 'A visual language is a complete, checked look for a deck: two designed grounds, a type pairing that ' +
        'works in Latin and CJK, seven page compositions, and every general component — charts, timelines, tables — ' +
        'wearing it. Ask for one by name, or let slide-maker offer the ones that fit your topic.',
      stats: ['languages', 'grounds', 'page types', 'components on every ground'],
      count: function (n, t) { return n === t ? t + ' languages' : n + ' of ' + t; },
      empty: function (q) { return q ? 'No language matches “' + q + '”.' : 'No language of this kind yet.'; },
      clear: 'Clear filters', copyPrompt: 'Copy prompt', details: 'See all pages', copied: 'Copied',
      copyFailed: 'Copy failed — open the language and select the text',
      imageLedKind: 'image-led', drawnKind: 'drawn', isNew: 'NEW',
      pagesH: 'The seven page types', pagesNote: 'Every language is rendered on the same demo text, with no optional ' +
        'extras set, so the looks compare on identical words.',
      notRendered: 'The page renders for this ground are not exported yet; the sample sheets below show the look.',
      sheetsH: 'Its own sample pages', sheetsNote: 'The language on a topic of its own, as the README shows it.',
      paletteH: 'Palette', fontsH: 'Type', extrasH: 'Words only you give', derivedH: 'Words it writes itself',
      useH: 'How to ask for it', prompt: 'Say to your agent', python: 'Or in a build script',
      reference: 'The full reference on GitHub', none: 'None.',
      ground: 'ground', ink: 'ink', mute: 'muted', panel: 'panel', accent: 'accent', textAccent: 'text accent',
      series: 'chart series', fontsBoth: 'macOS and Windows', fontsMac: 'macOS only', cjk: 'Chinese',
      display: 'display', body: 'body', numeral: 'numerals', anyPage: 'any page', on: 'on',
      pictures: 'Takes your picture on', footGen: function (v, d) { return 'Generated from slide-maker ' + v + ' on ' + d + '.'; },
      footRepo: 'Source and install', footRef: 'Reference', close: 'Close', loadFail: 'The library could not be loaded.',
      kindLong: { 'image-led': 'built around your pictures', 'drawn': 'drawn, no pictures needed' },
      addedOn: 'added'
    },
    zh: {
      crumb: '视觉语言', gallery: '案例画廊', searchLabel: '搜索视觉语言',
      search: '按名称或主题搜索', all: '全部', imageLed: '以图为主', drawn: '纯绘制',
      headline: function (n) { return [n + ' 套视觉语言，', '每套都是完整的外观']; },
      langLabel: '切换为英文页面',
      lede: '视觉语言是一套完整、经过校验的 PPT 外观：两种设计好的底色、中西文都成立的字体搭配、七种页面构图，' +
        '图表、时间线、表格等通用组件也都穿上同一身风格。点名就能用，也可以让 slide-maker 按你的主题推荐合适的几套。',
      stats: ['套视觉语言', '种底色', '种页面', '个组件适配每种底色'],
      count: function (n, t) { return n === t ? '共 ' + t + ' 套' : n + ' / ' + t + ' 套'; },
      empty: function (q) { return q ? '没有匹配“' + q + '”的视觉语言。' : '这一类暂时还没有。'; },
      clear: '清除筛选', copyPrompt: '复制提示词', details: '看全部页面', copied: '已复制',
      copyFailed: '复制失败，请打开这套语言手动选中文字',
      imageLedKind: '以图为主', drawnKind: '纯绘制', isNew: '新',
      pagesH: '七种页面', pagesNote: '每套语言都用同一份演示文字渲染，可选的附加字段都不填，方便在同样的内容上比较外观。',
      notRendered: '这种底色的页面渲染还没有导出；下方的样张展示了它的外观。',
      sheetsH: '它自己的样张', sheetsNote: '这套语言在它自己的题材上的样子，和 README 里的一致。',
      paletteH: '配色', fontsH: '字体', extrasH: '只能由你提供的文字', derivedH: '它自己生成的文字',
      useH: '怎么用', prompt: '对你的 agent 说', python: '或者在构建脚本里',
      reference: 'GitHub 上的完整说明', none: '无。',
      ground: '底色', ink: '正文', mute: '弱化', panel: '面板', accent: '强调', textAccent: '强调文字',
      series: '图表系列', fontsBoth: 'macOS 和 Windows', fontsMac: '仅 macOS', cjk: '中文',
      display: '标题', body: '正文', numeral: '数字', anyPage: '任意页面', on: '用于',
      pictures: '放你的图片的页面', footGen: function (v, d) { return '由 slide-maker ' + v + ' 于 ' + d + ' 生成。'; },
      footRepo: '源码与安装', footRef: '参考文档', close: '关闭', loadFail: '模版库加载失败。',
      kindLong: { 'image-led': '围绕你的图片', 'drawn': '纯绘制，无需图片' },
      addedOn: '加入于'
    }
  };

  var state = { lang: 'en', q: '', kind: 'all', ground: {}, lib: null, opener: null, pushed: false };
  var $ = function (id) { return document.getElementById(id); };

  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (v === null || v === undefined || v === false) return;
      if (k === 'text') n.textContent = v;
      else if (k === 'on') Object.keys(v).forEach(function (e) { n.addEventListener(e, v[e]); });
      else if (k === 'style') n.setAttribute('style', v);
      else n.setAttribute(k, v === true ? '' : v);
    });
    (kids || []).forEach(function (c) { if (c) n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return n;
  }
  function t(key) { return T[state.lang][key]; }
  function L(obj) { return obj ? (obj[state.lang] || obj.en || '') : ''; }
  function hex(h) { return '#' + String(h || '').replace(/^#/, ''); }
  function asset(p) { return /^(?:[a-z]+:|\/)/i.test(p || '') ? p : BASE + p; }   // library.json paths are relative to it

  function pickLang() { return /^zh\b/i.test(document.documentElement.lang || '') ? 'zh' : 'en'; }   // the home page's

  function pad(n) { return (n < 10 ? '0' : '') + n; }
  /* NEW = not among the languages the page launched with (library.json baseline_ids), and added within NEW_DAYS.
     Dates compare as local YYYY-MM-DD strings: parsing them as UTC hid a just-added language for hours east of UTC. */
  function isNew(x) {
    var lib = state.lib, ids = lib.baseline_ids;
    if (!x.added_at) return false;
    var launched = Array.isArray(ids) ? ids.indexOf(x.id) !== -1 : (!!lib.baseline && x.added_at <= lib.baseline);
    if (launched) return false;
    var c = new Date(Date.now() - NEW_DAYS * 864e5);
    return x.added_at >= c.getFullYear() + '-' + pad(c.getMonth() + 1) + '-' + pad(c.getDate());
  }

  function groundOf(x) {
    var id = state.ground[x.id];
    for (var i = 0; i < x.grounds.length; i++) if (x.grounds[i].id === id) return x.grounds[i];
    return x.grounds[0];
  }

  function copy(text, btn) {
    var old = btn.textContent, settled = false;
    function report(ok) {               // drawn on the button AND announced; never "Copied" for a copy that failed
      var live = $('vlLive'), msg = ok ? t('copied') : t('copyFailed');
      btn.textContent = ok ? t('copied') : '✕';
      if (live) live.textContent = ok ? msg + ': ' + text : msg;
      setTimeout(function () { btn.textContent = old; }, ok ? 1400 : 2600);
    }
    function fallback() {
      var ta = el('textarea', { style: 'position:fixed;opacity:0;top:0;left:0' }), ok = false;
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { ok = document.execCommand('copy') === true; } catch (e) { ok = false; }
      ta.remove();
      report(ok);
    }
    function once(fn) { return function () { if (!settled) { settled = true; fn(); } }; }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(once(function () { report(true); }), once(fallback));
      setTimeout(once(fallback), 1000);   // a write that never settles (a permission prompt nobody answers) still ends
    } else fallback();
  }

  /* ---------- url state ---------- */
  function readUrl() {
    var p = new URLSearchParams(location.search);
    state.q = (p.get('q') || '').slice(0, 80);
    var k = p.get('kind');
    state.kind = (k === 'image-led' || k === 'drawn') ? k : 'all';
  }
  function writeUrl() {
    var p = new URLSearchParams();
    if (state.q) p.set('q', state.q);
    if (state.kind !== 'all') p.set('kind', state.kind);
    var s = p.toString();
    history.replaceState(null, '', location.pathname + (s ? '?' + s : '') + location.hash);
  }

  /* ---------- static text ---------- */
  function paintChrome() {
    var lib = state.lib;
    document.querySelectorAll('#languages [data-vl-i18n]').forEach(function (n) { n.textContent = t(n.getAttribute('data-vl-i18n')); });
    $('vlQ').placeholder = t('search');
    $('vlClose').setAttribute('aria-label', t('close'));
    if (!lib) return;
    var hp = t('headline')(lib.stats.languages), hd = $('vlHeadline');
    hd.textContent = '';
    hd.appendChild(document.createTextNode(hp[0]));
    hd.appendChild(el('span', { 'class': 'hl', text: hp[1] }));
    $('vlLede').textContent = t('lede');
    var s = lib.stats, labels = t('stats');
    $('vlStats').innerHTML = '';
    [s.languages, s.grounds, s.page_types, s.components].forEach(function (n, i) {
      $('vlStats').appendChild(el('div', { 'class': 'vl-stat' }, [el('div', { 'class': 'n', text: String(n) }),
        el('div', { 'class': 'l', text: labels[i] })]));
    });
    var kinds = $('vlKinds');
    kinds.innerHTML = '';
    [['all', t('all')], ['image-led', t('imageLed')], ['drawn', t('drawn')]].forEach(function (k) {
      kinds.appendChild(el('button', { type: 'button', 'aria-pressed': String(state.kind === k[0]), 'data-kind': k[0],
        text: k[1], on: { click: function () { state.kind = k[0]; writeUrl(); paintChrome(); paintGrid(); } } }));
    });
    var foot = $('vlFoot');
    foot.innerHTML = '';
    foot.appendChild(el('span', { text: t('footGen')(lib.skill_version || '?', lib.generated || '?') }));
    foot.appendChild(el('a', { href: REPO, text: t('footRepo') }));
    foot.appendChild(el('a', { href: REF, text: t('footRef') }));
  }

  /* ---------- the grid ---------- */
  function matches(x) {
    if (state.kind !== 'all' && x.kind !== state.kind) return false;
    var q = state.q.trim().toLowerCase();
    if (!q) return true;
    // both languages' words: a tag clicked in 中文 must still find its languages after switching to EN
    var hay = [x.id, x.name.en, x.name.zh, x.blurb.en, x.blurb.zh, (x.best_for.en || []).join(' '),
      (x.best_for.zh || []).join(' ')].join(' ').toLowerCase();
    return q.split(/\s+/).every(function (w) { return hay.indexOf(w) !== -1; });
  }

  function swatchList(g) {
    var s = g.swatches;
    return [s.ground, s.ink].concat(s.accents || []).concat(s.text_accents || []).filter(function (v, i, a) {
      return v && a.indexOf(v) === i;
    }).slice(0, 6);
  }

  function card(x) {
    var g = groundOf(x);
    var img = el('img', { src: asset(g.sample), alt: L(x.name) + ' — ' + L(g.label), loading: 'lazy', decoding: 'async',
      width: '1400', height: '800' });
    var sheet = el('button', { 'class': 'vl-sheet', type: 'button', 'aria-label': t('details') + ': ' + L(x.name),
      on: { click: function () { openDetail(x.id, sheet); } } }, [img]);
    var kids = [sheet];
    if (isNew(x)) kids.push(el('span', { 'class': 'vl-new', text: t('isNew') }));
    var kind = el('span', { 'class': 'vl-kind ' + x.kind, text: x.kind === 'image-led' ? t('imageLedKind') : t('drawnKind') });
    kids.push(el('div', { 'class': 'vl-crow' }, [x.grounds.length > 1 ?
      el('div', { 'class': 'vl-grounds', role: 'group', 'aria-label': t('ground') }, x.grounds.map(function (gg) {
        return el('button', { type: 'button', 'aria-pressed': String(gg.id === g.id), 'data-ground': gg.id,
          on: { click: function () { state.ground[x.id] = gg.id; paintGrid(); focusGround(x.id, gg.id); } } },
          [el('i', { style: 'background:' + hex(gg.swatches.ground) }), L(gg.label)]);
      })) : null, kind]));
    var name = el('h3', null, [el('button', { type: 'button', text: L(x.name),
      on: { click: function (e) { openDetail(x.id, e.currentTarget); } } })]);
    kids.push(el('div', { 'class': 'vl-cbody' }, [
      el('div', { 'class': 'vl-cname' }, [name, el('code', { text: x.id })]),
      el('p', { 'class': 'vl-blurb', text: L(x.blurb) }),
      el('div', { 'class': 'vl-tags' }, (x.best_for[state.lang] || []).map(function (tag) {
        return el('button', { type: 'button', text: tag, on: { click: function () { setQuery(tag); } } });
      })),
      el('div', { 'class': 'vl-swatches', 'aria-hidden': 'true' }, swatchList(g).map(function (h) {
        return el('i', { style: 'background:' + hex(h), title: hex(h) });
      })),
      el('div', { 'class': 'vl-cfoot' }, [
        el('button', { 'class': 'btn primary', type: 'button', text: t('copyPrompt'),
          on: { click: function (e) { copy(L(g.prompt), e.currentTarget); } } }),
        el('button', { 'class': 'btn ghost', type: 'button', text: t('details'),
          on: { click: function (e) { openDetail(x.id, e.currentTarget); } } })
      ])
    ]));
    return el('article', { 'class': 'vl-card', id: 'card-' + x.id, 'data-id': x.id }, kids);
  }

  function focusGround(id, gid) {
    var b = document.querySelector('#card-' + id + ' .vl-grounds button[data-ground="' + gid + '"]');
    if (b) b.focus();
  }

  function paintGrid() {
    var lib = state.lib, grid = $('vlGrid');
    grid.innerHTML = '';
    var shown = lib.languages.filter(matches);
    shown.forEach(function (x) { grid.appendChild(card(x)); });
    $('vlCount').textContent = t('count')(shown.length, lib.languages.length);
    $('vlEmpty').hidden = shown.length > 0;
    $('vlEmptyText').textContent = t('empty')(state.q.trim());
    if ($('vlQ').value !== state.q) $('vlQ').value = state.q;
  }

  function setQuery(q) {
    state.q = q;
    writeUrl();
    paintGrid();
    $('vlQ').focus();
    window.scrollTo({ top: $('vlQ').getBoundingClientRect().top + window.scrollY - 80,
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }

  /* ---------- the detail dialog ---------- */
  function find(id) {
    var ls = state.lib ? state.lib.languages : [];
    for (var i = 0; i < ls.length; i++) if (ls[i].id === id) return ls[i];
    return null;
  }

  function openDetail(id, opener) {
    state.opener = opener || null;
    if (location.hash !== '#' + HASH + id) {
      history.pushState(null, '', location.pathname + location.search + '#' + HASH + id);
      state.pushed = true;        // closing pops this entry, so Back never reopens the dialog
    }
    showDetail();
  }

  function fontRows(f) {
    var rows = [];
    ['display', 'body', 'numeral'].forEach(function (r) {
      if (f.both && f.both[r]) rows.push([t(r) + ' · ' + t('fontsBoth'), f.both[r]]);
    });
    ['display', 'body', 'numeral'].forEach(function (r) {
      if (f.mac && f.mac[r] && (!f.both || f.mac[r] !== f.both[r])) rows.push([t(r) + ' · ' + t('fontsMac'), f.mac[r]]);
    });
    ['display', 'body'].forEach(function (r) {
      var c = f.cjk && f.cjk[r];
      if (c) rows.push([t(r) + ' · ' + t('cjk'), c.mac + ' (macOS) · ' + c.win + ' (Windows)']);
    });
    return el('table', { 'class': 'vl-kv' }, [el('tbody', null, rows.map(function (r) {
      return el('tr', null, [el('th', { text: r[0] }), el('td', { text: r[1] })]);
    }))]);
  }

  function palette(g) {
    var s = g.swatches, items = [[t('ground'), s.ground], [t('ink'), s.ink], [t('mute'), s.mute], [t('panel'), s.panel]];
    (s.accents || []).forEach(function (h) { items.push([t('accent'), h]); });
    (s.text_accents || []).forEach(function (h) { items.push([t('textAccent'), h]); });
    var pal = el('div', { 'class': 'vl-pal' }, items.map(function (it) {
      return el('span', null, [el('i', { style: 'background:' + hex(it[1]) }), it[0], el('code', { text: hex(it[1]) })]);
    }));
    var ser = el('div', { 'class': 'vl-pal' }, (s.series || []).map(function (h) {
      return el('span', null, [el('i', { style: 'background:' + hex(h) }), el('code', { text: hex(h) })]);
    }));
    return el('div', { 'class': 'vl-panel' }, [el('h5', { text: L(g.label) }), pal,
      (s.series || []).length ? el('p', { 'class': 'vl-note', text: t('series') }) : null, ser]);
  }

  function copyRow(text, isCode) {
    return el('div', { 'class': 'vl-copyrow' }, [el(isCode ? 'code' : 'span', { text: text }),
      el('button', { 'class': 'btn ghost', type: 'button', text: t('copyPrompt').replace(/ prompt|提示词/, ''),
        on: { click: function (e) { copy(text, e.currentTarget); } } })]);
  }

  function renderDetail(x) {
    var g = groundOf(x);
    $('vlDTitle').textContent = L(x.name);
    $('vlDMeta').textContent = x.id + ' · ' + T[state.lang].kindLong[x.kind] + (isNew(x) || (x.added_at && state.lib.baseline && x.added_at > state.lib.baseline) ? ' · ' + t('addedOn') + ' ' + x.added_at : '');
    var body = $('vlDBody');
    body.innerHTML = '';
    body.appendChild(el('p', { 'class': 'vl-blurb', text: L(x.blurb) }));
    if (x.grounds.length > 1) {
      body.appendChild(el('div', { 'class': 'vl-grounds', role: 'group', 'aria-label': t('ground'), style: 'padding:12px 0 0' },
        x.grounds.map(function (gg) {
          return el('button', { type: 'button', 'aria-pressed': String(gg.id === g.id), 'data-ground': gg.id,
            on: { click: function () { state.ground[x.id] = gg.id; renderDetail(x); paintGrid();
              var b = document.querySelector('#vlDBody .vl-grounds button[data-ground="' + gg.id + '"]'); if (b) b.focus(); } } },
            [el('i', { style: 'background:' + hex(gg.swatches.ground) }), L(gg.label)]);
        })));
    }
    body.appendChild(el('h4', { text: t('pagesH') }));
    var pts = state.lib.page_types || [];
    var have = pts.filter(function (p) { return g.pages && g.pages[p.id]; });
    if (have.length) {
      body.appendChild(el('div', { 'class': 'vl-pages' }, have.map(function (p) {
        return el('figure', null, [el('img', { src: asset(g.pages[p.id]), alt: L(x.name) + ' — ' + L(p.name) + ' — ' + L(g.label),
          loading: 'lazy', decoding: 'async', width: '960', height: '540' }), el('figcaption', { text: L(p.name) })]);
      })));
      body.appendChild(el('p', { 'class': 'vl-note', text: t('pagesNote') }));
    } else body.appendChild(el('p', { 'class': 'vl-note', text: t('notRendered') }));
    body.appendChild(el('h4', { text: t('sheetsH') }));
    body.appendChild(el('div', { 'class': 'vl-sheets' }, x.grounds.map(function (gg) {
      return el('figure', null, [el('img', { src: asset(gg.sample), alt: L(x.name) + ' — ' + L(gg.label), loading: 'lazy',
        decoding: 'async', width: '1400', height: '800' }), el('figcaption', { text: L(gg.label) })]);
    })));
    body.appendChild(el('p', { 'class': 'vl-note', text: t('sheetsNote') }));
    body.appendChild(el('h4', { text: t('paletteH') }));
    body.appendChild(el('div', { 'class': 'vl-facts' }, x.grounds.map(palette)));
    body.appendChild(el('h4', { text: t('fontsH') }));
    body.appendChild(el('div', { 'class': 'vl-panel' }, [fontRows(x.fonts)]));
    var pic = (x.image_pages || []).map(function (id) {
      for (var i = 0; i < pts.length; i++) if (pts[i].id === id) return L(pts[i].name);
      return id;
    });
    body.appendChild(el('div', { 'class': 'vl-facts', style: 'margin-top:16px' }, [
      el('div', { 'class': 'vl-panel' }, [el('h5', { text: t('extrasH') }),
        x.extras && x.extras.length ? el('table', { 'class': 'vl-kv' }, [el('tbody', null, x.extras.map(function (e) {
          var where = e.pages === 'any' ? t('anyPage') : (e.pages || []).join(', ');
          return el('tr', null, [el('th', null, [el('code', { text: e.name + '=' })]),
            el('td', { text: e.takes + ' (' + t('on') + ' ' + where + ')' })]);
        }))]) : el('p', { 'class': 'vl-note', text: t('none') })]),
      el('div', { 'class': 'vl-panel' }, [el('h5', { text: t('derivedH') }),
        x.derived && x.derived.length ? el('table', { 'class': 'vl-kv' }, [el('tbody', null, x.derived.map(function (d) {
          return el('tr', null, [el('th', null, [el('code', { text: d.id })]), el('td', { text: d.what })]);
        }))]) : el('p', { 'class': 'vl-note', text: t('none') }),
        pic.length ? el('p', { 'class': 'vl-note', text: t('pictures') + ': ' + pic.join(', ') }) : null])
    ]));
    body.appendChild(el('h4', { text: t('useH') }));
    body.appendChild(el('p', { 'class': 'vl-note', text: t('prompt'), style: 'margin:0 0 6px' }));
    body.appendChild(copyRow(L(g.prompt), false));
    body.appendChild(el('p', { 'class': 'vl-note', text: t('python'), style: 'margin:4px 0 6px' }));
    body.appendChild(copyRow('import visual_languages as vl\n' + g.python, true));
    body.appendChild(el('p', null, [el('a', { href: REF, text: t('reference') + ' →' })]));
  }

  function showDetail() {
    var d = $('vlDetail');
    var raw = location.hash.replace(/^#/, ''), id = '';
    if (raw.indexOf(HASH) === 0) {
      try { id = decodeURIComponent(raw.slice(HASH.length)); } catch (e) { id = ''; }   // a malformed escape names nothing
    }
    var x = id ? find(id) : null;
    if (!x) { state.pushed = false; if (d.open) d.close(); return; }
    renderDetail(x);
    d.setAttribute('data-last', x.id);
    if (!d.open) {
      if (typeof d.showModal === 'function') d.showModal(); else d.setAttribute('open', '');
    }
    d.scrollTop = 0;
    $('vlClose').focus();
  }

  function closeDetail() {
    var d = $('vlDetail');
    if (state.pushed && location.hash) {   // we added the #vl-id entry: step back over it (popstate closes the dialog)
      state.pushed = false;
      history.back();
      return;
    }
    state.pushed = false;                   // a deep link: drop the hash without adding an entry
    if (location.hash) history.replaceState(null, '', location.pathname + location.search + '#languages');
    if (d.open) d.close();
  }

  /* ---------- wiring ---------- */
  function wire() {
    var timer = null;
    $('vlQ').addEventListener('input', function (e) {
      clearTimeout(timer);
      var v = e.target.value.slice(0, 80);
      timer = setTimeout(function () { state.q = v; writeUrl(); paintGrid(); }, 120);
    });
    $('vlClear').addEventListener('click', function () { state.q = ''; state.kind = 'all'; writeUrl(); paintChrome(); paintGrid(); });
    $('vlClose').addEventListener('click', closeDetail);
    var d = $('vlDetail');
    d.addEventListener('cancel', function (e) { e.preventDefault(); closeDetail(); });
    d.addEventListener('click', function (e) { if (e.target === d) closeDetail(); });   // the backdrop
    d.addEventListener('close', function () {
      var o = state.opener;
      state.opener = null;
      if (o && document.contains(o)) o.focus();
      else {
        var id = d.getAttribute('data-last');
        var c = id && document.querySelector('#card-' + id + ' .vl-sheet');
        if (c) c.focus();
      }
    });
    window.addEventListener('hashchange', showDetail);
    window.addEventListener('popstate', function () { readUrl(); paintChrome(); paintGrid(); showDetail(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === '/' && document.activeElement !== $('vlQ') && !$('vlDetail').open) { e.preventDefault(); $('vlQ').focus(); }
    });
  }

  window.slideMakerLibrary = {
    setLang: function (lang) {
      state.lang = lang === 'zh' ? 'zh' : 'en';
      paintChrome();
      if (state.lib) { paintGrid(); if ($('vlDetail').open) showDetail(); }
    }
  };
  state.lang = pickLang();
  readUrl();
  wire();
  paintChrome();
  fetch(BASE + 'library.json', { cache: 'no-cache' }).then(function (r) {
    if (!r.ok) throw new Error(r.status);
    return r.json();
  }).then(function (lib) {
    if (!lib || lib.schema !== 1 || !Array.isArray(lib.languages)) throw new Error('unknown library.json schema');
    lib.languages = lib.languages.filter(function (x) { return x && x.id && x.grounds && x.grounds.length; });
    state.lib = lib;
    paintChrome();
    paintGrid();
    showDetail();
  }).catch(function (err) {
    $('vlGrid').appendChild(el('p', { 'class': 'vl-status', text: t('loadFail') + ' (' + err.message + ')' }));
  });
})();
