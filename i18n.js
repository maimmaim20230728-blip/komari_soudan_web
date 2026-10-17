/* 困りごとから相談へ・そよぎ 文言テーブル(そよぎアプリ・キット v1・このアプリは日本語と英語だけ=SPEC_V1 第0節)
   ・window.KOMARI_I18N = { ja, en }
   ・キー構造は ja と en で完全一致(_check.js が ja を正として構造・配列要素数を機械照合)
   ・画面の操作文言はここ(screen.<画面id>.*)。中身(まとまり・窓口・名前・出典・知っておきたいこと)は data.js
   ・{n} などのプレースホルダは app.js/screens が実値に差し替える(訳文でも記号のまま残す)
   ・set.lang は言語切替ラベルなので 'ことば / Language' 固定
   ・ひらがな: 本人が読む操作文言はひらがな主体(分かち書き)。相手に見せる文(伝える言葉のカード)は漢字
   ・🔴 SPEC_V1 第2節の使わない語を書かない(_check.js と _smoke_app.js が弾く) */
(function(){
'use strict';

/* ============ ja(正) ============ */
var ja = {
  app: { name:'困りごとから相談へ・そよぎ', short:'困りごとから相談へ', tagline:'困りごとを言葉にして、相談の一歩へ。' },
  nav: { home:'えらぶ', names:'名前の てびき', madoguchi:'相談先', learn:'知って おきたい こと', set:'せってい' },
  langName: { ja:'日本語', en:'英語' },   // 「〇〇で 見せる」のことばの名前
  common: {
    ok:'OK', cancel:'やめる', save:'ほぞんする', del:'けす', back:'もどる', close:'とじる',
    yes:'はい', no:'いいえ', add:'ついか', edit:'なおす', next:'つぎ', prev:'まえ', done:'できた',
    saved:'ほぞんしました ✓', saveFail:'ほぞんできませんでした', storageFull:'いっぱいで ほぞんできません',
    deleted:'けしました', delConfirm:'ほんとうに けしますか?', empty:'まだ なにも ありません',
    optional:'ぜんぶ 書かなくても だいじょうぶです。', today:'きょう',
    photo: {
      camera:'カメラで とる', roll:'しゃしんから えらぶ',
      cropTitle:'しゃしんを 切りとる', cropHint:'ゆびで うごかすか、やじるしで あわせて、スライダーで 大きさを かえます。',
      zoom:'大きさ', panUp:'うえへ', panDown:'したへ', panLeft:'ひだりへ', panRight:'みぎへ',
      make:'これで きめる', fail:'しゃしんを よみこめませんでした'
    }
  },
  set: {
    hNormal:'ふだんの せってい',
    hBackup:'きしゅへんこう(バックアップ)',
    fs:'もじの大きさ', fsSizes:['ふつう','大きい','とても大きい'],
    lang:'ことば / Language',
    theme:'いろ', themes:['みどり','みずいろ','しろ','くろ'],
    bgm:'BGM', bgms:['なし','みどりの音','あおの音'],
    sound:'タップ音', on:'ON', off:'OFF',
    country:'国', countryPick:'えらんで ください',
    bkHint:'あたらしい スマホに うつるときは、「かきだす」で ファイルを ほぞんして、あたらしい スマホで「よみこむ」を おしてください。',
    bkExport:'かきだす', bkImport:'よみこむ',
    exported:'かきだしました ✓', imported:'よみこみました ✓', importFail:'よみこめませんでした',
    note:'こたえや 書いた ことは ほぞん しません(アプリを 閉じるか、ホームに もどると 消えます)。ほぞん するのは せってい だけです。どこにも 送りません。',
    privacy:'プライバシーポリシー',
    credit:'アプリ開発：介護と支援の相談どころ そよぎ'
  },
  /* はじめての つかいかた(app.js openGuide・初回に必ず出す・SPEC_V1 4-1)。heads と bodies は同じ数。閉じるのは最後の「わかった」だけ */
  guide: {
    title:'つかいかた', step:'{n} / {m}', start:'わかった', again:'もういちど 見る',
    /* 国(1ページ目・国が2つ以上のときだけ・SPEC_V1 第9節) */
    countryNote:'えらんだ 国の 相談先と、その 国の 公的な ページの 情報を 出します。あとから せっていで かえられます。',
    countryNeed:'さきに 国を えらんで ください',
    heads:[
      'この アプリで できること',
      'これは 診断では ありません',
      'こたえは のこりません',
      'つらくて 消えたい 気持ちが あるとき'
    ],
    bodies:[
      '困りごとを ことばに して、相談先と、相談の ときに 確かめることが ある 名前を 見る アプリです。\nホームで 困りごとに 近い ものを 1つ えらぶと、問いが 1つずつ 出ます。',
      'ここに 出る 名前で「診断された」とは 言えません。\n病名が なくても、困りごとは そのまま 相談できます。',
      'こたえは どこにも 送りません。この 端末にも 残しません(アプリを 閉じるか、ホームに もどると 消えます)。\n残るのは、ことばや 文字の 大きさ などの せっていだけです。',
      'ホームの いちばん 上の ボタンから、24時間の 窓口を 見られます。'
    ]
  },
  screen: {
    /* 画面共通の部品(screens/ui.js) */
    ui: {
      src:'{org}『{title}』{url}(確認日 {date})',
      edited:'を加工して作成(そよぎ)',
      editedTr:'を加工して作成(そよぎ訳)',  // 出典と ちがう ことばで 読むとき
      ref:'を参考に作成(そよぎ)',
      quoted:'から引用(そよぎ訳)',      // 出典と ちがう ことばで 読むとき(アメリカの ページを 日本語で など)
      quotedSame:'から引用',            // 出典と 同じ ことばで 読むとき(国の srcLang と同じ)
      copy:'コピー', copied:'コピーしました', copyFail:'コピー できませんでした',
      close:'とじる',
      call:'電話を かける {tel}',
      text:'テキストを おくる {tel}',
      checked:'確認日 {date}。番号や時間は変わることがあります。',
      soon:'じゅんびちゅう',
      crisisBtn:'つらくて 消えたい 気持ちが ある',
      crisisHead:'いま つらいときは',
      countryHead:'{country}の 窓口'
    },
    home: {
      title:'えらぶ',
      lead:'いま 困って いる ことに 近い ものを 1つ えらんで ください。',
      other:'どれにも あてはまらない 困りごとも、そのまま 相談して かまいません。',
      /* data.js に まだ無いまとまりのラベル(「じゅんびちゅう」と並べる)。SPEC_V1 4-2 のラベル案 */
      labels:{
        mood:'気分が 落ちこむ・やる気が 出ない',
        anxiety:'不安・緊張が 強い',
        repeat:'確かめや くりかえしが やめにくい',
        after:'つらい できごとの あとが つづく',
        sleep:'眠りの 困りごと',
        eating:'食べることの 困りごと',
        habit:'お酒・ギャンブル・ゲームが やめにくい',
        attention:'注意・段取りの 困りごと',
        social:'人づきあい・こだわり・感覚の 困りごと',
        reading:'読み書き・計算の 困りごと',
        wave:'気分の 波が 大きい'
      }
    },
    flow: {
      step:'{n} / {m}', close:'とじる', back:'もどる', next:'つぎ',
      ownPh:'自分で 書く(1行・書かなくても だいじょうぶ)',
      linePh:'1行で(書かなくても だいじょうぶ)',
      optional:'書かなくても だいじょうぶです。',
      qScenes:'よく ある ことを えらんで ください(いくつでも)',
      qRecent:'さいきん それが あったのは、どんな ときでしたか',
      qRecentNo:'それが なかったのは、どんな ときでしたか',
      qSince:'いつから ですか',
      since:{
        w2:'この 1〜2週間', m1:'1か月 くらい', m6:'半年 くらい', y1:'1年より 前から',
        small:'小さい ころから', school:'学校に かよって いた ころにも あった', unknown:'わからない'
      },
      qSpread:'それが あるのは、どんな 場面ですか',
      spread:{ one:'ひとつの 場面だけ', many:'いくつもの 場面で(家・学校や 仕事・外など)', unknown:'わからない' },
      qDegree:'どれくらい 困って いますか',
      degree:{ bit:'すこし', much:'かなり', very:'とても(暮らしが まわらない)', effort:'がんばって なんとか 保っている' },
      qAsks:'相談先で して ほしい ことは ありますか(いくつでも)',
      qOthers:'まわりの 人から、いつもと ちがう・困っていると 言われた ことが ありますか',
      others:{ yes:'はい', no:'いいえ', unknown:'わからない' },
      gone:'もう いちど、ホームで 困りごとを えらんで ください。',
      toHome:'ホームへ'
    },
    result: {
      r1Head:'わたしの 困りごと',
      card:{
        trouble:'困っていること', recent:'最近あった場面', recentNo:'なかった場面', since:'いつから',
        spread:'場面の広さ', degree:'困り具合', others:'周りから言われたこと', asks:'してほしいこと'
      },
      cardSince:{
        w2:'この1〜2週間', m1:'1か月くらい', m6:'半年くらい', y1:'1年より前から',
        small:'小さい頃から', school:'学校に通っていた頃にもあった', unknown:'わからない'
      },
      cardSpread:{ one:'一つの場面だけ', many:'いくつもの場面で(家・学校や仕事・外など)', unknown:'わからない' },
      cardDegree:{ bit:'少し', much:'かなり', very:'とても(暮らしが回らない)', effort:'頑張って何とか保っている' },
      cardOthers:{ yes:'いつもと違う・困っていると言われたことがある', no:'言われたことはない', unknown:'わからない' },
      empty:'まだ なにも えらんで いません。',
      copy:'コピー', show:'大きく 見せる',
      copied:'コピーしました。ほかの アプリに はりつけた あとは けして かまいません',
      noName:'病名が なくても、困りごとは このまま 伝えられます。',
      mainLang:'{lang}で 見せる',             // 国の 主な ことばの カード(自分で 書いた 文は そのまま)
      backLang:'もとの ことばに もどす',
      junbi:'「相談と受診の前に」で 受診の じゅんびを する(困りごとの メモ・年表・昔の 資料)',
      back:'もどる', next:'つぎ', prev:'まえ', home:'ホームへ',
      r2Head:'相談先',
      meyasuHead:'国などの ページに ある 相談の めやす',
      generalHead:'国などの ページより',
      yourAns:'あなたが えらんだ こたえ',
      ansSince:'いつから: {v}', ansDegree:'困りぐあい: {v}', notChosen:'えらんで いません',
      same:'めやすの 文に 近いと 思ったら、相談して みてください。まよう ときも、困っているなら 相談して かまいません。',
      winHead:'相談先の 一覧',
      toNames:'名前の 一覧を 見る',
      r3Head:'相談するときに 確かめることが ある 名前',
      toLearn:'「{h}」を 読む', toLearnNote:'やさしく して ほしい ときの 頼み方の 例も のって います。'
    },
    names: {
      title:'名前の てびき',
      lead:'困りごとの まとまりを えらぶと、相談の ときに 確かめることが ある 名前の 一覧が 見られます。問いに 答えなくても 見られます。',
      back:'まとまりの 一覧へ もどる',
      pre:'相談した先で、医師などが 確かめることがある 名前です。同じ 困りごとでも、原因は いろいろです。この 一覧で『診断された』とは 言えません。相談しても、名前が つかない ことも あります。',
      howLead:'名前(診断名)の つけかたに ついて、国立精神・神経医療研究センターの ページには こう 書かれて います。',
      notHere:'ここに ない 名前の ことも あります。',
      noDoubt:'この一覧を、まわりの人を 疑う 材料に しないでください。'
    },
    madoguchi: {
      title:'相談先',
      nowHead:'いま つらいとき(24時間)',
      dayHead:'昼間に 相談する'
    },
    learn: {
      title:'知って おきたい こと',
      step:'{n} / {m}', prev:'まえ', next:'つぎ',
      srcHead:'出典', allSrcHead:'出典の 一覧'
    }
  }
};

/* ============ en ============ */
var en = {
  app: { name:'From Worries to Help - SOYOGI', short:'From Worries to Help', tagline:'Put your worries into words, and take a step toward help.' },
  nav: { home:'Choose', names:'Names guide', madoguchi:'Where to ask', learn:'Good to know', set:'Settings' },
  langName: { ja:'Japanese', en:'English' },   // language names for "Show in ..."
  common: {
    ok:'OK', cancel:'Cancel', save:'Save', del:'Delete', back:'Back', close:'Close',
    yes:'Yes', no:'No', add:'Add', edit:'Edit', next:'Next', prev:'Previous', done:'Done',
    saved:'Saved ✓', saveFail:'Could not save', storageFull:'Storage is full, could not save',
    deleted:'Deleted', delConfirm:'Really delete this?', empty:'Nothing here yet',
    optional:'You do not have to fill in everything.', today:'Today',
    photo: {
      camera:'Take a photo', roll:'Choose from photos',
      cropTitle:'Crop the photo', cropHint:'Drag with a finger or use the arrows, then change the size with the slider.',
      zoom:'Size', panUp:'Up', panDown:'Down', panLeft:'Left', panRight:'Right',
      make:'Use this', fail:'Could not load the photo'
    }
  },
  set: {
    hNormal:'Everyday settings',
    hBackup:'Changing phones (backup)',
    fs:'Text size', fsSizes:['Normal','Large','Very large'],
    lang:'ことば / Language',
    theme:'Color', themes:['Green','Light blue','White','Black'],
    bgm:'Music', bgms:['None','Green tone','Blue tone'],
    sound:'Tap sound', on:'ON', off:'OFF',
    country:'Country', countryPick:'Please choose',
    bkHint:'When you move to a new phone, tap "Export" to save a file, then tap "Import" on the new phone.',
    bkExport:'Export', bkImport:'Import',
    exported:'Exported ✓', imported:'Imported ✓', importFail:'Could not import',
    note:'Your answers and what you write are not saved (they disappear when you close the app or go back to Home). Only the settings are saved. Nothing is sent anywhere.',
    privacy:'Privacy policy',
    credit:'Developed by SOYOGI, a care and support consultation service'
  },
  guide: {
    title:'How to use', step:'{n} / {m}', start:'Got it', again:'Show again',
    countryNote:'The app shows help lines, and information from public pages, for the country you choose. You can change it later in Settings.',
    countryNeed:'Please choose a country first',
    heads:[
      'What this app does',
      'This is not a diagnosis',
      'Your answers are not kept',
      'If you feel so bad you want to disappear'
    ],
    bodies:[
      'Put your worries into words, and see where you can ask for help and the names a professional may check when you ask.\nOn Home, choose the one closest to your worry. Questions then come one at a time.',
      'Seeing a name here does not mean you have been "diagnosed".\nEven without the name of an illness, you can ask for help with your worries just as they are.',
      'Your answers are not sent anywhere, and they are not kept on this device either (they disappear when you close the app or go back to Home).\nOnly settings such as language and text size are kept.',
      'From the button at the very top of Home, you can see help lines that are open 24 hours.'
    ]
  },
  screen: {
    ui: {
      src:'{org} "{title}" {url} (checked {date})',
      edited:', adapted by SOYOGI',
      editedTr:', adapted and translated by SOYOGI',   // reading in a language other than the source's
      ref:', written by SOYOGI in its own words based on this page',
      quoted:', quoted in a translation by SOYOGI',   // reading in a language other than the source's
      quotedSame:', quoted',                           // reading in the source's own language (the country's srcLang)
      copy:'Copy', copied:'Copied', copyFail:'Could not copy',
      close:'Close',
      call:'Call {tel}',
      text:'Text {tel}',
      checked:'Checked on {date}. Numbers and hours may change.',
      soon:'Coming soon',
      crisisBtn:'I feel so bad I want to disappear',
      crisisHead:'If you are struggling right now',
      countryHead:'Help lines: {country}'   // "in the United States" needs "the", so no preposition
    },
    home: {
      title:'Choose',
      lead:'Choose the one closest to what is troubling you now.',
      other:'Even if your worry does not fit any of these, you can ask for help with it as it is.',
      labels:{
        mood:'Low mood, no energy',
        anxiety:'Strong worry or tension',
        repeat:'Hard to stop checking or repeating',
        after:'Still affected after a hard experience',
        sleep:'Trouble with sleep',
        eating:'Trouble with eating',
        habit:'Hard to stop drinking, gambling or gaming',
        attention:'Trouble with attention or planning',
        social:'Trouble with social life, routines or senses',
        reading:'Trouble with reading, writing or math',
        wave:'Big ups and downs in mood'
      }
    },
    flow: {
      step:'{n} / {m}', close:'Close', back:'Back', next:'Next',
      ownPh:'Write your own (one line, optional)',
      linePh:'One line (optional)',
      optional:'You do not have to write anything.',
      qScenes:'Choose what often happens (as many as you like)',
      qRecent:'When did it happen recently?',
      qRecentNo:'When did it not happen?',
      qSince:'Since when?',
      since:{
        w2:'The last 1 to 2 weeks', m1:'About a month', m6:'About half a year', y1:'More than a year',
        small:'Since I was little', school:'It was there when I was in school, too', unknown:'I am not sure'
      },
      qSpread:'Where does it happen?',
      spread:{ one:'Only in one kind of place', many:'In many places (home, school or work, outside)', unknown:'I am not sure' },
      qDegree:'How much does it bother you?',
      degree:{ bit:'A little', much:'Quite a lot', very:'Very much (daily life is not working)', effort:'I am barely holding on with a lot of effort' },
      qAsks:'Is there anything you would like the people you consult to do? (as many as you like)',
      qOthers:'Have people around you said you seem different from usual, or seem to be struggling?',
      others:{ yes:'Yes', no:'No', unknown:'I am not sure' },
      gone:'Please choose your worry on Home again.',
      toHome:'Go to Home'
    },
    result: {
      r1Head:'My worries',
      card:{
        trouble:'What I am struggling with', recent:'A recent time it happened', recentNo:'A time it did not happen', since:'Since when',
        spread:'Where it happens', degree:'How much it affects me', others:'What people around me have said', asks:'What I would like'
      },
      cardSince:{
        w2:'The last 1 to 2 weeks', m1:'About a month', m6:'About half a year', y1:'More than a year',
        small:'Since I was little', school:'It was also there when I was in school', unknown:'Not sure'
      },
      cardSpread:{ one:'Only in one kind of situation', many:'In many situations (home, school or work, outside)', unknown:'Not sure' },
      cardDegree:{ bit:'A little', much:'Quite a lot', very:'Very much (daily life is not working)', effort:'Barely holding on with a lot of effort' },
      cardOthers:{ yes:'People have said I seem different from usual or seem to be struggling', no:'No one has said so', unknown:'Not sure' },
      empty:'Nothing chosen yet.',
      copy:'Copy', show:'Show it large',
      copied:'Copied. After you paste it into another app, you can delete it.',
      noName:'Even without the name of an illness, you can share your worries just like this.',
      mainLang:'Show in {lang}',               // the card in the country's main language (what you typed stays as is)
      backLang:'Back to my language',
      junbi:'Prepare for a visit with "Before the Visit" (notes on your worries, a timeline, old records)',
      back:'Back', next:'Next', prev:'Previous', home:'Go to Home',
      r2Head:'Where to ask',
      meyasuHead:'A guideline for asking for help, from a public institution\'s page',
      generalHead:'From public institutions\' pages',
      yourAns:'The answers you chose',
      ansSince:'Since when: {v}', ansDegree:'How much it bothers you: {v}', notChosen:'Not chosen',
      same:'If you feel it is close to the guideline, please consider asking for help. Even if you are unsure, you can ask if you are struggling.',
      winHead:'Places to ask',
      toNames:'See the list of names',
      r3Head:'Names that may be checked when you ask for help',
      toLearn:'Read: “{h}”', toLearnNote:'It also has examples of how to ask someone to be kind to you.'
    },
    names: {
      title:'Names guide',
      lead:'Choose a group of worries to see the list of names that may be checked when you ask for help. You can see it without answering any questions.',
      back:'Back to the groups',
      pre:'These are names that a doctor or other professional may check where you ask for help. The same worry can have many different causes. This list does not mean you have been "diagnosed". Even after you ask for help, you may not be given any name.',
      howLead:'About how names (diagnoses) are given, a page of the National Center of Neurology and Psychiatry says:',
      notHere:'It may also be a name that is not on this list.',
      noDoubt:'Please do not use this list to doubt the people around you.'
    },
    madoguchi: {
      title:'Where to ask',
      nowHead:'When you are struggling right now (24 hours)',
      dayHead:'Ask during the day'
    },
    learn: {
      title:'Good to know',
      step:'{n} / {m}', prev:'Previous', next:'Next',
      srcHead:'Sources', allSrcHead:'All sources'
    }
  }
};

window.KOMARI_I18N = { ja: ja, en: en };
})();
