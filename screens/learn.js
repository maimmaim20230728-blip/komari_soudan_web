'use strict';
/* 画面: 知っておきたいこと(ナビ・SPEC_V1 4-8)
   ・data.js の common.learn を1画面1話で「つぎ」「まえ」。各話の下に出典
   ・最後の話(このアプリについて)の下に、data の出典を全部(KOMARI_UI.allSources)と確認日
   ・いま開いている話はメモリだけ。戻るボタン(Play版)=まえの話 */
(function(){
  var idx = 0;

  window.SCREENS.register('learn', {
    back: function(api){ if(idx <= 0) return false; idx--; api.go('learn'); return true; },
    render: function(c, api){
      var U = window.KOMARI_UI, T = api.T, D = U.data();
      var list = (U.L(api).common || {}).learn || [];
      c.appendChild(api.el('h1', 'scr-title', T('screen.learn.title')));
      if(!list.length){ c.appendChild(api.el('p', 'empty', T('screen.ui.soon'))); return; }
      if(idx > list.length - 1) idx = list.length - 1;
      if(idx < 0) idx = 0;
      var item = list[idx];
      var top = api.el('p', 'flow-step', U.fmt(T('screen.learn.step'), { n: idx + 1, m: list.length }));
      top.id = 'learn-step';
      c.appendChild(top);
      var art = api.el('div', 'card learn-card');
      art.id = 'learn-card';
      art.appendChild(api.el('h2', 'learn-h', item.h));
      art.appendChild(api.el('p', 'learn-body', item.body));
      if(item.srcs && item.srcs.length){
        art.appendChild(api.el('p', 'src-head', T('screen.learn.srcHead')));
        item.srcs.forEach(function(s){ art.appendChild(U.srcLine(api, s)); });
      }
      c.appendChild(art);
      if(idx === list.length - 1){
        var all = api.el('div', 'card all-src');
        all.id = 'learn-all-src';
        all.appendChild(api.el('h2', 'sec-h first', T('screen.learn.allSrcHead')));
        U.allSources(api).forEach(function(s){ all.appendChild(U.srcLine(api, s)); });
        all.appendChild(api.el('p', 'hint', U.fmt(T('screen.ui.checked'), { date: D.ver || '' })));
        c.appendChild(all);
      }
      var row = api.el('div', 'btn-row');
      var prev = U.btn(api, '', T('screen.learn.prev'), function(){ if(idx > 0){ idx--; api.go('learn'); } });
      prev.id = 'learn-prev';
      prev.style.visibility = (idx === 0) ? 'hidden' : 'visible';
      var next = U.btn(api, 'primary', T('screen.learn.next'), function(){ if(idx < list.length - 1){ idx++; api.go('learn'); } });
      next.id = 'learn-next';
      next.style.visibility = (idx === list.length - 1) ? 'hidden' : 'visible';
      row.appendChild(prev); row.appendChild(next);
      c.appendChild(row);
    }
  });
})();
