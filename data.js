'use strict';
/* 困りごとから相談へ・そよぎ 中身のデータ(window.KOMARI_DATA)
   🔴🔴 このファイルは手で書かない。_make_data.js が照合済みの正本から作る(node _make_data.js)。
      正本 = 国ごとのフォルダ(_countries.js の src)の <id>_final.json と common_final.json(2026-10-17 照合)
   ・画面の操作文言は i18n.js、中身(窓口・まとまり・名前・出典・知っておきたいこと)はここ(SPEC_V1 第6節)
   ・国の箱の中のことばは同じ構造。src = { org, title, url, kind:'quote'|'summary'|'fact' }。窓口の出典は <ことば>.src(src は main のことばと同じ)
   ・groups.<id>.windows = 結果の相談先で先に並べる窓口(固定・答えで変えない)・crisis = 「いま つらいときは」を出す場面の番号
   ・groups.<id>.meyasu.has が false のまとまりは common.meyasuGeneral(と、発達のまとまりだけ devGeneral)を出す
   ・links.junbi = 「相談と受診の前に」の公開先(空なら画面に出さない)
   ・多国籍版(SPEC_V1 第9節): { ver, order, countries:[...], c:{ <国>:{ id, name, langs, main, fallback, srcLang, freeHosts, ver, order, links, windows, <ことば>:{ groups, common } } } }。
     画面は KOMARI_UI.data() で、いま選んでいる国の箱だけを見る */
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
 "countries": [
  "jp",
  "us",
  "fr"
 ],
 "c": {
  "jp": {
   "id": "jp",
   "name": {
    "ja": "日本",
    "en": "Japan",
    "fr": "Japon"
   },
   "langs": [
    "ja",
    "en"
   ],
   "main": "ja",
   "fallback": "en",
   "srcLang": "ja",
   "freeHosts": [
    "mhlw.go.jp",
    "rehab.go.jp",
    "gov-online.go.jp",
    "hattatsu.go.jp",
    "iryou.teikyouseido.mhlw.go.jp"
   ],
   "adaptHosts": [
    "mhlw.go.jp",
    "rehab.go.jp",
    "gov-online.go.jp",
    "hattatsu.go.jp",
    "iryou.teikyouseido.mhlw.go.jp"
   ],
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
  },
  "us": {
   "id": "us",
   "name": {
    "ja": "アメリカ",
    "en": "United States",
    "fr": "États-Unis"
   },
   "langs": [
    "en"
   ],
   "main": "en",
   "fallback": "en",
   "srcLang": "en",
   "freeHosts": [
    "nimh.nih.gov",
    "niddk.nih.gov",
    "nhlbi.nih.gov",
    "nidcd.nih.gov",
    "ninds.nih.gov",
    "nia.nih.gov",
    "medlineplus.gov",
    "cdc.gov",
    "samhsa.gov",
    "library.samhsa.gov",
    "ssa.gov",
    "ada.gov",
    "justice.gov",
    "odphp.health.gov",
    "988lifeline.org",
    "usa.gov"
   ],
   "adaptHosts": [
    "nimh.nih.gov",
    "nida.nih.gov",
    "niaaa.nih.gov",
    "alcoholtreatment.niaaa.nih.gov",
    "niddk.nih.gov",
    "nidcd.nih.gov",
    "ninds.nih.gov",
    "nia.nih.gov",
    "samhsa.gov",
    "library.samhsa.gov",
    "womenshealth.gov",
    "ptsd.va.gov",
    "mentalhealth.va.gov",
    "ada.gov",
    "justice.gov",
    "dol.gov",
    "askjan.org",
    "ssa.gov",
    "odphp.health.gov",
    "ed.gov"
   ],
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
    "junbi": ""
   },
   "windows": [
    {
     "id": "us988",
     "band": "now",
     "tel": "988",
     "tel2": "",
     "url": "https://988lifeline.org/",
     "linkOk": true,
     "sms": "988",
     "en": {
      "name": "988 Suicide & Crisis Lifeline",
      "desc": "Call or text 988, or chat at 988lifeline.org, to connect with a trained crisis counselor. There is no reason too big or too small to reach out, and you can also reach out when you are worried about someone else. English and Spanish; calls can use free interpreters in more than 240 languages. Veterans and their families: dial 988, then press 1. You do not have to give personal information. Most people are helped by talking; 911 is contacted only in a small number of cases when a life is in immediate danger.",
      "hours": "24 hours a day, 7 days a week. Free (standard text message rates may apply).",
      "src": {
       "org": "Substance Abuse and Mental Health Services Administration (SAMHSA)",
       "title": "988 Frequently Asked Questions",
       "url": "https://www.samhsa.gov/mental-health/988/faqs",
       "kind": "summary"
      }
     },
     "src": {
      "org": "Substance Abuse and Mental Health Services Administration (SAMHSA)",
      "title": "988 Frequently Asked Questions",
      "url": "https://www.samhsa.gov/mental-health/988/faqs",
      "kind": "summary"
     }
    },
    {
     "id": "us911",
     "band": "now",
     "tel": "911",
     "tel2": "",
     "url": "",
     "linkOk": false,
     "en": {
      "name": "911 (emergency)",
      "desc": "In life-threatening situations, call 911 or go to the nearest emergency room.",
      "hours": "24 hours a day.",
      "src": {
       "org": "National Institute of Mental Health (NIMH)",
       "title": "Help for Mental Illnesses",
       "url": "https://www.nimh.nih.gov/health/find-help",
       "kind": "summary"
      }
     },
     "src": {
      "org": "National Institute of Mental Health (NIMH)",
      "title": "Help for Mental Illnesses",
      "url": "https://www.nimh.nih.gov/health/find-help",
      "kind": "summary"
     }
    },
    {
     "id": "usddh",
     "band": "now",
     "tel": "1-800-985-5990",
     "tel2": "",
     "url": "",
     "linkOk": false,
     "sms": "1-800-985-5990",
     "en": {
      "name": "Disaster Distress Helpline",
      "desc": "For anyone in the U.S. and its territories who is feeling emotional distress related to a natural or human-caused disaster, including anniversaries of a disaster or events that bring it back. Call or text. For Spanish, call or text and press 2. Counselors can be reached in more than 100 languages through interpreters. Deaf and hard of hearing ASL users can call or text using their preferred relay provider. You do not have to give identifying information.",
      "hours": "24 hours a day, 7 days a week. Toll-free.",
      "src": {
       "org": "Substance Abuse and Mental Health Services Administration (SAMHSA)",
       "title": "Disaster Distress Helpline",
       "url": "https://www.samhsa.gov/find-help/helplines/disaster-distress-helpline",
       "kind": "summary"
      }
     },
     "src": {
      "org": "Substance Abuse and Mental Health Services Administration (SAMHSA)",
      "title": "Disaster Distress Helpline",
      "url": "https://www.samhsa.gov/find-help/helplines/disaster-distress-helpline",
      "kind": "summary"
     }
    },
    {
     "id": "usndvh",
     "band": "now",
     "tel": "1-800-799-7233",
     "tel2": "1-800-787-3224",
     "url": "https://www.thehotline.org/",
     "linkOk": false,
     "en": {
      "name": "National Domestic Violence Hotline",
      "desc": "For people experiencing domestic violence and their families. Call, or chat at thehotline.org. Help is available in 170 languages. The second number (1-800-787-3224) is for TTY.",
      "hours": "24 hours a day, 7 days a week. Free.",
      "src": {
       "org": "Office of Family Violence Prevention and Services, U.S. Department of Health and Human Services",
       "title": "Helplines & Hotlines",
       "url": "https://acf.gov/ofvps/programs-services/hotlines-helplines",
       "kind": "fact"
      }
     },
     "src": {
      "org": "Office of Family Violence Prevention and Services, U.S. Department of Health and Human Services",
      "title": "Helplines & Hotlines",
      "url": "https://acf.gov/ofvps/programs-services/hotlines-helplines",
      "kind": "fact"
     }
    },
    {
     "id": "uspcp",
     "band": "day",
     "tel": "",
     "tel2": "",
     "url": "",
     "linkOk": false,
     "en": {
      "name": "Your primary care provider (regular doctor)",
      "desc": "If you have an appointment, you can bring up your mental health concerns and ask for help. A primary care provider can refer you to a mental health professional, such as a social worker, psychologist, or psychiatrist. If you have a job, ask whether your employer has an Employee Assistance Program (EAP), a free and confidential service your company pays for. If you are a student, your school's health center may help.",
      "hours": "Hours depend on the clinic.",
      "src": {
       "org": "National Institute of Mental Health (NIMH)",
       "title": "Help for Mental Illnesses",
       "url": "https://www.nimh.nih.gov/health/find-help",
       "kind": "summary"
      }
     },
     "src": {
      "org": "National Institute of Mental Health (NIMH)",
      "title": "Help for Mental Illnesses",
      "url": "https://www.nimh.nih.gov/health/find-help",
      "kind": "summary"
     }
    },
    {
     "id": "ushc",
     "band": "day",
     "tel": "",
     "tel2": "",
     "url": "https://findahealthcenter.hrsa.gov/",
     "linkOk": false,
     "en": {
      "name": "Health Center (local clinic)",
      "desc": "Health centers are local clinics for medical, dental, mental health, substance use, and other health care needs. All health centers adjust their fees based on income and family size, and they must serve everyone, even if they cannot pay. Use the Find a Health Center tool to find one near you.",
      "hours": "Hours depend on the health center.",
      "src": {
       "org": "Health Resources and Services Administration (HRSA)",
       "title": "What is a Health Center?",
       "url": "https://bphc.hrsa.gov/about-health-center-program/what-health-center",
       "kind": "fact"
      }
     },
     "src": {
      "org": "Health Resources and Services Administration (HRSA)",
      "title": "What is a Health Center?",
      "url": "https://bphc.hrsa.gov/about-health-center-program/what-health-center",
      "kind": "fact"
     }
    },
    {
     "id": "usfindtx",
     "band": "day",
     "tel": "",
     "tel2": "",
     "url": "https://findtreatment.gov/",
     "linkOk": false,
     "en": {
      "name": "FindTreatment.gov",
      "desc": "A confidential and anonymous website from SAMHSA for finding mental health and substance use services in the United States and its territories. Available in Spanish.",
      "hours": "A website you can use any time.",
      "src": {
       "org": "Substance Abuse and Mental Health Services Administration (SAMHSA)",
       "title": "Find Help & Support",
       "url": "https://www.samhsa.gov/find-help",
       "kind": "summary"
      }
     },
     "src": {
      "org": "Substance Abuse and Mental Health Services Administration (SAMHSA)",
      "title": "Find Help & Support",
      "url": "https://www.samhsa.gov/find-help",
      "kind": "summary"
     }
    },
    {
     "id": "ussamhsa",
     "band": "day",
     "tel": "1-800-662-4357",
     "tel2": "1-800-487-4889",
     "url": "",
     "linkOk": false,
     "en": {
      "name": "SAMHSA's National Helpline",
      "desc": "A free and confidential information service for people and families facing mental health or substance use problems. It does not provide counseling; information specialists help you find state services and local support. If you have no insurance or not enough insurance, they can refer you to your state office, and often to places that charge on a sliding fee scale. They will not ask for personal information. English and Spanish. The second number (1-800-487-4889) is for TTY.",
      "hours": "24 hours a day, 365 days a year.",
      "src": {
       "org": "Substance Abuse and Mental Health Services Administration (SAMHSA)",
       "title": "National Helpline",
       "url": "https://www.samhsa.gov/find-help/helplines/national-helpline",
       "kind": "summary"
      }
     },
     "src": {
      "org": "Substance Abuse and Mental Health Services Administration (SAMHSA)",
      "title": "National Helpline",
      "url": "https://www.samhsa.gov/find-help/helplines/national-helpline",
      "kind": "summary"
     }
    },
    {
     "id": "usstate",
     "band": "day",
     "tel": "",
     "tel2": "",
     "url": "https://findtreatment.gov/state-agencies",
     "linkOk": false,
     "en": {
      "name": "Your state's mental health and substance use agency",
      "desc": "Your state agency has information on how people without insurance can get care. On this page, choose your state.",
      "hours": "Hours depend on the state.",
      "src": {
       "org": "Substance Abuse and Mental Health Services Administration (SAMHSA)",
       "title": "Free & Low Cost Treatment Options for Mental Health and Substance Use",
       "url": "https://www.samhsa.gov/find-support/how-to-pay-for-treatment/free-or-low-cost-treatment",
       "kind": "summary"
      }
     },
     "src": {
      "org": "Substance Abuse and Mental Health Services Administration (SAMHSA)",
      "title": "Free & Low Cost Treatment Options for Mental Health and Substance Use",
      "url": "https://www.samhsa.gov/find-support/how-to-pay-for-treatment/free-or-low-cost-treatment",
      "kind": "summary"
     }
    },
    {
     "id": "us211",
     "band": "day",
     "tel": "211",
     "tel2": "",
     "url": "",
     "linkOk": false,
     "en": {
      "name": "211 (community services)",
      "desc": "In many states, dialing 211 connects you with local health and human services, such as help with food, housing, and other needs. 211 is available to about 99 percent of people in the U.S. Help in languages other than English varies by location.",
      "hours": "Hours and services vary by location.",
      "src": {
       "org": "Federal Communications Commission (FCC)",
       "title": "Dial 211 for Essential Community Services",
       "url": "https://www.fcc.gov/consumers/guides/dial-211-essential-community-services",
       "kind": "fact"
      }
     },
     "src": {
      "org": "Federal Communications Commission (FCC)",
      "title": "Dial 211 for Essential Community Services",
      "url": "https://www.fcc.gov/consumers/guides/dial-211-essential-community-services",
      "kind": "fact"
     }
    },
    {
     "id": "usniaaa",
     "band": "day",
     "tel": "",
     "tel2": "",
     "url": "https://alcoholtreatment.niaaa.nih.gov/",
     "linkOk": false,
     "en": {
      "name": "NIAAA Alcohol Treatment Navigator",
      "desc": "A guide from the National Institute on Alcohol Abuse and Alcoholism that helps adults find care for alcohol problems, for themselves or for an adult loved one. It has no commercial sponsors. Care can also be available through telehealth and other online options.",
      "hours": "A website you can use any time.",
      "src": {
       "org": "National Institute on Alcohol Abuse and Alcoholism (NIAAA)",
       "title": "Find Your Way to Alcohol Treatment | Navigator",
       "url": "https://alcoholtreatment.niaaa.nih.gov/",
       "kind": "summary"
      }
     },
     "src": {
      "org": "National Institute on Alcohol Abuse and Alcoholism (NIAAA)",
      "title": "Find Your Way to Alcohol Treatment | Navigator",
      "url": "https://alcoholtreatment.niaaa.nih.gov/",
      "kind": "summary"
     }
    },
    {
     "id": "useat",
     "band": "day",
     "tel": "866-662-1235",
     "tel2": "888-375-7767",
     "url": "",
     "linkOk": false,
     "en": {
      "name": "Eating disorder helplines",
      "desc": "The U.S. Office on Women's Health lists two helplines for anyone with an eating disorder, or anyone worried about someone who has one: the National Alliance for Eating Disorders helpline (866-662-1235) and the ANAD helpline (888-375-7767).",
      "hours": "National Alliance for Eating Disorders: Monday to Friday, 9 a.m. to 7 p.m. Eastern Time. ANAD: Monday to Friday, 10 a.m. to 10 p.m. Eastern Time.",
      "src": {
       "org": "Office on Women's Health, U.S. Department of Health and Human Services",
       "title": "National Eating Disorders Awareness Week",
       "url": "https://womenshealth.gov/topics/national-eating-disorders-awareness-week",
       "kind": "summary"
      }
     },
     "src": {
      "org": "Office on Women's Health, U.S. Department of Health and Human Services",
      "title": "National Eating Disorders Awareness Week",
      "url": "https://womenshealth.gov/topics/national-eating-disorders-awareness-week",
      "kind": "summary"
     }
    },
    {
     "id": "usjan",
     "band": "day",
     "tel": "800-526-7234",
     "tel2": "",
     "url": "https://askjan.org/",
     "linkOk": false,
     "en": {
      "name": "Job Accommodation Network (JAN)",
      "desc": "Free, confidential help about job accommodations and the Americans with Disabilities Act (ADA). Workers and their family members can contact JAN by phone or email, and you may choose to remain anonymous. JAN is funded by the U.S. Department of Labor.",
      "hours": "Monday to Friday, 9 a.m. to 6 p.m. Eastern Time.",
      "src": {
       "org": "Job Accommodation Network (JAN), funded by the U.S. Department of Labor",
       "title": "Contact Us",
       "url": "https://askjan.org/contact-us.cfm",
       "kind": "summary"
      }
     },
     "src": {
      "org": "Job Accommodation Network (JAN), funded by the U.S. Department of Labor",
      "title": "Contact Us",
      "url": "https://askjan.org/contact-us.cfm",
      "kind": "summary"
     }
    },
    {
     "id": "usvr",
     "band": "day",
     "tel": "",
     "tel2": "",
     "url": "https://rsa.ed.gov/about/states",
     "linkOk": false,
     "en": {
      "name": "State vocational rehabilitation agencies",
      "desc": "Every state, the District of Columbia, Puerto Rico, and the territories have vocational rehabilitation agencies that support work for people with disabilities. This U.S. Department of Education page lists contact information for all 78 agencies.",
      "hours": "Hours depend on the agency.",
      "src": {
       "org": "Rehabilitation Services Administration, U.S. Department of Education",
       "title": "State Vocational Rehabilitation Agencies",
       "url": "https://rsa.ed.gov/about/states",
       "kind": "fact"
      }
     },
     "src": {
      "org": "Rehabilitation Services Administration, U.S. Department of Education",
      "title": "State Vocational Rehabilitation Agencies",
      "url": "https://rsa.ed.gov/about/states",
      "kind": "fact"
     }
    },
    {
     "id": "usada",
     "band": "day",
     "tel": "800-514-0301",
     "tel2": "1-833-610-1264",
     "url": "",
     "linkOk": false,
     "en": {
      "name": "ADA Information Line (U.S. Department of Justice)",
      "desc": "Accessibility specialists answer questions about the Americans with Disabilities Act (ADA) from individuals, businesses, and state and local governments. All calls are confidential. Calls about employment discrimination, housing discrimination, or air travel may be referred to another federal agency. The second number (1-833-610-1264) is for TTY.",
      "hours": "Monday to Friday.",
      "src": {
       "org": "U.S. Department of Justice, ADA.gov",
       "title": "ADA Information Line",
       "url": "https://www.ada.gov/infoline/",
       "kind": "summary"
      }
     },
     "src": {
      "org": "U.S. Department of Justice, ADA.gov",
      "title": "ADA Information Line",
      "url": "https://www.ada.gov/infoline/",
      "kind": "summary"
     }
    }
   ],
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
       "has": false,
       "text": "",
       "src": null
      },
      "names": [
       {
        "name": "Low mood related to physical illness or medicine",
        "why": "NIMH writes that certain medicines and medical conditions, such as viruses or thyroid disorders, can cause the same symptoms as depression, and that a provider can look into this with a physical exam, an interview, and lab work. The page also says that medicines taken for an illness sometimes have side effects that add to symptoms of depression.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Depression",
         "url": "https://www.nimh.nih.gov/health/publications/depression",
         "kind": "summary"
        }
       },
       {
        "name": "Thyroid disease (hypothyroidism, or underactive thyroid)",
        "why": "NIDDK lists fatigue and depression among the common symptoms of hypothyroidism, in which the thyroid does not make enough hormones and many of the body's functions slow down. The page also notes that many of its symptoms are the same as those of other diseases.",
        "src": {
         "org": "National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)",
         "title": "Hypothyroidism (Underactive Thyroid)",
         "url": "https://www.niddk.nih.gov/health-information/endocrine-diseases/hypothyroidism",
         "kind": "summary"
        }
       },
       {
        "name": "Hearing difficulty (hearing loss)",
        "why": "NIA writes that older people who cannot hear well can become depressed or withdrawn from others, because they feel frustrated or embarrassed about not understanding what is being said. The page adds that this can lead to social isolation and loneliness.",
        "src": {
         "org": "National Institute on Aging (NIA)",
         "title": "Hearing Loss: A Common Problem for Older Adults",
         "url": "https://www.nia.nih.gov/health/hearing-and-hearing-loss/hearing-loss-common-problem-older-adults",
         "kind": "summary"
        }
       },
       {
        "name": "Insomnia",
        "why": "“Insomnia can cause you to feel anxious, depressed, or easily annoyed.”",
        "src": {
         "org": "National Heart, Lung, and Blood Institute (NHLBI)",
         "title": "Insomnia - Symptoms",
         "url": "https://www.nhlbi.nih.gov/health/insomnia/symptoms",
         "kind": "quote"
        }
       },
       {
        "name": "Alcohol-related problems (e.g. alcohol use disorder)",
        "why": "NIAAA describes alcohol use disorder as difficulty stopping or controlling drinking even when it causes problems, and says that depression and a range of other psychiatric conditions can occur together with it. The page also mentions feeling low or uneasy and trouble sleeping among the effects that can come as alcohol wears off.",
        "src": {
         "org": "National Institute on Alcohol Abuse and Alcoholism (NIAAA)",
         "title": "Understanding Alcohol Use Disorder",
         "url": "https://www.niaaa.nih.gov/publications/brochures-and-fact-sheets/understanding-alcohol-use-disorder",
         "kind": "summary"
        }
       },
       {
        "name": "Depression",
        "why": "NIMH explains that everyone feels sad or low sometimes, but depression is different: it can cause symptoms that affect how a person feels, thinks, and handles daily activities such as sleeping, eating, or working. Symptoms listed on the page include a persistent sad, anxious, or empty mood, loss of interest or pleasure, fatigue, trouble concentrating, and changes in sleep and appetite.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Depression",
         "url": "https://www.nimh.nih.gov/health/publications/depression",
         "kind": "summary"
        }
       },
       {
        "name": "Persistent depressive disorder (dysthymia)",
        "why": "NIMH names persistent depressive disorder (also called dysthymia) as one of the common forms of depression. It is described as depression symptoms that are less severe but last much longer.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Depression",
         "url": "https://www.nimh.nih.gov/health/publications/depression",
         "kind": "summary"
        }
       },
       {
        "name": "Bipolar disorder (manic depression)",
        "why": "NIMH describes bipolar disorder as including depressive episodes, with sadness, hopelessness, and very low activity, and also manic or milder hypomanic episodes with an unusually elevated mood and much more activity than usual. The page notes that people with bipolar II disorder may seek help only for depressive episodes, and that the high (hypomanic) periods may go unnoticed.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Bipolar Disorder",
         "url": "https://www.nimh.nih.gov/health/publications/bipolar-disorder",
         "kind": "summary"
        }
       }
      ],
      "windows": [
       "uspcp",
       "ushc",
       "usfindtx",
       "ussamhsa",
       "us211"
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
       "has": false,
       "text": "",
       "src": null
      },
      "names": [
       {
        "name": "Hyperthyroidism (overactive thyroid)",
        "why": "NIDDK lists a rapid or irregular heartbeat, nervousness, irritability, trouble sleeping, fatigue, and shaky hands among the symptoms of hyperthyroidism. The page also notes that many of its symptoms are the same as those of other diseases.",
        "src": {
         "org": "National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)",
         "title": "Hyperthyroidism (Overactive Thyroid)",
         "url": "https://www.niddk.nih.gov/health-information/endocrine-diseases/hyperthyroidism",
         "kind": "summary"
        }
       },
       {
        "name": "Arrhythmia (irregular heartbeat)",
        "why": "“You may also feel like your heart is skipping a beat, fluttering, pounding, or beating too hard or too fast.”",
        "src": {
         "org": "National Heart, Lung, and Blood Institute (NHLBI)",
         "title": "Arrhythmias - Symptoms",
         "url": "https://www.nhlbi.nih.gov/health/arrhythmias/symptoms",
         "kind": "quote"
        }
       },
       {
        "name": "Anemia (iron-deficiency anemia)",
        "why": "This page lists a rapid or irregular heartbeat, shortness of breath or chest pain (especially with physical activity), dizziness, fatigue, and weakness among the symptoms of iron-deficiency anemia, the most common form of anemia.",
        "src": {
         "org": "Office on Women's Health, U.S. Department of Health and Human Services",
         "title": "Iron-deficiency anemia",
         "url": "https://womenshealth.gov/a-z-topics/iron-deficiency-anemia",
         "kind": "summary"
        }
       },
       {
        "name": "Alcohol-related problems (e.g. alcohol use disorder)",
        "why": "NIAAA describes alcohol use disorder as difficulty stopping or controlling drinking even when it causes problems. The page notes that drinking can leave a person feeling depressed or anxious, and that restlessness, a racing heart, or trouble sleeping can come as the effects of alcohol wear off.",
        "src": {
         "org": "National Institute on Alcohol Abuse and Alcoholism (NIAAA)",
         "title": "Understanding Alcohol Use Disorder",
         "url": "https://www.niaaa.nih.gov/publications/brochures-and-fact-sheets/understanding-alcohol-use-disorder",
         "kind": "summary"
        }
       },
       {
        "name": "Insomnia",
        "why": "“Insomnia can cause you to feel anxious, depressed, or easily annoyed.”",
        "src": {
         "org": "National Heart, Lung, and Blood Institute (NHLBI)",
         "title": "Insomnia - Symptoms",
         "url": "https://www.nhlbi.nih.gov/health/insomnia/symptoms",
         "kind": "quote"
        }
       },
       {
        "name": "Anxiety disorders (generalized anxiety disorder, panic disorder, social anxiety disorder, phobia-related disorders, and others)",
        "why": "NIMH explains that anxiety disorders involve more than occasional worry or fear: the anxiety does not go away, is felt in many situations, and can get worse over time. The page says this can interfere with daily life, and that in severe cases a person might feel intense fear in common situations, avoid social encounters, or refuse to leave home.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Anxiety Disorders",
         "url": "https://www.nimh.nih.gov/health/topics/anxiety-disorders",
         "kind": "summary"
        }
       },
       {
        "name": "Depression",
        "why": "Among the symptoms of depression, NIMH lists a persistent sad, anxious, or empty mood, and feeling restless or on edge. The page also says that for some people, symptoms show up as physical problems such as a racing heart or a tightened chest.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Depression",
         "url": "https://www.nimh.nih.gov/health/publications/depression",
         "kind": "summary"
        }
       },
       {
        "name": "PTSD (post-traumatic stress disorder)",
        "why": "NIMH explains that PTSD can develop after a dangerous or traumatic event, and that people with PTSD can feel stressed or frightened even when they are no longer in danger. Symptoms listed on the page include reliving the event with a racing heart or sweating, and feeling tense, on guard, or on edge.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Post-Traumatic Stress Disorder",
         "url": "https://www.nimh.nih.gov/health/publications/post-traumatic-stress-disorder-ptsd",
         "kind": "summary"
        }
       }
      ],
      "windows": [
       "uspcp",
       "ushc",
       "usfindtx",
       "ussamhsa",
       "us211"
      ],
      "crisis": []
     },
     "repeat": {
      "label": "Hard to stop checking or repeating things",
      "lead": "When you check the lock or the gas, wash your hands, or repeat other things again and again, and find it hard to stop even when you want to.",
      "scenes": [
       "When I leave home, I can't feel at ease unless I check the lock and the stove again and again.",
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
       "When deciding how to go ahead with consultations or medical visits, please listen to my worries and take it slowly."
      ],
      "meyasu": {
       "has": false,
       "text": "",
       "src": null
      },
      "names": [
       {
        "name": "Obsessive-compulsive disorder (OCD)",
        "why": "NIMH describes OCD as recurring thoughts that are hard to control, repeated behaviors, or both, which take up time and can cause distress or get in the way of daily life. Examples on the page include excessive handwashing, arranging items in a precise way, and repeatedly checking that the door is locked or the oven is off.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Obsessive-Compulsive Disorder: When Unwanted Thoughts or Repetitive Behaviors Take Over",
         "url": "https://www.nimh.nih.gov/health/publications/obsessive-compulsive-disorder-when-unwanted-thoughts-or-repetitive-behaviors-take-over",
         "kind": "summary"
        }
       },
       {
        "name": "Generalized anxiety disorder (GAD)",
        "why": "NIMH explains that many people worry about things such as health, money, work, or family, but that people with generalized anxiety disorder feel extremely worried or nervous more often or more intensely, even when the worry is out of proportion to the situation. Among its symptoms, the page lists worrying too much about everyday things and having trouble controlling worries.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Generalized Anxiety Disorder: What You Need to Know",
         "url": "https://www.nimh.nih.gov/health/publications/generalized-anxiety-disorder-gad",
         "kind": "summary"
        }
       },
       {
        "name": "Autism spectrum disorder (ASD)",
        "why": "NIMH lists restricted interests and repetitive behaviors among the features of autism spectrum disorder, with examples such as repeating certain behaviors and becoming upset by slight changes in a routine. The page also notes that in adults, some of its symptoms can overlap with those of an anxiety disorder.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Autism Spectrum Disorder",
         "url": "https://www.nimh.nih.gov/health/publications/autism-spectrum-disorder",
         "kind": "summary"
        }
       },
       {
        "name": "Tic disorders and Tourette syndrome",
        "why": "NINDS describes Tourette syndrome as a condition that can cause sudden, unwanted, and uncontrolled rapid, repeated movements or sounds called tics, and places it in a group called tic disorders. The page says tics are involuntary, and that holding them back can build up a sense of tension.",
        "src": {
         "org": "National Institute of Neurological Disorders and Stroke (NINDS)",
         "title": "Tourette Syndrome",
         "url": "https://www.ninds.nih.gov/health-information/disorders/tourette-syndrome",
         "kind": "summary"
        }
       }
      ],
      "windows": [
       "uspcp",
       "usfindtx",
       "ushc",
       "ussamhsa"
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
       "text": "“It is important to seek professional help if symptoms do not improve over time or begin to interfere with daily life.”",
       "src": {
        "org": "National Institute of Mental Health (NIMH)",
        "title": "Coping With Traumatic Events",
        "url": "https://www.nimh.nih.gov/health/topics/coping-with-traumatic-events",
        "kind": "quote"
       }
      },
      "names": [
       {
        "name": "Sleep problems (insomnia, nightmares)",
        "why": "The National Center for PTSD explains how trauma can lead to trouble sleeping, and says that nightmares are often a replay of the traumatic event. The page also says that sleep problems may become their own disorders that cause distress.",
        "src": {
         "org": "National Center for PTSD, U.S. Department of Veterans Affairs",
         "title": "Sleep Problems and PTSD",
         "url": "https://www.ptsd.va.gov/understand/related/sleep_problems.asp",
         "kind": "summary"
        }
       },
       {
        "name": "Acute stress disorder",
        "why": "The National Center for PTSD describes acute stress disorder as a mental health problem that can appear soon after a traumatic event, with memories that come back, avoiding reminders, and feeling jittery or on edge. The page says its symptoms are similar to those of PTSD but not the same, and that the two are also told apart by how long the symptoms have lasted.",
        "src": {
         "org": "National Center for PTSD, U.S. Department of Veterans Affairs",
         "title": "Acute Stress Disorder",
         "url": "https://www.ptsd.va.gov/understand/related/acute_stress.asp",
         "kind": "summary"
        }
       },
       {
        "name": "PTSD (post-traumatic stress disorder)",
        "why": "NIMH describes PTSD as a condition that can develop after living through or witnessing a dangerous or serious event, with memories or dreams of the event that keep coming back, staying away from reminders, feeling tense or on edge, and exaggerated feelings of blame toward oneself or others. The brochure says the symptoms sometimes appear later rather than soon after the event.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Post-Traumatic Stress Disorder",
         "url": "https://www.nimh.nih.gov/health/publications/post-traumatic-stress-disorder-ptsd",
         "kind": "summary"
        }
       },
       {
        "name": "Depression",
        "why": "NIMH's page on coping with traumatic events says that people who go through traumatic events may also experience depression.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Coping With Traumatic Events",
         "url": "https://www.nimh.nih.gov/health/topics/coping-with-traumatic-events",
         "kind": "summary"
        }
       }
      ],
      "windows": [
       "usfindtx",
       "uspcp",
       "ushc",
       "ussamhsa",
       "us211"
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
       "text": "“If you're concerned about your sleep, see a doctor.”",
       "src": {
        "org": "Office of Disease Prevention and Health Promotion (ODPHP)",
        "title": "Get Enough Sleep",
        "url": "https://odphp.health.gov/myhealthfinder/healthy-living/mental-health-and-relationships/get-enough-sleep",
        "kind": "quote"
       }
      },
      "names": [
       {
        "name": "Insomnia",
        "why": "The Office on Women's Health describes insomnia as a common sleep disorder in which it is hard to fall asleep or stay asleep, a person wakes up too early, or sleep does not feel restful. The page says that when it goes on for a long time, it can make going to work or school and daily tasks hard.",
        "src": {
         "org": "Office on Women's Health, U.S. Department of Health and Human Services",
         "title": "Insomnia",
         "url": "https://womenshealth.gov/a-z-topics/insomnia",
         "kind": "summary"
        }
       },
       {
        "name": "Sleep apnea",
        "why": "“Sleep apnea is a common condition that occurs when your breathing stops and restarts many times while you sleep.”",
        "src": {
         "org": "National Heart, Lung, and Blood Institute (NHLBI)",
         "title": "Sleep Apnea",
         "url": "https://www.nhlbi.nih.gov/health/sleep-apnea",
         "kind": "quote"
        }
       },
       {
        "name": "Restless legs syndrome",
        "why": "NINDS describes restless legs syndrome as a sleep disorder triggered by resting and trying to sleep, with uncomfortable feelings in the legs and a strong urge to move them. The page says it often comes in the late afternoon or evening and can make it hard to fall asleep or get back to sleep.",
        "src": {
         "org": "National Institute of Neurological Disorders and Stroke (NINDS)",
         "title": "Restless Legs Syndrome",
         "url": "https://www.ninds.nih.gov/health-information/disorders/restless-legs-syndrome",
         "kind": "summary"
        }
       },
       {
        "name": "Circadian rhythm disorders (sleep-wake cycle disorders)",
        "why": "“Circadian rhythm disorders, also known as sleep-wake cycle disorders, are problems that occur when your body’s internal clock, which tells you when it’s time to sleep or wake, is out of sync with your environment.”",
        "src": {
         "org": "National Heart, Lung, and Blood Institute (NHLBI)",
         "title": "Circadian Rhythm Disorders",
         "url": "https://www.nhlbi.nih.gov/health/circadian-rhythm-disorders",
         "kind": "quote"
        }
       },
       {
        "name": "Sleep deficiency (not getting enough sleep)",
        "why": "“Sleep deficiency can interfere with work, school, driving, and social functioning.”",
        "src": {
         "org": "National Heart, Lung, and Blood Institute (NHLBI)",
         "title": "Sleep Deprivation and Deficiency",
         "url": "https://www.nhlbi.nih.gov/health/sleep-deprivation",
         "kind": "quote"
        }
       },
       {
        "name": "Narcolepsy",
        "why": "NINDS describes narcolepsy as a long-lasting neurological condition that affects the brain's control of sleeping and waking. The page says it brings strong sleepiness during the day that does not get better even after enough sleep at night, and that the sleepiness can come on quickly.",
        "src": {
         "org": "National Institute of Neurological Disorders and Stroke (NINDS)",
         "title": "Narcolepsy",
         "url": "https://www.ninds.nih.gov/health-information/disorders/narcolepsy",
         "kind": "summary"
        }
       },
       {
        "name": "Sleep problems linked to other health conditions, pain, medicines, caffeine, nicotine, or alcohol",
        "why": "This page lists things that can make it harder to fall or stay asleep, including pain, certain health conditions such as heartburn or asthma, some medicines, caffeine, and alcohol and other drugs. It also says that the nicotine in cigarettes can make it harder to sleep.",
        "src": {
         "org": "Office of Disease Prevention and Health Promotion (ODPHP)",
         "title": "Get Enough Sleep",
         "url": "https://odphp.health.gov/myhealthfinder/healthy-living/mental-health-and-relationships/get-enough-sleep",
         "kind": "summary"
        }
       },
       {
        "name": "Depression",
        "why": "NIMH explains that depression is different from the low feelings that usually pass, and lists difficulty sleeping, waking too early in the morning, and oversleeping among its common symptoms. The brochure says it can affect daily activities such as sleeping, eating, or working.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Depression",
         "url": "https://www.nimh.nih.gov/health/publications/depression",
         "kind": "summary"
        }
       }
      ],
      "windows": [
       "uspcp",
       "ushc",
       "usfindtx"
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
       "Please explain the steps of any physical exam or lab work beforehand.",
       "Please let me hand over in writing what is hard to say out loud."
      ],
      "meyasu": {
       "has": true,
       "text": "“If you have concerns about your eating behavior or mental health, talk to a primary care provider.”",
       "src": {
        "org": "National Institute of Mental Health (NIMH)",
        "title": "Eating Disorders: What You Need to Know",
        "url": "https://www.nimh.nih.gov/health/publications/eating-disorders",
        "kind": "quote"
       }
      },
      "names": [
       {
        "name": "Other physical health problems that can cause weight loss",
        "why": "The Office on Women's Health page on anorexia nervosa explains that a doctor does a physical exam and lab work, such as blood and urine samples, to rule out other health problems that can cause severe weight loss.",
        "src": {
         "org": "Office on Women's Health, U.S. Department of Health and Human Services",
         "title": "Anorexia nervosa",
         "url": "https://womenshealth.gov/mental-health/mental-health-conditions/eating-disorders/anorexia-nervosa",
         "kind": "summary"
        }
       },
       {
        "name": "Eating disorders (anorexia nervosa, bulimia nervosa, binge-eating disorder)",
        "why": "NIMH describes eating disorders as serious illnesses with severe disturbances in eating, such as strictly limiting food out of an intense fear of gaining weight, or regularly losing control and eating unusually large amounts. The brochure says eating disorders are not a choice and can affect both physical and mental health.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Eating Disorders: What You Need to Know",
         "url": "https://www.nimh.nih.gov/health/publications/eating-disorders",
         "kind": "summary"
        }
       },
       {
        "name": "Avoidant restrictive food intake disorder (ARFID)",
        "why": "NIMH describes ARFID as limiting the amount and variety of food because of anxiety or fear about what might happen when eating, such as choking or vomiting, or because of a dislike of how foods look or feel. The brochure lists it among the common eating disorders.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Eating Disorders: What You Need to Know",
         "url": "https://www.nimh.nih.gov/health/publications/eating-disorders",
         "kind": "summary"
        }
       },
       {
        "name": "Depression",
        "why": "NIMH lists changes in appetite or unplanned weight changes among the common symptoms of depression. The brochure says depression can affect daily activities such as sleeping, eating, or working.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Depression",
         "url": "https://www.nimh.nih.gov/health/publications/depression",
         "kind": "summary"
        }
       }
      ],
      "windows": [
       "uspcp",
       "useat",
       "ushc",
       "usfindtx"
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
       "text": "“If you have concerns about your gambling, ask for help.”",
       "src": {
        "org": "MedlinePlus, National Library of Medicine",
        "title": "Compulsive Gambling",
        "url": "https://medlineplus.gov/compulsivegambling.html",
        "kind": "quote"
       }
      },
      "names": [
       {
        "name": "Insomnia",
        "why": "“Substances such as caffeine, tobacco, and alcohol can also be a cause.”",
        "src": {
         "org": "MedlinePlus, National Library of Medicine",
         "title": "Insomnia",
         "url": "https://medlineplus.gov/insomnia.html",
         "kind": "quote"
        }
       },
       {
        "name": "Alcohol use disorder (AUD)",
        "why": "NIAAA describes alcohol use disorder as a medical condition in which the ability to stop or control drinking is impaired, even when drinking causes problems in social life, work, or health. The page says this name also covers what some people call alcohol dependence.",
        "src": {
         "org": "National Institute on Alcohol Abuse and Alcoholism (NIAAA)",
         "title": "Understanding Alcohol Use Disorder",
         "url": "https://www.niaaa.nih.gov/publications/brochures-and-fact-sheets/understanding-alcohol-use-disorder",
         "kind": "summary"
        }
       },
       {
        "name": "Depression",
        "why": "NIMH lists increased use of alcohol or drugs, and greater impulsivity, among the changes in behavior that depression can involve. Its list of common symptoms also includes a persistent sad or empty mood and trouble sleeping.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Depression",
         "url": "https://www.nimh.nih.gov/health/publications/depression",
         "kind": "summary"
        }
       },
       {
        "name": "Bipolar disorder",
        "why": "NIMH lists an excessive appetite for food, drinking, or other pleasurable activities among the symptoms of a manic episode. It also says many people with bipolar disorder have other conditions as well, such as misuse of drugs or alcohol.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Bipolar Disorder",
         "url": "https://www.nimh.nih.gov/health/publications/bipolar-disorder",
         "kind": "summary"
        }
       },
       {
        "name": "Attention-deficit/hyperactivity disorder (ADHD)",
        "why": "NIAAA names attention-deficit/hyperactivity disorder, along with depression and post-traumatic stress disorder, among the mental health conditions that occur together with alcohol use disorder.",
        "src": {
         "org": "National Institute on Alcohol Abuse and Alcoholism (NIAAA)",
         "title": "Understanding Alcohol Use Disorder",
         "url": "https://www.niaaa.nih.gov/publications/brochures-and-fact-sheets/understanding-alcohol-use-disorder",
         "kind": "summary"
        }
       }
      ],
      "windows": [
       "ussamhsa",
       "usfindtx",
       "usniaaa",
       "uspcp",
       "ushc",
       "us211"
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
        "name": "Sleep deprivation and deficiency",
        "why": "“Sleep deficiency can cause problems with learning, focusing, and reacting.”",
        "src": {
         "org": "National Heart, Lung, and Blood Institute (NHLBI)",
         "title": "Sleep Deprivation and Deficiency - How Sleep Affects Your Health",
         "url": "https://www.nhlbi.nih.gov/health/sleep-deprivation/health-effects",
         "kind": "quote"
        }
       },
       {
        "name": "Insomnia",
        "why": "“Insomnia can affect your memory and concentration.”",
        "src": {
         "org": "National Heart, Lung, and Blood Institute (NHLBI)",
         "title": "Insomnia - What Is Insomnia?",
         "url": "https://www.nhlbi.nih.gov/health/insomnia",
         "kind": "quote"
        }
       },
       {
        "name": "Hyperthyroidism (overactive thyroid)",
        "why": "NIDDK lists nervousness, irritability, trouble sleeping, and fatigue among the symptoms of an overactive thyroid, and names Graves' disease as its most common cause. It also says many of its symptoms are the same as those of other diseases.",
        "src": {
         "org": "National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)",
         "title": "Hyperthyroidism (Overactive Thyroid)",
         "url": "https://www.niddk.nih.gov/health-information/endocrine-diseases/hyperthyroidism",
         "kind": "summary"
        }
       },
       {
        "name": "Depression",
        "why": "NIMH lists difficulty concentrating, remembering, or making decisions among the common symptoms of depression, along with fatigue and lack of energy. It also lists feeling restless or on edge among the changes depression can involve.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Depression",
         "url": "https://www.nimh.nih.gov/health/publications/depression",
         "kind": "summary"
        }
       },
       {
        "name": "Generalized anxiety disorder (GAD)",
        "why": "NIMH describes generalized anxiety disorder as worrying too much about everyday things and having trouble controlling the worry. It lists feeling restless, having a hard time concentrating, and feeling tired among its symptoms.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Generalized Anxiety Disorder: What You Need to Know",
         "url": "https://www.nimh.nih.gov/health/publications/generalized-anxiety-disorder-gad",
         "kind": "summary"
        }
       },
       {
        "name": "Bipolar disorder",
        "why": "NIMH lists racing thoughts and feeling able to do many things at once among the symptoms of a manic episode, and trouble concentrating or making decisions among the symptoms of a depressive episode. It also says many people with bipolar disorder have other conditions as well, such as ADHD.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Bipolar Disorder",
         "url": "https://www.nimh.nih.gov/health/publications/bipolar-disorder",
         "kind": "summary"
        }
       },
       {
        "name": "Attention-deficit/hyperactivity disorder (ADHD)",
        "why": "NIMH describes ADHD as an ongoing pattern of inattention, hyperactivity, or impulsivity that makes it hard to function in more than one area of life, such as home, school, or work. For adults, it lists trouble paying attention, disorganization, trouble remembering daily tasks, losing things, and difficulty sitting still.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "ADHD in Adults: 4 Things to Know",
         "url": "https://www.nimh.nih.gov/health/publications/adhd-what-you-need-to-know",
         "kind": "summary"
        }
       },
       {
        "name": "Autism spectrum disorder (ASD)",
        "why": "NIMH says that in adults, some symptoms of autism spectrum disorder can overlap with those of ADHD or an anxiety disorder. It also lists becoming upset by slight changes in a routine and having difficulty with transitions.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Autism Spectrum Disorder",
         "url": "https://www.nimh.nih.gov/health/publications/autism-spectrum-disorder",
         "kind": "summary"
        }
       }
      ],
      "windows": [
       "uspcp",
       "ushc",
       "usfindtx",
       "usjan",
       "usvr"
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
        "why": "NIA explains that hearing loss can come from loud noise, aging, disease, or genetic differences, and that people with hearing loss may find it hard to have conversations with friends and family. It also says older people who cannot hear well may become depressed or withdrawn from others.",
        "src": {
         "org": "National Institute on Aging (NIA)",
         "title": "Hearing Loss: A Common Problem for Older Adults",
         "url": "https://www.nia.nih.gov/health/hearing-and-hearing-loss/hearing-loss-common-problem-older-adults",
         "kind": "summary"
        }
       },
       {
        "name": "Depression",
        "why": "NIMH lists becoming withdrawn and isolating from family and friends among the changes that depression can involve. Its list of common symptoms also includes loss of interest or pleasure in hobbies and activities.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Depression",
         "url": "https://www.nimh.nih.gov/health/publications/depression",
         "kind": "summary"
        }
       },
       {
        "name": "Social anxiety disorder",
        "why": "NIMH describes social anxiety disorder as anxiety or fear in situations where a person may be closely watched by others, such as speaking in public or meeting new people. It says people may avoid such places or events, speak with an overly soft voice, or find it hard to talk to people in social situations, even when they want to.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Social Anxiety Disorder: What You Need to Know",
         "url": "https://www.nimh.nih.gov/health/publications/social-anxiety-disorder-more-than-just-shyness",
         "kind": "summary"
        }
       },
       {
        "name": "Obsessive-compulsive disorder (OCD)",
        "why": "NIMH describes obsessive-compulsive disorder as uncontrollable, recurring thoughts, repetitive behaviors, or both, that take up time and can get in the way of daily life. Among common examples, it lists a desire to have things symmetrical or in perfect order, and ordering or arranging items in a particular, precise way.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Obsessive-Compulsive Disorder: When Unwanted Thoughts or Repetitive Behaviors Take Over",
         "url": "https://www.nimh.nih.gov/health/publications/obsessive-compulsive-disorder-when-unwanted-thoughts-or-repetitive-behaviors-take-over",
         "kind": "summary"
        }
       },
       {
        "name": "Autism spectrum disorder (ASD)",
        "why": "NIMH describes autism spectrum disorder as affecting how people interact with others, communicate, learn, and behave. It lists difficulties with the back and forth of conversation, becoming upset by slight changes in a routine, and being more or less sensitive than other people to light, sound, clothing, or temperature.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Autism Spectrum Disorder",
         "url": "https://www.nimh.nih.gov/health/publications/autism-spectrum-disorder",
         "kind": "summary"
        }
       }
      ],
      "windows": [
       "uspcp",
       "ushc",
       "usfindtx",
       "usjan",
       "usvr"
      ],
      "crisis": []
     },
     "reading": {
      "label": "Trouble with reading, writing, or calculating",
      "lead": "For when reading, writing, or working with numbers is hard even with effort.",
      "scenes": [
       "It takes me longer than most people to read a text, and I end up rereading it many times.",
       "Even after reading, the content does not sink in, and I struggle to grasp what documents or letters mean.",
       "I have trouble spelling words correctly, and I often make writing mistakes or leave things out.",
       "My handwriting comes out uneven, and writing takes a lot of time and effort.",
       "I get stuck on simple calculations and on math problems given in sentences.",
       "I can talk and listen without trouble, but when it comes to reading, writing, or calculating, things do not move along as I want, even with plenty of time."
      ],
      "asks": [
       "Please show text in large print with wide line spacing, in a font that is easy to read.",
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
        "name": "Vision problems (difficulty seeing)",
        "why": "NIA's page on aging and the eyes says that, as people age, they may lose the ability to see up close, and that eye conditions such as age-related macular degeneration can harm the vision needed for common things like reading. It advises having the eyes checked regularly by an eye care professional.",
        "src": {
         "org": "National Institute on Aging (NIA)",
         "title": "Aging and Your Eyes",
         "url": "https://www.nia.nih.gov/health/vision-and-vision-loss/aging-and-your-eyes",
         "kind": "summary"
        }
       },
       {
        "name": "Sleep deficiency (not enough sleep or poor-quality sleep)",
        "why": "“Sleep deficiency can cause problems with learning, focusing, and reacting.”",
        "src": {
         "org": "National Heart, Lung, and Blood Institute (NHLBI)",
         "title": "Sleep Deprivation and Deficiency - How Sleep Affects Your Health",
         "url": "https://www.nhlbi.nih.gov/health/sleep-deprivation/health-effects",
         "kind": "quote"
        }
       },
       {
        "name": "Depression",
        "why": "NIMH lists difficulty concentrating, remembering, or making decisions, and loss of interest or pleasure in hobbies and activities, among the common symptoms of depression. It says depression can affect how a person feels, thinks, and handles daily activities.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Depression",
         "url": "https://www.nimh.nih.gov/health/publications/depression",
         "kind": "summary"
        }
       },
       {
        "name": "Learning disability (for example, dyslexia)",
        "why": "The NINDS glossary describes learning disabilities as disorders that affect a person's ability to understand or use spoken or written language, do mathematical calculations, coordinate movements, or direct attention. It also describes dyslexia as a learning disorder that includes difficulty reading, and dysgraphia as challenges related to writing.",
        "src": {
         "org": "National Institute of Neurological Disorders and Stroke (NINDS)",
         "title": "Glossary of Neurological Terms",
         "url": "https://www.ninds.nih.gov/health-information/disorders/glossary-neurological-terms",
         "kind": "summary"
        }
       },
       {
        "name": "Attention-deficit/hyperactivity disorder (ADHD)",
        "why": "NIMH describes ADHD as a lasting pattern of inattention and/or hyperactivity and impulsivity that makes it hard to function in more than one area of life, such as at home, school, or work. For adults, it lists trouble following instructions or finishing projects among the problems these symptoms can lead to. It also says that when ADHD is looked into in adults, a provider may look at memory, planning, and thinking to understand a person's strengths and challenges, and whether learning disabilities are also present.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "ADHD in Adults: 4 Things to Know",
         "url": "https://www.nimh.nih.gov/health/publications/adhd-what-you-need-to-know",
         "kind": "summary"
        }
       }
      ],
      "windows": [
       "uspcp",
       "usjan",
       "usvr",
       "ushc",
       "usada"
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
        "name": "Hyperthyroidism (overactive thyroid)",
        "why": "NIDDK explains that in hyperthyroidism the thyroid gland makes more thyroid hormone than the body needs, so many of the body's functions speed up. It lists nervousness, irritability, and trouble sleeping among its symptoms, along with a rapid or irregular heartbeat and shaky hands, and names Graves' disease as the most common cause.",
        "src": {
         "org": "National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)",
         "title": "Hyperthyroidism (Overactive Thyroid)",
         "url": "https://www.niddk.nih.gov/health-information/endocrine-diseases/hyperthyroidism",
         "kind": "summary"
        }
       },
       {
        "name": "Sleep deficiency (not enough sleep or poor-quality sleep)",
        "why": "“Sleep deficiency also can make you feel frustrated, cranky, or worried in social situations.”",
        "src": {
         "org": "National Heart, Lung, and Blood Institute (NHLBI)",
         "title": "Sleep Deprivation and Deficiency - What Are Sleep Deprivation and Deficiency?",
         "url": "https://www.nhlbi.nih.gov/health/sleep-deprivation",
         "kind": "quote"
        }
       },
       {
        "name": "Effects of medicines or drugs",
        "why": "NIMH's page on bipolar disorder says that the effects of some prescribed medicines, and of recreational or illicit drugs, can sometimes mimic or worsen mood symptoms. The same page advises not to stop a medicine without talking with a health care provider first.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Bipolar Disorder",
         "url": "https://www.nimh.nih.gov/health/publications/bipolar-disorder",
         "kind": "summary"
        }
       },
       {
        "name": "Effects of alcohol",
        "why": "NIAAA explains that alcohol interferes with the brain's communication pathways, and that these disruptions can change mood and behavior and make it harder to think clearly.",
        "src": {
         "org": "National Institute on Alcohol Abuse and Alcoholism (NIAAA)",
         "title": "Alcohol's Effects on the Body",
         "url": "https://www.niaaa.nih.gov/alcohols-effects-health/alcohols-effects-body",
         "kind": "summary"
        }
       },
       {
        "name": "Premenstrual dysphoric disorder (PMDD)",
        "why": "This page describes PMDD as a condition similar to PMS that happens before a period starts, with more severe symptoms, including depression, irritability, and tension. It lists mood swings and lasting irritability or anger among its symptoms, and says that keeping a calendar or diary of symptoms helps the doctor.",
        "src": {
         "org": "Office on Women's Health, U.S. Department of Health and Human Services",
         "title": "Premenstrual dysphoric disorder (PMDD)",
         "url": "https://womenshealth.gov/menstrual-cycle/premenstrual-syndrome/premenstrual-dysphoric-disorder-pmdd",
         "kind": "summary"
        }
       },
       {
        "name": "Depression",
        "why": "NIMH explains that everyone feels sad or low sometimes, but depression is different: it can affect how a person feels, thinks, and handles daily activities. The same page notes that bipolar disorder involves low (depressive) episodes as well as episodes of unusually elevated mood, greater irritability, or increased activity.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Depression",
         "url": "https://www.nimh.nih.gov/health/publications/depression",
         "kind": "summary"
        }
       },
       {
        "name": "Bipolar disorder",
        "why": "NIMH says everyone experiences ups and downs, but with bipolar disorder the range of mood changes can be extreme: periods of unusually elevated or irritable mood with a marked increase in activity, and periods of feeling sad or hopeless with very low activity. It also says a person may feel very good and productive during a milder high period, while family and friends may notice the mood swings as unusual.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Bipolar Disorder",
         "url": "https://www.nimh.nih.gov/health/publications/bipolar-disorder",
         "kind": "summary"
        }
       },
       {
        "name": "Attention-deficit/hyperactivity disorder (ADHD)",
        "why": "NIMH describes ADHD as a lasting pattern of inattention and/or hyperactivity and impulsivity. For adults, it lists acting without thinking or having trouble with self-control, feelings of restlessness, and choosing immediate rewards over future rewards or consequences. It also says ADHD often occurs together with other mental disorders.",
        "src": {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "ADHD in Adults: 4 Things to Know",
         "url": "https://www.nimh.nih.gov/health/publications/adhd-what-you-need-to-know",
         "kind": "summary"
        }
       }
      ],
      "windows": [
       "uspcp",
       "usfindtx",
       "ushc",
       "ussamhsa"
      ],
      "crisis": []
     }
    },
    "common": {
     "learn": [
      {
       "h": "Knowing a name can make ordinary ups and downs look like symptoms",
       "body": "Once you learn the name of a condition, ordinary tiredness or spacing out can start to look like a symptom. Feelings can change how your body and mood feel, and that is not just imagination; it does happen. Lack of sleep, stress, phone use, and what is going on around you can cause similar things too. Even if you see a name and think \"this might be me,\" try not to settle on it right away, and think about other reasons too. If the hard times continue, you are welcome to ask for help just as you are, even without a name.",
       "srcs": []
      },
      {
       "h": "Mood swings and the urge to double-check are things everyone experiences",
       "body": "Mood swings and the urge to check things just in case are things everyone experiences. Many people also have trouble paying attention or feel restless some of the time. But a name (a diagnosis) is given by a health professional who looks at the difficulties together with how strong and how frequent they are, how long they have continued, and how much they get in the way of daily life. With attention difficulties, whether they show up in several settings, such as home, school, and work, is also considered. For names related to development, such as ADHD, how things were from early on, for example in old school reports, can also be an important clue. A professional may also check whether something else, such as a physical health condition or a medicine, is causing similar changes. If the difficulties continue, you are welcome to ask for help as they are, whatever the name.",
       "srcs": [
        {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Bipolar Disorder",
         "url": "https://www.nimh.nih.gov/health/publications/bipolar-disorder",
         "kind": "summary"
        },
        {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Obsessive-Compulsive Disorder: When Unwanted Thoughts or Repetitive Behaviors Take Over",
         "url": "https://www.nimh.nih.gov/health/publications/obsessive-compulsive-disorder-when-unwanted-thoughts-or-repetitive-behaviors-take-over",
         "kind": "summary"
        },
        {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "ADHD in Adults: 4 Things to Know",
         "url": "https://www.nimh.nih.gov/health/publications/adhd-what-you-need-to-know",
         "kind": "summary"
        },
        {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Depression",
         "url": "https://www.nimh.nih.gov/health/publications/depression",
         "kind": "summary"
        }
       ]
      },
      {
       "h": "You can ask for help even without a diagnosis",
       "body": "Even without a diagnosis, you can talk about what you are going through. NIMH writes that if you are struggling emotionally or have concerns about your mental health, there are ways to get help, and suggests bringing up those concerns with a primary care provider. When you ask for changes at work or where you live, you do not need legal words such as \"reasonable accommodation.\" You can say in plain words what is hard for you and what you would like changed. In housing, a family member or someone else can also ask for you. If you want the change handled as a disability accommodation under the law, also say that it is because of a health or medical condition. You can start the request without giving the name of the condition. The Americans with Disabilities Act (ADA) is a law, not a benefit program, so you do not need to apply to be covered. What can be done differs by situation and is worked out by talking it through with the other side.",
       "srcs": [
        {
         "org": "National Institute of Mental Health (NIMH)",
         "title": "Help for Mental Illnesses",
         "url": "https://www.nimh.nih.gov/health/find-help",
         "kind": "summary"
        },
        {
         "org": "U.S. Equal Employment Opportunity Commission (EEOC)",
         "title": "Enforcement Guidance on Reasonable Accommodation and Undue Hardship under the ADA",
         "url": "https://www.eeoc.gov/laws/guidance/enforcement-guidance-reasonable-accommodation-and-undue-hardship-under-ada",
         "kind": "fact"
        },
        {
         "org": "U.S. Equal Employment Opportunity Commission (EEOC)",
         "title": "Depression, PTSD, & Other Mental Health Conditions in the Workplace: Your Legal Rights",
         "url": "https://www.eeoc.gov/laws/guidance/depression-ptsd-other-mental-health-conditions-workplace-your-legal-rights",
         "kind": "fact"
        },
        {
         "org": "U.S. Department of Justice",
         "title": "Joint Statement of the Department of Housing and Urban Development and the Department of Justice: Reasonable Accommodations under the Fair Housing Act",
         "url": "https://www.justice.gov/crt/us-department-housing-and-urban-development",
         "kind": "summary"
        },
        {
         "org": "U.S. Department of Justice, ADA.gov",
         "title": "Introduction to the Americans with Disabilities Act",
         "url": "https://www.ada.gov/topics/intro-to-ada/",
         "kind": "summary"
        }
       ]
      },
      {
       "h": "However, some systems may ask for papers from a health professional",
       "body": "At work or in housing, if your condition or what you need is not obvious, you may be asked for documentation. Even then, what can be asked for is generally limited to what is needed, and complete medical records are usually not required. At work, if you do not want to share the specific name of your condition, documentation that describes it more generally may be enough. At college, you need to tell the school yourself, and the school will usually ask for documentation, which may include a diagnosis. Social Security disability benefits require medical evidence from an acceptable medical source, and for FMLA leave, an employer may ask for information from your health care provider before approving it. What is needed differs by system and situation, so ask the office before you start.",
       "srcs": [
        {
         "org": "U.S. Equal Employment Opportunity Commission (EEOC)",
         "title": "Enforcement Guidance on Reasonable Accommodation and Undue Hardship under the ADA",
         "url": "https://www.eeoc.gov/laws/guidance/enforcement-guidance-reasonable-accommodation-and-undue-hardship-under-ada",
         "kind": "fact"
        },
        {
         "org": "U.S. Equal Employment Opportunity Commission (EEOC)",
         "title": "Depression, PTSD, & Other Mental Health Conditions in the Workplace: Your Legal Rights",
         "url": "https://www.eeoc.gov/laws/guidance/depression-ptsd-other-mental-health-conditions-workplace-your-legal-rights",
         "kind": "fact"
        },
        {
         "org": "U.S. Department of Justice",
         "title": "Joint Statement of the Department of Housing and Urban Development and the Department of Justice: Reasonable Accommodations under the Fair Housing Act",
         "url": "https://www.justice.gov/crt/us-department-housing-and-urban-development",
         "kind": "summary"
        },
        {
         "org": "U.S. Department of Education",
         "title": "Students with Disabilities Preparing for Postsecondary Education",
         "url": "https://www.ed.gov/higher-education/students-disabilities-preparing-postsecondary-education",
         "kind": "summary"
        },
        {
         "org": "Social Security Administration",
         "title": "Disability Evaluation Under Social Security: Part II - Evidentiary Requirements",
         "url": "https://www.ssa.gov/disability/professionals/bluebook/evidentiary.htm",
         "kind": "summary"
        },
        {
         "org": "U.S. Department of Labor",
         "title": "Fact Sheet #28: The Family and Medical Leave Act",
         "url": "https://www.dol.gov/agencies/whd/fact-sheets/28-fmla",
         "kind": "summary"
        }
       ]
      },
      {
       "key": "notTool",
       "h": "A name for a condition is not a tool for standing above anyone",
       "body": "A name for a condition is not a tool for standing above someone or looking down on anyone.\nSome people feel relieved when they learn a name for what they are going through. That is important.\nWanting the people around you to understand you, or to be kind to you, is natural too.\n\nWhen you want someone to be kind to you, you can ask for that directly, without having to give the name of a condition.\nIt is easier to get across if you say two things together: what you are struggling with, and what you would like the other person to do.\n\nFor example, you could say:\n\"I am tired today, so please speak slowly.\"\n\"I get lost when I am told many things at once, so please tell me one thing at a time.\"\n\"I find it hard to remember things I only hear, so please write important things down, on paper or in an email.\"\n\"Crowded places are hard for me, so I would like to talk somewhere quiet.\"\n\"It takes me a while to answer, so please wait a little.\"\n\"I am overwhelmed right now, so please just listen first. Advice can come later.\"\n\"I am not feeling well today, so please let me rest for a while.\"\n\"Sudden changes of plan throw me off, so please let me know as early as you can.\"\n\"When people speak to me loudly, I get scared, so please speak calmly.\"\n\nIf it is hard to say it well, you are welcome to write it on paper and hand it over. You can also use \"Show it large\" to show the \"My worries\" card, which appears in this app after you choose a worry and answer the questions.\nIf you want to tell someone the name of your condition, you are welcome to. When you do, also saying what you are struggling with and what you would like them to do makes it easier for them to help.\nSometimes the other person cannot do what you ask because of their own situation. When that happens, try talking together about whether there is another way.\n\nPlease do not use the list of names in this app as a reason to doubt the people around you.\n\nAt work, in housing, or at school, if you want this handled as a formal accommodation under the law, say that it is because of a health condition. You may be asked for documentation.",
       "srcs": [
        {
         "org": "U.S. Equal Employment Opportunity Commission (EEOC)",
         "title": "Depression, PTSD, & Other Mental Health Conditions in the Workplace: Your Legal Rights",
         "url": "https://www.eeoc.gov/laws/guidance/depression-ptsd-other-mental-health-conditions-workplace-your-legal-rights",
         "kind": "fact"
        },
        {
         "org": "U.S. Department of Justice",
         "title": "Joint Statement of the Department of Housing and Urban Development and the Department of Justice: Reasonable Accommodations under the Fair Housing Act",
         "url": "https://www.justice.gov/crt/us-department-housing-and-urban-development",
         "kind": "summary"
        },
        {
         "org": "U.S. Department of Education",
         "title": "Students with Disabilities Preparing for Postsecondary Education",
         "url": "https://www.ed.gov/higher-education/students-disabilities-preparing-postsecondary-education",
         "kind": "summary"
        }
       ]
      },
      {
       "h": "About this app",
       "body": "This is not a diagnosis. This list cannot tell you whether you have any condition. This app is not a medical device. SOYOGI is an independent non-profit group based in Japan. This app is not affiliated with, and is not endorsed by, the U.S. Government or any of its agencies (including NIH, NIMH, CDC, SAMHSA, and HHS), the 988 Suicide & Crisis Lifeline, or any medical institution. References to these organizations show where information came from and do not imply their endorsement of SOYOGI or this app. SOYOGI wrote this content in its own words based on U.S. federal government pages, with some short quotations. Text adapted, quoted, or translated from U.S. Government sources is not claimed by SOYOGI and is available on those agencies' websites at no charge. Sources are shown with each item.\n\nNotices required for adapted or translated material:\nThe National Institute on Alcohol Abuse and Alcoholism (NIAAA) does not endorse this translation and no endorsement by NIAAA should be inferred.\nAdapted from the National Institute on Aging, National Institutes of Health.\nTranslated by SOYOGI from material by the National Institute on Aging, National Institutes of Health.\n\nThe check date is 2026-10-17, and numbers and hours may change. Whether to reach out is decided by you, not by the app.",
       "srcs": []
      }
     ],
     "meyasuGeneral": {
      "text": "“If you have concerns about your mental health, talk to a primary care provider.”",
      "src": {
       "org": "National Institute of Mental Health (NIMH)",
       "title": "Caring for Your Mental Health",
       "url": "https://www.nimh.nih.gov/health/topics/caring-for-your-mental-health",
       "kind": "quote"
      }
     },
     "devGeneral": [
      {
       "text": "“If you or someone you know has a mental illness, is struggling emotionally, or has concerns about their mental health, there are ways to get help.”",
       "src": {
        "org": "National Institute of Mental Health (NIMH)",
        "title": "Help for Mental Illnesses",
        "url": "https://www.nimh.nih.gov/health/find-help",
        "kind": "quote"
       }
      },
      {
       "text": "“If you have an appointment with a primary care provider, consider bringing up your mental health concerns and asking for help.”",
       "src": {
        "org": "National Institute of Mental Health (NIMH)",
        "title": "Help for Mental Illnesses",
        "url": "https://www.nimh.nih.gov/health/find-help",
        "kind": "quote"
       }
      }
     ],
     "namesHow": {
      "lead": "NIMH's page on depression says this about what a provider may ask during a visit:",
      "text": "“During the visit, the provider may ask when your symptoms began, how long they have lasted, how often they occur, and if they keep you from going out or doing your usual activities.”",
      "src": {
       "org": "National Institute of Mental Health (NIMH)",
       "title": "Depression",
       "url": "https://www.nimh.nih.gov/health/publications/depression",
       "kind": "quote"
      }
     }
    }
   }
  },
  "fr": {
   "id": "fr",
   "name": {
    "ja": "フランス",
    "en": "France",
    "fr": "France"
   },
   "langs": [
    "fr"
   ],
   "main": "fr",
   "fallback": "fr",
   "srcLang": "fr",
   "freeHosts": [
    "service-public.gouv.fr",
    "info.gouv.fr",
    "sante.gouv.fr",
    "handicap.gouv.fr",
    "has-sante.fr",
    "psycom.org",
    "santepubliquefrance.fr",
    "sante.fr",
    "ameli.fr"
   ],
   "adaptHosts": [
    "service-public.gouv.fr",
    "info.gouv.fr",
    "monparcourshandicap.gouv.fr"
   ],
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
    "junbi": ""
   },
   "windows": [
    {
     "id": "fr3114",
     "band": "now",
     "tel": "3114",
     "tel2": "",
     "url": "https://3114.fr/",
     "linkOk": false,
     "fr": {
      "name": "3114 (numéro national de prévention du suicide)",
      "desc": "Un professionnel vous écoute. Il vous pose quelques questions pour bien comprendre ce dont vous avez besoin. Les appels sont confidentiels. Il peut vous demander votre nom et vos coordonnées. Vous pouvez aussi appeler si vous vous inquiétez pour quelqu’un. Si vous préférez ne pas donner votre nom, SOS Amitié et Suicide Écoute, plus bas dans cette liste, sont anonymes.",
      "hours": "24 h/24, 7 j/7. Appel gratuit partout en France.",
      "src": {
       "org": "Numéro national de prévention du suicide (3114)",
       "title": "Confidentialité et gratuité",
       "url": "https://3114.fr/confidentialite-et-gratuite/",
       "kind": "fact",
       "upd": "none"
      }
     },
     "src": {
      "org": "Numéro national de prévention du suicide (3114)",
      "title": "Confidentialité et gratuité",
      "url": "https://3114.fr/confidentialite-et-gratuite/",
      "kind": "fact",
      "upd": "none"
     }
    },
    {
     "id": "fr15112",
     "band": "now",
     "tel": "15",
     "tel2": "112",
     "url": "",
     "linkOk": false,
     "fr": {
      "name": "15 (Samu) · 112",
      "desc": "Si une vie est en danger immédiat, appelez le 15 (Samu) ou le 112. Ces appels sont gratuits et n’apparaissent pas sur les factures. Si vous pouvez vous déplacer, vous pouvez aussi aller aux urgences de l’hôpital le plus proche. Les services d’urgence rappellent depuis le 0 800 112 112.",
      "hours": "24 h/24, 7 j/7.",
      "src": {
       "org": "Service Public (service-public.gouv.fr)",
       "title": "Quels sont les numéros en cas d'urgence (Samu, pompiers...) et les numéros d'écoute ?",
       "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/F33954",
       "kind": "summary",
       "upd": "2026-08-25"
      }
     },
     "src": {
      "org": "Service Public (service-public.gouv.fr)",
      "title": "Quels sont les numéros en cas d'urgence (Samu, pompiers...) et les numéros d'écoute ?",
      "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/F33954",
      "kind": "summary",
      "upd": "2026-08-25"
     }
    },
    {
     "id": "frsosamitie",
     "band": "now",
     "tel": "09 72 39 40 50",
     "tel2": "01 46 21 46 46",
     "url": "",
     "linkOk": false,
     "fr": {
      "name": "SOS Amitié",
      "desc": "Des bénévoles formés écoutent les personnes en détresse et leur entourage. Vous n’avez pas à dire votre nom. Service gratuit. Le deuxième numéro (01 46 21 46 46) est une ligne en anglais (SOS Help), tous les jours de 15 h à 23 h.",
      "hours": "24 h/24, 7 j/7.",
      "src": {
       "org": "© Psycom",
       "title": "Les lignes d’écoute",
       "url": "https://www.psycom.org/sorienter/les-lignes-decoute/",
       "kind": "fact",
       "upd": "2026-09-15"
      }
     },
     "src": {
      "org": "© Psycom",
      "title": "Les lignes d’écoute",
      "url": "https://www.psycom.org/sorienter/les-lignes-decoute/",
      "kind": "fact",
      "upd": "2026-09-15"
     }
    },
    {
     "id": "frsuicideecoute",
     "band": "now",
     "tel": "01 45 39 40 00",
     "tel2": "",
     "url": "",
     "linkOk": false,
     "fr": {
      "name": "Suicide Écoute",
      "desc": "Une autre ligne où vous n’avez pas à dire votre nom. Des bénévoles formés écoutent les personnes en grande souffrance psychologique ou confrontées au suicide, et leur entourage. Service gratuit. Si une ligne est occupée, vous pouvez patienter ou en essayer une autre.",
      "hours": "24 h/24, 7 j/7.",
      "src": {
       "org": "© Psycom",
       "title": "Les lignes d’écoute",
       "url": "https://www.psycom.org/sorienter/les-lignes-decoute/",
       "kind": "fact",
       "upd": "2026-09-15"
      }
     },
     "src": {
      "org": "© Psycom",
      "title": "Les lignes d’écoute",
      "url": "https://www.psycom.org/sorienter/les-lignes-decoute/",
      "kind": "fact",
      "upd": "2026-09-15"
     }
    },
    {
     "id": "fr114",
     "band": "now",
     "tel": "",
     "tel2": "",
     "url": "",
     "linkOk": false,
     "sms": "114",
     "fr": {
      "name": "114 (SMS, visio, langue des signes)",
      "desc": "Pour les personnes sourdes, malentendantes ou qui ont du mal à parler, et quand vous ne pouvez pas parler : envoyez un SMS au 114. Le 114 est aussi accessible par visio, tchat et langue des signes française (LSF). Il demande votre nom, votre adresse précise et le motif de l’appel.",
      "hours": "24 h/24, 7 j/7. Gratuit.",
      "src": {
       "org": "Service Public (service-public.gouv.fr)",
       "title": "Quels sont les numéros en cas d'urgence (Samu, pompiers...) et les numéros d'écoute ?",
       "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/F33954",
       "kind": "summary",
       "upd": "2026-08-25"
      }
     },
     "src": {
      "org": "Service Public (service-public.gouv.fr)",
      "title": "Quels sont les numéros en cas d'urgence (Samu, pompiers...) et les numéros d'écoute ?",
      "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/F33954",
      "kind": "summary",
      "upd": "2026-08-25"
     }
    },
    {
     "id": "fr3919",
     "band": "now",
     "tel": "3919",
     "tel2": "",
     "url": "",
     "linkOk": false,
     "fr": {
      "name": "3919 (Violences Femmes Info)",
      "desc": "Écoute, information et orientation pour les femmes victimes de violences et pour les personnes témoins de ces violences. Appel anonyme, qui n’apparaît pas sur les factures de téléphone. En cas d’urgence, appelez le 17 ou le 112.",
      "hours": "24 h/24, 7 j/7. Gratuit.",
      "src": {
       "org": "Service Public (service-public.gouv.fr)",
       "title": "Quels sont les numéros en cas d'urgence (Samu, pompiers...) et les numéros d'écoute ?",
       "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/F33954",
       "kind": "summary",
       "upd": "2026-08-25"
      }
     },
     "src": {
      "org": "Service Public (service-public.gouv.fr)",
      "title": "Quels sont les numéros en cas d'urgence (Samu, pompiers...) et les numéros d'écoute ?",
      "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/F33954",
      "kind": "summary",
      "upd": "2026-08-25"
     }
    },
    {
     "id": "fr115",
     "band": "now",
     "tel": "115",
     "tel2": "",
     "url": "",
     "linkOk": false,
     "fr": {
      "name": "115 (Samu social)",
      "desc": "Pour trouver un endroit où dormir ce soir : le 115 est le numéro d’urgence et d’accueil des personnes sans abri. L’appel n’apparaît pas sur les factures.",
      "hours": "24 h/24, 7 j/7. Gratuit, en métropole et en outre-mer.",
      "src": {
       "org": "Service Public (service-public.gouv.fr)",
       "title": "Quels sont les numéros en cas d'urgence (Samu, pompiers...) et les numéros d'écoute ?",
       "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/F33954",
       "kind": "summary",
       "upd": "2026-08-25"
      }
     },
     "src": {
      "org": "Service Public (service-public.gouv.fr)",
      "title": "Quels sont les numéros en cas d'urgence (Samu, pompiers...) et les numéros d'écoute ?",
      "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/F33954",
      "kind": "summary",
      "upd": "2026-08-25"
     }
    },
    {
     "id": "frmt",
     "band": "day",
     "tel": "",
     "tel2": "",
     "url": "",
     "linkOk": false,
     "fr": {
      "name": "Votre médecin traitant",
      "desc": "C’est votre premier interlocuteur pour votre santé : il vous oriente vers un spécialiste en cas de besoin. Vous pouvez lui montrer « Mes difficultés ». Si vous ne trouvez pas de médecin traitant, vous pouvez contacter votre caisse d’Assurance maladie.",
      "hours": "Selon le cabinet.",
      "src": {
       "org": "Service Public (service-public.gouv.fr)",
       "title": "Médecin traitant et parcours de soins coordonnés",
       "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/F163",
       "kind": "summary",
       "upd": "2026-08-21"
      }
     },
     "src": {
      "org": "Service Public (service-public.gouv.fr)",
      "title": "Médecin traitant et parcours de soins coordonnés",
      "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/F163",
      "kind": "summary",
      "upd": "2026-08-21"
     }
    },
    {
     "id": "frcmp",
     "band": "day",
     "tel": "",
     "tel2": "",
     "url": "",
     "linkOk": false,
     "fr": {
      "name": "CMP (centre médico-psychologique)",
      "desc": "Lieu public de consultation en santé mentale, qui dépend de l’endroit où vous habitez. Il accueille tout le monde, sans condition et sans avance de frais. Les délais pour un rendez-vous sont souvent assez longs. Pour savoir où aller, vous pouvez demander à votre médecin traitant ou à votre pharmacien, ou chercher sur Santé.fr.",
      "hours": "Selon le centre.",
      "src": {
       "org": "Santé publique France (Santé Mentale Info Service)",
       "title": "Où consulter ?",
       "url": "https://www.santementale-info-service.fr/trouver-de-l-aide/toutes-les-aides/ou-consulter",
       "kind": "fact",
       "upd": "none"
      }
     },
     "src": {
      "org": "Santé publique France (Santé Mentale Info Service)",
      "title": "Où consulter ?",
      "url": "https://www.santementale-info-service.fr/trouver-de-l-aide/toutes-les-aides/ou-consulter",
      "kind": "fact",
      "upd": "none"
     }
    },
    {
     "id": "frmsp",
     "band": "day",
     "tel": "",
     "tel2": "",
     "url": "",
     "linkOk": false,
     "fr": {
      "name": "Mon soutien psy",
      "desc": "Vous pouvez consulter un psychologue conventionné sans l’accord de votre médecin traitant. Une séance coûte 50 € ; l’Assurance maladie en prend en charge 60 %. La prise en charge se limite à 12 séances par année civile. La première séance permet de voir avec le psychologue si ce dispositif vous convient. Si vous pensez à disparaître ou au suicide, appelez d’abord le 3114.",
      "hours": "Selon le psychologue.",
      "src": {
       "org": "Service Public (service-public.gouv.fr)",
       "title": "Consultation d'un psychologue ou d'un psychiatre : quelle prise en charge ?",
       "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/F34917",
       "kind": "summary",
       "upd": "2026-07-03"
      }
     },
     "src": {
      "org": "Service Public (service-public.gouv.fr)",
      "title": "Consultation d'un psychologue ou d'un psychiatre : quelle prise en charge ?",
      "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/F34917",
      "kind": "summary",
      "upd": "2026-07-03"
     }
    },
    {
     "id": "frannuaire",
     "band": "day",
     "tel": "",
     "tel2": "",
     "url": "https://www.sante.fr/carte-thematique/sante-mentale",
     "linkOk": true,
     "fr": {
      "name": "Santé.fr : trouver un lieu de soins en santé mentale",
      "desc": "Une carte du site public Santé.fr pour trouver près de chez vous un lieu de soins en santé mentale (CMP, hôpital, psychologue…).",
      "hours": "Site accessible à tout moment.",
      "src": {
       "org": "Santé publique France (Santé Mentale Info Service)",
       "title": "Où consulter ?",
       "url": "https://www.santementale-info-service.fr/trouver-de-l-aide/toutes-les-aides/ou-consulter",
       "kind": "fact",
       "upd": "none"
      }
     },
     "src": {
      "org": "Santé publique France (Santé Mentale Info Service)",
      "title": "Où consulter ?",
      "url": "https://www.santementale-info-service.fr/trouver-de-l-aide/toutes-les-aides/ou-consulter",
      "kind": "fact",
      "upd": "none"
     }
    },
    {
     "id": "frpass",
     "band": "day",
     "tel": "",
     "tel2": "",
     "url": "",
     "linkOk": false,
     "fr": {
      "name": "PASS (permanence d’accès aux soins de santé)",
      "desc": "Un service de l’hôpital ouvert à toute personne malade en situation de précarité, par exemple sans couverture sociale. Il coordonne les soins (médicaux, sociaux, infirmiers) et vous accompagne dans votre parcours de santé. Renseignez-vous auprès d’un hôpital proche.",
      "hours": "Selon l’hôpital.",
      "src": {
       "org": "Santé.fr (Ministère chargé de la santé)",
       "title": "Les permanences d’accès aux soins de santé - PASS",
       "url": "https://www.sante.fr/trouver-aide-sante-mentale/les-permanences-dacces-aux-soins-de-sante-pass",
       "kind": "fact",
       "upd": "2025-04-03"
      }
     },
     "src": {
      "org": "Santé.fr (Ministère chargé de la santé)",
      "title": "Les permanences d’accès aux soins de santé - PASS",
      "url": "https://www.sante.fr/trouver-aide-sante-mentale/les-permanences-dacces-aux-soins-de-sante-pass",
      "kind": "fact",
      "upd": "2025-04-03"
     }
    },
    {
     "id": "frais",
     "band": "day",
     "tel": "0 980 980 930",
     "tel2": "",
     "url": "https://www.alcool-info-service.fr/",
     "linkOk": false,
     "fr": {
      "name": "Alcool Info Service",
      "desc": "Écoute et information sur l’alcool, pour vous ou pour un proche. Appel anonyme et non surtaxé. Tchat tous les jours de 12 h à 19 h. Service de Santé publique France.",
      "hours": "Tous les jours de 8 h à 23 h.",
      "src": {
       "org": "Alcool Info Service (Santé publique France)",
       "title": "Accueil",
       "url": "https://www.alcool-info-service.fr/",
       "kind": "fact",
       "upd": "none"
      }
     },
     "src": {
      "org": "Alcool Info Service (Santé publique France)",
      "title": "Accueil",
      "url": "https://www.alcool-info-service.fr/",
      "kind": "fact",
      "upd": "none"
     }
    },
    {
     "id": "frjis",
     "band": "day",
     "tel": "09 74 75 13 13",
     "tel2": "",
     "url": "https://www.joueurs-info-service.fr/",
     "linkOk": false,
     "fr": {
      "name": "Joueurs Info Service",
      "desc": "Écoute et information sur les jeux d’argent et de hasard (casino, paris sportifs ou hippiques, jeux de tirage ou de grattage), pour vous ou pour un proche. Appel anonyme et non surtaxé. Tchat tous les jours de 12 h à 19 h. Service de Santé publique France.",
      "hours": "Tous les jours de 8 h à 23 h.",
      "src": {
       "org": "Joueurs Info Service (Santé publique France)",
       "title": "Joueurs Info Service",
       "url": "https://www.joueurs-info-service.fr/",
       "kind": "fact",
       "upd": "none"
      }
     },
     "src": {
      "org": "Joueurs Info Service (Santé publique France)",
      "title": "Joueurs Info Service",
      "url": "https://www.joueurs-info-service.fr/",
      "kind": "fact",
      "upd": "none"
     }
    },
    {
     "id": "frdis",
     "band": "day",
     "tel": "0 800 23 13 13",
     "tel2": "",
     "url": "https://www.drogues-info-service.fr/",
     "linkOk": false,
     "fr": {
      "name": "Drogues Info Service",
      "desc": "Écoute et information sur les drogues, pour vous ou pour un proche. Appel anonyme et gratuit. Tchat tous les jours de 12 h à 19 h. Service de Santé publique France.",
      "hours": "Tous les jours de 8 h à 23 h.",
      "src": {
       "org": "Drogues Info Service (Santé publique France)",
       "title": "Drogues Info Service",
       "url": "https://www.drogues-info-service.fr/",
       "kind": "fact",
       "upd": "none"
      }
     },
     "src": {
      "org": "Drogues Info Service (Santé publique France)",
      "title": "Drogues Info Service",
      "url": "https://www.drogues-info-service.fr/",
      "kind": "fact",
      "upd": "none"
     }
    },
    {
     "id": "frtnd",
     "band": "day",
     "tel": "0800 71 40 40",
     "tel2": "",
     "url": "",
     "linkOk": false,
     "fr": {
      "name": "Autisme Info Service",
      "desc": "Pour échanger sur votre situation personnelle autour de l’autisme, avec une écoutante, par téléphone ou par e-mail.",
      "hours": "Du lundi au vendredi, de 9 h à 13 h et de 14 h à 17 h ; le mardi, aussi de 18 h à 20 h.",
      "src": {
       "org": "Maison de l’autisme",
       "title": "Qu’est-ce que la Maison de l’autisme ?",
       "url": "https://maisondelautisme.gouv.fr/presentation-maison-de-l-autisme/",
       "kind": "fact",
       "upd": "none"
      }
     },
     "src": {
      "org": "Maison de l’autisme",
      "title": "Qu’est-ce que la Maison de l’autisme ?",
      "url": "https://maisondelautisme.gouv.fr/presentation-maison-de-l-autisme/",
      "kind": "fact",
      "upd": "none"
     }
    },
    {
     "id": "frcra",
     "band": "day",
     "tel": "",
     "tel2": "",
     "url": "",
     "linkOk": false,
     "fr": {
      "name": "CRA (centre ressources autisme) de votre région",
      "desc": "Les CRA apportent information et orientation aux personnes autistes et à leurs proches. Ils interviennent surtout quand la situation demande une expertise spécialisée, par exemple un diagnostic complexe.",
      "hours": "Selon le centre.",
      "src": {
       "org": "Maison de l’autisme",
       "title": "Qu'est-ce qu'un centre de ressources autisme (CRA)",
       "url": "https://maisondelautisme.gouv.fr/accueil/centre-ressources-autisme-cra/",
       "kind": "fact",
       "upd": "none"
      }
     },
     "src": {
      "org": "Maison de l’autisme",
      "title": "Qu'est-ce qu'un centre de ressources autisme (CRA)",
      "url": "https://maisondelautisme.gouv.fr/accueil/centre-ressources-autisme-cra/",
      "kind": "fact",
      "upd": "none"
     }
    },
    {
     "id": "frmdph",
     "band": "day",
     "tel": "",
     "tel2": "",
     "url": "",
     "linkOk": false,
     "fr": {
      "name": "MDPH (maison départementale des personnes handicapées)",
      "desc": "Il existe une MDPH par département. Elle accueille, informe, accompagne et conseille les personnes handicapées et leur famille, quels que soient leur âge et leur situation. Les droits et les aides (comme la RQTH) se demandent auprès d’elle ; un certificat médical est demandé.",
      "hours": "Selon le département.",
      "src": {
       "org": "Mon Parcours Handicap",
       "title": "MDPH : missions et fonctionnement",
       "url": "https://www.monparcourshandicap.gouv.fr/aides/la-maison-departementale-des-personnes-handicapees-mdph-missions-et-fonctionnement",
       "kind": "summary",
       "upd": "2026-02-10"
      }
     },
     "src": {
      "org": "Mon Parcours Handicap",
      "title": "MDPH : missions et fonctionnement",
      "url": "https://www.monparcourshandicap.gouv.fr/aides/la-maison-departementale-des-personnes-handicapees-mdph-missions-et-fonctionnement",
      "kind": "summary",
      "upd": "2026-02-10"
     }
    }
   ],
   "fr": {
    "groups": {
     "mood": {
      "label": "Moral en baisse, manque d’envie",
      "lead": "Quand le moral reste bas et qu’il est difficile de trouver l’énergie de faire quoi que ce soit.",
      "scenes": [
       "Mon moral reste bas du matin au soir.",
       "Les choses que j’aimais avant ne me font plus plaisir.",
       "Je n’ai pas d’énergie et j’ai du mal à me concentrer, alors le travail et les tâches de la maison n’avancent pas.",
       "Je me fais des reproches et je vois tout en noir.",
       "Je n’arrive pas à dormir la nuit, ou au contraire je dors trop. J’ai perdu l’appétit et j’ai le corps lourd.",
       "J’ai parfois envie de disparaître ou de ne plus être là."
      ],
      "asks": [
       "Dites-moi les choses à faire une par une.",
       "Ne me pressez pas pour répondre ou pour décider : j’ai besoin de temps pour réfléchir.",
       "Donnez-moi les choses importantes par écrit.",
       "Avant de me dire « Courage » ou « Secoue-toi », écoutez-moi d’abord.",
       "Quand je me repose, ne concluez pas que c’est de la paresse.",
       "Aidez-moi aussi à vérifier si une maladie physique ou un médicament que je prends en ce moment joue un rôle."
      ],
      "meyasu": {
       "has": false,
       "text": "",
       "src": null
      },
      "names": [
       {
        "name": "Dépression provoquée ou aggravée par des médicaments",
        "why": "« En effet, la dépression peut parfois être provoquée - ou aggravée - par des médicaments. »",
        "src": {
         "org": "© Psycom",
         "title": "Troubles dépressifs",
         "url": "https://www.psycom.org/sinformer/la-sante-mentale/les-troubles-psy/troubles-depressifs/",
         "kind": "quote",
         "upd": "2026-09-15"
        }
       },
       {
        "name": "Anémie",
        "why": "Selon cette page, quand la fatigue vient d’un problème de santé, la cause peut être une maladie silencieuse comme l’anémie ou un problème de thyroïde. La page cite aussi, parmi ces causes, un état dépressif, certains médicaments et le manque de sommeil.",
        "src": {
         "org": "Santé.fr (Service Public d’Information en Santé)",
         "title": "Fatigue",
         "url": "https://www.sante.fr/fatigue",
         "kind": "fact",
         "upd": "2026-08-12"
        }
       },
       {
        "name": "Hypothyroïdie",
        "why": "Cette page explique que, quand la thyroïde ne produit pas assez d’hormones, beaucoup de fonctions du corps ralentissent. Elle cite parmi les effets une fatigue qui dure, une plus grande sensibilité au froid, une prise de poids, la dépression et des troubles de la mémoire.",
        "src": {
         "org": "Santé.fr (Service Public d’Information en Santé)",
         "title": "Hypothyroïdie",
         "url": "https://www.sante.fr/hypothyroidie",
         "kind": "fact",
         "upd": "2026-08-13"
        }
       },
       {
        "name": "Insomnie et autres troubles du sommeil",
        "why": "« Le problème de sommeil peut être la conséquence d’un trouble psychique, par exemple un trouble anxieux généralisé, un trouble de stress post-traumatique, un trouble bipolaire, une dépression. »",
        "src": {
         "org": "© Psycom",
         "title": "Quand le sommeil s'en mêle",
         "url": "https://www.psycom.org/sinformer/la-sante-mentale/quand-le-sommeil-sen-mele/",
         "kind": "quote",
         "upd": "2026-09-16"
        }
       },
       {
        "name": "Effets de l’alcool (dont la dépendance à l’alcool)",
        "why": "Cette page explique que la consommation d’alcool peut entraîner une perte de contrôle progressive, jusqu’à la dépendance. Elle indique que ces conduites touchent aussi la santé mentale, par exemple avec de l’anxiété, de la dépression, de l’isolement et une perte d’estime de soi.",
        "src": {
         "org": "Service d’information du Gouvernement (info.gouv.fr)",
         "title": "Les différents troubles",
         "url": "https://www.info.gouv.fr/grand-dossier/parlons-sante-mentale/les-differents-troubles",
         "kind": "summary",
         "upd": "2026-02-27"
        }
       },
       {
        "name": "Dépression",
        "why": "Cette page décrit la dépression comme un état de détresse profonde qui dure, différent d’une déprime passagère : tristesse permanente, perte de motivation, plus d’envie pour les activités qui plaisaient avant, difficultés de concentration. Elle cite aussi des changements du sommeil et de l’appétit, une fatigue constante, et des formes où la dépression se montre surtout par des douleurs ou d’autres troubles du corps.",
        "src": {
         "org": "Santé.fr (Service Public d’Information en Santé)",
         "title": "Dépression de l'adulte",
         "url": "https://www.sante.fr/depression-de-ladulte",
         "kind": "fact",
         "upd": "2026-08-12"
        }
       },
       {
        "name": "Trouble bipolaire",
        "why": "Cette page décrit le trouble bipolaire comme une alternance de périodes de dépression et de périodes d’énergie et d’excitation très fortes, avec un besoin de sommeil réduit. Elle indique qu’il peut passer inaperçu longtemps, surtout quand les périodes de dépression dominent, et qu’il est parfois confondu avec d’autres troubles.",
        "src": {
         "org": "Service d’information du Gouvernement (info.gouv.fr)",
         "title": "Les différents troubles",
         "url": "https://www.info.gouv.fr/grand-dossier/parlons-sante-mentale/les-differents-troubles",
         "kind": "summary",
         "upd": "2026-02-27"
        }
       }
      ],
      "windows": [
       "frmt",
       "frcmp",
       "frmsp",
       "frannuaire",
       "frpass"
      ],
      "crisis": [
       5
      ]
     },
     "anxiety": {
      "label": "Forte anxiété ou tension",
      "lead": "Des inquiétudes qui ne s’arrêtent pas, le cœur qui bat fort et l’agitation, des difficultés devant les autres ou pour sortir, et d’autres situations semblables.",
      "scenes": [
       "Quand je dois parler devant d’autres personnes ou que les regards se tournent vers moi, l’anxiété est si forte que j’ai la tête vide.",
       "Mon cœur se met soudain à battre très fort et j’ai du mal à respirer. J’ai peur que cela recommence, alors j’ai du mal à sortir.",
       "Même sans raison claire, je m’inquiète pour une chose, puis pour une autre, je n’arrive pas à rester en place et cela m’épuise.",
       "J’ai du mal avec les endroits d’où il est difficile de partir, comme le métro, le bus, le RER ou les bâtiments pleins de monde, et avec les sorties sans personne pour m’accompagner. Alors je les évite.",
       "À force d’éviter ce qui m’angoisse, je vais dans moins d’endroits et je vois moins de monde : ma vie s’est rétrécie.",
       "Mes inquiétudes ne me sortent pas de la tête et j’ai du mal à m’endormir le soir."
      ],
      "asks": [
       "Quand je parle, attendez-moi sans me presser.",
       "Dites-moi à l’avance le programme et la façon dont les choses vont se passer.",
       "Ne me demandez pas mon avis tout à coup devant les autres, et laissez-moi aussi choisir de répondre par écrit.",
       "Si je me sens mal, laissez-moi m’éloigner un moment pour me reposer.",
       "Je préfère parler dans un endroit calme, avec peu de personnes.",
       "Ne me dites pas seulement que je m’en fais trop : écoutez d’abord ce qui est difficile pour moi."
      ],
      "meyasu": {
       "has": false,
       "text": "",
       "src": null
      },
      "names": [
       {
        "name": "Hyperthyroïdie",
        "why": "Cette page explique que, quand la thyroïde produit trop d’hormones, beaucoup de fonctions du corps s’accélèrent. Elle cite parmi les effets un cœur qui bat très vite, des bouffées de chaleur, des tremblements, un amaigrissement, de l’anxiété et une fatigue qui dure.",
        "src": {
         "org": "Santé.fr (Service Public d’Information en Santé)",
         "title": "Hyperthyroïdie",
         "url": "https://www.sante.fr/hyperthyroidie",
         "kind": "fact",
         "upd": "2026-08-13"
        }
       },
       {
        "name": "Troubles du rythme cardiaque (arythmies)",
        "why": "Cette page explique que, quand on les ressent, les troubles du rythme du cœur donnent une sensation de coups dans la poitrine ou d’un cœur qui s’emballe. Quand ils sont anciens, la page cite aussi l’essoufflement à l’effort, la fatigue et l’anxiété.",
        "src": {
         "org": "Santé.fr (Service Public d’Information en Santé)",
         "title": "Troubles du rythme cardiaque",
         "url": "https://www.sante.fr/troubles-du-rythme-cardiaque",
         "kind": "fact",
         "upd": "2026-08-13"
        }
       },
       {
        "name": "Anémie",
        "why": "Cette page cite l’anémie, comme l’hyperthyroïdie, parmi les maladies qui peuvent donner des palpitations, c’est-à-dire la sensation d’un cœur qui bat très fort. Elle indique que les palpitations s’accompagnent parfois de difficultés à respirer, de vertiges ou d’angoisse.",
        "src": {
         "org": "Santé.fr (Service Public d’Information en Santé)",
         "title": "Palpitations",
         "url": "https://www.sante.fr/palpitations",
         "kind": "fact",
         "upd": "2026-08-12"
        }
       },
       {
        "name": "Effets de l’alcool, du tabac ou du café",
        "why": "Selon cette page, l’alcool, le tabac et le café jouent sur l’anxiété : arrêter l’alcool et le tabac, et boire moins de café, font reculer les symptômes anxieux.",
        "src": {
         "org": "Santé.fr (Service Public d’Information en Santé)",
         "title": "Anxiété",
         "url": "https://www.sante.fr/anxiete",
         "kind": "fact",
         "upd": "2026-08-12"
        }
       },
       {
        "name": "Insomnie",
        "why": "Cette page indique que l’anxiété et le stress sont les premières causes d’un mauvais sommeil. Elle explique aussi qu’une insomnie qui s’installe peut entraîner des troubles de l’humeur et de l’irritabilité.",
        "src": {
         "org": "Santé.fr (Service Public d’Information en Santé)",
         "title": "Insomnie",
         "url": "https://www.sante.fr/insomnie",
         "kind": "fact",
         "upd": "2026-08-12"
        }
       },
       {
        "name": "Troubles anxieux (trouble anxieux généralisé, trouble panique, phobie sociale, phobie spécifique)",
        "why": "Cette page décrit plusieurs troubles anxieux : une inquiétude constante difficile à contrôler (trouble anxieux généralisé), des attaques de panique avec la peur d’en revivre une (trouble panique), une forte anxiété face au regard des autres (phobie sociale), et des peurs liées à certaines situations comme les espaces clos ou les lieux publics (phobie spécifique). Elle indique que les situations redoutées sont parfois évitées.",
        "src": {
         "org": "Service d’information du Gouvernement (info.gouv.fr)",
         "title": "Les différents troubles",
         "url": "https://www.info.gouv.fr/grand-dossier/parlons-sante-mentale/les-differents-troubles",
         "kind": "summary",
         "upd": "2026-02-27"
        }
       },
       {
        "name": "Dépression",
        "why": "« L’hypervigilance et les inquiétudes liées au TAG nous fatiguent souvent beaucoup, ce qui peut favoriser l’apparition d’un trouble dépressif. »",
        "src": {
         "org": "© Psycom",
         "title": "Troubles anxieux et phobies",
         "url": "https://www.psycom.org/sinformer/la-sante-mentale/les-troubles-psy/troubles-anxieux-et-phobies/",
         "kind": "quote",
         "upd": "2026-09-24"
        }
       },
       {
        "name": "État de stress post-traumatique (ESPT)",
        "why": "Cette page range l’état de stress post-traumatique parmi les troubles anxieux. Elle explique qu’après un événement traumatique, des souvenirs pénibles reviennent (flash-backs, cauchemars), souvent avec des sueurs ou des palpitations, et que la personne évite d’en parler ou d’y penser.",
        "src": {
         "org": "Service d’information du Gouvernement (info.gouv.fr)",
         "title": "Les différents troubles",
         "url": "https://www.info.gouv.fr/grand-dossier/parlons-sante-mentale/les-differents-troubles",
         "kind": "summary",
         "upd": "2026-02-27"
        }
       }
      ],
      "windows": [
       "frmt",
       "frcmp",
       "frmsp",
       "frannuaire",
       "frpass"
      ],
      "crisis": []
     },
     "repeat": {
      "label": "Difficile d’arrêter de vérifier ou de répéter",
      "lead": "Quand vous vérifiez la serrure ou le gaz, vous vous lavez les mains, ou vous répétez d’autres gestes encore et encore, et qu’il est difficile d’arrêter même si vous le voulez.",
      "scenes": [
       "Quand je sors de chez moi, je dois vérifier encore et encore la serrure et le gaz avant de pouvoir partir l’esprit tranquille.",
       "Je me lave les mains ou le corps de plus en plus souvent, et je n’arrive pas à arrêter même si je le veux.",
       "La même inquiétude me revient sans cesse en tête, et je n’arrive pas à arrêter d’y penser alors que je le voudrais.",
       "Si les objets ne sont pas placés ou si les choses ne sont pas faites dans l’ordre que j’ai décidé, je me sens mal à l’aise et je finis par tout remettre en place ou par tout recommencer.",
       "Les vérifications me prennent tellement de temps que je pars en retard, ou que j’arrive en retard à mes rendez-vous ou au travail.",
       "Mon corps bouge ou des sons sortent de ma bouche sans que je le veuille, et c’est difficile à arrêter même quand j’essaie."
      ],
      "asks": [
       "Ne me dites pas seulement que je m’en fais trop : écoutez-moi d’abord.",
       "Les vérifications me prennent du temps : laissez-moi un peu de marge.",
       "Quand le programme ou la façon de faire change, prévenez-moi à l’avance.",
       "Ne me faites pas de remarques et ne vous moquez pas de moi devant les autres quand je vérifie ou que je me lave.",
       "Donnez-moi les explications et les consignes une par une, par écrit.",
       "Pour décider de la suite (consultations, soins), écoutez d’abord mes inquiétudes, et prenons le temps."
      ],
      "meyasu": {
       "has": false,
       "text": "",
       "src": null
      },
      "names": [
       {
        "name": "Trouble obsessionnel compulsif (TOC)",
        "why": "Cette page explique que, dans le TOC, des pensées angoissantes difficiles à ignorer s’imposent, et que des gestes répétés (rituels) servent à échapper à l’anxiété. Elle cite par exemple le fait de vérifier sans cesse que les serrures ou le gaz sont bien fermés, de refaire un geste de nombreuses fois ou de ranger dans un ordre précis, et précise que ces rituels peuvent prendre plusieurs heures dans la journée et gêner le quotidien.",
        "src": {
         "org": "Santé.fr (Service Public d’Information en Santé)",
         "title": "Troubles obsessionnels compulsifs (TOC)",
         "url": "https://www.sante.fr/troubles-obsessionnels-compulsifs-toc",
         "kind": "fact",
         "upd": "2026-08-12"
        }
       },
       {
        "name": "Troubles anxieux",
        "why": "Cette page range le TOC parmi les troubles anxieux. Elle décrit des gestes ou rituels répétés pour calmer l’angoisse ou des pensées envahissantes, comme se laver, vérifier, ranger ou compter.",
        "src": {
         "org": "Service d’information du Gouvernement (info.gouv.fr)",
         "title": "Les différents troubles",
         "url": "https://www.info.gouv.fr/grand-dossier/parlons-sante-mentale/les-differents-troubles",
         "kind": "summary",
         "upd": "2026-02-27"
        }
       },
       {
        "name": "Troubles du spectre de l’autisme (TSA)",
        "why": "Cette page décrit les troubles du spectre de l’autisme avec des comportements répétitifs et stricts et des intérêts restreints, à côté de difficultés dans la communication et les relations avec les autres. Elle les range parmi les troubles du neurodéveloppement.",
        "src": {
         "org": "Service d’information du Gouvernement (info.gouv.fr)",
         "title": "Les différents troubles",
         "url": "https://www.info.gouv.fr/grand-dossier/parlons-sante-mentale/les-differents-troubles",
         "kind": "summary",
         "upd": "2026-02-27"
        }
       }
      ],
      "windows": [
       "frmt",
       "frcmp",
       "frannuaire",
       "frmsp",
       "frpass"
      ],
      "crisis": []
     },
     "after": {
      "label": "Des difficultés qui durent après un événement pénible",
      "lead": "Des souvenirs qui reviennent, un sommeil difficile ou une tension qui ne retombe pas après un événement pénible.",
      "scenes": [
       "Un petit détail suffit pour que la scène et ce que j’ai ressenti à ce moment-là me reviennent d’un coup.",
       "Je fais souvent le même genre de cauchemar et, beaucoup de nuits, je n’arrive pas à dormir profondément.",
       "Je suis tout le temps sur le qui-vive, et le moindre bruit ou imprévu me fait sursauter.",
       "J’évite autant que je le peux les lieux, les personnes et les sujets qui me rappellent ce moment, et je fais de moins en moins de choses.",
       "J’ai l’impression que mes émotions se sont éteintes, et je n’arrive plus à ressentir pour ma famille et mes amis ce que je ressentais avant.",
       "Je me reproche de plus en plus de choses, ou j’ai plus de mal à faire confiance aux personnes autour de moi."
      ],
      "asks": [
       "Ne me demandez pas de raconter en détail ce qui s’est passé. J’aimerais en parler à mon rythme, en disant seulement ce que je peux.",
       "Certains bruits, lieux ou sujets me ramènent à ce moment. Quand je dis que je préfère les éviter, merci de l’accepter.",
       "Merci de ne pas m’interpeller brusquement par derrière et de ne pas faire de bruit soudain près de moi.",
       "Quand parler est trop difficile, laissez-moi vous donner quelque chose que j’ai écrit.",
       "Les jours où je n’ai pas pu dormir, ou quand la fatigue ne passe pas, ne le prenez pas pour de la paresse.",
       "Ne me pressez pas avec des phrases comme « il faut tourner la page » ou « remets-toi vite ». J’ai besoin d’un endroit sûr où parler en confiance."
      ],
      "meyasu": {
       "has": false,
       "text": "",
       "src": null
      },
      "names": [
       {
        "name": "Insomnie",
        "why": "Cette page explique que l’anxiété et le stress sont les premières causes d’un mauvais sommeil, et qu’une insomnie passagère peut être liée à un événement précis. Quand l’insomnie devient durable, elle peut entraîner des troubles de l’humeur, de l’irritabilité et une baisse de la vigilance dans la journée.",
        "src": {
         "org": "Santé.fr (Service Public d’Information en Santé)",
         "title": "Insomnie",
         "url": "https://www.sante.fr/insomnie",
         "kind": "fact",
         "upd": "2026-08-12"
        }
       },
       {
        "name": "Réaction de stress aigu",
        "why": "Selon cette page, un événement traumatisant peut provoquer un choc, appelé réaction de « stress aigu ». La page explique que, chez certaines personnes, cette période de stress se prolonge : on parle alors d’état de stress post-traumatique.",
        "src": {
         "org": "Santé.fr (Service Public d’Information en Santé)",
         "title": "Etat de stress post traumatique (ESPT)",
         "url": "https://www.sante.fr/etat-de-stress-post-traumatique-espt",
         "kind": "fact",
         "upd": "2026-08-12"
        }
       },
       {
        "name": "Trouble de stress post-traumatique (TSPT)",
        "why": "« Le traumatisme entraîne des manifestations particulières comme des cauchemars, le souvenir de l’événement qui surgit dans les pensées ou le fait de se tenir en permanence sur ses gardes. »",
        "src": {
         "org": "© Psycom",
         "title": "Trouble de stress post-traumatique",
         "url": "https://www.psycom.org/sinformer/la-sante-mentale/les-troubles-psy/trouble-de-stress-post-traumatique/",
         "kind": "quote",
         "upd": "2026-09-15"
        }
       },
       {
        "name": "Dépression",
        "why": "Selon cette page, des symptômes dépressifs apparaissent dans une partie des cas d’état de stress post-traumatique, à côté des troubles du sommeil, de l’irritabilité et des difficultés à se concentrer.",
        "src": {
         "org": "Santé.fr (Service Public d’Information en Santé)",
         "title": "Etat de stress post traumatique (ESPT)",
         "url": "https://www.sante.fr/etat-de-stress-post-traumatique-espt",
         "kind": "fact",
         "upd": "2026-08-12"
        }
       },
       {
        "name": "Phobie spécifique (phobie simple, un trouble anxieux)",
        "why": "Cette page décrit la phobie simple comme une peur excessive d’un objet ou d’une situation précise, qui peut conduire à limiter ses activités. Elle indique que les phobies simples sont souvent liées à des événements traumatisants vécus tôt dans la vie.",
        "src": {
         "org": "Santé.fr (Service Public d’Information en Santé)",
         "title": "Phobie",
         "url": "https://www.sante.fr/phobie-0",
         "kind": "fact",
         "upd": "2026-08-12"
        }
       }
      ],
      "windows": [
       "frmt",
       "frcmp",
       "frmsp",
       "frannuaire",
       "frpass"
      ],
      "crisis": []
     },
     "sleep": {
      "label": "Difficultés de sommeil",
      "lead": "Du mal à s’endormir, des réveils la nuit, du mal à se lever le matin, ou une forte envie de dormir dans la journée.",
      "scenes": [
       "Même une fois au lit, je n’arrive pas à m’endormir.",
       "Je me réveille plusieurs fois dans la nuit et je ne dors jamais d’une traite jusqu’au matin.",
       "Le matin, je n’arrive pas à me lever à l’heure, et je suis souvent en retard au travail ou en cours.",
       "Dans la journée, j’ai de fortes envies de dormir et je manque de m’endormir en réunion ou au volant.",
       "Mes proches me disent que je ronfle fort et que ma respiration semble s’arrêter pendant mon sommeil.",
       "Le soir et la nuit, j’ai des sensations désagréables dans les jambes, je ne tiens pas en place et je n’arrive pas à dormir."
      ],
      "asks": [
       "Prenez le temps de m’écouter parler de mon sommeil : l’endormissement, les réveils dans la nuit, la difficulté à me lever le matin et l’envie de dormir dans la journée.",
       "Cherchons ensemble ce qui peut jouer un rôle, y compris les médicaments que je prends et mes habitudes avec le café, l’alcool et le tabac.",
       "Ne réduisez pas cela à « une question de volonté » : regardez aussi ma santé physique et mon moral.",
       "J’ai noté mes heures de coucher et de lever sur une feuille (un agenda du sommeil). Merci de la regarder.",
       "Si un médicament m’est proposé, expliquez-moi simplement comment il agit et à quoi je dois faire attention.",
       "Le matin m’est difficile : si c’est faisable, proposez-moi un rendez-vous l’après-midi ou en fin de journée."
      ],
      "meyasu": {
       "has": false,
       "text": "",
       "src": null
      },
      "names": [
       {
        "name": "Insomnie",
        "why": "Cette page explique qu’il existe plusieurs formes d’insomnie : difficultés à s’endormir, réveils pendant la nuit ou sommeil qui ne repose pas. Elle cite parmi les facteurs en cause la lumière, les écrans utilisés tard, le sport pratiqué tard et la prise de certains médicaments.",
        "src": {
         "org": "Inserm",
         "title": "Sommeil",
         "url": "https://www.inserm.fr/dossier/sommeil/",
         "kind": "fact",
         "upd": "2024-11-08"
        }
       },
       {
        "name": "Apnée du sommeil (syndrome d’apnées-hypopnées obstructives du sommeil)",
        "why": "Selon cette page, dans l’apnée du sommeil, la respiration s’arrête ou diminue pendant quelques secondes, ce qui provoque de courts réveils dont la personne n’a pas forcément conscience. Les personnes concernées ronflent souvent fort, sont fatiguées le matin et ont de fortes envies de dormir dans la journée.",
        "src": {
         "org": "Santé.fr (Service Public d’Information en Santé)",
         "title": "Apnée du sommeil (SAOS)",
         "url": "https://www.sante.fr/apnee-du-sommeil-saos",
         "kind": "fact",
         "upd": "2026-08-12"
        }
       },
       {
        "name": "Syndrome des jambes sans repos (impatiences)",
        "why": "Cette page présente ce syndrome comme l’une des causes des troubles du sommeil : un besoin pressant de bouger les jambes, avec des fourmillements ou des picotements, surtout au repos, au lit, et plus fort le soir et la nuit.",
        "src": {
         "org": "Santé.fr (Service Public d’Information en Santé)",
         "title": "Syndrome des jambes sans repos (impatiences)",
         "url": "https://www.sante.fr/syndrome-des-jambes-sans-repos-impatiences-0",
         "kind": "fact",
         "upd": "2026-08-12"
        }
       },
       {
        "name": "Troubles du rythme circadien (horloge biologique)",
        "why": "Selon cette page, ces troubles viennent d’un dérèglement de l’horloge biologique. Par exemple, avec un retard de phase, on n’a pas sommeil avant une heure avancée de la nuit.",
        "src": {
         "org": "Inserm",
         "title": "Sommeil",
         "url": "https://www.inserm.fr/dossier/sommeil/",
         "kind": "fact",
         "upd": "2024-11-08"
        }
       },
       {
        "name": "Narcolepsie",
        "why": "Cette page décrit la narcolepsie comme un trouble du sommeil rare : de fortes envies de dormir surviennent pendant la journée, au travail ou même en conduisant, et l’endormissement peut arriver brusquement.",
        "src": {
         "org": "Santé.fr (Service Public d’Information en Santé)",
         "title": "Narcolepsie-cataplexie Hypersomnie",
         "url": "https://www.sante.fr/narcolepsie-cataplexie-hypersomnie",
         "kind": "fact",
         "upd": "2026-08-12"
        }
       },
       {
        "name": "Insomnie liée à une cause physique (douleurs, hormones, ménopause)",
        "why": "« Dans certaines insomnies, c’est le corps qui compromet la qualité du sommeil. Il existe une cause physiologique que l’on peut identifier et sur laquelle on peut ensuite intervenir, par exemple des dérèglements hormonaux, des douleurs ou encore la ménopause. »",
        "src": {
         "org": "© Psycom",
         "title": "Quand le sommeil s'en mêle",
         "url": "https://www.psycom.org/sinformer/la-sante-mentale/quand-le-sommeil-sen-mele/",
         "kind": "quote",
         "upd": "2026-09-16"
        }
       },
       {
        "name": "Excès de caféine ou d’alcool",
        "why": "Cette page cite les excès de caféine ou d’alcool parmi les problèmes qui peuvent provoquer des troubles du sommeil. Elle indique aussi que l’alcool le soir désorganise le sommeil et provoque des réveils dans la nuit.",
        "src": {
         "org": "Santé.fr (Service Public d’Information en Santé)",
         "title": "Insomnie",
         "url": "https://www.sante.fr/insomnie",
         "kind": "fact",
         "upd": "2026-08-12"
        }
       },
       {
        "name": "Dépression",
        "why": "Cette page indique qu’une insomnie peut aussi être liée à une autre maladie psychique. Elle cite la dépression, où les réveils au milieu ou à la fin de la nuit sont typiques.",
        "src": {
         "org": "Santé.fr (Service Public d’Information en Santé)",
         "title": "Insomnie",
         "url": "https://www.sante.fr/insomnie",
         "kind": "fact",
         "upd": "2026-08-12"
        }
       }
      ],
      "windows": [
       "frmt",
       "frannuaire",
       "frcmp",
       "frpass"
      ],
      "crisis": []
     },
     "eating": {
      "label": "Difficultés avec l’alimentation",
      "lead": "Quand manger est difficile : vous ne pouvez pas manger beaucoup, vous ne pouvez pas vous arrêter, ou manger vous fait peur.",
      "scenes": [
       "Je n’ai pas envie de manger, et depuis plusieurs jours la nourriture a du mal à passer.",
       "Une fois que je commence à manger, je n’arrive plus à m’arrêter, et il m’arrive de manger jusqu’à avoir mal.",
       "Sans m’en rendre compte, je ne pense plus qu’à la nourriture, et j’ai du mal à me concentrer sur autre chose.",
       "Je ne peux manger que peu d’aliments, et j’en évite beaucoup à cause de leur goût, de leur odeur ou de leur texture.",
       "Après avoir failli m’étouffer avec un aliment, ou après avoir vomi, j’ai commencé à avoir peur de manger.",
       "La nuit, il m’arrive de manger à moitié endormi(e), et le matin je ne m’en souviens pas."
      ],
      "asks": [
       "Merci de ne faire aucune remarque sur mon corps ou mon apparence.",
       "Ne me forcez pas à manger et ne me pressez pas pour que je mange.",
       "Quand on mange en groupe, laissez-moi choisir un autre endroit ou un autre moment.",
       "Demandez-moi d’abord ce que je peux manger, et quelles odeurs ou textures me sont difficiles.",
       "Expliquez-moi à l’avance comment se passent l’examen médical et les analyses.",
       "Ce qui est difficile à dire à voix haute, laissez-moi vous le donner par écrit."
      ],
      "meyasu": {
       "has": false,
       "text": "",
       "src": null
      },
      "names": [
       {
        "name": "Maladie physique (maladie chronique, problèmes de dents ou de bouche…)",
        "why": "Selon cette page, une perte d’appétit peut avoir des raisons physiques, comme les douleurs liées à une maladie chronique ou des problèmes bucco-dentaires. Elle indique aussi que la dénutrition est, le plus souvent, la conséquence d’une maladie.",
        "src": {
         "org": "Santé.fr (Assurance Maladie)",
         "title": "4e édition de la Semaine nationale de la dénutrition pour lutter contre cette maladie méconnue",
         "url": "https://www.sante.fr/4e-edition-de-la-semaine-nationale-de-la-denutrition-pour-lutter-contre-cette-maladie-meconnue",
         "kind": "fact",
         "upd": "2023-11-09"
        }
       },
       {
        "name": "Troubles des conduites alimentaires (anorexie mentale, boulimie, frénésie alimentaire)",
        "why": "« Les troubles des conduites alimentaires, ou TCA, sont également appelés troubles des comportements alimentaires. Il en existe trois : l’anorexie, la boulimie et la frénésie alimentaire, appelée auparavant hyperphagie boulimique. »",
        "src": {
         "org": "© Psycom",
         "title": "Troubles des conduites alimentaires (TCA)",
         "url": "https://www.psycom.org/sinformer/la-sante-mentale/les-troubles-psy/troubles-des-conduites-alimentaires-tca/",
         "kind": "quote",
         "upd": "2026-09-07"
        }
       },
       {
        "name": "Trouble de l’apport alimentaire évitant-restrictif (ARFID)",
        "why": "« Ils comprennent le trouble de l’apport alimentaire évitant-restrictif ou ARFID, la personne étant très sélective dans ce qu’elle mange ; le Pica, dans lequel la personne peut manger des substances non comestibles, comme de la terre ou de la craie ; le trouble de rumination-régurgitation, dans lequel la personne régurgite et remâche les aliments. »",
        "src": {
         "org": "© Psycom",
         "title": "Troubles des conduites alimentaires (TCA)",
         "url": "https://www.psycom.org/sinformer/la-sante-mentale/les-troubles-psy/troubles-des-conduites-alimentaires-tca/",
         "kind": "quote",
         "upd": "2026-09-07"
        }
       },
       {
        "name": "Dépression",
        "why": "Cette page indique qu’une perte d’appétit peut aussi avoir des raisons psychologiques, comme l’isolement ou la dépression.",
        "src": {
         "org": "Santé.fr (Assurance Maladie)",
         "title": "4e édition de la Semaine nationale de la dénutrition pour lutter contre cette maladie méconnue",
         "url": "https://www.sante.fr/4e-edition-de-la-semaine-nationale-de-la-denutrition-pour-lutter-contre-cette-maladie-meconnue",
         "kind": "fact",
         "upd": "2023-11-09"
        }
       },
       {
        "name": "Trouble du spectre de l’autisme (TSA)",
        "why": "Cette page explique que les difficultés avec l’alimentation sont fréquentes chez les personnes avec autisme : un choix d’aliments très limité, le refus de certaines textures, couleurs ou odeurs, des rituels autour des repas, ou le stress des repas en groupe. Elle indique qu’elles sont souvent liées à des particularités sensorielles et à un fort besoin de prévisibilité.",
        "src": {
         "org": "Maison de l’autisme",
         "title": "Particularités alimentaires chez les personnes avec autisme",
         "url": "https://maisondelautisme.gouv.fr/fiches-pratiques-autisme/particularites-alimentaires-autisme/",
         "kind": "fact",
         "upd": "none"
        }
       }
      ],
      "windows": [
       "frmt",
       "frcmp",
       "frmsp",
       "frannuaire",
       "frpass"
      ],
      "crisis": []
     },
     "habit": {
      "label": "Difficile d’arrêter l’alcool, les jeux d’argent ou les jeux vidéo",
      "lead": "Quand vous voulez arrêter ou réduire, mais que vous continuez quand même.",
      "scenes": [
       "J’ai décidé d’arrêter ou de réduire, mais je me rends compte que je continue quand même.",
       "Je n’arrive pas à m’en tenir au temps, à la quantité ou à l’argent que je m’étais fixés pour la journée.",
       "Il m’arrive de cacher à mes proches ce que je bois, mes jeux vidéo ou mes jeux d’argent, ou d’arranger la vérité.",
       "Je joue tard le soir aux jeux vidéo, j’ai du mal à me lever le matin, et les retards ou les absences se multiplient.",
       "Quand je perds, je veux récupérer l’argent perdu, alors je mise de nouveau.",
       "Même en sachant que ma santé physique n’est pas bonne, je n’arrive pas à boire moins."
      ],
      "asks": [
       "J’aimerais que vous m’écoutiez d’abord, sans me faire de reproches ni me juger.",
       "J’aimerais faire le point avec vous, étape par étape, sur mes habitudes et sur les difficultés qu’elles me causent.",
       "Merci de regarder aussi mon sommeil et ma santé physique.",
       "Pouvez-vous m’indiquer concrètement où demander de l’aide et où je peux me rendre ?",
       "Pouvez-vous me dire si un membre de ma famille ou un proche peut venir en parler avec moi ?",
       "Avant de commencer, pouvez-vous me dire à qui vous transmettrez ce que je vous confie, et jusqu’où ?"
      ],
      "meyasu": {
       "has": false,
       "text": "",
       "src": null
      },
      "names": [
       {
        "name": "Insomnie",
        "why": "Selon cette page, boire trop d’alcool fait partie de ce qui peut perturber le sommeil : pris le soir, l’alcool dérègle les nuits et entraîne des réveils. Quand l’alcool pose problème, le sommeil peut donc aussi être abordé.",
        "src": {
         "org": "Santé.fr (Service Public d’Information en Santé)",
         "title": "Insomnie",
         "url": "https://www.sante.fr/insomnie",
         "kind": "fact",
         "upd": "2026-08-12"
        }
       },
       {
        "name": "Alcoolodépendance (addiction à l’alcool)",
        "why": "Cette page présente l’alcoolodépendance comme une addiction qui abîme la santé, les relations et la vie affective. Elle décrit une gradation continue, de l’abstinence jusqu’à la dépendance. Elle parle aussi de la difficulté à maîtriser le moment où l’on commence, celui où l’on s’arrête et la quantité bue, et du manque qui peut se faire sentir quand on boit moins ou plus du tout.",
        "src": {
         "org": "Santé.fr (Service Public d’Information en Santé)",
         "title": "Alcoolodépendance",
         "url": "https://www.sante.fr/alcoolodependance",
         "kind": "fact",
         "upd": "2026-08-13"
        }
       },
       {
        "name": "Trouble du jeu d’argent (addiction aux jeux de hasard et d’argent)",
        "why": "Selon cette page d’une agence régionale de santé, dans une addiction sans substance, on n’arrive plus à garder le contrôle sur une activité. Elle précise que l’addiction aux jeux de hasard et d’argent, appelée trouble du jeu d’argent, est l’une des deux à avoir aujourd’hui une définition clinique précise.",
        "src": {
         "org": "Agence régionale de santé Hauts-de-France",
         "title": "Addictions sans substances /comportementales : quel impact en région ?",
         "url": "https://www.hauts-de-france.ars.sante.fr/addictions-sans-substances-comportementales-quel-impact-en-region",
         "kind": "fact",
         "upd": "2025-10-27"
        }
       },
       {
        "name": "Trouble du jeu vidéo",
        "why": "La page d’une agence régionale de santé indique que le fait de ne plus contrôler sa pratique des jeux vidéo porte un nom : le trouble du jeu vidéo. Elle décrit un jeu qui prend peu à peu une grande place dans la vie de tous les jours et passe avant les autres centres d’intérêt, même quand il entraîne des difficultés.",
        "src": {
         "org": "Agence régionale de santé Bretagne",
         "title": "Addictions sans substances/ comportementales",
         "url": "https://www.bretagne.ars.sante.fr/addictions-sans-substances-comportementales-0",
         "kind": "fact",
         "upd": "2026-09-17"
        }
       },
       {
        "name": "Dépression",
        "why": "Cette page explique que l’alcool et la dépression peuvent s’entretenir l’un l’autre : boire beaucoup peut nourrir l’anxiété et la dépression, et, à l’inverse, une personne stressée ou en dépression peut avoir envie de boire pour tenter d’aller mieux.",
        "src": {
         "org": "Santé.fr (Santé publique France - Alcool Info Service)",
         "title": "Les effets de la consommation d'alcool sur votre santé",
         "url": "https://www.sante.fr/les-effets-de-la-consommation-dalcool-sur-votre-sante",
         "kind": "fact",
         "upd": "2024-04-11"
        }
       },
       {
        "name": "Troubles bipolaires",
        "why": "« Ils sont souvent associés à des troubles anxieux et à des comportements addictifs, selon l’étude publiée en 2018 dans la revue Therapeutic Advances in Psychopharmacology. »",
        "src": {
         "org": "© Psycom",
         "title": "Troubles bipolaires",
         "url": "https://www.psycom.org/sinformer/la-sante-mentale/les-troubles-psy/troubles-bipolaires/",
         "kind": "quote",
         "upd": "2026-09-15"
        }
       },
       {
        "name": "Trouble du déficit de l’attention avec ou sans hyperactivité (TDAH)",
        "why": "Selon la page d’une agence régionale de santé, une addiction comportementale (jeux d’argent, jeux vidéo) s’accompagne souvent d’autres troubles psychiques ; le TDAH fait partie de ceux qu’elle cite.",
        "src": {
         "org": "Agence régionale de santé Bretagne",
         "title": "Addictions sans substances/ comportementales",
         "url": "https://www.bretagne.ars.sante.fr/addictions-sans-substances-comportementales-0",
         "kind": "fact",
         "upd": "2026-09-17"
        }
       }
      ],
      "windows": [
       "frais",
       "frjis",
       "frmt",
       "frcmp",
       "frmsp",
       "frpass"
      ],
      "crisis": []
     },
     "attention": {
      "label": "Difficultés d’attention et d’organisation",
      "lead": "Du mal à se concentrer, à avancer étape par étape, ou à se souvenir des choses.",
      "scenes": [
       "Même quand quelqu’un me parle, mon esprit part ailleurs sans que je m’en rende compte.",
       "Je n’arrive pas à mener mon travail ou les tâches ménagères dans l’ordre, et je dépasse les délais.",
       "Il m’arrive souvent d’oublier ce qu’on m’a demandé ou ce que j’ai promis, ou de perdre mes affaires.",
       "Quand je fais longtemps la même tâche, les erreurs d’inattention se multiplient.",
       "Rester assis sans bouger m’est difficile : je m’agite et je ne tiens pas en place.",
       "Mon entourage me dit que j’oublie souvent des choses ou que je suis souvent en retard."
      ],
      "asks": [
       "Merci de me donner les consignes une par une.",
       "Merci d’écrire les informations importantes et de me les remettre.",
       "J’aimerais connaître les délais et les rendez-vous assez tôt.",
       "Merci de ne pas me demander trop de choses à la fois et de découper les tâches en petites étapes.",
       "J’aimerais parler dans un endroit calme, où il y a peu de distractions.",
       "Plutôt que de me reprocher ce que je n’ai pas réussi, j’aimerais que vous reconnaissiez ce que j’ai réussi à faire."
      ],
      "meyasu": {
       "has": false,
       "text": "",
       "src": null
      },
      "names": [
       {
        "name": "Manque de sommeil",
        "why": "« En effet, on sait qu’avec le manque de sommeil, nos capacités intellectuelles (cognitives) diminuent. »",
        "src": {
         "org": "© Psycom",
         "title": "Quand le sommeil s’en mêle",
         "url": "https://www.psycom.org/sinformer/la-sante-mentale/quand-le-sommeil-sen-mele/",
         "kind": "quote",
         "upd": "2026-09-16"
        }
       },
       {
        "name": "Insomnie",
        "why": "Selon cette page, le manque de sommeil peut avoir des conséquences comme la fatigue, l’irritabilité, des troubles de la mémoire ou des difficultés à se concentrer. Quand l’insomnie s’installe, la vigilance pendant la journée peut aussi baisser.",
        "src": {
         "org": "Santé.fr (Service Public d’Information en Santé)",
         "title": "Insomnie",
         "url": "https://www.sante.fr/insomnie",
         "kind": "fact",
         "upd": "2026-08-12"
        }
       },
       {
        "name": "Syndrome des jambes sans repos (impatiences)",
        "why": "Cette page décrit une envie très forte de bouger les jambes, qui vient surtout quand on est au repos, par exemple assis dans un fauteuil. Selon elle, ce syndrome gêne le sommeil et peut aussi nuire à la mémoire et à la concentration.",
        "src": {
         "org": "Santé.fr (Service Public d’Information en Santé)",
         "title": "Syndrome des jambes sans repos (impatiences)",
         "url": "https://www.sante.fr/syndrome-des-jambes-sans-repos-impatiences-0",
         "kind": "fact",
         "upd": "2026-08-12"
        }
       },
       {
        "name": "Effets de l’alcool",
        "why": "Selon cette page, boire beaucoup d’alcool de façon régulière peut laisser des troubles qui durent et pèsent sur la vie de tous les jours, en particulier sur la mémoire, la concentration et la capacité à prendre des décisions.",
        "src": {
         "org": "Santé.fr (Santé publique France - Alcool Info Service)",
         "title": "Les effets de la consommation d'alcool sur votre santé",
         "url": "https://www.sante.fr/les-effets-de-la-consommation-dalcool-sur-votre-sante",
         "kind": "fact",
         "upd": "2024-04-11"
        }
       },
       {
        "name": "Dépression",
        "why": "Selon cette page, la dépression peut toucher la concentration : il devient plus difficile de rester attentif, de se souvenir des choses et de prendre des décisions.",
        "src": {
         "org": "Santé publique France (Santé Mentale Info Service)",
         "title": "Dépression : comment la reconnaître, comment agir",
         "url": "https://www.santementale-info-service.fr/depression-comment-la-reconnaitre-comment-agir",
         "kind": "fact",
         "upd": "2026-06-01"
        }
       },
       {
        "name": "Anxiété généralisée",
        "why": "Selon cette page, dans l’anxiété généralisée, la peur et l’inquiétude portent sur la plupart des événements de la vie, et s’accompagnent de fatigue, d’irritabilité et de difficultés à se concentrer.",
        "src": {
         "org": "Santé.fr (Service Public d’Information en Santé)",
         "title": "Anxiété",
         "url": "https://www.sante.fr/anxiete",
         "kind": "fact",
         "upd": "2026-08-12"
        }
       },
       {
        "name": "Trouble du déficit de l’attention avec ou sans hyperactivité (TDAH)",
        "why": "Cette page explique que le TDAH est un trouble du neurodéveloppement qui concerne aussi les adultes. Elle cite des difficultés à rester concentré ou à retenir les choses (oublis réguliers, distraction rapide), de l’impulsivité et une forte agitation, que l’on peut voir sur le lieu de travail, à la maison ou en société.",
        "src": {
         "org": "Mon Parcours Handicap",
         "title": "Qu’est-ce que le trouble du déficit d’attention avec ou sans hyperactivité (TDAH) ?",
         "url": "https://www.monparcourshandicap.gouv.fr/actualite/quest-ce-que-le-trouble-du-deficit-dattention-avec-ou-sans-hyperactivite-tdah",
         "kind": "summary",
         "upd": "2026-06-09"
        }
       },
       {
        "name": "Trouble du spectre de l’autisme (TSA)",
        "why": "Selon cette page, dans le trouble du spectre de l’autisme, l’attention peut se fixer très fortement sur un centre d’intérêt, avec du mal à passer à autre chose ; la pensée peut aussi être rigide, avec un besoin de routine. Elle rappelle que certaines difficultés ressemblent à celles du TDAH sans avoir les mêmes causes.",
        "src": {
         "org": "Maison de l’autisme",
         "title": "Autisme et TDAH : quand les troubles coexistent",
         "url": "https://maisondelautisme.gouv.fr/fiches-pratiques-autisme/autisme-et-tdah/",
         "kind": "fact",
         "upd": "none"
        }
       }
      ],
      "windows": [
       "frmt",
       "frcmp",
       "frmdph",
       "frpass"
      ],
      "crisis": []
     },
     "social": {
      "label": "Difficultés avec les autres, habitudes fixes et sensations",
      "lead": "Des difficultés à parler ou à être avec les autres, un fort besoin de faire les choses d’une certaine façon, ou des sons, des lumières et des odeurs difficiles à supporter.",
      "scenes": [
       "Dans une conversation, j’ai du mal à saisir ce que ressent l’autre ou l’ambiance du moment, et j’ai l’impression qu’on ne se comprend pas.",
       "Quand je dois parler devant des gens ou que les regards se tournent vers moi, la tension est très forte et j’évite ces situations.",
       "J’arrive à parler avec mes proches, mais devant d’autres personnes, ma voix ne sort plus.",
       "Quand ma façon de faire, l’ordre des étapes ou la place des objets changent, cela m’angoisse beaucoup.",
       "Les bruits, les lumières ou les odeurs me paraissent très forts, et les endroits où il y a du monde sont pénibles pour moi.",
       "J’ai du mal à entendre ce que disent les gens, ou j’ai le moral bas, et voir les autres ou leur parler est devenu difficile."
      ],
      "asks": [
       "Merci de parler lentement et clairement.",
       "Merci de m’écrire les choses importantes.",
       "J’aimerais parler dans un endroit calme.",
       "Si le programme ou la façon de faire change, merci de me le dire à l’avance.",
       "Laissez-moi le temps de répondre, sans me presser.",
       "J’aimerais pouvoir répondre par écrit ou avec un petit mot, au lieu de parler."
      ],
      "meyasu": {
       "has": false,
       "text": "",
       "src": null
      },
      "names": [
       {
        "name": "Baisse de l’audition",
        "why": "Selon cette page, quand on entend moins bien, échanger avec les autres devient plus compliqué, ce qui peut conduire à s’isoler et à perdre confiance en soi. Elle cite aussi l’irritabilité.",
        "src": {
         "org": "Santé.fr (Santé Publique France - Pour Bien vieillir)",
         "title": "Pour bien vieillir : Prendre soin de votre audition pour bien vieillir",
         "url": "https://www.sante.fr/pour-bien-vieillir-prendre-soin-de-votre-audition-pour-bien-vieillir",
         "kind": "fact",
         "upd": "2025-01-06"
        }
       },
       {
        "name": "Dépression",
        "why": "Selon cette page, la dépression peut peser sur les liens avec la famille, les amis ou les collègues, et faire diminuer les activités de tous les jours. Elle décrit aussi une personne qui semble triste, fatiguée, en retrait, et qui délaisse ce qu’elle aimait.",
        "src": {
         "org": "Santé publique France (Santé Mentale Info Service)",
         "title": "Dépression : comment la reconnaître, comment agir",
         "url": "https://www.santementale-info-service.fr/depression-comment-la-reconnaitre-comment-agir",
         "kind": "fact",
         "upd": "2026-06-01"
        }
       },
       {
        "name": "Trouble d’anxiété sociale (phobie sociale)",
        "why": "« Nous avons généralement peur d’être jugés négativement par les autres, de commettre ce que nous pensons être des erreurs sociales (trop parler ou pas assez, dire des choses maladroites, poser des questions indésirables), de nous ridiculiser, de paraître froid, bête ou impoli. »",
        "src": {
         "org": "© Psycom",
         "title": "Troubles anxieux et phobies",
         "url": "https://www.psycom.org/sinformer/la-sante-mentale/les-troubles-psy/troubles-anxieux-et-phobies/",
         "kind": "quote",
         "upd": "2026-09-24"
        }
       },
       {
        "name": "Troubles obsessionnels compulsifs (TOC)",
        "why": "Cette page décrit des gestes répétés pour apaiser l’anxiété, par exemple pour mettre de l’ordre ou ranger, qui finissent par gêner la vie avec les autres et le travail. Elle indique aussi que, sans prise en charge, les TOC peuvent conduire à une phobie sociale, liée à la honte et à la peur du jugement des autres.",
        "src": {
         "org": "Santé.fr (Service Public d’Information en Santé)",
         "title": "Troubles obsessionnels compulsifs (TOC)",
         "url": "https://www.sante.fr/troubles-obsessionnels-compulsifs-toc",
         "kind": "fact",
         "upd": "2026-08-12"
        }
       },
       {
        "name": "Trouble du spectre de l’autisme (TSA)",
        "why": "Selon cette page, une personne autiste peut prendre les mots au pied de la lettre et avoir du mal avec ce qui est sous-entendu ou avec les codes sociaux. La page parle aussi d’un besoin de routines très précises, de difficultés face aux changements, et de sons, de lumières ou de textures perçus plus fort ou moins fort.",
        "src": {
         "org": "Maison de l’autisme",
         "title": "Qu’est-ce que l’autisme ?",
         "url": "https://maisondelautisme.gouv.fr/fiches-pratiques-autisme/qu-est-ce-que-l-autisme/",
         "kind": "fact",
         "upd": "none"
        }
       }
      ],
      "windows": [
       "frmt",
       "frtnd",
       "frcmp",
       "frcra",
       "frmdph",
       "frpass"
      ],
      "crisis": []
     },
     "reading": {
      "label": "Difficultés pour lire, écrire ou calculer",
      "lead": "Quand lire, écrire ou manier les chiffres reste difficile malgré les efforts.",
      "scenes": [
       "Je mets plus de temps que les autres à lire un texte, et je dois souvent le relire plusieurs fois.",
       "Même après avoir lu, le contenu ne me rentre pas dans la tête, et j’ai du mal à comprendre ce que veulent dire les documents ou les courriers.",
       "J’ai du mal avec l’orthographe : je fais beaucoup de fautes, ou j’oublie des lettres ou des mots en écrivant.",
       "Mon écriture est irrégulière, et écrire me demande beaucoup de temps et d’effort.",
       "Je bloque sur des calculs simples et sur les problèmes de calcul présentés sous forme de phrases.",
       "Je peux parler et écouter sans difficulté, mais pour lire, écrire ou calculer, je n’avance pas comme je le voudrais, même en prenant beaucoup de temps."
      ],
      "asks": [
       "J’aimerais que les textes me soient présentés en grands caractères, avec des lignes bien espacées.",
       "J’aimerais que les informations importantes me soient lues à voix haute ou dites à l’oral.",
       "J’aimerais pouvoir taper sur un ordinateur ou un téléphone, ou garder une trace en photo ou en enregistrement audio, au lieu d’écrire à la main.",
       "J’aimerais pouvoir utiliser une calculatrice pour les calculs.",
       "J’aimerais avoir plus de temps pour lire, écrire et calculer.",
       "J’aimerais recevoir moins de choses à la fois, une par une."
      ],
      "meyasu": {
       "has": false,
       "text": "",
       "src": null
      },
      "names": [
       {
        "name": "Dépression",
        "why": "Parmi les symptômes fréquents de la dépression, cette page cite des difficultés de concentration, une lenteur dans les pensées et les actions, et une perte d’intérêt pour des activités appréciées auparavant.",
        "src": {
         "org": "Service d’information du Gouvernement (info.gouv.fr)",
         "title": "Les différents troubles",
         "url": "https://www.info.gouv.fr/grand-dossier/parlons-sante-mentale/les-differents-troubles",
         "kind": "summary",
         "upd": "2026-02-27"
        }
       },
       {
        "name": "Troubles spécifiques des apprentissages (dyslexie, dysorthographie, dyscalculie)",
        "why": "Cette page explique que les troubles « dys » sont des troubles spécifiques des apprentissages qui persistent à l’âge adulte. Ils peuvent se traduire par des difficultés de lecture (dyslexie), d’expression écrite (dysorthographie) ou de calcul (dyscalculie).",
        "src": {
         "org": "Service d’information du Gouvernement (info.gouv.fr)",
         "title": "Les différents troubles",
         "url": "https://www.info.gouv.fr/grand-dossier/parlons-sante-mentale/les-differents-troubles",
         "kind": "summary",
         "upd": "2026-02-27"
        }
       },
       {
        "name": "Trouble du déficit de l’attention avec ou sans hyperactivité (TDAH)",
        "why": "« Il est assez fréquent qu’une personne avec un ou des troubles dys vive également avec un Trouble du déficit de l’attention avec ou sans hyperactivité (TDAH). »",
        "src": {
         "org": "© Psycom",
         "title": "La santé mentale avec un trouble dys",
         "url": "https://www.psycom.org/sinformer/la-sante-mentale/avec-un-trouble-du-neurodeveloppement/la-sante-mentale-avec-un-trouble-dys/",
         "kind": "quote",
         "upd": "2026-09-17"
        }
       },
       {
        "name": "Trouble développemental de la coordination (dyspraxie)",
        "why": "Cette page explique que ce trouble touche la planification et la coordination des gestes, avec des effets sur l’écriture et sur les gestes fins. Elle cite aussi la dysgraphie, une difficulté du geste d’écriture, qui devient lent, douloureux ou difficile à relire.",
        "src": {
         "org": "Maison de l’autisme",
         "title": "Troubles dys au sein des TND",
         "url": "https://maisondelautisme.gouv.fr/fiches-pratiques-autisme/troubles-dys/",
         "kind": "fact",
         "upd": "none"
        }
       },
       {
        "name": "Trouble du développement intellectuel (TDI)",
        "why": "Cette page range le trouble du développement intellectuel parmi les troubles du neurodéveloppement, qui touchent des fonctions comme le raisonnement, la mémoire ou les apprentissages. Elle le décrit par une limitation des fonctions intellectuelles (raisonnement, résolution de problèmes, planification) et par des difficultés d’adaptation dans la vie quotidienne.",
        "src": {
         "org": "Service d’information du Gouvernement (info.gouv.fr)",
         "title": "Les différents troubles",
         "url": "https://www.info.gouv.fr/grand-dossier/parlons-sante-mentale/les-differents-troubles",
         "kind": "summary",
         "upd": "2026-02-27"
        }
       }
      ],
      "windows": [
       "frmt",
       "frcmp",
       "frmdph",
       "frpass"
      ],
      "crisis": []
     },
     "wave": {
      "label": "Grandes variations d’humeur",
      "lead": "Quand l’humeur monte et descend beaucoup et que vos sentiments ont du mal à suivre.",
      "scenes": [
       "Des périodes où j’ai beaucoup trop d’énergie alternent avec des périodes où mon moral est si bas que je n’arrive plus à bouger.",
       "Il y a des périodes où je dors à peine, mais où j’ai beaucoup d’énergie et je bouge sans arrêt.",
       "Les idées me viennent les unes après les autres, et tout reste à moitié fait.",
       "Il m’est arrivé, en me sentant capable de tout, de dépenser tellement d’argent que j’ai eu des difficultés ensuite.",
       "Je m’irrite pour un rien, et j’ai du mal à contenir ce que je ressens.",
       "Des choses que j’ai faites quand mon humeur était très haute ont eu des conséquences sur mes relations ou sur mon travail."
      ],
      "asks": [
       "J’aimerais que vous me posiez aussi des questions sur les périodes où j’allais très bien, avec une énergie inhabituelle.",
       "J’aimerais prendre le temps de revoir avec vous mes hauts et mes bas.",
       "Avant une grande décision d’argent ou de travail, j’aimerais qu’on m’aide à m’arrêter et à réfléchir d’abord.",
       "J’aimerais que l’on vérifie aussi les causes physiques, y compris le sommeil, les médicaments et l’alcool.",
       "Si je ne suis pas comme d’habitude, j’aimerais qu’on me le dise sans me faire de reproches.",
       "J’aimerais que l’on m’écoute jusqu’au bout, dans les périodes hautes comme dans les périodes basses."
      ],
      "meyasu": {
       "has": false,
       "text": "",
       "src": null
      },
      "names": [
       {
        "name": "Manque de sommeil",
        "why": "« En effet, on sait qu’avec le manque de sommeil, nos capacités intellectuelles (cognitives) diminuent. Notre humeur varie davantage. »",
        "src": {
         "org": "© Psycom",
         "title": "Quand le sommeil s’en mêle",
         "url": "https://www.psycom.org/sinformer/la-sante-mentale/quand-le-sommeil-sen-mele/",
         "kind": "quote",
         "upd": "2026-09-16"
        }
       },
       {
        "name": "Effets de l’arrêt de l’alcool (sevrage)",
        "why": "Selon cette page, quand on boit de l’alcool très régulièrement, l’arrêt peut entraîner de l’anxiété, de l’irritabilité et des difficultés de sommeil. Elle ajoute que, par la suite, la tristesse ou une humeur dépressive peuvent durer.",
        "src": {
         "org": "Santé.fr (Santé publique France - Alcool Info Service)",
         "title": "Sevrage : ce qu'il faut savoir pour mieux vous préparer",
         "url": "https://www.sante.fr/sevrage-ce-quil-faut-savoir-pour-mieux-vous-preparer",
         "kind": "fact",
         "upd": "2024-06-14"
        }
       },
       {
        "name": "Trouble dysphorique prémenstruel",
        "why": "« Le syndrome prémenstruel et le syndrome dysphorique prémenstruel (SDPM). A l’approche des règles, ils peuvent se manifester de manière physique (seins douloureux, prise de poids, maux de ventre, douleur dans les reins) et psychologique (tristesse, manque d’énergie, impression de malaise, crises de larmes, irritabilité, impatience, anxiété). »",
        "src": {
         "org": "© Psycom",
         "title": "La santé mentale des femmes",
         "url": "https://www.psycom.org/sinformer/la-sante-mentale/la-sante-mentale-des-femmes/",
         "kind": "quote",
         "upd": "2026-09-16"
        }
       },
       {
        "name": "Dépression",
        "why": "Cette page range la dépression et le trouble bipolaire parmi les troubles de l’humeur. Elle décrit les troubles dépressifs par une dégradation de l’humeur qui affecte durablement la vie quotidienne, et explique que le trouble bipolaire comprend aussi des périodes de dépression : il peut passer longtemps inaperçu, surtout quand ces périodes de dépression dominent.",
        "src": {
         "org": "Service d’information du Gouvernement (info.gouv.fr)",
         "title": "Les différents troubles",
         "url": "https://www.info.gouv.fr/grand-dossier/parlons-sante-mentale/les-differents-troubles",
         "kind": "summary",
         "upd": "2026-02-27"
        }
       },
       {
        "name": "Trouble bipolaire",
        "why": "Cette page décrit le trouble bipolaire comme une alternance de périodes de dépression et de périodes dites maniaques. Pendant ces dernières, la personne peut ressentir une énergie débordante et une forte excitation, avoir moins besoin de sommeil et agir de façon impulsive, parfois avec des dépenses excessives.",
        "src": {
         "org": "Service d’information du Gouvernement (info.gouv.fr)",
         "title": "Les différents troubles",
         "url": "https://www.info.gouv.fr/grand-dossier/parlons-sante-mentale/les-differents-troubles",
         "kind": "summary",
         "upd": "2026-02-27"
        }
       },
       {
        "name": "Trouble du déficit de l’attention avec ou sans hyperactivité (TDAH)",
        "why": "Cette page décrit le TDAH par des difficultés d’attention, de l’impulsivité (réponses précipitées, difficulté à attendre son tour) et, dans certains cas, une hyperactivité, qui peut aussi être mentale. Elle précise qu’il concerne aussi les adultes.",
        "src": {
         "org": "Service d’information du Gouvernement (info.gouv.fr)",
         "title": "Les différents troubles",
         "url": "https://www.info.gouv.fr/grand-dossier/parlons-sante-mentale/les-differents-troubles",
         "kind": "summary",
         "upd": "2026-02-27"
        }
       }
      ],
      "windows": [
       "frmt",
       "frcmp",
       "frannuaire",
       "frpass"
      ],
      "crisis": []
     }
    },
    "common": {
     "learn": [
      {
       "h": "Connaître un nom peut faire ressembler les variations ordinaires à des symptômes",
       "body": "Quand on apprend le nom d’une maladie ou d’un trouble du développement, une petite fatigue ou un moment d’inattention ordinaires peuvent plus facilement ressembler à un symptôme.\n\nLes émotions peuvent vraiment changer ce que l’on ressent dans son corps et dans son humeur : ce n’est pas une idée que l’on se fait, cela arrive réellement. Le manque de sommeil, le stress, le téléphone ou ce qui se passe autour de soi peuvent aussi produire des effets semblables.\n\nSi, en voyant un nom, vous pensez « c’est peut-être ça », ne vous arrêtez pas tout de suite à cette idée, et pensez aussi à d’autres raisons. Si les difficultés durent, vous pouvez en parler telles qu’elles sont, même sans nom.",
       "srcs": []
      },
      {
       "h": "Les variations d’humeur et l’envie de vérifier arrivent à tout le monde",
       "body": "Il arrive à tout le monde que le moral varie au fil du temps, avec du stress, de la tristesse, de la joie ou du découragement. Une page publique française rappelle qu’il ne faut pas confondre ces variations de l’humeur avec un trouble psychique. D’après elle, ce qui fait parler de trouble, c’est une souffrance qui s’installe dans la durée et qui gêne nettement la vie de tous les jours.\n\nL’envie de vérifier une chose « au cas où » arrive aussi à chacun. Une page de Psycom l’écrit ainsi : « Tout le monde fait, à un moment ou un autre, l’expérience d’une obsession ou d’une pensée intrusive (« Est-ce que j’ai bien pensé à éteindre le four ? »). »\n\nMieux vaut ne pas se donner soi-même un nom (un diagnostic) : seul un professionnel de santé peut poser un diagnostic. Un médecin généraliste ou un psychiatre peut aussi prescrire des examens pour écarter d’autres maladies qui pourraient donner des symptômes semblables. Pour les troubles « dys », par exemple, la page « Les différents troubles » explique qu’ils apparaissent tôt dans la vie et persistent à l’âge adulte : c’est pourquoi la façon dont les choses se passaient dans les premières années peut aussi compter.\n\nSi les difficultés durent, vous pouvez en parler telles qu’elles sont, quel que soit le nom.",
       "srcs": [
        {
         "org": "Service d’information du Gouvernement (info.gouv.fr)",
         "title": "Les différents troubles",
         "url": "https://www.info.gouv.fr/grand-dossier/parlons-sante-mentale/les-differents-troubles",
         "kind": "summary",
         "upd": "2026-02-27"
        },
        {
         "org": "Service d’information du Gouvernement (info.gouv.fr)",
         "title": "Repérer les signaux d'alerte",
         "url": "https://www.info.gouv.fr/grand-dossier/parlons-sante-mentale/reperer-les-signaux-d-alerte",
         "kind": "summary",
         "upd": "2026-02-11"
        },
        {
         "org": "© Psycom",
         "title": "Le TOC et les troubles apparentés",
         "url": "https://www.psycom.org/sinformer/la-sante-mentale/les-troubles-psy/le-toc-et-les-troubles-apparentes/",
         "kind": "quote",
         "upd": "2026-07-06"
        }
       ]
      },
      {
       "h": "Vous pouvez parler de vos difficultés, même sans diagnostic",
       "body": "Même sans nom de maladie, vous pouvez parler de vos difficultés telles qu’elles sont. Par exemple, toute personne concernée par des difficultés psychiques ou par des troubles du neurodéveloppement peut s’adresser au centre médico-psychologique (CMP) de son secteur : on peut y prendre rendez-vous directement, et les séances sont gratuites. Votre médecin traitant peut aussi être un premier interlocuteur.\n\nAu travail, vous pouvez demander un rendez-vous au médecin du travail (ou au médecin de prévention dans la fonction publique) à tout moment. Les salariés peuvent le contacter directement, sans demander l’accord de l’employeur, et cette demande ne peut pas être sanctionnée. Le médecin du travail et le médecin traitant sont tenus au secret professionnel : ils ne donnent à l’employeur aucune information médicale vous concernant. Le médecin du travail peut proposer à l’employeur des aménagements du poste ou du temps de travail.\n\nDans le droit du travail, l’obligation pour l’employeur de prévoir les aménagements nécessaires (on parle d’aménagement raisonnable) concerne les personnes dont le handicap est reconnu (RQTH, par exemple). Dans ce cadre, l’employeur doit prendre en compte les recommandations écrites du médecin du travail et, s’il refuse un aménagement, en expliquer les raisons. Sans reconnaissance, vous pouvez quand même demander un aménagement de poste ou d’horaires, et en parler par l’intermédiaire du médecin du travail. Déclarer une RQTH à l’employeur n’est pas obligatoire : c’est un choix personnel. En cas de refus vécu comme une discrimination, le Défenseur des droits peut être contacté.\n\nCe que vous souhaitez, et ce qui est faisable, dépend de la situation et de l’autre personne : cela se décide en en parlant ensemble.",
       "srcs": [
        {
         "org": "Maison de l’autisme",
         "title": "Acteurs et organismes dans l’autisme",
         "url": "https://maisondelautisme.gouv.fr/fiches-pratiques-autisme/acteurs-et-organismes-autisme/",
         "kind": "fact",
         "upd": "none"
        },
        {
         "org": "Mon Parcours Handicap",
         "title": "Compenser votre handicap dans l'emploi",
         "url": "https://www.monparcourshandicap.gouv.fr/emploi/compenser-votre-handicap-dans-lemploi",
         "kind": "fact",
         "upd": "2024-10-20"
        },
        {
         "org": "Santé.fr (Ministère du Travail)",
         "title": "Santé au travail : visites et examens médicaux dans le cadre du travail",
         "url": "https://www.sante.fr/sante-au-travail-visites-et-examens-medicaux-dans-le-cadre-du-travail",
         "kind": "fact",
         "upd": "2022-04-06"
        },
        {
         "org": "Service Public (service-public.gouv.fr)",
         "title": "Médecine du travail pour un salarié du secteur privé",
         "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/F2211",
         "kind": "summary",
         "upd": "2025-08-11"
        },
        {
         "org": "Service Public (service-public.gouv.fr)",
         "title": "Handicap : travail en milieu ordinaire",
         "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/F15926",
         "kind": "summary",
         "upd": "2026-06-01"
        },
        {
         "org": "Service Public (service-public.gouv.fr)",
         "title": "Qu'est-ce que la reconnaissance de la qualité de travailleur handicapé (RQTH) ?",
         "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/F1650",
         "kind": "summary",
         "upd": "2026-03-24"
        }
       ]
      },
      {
       "h": "Cependant, certains dispositifs demandent un document médical",
       "body": "Cependant, pour utiliser certains dispositifs, un document d’un médecin est nécessaire.\n\nPour une affection de longue durée (ALD), c’est le médecin traitant qui établit avec vous un « protocole de soins » et le transmet à l’Assurance Maladie ; c’est ensuite le médecin de l’Assurance Maladie qui donne, ou non, son accord pour la prise en charge. Pour une ALD dite exonérante, les frais de santé liés à cette maladie sont alors mieux remboursés (certains frais restent toutefois à payer).\n\nPour toute demande à la maison départementale des personnes handicapées (MDPH), par exemple une RQTH ou une allocation, un certificat médical doit obligatoirement être joint. Le médecin le remplit après un examen, avec le ou les diagnostics et les répercussions sur la vie quotidienne.\n\nPour un arrêt de travail pour maladie, il faut une prescription d’un médecin. Pour recevoir le complément de salaire versé par l’employeur, le certificat médical doit aussi lui être transmis.\n\nCe qui est demandé dépend du dispositif : renseignez-vous auprès de l’organisme concerné avant de commencer les démarches.",
       "srcs": [
        {
         "org": "Mon Parcours Handicap",
         "title": "Les affections de longue durée (ALD)",
         "url": "https://www.monparcourshandicap.gouv.fr/aides/les-affections-de-longue-duree-ald",
         "kind": "summary",
         "upd": "2026-10-08"
        },
        {
         "org": "Mon Parcours Handicap",
         "title": "Certificat médical (formulaire Cerfa n° 15695*01)",
         "url": "https://www.monparcourshandicap.gouv.fr/demarches/certificat-medical-formulaire-cerfa-ndeg-1569501",
         "kind": "summary",
         "upd": "2026-08-10"
        },
        {
         "org": "Service Public (service-public.gouv.fr)",
         "title": "Arrêt maladie : indemnités journalières versées au salarié",
         "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/F3053",
         "kind": "summary",
         "upd": "2026-06-01"
        }
       ]
      },
      {
       "key": "notTool",
       "h": "Un nom de maladie n’est pas un outil pour se placer au-dessus des autres",
       "body": "Un nom de maladie n’est pas un outil pour se placer au-dessus de quelqu’un, ni pour regarder les autres de haut.\nCertaines personnes se sentent plus légères quand elles apprennent un nom pour ce qu’elles vivent. C’est important.\nVouloir que les gens autour de soi comprennent, ou soient plus doux avec soi, c’est naturel aussi.\n\nQuand vous souhaitez que quelqu’un soit plus doux avec vous, vous pouvez le demander directement, sans donner de nom de maladie.\nC’est plus facile à comprendre si vous dites ensemble deux choses : ce qui vous met en difficulté, et ce que vous aimeriez que l’autre fasse.\n\nPar exemple, vous pouvez dire :\n« Aujourd’hui, j’ai peu d’énergie : pouvez-vous me parler lentement ? »\n« Quand on me dit beaucoup de choses à la fois, je m’y perds : pouvez-vous me les dire une par une ? »\n« J’ai du mal à retenir ce que j’entends seulement : pouvez-vous écrire les choses importantes, sur papier ou par e-mail ? »\n« Les endroits où il y a beaucoup de monde sont difficiles pour moi : je préfère parler dans un endroit calme. »\n« J’ai besoin d’un peu de temps pour répondre : pouvez-vous attendre un moment ? »\n« En ce moment, mes émotions prennent toute la place : pouvez-vous d’abord m’écouter ? Les conseils peuvent attendre. »\n« Aujourd’hui, je ne me sens pas bien : pouvez-vous me laisser me reposer un peu ? »\n« Les changements de programme soudains me déstabilisent : pouvez-vous me le dire dès que vous le savez ? »\n« Quand on me parle fort, j’ai peur : pouvez-vous me parler calmement ? »\n\nSi c’est difficile à dire, vous pouvez l’écrire sur un papier et le donner. Vous pouvez aussi montrer l’écran « Mes difficultés » avec le bouton « Afficher en grand » : il apparaît dans cette application quand vous choisissez une difficulté et répondez aux questions.\nSi vous souhaitez dire un nom de maladie qui vous concerne, vous pouvez le faire. Dans ce cas aussi, dire en même temps ce qui vous met en difficulté et ce que vous aimeriez que l’autre fasse l’aide à agir.\nParfois, l’autre personne ne peut pas faire ce que vous demandez, à cause de sa propre situation. Dans ce cas, essayez de chercher ensemble s’il existe une autre façon de faire.\n\nAu travail ou pendant des études supérieures, si vous souhaitez que votre demande soit étudiée dans le cadre prévu pour cela, vous pouvez en parler au médecin du travail, ou à la mission handicap de votre établissement. Dans les entreprises d’au moins 250 salariés, un référent handicap est aussi chargé d’informer et d’orienter. L’avis ou un document d’un médecin peut alors être demandé.\n\nN’utilisez pas la liste des noms de cette application pour mettre en doute les personnes autour de vous.",
       "srcs": [
        {
         "org": "Mon Parcours Handicap",
         "title": "Compenser votre handicap dans l'emploi",
         "url": "https://www.monparcourshandicap.gouv.fr/emploi/compenser-votre-handicap-dans-lemploi",
         "kind": "fact",
         "upd": "2024-10-20"
        },
        {
         "org": "Mon Parcours Handicap",
         "title": "Quels sont vos droits et les obligations des établissements d’enseignement supérieur ?",
         "url": "https://www.monparcourshandicap.gouv.fr/etudes-superieures/quels-sont-vos-droits-et-les-obligations-des-etablissements-denseignement",
         "kind": "summary",
         "upd": "2025-12-23"
        },
        {
         "org": "Mon Parcours Handicap",
         "title": "Référent handicap",
         "url": "https://www.monparcourshandicap.gouv.fr/glossaire/referent-handicap",
         "kind": "summary",
         "upd": "none"
        }
       ]
      },
      {
       "h": "À propos de cette application",
       "body": "Ceci n’est pas un diagnostic. Cette liste ne permet pas de dire si vous avez une maladie ou un trouble. Cette application n’est pas un dispositif médical et ne remplace pas une consultation avec un professionnel de santé.\n\nVos réponses ne sont envoyées nulle part et ne sont pas enregistrées sur cet appareil. Elles disparaissent quand vous fermez l’application.\n\nApplication indépendante. SOYOGI est une organisation japonaise à but non lucratif. Elle n’a aucun lien avec l’État français, l’Assurance Maladie, la Haute Autorité de santé, Santé publique France ni aucun établissement de santé, et n’est recommandée par aucun d’eux. Les noms des organismes indiquent seulement d’où viennent les informations. Les textes d’origine peuvent être lus gratuitement sur le site de chaque organisme.\n\nSOYOGI a rédigé ces contenus avec ses propres mots, à partir de pages publiques françaises ; les quelques passages cités tels quels sont placés entre guillemets. Les sources sont indiquées sur chaque écran, avec la date de mise à jour de chaque page. Vérification faite le 17 octobre 2026 : les numéros et les horaires peuvent changer.\n\nC’est vous, et non l’application, qui décidez de demander de l’aide ou non.",
       "srcs": []
      }
     ],
     "meyasuGeneral": {
      "text": "Quand la souffrance psychologique devient intense et s’installe dans la durée, la santé mentale peut se dégrader : il vaut alors mieux consulter.",
      "src": {
       "org": "Service d’information du Gouvernement (info.gouv.fr)",
       "title": "Les différents troubles",
       "url": "https://www.info.gouv.fr/grand-dossier/parlons-sante-mentale/les-differents-troubles",
       "kind": "summary",
       "upd": "2026-02-27"
      }
     },
     "devGeneral": [
      {
       "text": "Votre médecin traitant : « Il est votre premier interlocuteur en cas de difficulté. Demandez-lui conseil, il saura vous orienter. »",
       "src": {
        "org": "Mon Parcours Handicap",
        "title": "Compenser votre handicap dans l'emploi",
        "url": "https://www.monparcourshandicap.gouv.fr/emploi/compenser-votre-handicap-dans-lemploi",
        "kind": "quote",
        "upd": "2024-10-20"
       }
      },
      {
       "text": "Centre médico-psychologique (CMP) : « Toute personne concernée par des troubles neurodéveloppementaux ou psychiques peut consulter ou être accueillie dans un centre médico-psychologique. »",
       "src": {
        "org": "Maison de l’autisme",
        "title": "Acteurs et organismes dans l’autisme",
        "url": "https://maisondelautisme.gouv.fr/fiches-pratiques-autisme/acteurs-et-organismes-autisme/",
        "kind": "quote",
        "upd": "none"
       }
      }
     ],
     "namesHow": {
      "lead": "Sur la façon dont les noms (diagnostics) sont donnés, une page publique française indique :",
      "text": "Seul un professionnel de santé peut poser un diagnostic. Un médecin généraliste ou un psychiatre peut prescrire des examens pour éliminer d’autres maladies qui pourraient donner des symptômes semblables, comme une anémie, un manque de vitamines ou une maladie de la thyroïde.",
      "src": {
       "org": "Service d’information du Gouvernement (info.gouv.fr)",
       "title": "Repérer les signaux d'alerte",
       "url": "https://www.info.gouv.fr/grand-dossier/parlons-sante-mentale/reperer-les-signaux-d-alerte",
       "kind": "summary",
       "upd": "2026-02-11"
      }
     }
    }
   }
  }
 }
};
