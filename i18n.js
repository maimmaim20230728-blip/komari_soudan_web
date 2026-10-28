/* 困りごとから相談へ・そよぎ 文言テーブル(そよぎアプリ・キット v1・ことばは国に合わせて足していく=SPEC_V1 第9節)
   ・window.KOMARI_I18N = { ja, en, fr, de, es }
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
  langName: { ja:'日本語', en:'英語', fr:'フランス語', de:'ドイツ語', es:'スペイン語', nl:'オランダ語' },   // 「〇〇で 見せる」のことばの名前
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
      upd:'(ページの更新 {upd})',      // ページの最終更新日(フランスの出典・SPEC_V1 11-2)
      updNone:'(ページに更新日の記載なし)',
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
  langName: { ja:'Japanese', en:'English', fr:'French', de:'German', es:'Spanish', nl:'Dutch' },   // language names for "Show in ..."
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
      upd:' (page updated {upd})',                     // the page's last update date (French sources)
      updNone:' (no update date on the page)',
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

/* ============ fr(2026-10-17 多国籍版・フランスの国と合わせて足す。アプリの正式名は英語名のまま=ヒロさんが決めた名前) ============ */
var fr = {
  app: { name:'From Worries to Help - SOYOGI', short:'From Worries to Help', tagline:'Mettre vos soucis en mots, et faire un pas vers l’aide.' },
  nav: { home:'Choisir', names:'Guide des noms', madoguchi:'Où demander', learn:'Bon à savoir', set:'Réglages' },
  langName: { ja:'japonais', en:'anglais', fr:'français', de:'allemand', es:'espagnol', nl:'néerlandais' },   // « Afficher en ... »
  common: {
    ok:'OK', cancel:'Annuler', save:'Enregistrer', del:'Supprimer', back:'Retour', close:'Fermer',
    yes:'Oui', no:'Non', add:'Ajouter', edit:'Modifier', next:'Suivant', prev:'Précédent', done:'Terminé',
    saved:'Enregistré ✓', saveFail:'Impossible d’enregistrer', storageFull:'Mémoire pleine, impossible d’enregistrer',
    deleted:'Supprimé', delConfirm:'Voulez-vous vraiment supprimer ?', empty:'Rien pour l’instant',
    optional:'Inutile de tout remplir.', today:'Aujourd’hui',
    photo: {
      camera:'Prendre une photo', roll:'Choisir une photo',
      cropTitle:'Recadrer la photo', cropHint:'Déplacez avec le doigt ou les flèches, puis changez la taille avec le curseur.',
      zoom:'Taille', panUp:'Haut', panDown:'Bas', panLeft:'Gauche', panRight:'Droite',
      make:'Utiliser', fail:'Impossible de charger la photo'
    }
  },
  set: {
    hNormal:'Réglages courants',
    hBackup:'Changer de téléphone (sauvegarde)',
    fs:'Taille du texte', fsSizes:['Normale','Grande','Très grande'],
    lang:'ことば / Language',
    theme:'Couleur', themes:['Vert','Bleu clair','Blanc','Noir'],
    bgm:'Musique', bgms:['Aucune','Ton vert','Ton bleu'],
    sound:'Son au toucher', on:'Activé', off:'Désactivé',
    country:'Pays', countryPick:'Choisissez',
    bkHint:'Quand vous changez de téléphone, touchez « Exporter » pour enregistrer un fichier, puis « Importer » sur le nouveau téléphone.',
    bkExport:'Exporter', bkImport:'Importer',
    exported:'Exporté ✓', imported:'Importé ✓', importFail:'Impossible d’importer',
    note:'Vos réponses et ce que vous écrivez ne sont pas enregistrés (ils disparaissent quand vous fermez l’appli ou revenez à l’accueil). Seuls les réglages sont enregistrés. Rien n’est envoyé.',
    privacy:'Politique de confidentialité',
    credit:'Développée par SOYOGI, un lieu de conseil pour les soins et l’accompagnement'
  },
  guide: {
    title:'Mode d’emploi', step:'{n} / {m}', start:'J’ai compris', again:'Revoir',
    countryNote:'L’appli affiche les lignes d’aide et des informations issues de pages publiques du pays choisi. Vous pourrez le changer plus tard dans les réglages.',
    countryNeed:'Choisissez d’abord un pays',
    heads:[
      'Ce que fait cette appli',
      'Ce n’est pas un diagnostic',
      'Vos réponses ne sont pas gardées',
      'Si vous allez si mal que vous voulez disparaître'
    ],
    bodies:[
      'Mettez vos soucis en mots, et voyez où demander de l’aide ainsi que les noms que des professionnels peuvent vérifier quand vous consultez.\nSur l’accueil, choisissez ce qui ressemble le plus à votre souci. Les questions viennent ensuite une par une.',
      'Voir un nom ici ne veut pas dire que vous avez reçu un « diagnostic ».\nMême sans nom de maladie, vous pouvez demander de l’aide pour vos soucis tels qu’ils sont.',
      'Vos réponses ne sont envoyées nulle part, et elles ne sont pas gardées sur cet appareil (elles disparaissent quand vous fermez l’appli ou revenez à l’accueil).\nSeuls les réglages, comme la langue et la taille du texte, sont gardés.',
      'Avec le bouton tout en haut de l’accueil, vous pouvez voir des lignes d’aide ouvertes 24 h sur 24.'
    ]
  },
  screen: {
    ui: {
      src:'{org} « {title} » {url} (consulté le {date})',
      edited:', adapté par SOYOGI',
      editedTr:', adapté et traduit par SOYOGI',
      ref:', rédigé par SOYOGI avec ses propres mots à partir de cette page',
      quoted:', cité dans une traduction de SOYOGI',
      quotedSame:', cité',
      upd:' (mise à jour de la page : {upd})',
      updNone:' (date de mise à jour non indiquée)',
      copy:'Copier', copied:'Copié', copyFail:'Impossible de copier',
      close:'Fermer',
      call:'Appeler le {tel}',
      text:'Envoyer un SMS au {tel}',
      checked:'Vérifié le {date}. Les numéros et les horaires peuvent changer.',
      soon:'Bientôt',
      crisisBtn:'Je vais si mal que je veux disparaître',
      crisisHead:'Si vous allez mal en ce moment',
      countryHead:'Lignes d’aide : {country}'
    },
    home: {
      title:'Choisir',
      lead:'Choisissez ce qui ressemble le plus à ce qui vous préoccupe en ce moment.',
      other:'Même si votre souci ne ressemble à aucun de ces choix, vous pouvez demander de l’aide tel quel.',
      labels:{
        mood:'Moral bas, plus d’énergie',
        anxiety:'Inquiétude ou tension fortes',
        repeat:'Difficile d’arrêter de vérifier ou de répéter',
        after:'Un événement difficile pèse encore',
        sleep:'Soucis de sommeil',
        eating:'Soucis avec l’alimentation',
        habit:'Difficile d’arrêter l’alcool, les jeux d’argent ou les jeux vidéo',
        attention:'Soucis d’attention ou d’organisation',
        social:'Soucis de relations, d’habitudes ou de sensations',
        reading:'Soucis de lecture, d’écriture ou de calcul',
        wave:'Grandes variations d’humeur'
      }
    },
    flow: {
      step:'{n} / {m}', close:'Fermer', back:'Retour', next:'Suivant',
      ownPh:'Écrire vous-même (une ligne, facultatif)',
      linePh:'Une ligne (facultatif)',
      optional:'Vous pouvez ne rien écrire.',
      qScenes:'Choisissez ce qui arrive souvent (autant que vous voulez)',
      qRecent:'Quand est-ce arrivé récemment ?',
      qRecentNo:'Quand est-ce que ce n’est pas arrivé ?',
      qSince:'Depuis quand ?',
      since:{
        w2:'Ces 1 à 2 dernières semaines', m1:'Environ un mois', m6:'Environ six mois', y1:'Plus d’un an',
        small:'Depuis mes premières années', school:'C’était déjà là pendant ma scolarité', unknown:'Je ne sais pas'
      },
      qSpread:'Où cela arrive-t-il ?',
      spread:{ one:'Dans une seule sorte de situation', many:'Dans plusieurs situations (maison, école ou travail, dehors)', unknown:'Je ne sais pas' },
      qDegree:'À quel point cela vous gêne-t-il ?',
      degree:{ bit:'Un peu', much:'Beaucoup', very:'Énormément (la vie quotidienne ne suit plus)', effort:'Je tiens à peine, avec beaucoup d’efforts' },
      qAsks:'Y a-t-il quelque chose que vous aimeriez que les personnes consultées fassent ? (autant que vous voulez)',
      qOthers:'Des proches vous ont-ils dit que vous ne sembliez pas comme d’habitude, ou en difficulté ?',
      others:{ yes:'Oui', no:'Non', unknown:'Je ne sais pas' },
      gone:'Choisissez à nouveau votre souci sur l’accueil.',
      toHome:'Aller à l’accueil'
    },
    result: {
      r1Head:'Mes difficultés',
      card:{
        trouble:'Ce qui me pose problème', recent:'Une fois récente où c’est arrivé', recentNo:'Une fois où ce n’est pas arrivé', since:'Depuis quand',
        spread:'Où cela arrive', degree:'À quel point cela me gêne', others:'Ce que mes proches ont dit', asks:'Ce que je souhaiterais'
      },
      cardSince:{
        w2:'Ces 1 à 2 dernières semaines', m1:'Environ un mois', m6:'Environ six mois', y1:'Plus d’un an',
        small:'Depuis mes premières années', school:'C’était déjà là pendant ma scolarité', unknown:'Je ne sais pas'
      },
      cardSpread:{ one:'Dans une seule sorte de situation', many:'Dans plusieurs situations (maison, école ou travail, dehors)', unknown:'Je ne sais pas' },
      cardDegree:{ bit:'Un peu', much:'Beaucoup', very:'Énormément (la vie quotidienne ne suit plus)', effort:'Je tiens à peine, avec beaucoup d’efforts' },
      cardOthers:{ yes:'Des proches m’ont dit que je ne semblais pas comme d’habitude ou que j’étais en difficulté', no:'Personne ne me l’a dit', unknown:'Je ne sais pas' },
      empty:'Rien de choisi pour l’instant.',
      copy:'Copier', show:'Afficher en grand',
      copied:'Copié. Après l’avoir collé dans une autre appli, vous pouvez l’effacer.',
      noName:'Même sans nom de maladie, vous pouvez partager vos soucis tels quels.',
      mainLang:'Afficher en {lang}',
      backLang:'Revenir à ma langue',
      junbi:'Préparer une consultation avec « Avant la consultation » (notes sur vos soucis, chronologie, anciens documents)',
      back:'Retour', next:'Suivant', prev:'Précédent', home:'Aller à l’accueil',
      r2Head:'Où demander',
      meyasuHead:'Un repère pour demander de l’aide, tiré d’une page publique',
      generalHead:'Extrait de pages publiques',
      yourAns:'Les réponses que vous avez choisies',
      ansSince:'Depuis quand : {v}', ansDegree:'À quel point cela vous gêne : {v}', notChosen:'Non choisi',
      same:'Si cela vous semble proche du repère, pensez à demander de l’aide. Même si vous hésitez, vous pouvez demander de l’aide si vous êtes en difficulté.',
      winHead:'Où demander de l’aide',
      toNames:'Voir la liste des noms',
      r3Head:'Noms qui peuvent être vérifiés quand vous demandez de l’aide',
      toLearn:'Lire : « {h} »', toLearnNote:'On y trouve aussi des exemples pour demander qu’on soit doux avec vous.'
    },
    names: {
      title:'Guide des noms',
      lead:'Choisissez un groupe de soucis pour voir la liste des noms qui peuvent être vérifiés quand vous demandez de l’aide. Vous pouvez la voir sans répondre aux questions.',
      back:'Retour aux groupes',
      pre:'Ce sont des noms qu’un médecin ou un autre professionnel peut vérifier quand vous demandez de l’aide. Un même souci peut avoir des causes très différentes. Cette liste ne veut pas dire que vous avez reçu un « diagnostic ». Même après avoir demandé de l’aide, il arrive qu’aucun nom ne soit donné.',
      howLead:'Sur la façon dont les noms (diagnostics) sont donnés, une page du Centre national de neurologie et de psychiatrie du Japon indique :',
      notHere:'Il peut aussi s’agir d’un nom qui n’est pas dans cette liste.',
      noDoubt:'N’utilisez pas cette liste pour mettre en doute les personnes autour de vous.'
    },
    madoguchi: {
      title:'Où demander',
      nowHead:'Si vous allez mal en ce moment (24 h/24)',
      dayHead:'Demander en journée'
    },
    learn: {
      title:'Bon à savoir',
      step:'{n} / {m}', prev:'Précédent', next:'Suivant',
      srcHead:'Sources', allSrcHead:'Toutes les sources'
    }
  }
};

/* ============ de(2026-10-21 多国籍版・ドイツの国と合わせて足す。アプリの正式名は英語名のまま。ていねいな Sie・引用符は „ “) ============ */
var SHY = String.fromCharCode(173);
var de = {
  app: { name:'From Worries to Help - SOYOGI', short:'From Worries to Help', tagline:'Sorgen in Worte fassen und einen Schritt zur Hilfe gehen.' },
  /* 下のナビは 375px で1つ 75px ほど。長い語は SHY(やわらかいハイフン・折れたときだけ「-」が出る)で折る(hyphens:auto はドイツ語の辞書が無い端末で効かない) */
  nav: { home:'Auswählen', names:'Namens' + SHY + 'übersicht', madoguchi:'Anlauf' + SHY + 'stellen', learn:'Gut zu wissen', set:'Einstel' + SHY + 'lungen' },
  langName: { ja:'Japanisch', en:'Englisch', fr:'Französisch', de:'Deutsch', es:'Spanisch', nl:'Niederländisch' },   // „Auf ... anzeigen“
  common: {
    ok:'OK', cancel:'Abbrechen', save:'Speichern', del:'Löschen', back:'Zurück', close:'Schließen',
    yes:'Ja', no:'Nein', add:'Hinzufügen', edit:'Ändern', next:'Weiter', prev:'Vorherige', done:'Fertig',
    saved:'Gespeichert ✓', saveFail:'Speichern nicht möglich', storageFull:'Der Speicher ist voll, Speichern nicht möglich',
    deleted:'Gelöscht', delConfirm:'Wirklich löschen?', empty:'Noch nichts vorhanden',
    optional:'Sie müssen nicht alles ausfüllen.', today:'Heute',
    photo: {
      camera:'Foto aufnehmen', roll:'Foto auswählen',
      cropTitle:'Foto zuschneiden', cropHint:'Mit dem Finger oder den Pfeilen verschieben und die Größe mit dem Schieberegler ändern.',
      zoom:'Größe', panUp:'Nach oben', panDown:'Nach unten', panLeft:'Nach links', panRight:'Nach rechts',
      make:'Übernehmen', fail:'Das Foto konnte nicht geladen werden'
    }
  },
  set: {
    hNormal:'Grundeinstellungen',
    hBackup:'Smartphone wechseln (Sicherung)',
    fs:'Textgröße', fsSizes:['Normal','Groß','Sehr groß'],
    lang:'ことば / Language',
    theme:'Farbe', themes:['Grün','Hellblau','Weiß','Schwarz'],
    bgm:'Musik', bgms:['Keine','Grüner Klang','Blauer Klang'],
    sound:'Tippton', on:'AN', off:'AUS',
    country:'Land', countryPick:'Bitte auswählen',
    bkHint:'Wenn Sie ein neues Smartphone nutzen, tippen Sie auf „Exportieren“, um eine Datei zu speichern, und dann auf dem neuen Smartphone auf „Importieren“.',
    bkExport:'Exportieren', bkImport:'Importieren',
    exported:'Exportiert ✓', imported:'Importiert ✓', importFail:'Importieren nicht möglich',
    note:'Ihre Antworten und das, was Sie schreiben, werden nicht gespeichert (sie verschwinden, wenn Sie die App schließen oder zur Startseite zurückgehen). Gespeichert werden nur die Einstellungen. Es wird nichts verschickt.',
    privacy:'Datenschutzerklärung',
    credit:'Entwickelt von SOYOGI, einem Beratungsangebot für Pflege und Unterstützung'
  },
  guide: {
    title:'Anleitung', step:'{n} / {m}', start:'Verstanden', again:'Noch einmal ansehen',
    countryNote:'Die App zeigt Anlaufstellen und Informationen von öffentlichen Seiten des gewählten Landes. Sie können das Land später in den Einstellungen ändern.',
    countryNeed:'Bitte wählen Sie zuerst ein Land',
    heads:[
      'Was diese App kann',
      'Das ist keine Diagnose',
      'Ihre Antworten werden nicht aufbewahrt',
      'Wenn es Ihnen so schlecht geht, dass Sie verschwinden möchten'
    ],
    bodies:[
      'Fassen Sie Ihre Sorgen in Worte und sehen Sie, wo Sie um Rat fragen können und welche Namen Fachleute prüfen können, wenn Sie sich beraten lassen.\nWählen Sie auf der Startseite das, was Ihrer Sorge am nächsten kommt. Danach kommen die Fragen einzeln.',
      'Wenn hier ein Name erscheint, heißt das nicht, dass Sie eine „Diagnose“ bekommen haben.\nAuch ohne den Namen einer Krankheit können Sie mit Ihren Sorgen, so wie sie sind, um Rat fragen.',
      'Ihre Antworten werden nirgendwohin geschickt und auch auf diesem Gerät nicht aufbewahrt (sie verschwinden, wenn Sie die App schließen oder zur Startseite zurückgehen).\nAufbewahrt werden nur Einstellungen wie Sprache und Textgröße.',
      'Über die Schaltfläche ganz oben auf der Startseite sehen Sie Anlaufstellen, die rund um die Uhr erreichbar sind.'
    ]
  },
  screen: {
    ui: {
      src:'{org} „{title}“ {url} (abgerufen am {date})',
      edited:', bearbeitet von SOYOGI',
      editedTr:', bearbeitet und übersetzt von SOYOGI',
      ref:', von SOYOGI in eigenen Worten nach dieser Seite geschrieben',
      quoted:', zitiert in einer Übersetzung von SOYOGI',
      quotedSame:', zitiert',
      upd:' (Stand der Seite: {upd})',
      updNone:' (kein Datum auf der Seite angegeben)',
      copy:'Kopieren', copied:'Kopiert', copyFail:'Kopieren nicht möglich',
      close:'Schließen',
      call:'{tel} anrufen',
      text:'SMS an {tel} senden',
      checked:'Stand: {date}. Nummern und Zeiten können sich ändern.',
      soon:'In Vorbereitung',
      crisisBtn:'Es geht mir so schlecht, dass ich verschwinden möchte',
      crisisHead:'Wenn es Ihnen gerade schlecht geht',
      countryHead:'Anlaufstellen: {country}'
    },
    home: {
      title:'Auswählen',
      lead:'Wählen Sie das, was dem, was Sie gerade belastet, am nächsten kommt.',
      other:'Auch wenn Ihre Sorge zu keinem Punkt passt, können Sie damit, so wie sie ist, um Rat fragen.',
      labels:{
        mood:'Gedrückte Stimmung, keine Energie',
        anxiety:'Starke Sorgen oder Anspannung',
        repeat:'Schwer, mit Kontrollieren oder Wiederholen aufzuhören',
        after:'Ein schweres Erlebnis wirkt noch nach',
        sleep:'Schwierigkeiten mit dem Schlaf',
        eating:'Schwierigkeiten mit dem Essen',
        habit:'Schwer, mit Alkohol, Glücksspiel oder Videospielen aufzuhören',
        attention:'Schwierigkeiten mit Aufmerksamkeit oder Planung',
        social:'Schwierigkeiten mit Kontakten, Gewohnheiten oder Sinneseindrücken',
        reading:'Schwierigkeiten mit Lesen, Schreiben oder Rechnen',
        wave:'Starke Stimmungsschwankungen'
      }
    },
    flow: {
      step:'{n} / {m}', close:'Schließen', back:'Zurück', next:'Weiter',
      ownPh:'Selbst schreiben (eine Zeile, freiwillig)',
      linePh:'Eine Zeile (freiwillig)',
      optional:'Sie müssen nichts schreiben.',
      qScenes:'Wählen Sie, was oft vorkommt (so viel Sie möchten)',
      qRecent:'Wann ist es zuletzt vorgekommen?',
      qRecentNo:'Wann ist es nicht vorgekommen?',
      qSince:'Seit wann?',
      since:{
        w2:'Die letzten 1 bis 2 Wochen', m1:'Etwa einen Monat', m6:'Etwa ein halbes Jahr', y1:'Länger als ein Jahr',
        small:'Seit meinen ersten Lebensjahren', school:'Es war auch schon in meiner Schulzeit da', unknown:'Ich weiß es nicht'
      },
      qSpread:'Wo kommt es vor?',
      spread:{ one:'Nur in einer Art von Situation', many:'In vielen Situationen (zu Hause, Schule oder Arbeit, unterwegs)', unknown:'Ich weiß es nicht' },
      qDegree:'Wie sehr belastet es Sie?',
      degree:{ bit:'Ein wenig', much:'Ziemlich', very:'Sehr (der Alltag funktioniert nicht mehr)', effort:'Ich halte mit großer Mühe gerade noch durch' },
      qAsks:'Was wünschen Sie sich von den Menschen, an die Sie sich wenden? (so viel Sie möchten)',
      qOthers:'Haben Menschen in Ihrem Umfeld gesagt, dass Sie anders als sonst wirken oder es Ihnen schwerzufallen scheint?',
      others:{ yes:'Ja', no:'Nein', unknown:'Ich weiß es nicht' },
      gone:'Bitte wählen Sie Ihre Sorge noch einmal auf der Startseite.',
      toHome:'Zur Startseite'
    },
    result: {
      r1Head:'Meine Schwierigkeiten',
      card:{
        trouble:'Womit ich Schwierigkeiten habe', recent:'Wann es zuletzt vorkam', recentNo:'Wann es nicht vorkam', since:'Seit wann',
        spread:'Wo es vorkommt', degree:'Wie sehr es mich belastet', others:'Was Menschen in meinem Umfeld gesagt haben', asks:'Was ich mir wünsche'
      },
      cardSince:{
        w2:'Die letzten 1 bis 2 Wochen', m1:'Etwa einen Monat', m6:'Etwa ein halbes Jahr', y1:'Länger als ein Jahr',
        small:'Seit meinen ersten Lebensjahren', school:'Es war auch schon in meiner Schulzeit da', unknown:'Weiß ich nicht'
      },
      cardSpread:{ one:'Nur in einer Art von Situation', many:'In vielen Situationen (zu Hause, Schule oder Arbeit, unterwegs)', unknown:'Weiß ich nicht' },
      cardDegree:{ bit:'Ein wenig', much:'Ziemlich', very:'Sehr (der Alltag funktioniert nicht mehr)', effort:'Ich halte mit großer Mühe gerade noch durch' },
      cardOthers:{ yes:'Mir wurde gesagt, dass ich anders als sonst wirke oder es mir schwerzufallen scheint', no:'Das hat mir niemand gesagt', unknown:'Weiß ich nicht' },
      empty:'Noch nichts ausgewählt.',
      copy:'Kopieren', show:'Groß anzeigen',
      copied:'Kopiert. Nachdem Sie es in eine andere App eingefügt haben, können Sie es löschen.',
      noName:'Auch ohne den Namen einer Krankheit können Sie Ihre Sorgen genau so mitteilen.',
      mainLang:'Auf {lang} anzeigen',
      backLang:'Zurück zu meiner Sprache',
      junbi:'Einen Arztbesuch mit „Vor dem Arztbesuch“ vorbereiten (Notizen zu Ihren Sorgen, ein Zeitstrahl, alte Unterlagen)',
      back:'Zurück', next:'Weiter', prev:'Vorherige', home:'Zur Startseite',
      r2Head:'Anlaufstellen',
      meyasuHead:'Ein Anhaltspunkt, sich Rat zu holen (von einer öffentlichen Seite)',
      generalHead:'Von öffentlichen Seiten',
      yourAns:'Die Antworten, die Sie gewählt haben',
      ansSince:'Seit wann: {v}', ansDegree:'Wie sehr es Sie belastet: {v}', notChosen:'Nicht gewählt',
      same:'Wenn Sie finden, dass es dem Anhaltspunkt nahekommt, holen Sie sich gern Rat. Auch wenn Sie unsicher sind: Wenn es Ihnen schwerfällt, dürfen Sie um Rat fragen.',
      winHead:'Wo Sie um Rat fragen können',
      toNames:'Liste der Namen ansehen',
      r3Head:'Namen, die geprüft werden können, wenn Sie um Rat fragen',
      toLearn:'Lesen: „{h}“', toLearnNote:'Dort finden Sie auch Beispiele, wie Sie darum bitten können, freundlich mit Ihnen umzugehen.'
    },
    names: {
      title:'Namensübersicht',
      lead:'Wählen Sie eine Gruppe von Sorgen, um die Liste der Namen zu sehen, die geprüft werden können, wenn Sie um Rat fragen. Sie können sie ansehen, ohne Fragen zu beantworten.',
      back:'Zurück zu den Gruppen',
      pre:'Das sind Namen, die eine Ärztin, ein Arzt oder andere Fachleute prüfen können, wenn Sie um Rat fragen. Dieselbe Sorge kann ganz verschiedene Ursachen haben. Diese Liste heißt nicht, dass Sie eine „Diagnose“ bekommen haben. Auch wenn Sie um Rat fragen, wird manchmal kein Name vergeben.',
      howLead:'Dazu, wie Namen (Diagnosen) vergeben werden, steht auf einer Seite des japanischen Nationalen Zentrums für Neurologie und Psychiatrie:',
      notHere:'Es kann auch ein Name sein, der nicht auf dieser Liste steht.',
      noDoubt:'Bitte nutzen Sie diese Liste nicht, um an Menschen in Ihrem Umfeld zu zweifeln.'
    },
    madoguchi: {
      title:'Anlaufstellen',
      nowHead:'Wenn es Ihnen gerade schlecht geht (rund um die Uhr)',
      dayHead:'Tagsüber um Rat fragen'
    },
    learn: {
      title:'Gut zu wissen',
      step:'{n} / {m}', prev:'Vorherige', next:'Weiter',
      srcHead:'Quellen', allSrcHead:'Alle Quellen'
    }
  }
};

/* ============ es(2026-10-22 多国籍版・スペインの国と合わせて足す。アプリの正式名は英語名のまま。読み手は tú・引用符は « »(RAE がまず勧める形)・¿ ¡ を付ける) ============ */
var es = {
  app: { name:'From Worries to Help - SOYOGI', short:'From Worries to Help', tagline:'Poner en palabras lo que te preocupa y dar un paso hacia la ayuda.' },
  nav: { home:'Elegir', names:'Guía de nombres', madoguchi:'Dónde consultar', learn:'Conviene saber', set:'Ajustes' },
  langName: { ja:'japonés', en:'inglés', fr:'francés', de:'alemán', es:'español', nl:'neerlandés' },   // «Mostrar en ...»
  common: {
    ok:'OK', cancel:'Cancelar', save:'Guardar', del:'Borrar', back:'Atrás', close:'Cerrar',
    yes:'Sí', no:'No', add:'Añadir', edit:'Cambiar', next:'Siguiente', prev:'Anterior', done:'Listo',
    saved:'Guardado ✓', saveFail:'No se ha podido guardar', storageFull:'No queda espacio; no se ha podido guardar',
    deleted:'Borrado', delConfirm:'¿Seguro que quieres borrarlo?', empty:'Todavía no hay nada',
    optional:'No hace falta rellenarlo todo.', today:'Hoy',
    photo: {
      camera:'Hacer una foto', roll:'Elegir una foto',
      cropTitle:'Recortar la foto', cropHint:'Muévela con el dedo o con las flechas y cambia el tamaño con el control deslizante.',
      zoom:'Tamaño', panUp:'Arriba', panDown:'Abajo', panLeft:'Izquierda', panRight:'Derecha',
      make:'Usar esta', fail:'No se ha podido cargar la foto'
    }
  },
  set: {
    hNormal:'Ajustes básicos',
    hBackup:'Cambiar de móvil (copia de seguridad)',
    fs:'Tamaño del texto', fsSizes:['Normal','Grande','Muy grande'],
    lang:'ことば / Language',
    theme:'Color', themes:['Verde','Azul claro','Blanco','Negro'],
    bgm:'Música', bgms:['Ninguna','Sonido verde','Sonido azul'],
    sound:'Sonido al tocar', on:'Activado', off:'Desactivado',
    country:'País', countryPick:'Elige uno',
    bkHint:'Si cambias de móvil, toca «Exportar» para guardar un archivo y, en el móvil nuevo, toca «Importar».',
    bkExport:'Exportar', bkImport:'Importar',
    exported:'Exportado ✓', imported:'Importado ✓', importFail:'No se ha podido importar',
    note:'Tus respuestas y lo que escribas no se guardan (desaparecen al cerrar la app o al volver al inicio). Solo se guardan los ajustes. No se envía nada a ningún sitio.',
    privacy:'Política de privacidad',
    credit:'Desarrollado por SOYOGI, un servicio de consulta sobre cuidados y apoyo'
  },
  guide: {
    title:'Cómo se usa', step:'{n} / {m}', start:'Entendido', again:'Ver otra vez',
    countryNote:'La app muestra lugares de ayuda e información de páginas públicas del país que elijas. Puedes cambiarlo después en Ajustes.',
    countryNeed:'Primero elige un país',
    heads:[
      'Qué puedes hacer con esta app',
      'Esto no es un diagnóstico',
      'Tus respuestas no se guardan',
      'Si te sientes tan mal que quieres desaparecer'
    ],
    bodies:[
      'Pon en palabras lo que te preocupa y mira dónde puedes pedir ayuda y qué nombres pueden comprobar los profesionales cuando consultes.\nEn el inicio, elige lo que más se parezca a lo que te pasa. Después, las preguntas salen de una en una.',
      'Que aparezca aquí un nombre no quiere decir que tengas un «diagnóstico».\nAunque no tengas el nombre de una enfermedad, puedes pedir ayuda con lo que te preocupa, tal como es.',
      'Tus respuestas no se envían a ningún sitio y tampoco se guardan en este dispositivo (desaparecen al cerrar la app o al volver al inicio).\nSolo se guardan ajustes como el idioma y el tamaño del texto.',
      'Con el botón de arriba del todo en el inicio, puedes ver lugares de ayuda que atienden las 24 horas.'
    ]
  },
  screen: {
    ui: {
      src:'{org} «{title}» {url} (consultado el {date})',
      edited:', adaptado por SOYOGI',
      editedTr:', adaptado y traducido por SOYOGI',
      ref:', escrito por SOYOGI con sus propias palabras a partir de esta página',
      quoted:', citado en una traducción de SOYOGI',
      quotedSame:', citado',
      upd:' (página actualizada el {upd})',
      updNone:' (la página no indica fecha de actualización)',
      copy:'Copiar', copied:'Copiado', copyFail:'No se ha podido copiar',
      close:'Cerrar',
      call:'Llamar al {tel}',
      text:'Enviar un SMS al {tel}',
      checked:'Consultado el {date}. Los números y los horarios pueden cambiar.',
      soon:'En preparación',
      crisisBtn:'Me siento tan mal que quiero desaparecer',
      crisisHead:'Si ahora lo estás pasando mal',
      countryHead:'Lugares de ayuda: {country}'
    },
    home: {
      title:'Elegir',
      lead:'Elige lo que más se parezca a lo que te preocupa ahora.',
      other:'Aunque lo que te pasa no encaje en ninguna de estas opciones, puedes pedir ayuda tal como es.',
      labels:{
        mood:'Ánimo bajo, sin energía',
        anxiety:'Mucha preocupación o tensión',
        repeat:'Me cuesta dejar de comprobar o de repetir',
        after:'Una experiencia dura me sigue afectando',
        sleep:'Dificultades con el sueño',
        eating:'Dificultades con la comida',
        habit:'Me cuesta dejar el alcohol, las apuestas o los videojuegos',
        attention:'Dificultades de atención u organización',
        social:'Dificultades con el trato, las rutinas o los sentidos',
        reading:'Dificultades para leer, escribir o calcular',
        wave:'Grandes altibajos de ánimo'
      }
    },
    flow: {
      step:'{n} / {m}', close:'Cerrar', back:'Atrás', next:'Siguiente',
      ownPh:'Escríbelo tú (una línea, si quieres)',
      linePh:'Una línea (si quieres)',
      optional:'No hace falta que escribas nada.',
      qScenes:'Elige lo que te pasa a menudo (todo lo que quieras)',
      qRecent:'¿Cuándo pasó la última vez?',
      qRecentNo:'¿Cuándo no pasó?',
      qSince:'¿Desde cuándo?',
      since:{
        w2:'Las últimas 1 o 2 semanas', m1:'Más o menos un mes', m6:'Más o menos medio año', y1:'Más de un año',
        small:'Desde mis primeros años', school:'Ya estaba cuando iba al colegio', unknown:'No lo sé'
      },
      qSpread:'¿Dónde pasa?',
      spread:{ one:'Solo en un ámbito', many:'En varios ámbitos (en casa, en clase o en el trabajo, fuera)', unknown:'No lo sé' },
      qDegree:'¿Cuánto te afecta?',
      degree:{ bit:'Un poco', much:'Bastante', very:'Mucho (el día a día ya no funciona)', effort:'Aguanto a duras penas, con mucho esfuerzo' },
      qAsks:'¿Hay algo que te gustaría que hicieran las personas a las que consultes? (todo lo que quieras)',
      qOthers:'¿Alguien de tu entorno te ha dicho que te nota diferente o que parece que lo estás pasando mal?',
      others:{ yes:'Sí', no:'No', unknown:'No lo sé' },
      gone:'Vuelve a elegir en el inicio lo que te preocupa.',
      toHome:'Ir al inicio'
    },
    result: {
      r1Head:'Mis dificultades',
      card:{
        trouble:'Con qué tengo dificultades', recent:'La última vez que pasó', recentNo:'Una vez que no pasó', since:'Desde cuándo',
        spread:'Dónde pasa', degree:'Cuánto me afecta', others:'Lo que me han dicho en mi entorno', asks:'Lo que me gustaría'
      },
      cardSince:{
        w2:'Las últimas 1 o 2 semanas', m1:'Más o menos un mes', m6:'Más o menos medio año', y1:'Más de un año',
        small:'Desde mis primeros años', school:'Ya estaba cuando iba al colegio', unknown:'No lo sé'
      },
      cardSpread:{ one:'Solo en un ámbito', many:'En varios ámbitos (en casa, en clase o en el trabajo, fuera)', unknown:'No lo sé' },
      cardDegree:{ bit:'Un poco', much:'Bastante', very:'Mucho (el día a día ya no funciona)', effort:'Aguanto a duras penas, con mucho esfuerzo' },
      cardOthers:{ yes:'Me han dicho que me notan diferente o que parece que lo estoy pasando mal', no:'Nadie me lo ha dicho', unknown:'No lo sé' },
      empty:'Todavía no has elegido nada.',
      copy:'Copiar', show:'Mostrar en grande',
      copied:'Copiado. Cuando lo hayas pegado en otra app, puedes borrarlo.',
      noName:'Aunque no tengas el nombre de una enfermedad, puedes contar lo que te pasa tal como está aquí.',
      mainLang:'Mostrar en {lang}',
      backLang:'Volver a mi idioma',
      junbi:'Preparar la visita con «Antes de la consulta» (notas sobre lo que te preocupa, una línea del tiempo, documentos antiguos)',
      back:'Atrás', next:'Siguiente', prev:'Anterior', home:'Ir al inicio',
      r2Head:'Dónde consultar',
      meyasuHead:'Una orientación para pedir ayuda (de una página pública)',
      generalHead:'De páginas públicas',
      yourAns:'Las respuestas que elegiste',
      ansSince:'Desde cuándo: {v}', ansDegree:'Cuánto te afecta: {v}', notChosen:'Sin elegir',
      same:'Si te parece que se acerca a la orientación, plantéate pedir ayuda. Aunque tengas dudas, si lo estás pasando mal, puedes consultar.',
      winHead:'Dónde puedes pedir ayuda',
      toNames:'Ver la lista de nombres',
      r3Head:'Nombres que se pueden comprobar cuando pides ayuda',
      toLearn:'Leer: «{h}»', toLearnNote:'También hay ejemplos de cómo pedir que te traten con amabilidad.'
    },
    names: {
      title:'Guía de nombres',
      lead:'Elige un grupo de preocupaciones para ver la lista de nombres que se pueden comprobar cuando pides ayuda. Puedes verla sin responder a ninguna pregunta.',
      back:'Volver a los grupos',
      pre:'Son nombres que pueden comprobar los profesionales de la salud cuando pides ayuda. Una misma preocupación puede tener causas muy distintas. Esta lista no quiere decir que tengas un «diagnóstico». Aunque pidas ayuda, puede que no te den ningún nombre.',
      howLead:'Sobre cómo se ponen los nombres (diagnósticos), una página del Centro Nacional de Neurología y Psiquiatría de Japón dice:',
      notHere:'También puede ser un nombre que no está en esta lista.',
      noDoubt:'No uses esta lista para dudar de las personas de tu entorno.'
    },
    madoguchi: {
      title:'Dónde consultar',
      nowHead:'Si ahora lo estás pasando mal (24 horas)',
      dayHead:'Consultar durante el día'
    },
    learn: {
      title:'Conviene saber',
      step:'{n} / {m}', prev:'Anterior', next:'Siguiente',
      srcHead:'Fuentes', allSrcHead:'Todas las fuentes'
    }
  }
};

/* ============ nl(2026-10-28 多国籍版・オランダの国と合わせて足す。アプリの正式名は英語名のまま。読み手は je(心の健康の国・RIVM の一般向けの文と同じ=SPEC_V1 14-1)・引用符は ‘…’(Rijksoverheid の書き方)。
   下のナビの長い語は SHY で折る(ドイツと同じ・375px)。countryNote は国とことばを選ぶ前に「この端末にだけ残す」と知らせる(ACM の「使う前に知らせる」=N01 照合 (7)・SPEC_V1 14-6) ============ */
var nl = {
  app: { name:'From Worries to Help - SOYOGI', short:'From Worries to Help', tagline:'Zet in woorden waar je mee zit, en zet een stap naar hulp.' },
  nav: { home:'Kiezen', names:'Namen' + SHY + 'wijzer', madoguchi:'Hulp vinden', learn:'Goed om te weten', set:'Instel' + SHY + 'lingen' },
  langName: { ja:'Japans', en:'Engels', fr:'Frans', de:'Duits', es:'Spaans', nl:'Nederlands' },   // ‘Tonen in het ...’
  common: {
    ok:'OK', cancel:'Annuleren', save:'Bewaren', del:'Wissen', back:'Terug', close:'Sluiten',
    yes:'Ja', no:'Nee', add:'Toevoegen', edit:'Wijzigen', next:'Volgende', prev:'Vorige', done:'Klaar',
    saved:'Bewaard ✓', saveFail:'Bewaren is niet gelukt', storageFull:'Er is geen ruimte meer; bewaren is niet gelukt',
    deleted:'Gewist', delConfirm:'Weet je zeker dat je dit wilt wissen?', empty:'Nog niets',
    optional:'Je hoeft niet alles in te vullen.', today:'Vandaag',
    photo: {
      camera:'Foto maken', roll:'Foto kiezen',
      cropTitle:'Foto bijsnijden', cropHint:'Verschuif de foto met je vinger of met de pijltjes, en verander de grootte met de schuifregelaar.',
      zoom:'Grootte', panUp:'Omhoog', panDown:'Omlaag', panLeft:'Links', panRight:'Rechts',
      make:'Deze gebruiken', fail:'De foto kon niet worden geladen'
    }
  },
  set: {
    hNormal:'Basisinstellingen',
    hBackup:'Naar een andere telefoon (reservekopie)',
    fs:'Tekstgrootte', fsSizes:['Normaal','Groot','Heel groot'],
    lang:'ことば / Language',
    theme:'Kleur', themes:['Groen','Lichtblauw','Wit','Zwart'],
    bgm:'Muziek', bgms:['Geen','Groen geluid','Blauw geluid'],
    sound:'Geluid bij aanraken', on:'Aan', off:'Uit',
    country:'Land', countryPick:'Kies een land',
    bkHint:'Ga je naar een andere telefoon? Tik op ‘Exporteren’ om een bestand te bewaren, en tik op de nieuwe telefoon op ‘Importeren’.',
    bkExport:'Exporteren', bkImport:'Importeren',
    exported:'Geëxporteerd ✓', imported:'Geïmporteerd ✓', importFail:'Importeren is niet gelukt',
    note:'Je antwoorden en wat je schrijft worden niet bewaard (ze verdwijnen als je de app sluit of teruggaat naar het begin). Alleen de instellingen worden bewaard. Er wordt niets verstuurd.',
    privacy:'Privacybeleid',
    credit:'Ontwikkeld door SOYOGI, een plek voor gesprekken over zorg en ondersteuning'
  },
  guide: {
    title:'Zo werkt het', step:'{n} / {m}', start:'Begrepen', again:'Nog een keer bekijken',
    countryNote:'De app laat hulp en informatie zien van pagina’s van overheidsinstanties uit het land dat je kiest. De taal en het land die je kiest, worden alleen op dit apparaat bewaard. Je kunt ze later veranderen bij Instellingen.',
    countryNeed:'Kies eerst een land',
    heads:[
      'Wat je met deze app kunt doen',
      'Dit is geen diagnose',
      'Je antwoorden worden niet bewaard',
      'Als je je zo slecht voelt dat je er niet meer wilt zijn'
    ],
    bodies:[
      'Zet in woorden waar je mee zit, en bekijk waar je hulp kunt vragen en welke namen een zorgverlener samen met je kan nagaan als je hulp vraagt.\nKies op de beginpagina wat het meest lijkt op wat er met je gebeurt. Daarna komen de vragen één voor één.',
      'Als hier een naam staat, betekent dat niet dat je een ‘diagnose’ hebt.\nOok zonder de naam van een ziekte kun je hulp vragen bij waar je mee zit, zoals het is.',
      'Je antwoorden worden nergens naartoe gestuurd en ook niet op dit apparaat bewaard (ze verdwijnen als je de app sluit of teruggaat naar het begin).\nAlleen instellingen zoals de taal en de tekstgrootte worden bewaard.',
      'Met de knop helemaal bovenaan op de beginpagina zie je hulp die dag en nacht bereikbaar is.'
    ]
  },
  screen: {
    ui: {
      src:'{org}, ‘{title}’ {url} (geraadpleegd op {date})',
      edited:', bewerkt door SOYOGI',
      editedTr:', bewerkt en vertaald door SOYOGI',
      ref:', in eigen woorden geschreven door SOYOGI op basis van deze pagina',
      quoted:', geciteerd in een vertaling van SOYOGI',
      quotedSame:', geciteerd',
      upd:' (pagina bijgewerkt op {upd})',
      updNone:' (op de pagina staat geen datum van bijwerken)',
      copy:'Kopiëren', copied:'Gekopieerd', copyFail:'Kopiëren is niet gelukt',
      close:'Sluiten',
      call:'Bel {tel}',
      text:'Stuur een sms naar {tel}',
      checked:'Geraadpleegd op {date}. Nummers en tijden kunnen veranderen.',
      soon:'In voorbereiding',
      crisisBtn:'Ik voel me zo slecht dat ik er niet meer wil zijn',
      crisisHead:'Als het nu heel zwaar is',
      countryHead:'Hulp in {country}'
    },
    home: {
      title:'Kiezen',
      lead:'Kies wat het meest lijkt op waar je nu mee zit.',
      other:'Ook als wat er met je gebeurt hier niet bij staat, kun je hulp vragen, zoals het is.',
      labels:{
        mood:'Somber, geen energie',
        anxiety:'Veel zorgen of spanning',
        repeat:'Moeilijk om te stoppen met controleren of herhalen',
        after:'Een nare gebeurtenis blijft me raken',
        sleep:'Moeite met slapen',
        eating:'Moeite met eten',
        habit:'Moeilijk om te stoppen met alcohol, gokken of gamen',
        attention:'Moeite met aandacht of plannen',
        social:'Moeite met contact, vaste gewoontes of zintuigen',
        reading:'Moeite met lezen, schrijven of rekenen',
        wave:'Grote schommelingen in stemming'
      }
    },
    flow: {
      step:'{n} / {m}', close:'Sluiten', back:'Terug', next:'Volgende',
      ownPh:'Schrijf het zelf (één regel, als je wilt)',
      linePh:'Eén regel (als je wilt)',
      optional:'Je hoeft niets te schrijven.',
      qScenes:'Kies wat vaak gebeurt (zoveel als je wilt)',
      qRecent:'Wanneer gebeurde het de laatste keer?',
      qRecentNo:'Wanneer gebeurde het niet?',
      qSince:'Sinds wanneer?',
      since:{
        w2:'De laatste 1 of 2 weken', m1:'Ongeveer een maand', m6:'Ongeveer een half jaar', y1:'Langer dan een jaar',
        small:'Al zolang ik me kan herinneren', school:'Ook toen ik op school zat', unknown:'Weet ik niet'
      },
      qSpread:'Waar gebeurt het?',
      spread:{ one:'Alleen op één soort plek', many:'Op verschillende plekken (thuis, op school of studie, op het werk, buiten)', unknown:'Weet ik niet' },
      qDegree:'Hoeveel last heb je ervan?',
      degree:{ bit:'Een beetje', much:'Best veel', very:'Heel veel (het dagelijks leven lukt niet meer)', effort:'Ik houd het met heel veel moeite vol' },
      qAsks:'Is er iets wat je graag zou willen van de mensen bij wie je hulp vraagt? (zoveel als je wilt)',
      qOthers:'Heeft iemand om je heen gezegd dat je anders lijkt, of dat het je zwaar lijkt te vallen?',
      others:{ yes:'Ja', no:'Nee', unknown:'Weet ik niet' },
      gone:'Kies op de beginpagina opnieuw waar je mee zit.',
      toHome:'Naar het begin'
    },
    result: {
      r1Head:'Waar ik moeite mee heb',
      card:{
        trouble:'Wat me moeite kost', recent:'De laatste keer dat het gebeurde', recentNo:'Een keer dat het niet gebeurde', since:'Sinds wanneer',
        spread:'Waar het gebeurt', degree:'Hoeveel last ik ervan heb', others:'Wat mensen om me heen hebben gezegd', asks:'Wat ik graag zou willen'
      },
      cardSince:{
        w2:'De laatste 1 of 2 weken', m1:'Ongeveer een maand', m6:'Ongeveer een half jaar', y1:'Langer dan een jaar',
        small:'Al zolang ik me kan herinneren', school:'Ook toen ik op school zat', unknown:'Weet ik niet'
      },
      cardSpread:{ one:'Alleen op één soort plek', many:'Op verschillende plekken (thuis, op school of studie, op het werk, buiten)', unknown:'Weet ik niet' },
      cardDegree:{ bit:'Een beetje', much:'Best veel', very:'Heel veel (het dagelijks leven lukt niet meer)', effort:'Ik houd het met heel veel moeite vol' },
      cardOthers:{ yes:'Mensen om me heen hebben gezegd dat ik anders lijk, of dat het me zwaar lijkt te vallen', no:'Niemand heeft dat gezegd', unknown:'Weet ik niet' },
      empty:'Je hebt nog niets gekozen.',
      copy:'Kopiëren', show:'Groot laten zien',
      copied:'Gekopieerd. Als je het in een andere app hebt geplakt, kun je het hier wissen.',
      noName:'Ook zonder de naam van een ziekte kun je vertellen wat er met je gebeurt, zoals het hier staat.',
      mainLang:'Tonen in het {lang}',
      backLang:'Terug naar mijn taal',
      junbi:'Je bezoek voorbereiden met ‘Voor het gesprek’ (notities over waar je mee zit, een tijdlijn, oude papieren)',
      back:'Terug', next:'Volgende', prev:'Vorige', home:'Naar het begin',
      r2Head:'Hulp vinden',
      meyasuHead:'Wanneer je hulp kunt vragen (tekst van een overheidsinstantie)',
      generalHead:'Van pagina’s van overheidsinstanties',
      yourAns:'De antwoorden die je koos',
      ansSince:'Sinds wanneer: {v}', ansDegree:'Hoeveel last: {v}', notChosen:'Niet gekozen',
      same:'Lijkt de tekst op wat jij meemaakt, dan kun je hulp vragen. En ook als je twijfelt: als iets je moeite kost, mag je erover praten.',
      winHead:'Waar je hulp kunt vragen',
      toNames:'De lijst met namen bekijken',
      r3Head:'Namen die een zorgverlener samen met je kan nagaan',
      toLearn:'Lezen: ‘{h}’', toLearnNote:'Er staan ook voorbeelden in van hoe je kunt vragen om vriendelijk met je om te gaan.'
    },
    names: {
      title:'Namenwijzer',
      lead:'Kies een groep om de lijst met namen te zien die een zorgverlener samen met je kan nagaan als je hulp vraagt. Je kunt de lijst bekijken zonder vragen te beantwoorden.',
      back:'Terug naar de groepen',
      pre:'Dit zijn namen die zorgverleners kunnen nagaan als je hulp vraagt. Achter dezelfde moeite kunnen heel verschillende oorzaken zitten. Deze lijst zegt niet of je een ziekte of stoornis hebt. Ook als je hulp vraagt, krijg je soms geen naam.',
      howLead:'Over hoe namen (diagnoses) worden gegeven, schrijft een pagina van het Japanse National Center of Neurology and Psychiatry:',
      notHere:'Het kan ook een naam zijn die niet in deze lijst staat.',
      noDoubt:'Gebruik deze lijst niet om te twijfelen aan de mensen om je heen.'
    },
    madoguchi: {
      title:'Hulp vinden',
      nowHead:'Als het nu heel zwaar is (dag en nacht)',
      dayHead:'Overdag hulp vragen'
    },
    learn: {
      title:'Goed om te weten',
      step:'{n} / {m}', prev:'Vorige', next:'Volgende',
      srcHead:'Bronnen', allSrcHead:'Alle bronnen'
    }
  }
};

/* フランス語は « と » の内側と、» : ; ? ! の前を改行しない空白にする(約物が行の端に離れて残らないように。data.js は _make_data.js の frTypo で同じことをする) */
var NB = String.fromCharCode(160);
(function nb(o){
  for(var k in o){
    if(typeof o[k] === 'string') o[k] = o[k].replace(/« /g, '«' + NB).replace(/ ([»:;?!])/g, NB + '$1');
    else if(o[k] && typeof o[k] === 'object') nb(o[k]);
  }
})(fr);

window.KOMARI_I18N = { ja: ja, en: en, fr: fr, de: de, es: es, nl: nl };
})();
