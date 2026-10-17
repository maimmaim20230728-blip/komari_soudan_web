'use strict';
/* 困りごとから相談へ・そよぎ 中身のデータ(window.KOMARI_DATA)
   🔴🔴 このファイルは手で書かない。_make_data.js が照合済みの正本から作る(node _make_data.js)。
      正本 = C:\Users\puipu\keikou_check_research\content\<id>_final.json と common_final.json(2026-10-17 照合)
   ・画面の操作文言は i18n.js、中身(窓口・まとまり・名前・出典・知っておきたいこと)はここ(SPEC_V1 第6節)
   ・ja と en は同じ構造。src = { org, title, url, kind:'quote'|'summary'|'fact' }。窓口の出典は ja.src / en.src(src は ja と同じ)
   ・groups.<id>.windows = 結果の相談先で先に並べる窓口(固定・答えで変えない)・crisis = 「いま つらいときは」を出す場面の番号
   ・groups.<id>.meyasu.has が false のまとまりは common.meyasuGeneral(と、発達のまとまりだけ devGeneral)を出す
   ・links.junbi = 「相談と受診の前に」の公開先(空なら画面に出さない) */
window.KOMARI_DATA = {
 "ver": "2026-10-17",
 "order": [
  "mood",
  "anxiety",
  "repeat",
  "after",
  "sleep",
  "eating",
  "habit",
  "attention",
  "social",
  "reading",
  "wave"
 ],
 "links": {
  "junbi": "https://maimmaim20230728-blip.github.io/junbi_note_web/"
 },
 "windows": [
  {
   "id": "inochisos",
   "band": "now",
   "tel": "0120-061-338",
   "tel2": "",
   "url": "https://www.mhlw.go.jp/mamorouyokokoro/soudan/tel/",
   "linkOk": true,
   "ja": {
    "name": "#いのちSOS",
    "desc": "「死にたい」「消えたい」「生きることに つかれた」と いう 気もちを、専門の 相談員が うけとめて、いっしょに 考えます。",
    "hours": "毎日 24時間(365日)・無料(フリーダイヤル)",
    "src": {
     "org": "厚生労働省",
     "title": "電話相談窓口(まもろうよ こころ)",
     "url": "https://www.mhlw.go.jp/mamorouyokokoro/soudan/tel/",
     "kind": "fact"
    }
   },
   "en": {
    "name": "#Inochi SOS",
    "desc": "Specialist counselors listen to feelings such as wanting to die, wanting to disappear, or being worn out by life, and think through your situation with you.",
    "hours": "24 hours a day, 365 days a year. Free of charge (toll-free).",
    "src": {
     "org": "Ministry of Health, Labour and Welfare",
     "title": "電話相談窓口(まもろうよ こころ) (Telephone consultation services, Mamorou yo Kokoro site)",
     "url": "https://www.mhlw.go.jp/mamorouyokokoro/soudan/tel/",
     "kind": "fact"
    }
   },
   "src": {
    "org": "厚生労働省",
    "title": "電話相談窓口(まもろうよ こころ)",
    "url": "https://www.mhlw.go.jp/mamorouyokokoro/soudan/tel/",
    "kind": "fact"
   }
  },
  {
   "id": "yorisoi",
   "band": "now",
   "tel": "0120-279-338",
   "tel2": "0120-279-226",
   "url": "https://www.mhlw.go.jp/mamorouyokokoro/soudan/tel/",
   "linkOk": true,
   "ja": {
    "name": "よりそいホットライン",
    "desc": "ガイダンスで、専門的な 相談(外国語を ふくむ)も えらべます。福島県から かけるときは 0120-279-226 です。050で はじまる IP電話からは 050-3655-0279(24時間)に かけます。",
    "hours": "24時間 対応・無料(フリーダイヤル)",
    "src": {
     "org": "厚生労働省",
     "title": "電話相談窓口(まもろうよ こころ)",
     "url": "https://www.mhlw.go.jp/mamorouyokokoro/soudan/tel/",
     "kind": "fact"
    }
   },
   "en": {
    "name": "Yorisoi Hotline",
    "desc": "You can choose specialized support (including foreign languages) through the voice guidance. From Fukushima Prefecture, call 0120-279-226. From an IP phone starting with 050, call 050-3655-0279 (24 hours).",
    "hours": "Available 24 hours a day. Free of charge (toll-free).",
    "src": {
     "org": "Ministry of Health, Labour and Welfare",
     "title": "電話相談窓口(まもろうよ こころ) (Telephone consultation services, Mamorou yo Kokoro site)",
     "url": "https://www.mhlw.go.jp/mamorouyokokoro/soudan/tel/",
     "kind": "fact"
    }
   },
   "src": {
    "org": "厚生労働省",
    "title": "電話相談窓口(まもろうよ こころ)",
    "url": "https://www.mhlw.go.jp/mamorouyokokoro/soudan/tel/",
    "kind": "fact"
   }
  },
  {
   "id": "inochinodenwa",
   "band": "now",
   "tel": "0120-783-556",
   "tel2": "0570-783-556",
   "url": "https://www.mhlw.go.jp/mamorouyokokoro/soudan/tel/",
   "linkOk": true,
   "ja": {
    "name": "いのちの電話",
    "desc": "フリーダイヤルと ナビダイヤルの 2つの 番号が あります。ナビダイヤルは 通話料が かかります。IP電話からは 03-6634-7830(通話料 あり)に かけます。",
    "hours": "0120: 毎日 16時から 21時まで(毎月10日は 午前8時から 翌日の 午前8時まで)・無料 / 0570: 午前10時から 午後10時まで・通話料が かかります",
    "src": {
     "org": "厚生労働省",
     "title": "電話相談窓口(まもろうよ こころ)",
     "url": "https://www.mhlw.go.jp/mamorouyokokoro/soudan/tel/",
     "kind": "fact"
    }
   },
   "en": {
    "name": "Inochi no Denwa (Lifeline)",
    "desc": "There are two numbers: a toll-free number and a Navi Dial number. Navi Dial calls are charged. From an IP phone, call 03-6634-7830 (charges apply).",
    "hours": "0120 (toll-free): every day from 4 pm to 9 pm, and on the 10th of each month from 8 am until 8 am the next morning. 0570: 10 am to 10 pm, call charges apply.",
    "src": {
     "org": "Ministry of Health, Labour and Welfare",
     "title": "電話相談窓口(まもろうよ こころ) (Telephone consultation services, Mamorou yo Kokoro site)",
     "url": "https://www.mhlw.go.jp/mamorouyokokoro/soudan/tel/",
     "kind": "fact"
    }
   },
   "src": {
    "org": "厚生労働省",
    "title": "電話相談窓口(まもろうよ こころ)",
    "url": "https://www.mhlw.go.jp/mamorouyokokoro/soudan/tel/",
    "kind": "fact"
   }
  },
  {
   "id": "ibasho",
   "band": "now",
   "tel": "",
   "tel2": "",
   "url": "https://talkme.jp/",
   "linkOk": false,
   "ja": {
    "name": "あなたのいばしょ(チャット)",
    "desc": "文字(チャット)で 相談できます。年齢や 性別を とわず、だれでも 無料で、名前を 言わなくても 使えます。",
    "hours": "毎日 24時間(365日)",
    "src": {
     "org": "厚生労働省",
     "title": "SNS相談(まもろうよ こころ)",
     "url": "https://www.mhlw.go.jp/mamorouyokokoro/soudan/sns/",
     "kind": "fact"
    }
   },
   "en": {
    "name": "Anata no Ibasho (online chat)",
    "desc": "You can talk by text chat. Anyone of any age or gender can use it for free, and you do not need to give your name.",
    "hours": "24 hours a day, 365 days a year.",
    "src": {
     "org": "Ministry of Health, Labour and Welfare",
     "title": "SNS相談(まもろうよ こころ) (SNS and chat consultation, Mamorou yo Kokoro site)",
     "url": "https://www.mhlw.go.jp/mamorouyokokoro/soudan/sns/",
     "kind": "fact"
    }
   },
   "src": {
    "org": "厚生労働省",
    "title": "SNS相談(まもろうよ こころ)",
    "url": "https://www.mhlw.go.jp/mamorouyokokoro/soudan/sns/",
    "kind": "fact"
   }
  },
  {
   "id": "emergency",
   "band": "now",
   "tel": "119",
   "tel2": "110",
   "url": "",
   "linkOk": false,
   "ja": {
    "name": "119(救急・消防)・110(警察)",
    "desc": "命が あぶないとき、すぐに 助けが ほしい ときは、ためらわずに 電話して ください。救急車や 消防車は 119、事件や 事故は 110 です。",
    "hours": "",
    "src": {
     "org": "総務省消防庁",
     "title": "119番緊急通報",
     "url": "https://www.fdma.go.jp/mission/enrichment/kyukyumusen_kinkyutuhou/119.html",
     "kind": "summary"
    }
   },
   "en": {
    "name": "119 (ambulance and fire) / 110 (police)",
    "desc": "If your life is in danger or you need help right away, call without hesitation. Call 119 for an ambulance or fire engine, and 110 for a crime or accident.",
    "hours": "",
    "src": {
     "org": "Fire and Disaster Management Agency",
     "title": "119番緊急通報 (119 emergency calls)",
     "url": "https://www.fdma.go.jp/mission/enrichment/kyukyumusen_kinkyutuhou/119.html",
     "kind": "summary"
    }
   },
   "src": {
    "org": "総務省消防庁",
    "title": "119番緊急通報",
    "url": "https://www.fdma.go.jp/mission/enrichment/kyukyumusen_kinkyutuhou/119.html",
    "kind": "summary"
   }
  },
  {
   "id": "mhwc",
   "band": "day",
   "tel": "",
   "tel2": "",
   "url": "https://www.mhlw.go.jp/seisakunitsuite/bunya/kenkou_iryou/iyakuhin/yakubutsuranyou_taisaku/hoken_fukushi/index.html",
   "linkOk": true,
   "ja": {
    "name": "精神保健福祉センター",
    "desc": "こころの 健康の 相談を 受けて います。医療が 必要か どうかも 相談できます。近くの 医療機関を 紹介して もらえる ことも あります。全国の 一覧から、住んで いる 地域の センターを さがします。",
    "hours": "受付の 時間は、各センターに 電話で たしかめて ください。(一覧は 令和6年12月 現在)",
    "src": {
     "org": "厚生労働省",
     "title": "身近にある地域の相談窓口(こころもメンテしよう)",
     "url": "https://www.mhlw.go.jp/kokoro/youth/consultation/window/window_01.html",
     "kind": "summary"
    }
   },
   "en": {
    "name": "Mental Health and Welfare Center",
    "desc": "You can consult about mental health. You can also ask whether medical care is needed, and they may be able to introduce nearby medical institutions. Find the center for your area on the national list.",
    "hours": "Check reception hours with each center by phone. (The list is as of December 2024.)",
    "src": {
     "org": "Ministry of Health, Labour and Welfare",
     "title": "身近にある地域の相談窓口(こころもメンテしよう) (Local consultation services near you, Kokoro Mente Shiyou site)",
     "url": "https://www.mhlw.go.jp/kokoro/youth/consultation/window/window_01.html",
     "kind": "summary"
    }
   },
   "src": {
    "org": "厚生労働省",
    "title": "身近にある地域の相談窓口(こころもメンテしよう)",
    "url": "https://www.mhlw.go.jp/kokoro/youth/consultation/window/window_01.html",
    "kind": "summary"
   }
  },
  {
   "id": "hoken",
   "band": "day",
   "tel": "",
   "tel2": "",
   "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/hokenjo/",
   "linkOk": true,
   "ja": {
    "name": "保健所・保健センター",
    "desc": "こころの 悩みや 不安の ほか、ひきこもりや、お酒・薬の 依存の ことなども 相談できます。医師などの こころの 専門家に 相談する ことも できます。住んで いる 地域の 窓口は 一覧から さがします。",
    "hours": "受付の 時間は、住んで いる 地域の 窓口に 電話で たしかめて ください。",
    "src": {
     "org": "厚生労働省",
     "title": "身近にある地域の相談窓口(こころもメンテしよう)",
     "url": "https://www.mhlw.go.jp/kokoro/youth/consultation/window/window_01.html",
     "kind": "summary"
    }
   },
   "en": {
    "name": "Public Health Center (Hokenjo)",
    "desc": "You can consult about worries and anxiety, as well as social withdrawal (hikikomori) and dependence on alcohol or drugs. You can also talk with mental health specialists such as doctors. Find the office for your area from the list.",
    "hours": "Check reception hours by phone with the office for your area.",
    "src": {
     "org": "Ministry of Health, Labour and Welfare",
     "title": "身近にある地域の相談窓口(こころもメンテしよう) (Local consultation services near you, Kokoro Mente Shiyou site)",
     "url": "https://www.mhlw.go.jp/kokoro/youth/consultation/window/window_01.html",
     "kind": "summary"
    }
   },
   "src": {
    "org": "厚生労働省",
    "title": "身近にある地域の相談窓口(こころもメンテしよう)",
    "url": "https://www.mhlw.go.jp/kokoro/youth/consultation/window/window_01.html",
    "kind": "summary"
   }
  },
  {
   "id": "hattatsu",
   "band": "day",
   "tel": "",
   "tel2": "",
   "url": "https://www.rehab.go.jp/ddis/action/center/",
   "linkOk": true,
   "ja": {
    "name": "発達障害者支援センター",
    "desc": "診断が なくても 相談できます。相談の 費用は 無料です。ご家族や 周りの 人からの 相談も 受けて います。必要に 応じて 医療機関などを 紹介して もらえます。住んで いる 地域を 担当する センターを、一覧から さがします。",
    "hours": "受付の 時間や 事業の 内容は、住んで いる 地域の センターに たしかめて ください。",
    "src": {
     "org": "発達障害ナビポータル",
     "title": "相談できる窓口を教えて欲しい",
     "url": "https://hattatsu.go.jp/supporter/welfare/faq/welfare-faq01/",
     "kind": "summary"
    }
   },
   "en": {
    "name": "Developmental Disorders Support Center",
    "desc": "You can consult even without a diagnosis, and consultation is free. They also take consultations from family members and people around you, and can introduce medical institutions and other services when needed. Find the center in charge of the area where you live from the list.",
    "hours": "Check reception hours and services with the center for your area.",
    "src": {
     "org": "Developmental Disorders Navi Portal",
     "title": "相談できる窓口を教えて欲しい (FAQ: Where can I consult?)",
     "url": "https://hattatsu.go.jp/supporter/welfare/faq/welfare-faq01/",
     "kind": "summary"
    }
   },
   "src": {
    "org": "発達障害ナビポータル",
    "title": "相談できる窓口を教えて欲しい",
    "url": "https://hattatsu.go.jp/supporter/welfare/faq/welfare-faq01/",
    "kind": "summary"
   }
  },
  {
   "id": "navii",
   "band": "day",
   "tel": "",
   "tel2": "",
   "url": "https://www.iryou.teikyouseido.mhlw.go.jp/znk-web/juminkanja/S2300/initialize",
   "linkOk": true,
   "ja": {
    "name": "医療情報ネット(ナビイ)",
    "desc": "全国の 病院・診療所を、精神科・心療内科などの 診療科で さがせます。会員登録は いりません。精神科は 予約制の ところが 多いので、受診の 前に 電話で たしかめて ください。大人の 発達障害の 診断を して いるかも 問い合わせて ください。発達障害の 診療を して いるところは、予約が とれるまで 待つ ことが あります。",
    "hours": "診療日・時間は 医療機関ごとに ちがいます(ナビイで 調べられます)。",
    "src": {
     "org": "厚生労働省 上手な医療のかかり方",
     "title": "医療情報ネット(ナビイ)の使い方",
     "url": "https://kakarikata.mhlw.go.jp/kakaritsuke/nabii.html",
     "kind": "fact"
    }
   },
   "en": {
    "name": "Medical Information Net (Navii)",
    "desc": "You can search hospitals and clinics all over Japan by department, such as psychiatry or psychosomatic medicine. No membership registration is needed. Many psychiatric clinics work by appointment, so call to check before you visit. Also ask whether they carry out diagnosis of developmental conditions in adults. Places that focus on developmental conditions may have a wait before you can get an appointment.",
    "hours": "Days and hours differ by facility (you can look them up on Navii).",
    "src": {
     "org": "Ministry of Health, Labour and Welfare (MHLW), How to Use Medical Care Wisely",
     "title": "医療情報ネット(ナビイ)の使い方 (How to use the Medical Information Net, Navii)",
     "url": "https://kakarikata.mhlw.go.jp/kakaritsuke/nabii.html",
     "kind": "fact"
    }
   },
   "src": {
    "org": "厚生労働省 上手な医療のかかり方",
    "title": "医療情報ネット(ナビイ)の使い方",
    "url": "https://kakarikata.mhlw.go.jp/kakaritsuke/nabii.html",
    "kind": "fact"
   }
  },
  {
   "id": "dial",
   "band": "day",
   "tel": "0570-064-556",
   "tel2": "",
   "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hukushi_kaigo/seikatsuhogo/jisatsu/kokoro_dial.html",
   "linkOk": true,
   "ja": {
    "name": "こころの健康相談統一ダイヤル",
    "desc": "電話を かけた 場所の 都道府県・政令指定都市の 公的な 相談窓口に つながります。050で はじまる IP電話からは つながりません。IP電話の 人は、厚労省の ページに ある 直通番号に かけます。時間の 一覧は 令和5年10月1日 現在の ものです。",
    "hours": "受付の 曜日・時間は 都道府県で ちがいます・通話料が かかります(ナビダイヤル)",
    "src": {
     "org": "厚生労働省",
     "title": "電話相談窓口(まもろうよ こころ)",
     "url": "https://www.mhlw.go.jp/mamorouyokokoro/soudan/tel/",
     "kind": "fact"
    }
   },
   "en": {
    "name": "Mental Health Consultation Unified Dial",
    "desc": "Your call is connected to the public consultation service of the prefecture or designated city where you are calling from. It cannot be reached from IP phones starting with 050; IP phone users should call the direct numbers shown on the Ministry of Health, Labour and Welfare page. The table of hours is as of October 1, 2023.",
    "hours": "Days and hours differ by prefecture. Navi Dial call charges apply.",
    "src": {
     "org": "Ministry of Health, Labour and Welfare",
     "title": "電話相談窓口(まもろうよ こころ) (Telephone consultation services, Mamorou yo Kokoro site)",
     "url": "https://www.mhlw.go.jp/mamorouyokokoro/soudan/tel/",
     "kind": "fact"
    }
   },
   "src": {
    "org": "厚生労働省",
    "title": "電話相談窓口(まもろうよ こころ)",
    "url": "https://www.mhlw.go.jp/mamorouyokokoro/soudan/tel/",
    "kind": "fact"
   }
  },
  {
   "id": "kakaritsuke",
   "band": "day",
   "tel": "",
   "tel2": "",
   "url": "https://www.iryou.teikyouseido.mhlw.go.jp/znk-web/juminkanja/S2300/initialize",
   "linkOk": true,
   "ja": {
    "name": "かかりつけ医・内科など",
    "desc": "体の 病気が きっかけで、気分の 落ちこみが 出る ことも あります。体の 不調が あるときは、かかりつけ医に 相談して みて ください。かかりつけ医から 精神科を 紹介して もらえる ことも あります。",
    "hours": "診療日・時間は 医院ごとに ちがいます(ナビイで さがせます)。",
    "src": {
     "org": "厚生労働省 生活習慣病などの情報(e-ヘルスネット)",
     "title": "体の不調はうつ病でも現れます。かかりつけ医へ相談してみましょう",
     "url": "https://kennet.mhlw.go.jp/information/information/heart/k-07-004.html",
     "kind": "summary"
    }
   },
   "en": {
    "name": "Family doctor or general practitioner",
    "desc": "A physical illness can sometimes bring on low mood. If you have physical complaints, you can talk with your family doctor. Your family doctor may also introduce you to a psychiatrist.",
    "hours": "Days and hours differ by clinic (you can search on Navii).",
    "src": {
     "org": "Ministry of Health, Labour and Welfare (MHLW), e-Health Net",
     "title": "体の不調はうつ病でも現れます。かかりつけ医へ相談してみましょう (Physical symptoms can also appear in depression: consult your family doctor)",
     "url": "https://kennet.mhlw.go.jp/information/information/heart/k-07-004.html",
     "kind": "summary"
    }
   },
   "src": {
    "org": "厚生労働省 生活習慣病などの情報(e-ヘルスネット)",
    "title": "体の不調はうつ病でも現れます。かかりつけ医へ相談してみましょう",
    "url": "https://kennet.mhlw.go.jp/information/information/heart/k-07-004.html",
    "kind": "summary"
   }
  }
 ],
 "ja": {
  "groups": {
   "mood": {
    "label": "気分が 落ちこむ・やる気が 出ない",
    "lead": "気分が ずっと しずんで、やる気が わかない ときの 困りごとです。",
    "scenes": [
     "朝から晩まで、気持ちがずっと沈んだままでいる。",
     "前は好きだったことをしても、楽しいと感じられない。",
     "気力がわかず、集中もできなくて、仕事や家事が進まない。",
     "自分を責めてしまったり、物事を暗いほうにばかり考えてしまったりする。",
     "夜に眠れなかったり、逆に眠りすぎたりする。食欲が落ち、体もだるい。",
     "消えたい・いなくなりたい気持ちになることがある。"
    ],
    "asks": [
     "やることは、一度に一つずつ伝えてほしい。",
     "返事や決めることを急がせず、考える時間がほしい。",
     "大事なことは、書いて渡してほしい。",
     "「がんばれ」と言う前に、まず話を聞いてほしい。",
     "休んでいることを、怠けていると決めつけないでほしい。",
     "体の病気や、いま飲んでいる薬が関係していないかも、いっしょに確かめてほしい。"
    ],
    "meyasu": {
     "has": true,
     "text": "「次のような気になる症状が続くときは、専門機関に相談しましょう」と書かれています。例として「気分が沈む、憂うつ」「何をするのにも元気が出ない」が挙げられています。",
     "src": {
      "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
      "title": "こころの病気について理解を深めよう",
      "url": "https://kokoro.ncnp.go.jp/health_understanding.php",
      "kind": "quote"
     }
    },
    "names": [
     {
      "name": "体の病気や、内科の薬が関わるうつ状態",
      "why": "体の 病気や、内科の 薬が 原因で、気分の 落ちこみが 出る ことが あると 説明されて います。そのため、体の 病気や 飲んでいる 薬にも 注意が 必要と されて います。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "うつ病",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=9D2BdBaF8nGgVLbL",
       "kind": "summary"
      }
     },
     {
      "name": "甲状腺の病気(甲状腺機能低下症など)",
      "why": "甲状腺の はたらきが 落ちると、体が 冷えたり、気力が わかない 感じが 出たり する ことが あります。ほかの 不調と 似ていて 見逃されがち、と 書かれて います。",
      "src": {
       "org": "厚生労働省 働く女性の心とからだの応援サイト",
       "title": "甲状腺の病気",
       "url": "https://www.bosei-navi.mhlw.go.jp/health/thyroid.html",
       "kind": "summary"
      }
     },
     {
      "name": "聞こえにくさ(難聴)",
      "why": "聞こえにくい ことの えいきょうとして、家族や 友人との 会話が うまく いかなく なる ことや、社会的に 孤立して うつ状態に 陥る ことも ある、と 書かれて います。聞こえにくさを 感じたら 耳鼻咽喉科を 受診して みませんか、と 案内されて います。",
      "src": {
       "org": "厚生労働省",
       "title": "「聞こえにくさ」感じていませんか？",
       "url": "https://www.mhlw.go.jp/nanntyou/",
       "kind": "summary"
      }
     },
     {
      "name": "不眠症などの睡眠の病気",
      "why": "眠れない 状態が 続くと、昼の 意欲が 下がったり、気分が 沈んだり する ことが あります。眠りの 困りごとだと 思って いたら、うつ病が 隠れて いた ということも ある、と 書かれて います。",
      "src": {
       "org": "厚生労働省 生活習慣病などの情報(e-ヘルスネット)",
       "title": "不眠症",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-02-001.html",
       "kind": "summary"
      }
     },
     {
      "name": "お酒の影響(アルコール依存症など)",
      "why": "飲酒による 問題として、体の 臓器への 悪い えいきょうの ほかに、うつ病などの 精神的な えいきょうも ある、と 書かれて います。お酒を やめたり 減らしたり した ときに、不眠や 不安などの 症状が 出る ことも あります。",
      "src": {
       "org": "厚生労働省 生活習慣病などの情報(e-ヘルスネット)",
       "title": "アルコールと依存",
       "url": "https://kennet.mhlw.go.jp/information/information/alcohol/a-05-001.html",
       "kind": "summary"
      }
     },
     {
      "name": "うつ病",
      "why": "やる気が 出ない、悲しい 気持ちに なる、眠れない、体が だるい など、こころと 体の 両方に 症状が 出る 病気として 説明されて います。体の 症状が 目立って、気分の 症状に 気づきにくい ことも あります。",
      "src": {
       "org": "厚生労働省 生活習慣病などの情報(e-ヘルスネット)",
       "title": "体の不調はうつ病でも現れます。かかりつけ医へ相談してみましょう",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-07-004.html",
       "kind": "summary"
      }
     },
     {
      "name": "双極性障害（躁うつ病）",
      "why": "気分が 沈む 時期の ほかに、ふだんより ずっと 調子が 高く 活動的に なる 時期も ある 病気として 説明されて います。調子が 高い 時期は 本人が 気づきにくく、うつ病とは 治療も ちがうため、その 時期に 気づく ことが 大切と 書かれて います。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "双極性障害（躁うつ病）",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=RM3UirqngPV6bFW0",
       "kind": "summary"
      }
     },
     {
      "name": "適応障害",
      "why": "まわりの 環境の 変化による ストレスが、その人の 慣れる 力を こえた ときに 出る、気持ちや 行動の 不調として 説明され、うつ病など ほかの 病気の 診断が つくには 至って いない 状態、とも 書かれて います。環境を 整える ことなどが 回復に 大切だと されて います。",
      "src": {
       "org": "厚生労働省 こころの耳",
       "title": "適応障害：用語解説",
       "url": "https://kokoro.mhlw.go.jp/glossaries/word-1653/",
       "kind": "summary"
      }
     }
    ],
    "windows": [
     "kakaritsuke",
     "mhwc",
     "hoken",
     "navii",
     "dial"
    ],
    "crisis": [
     5
    ]
   },
   "anxiety": {
    "label": "不安・緊張が 強い",
    "lead": "心配が とまらない・ドキドキして 落ち着かない・人前や 外出が つらい など",
    "scenes": [
     "人前で話したり、注目されたりすると、強い不安で頭が真っ白になる。",
     "急にドキドキして息が苦しくなり、「また起きたらどうしよう」と心配で、出かけにくい。",
     "はっきりした理由がないのに、あれもこれもと心配になって、そわそわして疲れてしまう。",
     "電車やバス、人の多い建物の中、ひとりでの外出など、逃げにくい場所が苦手で、避けている。",
     "不安なことを避けているうちに、行く場所や会う人が減って、生活が狭くなってきた。",
     "心配ごとが頭から離れなくて、夜、寝つけない。"
    ],
    "asks": [
     "話すときは、急かさずに待ってほしい",
     "予定や進め方を、前もって教えてほしい",
     "急に人前で意見を求めず、書いて伝える方法も選ばせてほしい",
     "具合が悪くなったら、少し席を外して休むことを認めてほしい",
     "静かな場所で、少人数で話したい",
     "「気にしすぎ」と決めつけずに、まず困っていることを聞いてほしい"
    ],
    "meyasu": {
     "has": true,
     "text": "大人の場合は、これまでの半年間をふり返って、前より明らかに不安が増えて自信をなくしている、不安を避けるために特定のもの・人・場面を避けることにこだわっている、または生活や行動に影響が出ていると感じたときは、専門家に相談するよう書かれています。",
     "src": {
      "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
      "title": "不安症",
      "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=BLA9JV0KhiWPIMzX",
      "kind": "summary"
     }
    },
    "names": [
     {
      "name": "甲状腺機能亢進症",
      "why": "不安の背景にある体の病気の一つとして、国のページにあげられています。動悸や息苦しさがあるときは、まず内科で診てもらうよう書かれています。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "不安症",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=BLA9JV0KhiWPIMzX",
       "kind": "summary"
      }
     },
     {
      "name": "不整脈",
      "why": "国のページには、不安が生じることもある体の病気の一つとして書かれています。同じページに、動悸や息苦しさがあるときは、まず内科で診てもらうようにとあります。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "不安症",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=BLA9JV0KhiWPIMzX",
       "kind": "summary"
      }
     },
     {
      "name": "貧血",
      "why": "国のページには、貧血によって不安が生じることもあると書かれています。そのページは、動悸や息苦しさがあるときは、まず内科で診てもらうよう案内しています。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "不安症",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=BLA9JV0KhiWPIMzX",
       "kind": "summary"
      }
     },
     {
      "name": "物質・医薬品誘発性不安症(お酒・カフェイン・薬による不安)",
      "why": "お酒やカフェインなどの物質や、治療のために飲んでいる薬によって、不安が生じることもあると書かれています。飲んでいるものがあれば、診てもらうときにいっしょに伝えられます。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "不安症",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=BLA9JV0KhiWPIMzX",
       "kind": "summary"
      }
     },
     {
      "name": "不眠症",
      "why": "眠れない夜が続くと、眠れないこと自体への不安や緊張が強くなることがあると書かれています。また、うつ病や不安症など心の不調の初めの症状として、または一緒に、現れることも多いとされています。",
      "src": {
       "org": "厚生労働省",
       "title": "健康づくりのための睡眠ガイド2023",
       "url": "https://www.mhlw.go.jp/content/001305530.pdf",
       "kind": "summary"
      }
     },
     {
      "name": "不安症(全般性不安・パニック症・社交不安症・広場恐怖症など)",
      "why": "不安や緊張が強くなって、人前や外出などの場面を避けるようになることがあります。国のページでは、特徴に応じていくつかの種類に分けられています。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "不安症",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=BLA9JV0KhiWPIMzX",
       "kind": "summary"
      }
     },
     {
      "name": "うつ病",
      "why": "気分の落ちこみのほかに、不安が強まったり、いらいらしたり、焦ったりする気持ちや、動悸・息苦しさなどの体の症状が出ることがあると書かれています。",
      "src": {
       "org": "厚生労働省 生活習慣病などの情報(e-ヘルスネット)",
       "title": "体の不調はうつ病でも現れます。かかりつけ医へ相談してみましょう",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-07-004.html",
       "kind": "summary"
      }
     },
     {
      "name": "PTSD(心的外傷後ストレス障害)",
      "why": "命にかかわるような、とても怖い体験のあとに、その記憶が自分の意志と関係なくよみがえり、不安や緊張が高まった状態が続くことがあると書かれています。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "PTSD",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=iGkwv4PNzgWhQ9xI",
       "kind": "summary"
      }
     }
    ],
    "windows": [
     "kakaritsuke",
     "navii",
     "mhwc",
     "hoken",
     "dial"
    ],
    "crisis": []
   },
   "repeat": {
    "label": "確かめや くりかえしが やめにくい",
    "lead": "かぎや ガス、てあらいなどを なんども たしかめたり、くりかえしたり して、やめたくても やめにくい とき。",
    "scenes": [
     "家を出るとき、鍵やガスの元栓を何度も確かめないと、安心して出かけられない。",
     "手や体を洗う回数が増えて、やめたくてもやめられない。",
     "同じ心配が何度も頭に浮かんで、考えるのをやめたいのにやめられない。",
     "物の置き方や順番を決めたとおりにしないと落ち着かなくて、直したりやり直したりしてしまう。",
     "確かめているうちに時間がたって、出発が遅れたり、約束や仕事に間に合わなかったりする。",
     "思わず体が動いたり声が出たりして、止めようとしても止めにくい。"
    ],
    "asks": [
     "「気にしすぎ」と決めつけずに、まず話を聞いてほしい。",
     "確かめるのに時間がかかるので、時間に余裕を持たせてほしい。",
     "予定や手順を変えるときは、前もって知らせてほしい。",
     "確かめたり洗ったりしているところを、人前で指摘したり、からかったりしないでほしい。",
     "説明や指示は、一つずつ、書いて伝えてほしい。",
     "相談や治療の進め方は、不安に思うことを聞いたうえで、ゆっくり決めてほしい。"
    ],
    "meyasu": {
     "has": true,
     "text": "「せずにはいられない」「考えずにはいられない」ことで、つらくなったり不便を感じたりする場合には、専門機関に相談してみましょう。",
     "src": {
      "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
      "title": "強迫性障害｜こころの情報サイト",
      "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=MiyHEH6ZUZDxDeYX",
      "kind": "quote"
     }
    },
    "names": [
     {
      "name": "強迫症(強迫性障害)",
      "why": "やめたくても やめにくい 行いや、頭から 離れない 考えで、つらさや 不便が 出る 名前として、国の ページに 書かれています。戸締まりの 確認や 手洗いのような、ふだんの 行いの 延長に あるため、行き過ぎかどうかの 判断は 難しい、とも 書かれています。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "強迫性障害｜こころの情報サイト",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=MiyHEH6ZUZDxDeYX",
       "kind": "summary"
      }
     },
     {
      "name": "不安症(不安障害)",
      "why": "この ページでは、手洗いを 続けたり、戸締まりを 何度も 確かめたり して、やめられなく なる ことが、不安障害の 代表的な ものの 一つとして 紹介されています。その 行いを しないと 不安で たまらなく なる、と 書かれています。",
      "src": {
       "org": "厚生労働省",
       "title": "不安障害｜こころもメンテしよう",
       "url": "https://www.mhlw.go.jp/kokoro/youth/stress/know/know_02.html",
       "kind": "summary"
      }
     },
     {
      "name": "自閉スペクトラム症",
      "why": "行動や 関心、活動が、限られた 形で くり返される ことが、特徴の 一つとして 国の ページに 書かれています。同じ ページに、強迫症を ともなう 人も いる、とも 書かれています。",
      "src": {
       "org": "発達障害ナビポータル",
       "title": "自閉スペクトラム症",
       "url": "https://hattatsu.go.jp/supporter/healthcare_health/about-asd-2/",
       "kind": "summary"
      }
     },
     {
      "name": "チック障害・トゥレット症候群",
      "why": "突然 起こる 素早い 動きや 発声が、くり返される ものとして、国の ページに 書かれています。自分では したく ないのに、してしまう ことが 特徴だ、とも 書かれています。",
      "src": {
       "org": "国立障害者リハビリテーションセンター",
       "title": "各障害の定義",
       "url": "https://www.rehab.go.jp/ddis/understand/definition/",
       "kind": "summary"
      }
     }
    ],
    "windows": [
     "mhwc",
     "hoken",
     "navii",
     "dial",
     "hattatsu"
    ],
    "crisis": []
   },
   "after": {
    "label": "つらい できごとの あとが つづく",
    "lead": "つらい できごとの あと、思い出したり、ねむれなかったり、気が はりつめたり する。",
    "scenes": [
     "ふとしたきっかけで、つらかったときの場面や気持ちが、急によみがえってくる。",
     "同じような怖い夢を何度も見て、ぐっすり眠れない日が多い。",
     "いつも気が張っていて、ちょっとした物音や出来事にもびくっとしてしまう。",
     "あのときを思い出させる場所や人、話題をできるだけ避けていて、行動が狭くなっている。",
     "気持ちが動かなくなったように感じて、家族や友人にも、前のような気持ちを向けられない。",
     "自分を責める気持ちが強くなったり、周りの人を信じにくくなったりしている。"
    ],
    "asks": [
     "何があったのかを、細かく聞き出さないでほしい。話せる分だけ、私のペースで話したい。",
     "思い出すきっかけになる音や場所、話題があるので、避けたいと言ったときは、それを認めてほしい。",
     "急に後ろから声をかけたり、大きな音を立てたりしないでほしい。",
     "話すのがつらいときは、書いたものを渡す形にしてほしい。",
     "眠れない日や、疲れが残る日があることを、怠けと受け取らないでほしい。",
     "「忘れたほうがいい」「早く元気になって」と急かさず、安心して話せる場所を用意してほしい。"
    ],
    "meyasu": {
     "has": true,
     "text": "今つらい思いをしているなら、一人でがまんせず、精神科の受診や、保健所などの相談窓口を使ってよい、と書かれています。また、つらく怖い経験の直後は、多くの人に不安や不眠などの症状が出るため、1か月くらいは様子をみて自然な回復を待つ、とあります。数か月たっても同じような症状が続くときや、悪化していくときは、PTSDのことも考えて専門家に相談してみてください、ともあります。",
     "src": {
      "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
      "title": "PTSD｜こころの情報サイト",
      "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=iGkwv4PNzgWhQ9xI",
      "kind": "summary"
     }
    },
    "names": [
     {
      "name": "不眠症(睡眠障害)",
      "why": "強いストレスを感じる出来事のあとに、眠れない状態が出ることは多く、続くと日中の活力や気分にも響く、と書かれています。眠れない原因が、ほかの病気に伴っていることもあります。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "不眠症（睡眠障害）｜こころの情報サイト",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=XpsDJBKfyaGD0mIx",
       "kind": "summary"
      }
     },
     {
      "name": "悪夢障害",
      "why": "怖い夢が何度も続いて、眠りをさまたげる状態を指す名前です。大人でも、PTSDやうつ病といっしょに出ることがある、と書かれています。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "不眠症（睡眠障害）｜こころの情報サイト",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=XpsDJBKfyaGD0mIx",
       "kind": "summary"
      }
     },
     {
      "name": "カフェインのとりすぎ",
      "why": "つらい出来事で被害を受けたあと、元気を出そうとしてカフェインが増えている人がいます。カフェインで不安が強まることは少なくない、と書かれています。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "PTSD｜こころの情報サイト",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=iGkwv4PNzgWhQ9xI",
       "kind": "summary"
      }
     },
     {
      "name": "急性ストレス反応",
      "why": "主に生死に関わるような強い心理的ストレスを経験したあと、よみがえる記憶や悪夢、眠れなさや不安が強く出ることを指す名前です。続いた期間の長さで、PTSDと区別される、と書かれています。",
      "src": {
       "org": "厚生労働省 こころの耳",
       "title": "急性ストレス反応：用語解説｜こころの耳",
       "url": "https://kokoro.mhlw.go.jp/glossaries/word-1540/",
       "kind": "summary"
      }
     },
     {
      "name": "PTSD(心的外傷後ストレス障害)",
      "why": "強い怖さをともなう体験のあと、その記憶が自分の意志と関係なくよみがえったり、悪夢に見たりすることが続く状態を指す名前です。症状がはっきりしてくるのが、数か月から数年たってからのこともある、と書かれています。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "PTSD｜こころの情報サイト",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=iGkwv4PNzgWhQ9xI",
       "kind": "summary"
      }
     },
     {
      "name": "うつ病",
      "why": "つらい体験や悲しい出来事のあとだけでなく、うれしい出来事のあとにも、うつ病が出ることがある、と書かれています。気分の落ち込み、楽しめなさ、眠れなさ、疲れやすさなどが続きます。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "うつ病｜こころの情報サイト",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=9D2BdBaF8nGgVLbL",
       "kind": "summary"
      }
     },
     {
      "name": "限局性恐怖症(不安症のひとつ)",
      "why": "特定の人や動物、状況に強い恐怖を感じて、それを避けるようになる状態を指す名前です。実際に危険な目にあったことが理由になっている場合もある、と書かれています。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "不安症｜こころの情報サイト",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=BLA9JV0KhiWPIMzX",
       "kind": "summary"
      }
     }
    ],
    "windows": [
     "mhwc",
     "hoken",
     "navii",
     "dial"
    ],
    "crisis": []
   },
   "sleep": {
    "label": "眠りの 困りごと",
    "lead": "ねつけない・夜中に 目が さめる・朝 おきられない・昼に とても ねむい など、ねむりの ことで 困って いる とき。",
    "scenes": [
     "布団に入っても、なかなか寝つけない。",
     "夜中に何度も目が覚めて、朝までぐっすり眠れない。",
     "朝、起きる時刻になっても起きられず、仕事や学校に間に合わないことが続いている。",
     "昼間に強い眠気がきて、会議中や運転中に居眠りしそうになる。",
     "家族から、いびきが大きいことや、寝ている間に息が止まっているようだと言われた。",
     "夕方から夜になると、脚がむずむずして落ち着かず、眠れない。"
    ],
    "asks": [
     "眠りの状態(寝つき・夜中に起きること・朝の起きにくさ・昼間の眠気)を、時間をかけて聞いてほしい。",
     "飲んでいる薬や、コーヒー・お酒・たばこの習慣も含めて、原因を一緒に考えてほしい。",
     "「気の持ちよう」と決めつけず、体の病気や気持ちの面もあわせて確かめてほしい。",
     "寝た時刻や起きた時刻を書いたメモで伝えたいので、見てほしい。",
     "薬を使う場合は、効き方や注意点を、わかりやすく説明してほしい。",
     "朝が苦手なので、午後や夕方の時間で診てほしい。"
    ],
    "meyasu": {
     "has": true,
     "text": "「本ガイドに記載されている事項を実践しても十分な時間眠れない、睡眠で休養感が得られない、日中の眠気が強いなどの症状が継続し、それらの症状が日中の生活に影響を及ぼしている場合は、速やかに医師に相談しましょう」",
     "src": {
      "org": "厚生労働省",
      "title": "健康づくりのための睡眠ガイド2023",
      "url": "https://www.mhlw.go.jp/content/001305530.pdf",
      "kind": "quote"
     }
    },
    "names": [
     {
      "name": "不眠症",
      "why": "寝つけない、夜中に何度も目が覚める、朝早く目が覚めて再び眠れない、といった夜の困りごとに、昼間の活力の低下や気分の落ちこみ、仕事のしにくさが重なるときに、確かめることがある名前です。ほかの病気や心のつらさに伴って出ることもあります。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "不眠症（睡眠障害）",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=XpsDJBKfyaGD0mIx",
       "kind": "summary"
      }
     },
     {
      "name": "睡眠時無呼吸症候群",
      "why": "眠っている間に呼吸が止まることをくり返し、ぐっすり眠れないため、昼間に強い眠気が出る名前です。大きないびきや、寝ている間の呼吸の止まりがあるときに、専門の医療機関で検査をして確かめることがあります。",
      "src": {
       "org": "厚生労働省 生活習慣病などの情報(e-ヘルスネット)",
       "title": "睡眠時無呼吸症候群 / SAS",
       "url": "https://kennet.mhlw.go.jp/information/information/dictionary/heart/yk-026.html",
       "kind": "summary"
      }
     },
     {
      "name": "むずむず脚症候群(レストレスレッグス症候群)",
      "why": "寝る前にじっと休んでいると、手や脚(特に脚)に不快な感じが出て、寝つきにくくなる名前です。寝つきにくい形の不眠と間違われることがあります。",
      "src": {
       "org": "厚生労働省",
       "title": "健康づくりのための睡眠ガイド2023",
       "url": "https://www.mhlw.go.jp/content/001305530.pdf",
       "kind": "summary"
      }
     },
     {
      "name": "概日リズム睡眠・覚醒障害(体内時計のずれ)",
      "why": "体内時計がずれて、眠る時刻と起きる時刻が、学校や仕事の生活に合わなくなる名前です。夜遅くまで寝つけず朝に起きられない形や、夜勤・交代勤務で乱れる形などがあります。",
      "src": {
       "org": "厚生労働省 生活習慣病などの情報(e-ヘルスネット)",
       "title": "概日リズム睡眠・覚醒障害",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-02-006.html",
       "kind": "summary"
      }
     },
     {
      "name": "睡眠不足症候群",
      "why": "眠る時間が足りない状態が長く続き、昼間の強い眠気やだるさ、気分の不安定さが出る名前です。必要な睡眠時間には個人差があり、毎日それなりに眠っていても足りていないことがあり、眠気に自分では気づきにくくなることもあります。",
      "src": {
       "org": "厚生労働省 生活習慣病などの情報(e-ヘルスネット)",
       "title": "昼間の眠気",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-02-002.html",
       "kind": "summary"
      }
     },
     {
      "name": "体の病気に伴う不眠",
      "why": "高血圧、心臓や呼吸器の病気、腎臓の病気、頻尿の出る病気、糖尿病、痛みやかゆみの出る病気など、体の病気が背景で眠りが乱れることがあります。その場合は、眠りだけでなく、もとの体の病気も確かめます。",
      "src": {
       "org": "厚生労働省 生活習慣病などの情報(e-ヘルスネット)",
       "title": "不眠症",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-02-001.html",
       "kind": "summary"
      }
     },
     {
      "name": "薬・カフェイン・ニコチン・お酒による不眠",
      "why": "飲んでいる薬(血圧の薬、甲状腺の薬、抗がん剤など)や、コーヒー・紅茶・たばこ、寝る前のお酒が、眠りをさまたげることがあります。薬は自分の判断でやめず、いま使っている薬や、よくとる飲み物・お酒を、相談のときに伝えると確かめやすくなります。",
      "src": {
       "org": "厚生労働省 生活習慣病などの情報(e-ヘルスネット)",
       "title": "不眠症",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-02-001.html",
       "kind": "summary"
      }
     },
     {
      "name": "うつ病",
      "why": "気分の落ちこみや意欲の低下のほかに、眠れない、朝早く目が覚める、起きられない・眠りすぎるといった体の症状が出ることもある名前です。体の症状が目立つと、気分や意欲の変化に気づきにくいことがあります。",
      "src": {
       "org": "厚生労働省 生活習慣病などの情報(e-ヘルスネット)",
       "title": "体の不調はうつ病でも現れます。かかりつけ医へ相談してみましょう",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-07-004.html",
       "kind": "summary"
      }
     }
    ],
    "windows": [
     "kakaritsuke",
     "navii",
     "hoken",
     "mhwc"
    ],
    "crisis": []
   },
   "eating": {
    "label": "食べることの 困りごと",
    "lead": "食べられない・食べすぎる・食べるのが こわい など、食事の ことで 困って いる とき。",
    "scenes": [
     "食べたい気持ちがわかず、食べ物がのどを通りにくい日が続いている。",
     "食べ始めると自分では止められず、食べすぎて苦しくなることがある。",
     "気がつくと食べ物のことばかり考えていて、ほかのことに集中しにくい。",
     "食べられるものがかなり限られていて、味やにおい、食感がつらくて避けてしまう食べ物が多い。",
     "のどに食べ物を詰まらせたり、吐いたりしたことがきっかけで、食べるのが怖くなった。",
     "夜、寝ぼけたような状態で食べていて、朝になると覚えていないことがある。"
    ],
    "asks": [
     "体型や見た目について、コメントしないでほしい。",
     "無理に食べさせたり、食べるよう急かしたりしないでほしい。",
     "みんなで一緒に食べる場面は、ほかの場所や時間を選べるようにしてほしい。",
     "食べられるものや、苦手なにおい・食感を、先に聞いてほしい。",
     "体の検査や診察の流れを、先に説明してほしい。",
     "話しにくいことは、紙に書いて渡してもよいことにしてほしい。"
    ],
    "meyasu": {
     "has": true,
     "text": "「摂食障害のサインや症状に気づいたら、できるだけ早く専門家に相談して治療を受けることが大切です」",
     "src": {
      "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
      "title": "摂食障害",
      "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=daWRhKdTNvsjgjM5",
      "kind": "quote"
     }
    },
    "names": [
     {
      "name": "体の病気(消化器の病気・ホルモン(内分泌)の病気・膠原病など)",
      "why": "体重が 減って きた ときは、体の 病気が かくれて いる ことも あると、国立の 研究センターの ページに 書かれています。食べ方の 問題と 決めつけず、まず 体の 検査や 診察を 受ける ことを 大切に しています。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)摂食障害情報ポータルサイト",
       "title": "10代のあなたへ",
       "url": "https://edcenter.ncnp.go.jp/edportal_general/trouble/trouble_teen.html",
       "kind": "summary"
      }
     },
     {
      "name": "睡眠関連摂食障害(寝ぼけた状態で食べてしまう)",
      "why": "夜、寝ぼけた ような 状態で 食べて しまい、朝には おぼえて いない ことが あります。国立の 研究センターの ページでは、眠りの 途中で 起こる 行動の ひとつとして 説明されています。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "不眠症（睡眠障害）",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=XpsDJBKfyaGD0mIx",
       "kind": "summary"
      }
     },
     {
      "name": "摂食障害(神経性やせ症・神経性過食症・過食性障害)",
      "why": "必要な 量を 食べられない、食べすぎを 自分では 止められないなど、食べ方の 変化が つづいて、体と 心の 両方に 影響が 出る 病気の まとまりです。インスリン治療が 欠かせない 1型糖尿病の 人に 重なる ことも あり、注意が 必要と 書かれています。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "摂食障害",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=daWRhKdTNvsjgjM5",
       "kind": "summary"
      }
     },
     {
      "name": "回避・制限性食物摂取症(ARFID)",
      "why": "体型や 体重への こだわりが なくても、味・におい・食感への 敏感さや、のどに つまらせた・吐いた などの 出来事への こわさから、食べる ものや 量が 少なく なる ことが あります。国立の 研究センターの ページでは、摂食障害の ひとつとして 説明されています。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)摂食障害情報ポータルサイト",
       "title": "摂食障害はどんな病気？",
       "url": "https://edcenter.ncnp.go.jp/edportal_general/about/about_what.html",
       "kind": "summary"
      }
     },
     {
      "name": "うつ病",
      "why": "気分の 落ちこみや 意欲の 低下と ともに、食欲が 落ちたり、反対に 食べすぎたり する ことが あります。体の 症状が 目立つと、こころの 不調に 気づきにくい ことが ある、とも 書かれています。",
      "src": {
       "org": "厚生労働省 生活習慣病などの情報(e-ヘルスネット)",
       "title": "体の不調はうつ病でも現れます。かかりつけ医へ相談してみましょう",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-07-004.html",
       "kind": "summary"
      }
     },
     {
      "name": "自閉スペクトラム症",
      "why": "感覚が 過敏な ことや、こだわりが 強い ことが 特徴として 挙げられていて、偏食が 強い ことも ある、と 書かれています。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "発達障害（神経発達症）",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=MbkmLbVbTEhSpxyE",
       "kind": "summary"
      }
     }
    ],
    "windows": [
     "kakaritsuke",
     "mhwc",
     "hoken",
     "navii"
    ],
    "crisis": []
   },
   "habit": {
    "label": "お酒・ギャンブル・ゲームが やめにくい",
    "lead": "やめたい・へらしたいのに、つい つづけて しまう ときに",
    "scenes": [
     "やめよう、減らそうと決めても、気づくとまた続けている。",
     "「今日はここまで」と決めた時間や量やお金を、守れない。",
     "お酒やゲーム、ギャンブルのことを、身近な人に隠したり、ごまかしたりしてしまう。",
     "ゲームの夜ふかしが続いて、朝起きられず、遅刻や欠席が増えた。",
     "負けた分を取り戻したくて、また賭けてしまう。",
     "体の調子が悪いと分かっていても、お酒を減らせない。"
    ],
    "asks": [
     "責めたり決めつけたりせずに、まず話を聞いてほしい",
     "いまの使い方や困りごとを、順番に一緒に整理してほしい",
     "眠りや体の調子も、あわせて確かめてほしい",
     "相談できる窓口や、通える場所を具体的に教えてほしい",
     "家族や身近な人が、一緒に相談できるかどうかも教えてほしい",
     "話した内容を、誰にどこまで伝えるか、先に確かめてほしい"
    ],
    "meyasu": {
     "has": true,
     "text": "国の記事は、アルコールやギャンブルなどを「やめたくてもやめられない」状態を依存症という病気と説明し、まずは最寄りの精神保健福祉センターや保健所などの相談機関に相談することや、医療機関を受診することが大切だと書いています。ご本人が相談や治療に行きたがらなくても、ご家族だけでも相談はできます。",
     "src": {
      "org": "政府広報オンライン",
      "title": "アルコール、薬物、ギャンブルなどをやめたくてもやめられないなら．．．それは「依存症」という病気かも。",
      "url": "https://www.gov-online.go.jp/article/201803/entry-9081.html",
      "kind": "summary"
     }
    },
    "names": [
     {
      "name": "不眠症",
      "why": "寝る前のお酒は眠りを浅くし、朝早く目が覚めやすくなると、国のページに書かれています。眠りの困りごとの原因の一つとしてお酒も挙げられているので、眠りのこともあわせて確かめることがあります。",
      "src": {
       "org": "厚生労働省 生活習慣病などの情報(e-ヘルスネット)",
       "title": "不眠症 | 生活習慣病などの情報(e-ヘルスネット)",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-02-001.html",
       "kind": "summary"
      }
     },
     {
      "name": "アルコール依存症(アルコール使用症)",
      "why": "お酒の量を自分でおさえられなくなる状態を、国のページはこの名前で説明しています。ふつうに飲む人との境目ははっきり引けないと書かれていて、お酒を止めたり減らしたりしたときに体に出る症状についても説明されています。",
      "src": {
       "org": "厚生労働省 生活習慣病などの情報(e-ヘルスネット)",
       "title": "アルコールと依存 | 生活習慣病などの情報(e-ヘルスネット)",
       "url": "https://kennet.mhlw.go.jp/information/information/alcohol/a-05-001.html",
       "kind": "summary"
      }
     },
     {
      "name": "ギャンブル依存症(ギャンブル行動症)",
      "why": "予算や時間を決めても守れない、したことを隠す、負けた分をすぐ取り戻したくなる、といったことが、国のページにギャンブルのサインとして挙げられています。本人の心の弱さのせいで起きるものとは違う、とも書かれています。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "依存症｜こころの情報サイト",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=819yAWLAzXBx5XZ5",
       "kind": "summary"
      }
     },
     {
      "name": "ゲーム障害(ゲーム依存・ゲーム行動症)",
      "why": "ゲームを自分でおさえられない、ほかの生活よりゲームを優先する、困りごとが出ても続ける、といった特徴を、国の会議で示された資料はこの名前で説明しています。朝起きられない、遅刻や欠席、昼夜逆転といった暮らしの変化も例に挙がっています。",
      "src": {
       "org": "厚生労働省(独立行政法人国立病院機構 久里浜医療センター 依存症対策全国センターの資料を掲載)",
       "title": "ゲーム障害について(ゲーム依存症対策関係者連絡会議 資料2)",
       "url": "https://www.mhlw.go.jp/content/12205250/000759309.pdf",
       "kind": "summary"
      }
     },
     {
      "name": "危険なアルコール使用・危険なギャンブル行動又は賭け事・危険なゲーム行動",
      "why": "国の分類には、アルコール使用症などの病気の名前とは別の章に、この3つの名前が、健康に関わる行動の問題として載っています。名前がつくかどうかにかかわらず、困りごとのまま相談できます。",
      "src": {
       "org": "総務省",
       "title": "統計法第28条の規定に基づき、疾病、傷害及び死因に関する分類を定める件(令和8年1月19日 総務省告示第11号)",
       "url": "https://www.soumu.go.jp/main_content/001051239.pdf",
       "kind": "fact"
      }
     },
     {
      "name": "うつ病",
      "why": "お酒の量が増えることが、うつ病のサインの例として国のページに挙げられています。お酒のことで困っているときは、気分の落ち込みや眠れなさがあるかどうかも、あわせて伝えることができます。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "うつ病｜こころの情報サイト",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=9D2BdBaF8nGgVLbL",
       "kind": "summary"
      }
     },
     {
      "name": "双極症(双極性障害・躁うつ病)",
      "why": "気分が極端に高ぶる時期に、大きな買い物やギャンブルでお金を使いすぎることがある、と国のページに書かれています。ギャンブルのことで困っているときは、気分が高ぶっていた時期があったかどうかも、あわせて伝えることができます。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "双極性障害（躁うつ病）｜こころの情報サイト",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=RM3UirqngPV6bFW0",
       "kind": "summary"
      }
     },
     {
      "name": "注意欠如・多動症(ADHD)",
      "why": "ゲームの困りごとに重なる別の病気のなかで、いちばん多いと、国の補助事業で作られた相談マニュアルが報告している名前です。自閉スペクトラム症にも多く見られると書かれています。",
      "src": {
       "org": "依存症対策全国センター(国立病院機構 久里浜医療センター)",
       "title": "ゲーム依存相談対応マニュアル",
       "url": "https://www.ncasa-japan.jp/pdf/document45.pdf",
       "kind": "summary"
      }
     }
    ],
    "windows": [
     "mhwc",
     "hoken",
     "navii",
     "kakaritsuke",
     "dial"
    ],
    "crisis": []
   },
   "attention": {
    "label": "注意・段取りの 困りごと",
    "lead": "集中が つづかない・順番に すすめにくい・わすれものが おおい、など。",
    "scenes": [
     "人の話を聞いていても、いつのまにか別のことを考えている。",
     "仕事や家事を順番どおりに進められず、期限に間に合わなくなる。",
     "頼まれたことや約束を後で思い出せなかったり、物をなくしたりすることが多い。",
     "同じ作業を続けていると、うっかりミスが増える。",
     "じっと座っていると落ち着かず、そわそわしてしまう。",
     "忘れ物や遅刻が多いと、まわりから言われることがある。"
    ],
    "asks": [
     "指示は一つずつ伝えてほしい",
     "大事なことは文字に書いて渡してほしい",
     "期限や約束は、早めに伝えてほしい",
     "一度にたくさん頼まず、小分けにしてほしい",
     "気が散りにくい静かな場所で話したい",
     "できなかったところを責めず、できたところを認めてほしい"
    ],
    "meyasu": {
     "has": false,
     "text": "",
     "src": null
    },
    "names": [
     {
      "name": "睡眠不足・睡眠覚醒障害",
      "why": "眠りが たりない 日が つづいたり、眠りの 病気が あったりすると、昼に 強い 眠気が 出て 集中しにくく なると 説明されて います。眠気の 原因は ほかにも、飲んで いる 薬や 気持ちの 不調など いろいろ あります。",
      "src": {
       "org": "厚生労働省 生活習慣病などの情報(e-ヘルスネット)",
       "title": "昼間の眠気 - 睡眠不足だけではなく睡眠・覚醒障害にも注意が必要",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-02-002.html",
       "kind": "summary"
      }
     },
     {
      "name": "不眠症",
      "why": "寝つけない・夜中に 目が さめる・朝 早く 目が さめる などが つづくと、日中に 集中しにくく なったり、やる気が 出にくく なったり すると 説明されて います。原因は ストレス、体や こころの 病気、薬など いろいろです。",
      "src": {
       "org": "厚生労働省 生活習慣病などの情報(e-ヘルスネット)",
       "title": "不眠症",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-02-001.html",
       "kind": "summary"
      }
     },
     {
      "name": "甲状腺機能亢進症(バセドウ病)",
      "why": "体の ホルモンの 病気の ひとつで、動悸や 手の ふるえの ほかに、落ち着かない・気持ちが 不安定に なることが あると 書かれて います。内科で 診察を 受ける ことを すすめる 説明も あります。",
      "src": {
       "org": "厚生労働省 働く女性の心とからだの応援サイト",
       "title": "甲状腺の病気",
       "url": "https://www.bosei-navi.mhlw.go.jp/health/thyroid.html",
       "kind": "summary"
      }
     },
     {
      "name": "うつ病",
      "why": "気分の 落ちこみや やる気の 出なさに くわえて、考えを まとめにくく、仕事や 家事に 集中しにくく なる ことも あると 説明されて います。体の 不調が 目立って、こころの 変化に 気づきにくい ことも あると 書かれて います。",
      "src": {
       "org": "厚生労働省 生活習慣病などの情報(e-ヘルスネット)",
       "title": "体の不調はうつ病でも現れます。かかりつけ医へ相談してみましょう",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-07-004.html",
       "kind": "summary"
      }
     },
     {
      "name": "不安症(全般性不安)",
      "why": "いろいろな ことに 不安が 次々と わいて つづくと、いつも 落ち着かず、疲れやすく、集中も つづきにくく なると 書かれて います。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "不安症",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=BLA9JV0KhiWPIMzX",
       "kind": "summary"
      }
     },
     {
      "name": "双極性障害(躁うつ病)",
      "why": "気分が 大きく 高ぶる 時期の サインとして、アイデアが 次々に 出ても 最後まで やりとげにくい ことが 書かれて います。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "双極性障害(躁うつ病)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=RM3UirqngPV6bFW0",
       "kind": "summary"
      }
     },
     {
      "name": "注意欠如多動症(ADHD)",
      "why": "注意を つづけにくい、順番を 立てて 動きにくい、落ち着きにくい といった ことが 小さいころから つづき、学校や 家、職場など いくつもの 場面で 困りごとに なると 説明されて います。大人では、仕事の ミスや 約束の わすれが 出ると 書かれて います。",
      "src": {
       "org": "発達障害ナビポータル",
       "title": "注意欠如多動症",
       "url": "https://hattatsu.go.jp/supporter/healthcare_health/about-adhd-2/",
       "kind": "summary"
      }
     },
     {
      "name": "自閉スペクトラム症(ASD)",
      "why": "仕事で 臨機応変に 動く、いくつかの 仕事を 同時に 進める、あいまいな 指示に 合わせる、といった ことが むずかしい 場面が 書かれて います。",
      "src": {
       "org": "政府広報オンライン",
       "title": "発達障害に気付いたら？大人になって気付いたときの専門相談窓口",
       "url": "https://www.gov-online.go.jp/article/202302/entry-10203.html",
       "kind": "summary"
      }
     }
    ],
    "windows": [
     "hattatsu",
     "kakaritsuke",
     "mhwc",
     "hoken",
     "navii"
    ],
    "crisis": []
   },
   "social": {
    "label": "人づきあい・こだわり・感覚の 困りごと",
    "lead": "ひとと はなす ことや かかわる ことの つらさ、きまった やりかたへの こだわり、おとや ひかり・においの つらさ など。",
    "scenes": [
     "会話の相手の気持ちや、その場の空気がつかみにくく、話がかみ合わないと感じる。",
     "人前で話したり、人の目が集まったりする場面で強く緊張して、その場を避けてしまう。",
     "親しい人とは話せるのに、そうでない相手の前では声が出なくなる。",
     "決めたやり方や順番、物の置き方が変わると、強く不安になる。",
     "音や光、においなどが強く感じられて、人の多い場所がつらい。",
     "人の話が聞き取りにくかったり、気持ちが沈んだりして、人と会うのも話すのもつらくなっている。"
    ],
    "asks": [
     "ゆっくり、はっきり話してほしい",
     "大事なことは、書いて伝えてほしい",
     "静かな場所で話したい",
     "予定ややり方を変えるときは、先に知らせてほしい",
     "答えを急がせず、待ってほしい",
     "話す代わりに、文字やメモで答えさせてほしい"
    ],
    "meyasu": {
     "has": false,
     "text": "",
     "src": null
    },
    "names": [
     {
      "name": "難聴(聞こえにくさ)",
      "why": "聞こえにくいと、家族や 友だちとの 会話が うまく いかなく なる、と 書かれています。人との つながりが 少なく なって、うつ状態に なる ことも ある、とも 書かれ、耳鼻咽喉科への 案内も あります。",
      "src": {
       "org": "厚生労働省",
       "title": "「聞こえにくさ」感じていませんか？",
       "url": "https://www.mhlw.go.jp/nanntyou/",
       "kind": "summary"
      }
     },
     {
      "name": "うつ病",
      "why": "こころの 症状の 一つとして、人と 会いたくない、人と 話すのが つらいと 感じる ことが ある、と 書かれています。ほかにも、何も やる気に なれない、楽しめない などの 症状が 一緒に 挙げられています。",
      "src": {
       "org": "厚生労働省 生活習慣病などの情報(e-ヘルスネット)",
       "title": "生活習慣病などの情報(e-ヘルスネット)「体の不調はうつ病でも現れます。かかりつけ医へ相談してみましょう」",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-07-004.html",
       "kind": "summary"
      }
     },
     {
      "name": "社交不安症",
      "why": "人の 前に 出る、話す、注目されたり 評価されたり する 場面で 強い 不安が 出て、その 場面を 避けるように なる、と 書かれています。親しい 人や、自分に 関心を 持たない 人の 前では 不安が 出ない ことも ある、とも 書かれています。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "こころの情報サイト「不安症」",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=BLA9JV0KhiWPIMzX",
       "kind": "summary"
      }
     },
     {
      "name": "場面緘黙(選択性緘黙)",
      "why": "特定の 人の 前では 話せるのに、ほかの 人たちの 前で 話す ことが 必要に なっても、まったく 話せなく なる ことが 特徴と して 書かれています。そのために 勉強や 仕事に 支障が 出る ことも 少なく ない、と 書かれています。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "こころの情報サイト「不安症」",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=BLA9JV0KhiWPIMzX",
       "kind": "summary"
      }
     },
     {
      "name": "強迫症(強迫性障害)",
      "why": "決めた 手順どおりに できないと 不安に なる、物の 置き方に こだわって、そう なっていないと 不安に なる、数字にも 強く こだわる、と 書かれています。確認や くりかえしが 周りの 人にも およんで、人間関係が うまく いかなく なる ことも ある、とも 書かれています。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "こころの情報サイト「強迫性障害」",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=MiyHEH6ZUZDxDeYX",
       "kind": "summary"
      }
     },
     {
      "name": "自閉スペクトラム症",
      "why": "言葉や 表情、身ぶりで やりとりする ことや、相手の 気持ちを 読み取る ことが 苦手で、特定の ことへの 強い 関心、強い こだわり、感覚の 過敏さが ある、と 書かれています。就職してから、仕事を 臨機応変に すすめる ことや 人間関係で 悩む ことも ある、と 書かれています。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "こころの情報サイト「発達障害(神経発達症)」",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=MbkmLbVbTEhSpxyE",
       "kind": "summary"
      }
     }
    ],
    "windows": [
     "hattatsu",
     "mhwc",
     "hoken",
     "navii",
     "kakaritsuke"
    ],
    "crisis": []
   },
   "reading": {
    "label": "読み書き・計算の 困りごと",
    "lead": "読む・書く・計算する ことが、がんばっても たいへんな とき。",
    "scenes": [
     "文章を読むのに人より時間がかかり、何度も読み返してしまう。",
     "読んでも内容が頭に入ってこず、書類や手紙の意味がつかみにくい。",
     "漢字や言葉をうまく書けず、書き間違いや書き忘れが多い。",
     "字の形が整わず、書くのに時間も力もかかる。",
     "簡単な計算や、文章で出された計算の問題でつまずく。",
     "話したり聞いたりはできるのに、読み書きや計算になると、時間をかけても思うように進まない。"
    ],
    "asks": [
     "文章は、大きな文字と広い行間で、漢字には読みがなをつけて見せてほしい。",
     "大事な内容は、読み上げるか、声で伝えてほしい。",
     "書く代わりに、パソコンやスマホで入力したり、写真や録音で記録したりさせてほしい。",
     "計算には、電卓を使わせてほしい。",
     "読んだり書いたり計算したりする時間を、長めに取ってほしい。",
     "一度に出す量を減らして、ひとつずつ渡してほしい。"
    ],
    "meyasu": {
     "has": false,
     "text": "",
     "src": null
    },
    "names": [
     {
      "name": "視覚・聴覚の問題（見えにくさ・聞こえにくさ）",
      "why": "見えにくさや 聞こえにくさが、読み書きの 困りごとの 直接の 原因に なる ことが ある、と 書かれて います。必要に 応じて、目や 耳の 検査も 行う、とも 書かれて います。",
      "src": {
       "org": "発達障害ナビポータル",
       "title": "限局性学習症",
       "url": "https://hattatsu.go.jp/supporter/healthcare_health/about-sld/",
       "kind": "summary"
      }
     },
     {
      "name": "睡眠障害",
      "why": "読み書きや 計算の 困りごとを 調べる ときに、睡眠障害などが 重なって いないかも あわせて 調べる ことが 大切、と 書かれて います。",
      "src": {
       "org": "発達障害ナビポータル",
       "title": "限局性学習症",
       "url": "https://hattatsu.go.jp/supporter/healthcare_health/about-sld/",
       "kind": "summary"
      }
     },
     {
      "name": "うつ病",
      "why": "気分の 落ちこみや やる気の 出なさに くわえて、読書のような 好きだった ことも 楽しめなく なる、考えを まとめにくく 集中しにくく なる、と 書かれて います。",
      "src": {
       "org": "厚生労働省 生活習慣病などの情報(e-ヘルスネット)",
       "title": "体の不調はうつ病でも現れます。かかりつけ医へ相談してみましょう",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-07-004.html",
       "kind": "summary"
      }
     },
     {
      "name": "限局性学習症（学習障害・LD）",
      "why": "厚生労働省の ページに、『「話す」「理解」は普通にできるのに、「読む」「書く」「計算する」ことが、努力しているのに極端に苦手』と 書かれて います。",
      "src": {
       "org": "厚生労働省",
       "title": "発達障害の特性（代表例）",
       "url": "https://www.mhlw.go.jp/seisakunitsuite/bunya/koyou_roudou/koyou/shougaishakoyou/shisaku/jigyounushi/e-learning/hattatsu/characteristic.html",
       "kind": "quote"
      }
     },
     {
      "name": "注意欠如・多動症（ADHD）",
      "why": "注意を 続ける ことの むずかしさなどが あり、学校や 家庭、職場などで 困りごとが 出る、と 書かれて います。限局性学習症など ほかの 発達障害が 伴う ことも ある、とも 書かれて います。",
      "src": {
       "org": "発達障害ナビポータル",
       "title": "注意欠如多動症",
       "url": "https://hattatsu.go.jp/supporter/healthcare_health/about-adhd-2/",
       "kind": "summary"
      }
     },
     {
      "name": "発達性協調運動症",
      "why": "手や 体を 思いどおりに 動かす ことが むずかしく、字を 書く ことも うまく いかない ことが ある、と 書かれて います。",
      "src": {
       "org": "発達障害ナビポータル",
       "title": "発達性協調運動症",
       "url": "https://hattatsu.go.jp/supporter/healthcare_health/about-dcd/",
       "kind": "summary"
      }
     },
     {
      "name": "知的能力障害（知的障害）",
      "why": "知的な 働きの 水準に よって 日常生活に 困難が ある 状態で、読み書きなど いくつかの 面の 困難さを 見て、その 重さを 判断する、と 書かれて います。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "発達障害（神経発達症）",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=MbkmLbVbTEhSpxyE",
       "kind": "summary"
      }
     }
    ],
    "windows": [
     "kakaritsuke",
     "hattatsu",
     "navii",
     "mhwc",
     "hoken"
    ],
    "crisis": []
   },
   "wave": {
    "label": "気分の 波が 大きい",
    "lead": "気分が 大きく 上がったり 下がったり して、自分でも 気持ちが おいつかない ときに。",
    "scenes": [
     "元気すぎる時期と、落ちこんで動けない時期が、入れかわる。",
     "ほとんど寝ていないのに元気で、動き回れる時期がある。",
     "やりたいことが次々に浮かんで、どれも途中のままになってしまう。",
     "気が大きくなって、あとで困るほどお金を使ってしまったことがある。",
     "ちょっとしたことでいらいらして、気持ちを抑えにくい。",
     "気分が高ぶっているときに動いた結果、人間関係や仕事に響いたことがある。"
    ],
    "asks": [
     "調子がよすぎた時期のことも、あわせて聞いてほしい。",
     "気分の上がり下がりを、時間をかけて一緒に振り返ってほしい。",
     "お金や仕事の大きな決めごとの前に、立ち止まる声かけをしてほしい。",
     "睡眠や薬、お酒のことも含めて、体の面からも確かめてほしい。",
     "いつもと様子が違うと感じたら、責めずに教えてほしい。",
     "元気なときも落ちこんでいるときも、話を最後まで聞いてほしい。"
    ],
    "meyasu": {
     "has": false,
     "text": "",
     "src": null
    },
    "names": [
     {
      "name": "甲状腺機能亢進症（バセドウ病）",
      "why": "甲状腺ホルモンが 出すぎる 体の 病気では、動悸や 手の ふるえの ほかに、落ち着かない・気持ちが 不安定に なる ことが あると、国の ページに 書かれています。気分の 波と 似て 見えても 体に 原因が ある ことも あるので、内科などで 確かめる ことが あります。",
      "src": {
       "org": "厚生労働省 働く女性の心とからだの応援サイト",
       "title": "甲状腺の病気",
       "url": "https://www.bosei-navi.mhlw.go.jp/health/thyroid.html",
       "kind": "summary"
      }
     },
     {
      "name": "睡眠不足症候群",
      "why": "睡眠不足が 長く つづいて、眠気や 考える 力の 低下、気分の 不安定さが 出る 状態を、この 名前で 呼ぶ、と 国の ページに あります。気分の 波と あわせて、眠りの ようすも 確かめる ことが あります。",
      "src": {
       "org": "厚生労働省 生活習慣病などの情報(e-ヘルスネット)",
       "title": "生活習慣病などの情報(e-ヘルスネット)「昼間の眠気」",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-02-002.html",
       "kind": "summary"
      }
     },
     {
      "name": "薬の影響（ステロイド薬など）",
      "why": "ステロイド薬などの 薬では、気分が 高ぶったり 落ちこんだり、いらいら・不安が 出る ことが あると、国の マニュアルに あります。自分の 判断で 薬を やめず、出した 医師や 薬剤師に 伝えて 確かめます。",
      "src": {
       "org": "厚生労働省",
       "title": "重篤副作用疾患別対応マニュアル 薬剤惹起性うつ病 平成20年6月",
       "url": "https://www.mhlw.go.jp/topics/2006/11/dl/tp1122-1j05_0001.pdf",
       "kind": "summary"
      }
     },
     {
      "name": "お酒の影響（離脱症状など）",
      "why": "お酒を 長く 飲んだ あとで 減らしたり やめたり した ときに、不眠・不安・いらいらが 出る ことが あると、国の ページに 書かれています。お酒の 気持ちへの 影響も 書かれて いるので、話せる 範囲で お酒の ようすも 伝えて かまいません。",
      "src": {
       "org": "厚生労働省 生活習慣病などの情報(e-ヘルスネット)",
       "title": "生活習慣病などの情報(e-ヘルスネット)「アルコールと依存」",
       "url": "https://kennet.mhlw.go.jp/information/information/alcohol/a-05-001.html",
       "kind": "summary"
      }
     },
     {
      "name": "月経前不快気分障害（PMDD）",
      "why": "女性の うつの ページに、月経前不快気分障害（PMDD）として、小さな ことで いらいらしたり 気分が 落ちこんだり する ことが 書かれて います。月経が 終わっても 不快感が 続く ときは 早めに 受診を、とも あるので、気分の 波が 月の 周期と 重なって いないかも 話せます。",
      "src": {
       "org": "厚生労働省 働く女性の心とからだの応援サイト",
       "title": "女性のうつ",
       "url": "https://www.bosei-navi.mhlw.go.jp/health/depression.html",
       "kind": "summary"
      }
     },
     {
      "name": "うつ病",
      "why": "気分が 下がる 時期は、うつ病と 重なって 見える ことが あります。国の ページは、うつ状態と 躁状態を くりかえす 病気と うつ病では 治療が 大きく ちがうため、専門家の 判断が 必要だと 書いています。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "こころの情報サイト「うつ病」",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=9D2BdBaF8nGgVLbL",
       "kind": "summary"
      }
     },
     {
      "name": "双極性障害（躁うつ病）",
      "why": "憂うつな 時期と、ふだんより ずっと 調子が 高く 活動的に なる 時期を くりかえす 病気と して 書かれて います。気分の 波は だれにでも あると した うえで、周りの 人が 「いつもと ちがう」と 気づくほど 行きすぎる ときの 名前と して ふれ、調子の よい 時期は 本人が 気づきにくい、とも 書いて います。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "こころの情報サイト「双極性障害（躁うつ病）」",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=RM3UirqngPV6bFW0",
       "kind": "summary"
      }
     },
     {
      "name": "注意欠如・多動症（ADHD）",
      "why": "大人の ADHD では、計画的に 進める ことや 感情の コントロールの 難しさが 見られ、気分の 落ち込みや 気分の 波などの 不調を ともなう ことも ある、と 国の ページに 書かれています。注意や 段取りで 困って いる ことも、相談の ときに あわせて 話せます。",
      "src": {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "こころの情報サイト「発達障害（神経発達症）」",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=MbkmLbVbTEhSpxyE",
       "kind": "summary"
      }
     }
    ],
    "windows": [
     "kakaritsuke",
     "mhwc",
     "hoken",
     "navii",
     "dial"
    ],
    "crisis": []
   }
  },
  "common": {
   "learn": [
    {
     "h": "名前を 知ると、ふだんの ゆらぎが 症状に 見えやすく なる ことが あります",
     "body": "病気や 発達の 名前を 知ると、ふだんの ちょっとした 疲れや ぼんやりが、症状の しるしに 見えやすく なる ことが あります。\n気もちの 動きが 体や 気分を かえることは、気のせいでは なく、じっさいに 起こる ことです。\nねぶそくや ストレス、スマホ、まわりの 事情でも、にた ことは 起こります。\n名前を 見て「これかも」と 思っても、それだけで 決めずに、ほかの 理由も 考えて みて ください。\nつらさが 続く ときは、名前が なくても、そのまま 相談して かまいません。",
     "srcs": []
    },
    {
     "h": "気分の 波や 確かめたい 気もちは、だれにでも あります",
     "body": "気分の 波や、念の ために 確かめたく なる 気もちは、だれにでも あります。\nでも 名前(診断)は、症状と、それが 続いた 期間と、暮らしへの 支障を 合わせて、医師が つけます(たとえば 注意の 困りごとは、学校や 家庭、職場など、いくつもの 場面で 見られる ものと して 説明されて います)。\n発達に かかわる 名前では、小さい ころからの ようすも 大切な 手がかりに なります。\n名前が つくか どうかは、まわりの 環境や ストレスの 状態も ふくめて、総合的に 見て、医師が 考えます。\n困りごとが 続く ときは、名前に かかわらず、そのまま 相談して かまいません。",
     "srcs": [
      {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "こころの情報サイト",
       "url": "https://kokoro.ncnp.go.jp/",
       "kind": "summary"
      },
      {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "双極性障害(躁うつ病)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=RM3UirqngPV6bFW0",
       "kind": "summary"
      },
      {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "強迫性障害",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=MiyHEH6ZUZDxDeYX",
       "kind": "summary"
      },
      {
       "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
       "title": "発達障害(神経発達症)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=MbkmLbVbTEhSpxyE",
       "kind": "summary"
      },
      {
       "org": "国立障害者リハビリテーションセンター",
       "title": "医療・相談機関へ行くときには",
       "url": "https://www.rehab.go.jp/ddis/howto/consult/visit_hospital/",
       "kind": "summary"
      }
     ]
    },
    {
     "h": "病名が なくても 相談できます",
     "body": "病名が なくても、困りごとは そのまま 相談できます。\nたとえば 発達障害者支援センターは、診断が なくても 相談を 受けて います。\n学校や 仕事で 配慮を 頼む ときは、病名では なく、「どんな 場面で 何に 困って いるか」を、言葉や 筆談など 自分に 合った 方法で 伝えられます。\n国の 決まり(障害者差別解消法の 基本方針)では、配慮の 対象に なる 人は、障害者手帳を もって いる 人に 限られません。\nどう して ほしいか、どこまで できるかは、場面や 相手の 事情で ちがうので、話し合いながら 決めて いきます。",
     "srcs": [
      {
       "org": "内閣府",
       "title": "障害を理由とする差別の解消の推進に関する基本方針",
       "url": "https://www8.cao.go.jp/shougai/suishin/sabekai/kihonhoushin/honbun.html",
       "kind": "summary"
      },
      {
       "org": "発達障害ナビポータル",
       "title": "相談できる窓口を教えて欲しい",
       "url": "https://hattatsu.go.jp/supporter/welfare/faq/welfare-faq01/",
       "kind": "summary"
      }
     ]
    },
    {
     "h": "ただし、制度を 使うには 診断書が いる ことが あります",
     "body": "自立支援医療(精神通院医療)は、通院の 医療費の 自己負担を 軽くする、国の 制度です。\nふつうは 3割の ところが 1割に なり、世帯の 所得に 応じて、1か月の 上限も あります。\n申請は 受診の あとに、住んで いる 市町村の 窓口で します。書類の 中に 医師の 診断書が 入ります。\n仕事の 場面では、障害者かどうか 判断に まよう とき、手帳や 受給者証で 確かめられない 場合に、本人の 了解を 得た うえで、障害名や 病名が 書かれた 医師の 診断書や 意見書で 確かめる ことが あります。\n診断書が いるか どうかは 制度や 場面で ちがうので、手続きの 前に 窓口で 聞いて みて ください。",
     "srcs": [
      {
       "org": "厚生労働省",
       "title": "自立支援医療(精神通院医療)について",
       "url": "https://www.mhlw.go.jp/content/001507767.pdf",
       "kind": "summary"
      },
      {
       "org": "厚生労働省",
       "title": "障害者雇用促進法に基づく障害者差別禁止・合理的配慮に関するQ&A【第二版】",
       "url": "https://www.mhlw.go.jp/tenji/dl/file13-04.pdf",
       "kind": "summary"
      }
     ]
    },
    {
     "key": "notTool",
     "h": "病名は、だれかより 上に 立つ ための 道具では ありません",
     "body": "病名は、だれかより 上に 立ったり、人を 下に 見たり する ための 道具では ありません。\n名前を 知って 気もちが 楽に なる 人も います。それは 大切な ことです。\nまわりの 人に わかって ほしい、やさしく して ほしいと 思うのも、自然な ことです。\n\nやさしく して ほしい ときは、病名を 言わなくても、そのまま 頼んで いいのです。\n「何に 困って いるか」と「何を して ほしいか」を 合わせて 言うと、伝わりやすく なります。\n\nたとえば、こんな 言い方が あります。\n「今日は つかれて いるので、ゆっくり 話して ほしい」\n「いっぺんに 言われると わからなく なるので、ひとつずつ 言って ほしい」\n「耳で 聞くだけだと 覚えにくいので、大事な ことは、紙や メールに 書いて ほしい」\n「人の 多い ところが 苦手なので、静かな 場所で 話したい」\n「返事に 時間が かかるので、すこし 待って ほしい」\n「いまは 気もちで いっぱいなので、まず 話を 聞いて ほしい。アドバイスは あとで いい」\n「今日は 調子が わるいので、すこし 休ませて ほしい」\n「急に 予定が 変わると あわてるので、早めに 教えて ほしい」\n「大きな 声で 言われると こわく なるので、おだやかに 話して ほしい」\n\nうまく 言えない ときは、紙に 書いて わたしても かまいません。このアプリで 困りごとを えらんで 問いに 答えると 出る「わたしの 困りごと」を、「大きく 見せる」で 見せる ことも できます。\n病名を 伝えたい ときは、伝えて かまいません。そのときも、病名と いっしょに「何に 困って いて、何を して ほしいか」を 伝えると、相手は 動きやすく なります。\n頼んでも、相手の 事情で できない ことも あります。そのときは、ほかの やり方が ないか、いっしょに 話して みて ください。\n\nこのアプリの 名前の 一覧を、まわりの 人を うたがう 材料に しないで ください。",
     "srcs": []
    },
    {
     "h": "このアプリに ついて",
     "body": "これは 診断では ありません。\nこの 一覧で『診断された』とは 言えません。\n医療機器では なく、国や 医療機関とも 関係が なく、国の ページを もとに そよぎが 自分の 言葉で まとめた ものです。\n出典は 各画面に のせて います。確認日は 2026-10-17 で、番号や 時間は 変わる ことが あります。\n相談するか どうかは、アプリでは なく、あなたが 決めます。",
     "srcs": []
    }
   ],
   "meyasuGeneral": {
    "text": "「こころの不調やストレス症状が長く続いたり、日常生活に支障が出ている場合は、早めに、専門機関に相談することをお勧めします」",
    "src": {
     "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
     "title": "こころの病気について理解を深めよう",
     "url": "https://kokoro.ncnp.go.jp/health_understanding.php",
     "kind": "quote"
    }
   },
   "devGeneral": [
    {
     "text": "「ひとりで抱え込まずに、まずは、専門の相談窓口や医療機関へ相談してみませんか」",
     "src": {
      "org": "政府広報オンライン",
      "title": "発達障害に気付いたら？大人になって気付いたときの専門相談窓口",
      "url": "https://www.gov-online.go.jp/article/202302/entry-10203.html",
      "kind": "quote"
     }
    },
    {
     "text": "発達障害者支援センターについて: 「発達障害の診断がなくても相談を受けられます」",
     "src": {
      "org": "発達障害ナビポータル",
      "title": "相談できる窓口を教えて欲しい",
      "url": "https://hattatsu.go.jp/supporter/welfare/faq/welfare-faq01/",
      "kind": "quote"
     }
    }
   ],
   "namesHow": {
    "text": "「特徴となる症状と持続期間およびそれによる生活上の支障がどの程度あるかを中心に診断名をつける方向に変わってきました」",
    "src": {
     "org": "国立精神・神経医療研究センター(NCNP)こころの情報サイト",
     "title": "こころの情報サイト",
     "url": "https://kokoro.ncnp.go.jp/",
     "kind": "quote"
    }
   }
  }
 },
 "en": {
  "groups": {
   "mood": {
    "label": "Feeling down, no motivation",
    "lead": "For when your mood stays low and it is hard to find the energy to do anything.",
    "scenes": [
     "My mood stays low from morning to night.",
     "Things I used to enjoy no longer feel enjoyable.",
     "I have no energy and cannot concentrate, so work and chores do not get done.",
     "I blame myself, and I keep seeing everything in a dark light.",
     "I cannot sleep at night, or I sleep too much. I have no appetite and my body feels heavy.",
     "I sometimes feel like disappearing or not being here anymore."
    ],
    "asks": [
     "Please tell me what to do one thing at a time.",
     "Please do not rush me for answers or decisions; I need time to think.",
     "Please write important things down for me.",
     "Please listen to me first before telling me to 'hang in there'.",
     "Please do not assume I am being lazy when I am resting.",
     "Please check together with me whether a physical illness or the medicine I am taking might be involved."
    ],
    "meyasu": {
     "has": true,
     "text": "The National Center of Neurology and Psychiatry's Kokoro Joho Site says: “Please consult a specialist institution if symptoms like the following continue.” Examples listed include “feeling down or gloomy” and “no energy to do anything.”",
     "src": {
      "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
      "title": "こころの病気について理解を深めよう (Understanding mental illness: when to consult)",
      "url": "https://kokoro.ncnp.go.jp/health_understanding.php",
      "kind": "quote"
     }
    },
    "names": [
     {
      "name": "Low mood related to physical illness or medicine",
      "why": "This page explains that physical illnesses, and the medicines taken for them, can cause a low mood. It therefore says that physical illness and the medicines you take need attention.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "うつ病 (Depression)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=9D2BdBaF8nGgVLbL",
       "kind": "summary"
      }
     },
     {
      "name": "Thyroid disorders (e.g. hypothyroidism)",
      "why": "When the thyroid works less than it should, you can feel cold and lack energy and motivation. The page notes that it resembles other health complaints and is easy to miss.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare (MHLW), Support Site for the Mind and Body of Working Women",
       "title": "甲状腺の病気 (Thyroid disease)",
       "url": "https://www.bosei-navi.mhlw.go.jp/health/thyroid.html",
       "kind": "summary"
      }
     },
     {
      "name": "Hearing difficulty (hearing loss)",
      "why": "The page lists effects of difficulty hearing: conversations with family and friends can go less well, and a person can become socially isolated and fall into a depressed state. It invites people who notice difficulty hearing to see an ear, nose and throat clinic.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare (MHLW)",
       "title": "「聞こえにくさ」感じていませんか？ (Have you noticed difficulty hearing?)",
       "url": "https://www.mhlw.go.jp/nanntyou/",
       "kind": "summary"
      }
     },
     {
      "name": "Insomnia and other sleep disorders",
      "why": "When poor sleep goes on, motivation and mood can drop during the day. The page also says that something that seems to be only a sleep problem can turn out to have depression behind it.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare (MHLW), e-Health Net",
       "title": "不眠症 (Insomnia)",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-02-001.html",
       "kind": "summary"
      }
     },
     {
      "name": "Alcohol-related problems (e.g. alcohol dependence)",
      "why": "As problems caused by drinking, the page lists harm to organs of the body and also mental effects such as depression. It also notes that symptoms such as sleeplessness and anxiety can appear when drinking is stopped or reduced.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare (MHLW), e-Health Net",
       "title": "アルコールと依存 (Alcohol and dependence)",
       "url": "https://kennet.mhlw.go.jp/information/information/alcohol/a-05-001.html",
       "kind": "summary"
      }
     },
     {
      "name": "Depression",
      "why": "The page describes it as an illness that brings both mental symptoms (no motivation, a sad mood) and physical ones (poor sleep, tiredness). Physical symptoms can stand out and make the mood symptoms easy to overlook.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare (MHLW), e-Health Net",
       "title": "体の不調はうつ病でも現れます。かかりつけ医へ相談してみましょう (Physical symptoms can also appear in depression: talk to your family doctor)",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-07-004.html",
       "kind": "summary"
      }
     },
     {
      "name": "Bipolar disorder (manic-depressive illness)",
      "why": "Besides low periods, this is described as an illness that also includes periods when mood is unusually high and a person is far more active than usual. The page says such high periods are hard for the person to notice, and that treatment differs from depression, so noticing those periods matters.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "双極性障害（躁うつ病） (Bipolar disorder)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=RM3UirqngPV6bFW0",
       "kind": "summary"
      }
     },
     {
      "name": "Adjustment disorder",
      "why": "The page describes emotional and behavioral difficulties that appear when stress from a change in one's surroundings goes beyond a person's ability to adapt, and also writes that it is a state that has not reached the point of a diagnosis of depression or another mental illness. Adjusting the environment and getting used to it are described as important for recovery.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare (MHLW), Kokoro no Mimi",
       "title": "適応障害：用語解説 (Adjustment disorder: glossary entry)",
       "url": "https://kokoro.mhlw.go.jp/glossaries/word-1653/",
       "kind": "summary"
      }
     }
    ],
    "windows": [
     "kakaritsuke",
     "mhwc",
     "hoken",
     "navii",
     "dial"
    ],
    "crisis": [
     5
    ]
   },
   "anxiety": {
    "label": "Strong anxiety or tension",
    "lead": "Worries that will not stop, a pounding heart and restlessness, trouble in front of people or when going out, and similar struggles.",
    "scenes": [
     "When I speak in front of people or feel watched, I get so anxious that my mind goes blank.",
     "My heart suddenly pounds and it gets hard to breathe, and I worry it will happen again, so going out feels hard.",
     "Even without a clear reason, I keep worrying about one thing after another, feel restless, and get worn out.",
     "Places that are hard to get away from, like trains, buses, crowded buildings, or going out alone, are difficult for me, so I avoid them.",
     "As I keep avoiding what makes me anxious, the places I go and the people I see have shrunk, and my life has become narrower.",
     "Worries stay in my head and I have trouble falling asleep at night."
    ],
    "asks": [
     "Please wait for me to speak instead of rushing me.",
     "Please tell me the plan and how things will go ahead of time.",
     "Please do not suddenly put me on the spot in front of others, and let me choose to answer in writing too.",
     "If I start to feel unwell, please let me step away and rest for a moment.",
     "I would like to talk in a quiet place with only a few people.",
     "Please listen first to what is hard for me, without just telling me I am overthinking it."
    ],
    "meyasu": {
     "has": true,
     "text": "For adults, the page says to look back over the past six months. If your anxiety has clearly grown compared with before and you are losing confidence, if you are fixated on avoiding particular things, people or situations, or if you feel it is affecting your daily life or actions, it says to talk with a specialist.",
     "src": {
      "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
      "title": "不安症 (Anxiety disorders)",
      "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=BLA9JV0KhiWPIMzX",
      "kind": "summary"
     }
    },
    "names": [
     {
      "name": "Hyperthyroidism (overactive thyroid)",
      "why": "The national page lists it as one of the physical illnesses that can lie behind anxiety. It says that when you have a racing heart or trouble breathing, you should first see an internal medicine doctor.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "不安症 (Anxiety disorders)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=BLA9JV0KhiWPIMzX",
       "kind": "summary"
      }
     },
     {
      "name": "Arrhythmia (irregular heartbeat)",
      "why": "The national page lists it as one of the physical illnesses that can cause anxiety. The same page says that when you have a racing heart or trouble breathing, you should first see an internal medicine doctor.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "不安症 (Anxiety disorders)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=BLA9JV0KhiWPIMzX",
       "kind": "summary"
      }
     },
     {
      "name": "Anemia",
      "why": "The national page says anxiety can sometimes be caused by anemia. The same page advises seeing an internal medicine doctor first when you have a racing heart or trouble breathing.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "不安症 (Anxiety disorders)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=BLA9JV0KhiWPIMzX",
       "kind": "summary"
      }
     },
     {
      "name": "Substance- or medication-induced anxiety disorder (anxiety caused by alcohol, caffeine or medication)",
      "why": "The national page says anxiety can also be caused by substances such as alcohol and caffeine, or by medication taken for treatment. If you take any of these, you can tell the doctor along with everything else.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "不安症 (Anxiety disorders)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=BLA9JV0KhiWPIMzX",
       "kind": "summary"
      }
     },
     {
      "name": "Insomnia",
      "why": "The guide says that when sleepless nights continue, anxiety and tension about not being able to sleep can grow stronger. It also says insomnia often appears as an early sign of, or together with, mental health difficulties such as depression and anxiety disorders.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare",
       "title": "健康づくりのための睡眠ガイド2023 (Sleep Guide 2023 for Health Promotion)",
       "url": "https://www.mhlw.go.jp/content/001305530.pdf",
       "kind": "summary"
      }
     },
     {
      "name": "Anxiety disorders (generalized anxiety, panic disorder, social anxiety disorder, agoraphobia, and others)",
      "why": "Anxiety and tension can grow so strong that you start avoiding situations such as being in front of people or going out. The national page divides these into several categories according to their features.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "不安症 (Anxiety disorders)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=BLA9JV0KhiWPIMzX",
       "kind": "summary"
      }
     },
     {
      "name": "Depression",
      "why": "The page says that besides a low mood, depression can bring feelings such as growing anxiety, irritability and impatience, as well as physical symptoms like a racing heart and shortness of breath.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare (MHLW), e-Health Net",
       "title": "体の不調はうつ病でも現れます。かかりつけ医へ相談してみましょう (Physical symptoms can also appear in depression, so consult your family doctor)",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-07-004.html",
       "kind": "summary"
      }
     },
     {
      "name": "PTSD (post-traumatic stress disorder)",
      "why": "The national page says that after a very frightening experience that felt life-threatening, the memory can return against your will, and a state of heightened anxiety and tension can continue.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "PTSD (Post-traumatic stress disorder)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=iGkwv4PNzgWhQ9xI",
       "kind": "summary"
      }
     }
    ],
    "windows": [
     "kakaritsuke",
     "navii",
     "mhwc",
     "hoken",
     "dial"
    ],
    "crisis": []
   },
   "repeat": {
    "label": "Hard to stop checking or repeating things",
    "lead": "When you check the lock or the gas, wash your hands, or repeat other things again and again, and find it hard to stop even when you want to.",
    "scenes": [
     "When I leave home, I can't feel at ease unless I check the lock and the gas valve again and again.",
     "I wash my hands or body more and more often, and I can't stop even when I want to.",
     "The same worry keeps coming into my head, and I can't stop thinking about it even though I want to.",
     "If things aren't placed or done in the order I've decided, I feel unsettled and end up fixing or redoing them.",
     "Checking takes so long that I leave late, or I don't make it to appointments or work on time.",
     "My body moves or I make sounds without meaning to, and it's hard to stop even when I try."
    ],
    "asks": [
     "Please listen to me first, instead of just saying I'm overthinking it.",
     "Checking takes me time, so please allow some extra time.",
     "When plans or procedures change, please tell me in advance.",
     "Please don't point out or tease me about checking or washing in front of others.",
     "Please give explanations and instructions one at a time, in writing.",
     "When deciding how to go ahead with consultation or treatment, please listen to my worries and take it slowly."
    ],
    "meyasu": {
     "has": true,
     "text": "“If you feel you can't help doing something or can't help thinking something, and it is causing you distress or inconvenience, try consulting a specialist organization.”",
     "src": {
      "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
      "title": "強迫性障害｜こころの情報サイト (Obsessive-compulsive disorder, Kokoro Information Site)",
      "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=MiyHEH6ZUZDxDeYX",
      "kind": "quote"
     }
    },
    "names": [
     {
      "name": "Obsessive-compulsive disorder (OCD)",
      "why": "The national page describes it as a condition in which actions that are hard to stop, or thoughts that won't leave your head, cause distress or inconvenience. It also says it is an extension of ordinary things people do, such as checking locks and washing hands, so it is hard to tell whether it has gone too far.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "強迫性障害｜こころの情報サイト (Obsessive-compulsive disorder, Kokoro Information Site)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=MiyHEH6ZUZDxDeYX",
       "kind": "summary"
      }
     },
     {
      "name": "Anxiety disorders",
      "why": "This page introduces being unable to stop repeated handwashing or repeated checking of locks as one of the main kinds of anxiety disorder. It says the person feels unbearably anxious if they don't do it.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare",
       "title": "不安障害｜こころもメンテしよう (Anxiety disorders, from a mental health site for young people)",
       "url": "https://www.mhlw.go.jp/kokoro/youth/stress/know/know_02.html",
       "kind": "summary"
      }
     },
     {
      "name": "Autism spectrum disorder (ASD)",
      "why": "The national page lists restricted, repeated patterns of behavior, interests, or activities as one of its features. The same page also notes that some people have OCD as well.",
      "src": {
       "org": "Developmental Disorders Navi Portal",
       "title": "自閉スペクトラム症 (Autism spectrum disorder, information for supporters)",
       "url": "https://hattatsu.go.jp/supporter/healthcare_health/about-asd-2/",
       "kind": "summary"
      }
     },
     {
      "name": "Tic disorders and Tourette syndrome",
      "why": "The national page describes sudden, quick movements or vocalizations that are repeated. It says a feature of tics is that the person does them even though they don't want to.",
      "src": {
       "org": "National Rehabilitation Center for Persons with Disabilities",
       "title": "各障害の定義 (Definitions of each developmental disorder)",
       "url": "https://www.rehab.go.jp/ddis/understand/definition/",
       "kind": "summary"
      }
     }
    ],
    "windows": [
     "mhwc",
     "hoken",
     "navii",
     "dial",
     "hattatsu"
    ],
    "crisis": []
   },
   "after": {
    "label": "Trouble that continues after a painful event",
    "lead": "Remembering, sleeping poorly, or feeling on edge after something painful.",
    "scenes": [
     "Something small suddenly brings back the scene and the feelings from that hard time.",
     "I keep having the same kind of frightening dream, and often can't sleep deeply.",
     "I'm always on edge, and even small noises or events make me jump.",
     "I avoid places, people, and topics that remind me of that time, and the range of things I do has become narrower.",
     "I feel emotionally flat, and I can't give family and friends the feelings I used to.",
     "I blame myself more and more, or find it harder to trust the people around me."
    ],
    "asks": [
     "Please don't press me for the details of what happened. I'd like to tell it at my own pace, only as much as I can.",
     "Some sounds, places, and topics bring it back, so please accept it when I say I want to avoid them.",
     "Please don't call out suddenly from behind or make loud noises near me.",
     "When talking is too hard, please let me hand over something I wrote.",
     "Please don't read my sleepless days, or days when tiredness lingers, as laziness.",
     "Please don't rush me with \"just forget it\" or \"get well soon\", and give me a safe place where I can talk."
    ],
    "meyasu": {
     "has": true,
     "text": "The page says that if you are suffering now, you do not have to bear it alone: you can see a psychiatrist or use a public health center or other consultation service. It also says that right after a frightening or painful experience, most people have symptoms such as anxiety and trouble sleeping, so it suggests watching and waiting for natural recovery for about a month. If the same symptoms continue after several months or get worse, it says to keep PTSD in mind and consult a specialist.",
     "src": {
      "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
      "title": "PTSD｜こころの情報サイト (NCNP Kokoro Information Site: page on PTSD)",
      "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=iGkwv4PNzgWhQ9xI",
      "kind": "summary"
     }
    },
    "names": [
     {
      "name": "Insomnia (sleep disorders)",
      "why": "The page says trouble sleeping often appears after an event that causes strong stress, and that when it continues it affects daytime energy and mood. Sleeplessness can also come along with other illnesses.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "不眠症（睡眠障害）｜こころの情報サイト (NCNP Kokoro Information Site: page on insomnia and sleep disorders)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=XpsDJBKfyaGD0mIx",
       "kind": "summary"
      }
     },
     {
      "name": "Nightmare disorder",
      "why": "The name for frightening dreams that keep coming back and disturb sleep. The page says that even in adults it can appear together with PTSD or depression.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "不眠症（睡眠障害）｜こころの情報サイト (NCNP Kokoro Information Site: page on insomnia and sleep disorders)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=XpsDJBKfyaGD0mIx",
       "kind": "summary"
      }
     },
     {
      "name": "Too much caffeine",
      "why": "After being harmed by a painful event, some people take more caffeine to get their energy up. The page says it is not rare for caffeine to make anxiety stronger.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "PTSD｜こころの情報サイト (NCNP Kokoro Information Site: page on PTSD)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=iGkwv4PNzgWhQ9xI",
       "kind": "summary"
      }
     },
     {
      "name": "Acute stress reaction",
      "why": "The name for strong returning memories, nightmares, sleeplessness, and anxiety that appear after a strongly stressful experience, mainly one that threatened life. The page says it is told apart from PTSD by how long it lasts.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare (MHLW), Kokoro no Mimi",
       "title": "急性ストレス反応：用語解説｜こころの耳 (Kokoro no Mimi glossary: acute stress reaction)",
       "url": "https://kokoro.mhlw.go.jp/glossaries/word-1540/",
       "kind": "summary"
      }
     },
     {
      "name": "PTSD (post-traumatic stress disorder)",
      "why": "The name for a state in which the memory of a frightening experience keeps returning against your will or shows up in nightmares. The page says the symptoms can become clear months or even years later.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "PTSD｜こころの情報サイト (NCNP Kokoro Information Site: page on PTSD)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=iGkwv4PNzgWhQ9xI",
       "kind": "summary"
      }
     },
     {
      "name": "Depression",
      "why": "The page says depression can appear after painful experiences or sad events, and also after happy events. A low mood, loss of enjoyment, poor sleep, and tiredness keep going.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "うつ病｜こころの情報サイト (NCNP Kokoro Information Site: page on depression)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=9D2BdBaF8nGgVLbL",
       "kind": "summary"
      }
     },
     {
      "name": "Specific phobia (one of the anxiety disorders)",
      "why": "The name for strong fear of particular people, animals, or situations, with avoiding them. The page says the reason can be that the person was actually in danger.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "不安症｜こころの情報サイト (NCNP Kokoro Information Site: page on anxiety disorders)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=BLA9JV0KhiWPIMzX",
       "kind": "summary"
      }
     }
    ],
    "windows": [
     "mhwc",
     "hoken",
     "navii",
     "dial"
    ],
    "crisis": []
   },
   "sleep": {
    "label": "Trouble with sleep",
    "lead": "Trouble falling asleep, waking up in the night, not being able to get up in the morning, or feeling very sleepy in the daytime.",
    "scenes": [
     "Even after getting into bed, I can't fall asleep.",
     "I wake up many times during the night and never sleep deeply until morning.",
     "When it is time to get up I can't, and I keep being late for work or school.",
     "I get very sleepy during the day and nearly doze off in meetings or while driving.",
     "My family says I snore loudly and that it looks like I stop breathing while I sleep.",
     "In the evening and at night my legs feel uncomfortable and restless, and I can't sleep."
    ],
    "asks": [
     "Please take the time to hear how my sleep is going (falling asleep, waking in the night, trouble getting up in the morning, sleepiness during the day).",
     "Please think through the cause with me, including the medicines I take and my habits with coffee, alcohol and cigarettes.",
     "Please don't put it down to my mindset; please check my physical health and my mood together.",
     "I would like to tell you my sleep times with a written note of when I went to bed and woke up. Please look at it.",
     "If I am given medicine, please explain in plain words how it works and what to watch for.",
     "Mornings are hard for me, so please see me in the afternoon or evening."
    ],
    "meyasu": {
     "has": true,
     "text": "Even after putting into practice the matters described in this Guide, if symptoms such as not being able to sleep enough hours, not feeling rested by sleep, or strong sleepiness during the day continue and affect your daily life, consult a doctor promptly.",
     "src": {
      "org": "Ministry of Health, Labour and Welfare",
      "title": "健康づくりのための睡眠ガイド2023 (Sleep Guide 2023 for Health Promotion)",
      "url": "https://www.mhlw.go.jp/content/001305530.pdf",
      "kind": "summary"
     }
    },
    "names": [
     {
      "name": "Insomnia",
      "why": "A name doctors may check when trouble falling asleep, waking up repeatedly in the night, or waking very early and not getting back to sleep comes together with low energy in the daytime, low mood or less efficiency at work. It can also appear along with other physical or mental health conditions.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "不眠症（睡眠障害） (Insomnia and sleep disorders)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=XpsDJBKfyaGD0mIx",
       "kind": "summary"
      }
     },
     {
      "name": "Sleep apnea (sleep apnea syndrome)",
      "why": "Breathing stops again and again during sleep, so sleep stays shallow and strong sleepiness appears in the daytime. When there is loud snoring or breathing stops during sleep, doctors may check it with a test at a specialist medical institution.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare (MHLW), e-Health Net",
       "title": "睡眠時無呼吸症候群 / SAS (Sleep apnea syndrome)",
       "url": "https://kennet.mhlw.go.jp/information/information/dictionary/heart/yk-026.html",
       "kind": "summary"
      }
     },
     {
      "name": "Restless legs syndrome",
      "why": "When you lie still before sleep, an unpleasant feeling appears in the hands or legs (mostly the legs) and makes it hard to fall asleep. It is sometimes mistaken for insomnia in which falling asleep is the main difficulty.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare",
       "title": "健康づくりのための睡眠ガイド2023 (Sleep Guide 2023 for Health Promotion)",
       "url": "https://www.mhlw.go.jp/content/001305530.pdf",
       "kind": "summary"
      }
     },
     {
      "name": "Circadian rhythm sleep-wake disorders (body clock shifts)",
      "why": "The body clock shifts so that the times you can sleep and wake no longer fit school or work. This includes staying up very late and being unable to get up in the morning, and disruption from night work or rotating shifts.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare (MHLW), e-Health Net",
       "title": "概日リズム睡眠・覚醒障害 (Circadian rhythm sleep-wake disorders)",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-02-006.html",
       "kind": "summary"
      }
     },
     {
      "name": "Insufficient sleep syndrome",
      "why": "Not getting enough sleep for a long time leads to strong daytime sleepiness, tiredness and an unstable mood. The amount of sleep a person needs differs from person to person, so someone who sleeps most nights may still be short of sleep, and may stop noticing the sleepiness.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare (MHLW), e-Health Net",
       "title": "昼間の眠気 (Daytime sleepiness)",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-02-002.html",
       "kind": "summary"
      }
     },
     {
      "name": "Insomnia linked to a physical illness",
      "why": "Physical illnesses such as high blood pressure, heart or respiratory disease, kidney disease, illnesses with frequent urination, diabetes, or illnesses with pain or itching can disturb sleep. In that case the underlying physical illness is checked as well as the sleep itself.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare (MHLW), e-Health Net",
       "title": "不眠症 (Insomnia)",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-02-001.html",
       "kind": "summary"
      }
     },
     {
      "name": "Insomnia caused by medicines, caffeine, nicotine or alcohol",
      "why": "Some medicines (for example blood pressure medicines, thyroid medicines and anticancer drugs), coffee, tea, cigarettes, and alcohol before bed can get in the way of sleep. Please don't stop a medicine on your own; telling the doctor about the medicines you use and what you drink or smoke makes it easier to check.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare (MHLW), e-Health Net",
       "title": "不眠症 (Insomnia)",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-02-001.html",
       "kind": "summary"
      }
     },
     {
      "name": "Depression",
      "why": "Along with low mood and low drive, depression can bring physical symptoms such as not being able to sleep, waking very early, being unable to get up, or sleeping too much. When the physical symptoms stand out, changes in mood and drive can be hard to notice.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare (MHLW), e-Health Net",
       "title": "体の不調はうつ病でも現れます。かかりつけ医へ相談してみましょう (Physical symptoms can appear in depression too: talk to your family doctor)",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-07-004.html",
       "kind": "summary"
      }
     }
    ],
    "windows": [
     "kakaritsuke",
     "navii",
     "hoken",
     "mhwc"
    ],
    "crisis": []
   },
   "eating": {
    "label": "Trouble with eating",
    "lead": "For when eating is hard: you cannot eat much, you cannot stop eating, or eating feels scary.",
    "scenes": [
     "I do not feel like eating, and food has been hard to get down for days.",
     "Once I start eating I cannot stop myself, and sometimes I eat so much that it hurts.",
     "Before I realize it, I am thinking only about food, and it is hard to focus on anything else.",
     "The foods I can eat are very limited, and I avoid many foods because of their taste, smell, or texture.",
     "After choking on food or vomiting once, I became afraid of eating.",
     "At night I sometimes eat while half asleep, and in the morning I do not remember it."
    ],
    "asks": [
     "Please do not comment on my body or appearance.",
     "Please do not force me to eat or rush me to eat.",
     "Please let me choose another place or time when others eat together.",
     "Please ask me first what I can eat and which smells or textures are hard for me.",
     "Please explain the steps of any physical exam or tests beforehand.",
     "Please let me hand over in writing what is hard to say out loud."
    ],
    "meyasu": {
     "has": true,
     "text": "“If you notice signs or symptoms of an eating disorder, it is important to consult a specialist as soon as you can and receive treatment.”",
     "src": {
      "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
      "title": "摂食障害 (Eating disorders)",
      "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=daWRhKdTNvsjgjM5",
      "kind": "quote"
     }
    },
    "names": [
     {
      "name": "Physical illnesses (such as digestive, hormonal, and collagen diseases)",
      "why": "When a person loses weight, a physical illness can be hiding behind it. The page says not to assume it is an eating problem, and to have a physical exam and tests first.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Eating Disorder Information Portal",
       "title": "10代のあなたへ (A page for people in their teens who are struggling with eating problems)",
       "url": "https://edcenter.ncnp.go.jp/edportal_general/trouble/trouble_teen.html",
       "kind": "summary"
      }
     },
     {
      "name": "Sleep-related eating disorder (eating while half asleep)",
      "why": "Some people eat in a half-asleep state at night and do not remember it in the morning. The page describes it as one of the behaviors that can happen during sleep.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "不眠症（睡眠障害）(Insomnia and sleep disorders)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=XpsDJBKfyaGD0mIx",
       "kind": "summary"
      }
     },
     {
      "name": "Eating disorders (anorexia nervosa, bulimia nervosa, binge-eating disorder)",
      "why": "A group of conditions in which changes in how a person eats, such as not being able to eat enough or not being able to stop eating, continue and affect both body and mind. The page also asks for extra care for people with insulin-dependent diabetes who must use insulin.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "摂食障害 (Eating disorders)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=daWRhKdTNvsjgjM5",
       "kind": "summary"
      }
     },
     {
      "name": "Avoidant/restrictive food intake disorder (ARFID)",
      "why": "Even without concern about body shape or weight, a person may end up eating very little or only a few kinds of food because of sensitivity to taste, smell, or texture, or because of fear after choking or vomiting. The page describes this as one form of eating disorder.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Eating Disorder Information Portal",
       "title": "摂食障害はどんな病気？ (What kind of illness is an eating disorder?)",
       "url": "https://edcenter.ncnp.go.jp/edportal_general/about/about_what.html",
       "kind": "summary"
      }
     },
     {
      "name": "Depression",
      "why": "Along with low mood and low motivation, appetite can drop, or a person may eat more than usual. The page also says physical symptoms can stand out so much that the emotional symptoms are easy to miss.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare (MHLW), e-Health Net",
       "title": "体の不調はうつ病でも現れます。かかりつけ医へ相談してみましょう (Physical symptoms can also appear in depression: talk to your family doctor)",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-07-004.html",
       "kind": "summary"
      }
     },
     {
      "name": "Autism spectrum disorder",
      "why": "The page lists oversensitive senses and strong fixations as features, and says that strong picky eating can also occur.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "発達障害（神経発達症）(Developmental conditions, neurodevelopmental disorders)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=MbkmLbVbTEhSpxyE",
       "kind": "summary"
      }
     }
    ],
    "windows": [
     "kakaritsuke",
     "mhwc",
     "hoken",
     "navii"
    ],
    "crisis": []
   },
   "habit": {
    "label": "Hard to stop drinking, gambling, or gaming",
    "lead": "For when you want to stop or cut down, but keep going anyway",
    "scenes": [
     "Even when I decide to stop or cut down, I find myself doing it again.",
     "I can't stick to the time, amount, or money I set for myself ('just this much today').",
     "I hide my drinking, gambling, or gaming from people close to me, or cover it up.",
     "Staying up late gaming has become a habit, and I can't get up in the morning. I'm late or absent more often.",
     "When I lose, I want to win it back, so I bet again.",
     "Even though I know my body isn't doing well, I can't cut back on drinking."
    ],
    "asks": [
     "Please listen first, without blaming me or jumping to conclusions.",
     "Please help me sort out how I use these and what problems it causes, step by step.",
     "Please check my sleep and physical health as well.",
     "Please tell me specifically where I can get support and where I can go.",
     "Please tell me whether my family or someone close to me can consult together with me.",
     "Please check with me first about who you will tell what I said, and how much."
    ],
    "meyasu": {
     "has": true,
     "text": "The national article explains that being unable to stop drinking, gambling, or similar things even though you want to is called dependence. It says it is important to first consult your nearest mental health and welfare center or public health center, or to see a medical institution. Even if the person does not want to go for advice or treatment, family members can consult on their own.",
     "src": {
      "org": "Government of Japan Public Relations Online",
      "title": "アルコール、薬物、ギャンブルなどをやめたくてもやめられないなら．．．それは「依存症」という病気かも。 (Government guide: when you want to stop alcohol, drugs or gambling but cannot)",
      "url": "https://www.gov-online.go.jp/article/201803/entry-9081.html",
      "kind": "summary"
     }
    },
    "names": [
     {
      "name": "Insomnia",
      "why": "The national page says drinking before bed makes sleep lighter and brings early waking, and it lists alcohol among the causes of long-lasting sleep trouble. So your sleep may be checked together with your drinking.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare (MHLW), e-Health Net",
       "title": "不眠症 | 生活習慣病などの情報(e-ヘルスネット) (Insomnia: lifestyle-disease information site e-Healthnet)",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-02-001.html",
       "kind": "summary"
      }
     },
     {
      "name": "Alcohol dependence (alcohol use disorder)",
      "why": "The national page uses this name for a state in which you can no longer hold back how much you drink. It says there is no clear line between this and ordinary drinking, and it also explains the bodily symptoms that can appear when you stop or cut back.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare (MHLW), e-Health Net",
       "title": "アルコールと依存 | 生活習慣病などの情報(e-ヘルスネット) (Alcohol and dependence: e-Healthnet)",
       "url": "https://kennet.mhlw.go.jp/information/information/alcohol/a-05-001.html",
       "kind": "summary"
      }
     },
     {
      "name": "Gambling disorder (gambling addiction)",
      "why": "The national page lists signs such as not keeping to the limits you set, hiding gambling from others, and wanting to win back losses right away. It also says this does not come from weakness of the heart.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "依存症｜こころの情報サイト (Addiction: Kokoro no Joho Site, NCNP)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=819yAWLAzXBx5XZ5",
       "kind": "summary"
      }
     },
     {
      "name": "Gaming disorder (game addiction)",
      "why": "A material shown at a national meeting describes this as being unable to hold back gaming, putting it before other parts of life, and continuing even when problems appear. Not being able to get up in the morning, lateness, absences, and a reversed day and night are given as examples.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare (material by Kurihama Medical and Addiction Center, National Hospital Organization)",
       "title": "ゲーム障害について(ゲーム依存症対策関係者連絡会議 資料2) (About gaming disorder: Material 2 for the February 2020 meeting on measures against game addiction)",
       "url": "https://www.mhlw.go.jp/content/12205250/000759309.pdf",
       "kind": "summary"
      }
     },
     {
      "name": "Hazardous alcohol use, hazardous gambling or betting, hazardous gaming",
      "why": "In the national classification, these three names appear as problems of health-related behavior, in a chapter separate from disease names such as alcohol use disorder. Whether or not any name is given, you can consult about the difficulty itself.",
      "src": {
       "org": "Ministry of Internal Affairs and Communications",
       "title": "統計法第28条の規定に基づき、疾病、傷害及び死因に関する分類を定める件(令和8年1月19日 総務省告示第11号) (Notice setting the classification of diseases, injuries and causes of death, in force from 1 January 2027)",
       "url": "https://www.soumu.go.jp/main_content/001051239.pdf",
       "kind": "fact"
      }
     },
     {
      "name": "Depression",
      "why": "The national page lists drinking more as one example of a sign of depression. If alcohol is causing you trouble, you can also mention whether you have low mood or trouble sleeping.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "うつ病｜こころの情報サイト (Depression: Kokoro no Joho Site, NCNP)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=9D2BdBaF8nGgVLbL",
       "kind": "summary"
      }
     },
     {
      "name": "Bipolar disorder (manic-depressive illness)",
      "why": "The national page says that during a period of unusually high mood, a person may spend too much money on big purchases or gambling. If gambling is causing you trouble, you can also mention whether you have had periods of high mood.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "双極性障害（躁うつ病）｜こころの情報サイト (Bipolar disorder: Kokoro no Joho Site, NCNP)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=RM3UirqngPV6bFW0",
       "kind": "summary"
      }
     },
     {
      "name": "ADHD (attention-deficit/hyperactivity disorder)",
      "why": "Among the other conditions that overlap with gaming problems, a consultation manual made under a national subsidy program reports ADHD as the most frequent. It also says autism spectrum disorder is often seen among them.",
      "src": {
       "org": "National Center for Addiction Services Administration (Kurihama Medical and Addiction Center)",
       "title": "ゲーム依存相談対応マニュアル (Consultation manual on game addiction, March 2022)",
       "url": "https://www.ncasa-japan.jp/pdf/document45.pdf",
       "kind": "summary"
      }
     }
    ],
    "windows": [
     "mhwc",
     "hoken",
     "navii",
     "kakaritsuke",
     "dial"
    ],
    "crisis": []
   },
   "attention": {
    "label": "Trouble with attention and getting organized",
    "lead": "Trouble keeping focus, working through steps in order, or remembering things.",
    "scenes": [
     "Even when someone is talking to me, my mind drifts to something else.",
     "I can't get through work or housework in order, and I miss deadlines.",
     "I often can't recall things I was asked to do or promised, or I lose my belongings.",
     "When I keep doing the same task, careless mistakes pile up.",
     "When I have to sit still, I feel restless and fidgety.",
     "People around me say that I often forget things or am late."
    ],
    "asks": [
     "Please give me instructions one at a time.",
     "Please write down important things and hand them to me.",
     "Please tell me about deadlines and appointments early.",
     "Please don't ask for many things at once; break tasks into small parts.",
     "I would like to talk in a quiet place where I am less distracted.",
     "Please acknowledge what I managed to do instead of blaming me for what I couldn't."
    ],
    "meyasu": {
     "has": false,
     "text": "",
     "src": null
    },
    "names": [
     {
      "name": "Sleep deprivation and sleep-wake disorders",
      "why": "The page explains that when sleep falls short for days or a sleep disorder is present, strong daytime sleepiness can make it hard to concentrate. Sleepiness has other causes too, such as medicines you are taking or troubles with mood or mental health.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare (MHLW), e-Health Net",
       "title": "昼間の眠気 - 睡眠不足だけではなく睡眠・覚醒障害にも注意が必要 (Daytime sleepiness: not only lack of sleep, sleep-wake disorders also need attention)",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-02-002.html",
       "kind": "summary"
      }
     },
     {
      "name": "Insomnia",
      "why": "The page explains that when trouble falling asleep, waking in the night, or waking too early continues, concentration and motivation can drop during the day. Causes vary: stress, physical or mental health conditions, medicines, and more.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare (MHLW), e-Health Net",
       "title": "不眠症 (Insomnia)",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-02-001.html",
       "kind": "summary"
      }
     },
     {
      "name": "Hyperthyroidism (Graves' disease)",
      "why": "This hormone disorder is described with palpitations and trembling hands, and also with restlessness and emotional instability. The page also recommends seeing an internal medicine doctor.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare (MHLW), Support Site for the Mind and Body of Working Women",
       "title": "甲状腺の病気 (Thyroid disease)",
       "url": "https://www.bosei-navi.mhlw.go.jp/health/thyroid.html",
       "kind": "summary"
      }
     },
     {
      "name": "Depression",
      "why": "Along with low mood and low motivation, the page says it can become hard to pull thoughts together and to concentrate on work or housework. It also says physical complaints can stand out so much that changes in mood go unnoticed.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare (MHLW), e-Health Net",
       "title": "体の不調はうつ病でも現れます。かかりつけ医へ相談してみましょう (Physical symptoms can also come from depression: consider consulting your family doctor)",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-07-004.html",
       "kind": "summary"
      }
     },
     {
      "name": "Anxiety disorders (generalized anxiety)",
      "why": "When worries about many different things keep coming, the page says people can feel constantly restless, tire easily, and find it hard to keep concentrating.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "不安症 (Anxiety disorders)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=BLA9JV0KhiWPIMzX",
       "kind": "summary"
      }
     },
     {
      "name": "Bipolar disorder (manic-depressive illness)",
      "why": "As a sign of a period of strongly elevated mood, the page lists ideas coming one after another but being hard to put together and finish.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "双極性障害(躁うつ病) (Bipolar disorder)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=RM3UirqngPV6bFW0",
       "kind": "summary"
      }
     },
     {
      "name": "ADHD (attention-deficit/hyperactivity disorder)",
      "why": "The page describes difficulty sustaining attention, doing things in order, and staying settled, continuing since a young age and causing trouble in several settings such as school, home, and work. For adults it mentions mistakes at work and forgotten promises.",
      "src": {
       "org": "Developmental Disorders Navi Portal",
       "title": "注意欠如多動症 (ADHD)",
       "url": "https://hattatsu.go.jp/supporter/healthcare_health/about-adhd-2/",
       "kind": "summary"
      }
     },
     {
      "name": "Autism spectrum disorder (ASD)",
      "why": "The page lists situations that can be hard at work, such as adapting flexibly, handling several tasks at once, and responding to vague instructions.",
      "src": {
       "org": "Government of Japan Public Relations Online",
       "title": "発達障害に気付いたら？大人になって気付いたときの専門相談窓口 (If you notice a developmental disability as an adult: specialist consultation services)",
       "url": "https://www.gov-online.go.jp/article/202302/entry-10203.html",
       "kind": "summary"
      }
     }
    ],
    "windows": [
     "hattatsu",
     "kakaritsuke",
     "mhwc",
     "hoken",
     "navii"
    ],
    "crisis": []
   },
   "social": {
    "label": "Trouble with people, set routines and sensory issues",
    "lead": "Trouble talking or dealing with people, a strong need to do things a set way, or sounds, lights and smells that are hard to bear.",
    "scenes": [
     "In conversation, I find it hard to pick up the other person's feelings or the mood of the room, and we talk past each other.",
     "When I have to speak in front of people or have everyone's eyes on me, I get very tense and end up avoiding it.",
     "I can talk with people I am close to, but my voice will not come out in front of others.",
     "When my set way of doing things, my order of steps, or where things are placed changes, I feel strongly anxious.",
     "Sounds, lights, smells and so on feel too strong, and crowded places are hard for me.",
     "I find it hard to hear what people say, or my mood is low, and meeting and talking with people has become hard."
    ],
    "asks": [
     "Please speak slowly and clearly.",
     "Please write down important things for me.",
     "I would like to talk in a quiet place.",
     "Please tell me in advance when plans or ways of doing things change.",
     "Please wait for my answer without rushing me.",
     "Please let me answer in writing or with a short note instead of speaking."
    ],
    "meyasu": {
     "has": false,
     "text": "",
     "src": null
    },
    "names": [
     {
      "name": "Hearing loss (difficulty hearing)",
      "why": "The page says that when hearing is hard, conversations with family and friends may stop going well. It also says people may become isolated and slip into a depressed state, and it points to an ear, nose and throat clinic.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare",
       "title": "「聞こえにくさ」感じていませんか？ (Are you noticing difficulty hearing?)",
       "url": "https://www.mhlw.go.jp/nanntyou/",
       "kind": "summary"
      }
     },
     {
      "name": "Depression",
      "why": "The page lists not wanting to see people and finding it hard to talk with people among the mental symptoms of depression. Loss of motivation and not enjoying things are listed alongside them.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare (MHLW), e-Health Net",
       "title": "生活習慣病などの情報(e-ヘルスネット)「体の不調はうつ病でも現れます。かかりつけ医へ相談してみましょう」 (Lifestyle disease information, e-Health Net: Physical symptoms can also appear with depression, so consider talking with your family doctor)",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-07-004.html",
       "kind": "summary"
      }
     },
     {
      "name": "Social anxiety disorder",
      "why": "The page describes strong anxiety in situations where you face people, speak, or are watched and evaluated, so that you start to avoid those situations. It also says the anxiety may not appear in front of people you are close to, or people who take no interest in you.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "こころの情報サイト「不安症」 (Kokoro Information Site: Anxiety disorders)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=BLA9JV0KhiWPIMzX",
       "kind": "summary"
      }
     },
     {
      "name": "Selective mutism",
      "why": "The page describes being able to talk with certain people but not being able to speak at all in front of other people, even when speaking is needed. It says this often gets in the way of studies or work.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "こころの情報サイト「不安症」 (Kokoro Information Site: Anxiety disorders)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=BLA9JV0KhiWPIMzX",
       "kind": "summary"
      }
     },
     {
      "name": "Obsessive-compulsive disorder (OCD)",
      "why": "The page describes feeling anxious when a set procedure is not followed, insisting on how things are arranged and feeling anxious when they are not, and sticking strongly to certain numbers. It also says the checking and repeating can reach the people around, which can strain relationships.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "こころの情報サイト「強迫性障害」 (Kokoro Information Site: Obsessive-compulsive disorder)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=MiyHEH6ZUZDxDeYX",
       "kind": "summary"
      }
     },
     {
      "name": "Autism spectrum disorder",
      "why": "The page describes difficulty communicating through words, facial expressions and gestures, trouble reading other people's feelings, a strong interest in particular things, strong fixed ways of doing things, and sensitive senses. It also says that after starting work, people may struggle to do tasks flexibly and with relationships.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "こころの情報サイト「発達障害(神経発達症)」 (Kokoro Information Site: Developmental disorders (neurodevelopmental disorders))",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=MbkmLbVbTEhSpxyE",
       "kind": "summary"
      }
     }
    ],
    "windows": [
     "hattatsu",
     "mhwc",
     "hoken",
     "navii",
     "kakaritsuke"
    ],
    "crisis": []
   },
   "reading": {
    "label": "Trouble with reading, writing, or calculating",
    "lead": "For when reading, writing, or working with numbers is hard even with effort.",
    "scenes": [
     "It takes me longer than most people to read a text, and I end up rereading it many times.",
     "Even after reading, the content does not sink in, and I struggle to grasp what documents or letters mean.",
     "I cannot write kanji or words well, and I often make writing mistakes or leave things out.",
     "My handwriting comes out uneven, and writing takes a lot of time and effort.",
     "I get stuck on simple calculations and on math problems given in sentences.",
     "I can talk and listen without trouble, but when it comes to reading, writing, or calculating, things do not move along as I want, even with plenty of time."
    ],
    "asks": [
     "Please show text in large print with wide line spacing, and add readings to kanji.",
     "Please read important information aloud or tell me out loud.",
     "Please let me enter text on a computer or phone, or record with photos or audio, instead of writing by hand.",
     "Please let me use a calculator for calculations.",
     "Please give me extra time for reading, writing, and calculating.",
     "Please give me less at a time and hand things over one at a time."
    ],
    "meyasu": {
     "has": false,
     "text": "",
     "src": null
    },
    "names": [
     {
      "name": "Vision or hearing problems (difficulty seeing or hearing)",
      "why": "The page says that trouble with eyesight or hearing can be the direct cause of difficulty with reading and writing. It also says that tests of the eyes and ears are added when needed.",
      "src": {
       "org": "Developmental Disorders Navi Portal",
       "title": "限局性学習症 (Specific learning disorder: medical and health information)",
       "url": "https://hattatsu.go.jp/supporter/healthcare_health/about-sld/",
       "kind": "summary"
      }
     },
     {
      "name": "Sleep disorders",
      "why": "The page says that when looking into difficulty with reading, writing, or calculating, it is also important to check whether sleep disorders and similar conditions are present at the same time.",
      "src": {
       "org": "Developmental Disorders Navi Portal",
       "title": "限局性学習症 (Specific learning disorder: medical and health information)",
       "url": "https://hattatsu.go.jp/supporter/healthcare_health/about-sld/",
       "kind": "summary"
      }
     },
     {
      "name": "Depression",
      "why": "Along with low mood and low motivation, the page says that things once enjoyed, such as reading, may stop being enjoyable, and that it may become hard to pull thoughts together and to concentrate.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare (MHLW), e-Health Net",
       "title": "体の不調はうつ病でも現れます。かかりつけ医へ相談してみましょう (Physical symptoms can also appear in depression: talk to your family doctor)",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-07-004.html",
       "kind": "summary"
      }
     },
     {
      "name": "Specific learning disorder (learning disability, LD)",
      "why": "In translation, a page of the Ministry of Health, Labour and Welfare says: \"Speaking and understanding are fine, yet reading, writing, and calculating are extremely hard despite effort.\"",
      "src": {
       "org": "Ministry of Health, Labour and Welfare",
       "title": "発達障害の特性（代表例） (Typical characteristics of developmental disabilities: e-learning for workplace supporters)",
       "url": "https://www.mhlw.go.jp/seisakunitsuite/bunya/koyou_roudou/koyou/shougaishakoyou/shisaku/jigyounushi/e-learning/hattatsu/characteristic.html",
       "kind": "quote"
      }
     },
     {
      "name": "Attention-deficit/hyperactivity disorder (ADHD)",
      "why": "The page describes difficulty keeping attention and similar traits, with trouble showing up at school, at home, and at work. It also says other developmental conditions, such as specific learning disorder, can occur together with ADHD.",
      "src": {
       "org": "Developmental Disorders Navi Portal",
       "title": "注意欠如多動症 (Attention-deficit/hyperactivity disorder)",
       "url": "https://hattatsu.go.jp/supporter/healthcare_health/about-adhd-2/",
       "kind": "summary"
      }
     },
     {
      "name": "Developmental coordination disorder (DCD)",
      "why": "The page says that moving the hands and body as intended is difficult, and that writing by hand can also go poorly.",
      "src": {
       "org": "Developmental Disorders Navi Portal",
       "title": "発達性協調運動症 (Developmental coordination disorder)",
       "url": "https://hattatsu.go.jp/supporter/healthcare_health/about-dcd/",
       "kind": "summary"
      }
     },
     {
      "name": "Intellectual disability",
      "why": "The page describes a condition in which daily life is hard to manage depending on the level of intellectual functioning, and says its severity is decided by looking at several areas, including reading and writing.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "発達障害（神経発達症） (Developmental disorders / neurodevelopmental disorders)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=MbkmLbVbTEhSpxyE",
       "kind": "summary"
      }
     }
    ],
    "windows": [
     "kakaritsuke",
     "hattatsu",
     "navii",
     "mhwc",
     "hoken"
    ],
    "crisis": []
   },
   "wave": {
    "label": "Big mood swings",
    "lead": "For times when your mood goes up and down a lot and your feelings can't keep up.",
    "scenes": [
     "My mood switches between being too energetic and being so low that I can't move.",
     "I have stretches when I hardly sleep yet feel full of energy and keep on the move.",
     "Ideas keep coming one after another, and everything is left half done.",
     "I have felt so bold that I spent money I later struggled to cover.",
     "Little things make me irritable, and it is hard to keep my feelings in check.",
     "Things I did when my mood was running high have affected my relationships or my work."
    ],
    "asks": [
     "Please also ask me about times when I felt unusually good or energetic.",
     "Please take the time to go through my ups and downs with me.",
     "Before big decisions about money or work, please help me stop and think first.",
     "Please check physical causes too, including sleep, medicines, and alcohol.",
     "If I seem different from usual, please tell me without blaming me.",
     "Please hear me out, both when I am up and when I am down."
    ],
    "meyasu": {
     "has": false,
     "text": "",
     "src": null
    },
    "names": [
     {
      "name": "Hyperthyroidism (Graves' disease)",
      "why": "In this physical illness the thyroid makes too much hormone, and the Ministry's page lists restlessness and emotional instability alongside a racing heart and shaky hands. Mood swings can look similar even when the cause is in the body, so this may be checked at an internal medicine visit.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare (MHLW), Support Site for the Mind and Body of Working Women",
       "title": "甲状腺の病気 (Thyroid diseases, in the women's health topics)",
       "url": "https://www.bosei-navi.mhlw.go.jp/health/thyroid.html",
       "kind": "summary"
      }
     },
     {
      "name": "Insufficient sleep syndrome",
      "why": "The Ministry's page uses this name for the state in which long-lasting lack of sleep brings sleepiness, weaker thinking performance, and unstable mood. Along with your mood swings, how you have been sleeping may be checked too.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare (MHLW), e-Health Net",
       "title": "生活習慣病などの情報(e-ヘルスネット)「昼間の眠気」 (e-Health Net article on daytime sleepiness)",
       "url": "https://kennet.mhlw.go.jp/information/information/heart/k-02-002.html",
       "kind": "summary"
      }
     },
     {
      "name": "Effects of medication (for example, steroids)",
      "why": "The Ministry's manual says medicines such as steroids can cause elevated or low mood, irritability, or anxiety. Do not stop a medicine on your own; tell the doctor or pharmacist who gave it to you so it can be checked.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare",
       "title": "重篤副作用疾患別対応マニュアル 薬剤惹起性うつ病 平成20年6月 (Manual on serious adverse drug reactions: drug-induced depression, June 2008)",
       "url": "https://www.mhlw.go.jp/topics/2006/11/dl/tp1122-1j05_0001.pdf",
       "kind": "summary"
      }
     },
     {
      "name": "Effects of alcohol (including withdrawal)",
      "why": "The Ministry's page says that cutting down or stopping after drinking for a long time can bring insomnia, anxiety, and irritability, and it also describes alcohol's effects on the mind. You can tell whoever you consult about your drinking, as far as you are comfortable doing so.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare (MHLW), e-Health Net",
       "title": "生活習慣病などの情報(e-ヘルスネット)「アルコールと依存」 (e-Health Net article on alcohol and dependence)",
       "url": "https://kennet.mhlw.go.jp/information/information/alcohol/a-05-001.html",
       "kind": "summary"
      }
     },
     {
      "name": "Premenstrual dysphoric disorder (PMDD)",
      "why": "In its page on depression in women, the Ministry describes PMDD as getting irritated or feeling low over small things, and it says to see a doctor early if the discomfort continues after the period ends. Whether your mood swings follow your monthly cycle is also something you can bring up when you consult.",
      "src": {
       "org": "Ministry of Health, Labour and Welfare (MHLW), Support Site for the Mind and Body of Working Women",
       "title": "女性のうつ (Depression in women, including premenstrual mood changes)",
       "url": "https://www.bosei-navi.mhlw.go.jp/health/depression.html",
       "kind": "summary"
      }
     },
     {
      "name": "Depression",
      "why": "The low phase of a mood swing can look like depression. The page says that depression and the illness that repeats low and high states are treated very differently, so an expert needs to tell them apart.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "こころの情報サイト「うつ病」 (Depression page of the Kokoro Information Site)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=9D2BdBaF8nGgVLbL",
       "kind": "summary"
      }
     },
     {
      "name": "Bipolar disorder (manic-depressive illness)",
      "why": "The page describes it as repeating a low, gloomy phase and a phase of much higher mood and activity than usual. It says everyone has ups and downs in mood, and it mentions this name when the swings go far enough that people around you notice you seem different from usual; it adds that a person may not notice their own high phase.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "こころの情報サイト「双極性障害（躁うつ病）」 (Bipolar disorder page of the Kokoro Information Site)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=RM3UirqngPV6bFW0",
       "kind": "summary"
      }
     },
     {
      "name": "ADHD (attention-deficit/hyperactivity disorder)",
      "why": "For adults, the page lists trouble planning ahead and managing emotions, and says low mood and mood swings can also come along with it. If you have trouble with attention or getting things organized, you can bring that up too when you consult.",
      "src": {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "こころの情報サイト「発達障害（神経発達症）」 (Neurodevelopmental conditions page of the Kokoro Information Site)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=MbkmLbVbTEhSpxyE",
       "kind": "summary"
      }
     }
    ],
    "windows": [
     "kakaritsuke",
     "mhwc",
     "hoken",
     "navii",
     "dial"
    ],
    "crisis": []
   }
  },
  "common": {
   "learn": [
    {
     "h": "Knowing a name can make ordinary ups and downs look like symptoms",
     "body": "Once you learn the name of a condition, ordinary tiredness or spacing out can start to look like a sign of a symptom. Feelings can change how your body and mood feel, and that is not just imagination; it does happen. Lack of sleep, stress, phone use, and what is going on around you can cause similar things too. Even if you see a name and think \"this might be me,\" try not to settle on it right away, and think about other reasons too. If the hard times continue, you are welcome to ask for help just as you are, even without a name.",
     "srcs": []
    },
    {
     "h": "Mood swings and the urge to double-check are things everyone experiences",
     "body": "Mood swings and the urge to check things just in case are things everyone experiences. But a name (a diagnosis) is given by a doctor who looks at the symptoms, how long they have lasted, and how much they affect daily life, all together (for example, attention difficulties are described as showing up in several settings, such as school, home, and work). For names related to development, how things were from early on is also an important clue. Whether a name is given is something a doctor considers by looking at the whole picture, including surroundings and stress. If the difficulties continue, you are welcome to ask for help as they are, whatever the name.",
     "srcs": [
      {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "こころの情報サイト (Kokoro Information Site, top page)",
       "url": "https://kokoro.ncnp.go.jp/",
       "kind": "summary"
      },
      {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "双極性障害(躁うつ病) (Bipolar disorder)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=RM3UirqngPV6bFW0",
       "kind": "summary"
      },
      {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "強迫性障害 (Obsessive-compulsive disorder)",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=MiyHEH6ZUZDxDeYX",
       "kind": "summary"
      },
      {
       "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
       "title": "発達障害(神経発達症) (Developmental disorders (neurodevelopmental disorders))",
       "url": "https://kokoro.ncnp.go.jp/disease.php?@uid=MbkmLbVbTEhSpxyE",
       "kind": "summary"
      },
      {
       "org": "National Rehabilitation Center for Persons with Disabilities",
       "title": "医療・相談機関へ行くときには (When you go to a medical or consultation institution)",
       "url": "https://www.rehab.go.jp/ddis/howto/consult/visit_hospital/",
       "kind": "summary"
      }
     ]
    },
    {
     "h": "You can ask for help even without a diagnosis",
     "body": "Even without a diagnosis, you can talk about your difficulties just as they are. For example, Developmental Disorders Support Centers take consultations even without a diagnosis. When you ask for accommodations at school or work, you can explain, instead of naming a condition, in what situations you struggle, by speaking, writing, or any other way that suits you. Under the national basic policy of the Act on the Elimination of Discrimination against Persons with Disabilities, people eligible for accommodations are not limited to those who hold a disability certificate. What you would like done, and how much can be done, differs by situation and by the other party's circumstances, so it is decided through discussion.",
     "srcs": [
      {
       "org": "Cabinet Office",
       "title": "障害を理由とする差別の解消の推進に関する基本方針 (Basic Policy for the Promotion of the Elimination of Discrimination on the Basis of Disability)",
       "url": "https://www8.cao.go.jp/shougai/suishin/sabekai/kihonhoushin/honbun.html",
       "kind": "summary"
      },
      {
       "org": "Developmental Disorders Navi Portal",
       "title": "相談できる窓口を教えて欲しい (FAQ: Where can I consult?)",
       "url": "https://hattatsu.go.jp/supporter/welfare/faq/welfare-faq01/",
       "kind": "summary"
      }
     ]
    },
    {
     "h": "However, some systems may need a doctor's certificate",
     "body": "Jiritsu Shien Iryo (Medical Care for Independence Support, for outpatient mental health care) is a national system that lowers your share of outpatient medical costs. Normally you pay 30 percent, but this brings it down to 10 percent, and there is also a monthly upper limit that depends on household income. You apply after seeing a doctor, at the office of the city, town, or village where you live. The documents include a doctor's certificate. In the workplace, when it is unclear whether someone counts as a person with a disability and this cannot be confirmed with a disability certificate or a similar recipient certificate, a doctor's certificate or written opinion stating the name of the condition may be used to confirm it, with the person's consent. Whether a certificate is needed differs by system and situation, so ask at the counter before you start the procedure.",
     "srcs": [
      {
       "org": "Ministry of Health, Labour and Welfare",
       "title": "自立支援医療(精神通院医療)について (About Support for Independence Medical Care (outpatient mental health care))",
       "url": "https://www.mhlw.go.jp/content/001507767.pdf",
       "kind": "summary"
      },
      {
       "org": "Ministry of Health, Labour and Welfare",
       "title": "障害者雇用促進法に基づく障害者差別禁止・合理的配慮に関するQ&A【第二版】 (Q&A on the prohibition of discrimination and reasonable accommodation under the Act on Employment Promotion of Persons with Disabilities, 2nd edition)",
       "url": "https://www.mhlw.go.jp/tenji/dl/file13-04.pdf",
       "kind": "summary"
      }
     ]
    },
    {
     "key": "notTool",
     "h": "A name for a condition is not a tool for standing above anyone",
     "body": "A name for a condition is not a tool for standing above someone or looking down on anyone.\nSome people feel relieved when they learn a name for what they are going through. That is important.\nWanting the people around you to understand you, or to be kind to you, is natural too.\n\nWhen you want someone to be kind to you, you can ask for that directly, without having to give the name of a condition.\nIt is easier to get across if you say two things together: what you are struggling with, and what you would like the other person to do.\n\nFor example, you could say:\n\"I am tired today, so please speak slowly.\"\n\"I get lost when I am told many things at once, so please tell me one thing at a time.\"\n\"I find it hard to remember things I only hear, so please write important things down, on paper or in an email.\"\n\"Crowded places are hard for me, so I would like to talk somewhere quiet.\"\n\"It takes me a while to answer, so please wait a little.\"\n\"I am overwhelmed right now, so please just listen first. Advice can come later.\"\n\"I am not feeling well today, so please let me rest for a while.\"\n\"Sudden changes of plan throw me off, so please let me know as early as you can.\"\n\"When people speak to me loudly, I get scared, so please speak calmly.\"\n\nIf it is hard to say it well, you are welcome to write it on paper and hand it over. You can also use \"Show it large\" to show the \"My worries\" screen, which appears in this app after you choose a worry and answer the questions.\nIf you want to tell someone the name of your condition, you are welcome to. When you do, also saying what you are struggling with and what you would like them to do makes it easier for them to help.\nSometimes the other person cannot do what you ask because of their own situation. When that happens, try talking together about whether there is another way.\n\nPlease do not use the list of names in this app as a reason to doubt the people around you.",
     "srcs": []
    },
    {
     "h": "About this app",
     "body": "This is not a diagnosis. You cannot say you have been diagnosed from this list. This is not a medical device, it has no connection with the government or any medical institution, and it was written by Soyogi in its own words based on national pages. Sources are shown on each screen. The check date is 2026-10-17, and numbers and hours may change. Whether to seek consultation is decided by you, not by the app.",
     "srcs": []
    }
   ],
   "meyasuGeneral": {
    "text": "“If mental unease or stress symptoms last a long time, or are getting in the way of daily life, we recommend consulting a specialized organization early.”",
    "src": {
     "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
     "title": "こころの病気について理解を深めよう (Understanding mental illness)",
     "url": "https://kokoro.ncnp.go.jp/health_understanding.php",
     "kind": "quote"
    }
   },
   "devGeneral": [
    {
     "text": "“Rather than carrying this alone, why not start by consulting a specialist consultation service or a medical institution?”",
     "src": {
      "org": "Government of Japan Public Relations Online",
      "title": "発達障害に気付いたら？大人になって気付いたときの専門相談窓口 (If you notice a developmental condition: specialist consultation for people who notice as adults)",
      "url": "https://www.gov-online.go.jp/article/202302/entry-10203.html",
      "kind": "quote"
     }
    },
    {
     "text": "About Developmental Disorders Support Centers: “Consultation is available even without a diagnosis of a developmental condition.”",
     "src": {
      "org": "Developmental Disorders Navi Portal",
      "title": "相談できる窓口を教えて欲しい (FAQ: Where can I consult?)",
      "url": "https://hattatsu.go.jp/supporter/welfare/faq/welfare-faq01/",
      "kind": "quote"
     }
    }
   ],
   "namesHow": {
    "text": "“The approach has shifted toward giving diagnostic names mainly on the basis of the characteristic symptoms, how long they last, and how much they affect daily life.”",
    "src": {
     "org": "National Center of Neurology and Psychiatry (NCNP), Kokoro Information Site",
     "title": "こころの情報サイト (Kokoro Information Site, top page)",
     "url": "https://kokoro.ncnp.go.jp/",
     "kind": "quote"
    }
   }
  }
 }
};
