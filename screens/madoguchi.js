'use strict';
/* 画面: 相談先(ナビ・SPEC_V1 4-6)
   ・2段: いま つらいとき(24時間)= band 'now' / 昼間に 相談する = band 'day'(data.js の windows の順)
   ・tel は tel: リンク。url は linkOk:true のときだけ押して開ける(別タブ)。false は文字+コピー(KOMARI_UI.windowCard)
   ・「確認日 2026-10-17。番号や時間は変わることがあります。」を出す */
(function(){
  window.SCREENS.register('madoguchi', {
    render: function(c, api){
      var U = window.KOMARI_UI, T = api.T, D = U.data();
      c.appendChild(api.el('h1', 'scr-title', T('screen.madoguchi.title')));
      [['now', 'nowHead'], ['day', 'dayHead']].forEach(function(b){
        var sec = api.el('div', 'wins');
        sec.id = 'madoguchi-' + b[0];
        sec.appendChild(api.el('h2', 'sec-h', T('screen.madoguchi.' + b[1])));
        (D.windows || []).forEach(function(w){ if(w.band === b[0]) sec.appendChild(U.windowCard(api, w)); });
        c.appendChild(sec);
      });
      var ck = api.el('p', 'hint', U.fmt(T('screen.ui.checked'), { date: D.ver || '' }));
      ck.id = 'madoguchi-checked';
      c.appendChild(ck);
    }
  });
})();
