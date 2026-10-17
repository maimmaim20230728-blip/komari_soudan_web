'use strict';
/* 画面: 名前のてびき(ナビ・SPEC_V1 4-5)
   ・11まとまりを並べ、選ぶと「相談するときに 確かめることが ある 名前」の一覧(結果③と同じ KOMARI_UI.namesBlock)+その下に「知って おきたい こと」5話目へのボタン(KOMARI_UI.learnLink)
   ・問いに答えなくても見られる(辞典として)。data に無いまとまりは「じゅんびちゅう」
   ・開いているまとまりはメモリだけ。戻るボタン(Play版)・「まとまりの 一覧へ もどる」で一覧へ */
(function(){
  var open = null;

  window.SCREENS.register('names', {
    back: function(api){ if(!open) return false; open = null; api.go('names'); return true; },
    render: function(c, api){
      var U = window.KOMARI_UI, T = api.T, D = U.data();
      var g = open && U.group(api, open);
      if(g){
        c.appendChild(api.el('h1', 'scr-title', T('screen.result.r3Head')));
        c.appendChild(api.el('p', 'flow-group', g.label));
        var nb = U.namesBlock(api, open);
        nb.id = 'names-block';
        c.appendChild(nb);
        /* 結果③と同じ「知って おきたい こと」5話目へのボタン(窓で開く・とじる/戻るボタン=この一覧のまま・2026-10-17 ヒロさん) */
        U.learnLink(api, c, 'names');
        var b = U.btn(api, 'wide', T('screen.names.back'), function(){ open = null; api.go('names'); });
        b.id = 'names-back';
        c.appendChild(b);
        return;
      }
      open = null;
      c.appendChild(api.el('h1', 'scr-title', T('screen.names.title')));
      c.appendChild(api.el('p', 'hint', T('screen.names.lead')));
      var list = api.el('div', 'groups');
      list.id = 'names-groups';
      (D.order || []).forEach(function(id){
        list.appendChild(U.groupBtn(api, id, function(){ open = id; api.go('names'); }));
      });
      c.appendChild(list);
    }
  });
})();
