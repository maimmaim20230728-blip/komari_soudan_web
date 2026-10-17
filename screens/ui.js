'use strict';
/* 画面共通の小さな部品(このアプリ内だけ)。画面の状態は持たない(生成関数だけ)。
   ・window.KOMARI_UI = { DEV, OTHERS, fmt, data, lang, group, label, win, winText, isFree, btn, copy, urlBox, srcLine,
                          windowCard, openOv, openCrisis, crisisBtn, groupBtn, namesBlock, allSources }
   ・中身(まとまり・窓口・名前・出典)は data.js の window.KOMARI_DATA。ことばは api.lang(data に無ければ ja)
   ・操作は全部 api.Tap.bind(click禁止)。電話と外のページだけは <a href>(押すと端末が開く)
   ・🔴 答えは保存しない(ここでも api.save を使わない・SPEC_V1 第5節) */
(function(){
  var DEV = ['attention','social','reading'];   // 「いつから」で「小さいころから」を先頭に・「学校に…」を足す(SPEC_V1 4-3)
  var OTHERS = ['repeat','wave'];               // 「まわりの人から言われた」の問いを足す(SPEC_V1 4-3)
  /* タップで開けるのは、リンク自由と明記されたサイトだけ(SPEC_V1 第3節)。ほかのサブドメイン(kennet・kokoro など)は含めない */
  var FREE_HOSTS = ['mhlw.go.jp','rehab.go.jp','gov-online.go.jp','hattatsu.go.jp','iryou.teikyouseido.mhlw.go.jp'];

  function fmt(s, map){ var out = String(s); for(var k in map){ out = out.split('{' + k + '}').join(String(map[k])); } return out; }
  function data(){ return window.KOMARI_DATA || { ver:'', order:[], links:{}, windows:[], ja:{ groups:{}, common:{} }, en:{ groups:{}, common:{} } }; }
  function lang(api){ var D = data(); return D[api.lang] ? api.lang : 'ja'; }
  function L(api){ return data()[lang(api)] || { groups:{}, common:{} }; }
  function group(api, id){ var g = L(api).groups || {}; return g[id] || null; }
  /* ホームのラベル: data にあるまとまりは data の label、無いまとまりは i18n の仮ラベル */
  function label(api, id){ var g = group(api, id); return g ? g.label : api.T('screen.home.labels.' + id); }
  function win(id){ var ws = data().windows || []; for(var i = 0; i < ws.length; i++) if(ws[i].id === id) return ws[i]; return null; }
  function winText(api, w){ return w[lang(api)] || w.ja || {}; }
  function host(url){ var m = /^https?:\/\/([^\/?#:]+)/i.exec(String(url || '')); return m ? m[1].toLowerCase().replace(/^www\./, '') : ''; }
  function isFree(url){ return FREE_HOSTS.indexOf(host(url)) >= 0; }

  function btn(api, cls, text, fn){
    var b = api.el('button', 'btn' + (cls ? ' ' + cls : ''), text);
    b.type = 'button';
    api.Tap.bind(b, fn);
    return b;
  }

  /* コピー: クリップボードAPI → だめなら隠した欄で execCommand。どちらも無ければ「コピー できませんでした」 */
  function copyOld(text){
    try{
      var t = document.createElement('textarea');
      t.value = text; t.setAttribute('readonly', ''); t.setAttribute('aria-hidden', 'true');
      t.style.position = 'fixed'; t.style.top = '0'; t.style.left = '0'; t.style.opacity = '0';
      document.body.appendChild(t);
      if(t.select) t.select();
      var ok = (typeof document.execCommand === 'function') ? !!document.execCommand('copy') : false;
      if(t.parentNode) t.parentNode.removeChild(t);
      return ok;
    }catch(_){ return false; }
  }
  function copy(api, text, okMsg){
    function done(ok){ api.toast(ok ? okMsg : api.T('screen.ui.copyFail')); }
    try{
      var cb = navigator && navigator.clipboard;
      if(cb && typeof cb.writeText === 'function'){
        var p = cb.writeText(String(text));
        if(p && typeof p.then === 'function'){ p.then(function(){ done(true); }, function(){ done(copyOld(text)); }); return; }
        done(true); return;
      }
    }catch(_){}
    done(copyOld(text));
  }

  /* URL は文字で出す。linkOk のときだけ押して開ける(別タブ)。ほかは文字+コピー(SPEC_V1 第3節) */
  function urlBox(api, url, linkOk){
    var wrap = api.el('span', 'url-box');
    if(linkOk){
      var a = api.el('a', 'url-link', url);
      a.href = url; a.target = '_blank'; a.rel = 'noopener';
      wrap.appendChild(a);
    } else {
      wrap.appendChild(api.el('span', 'url-text', url));
      wrap.appendChild(btn(api, 'copy-mini', api.T('screen.ui.copy'), function(){ copy(api, url, api.T('screen.ui.copied')); }));
    }
    return wrap;
  }
  /* 出典の1行: 「機関名『ページ名』URL(確認日 2026-10-17)」。要約・書き直し(kind:'summary')は、
     文の利用が自由なサイト(PDL1.0・発達障害ナビ=FREE_HOSTS)なら「を加工して作成(そよぎ)」、
     文を載せないサイト(kennet・こころの耳・NCNP など)なら「を参考に作成(そよぎ)」を足す(SPEC_V1 第3節) */
  function srcLine(api, src){
    var p = api.el('p', 'src');
    if(!src) return p;
    var map = { org: src.org || '', title: src.title || '', date: data().ver || '' };
    var parts = String(api.T('screen.ui.src')).split('{url}');
    p.appendChild(api.el('span', null, fmt(parts[0], map)));
    if(src.url) p.appendChild(urlBox(api, src.url, isFree(src.url)));
    if(parts.length > 1) p.appendChild(api.el('span', null, fmt(parts.slice(1).join(''), map)));
    if(src.kind === 'summary') p.appendChild(api.el('span', null, api.T(isFree(src.url) ? 'screen.ui.edited' : 'screen.ui.ref')));
    else if(src.kind === 'quote') p.appendChild(api.el('span', null, api.T('screen.ui.quoted')));   // en は そよぎの訳と書く
    return p;
  }

  /* 窓口の1枚(相談先・いま つらいとき・結果の相談先で同じもの) */
  function windowCard(api, w){
    var t = winText(api, w);
    var card = api.el('div', 'card win');
    card.setAttribute('data-win', w.id);
    card.appendChild(api.el('h3', 'win-name', t.name || ''));
    if(t.desc) card.appendChild(api.el('p', 'win-desc', t.desc));
    if(t.hours) card.appendChild(api.el('p', 'win-hours', t.hours));
    [w.tel, w.tel2].forEach(function(tel){
      if(!tel) return;
      var a = api.el('a', 'call-btn', fmt(api.T('screen.ui.call'), { tel: tel }));
      a.href = 'tel:' + String(tel).replace(/[^0-9+]/g, '');
      card.appendChild(a);
    });
    var ws = t.src || w.src;   // 出典は ことばごと(data.js の windows[].ja.src / en.src)
    if(w.url && !(ws && ws.url === w.url)) card.appendChild(api.el('p', 'win-url')).appendChild(urlBox(api, w.url, w.linkOk === true));
    if(ws) card.appendChild(srcLine(api, ws));
    return card;
  }

  /* 全画面(.ov)。build(box) で中身を作る。とじるは共通。戻り値=閉じる関数 */
  function openOv(api, cls, build){
    var ov = api.el('div', 'ov' + (cls ? ' ' + cls : ''));
    ov.setAttribute('role', 'dialog');
    ov.setAttribute('aria-modal', 'true');
    var box = api.el('div', 'ov-body');
    ov.appendChild(box);
    var cb = api.el('button', 'ov-close', api.T('screen.ui.close'));
    cb.type = 'button';
    function close(){ if(ov.parentNode) ov.parentNode.removeChild(ov); }
    api.Tap.bind(cb, close);
    build(box);
    ov.appendChild(cb);
    document.body.appendChild(ov);
    try{ cb.focus(); }catch(_){}
    return close;
  }
  /* いま つらいとき(SPEC_V1 4-7): 「いま つらいとき」の窓口だけを大きく。問いや名前は出さない。とじる=もとの画面へ */
  function openCrisis(api){
    return openOv(api, 'crisis-ov', function(box){
      box.appendChild(api.el('h2', 'crisis-h', api.T('screen.ui.crisisHead')));
      (data().windows || []).forEach(function(w){ if(w.band === 'now') box.appendChild(windowCard(api, w)); });
      box.appendChild(api.el('p', 'hint', fmt(api.T('screen.ui.checked'), { date: data().ver || '' })));
    });
  }
  function crisisBtn(api){
    var b = api.el('button', 'big-btn alert crisis-btn');
    b.type = 'button';
    b.appendChild(api.el('span', 'lbl', api.T('screen.ui.crisisBtn')));
    api.Tap.bind(b, function(){ openCrisis(api); });
    return b;
  }

  /* まとまりのボタン(ホーム・名前のてびき)。data に無いまとまりは「じゅんびちゅう」(押せない) */
  function groupBtn(api, id, fn){
    var g = group(api, id);
    if(!g){
      var d = api.el('div', 'big-btn group-btn soon');
      d.setAttribute('data-group', id);
      d.setAttribute('aria-disabled', 'true');
      d.appendChild(api.el('span', 'lbl', label(api, id)));
      d.appendChild(api.el('span', 'sub', api.T('screen.ui.soon')));
      return d;
    }
    var b = api.el('button', 'big-btn group-btn');
    b.type = 'button';
    b.setAttribute('data-group', id);
    b.appendChild(api.el('span', 'lbl', g.label));
    if(g.lead) b.appendChild(api.el('span', 'sub', g.lead));
    api.Tap.bind(b, fn);
    return b;
  }

  /* 相談するときに 確かめることが ある 名前(SPEC_V1 4-4③・4-5)。
     🔴 まとまりだけで決まる(答えを受け取らない=だれにでも同じ一覧)。並びは data の順のまま(体と眠り→こころ→発達) */
  function namesBlock(api, gid){
    var g = group(api, gid), com = L(api).common || {};
    var box = api.el('div', 'names');
    box.setAttribute('data-group', gid);
    box.appendChild(api.el('p', 'note names-pre', api.T('screen.names.pre')));
    var ul = api.el('ul', 'list names-list');
    ((g && g.names) || []).forEach(function(n){
      var li = api.el('li', 'names-row');
      var col = api.el('div', 'grow');
      col.appendChild(api.el('div', 'names-name', n.name));
      col.appendChild(api.el('p', 'names-why', n.why));
      col.appendChild(srcLine(api, n.src));
      li.appendChild(col);
      ul.appendChild(li);
    });
    box.appendChild(ul);
    if(com.namesHow){
      box.appendChild(api.el('p', 'names-how-lead', api.T('screen.names.howLead')));
      box.appendChild(api.el('p', 'names-how', com.namesHow.text));
      box.appendChild(srcLine(api, com.namesHow.src));
    }
    box.appendChild(api.el('p', 'names-not-here', api.T('screen.names.notHere')));
    box.appendChild(api.el('p', 'note names-no-doubt', api.T('screen.names.noDoubt')));
    return box;
  }

  /* 出典の一覧(知っておきたいこと の最後の話): data の出典を全部・同じものは1つに */
  function allSources(api){
    var out = [], seen = {};
    function add(s){ if(!s || !s.url) return; var k = s.org + '|' + s.title + '|' + s.url; if(seen[k]) return; seen[k] = 1; out.push(s); }
    (data().windows || []).forEach(function(w){ add(winText(api, w).src || w.src); });
    var l = L(api), gs = l.groups || {}, com = l.common || {};
    (data().order || []).forEach(function(id){
      var g = gs[id]; if(!g) return;
      if(g.meyasu) add(g.meyasu.src);
      (g.names || []).forEach(function(n){ add(n.src); });
    });
    if(com.meyasuGeneral) add(com.meyasuGeneral.src);
    (com.devGeneral || []).forEach(function(x){ add(x.src); });
    if(com.namesHow) add(com.namesHow.src);
    (com.learn || []).forEach(function(x){ (x.srcs || []).forEach(add); });
    return out;
  }

  window.KOMARI_UI = { DEV: DEV, OTHERS: OTHERS, fmt: fmt, data: data, lang: lang, L: L, group: group, label: label, win: win, winText: winText,
    isFree: isFree, btn: btn, copy: copy, urlBox: urlBox, srcLine: srcLine, windowCard: windowCard, openOv: openOv, openCrisis: openCrisis,
    crisisBtn: crisisBtn, groupBtn: groupBtn, namesBlock: namesBlock, allSources: allSources };
})();
