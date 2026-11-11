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
      var cl = U.countryLine(api, 'madoguchi-country'); if(cl) c.appendChild(cl);   // 国が2つ以上のとき「〇〇の 窓口」(SPEC_V1 第9節)
      /* 電話が苦手な人のために、sms を持つ窓口(data の既存の印)だけを先に並べる。データは増やさず並べ替えるだけ(0.9.12)。
         下の いま つらいとき・昼間 にも、同じ窓口をそのまま残す(「24時間」などの段の情報を失わないため) */
      var texts = (D.windows || []).filter(function(w){ return !!w.sms; });
      if(texts.length){
        var ts = api.el('div', 'wins');
        ts.id = 'madoguchi-text';
        ts.appendChild(api.el('h2', 'sec-h', T('screen.madoguchi.textHead')));
        texts.forEach(function(w){ ts.appendChild(U.windowCard(api, w)); });
        c.appendChild(ts);
      }
      [['now', 'nowHead'], ['day', 'dayHead']].forEach(function(b){
        var sec = api.el('div', 'wins');
        sec.id = 'madoguchi-' + b[0];
        sec.appendChild(api.el('h2', 'sec-h', T('screen.madoguchi.' + b[1])));
        (D.windows || []).forEach(function(w){ if(w.band === b[0]) sec.appendChild(U.windowCard(api, w)); });
        c.appendChild(sec);
      });
      c.appendChild(U.checkedLine(api, 'madoguchi-checked'));
    }
  });
})();
