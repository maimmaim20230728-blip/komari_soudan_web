'use strict';
/* 画面: ホーム「えらぶ」(SPEC_V1 4-2)
   ・いちばん上に常に「つらくて 消えたい 気持ちが ある」(→ いま つらいときの窓口の全画面・SPEC_V1 4-7)
   ・11のまとまり(data.js の order の順)。1つ選ぶと問い(サブ画面 flow)へ。data に無いまとまりは「じゅんびちゅう」
   ・下に「どれにも あてはまらない 困りごとも…」→ 相談先
   ・🔴 ホームに来たら答えを消す(flow.reset・SPEC_V1 第5節「ホームに戻ると消える」) */
(function(){
  window.SCREENS.register('home', {
    render: function(c, api){
      var U = window.KOMARI_UI, T = api.T, D = U.data();
      var flow = window.SCREENS.get('flow');
      if(flow && flow.reset) flow.reset();

      var cb = U.crisisBtn(api);
      cb.id = 'home-crisis';
      c.appendChild(cb);

      c.appendChild(api.el('h1', 'scr-title', T('screen.home.title')));
      c.appendChild(api.el('p', 'tagline', T('screen.home.lead')));

      var list = api.el('div', 'groups');
      list.id = 'home-groups';
      (D.order || []).forEach(function(id){
        list.appendChild(U.groupBtn(api, id, function(){
          if(flow && flow.start) flow.start(id);
          api.go('flow');
        }));
      });
      c.appendChild(list);

      var other = api.el('button', 'big-btn other-btn');
      other.type = 'button';
      other.id = 'home-other';
      other.appendChild(api.el('span', 'lbl', T('screen.home.other')));
      api.Tap.bind(other, function(){ api.go('madoguchi'); });
      c.appendChild(other);
    }
  });
})();
