'use strict';
/* 画面(サブ・ナビに出さない): まとまりの問い(SPEC_V1 4-3)と結果3画面(4-4)
   ・1画面1問。問い: scenes → recall → since → spread → degree → asks(repeat・wave だけ最後に others)
   ・結果: page 0 伝える言葉(カード) → 1 相談先 → 2 名前の一覧(「名前の 一覧を 見る」で開く・自動では開かない)
   ・🔴 答えはメモリの中だけ(S)。api.save / localStorage を使わない。ホームに戻ると消える(home が reset を呼ぶ・SPEC_V1 第5節)
   ・🔴 結果に本人についての言い切りを出さない: 相談のめやすの文と本人の答えを並べるだけ・案内の文は全員同じ・
     名前の一覧はまとまりだけで決まる(KOMARI_UI.namesBlock に答えを渡さない)
   ・crisis の場面を選んだら、次へ進む前に「いま つらいときは」を一度出す(とじる=同じ問いに戻る・もう一度「つぎ」で進む)
   ・ことばを変えて描き直しても答えは残る(入力欄の文字は描き直す前に S へ写す)
   ・戻るボタン(Play版): 結果→1つ前の結果/最後の問い、問い→1つ前の問い、最初の問い→来た画面(ホーム) */
(function(){
  var S = null;          // 答え(メモリだけ)
  var syncInputs = null; // いま描いている入力欄の文字 → S

  var SPREAD = ['one','many','unknown'];
  var DEGREE = ['bit','much','very','effort'];
  var OTHERS_OPTS = ['yes','no','unknown'];

  function fresh(id){
    return { group:id, step:0, page:-1, scenes:[], sceneOwn:'', recent:'', recentNo:'', since:null, spread:null, degree:null,
             asks:[], askOwn:'', others:null, crisisShown:false };
  }
  function steps(gid, U){ var s = ['scenes','recall','since','spread','degree','asks']; if(U.OTHERS.indexOf(gid) >= 0) s.push('others'); return s; }
  function sinceKeys(gid, U){
    return U.DEV.indexOf(gid) >= 0 ? ['small','school','w2','m1','m6','y1','unknown'] : ['w2','m1','m6','y1','small','unknown'];
  }
  function sync(){ if(syncInputs) syncInputs(); }
  function clean(v){ return String(v == null ? '' : v).replace(/\s+/g, ' ').trim(); }
  function sorted(a){ return a.slice().sort(function(x, y){ return x - y; }); }

  /* 伝える言葉(相手が読む・漢字の文)。空の行は出さない */
  function cardRows(api, U, g){
    var T = api.T, rows = [];
    function add(key, v){ if(v) rows.push({ key:key, label:T('screen.result.card.' + key), value:v }); }
    var tr = sorted(S.scenes).map(function(i){ return g.scenes[i]; }).filter(Boolean);
    if(clean(S.sceneOwn)) tr.push(clean(S.sceneOwn));
    add('trouble', tr.join('\n'));
    add('recent', clean(S.recent));
    add('recentNo', clean(S.recentNo));
    if(S.since) add('since', T('screen.result.cardSince.' + S.since));
    if(S.spread) add('spread', T('screen.result.cardSpread.' + S.spread));
    if(S.degree) add('degree', T('screen.result.cardDegree.' + S.degree));
    if(U.OTHERS.indexOf(S.group) >= 0 && S.others) add('others', T('screen.result.cardOthers.' + S.others));
    var as = sorted(S.asks).map(function(i){ return g.asks[i]; }).filter(Boolean);
    if(clean(S.askOwn)) as.push(clean(S.askOwn));
    add('asks', as.join('\n'));
    return rows;
  }
  function cardText(api, rows){
    return api.T('screen.result.r1Head') + rows.map(function(r){ return '\n\n■' + r.label + '\n' + r.value; }).join('');
  }

  /* ---- 問い(1画面1問) ---- */
  function drawQ(c, api, U, g){
    var T = api.T, st = steps(S.group, U), key = st[S.step];
    var top = api.el('div', 'flow-top');
    top.appendChild(api.el('span', 'flow-step', U.fmt(T('screen.flow.step'), { n:S.step + 1, m:st.length })));
    var x = U.btn(api, 'flow-close', T('screen.flow.close'), function(){ api.go('home'); });
    x.id = 'flow-close';
    top.appendChild(x);
    c.appendChild(top);
    c.appendChild(api.el('p', 'flow-group', g.label));

    var body = api.el('div', 'flow-q');
    body.id = 'flow-q';
    body.setAttribute('data-q', key);
    c.appendChild(body);
    var inputs = [];
    function h(text){ body.appendChild(api.el('h2', 'q-h', text)); }
    function line(field, ph, id){
      var i = document.createElement('input');
      i.type = 'text'; i.id = id; i.value = S[field] || ''; i.placeholder = ph;
      i.setAttribute('autocomplete', 'off');
      inputs.push([i, field]);
      var f = api.el('div', 'field');
      f.appendChild(i);
      body.appendChild(f);
    }
    function mark(b, on){ b.classList.toggle('on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); }
    /* いくつでも選べる(場面・してほしいこと) */
    function multi(list, field, prefix){
      var wrap = api.el('div', 'opts');
      list.forEach(function(txt, i){
        var b = api.el('button', 'opt-btn', txt);
        b.type = 'button'; b.id = prefix + i;
        mark(b, S[field].indexOf(i) >= 0);
        api.Tap.bind(b, function(){
          var k = S[field].indexOf(i);
          if(k >= 0) S[field].splice(k, 1); else S[field].push(i);
          mark(b, S[field].indexOf(i) >= 0);
        });
        wrap.appendChild(b);
      });
      body.appendChild(wrap);
    }
    /* 1つ選ぶ(もう一度押すと外れる) */
    function single(keys, base, field, prefix){
      var wrap = api.el('div', 'opts'), bs = [];
      keys.forEach(function(k){
        var b = api.el('button', 'opt-btn', T(base + k));
        b.type = 'button'; b.id = prefix + k;
        mark(b, S[field] === k);
        api.Tap.bind(b, function(){
          S[field] = (S[field] === k) ? null : k;
          bs.forEach(function(o){ mark(o.b, o.k === S[field]); });
        });
        bs.push({ b:b, k:k });
        wrap.appendChild(b);
      });
      body.appendChild(wrap);
    }

    if(key === 'scenes'){
      h(T('screen.flow.qScenes'));
      multi(g.scenes || [], 'scenes', 'flow-scene-');
      line('sceneOwn', T('screen.flow.ownPh'), 'flow-scene-own');
    } else if(key === 'recall'){
      h(T('screen.flow.qRecent'));
      line('recent', T('screen.flow.linePh'), 'flow-recent');
      h(T('screen.flow.qRecentNo'));
      line('recentNo', T('screen.flow.linePh'), 'flow-recent-no');
      body.appendChild(api.el('p', 'hint', T('screen.flow.optional')));
    } else if(key === 'since'){
      h(T('screen.flow.qSince'));
      single(sinceKeys(S.group, U), 'screen.flow.since.', 'since', 'flow-since-');
    } else if(key === 'spread'){
      h(T('screen.flow.qSpread'));
      single(SPREAD, 'screen.flow.spread.', 'spread', 'flow-spread-');
    } else if(key === 'degree'){
      h(T('screen.flow.qDegree'));
      single(DEGREE, 'screen.flow.degree.', 'degree', 'flow-degree-');
    } else if(key === 'asks'){
      h(T('screen.flow.qAsks'));
      multi(g.asks || [], 'asks', 'flow-ask-');
      line('askOwn', T('screen.flow.ownPh'), 'flow-ask-own');
    } else if(key === 'others'){
      h(T('screen.flow.qOthers'));
      single(OTHERS_OPTS, 'screen.flow.others.', 'others', 'flow-others-');
    }
    syncInputs = function(){ inputs.forEach(function(p){ S[p[1]] = String(p[0].value || ''); }); };

    var row = api.el('div', 'btn-row');
    var back = U.btn(api, '', T('screen.flow.back'), function(){
      sync();
      if(S.step > 0){ S.step--; api.go('flow'); } else api.go('home');
    });
    back.id = 'flow-back';
    var next = U.btn(api, 'primary', T('screen.flow.next'), function(){
      sync();
      if(key === 'scenes' && !S.crisisShown && (g.crisis || []).some(function(i){ return S.scenes.indexOf(i) >= 0; })){
        S.crisisShown = true;
        U.openCrisis(api);   // 次へ進む前に一度だけ(とじる=この問いのまま)
        return;
      }
      if(S.step < st.length - 1) S.step++; else S.page = 0;
      api.go('flow');
    });
    next.id = 'flow-next';
    row.appendChild(back); row.appendChild(next);
    c.appendChild(row);
  }

  /* ---- 結果(3画面) ---- */
  function drawR(c, api, U, g){
    var T = api.T, D = U.data();
    function go(p){ S.page = p; api.go('flow'); }
    function tail(){
      var hb = U.btn(api, 'wide', T('screen.result.home'), function(){ api.go('home'); });
      hb.id = 'flow-home';
      c.appendChild(hb);
      var cb = U.crisisBtn(api);
      cb.id = 'flow-crisis';
      c.appendChild(cb);
    }
    var row;

    if(S.page === 0){
      /* ① 伝える言葉 */
      c.appendChild(api.el('h1', 'scr-title', T('screen.result.r1Head')));
      var rows = cardRows(api, U, g);
      var card = api.el('div', 'say-card');
      card.id = 'flow-card';
      if(!rows.length) card.appendChild(api.el('p', 'empty', T('screen.result.empty')));
      rows.forEach(function(r){
        var line = api.el('div', 'say-row');
        line.setAttribute('data-k', r.key);
        line.appendChild(api.el('div', 'say-label', r.label));
        line.appendChild(api.el('div', 'say-value', r.value));
        card.appendChild(line);
      });
      c.appendChild(card);
      row = api.el('div', 'btn-row');
      var cp = U.btn(api, '', T('screen.result.copy'), function(){ U.copy(api, cardText(api, rows), T('screen.result.copied')); });
      cp.id = 'flow-copy';
      var sh = U.btn(api, '', T('screen.result.show'), function(){
        U.openOv(api, 'show-white say-ov', function(box){
          box.appendChild(api.el('div', 'show-head', T('screen.result.r1Head')));
          rows.forEach(function(r){
            var b = api.el('div', 'show-block');
            b.appendChild(api.el('div', 'show-label', r.label));
            b.appendChild(api.el('div', 'show-value', r.value));
            box.appendChild(b);
          });
        });
      });
      sh.id = 'flow-show';
      row.appendChild(cp); row.appendChild(sh);
      c.appendChild(row);
      var nn = api.el('p', 'note', T('screen.result.noName'));
      nn.id = 'flow-noname';
      c.appendChild(nn);
      if(D.links && D.links.junbi){
        var p = api.el('p', 'credit');
        var a = api.el('a', null, T('screen.result.junbi'));
        a.id = 'flow-junbi';
        a.href = D.links.junbi; a.target = '_blank'; a.rel = 'noopener';
        p.appendChild(a);
        c.appendChild(p);
      }
      row = api.el('div', 'btn-row');
      var rb = U.btn(api, '', T('screen.result.back'), function(){ S.page = -1; S.step = steps(S.group, U).length - 1; api.go('flow'); });
      rb.id = 'flow-r-back';
      var rn = U.btn(api, 'primary', T('screen.result.next'), function(){ go(1); });
      rn.id = 'flow-r-next';
      row.appendChild(rb); row.appendChild(rn);
      c.appendChild(row);
      tail();
      return;
    }

    if(S.page === 1){
      /* ② 相談先: めやすの文(だれにでも同じ)と本人の答えを並べるだけ */
      c.appendChild(api.el('h1', 'scr-title', T('screen.result.r2Head')));
      var mb = api.el('div', 'card meyasu');
      mb.id = 'flow-meyasu';
      if(g.meyasu && g.meyasu.has){
        mb.appendChild(api.el('h2', 'sec-h first', T('screen.result.meyasuHead')));
        mb.appendChild(api.el('p', 'meyasu-text', g.meyasu.text));
        mb.appendChild(U.srcLine(api, g.meyasu.src));
      } else {
        var com = U.L(api).common || {};
        mb.appendChild(api.el('h2', 'sec-h first', T('screen.result.generalHead')));
        if(com.meyasuGeneral){
          mb.appendChild(api.el('p', 'meyasu-text', com.meyasuGeneral.text));
          mb.appendChild(U.srcLine(api, com.meyasuGeneral.src));
        }
        /* 発達のまとまり(attention・social・reading)だけ、発達障害の相談窓口の文も出す(wave には出さない) */
        (U.DEV.indexOf(S.group) >= 0 ? (com.devGeneral || []) : []).forEach(function(x){
          mb.appendChild(api.el('p', 'meyasu-text', x.text));
          mb.appendChild(U.srcLine(api, x.src));
        });
      }
      c.appendChild(mb);
      var ans = api.el('div', 'card answers');
      ans.id = 'flow-answers';
      ans.appendChild(api.el('h2', 'sec-h first', T('screen.result.yourAns')));
      ans.appendChild(api.el('p', 'ans-line', U.fmt(T('screen.result.ansSince'), { v: S.since ? T('screen.flow.since.' + S.since) : T('screen.result.notChosen') })));
      ans.appendChild(api.el('p', 'ans-line', U.fmt(T('screen.result.ansDegree'), { v: S.degree ? T('screen.flow.degree.' + S.degree) : T('screen.result.notChosen') })));
      c.appendChild(ans);
      var same = api.el('p', 'note', T('screen.result.same'));
      same.id = 'flow-same';
      c.appendChild(same);
      c.appendChild(api.el('h2', 'sec-h', T('screen.result.winHead')));
      /* そのまとまりの窓口を先に(固定)→ 残りの「昼間に 相談する」 */
      var ids = (g.windows || []).slice();
      (D.windows || []).forEach(function(w){ if(w.band === 'day' && ids.indexOf(w.id) < 0) ids.push(w.id); });
      var wl = api.el('div', 'wins');
      wl.id = 'flow-windows';
      ids.forEach(function(id){ var w = U.win(id); if(w) wl.appendChild(U.windowCard(api, w)); });
      c.appendChild(wl);
      c.appendChild(api.el('p', 'hint', U.fmt(T('screen.ui.checked'), { date: D.ver || '' })));
      row = api.el('div', 'btn-row');
      var pv = U.btn(api, '', T('screen.result.prev'), function(){ go(0); });
      pv.id = 'flow-r-prev';
      var tn = U.btn(api, 'primary', T('screen.result.toNames'), function(){ go(2); });
      tn.id = 'flow-to-names';
      row.appendChild(pv); row.appendChild(tn);
      c.appendChild(row);
      tail();
      return;
    }

    /* ③ 相談するときに 確かめることが ある 名前(答えを渡さない) */
    c.appendChild(api.el('h1', 'scr-title', T('screen.result.r3Head')));
    var nb = U.namesBlock(api, S.group);
    nb.id = 'flow-names';
    c.appendChild(nb);
    /* 知っておきたいこと「病名は、だれかより 上に 立つ ための 道具では ありません」(data の key=notTool)。
       結果を離れずに読めるよう、ナビへ移らず窓で開く。とじる・戻るボタン=結果③へ(2026-10-17 ヒロさん) */
    var lt = ((U.L(api).common || {}).learn || []).filter(function(x){ return x.key === 'notTool'; })[0];
    if(lt){
      c.appendChild(api.el('h2', 'sec-h', T('screen.learn.title')));
      /* 一覧の下の「疑う 材料に しないで」に続けて注意だけが並んで見えないよう、中身(頼み方の例)を一行で先に言う */
      var ln = api.el('p', 'learn-lead', T('screen.result.toLearnNote'));
      ln.id = 'flow-learn-note';
      c.appendChild(ln);
      var lb = U.btn(api, 'wide learn-link', U.fmt(T('screen.result.toLearn'), { h: lt.h }), function(){
        U.openOv(api, 'learn-ov', function(box){
          var art = api.el('div', 'card learn-card');
          art.appendChild(api.el('h2', 'learn-h', lt.h));
          art.appendChild(api.el('p', 'learn-body', lt.body));
          if(lt.srcs && lt.srcs.length){
            art.appendChild(api.el('p', 'src-head', T('screen.learn.srcHead')));
            lt.srcs.forEach(function(s){ art.appendChild(U.srcLine(api, s)); });
          }
          box.appendChild(art);
        });
      });
      lb.id = 'flow-learn';
      c.appendChild(lb);
    }
    row = api.el('div', 'btn-row');
    var pv2 = U.btn(api, '', T('screen.result.prev'), function(){ go(1); });
    pv2.id = 'flow-r-prev';
    row.appendChild(pv2);
    c.appendChild(row);
    tail();
  }

  window.SCREENS.register('flow', {
    start: function(id){ S = fresh(id); syncInputs = null; },
    reset: function(){ S = null; syncInputs = null; },
    state: function(){ sync(); return S ? JSON.parse(JSON.stringify(S)) : null; },   // 検査用(写しを返すだけ)
    back: function(api){
      if(!S) return false;
      sync();
      var U = window.KOMARI_UI;
      if(S.page > 0) S.page--;
      else if(S.page === 0){ S.page = -1; S.step = steps(S.group, U).length - 1; }
      else if(S.step > 0) S.step--;
      else return false;
      api.go('flow');
      return true;
    },
    render: function(c, api){
      var U = window.KOMARI_UI;
      sync(); syncInputs = null;
      c.setAttribute('data-nodirty', '1');   // 答えは保存しない画面=戻るボタンの「書きかけ」の確かめを出さない
      var g = S && U.group(api, S.group);
      if(!g){
        c.appendChild(api.el('p', 'empty', api.T('screen.flow.gone')));
        var hb = U.btn(api, 'primary wide', api.T('screen.flow.toHome'), function(){ api.go('home'); });
        hb.id = 'flow-gone-home';
        c.appendChild(hb);
        return;
      }
      if(S.page < 0) drawQ(c, api, U, g); else drawR(c, api, U, g);
    }
  });
})();
