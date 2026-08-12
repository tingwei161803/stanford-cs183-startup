/* Course data for the CS183 study-notes site: SITE_META + SITE_PAGES.
   Summaries are paraphrased study notes of Blake Masters' CS183 essays. */
window.SITE_META = {
 "title": {
  "en": "CS183: Startup — Class Notes",
  "zh": "CS183 創業課筆記"
 },
 "subtitle": {
  "en": "Peter Thiel's 2012 Stanford course, distilled into bilingual study notes.",
  "zh": "Peter Thiel 2012 年史丹佛創業課,整理成中英雙語學習筆記。"
 },
 "repo": "tingwei161803/stanford-cs183-startup"
};

window.SITE_PAGES = [
 {
  "slug": "home",
  "layout": "hub",
  "icon": "school",
  "title": {
   "en": "CS183: Startup — Class Notes",
   "zh": "CS183 創業課筆記"
  },
  "subtitle": {
   "en": "Peter Thiel's 2012 Stanford course, distilled into bilingual study notes.",
   "zh": "Peter Thiel 2012 年史丹佛創業課,整理成中英雙語學習筆記。"
  },
  "about": [
   {
    "en": "In spring 2012, Peter Thiel taught CS183: Startup at Stanford. Blake Masters — then a law student — published detailed essay-style notes for all nineteen classes, which later grew into the bestseller Zero to One. This site distills each class into a structured study note: learning objectives, the key ideas, memorable quotes, and a 2026 reality check on how the claims aged — plus a course-wide glossary, flashcard deck and quiz.",
    "zh": "2012 年春天,Peter Thiel 在史丹佛開設 CS183 創業課。當時還在讀法學院的 Blake Masters 把整整 19 堂課寫成詳盡的 essay 筆記,後來擴寫成暢銷書《從 0 到 1(Zero to One)》。這個網站把每堂課整理成結構化學習筆記:學習目標、核心概念、金句,以及「到 2026 年這些說法應驗了嗎」的現況查核——另附全課程術語表、字卡與總測驗。"
   },
   {
    "en": "All summaries are paraphrased study notes: the ideas belong to Peter Thiel, and the original essays to Blake Masters. Use the source links to read the originals in full.",
    "zh": "所有摘要皆為改寫後的學習筆記:觀點屬於 Peter Thiel,原文著作權屬 Blake Masters。完整內容請透過來源連結閱讀原文。"
   }
  ],
  "sourceLinks": [
   {
    "label": {
     "en": "Blake Masters' original essays",
     "zh": "Blake Masters 原文筆記"
    },
    "url": "https://blakemasters.tumblr.com/peter-thiels-cs183-startup"
   },
   {
    "label": {
     "en": "Zero to One (the book)",
     "zh": "《從 0 到 1》(Zero to One)"
    },
    "url": "https://en.wikipedia.org/wiki/Zero_to_One"
   }
  ],
  "stats": [
   {
    "value": 19,
    "label": {
     "en": "Classes",
     "zh": "堂課"
    }
   },
   {
    "value": 74,
    "label": {
     "en": "Glossary terms",
     "zh": "個術語"
    }
   },
   {
    "value": 114,
    "label": {
     "en": "Flashcards",
     "zh": "張字卡"
    }
   },
   {
    "value": 57,
    "label": {
     "en": "Quiz questions",
     "zh": "道測驗題"
    }
   }
  ]
 },
 {
  "slug": "class-1",
  "layout": "lesson",
  "icon": "menu_book",
  "navLabel": "1",
  "classNo": 1,
  "sourceUrl": "https://blakemasters.tumblr.com/post/20400301508/cs183class1",
  "title": {
   "en": "The Challenge of the Future",
   "zh": "未來的挑戰"
  },
  "subtitle": {
   "en": "Real progress means going from 0 to 1 — doing new things — and startups are how it happens.",
   "zh": "真正的進步是從 0 到 1 做出新東西,而新創公司是實現它的載體。"
  },
  "objectives": [
   {
    "en": "Distinguish horizontal progress (globalization, 1 to n) from vertical progress (technology, 0 to 1) and explain why the difference matters.",
    "zh": "分辨水平進步(全球化,1 到 n)與垂直進步(科技,0 到 1),並說明這個區分為何重要。"
   },
   {
    "en": "Explain Thiel's stagnation thesis: why technological progress has slowed since the 1970s everywhere except computers.",
    "zh": "解釋 Thiel 的停滯論:為什麼 1970 年代之後,除了電腦以外的科技進步都慢了下來。"
   },
   {
    "en": "Use coordination costs (the Coase framework) to explain why new technology comes from startups rather than big companies or governments.",
    "zh": "用協調成本(寇斯定理 Coase Theorem 的框架)解釋為什麼新科技來自新創公司,而不是大公司或政府。"
   },
   {
    "en": "Apply the three starting questions and the contrarian question to judge whether an idea is truly 0 to 1.",
    "zh": "運用三個起點問題與逆向思考問題,判斷一個點子是否真的是從 0 到 1。"
   }
  ],
  "sections": [
   {
    "id": "stagnation-and-computers",
    "heading": {
     "en": "1. The History of Technology: Stagnation Outside Computers",
     "zh": "1. 科技史:電腦以外的大停滯"
    },
    "summary": {
     "en": "Since the late 1960s technological progress has slowed almost everywhere except computers — and most people barely noticed.",
     "zh": "1960 年代末之後,除了電腦以外的科技進步幾乎全面放緩,而多數人渾然不覺。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "From the late 17th century to the late 1960s, technological progress was relentless. Industrialization marked a deep shift in how humans get rich: from capturing value taken from others to creating new value through trade and invention. Of the roughly 100 billion people who have ever lived, most spent their lives in essentially static societies — the last few centuries are the great exception, and the 1960s were the peak of confidence that the next 50 years would bring unprecedented progress.",
       "zh": "從 17 世紀末到 1960 年代末,科技進步幾乎不曾間斷。工業化(industrialization)帶來一個深層轉變:人類致富的方式從掠奪別人的價值,變成靠貿易與發明創造新價值。歷史上活過的大約一千億人裡,絕大多數一生都處在幾乎靜止的社會;最近這幾百年是罕見的例外,而 1960 年代則是樂觀的頂點——當時人們深信接下來 50 年會有前所未有的進步。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Median wages have been flat since 1973; people run an Alice-in-Wonderland race, working harder just to stay in place.",
        "Per capita incomes still rise, but at ever-slower rates.",
        "Computing is the happy exception: Moore's Law, Kryder's Law, and their cousins have largely held."
       ],
       "zh": [
        "實質中位數薪資自 1973 年以來原地踏步;人們像《愛麗絲夢遊仙境》那樣,得越跑越快才能留在原地。",
        "人均所得仍在成長,但成長率不斷放緩。",
        "電腦運算是唯一的快樂例外:摩爾定律(Moore's Law)、克萊德定律(Kryder's Law)等至今大致成立。"
       ]
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Because computing is the one place where the machinery of progress still works — and the engine of Silicon Valley — computer science is the natural staging ground for restarting progress everywhere else.",
       "zh": "正因為電腦是進步引擎仍在運轉的少數領域,也是矽谷的核心動力,資訊科學(computer science)自然成為重新啟動整體進步的起點。"
      }
     }
    ]
   },
   {
    "id": "horizontal-vs-vertical",
    "heading": {
     "en": "2. Two Kinds of Progress: Globalization vs. Technology",
     "zh": "2. 兩種進步:全球化 vs. 科技"
    },
    "summary": {
     "en": "Horizontal progress copies what already works (1 to n); vertical progress does something new (0 to 1) — and only the second is technology.",
     "zh": "水平進步是複製已經可行的東西(1 到 n);垂直進步是做出新東西(0 到 1)——只有後者才是科技。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Horizontal (extensive) progress means taking things that work and replicating them; its one-word name is globalization. China is the paradigm: its 50-year path is largely to become what the developed world already is, perhaps skipping a few steps. Even the phrase 'developed nation' smuggles in pessimism — it implies the frontier is finished and everyone else just needs to catch up. Vertical (intensive) progress means doing genuinely new things; its one-word name is technology.",
       "zh": "水平(廣度)進步是把已經可行的東西拿來複製,一個詞概括就是全球化(globalization)。中國是典型例子:它未來 50 年的路線,大致就是變成今天的已開發世界,頂多跳過幾個步驟。連「已開發國家」這個說法本身都暗藏悲觀——彷彿前沿已經抵達終點,其他國家只需追趕。垂直(密集)進步則是做出真正新的東西,一個詞概括就是科技(technology)。"
      }
     },
     {
      "type": "table",
      "head": {
       "en": [
        "",
        "Horizontal (1 to n)",
        "Vertical (0 to 1)"
       ],
       "zh": [
        "",
        "水平進步(1 到 n)",
        "垂直進步(0 到 1)"
       ]
      },
      "rows": [
       {
        "en": [
         "One word",
         "Globalization",
         "Technology"
        ],
        "zh": [
         "一個詞",
         "全球化",
         "科技"
        ]
       },
       {
        "en": [
         "Core move",
         "Copy what works",
         "Do something new"
        ],
        "zh": [
         "核心動作",
         "複製可行的事物",
         "做前所未有的事"
        ]
       },
       {
        "en": [
         "Exemplar",
         "China re-running the developed world's playbook",
         "Silicon Valley at its best"
        ],
        "zh": [
         "代表",
         "中國重跑已開發世界的劇本",
         "最好狀態下的矽谷"
        ]
       },
       {
        "en": [
         "How to reason",
         "Statistics and probability",
         "Determinate, calculus-style planning"
        ],
        "zh": [
         "思考工具",
         "統計與機率",
         "決定論式、如微積分般的規劃"
        ]
       }
      ]
     },
     {
      "type": "p",
      "text": {
       "en": "The two interact: if everyone copies the resource-heavy Western lifestyle, environmental and resource constraints will bite. When scaling from 1 to n hits a wall, only new 0-to-1 technology can break through it — so technology matters even if globalization is all you care about.",
       "zh": "兩者會互相作用:如果所有人都複製西方高資源消耗的生活方式,資源與環境的限制終將反噬。當 1 到 n 的擴張撞牆,只有 0 到 1 的新科技能拆牆——所以就算你只在乎全球化,科技仍然至關重要。"
      }
     }
    ]
   },
   {
    "id": "problems-of-0-to-1",
    "heading": {
     "en": "3. Why 0 to 1 Is So Hard",
     "zh": "3. 為什麼從 0 到 1 這麼難"
    },
    "summary": {
     "en": "Doing something new forces the 'am I sane?' question, can't be learned by imitation, and demands a determinate view of the future that society dismisses as prophecy.",
     "zh": "做新的事會逼你自問「我是清醒還是瘋了?」,它無法靠模仿學會,還需要一種會被社會斥為先知妄語的決定論式未來觀。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Society defaults to 1 to n because copying is simply easier. Whoever attempts 0 to 1 faces the problem of exceptionalism: a founder claiming to do what no one has done must ask whether that is insight or delusion. Hollywood shows the dark side — roughly 20,000 people move to Los Angeles each year convinced they will become stars, and almost none do. Startups suffer this less than Hollywood, but not zero.",
       "zh": "社會預設走 1 到 n,因為複製就是比較容易。而嘗試 0 到 1 的人得面對例外主義(exceptionalism)的難題:宣稱要做沒人做過的事的創辦人,必須自問這是洞見還是妄想。好萊塢是反面教材——每年約兩萬人搬到洛杉磯,深信自己會成為明星,幾乎沒有人成功。新創受這個問題困擾的程度比好萊塢輕,但絕不是零。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Education can't fix this, because education is 1 to n at its core: watch, imitate, repeat. Learnable mechanics — incorporating properly, pitching VCs — get you maybe 30% of the way; the decisive leap can't be taught. That is also why business-school case studies mislead: successful companies each solved the 0-to-1 problem in their own unrepeatable way.",
       "zh": "教育解決不了這件事,因為教育本質上就是 1 到 n:觀察、模仿、重複。可以學的技術面——正確設立公司、向創投簡報——大概只能帶你走三成的路,關鍵的一躍是教不來的。這也是商學院個案教學誤導人的原因:每家成功的公司,都是用無法複製的方式各自解開了 0 到 1 的問題。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "All failed companies are the same; they botched the 0 to 1 problem.",
       "zh": "所有失敗的公司都一樣:它們都搞砸了從 0 到 1 的問題。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "New things also break statistics: with a sample size of one, the standard deviation is infinite, so probabilistic thinking has nothing to grip. The alternative is calculus-style determinism — Apollo engineers computed exactly where the moon would be. But our society calls people who claim to know the future prophets, and treats all prophets as false; Steve Jobs walked that line about as closely as anyone can.",
       "zh": "新事物也讓統計失靈:樣本數只有 1 時,標準差是無限大,機率式思考根本無從著力。另一條路是微積分式的決定論——阿波羅計畫(Apollo)的工程師是精確算出月球會在哪裡。但我們的社會把宣稱知道未來的人叫做先知,而且認定所有先知都是假先知;Steve Jobs 大概是把這條線踩得最貼、也因此成功的人。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "No one would want to ride in a statistically, probabilistically-informed spaceship.",
       "zh": "沒有人會想搭一艘靠統計和機率打造出來的太空船。"
      }
     }
    ]
   },
   {
    "id": "four-futures",
    "heading": {
     "en": "4. Four Theories of the Future",
     "zh": "4. 關於未來的四種理論"
    },
    "summary": {
     "en": "Intensive progress could level off, cycle, destroy us, or accelerate into a singularity — and people bet on the wrong ones.",
     "zh": "密集進步可能趨於平緩、循環往復、走向毀滅,或加速衝向奇點——而人們押錯了邊。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Where does vertical progress go from here? Thiel sketches four candidate trajectories.",
       "zh": "垂直進步接下來會怎麼走?Thiel 勾勒出四種可能的軌跡。"
      }
     },
     {
      "type": "cards",
      "items": [
       {
        "title": {
         "en": "Convergence",
         "zh": "趨同(Convergence)"
        },
        "body": {
         "en": "Growth took off with industrialization but will slow and flatten toward an asymptote.",
         "zh": "成長隨工業化起飛,但終將放緩,逼近一條漸近線。"
        }
       },
       {
        "title": {
         "en": "Cyclical",
         "zh": "循環(Cyclical)"
        },
        "body": {
         "en": "Progress advances and retrenches forever. True for most of history, but implausible now — accumulated knowledge won't simply be lost and relearned.",
         "zh": "進步不斷前進又倒退。這符合大部分的人類歷史,但現在已不太可能——累積的知識不會就這樣消失再重學一次。"
        }
       },
       {
        "title": {
         "en": "Collapse",
         "zh": "毀滅(Collapse)"
        },
        "body": {
         "en": "Some technological advance ends up destroying civilization.",
         "zh": "某項科技進展最終反噬,摧毀文明。"
        }
       },
       {
        "title": {
         "en": "Singularity",
         "zh": "奇點(Singularity)"
        },
        "body": {
         "en": "Technology accelerates toward an event horizon — an AI, say — beyond which prediction breaks down.",
         "zh": "科技加速衝向一個事件視界(例如 AI),越過之後一切預測都失效。"
        }
       }
      ]
     },
     {
      "type": "p",
      "text": {
       "en": "Thiel's bet: people overestimate the convergence and cyclical theories, and correspondingly underestimate collapse and singularity.",
       "zh": "Thiel 的判斷是:人們高估了趨同與循環理論,也就相應低估了毀滅與奇點的可能性。"
      }
     }
    ]
   },
   {
    "id": "why-companies-why-startups",
    "heading": {
     "en": "5. Why Companies — and Why Startups",
     "zh": "5. 為什麼是公司——又為什麼是新創"
    },
    "summary": {
     "en": "Firm size is set by the trade-off between internal and external coordination costs, and only small, mission-driven teams can do 0-to-1 work.",
     "zh": "公司規模由內部與外部協調成本的取捨決定,而只有小而有使命感的團隊做得了 0 到 1 的工作。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Why organize technological work in companies at all? The Coase Theorem answers: firms exist where internal and external coordination costs balance. A totalitarian state has near-zero external coordination costs — it just commands — but its internal costs are crippling, which is why central planning fails, as Hayek and the Austrian School showed. A lone contractor has zero internal costs but must negotiate every single relationship. Firms settle at the optimum in between.",
       "zh": "為什麼科技工作要用公司來組織?寇斯定理(Coase Theorem)給了答案:公司存在於內部與外部協調成本平衡的地方。極權政府的外部協調成本趨近於零——下命令就好——但內部成本高到癱瘓,這正是中央計畫失敗的原因,海耶克(Hayek)與奧地利學派早已論證過。獨立接案者則相反,內部成本為零,卻得逐一談判每段合作關係。公司就落在兩者之間的最適點。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Past about 100 employees the character of a firm changes: people no longer all know each other, politics arrive, and signaling that work is being done starts to beat doing it. Multi-floor or multi-city offices, hired consultants, and outsourced key engineering are red flags investors take seriously. Path capping friends at 150 — echoing ancient tribal sizes — points to the same natural limit. Startups matter precisely because they are small enough to escape these costs.",
       "zh": "員工數超過大約 100 人之後,公司的性質就變了:成員不再彼此認識,辦公室政治登場,「表現出有在做事」開始比「真的把事做完」更重要。跨樓層、跨城市的辦公室、聘請顧問、把關鍵開發外包,都是投資人非常在意的警訊。Path 把好友數上限設在 150 人——呼應遠古部落的規模——指向同一個自然極限。新創的價值正在於它小到能躲開這些成本。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "The negative reason to found: you simply can't build new technology inside big companies, governments, or nonprofits — their bureaucracies can neither pay people right nor give them real recognition.",
        "Money is a weak motive: the class cited research that happiness stops tracking income around $70,000 a year.",
        "Fame is a dubious motive; wanting to change the world is a better one — the American founding in 1776 was itself a kind of startup."
       ],
       "zh": [
        "創業的反面理由:在大公司、政府或非營利組織裡就是做不出新科技——官僚體制既給不出對的報酬,也給不了真正的肯定。",
        "為錢是薄弱的動機:課堂引用的研究指出,年收入約 7 萬美元之後,幸福感就不再隨收入增加。",
        "為名聲也很可疑;想改變世界才是更好的動機——1776 年的美國建國本身就是一場新創。"
       ]
      }
     },
     {
      "type": "p",
      "text": {
       "en": "The costs of failing are misread. The financial hit is smaller than people assume; the real damage is nonfinancial — a failed startup may teach you nothing except how to fail, and leave you more risk-averse. A failed 0-to-1 attempt at least teaches you a great deal; a failed clone — 'Groupon for Madagascar' — leaves you nowhere. And since people are not lottery tickets, 'just try again' is not a strategy.",
       "zh": "失敗的代價常被誤讀。金錢損失比一般想像的小;真正的傷害是非金錢的——一次失敗的新創可能什麼都沒教你,只教會你怎麼失敗,還讓你變得更害怕風險。挑戰 0 到 1 而失敗,至少能學到很多;複製品失敗——像「馬達加斯加版 Groupon」——你會不知道自己身在何處。而且人不是樂透彩券,「再試一次就好」並不是策略。"
      }
     }
    ]
   },
   {
    "id": "where-to-start",
    "heading": {
     "en": "6. Where to Start: Three Questions",
     "zh": "6. 從哪裡開始:三個問題"
    },
    "summary": {
     "en": "Start where value, your own ability, and everyone else's neglect intersect — then verify your answer is genuinely contrarian.",
     "zh": "從價值、你的能力與眾人忽視的交會點出發,再驗證你的答案是否真的違背共識。"
    },
    "blocks": [
     {
      "type": "ul",
      "items": {
       "en": [
        "What is valuable?",
        "What can I do?",
        "What is nobody else doing?"
       ],
       "zh": [
        "什麼是有價值的?",
        "我能做什麼?",
        "有什麼是沒有人在做的?"
       ]
      }
     },
     {
      "type": "p",
      "text": {
       "en": "The first question separates business from academia: academia's cardinal sin is plagiarism, not triviality, so much of its output is esoteric and useless — but no company survives on non-valuable work. The second demands real capability, not talk. The third, the most often overlooked, guards against slipping back into copying.",
       "zh": "第一個問題劃開了商業與學術:學術界的大罪是抄襲而不是瑣碎,所以許多研究艱澀卻無用——但公司無法靠沒有價值的工作存活。第二個問題要求真實的執行力,而不是空談。第三個問題最常被忽略,它防止你不知不覺退回複製模式。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "What important truth do very few people agree with you on?",
       "zh": "有什麼重要的真相,是很少人同意你的?"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "The business version asks: what valuable company is nobody building? The test is disagreement itself. 'Our education system is broken' fails — not because it's false, but because everyone already agrees, which is why education startups crowd in, mostly running in globalization mode. A right answer has the shape 'most people believe X, but the truth is !X.' Finding one is rare and tricky, but the search itself is richly rewarding.",
       "zh": "商業版的問法是:有什麼有價值的公司,是沒有人在打造的?檢驗標準就是「是否違背共識」。「我們的教育體系壞掉了」之所以不及格,不是因為它是錯的,而是因為大家早就同意——所以教育新創才會擠成一團,而且多半在跑全球化模式。正確答案的形狀是:「多數人相信 X,但真相是 !X」。找到一個真答案極其罕見也極其困難,但追尋本身就值回票價。"
      }
     }
    ]
   }
  ],
  "factcheck": [
   {
    "claim": {
     "en": "The class cited research that happiness rises with income only up to about $70,000 a year, as evidence that money is a poor reason to do a startup.",
     "zh": "課堂引用研究指出,年收入約 7 萬美元之後幸福感就不再隨收入上升,以此說明為錢創業不是好理由。"
    },
    "now": {
     "en": "A 2023 adversarial collaboration between Killingsworth and Kahneman (PNAS) largely overturned the plateau: for most people happiness keeps rising well past $100,000; only an unhappy minority flattens out.",
     "zh": "2023 年 Killingsworth 與 Kahneman 的對抗式合作研究(發表於 PNAS)大幅推翻了這個「天花板」:對多數人而言,幸福感在超過 10 萬美元後仍持續上升;只有不快樂的少數人會趨於平緩。"
    },
    "sourceTitle": "PNAS: Income and emotional well-being: A conflict resolved (2023)",
    "sourceUrl": "https://www.pnas.org/doi/abs/10.1073/pnas.2208661120"
   },
   {
    "claim": {
     "en": "The essay pointed to Path capping users at 150 friends as evidence of natural limits on group coordination.",
     "zh": "文中以 Path 將好友數上限設為 150 人,作為群體協調有自然極限的例證。"
    },
    "now": {
     "en": "Path later raised and then removed the cap, never seriously challenged Facebook, and shut down for good on October 18, 2018.",
     "zh": "Path 後來調高並取消了上限,始終未能真正挑戰 Facebook,最終於 2018 年 10 月 18 日永久關閉。"
    },
    "sourceTitle": "TechCrunch: RIP Path (2018)",
    "sourceUrl": "https://techcrunch.com/2018/09/17/rip-path/"
   }
  ],
  "quiz": [
   {
    "q": {
     "en": "In Thiel's framing, what is the one-word synonym for horizontal (extensive) progress?",
     "zh": "在 Thiel 的架構裡,水平(廣度)進步用一個詞來說是什麼?"
    },
    "options": [
     {
      "en": "Technology",
      "zh": "科技"
     },
     {
      "en": "Globalization",
      "zh": "全球化"
     },
     {
      "en": "Disruption",
      "zh": "顛覆"
     },
     {
      "en": "Optimization",
      "zh": "最佳化"
     }
    ],
    "answer": 1,
    "explain": {
     "en": "Horizontal progress means copying things that work — going from 1 to n — which is exactly what globalization is. Doing new things, 0 to 1, is what Thiel reserves the word 'technology' for.",
     "zh": "水平進步是複製已經可行的東西——從 1 到 n——這正是全球化的定義。做新的事、從 0 到 1,Thiel 才稱之為「科技」。"
    }
   },
   {
    "q": {
     "en": "Why does Thiel argue that statistical thinking cannot guide a 0-to-1 venture?",
     "zh": "為什麼 Thiel 認為統計思維無法指引一個 0 到 1 的事業?"
    },
    "options": [
     {
      "en": "Because startups rarely gather enough user data in their first year",
      "zh": "因為新創公司第一年通常收集不到足夠的使用者資料"
     },
     {
      "en": "Because markets are perfectly efficient, so no analysis of any kind helps",
      "zh": "因為市場完全有效率,任何分析都沒有用"
     },
     {
      "en": "Because something genuinely new has a sample size of one, so there is no distribution to reason from — you need determinate, calculus-style planning",
      "zh": "因為真正的新事物樣本數只有 1,沒有任何分布可以推論——你需要決定論式、如微積分般的規劃"
     },
     {
      "en": "Because probability theory only applies to public companies with long track records",
      "zh": "因為機率理論只適用於有長期紀錄的上市公司"
     }
    ],
    "answer": 2,
    "explain": {
     "en": "With n = 1 the standard deviation is infinite: there is no reference class for a genuinely new thing. Thiel's alternative is Apollo-style determinate calculation — new ventures must be reasoned out, not treated as lottery tickets.",
     "zh": "當樣本數 n = 1,標準差是無限大:真正的新事物沒有可參照的母體。Thiel 提出的替代方案是阿波羅式的精確計算——新事業必須被推算出來,而不是被當成樂透彩券。"
    }
   },
   {
    "q": {
     "en": "According to the Coase framework in this class, what determines the size at which firms settle?",
     "zh": "根據本課的寇斯定理框架,是什麼決定了公司最終停在什麼規模?"
    },
    "options": [
     {
      "en": "The balance point between internal coordination costs and external coordination costs",
      "zh": "內部協調成本與外部協調成本的平衡點"
     },
     {
      "en": "The amount of venture capital available in their market",
      "zh": "市場上可取得的創投資金多寡"
     },
     {
      "en": "Government regulation and tax policy",
      "zh": "政府法規與稅收政策"
     },
     {
      "en": "Whether the firm has reached 150 employees, the universal natural limit",
      "zh": "公司是否達到 150 人這個普世的自然上限"
     }
    ],
    "answer": 0,
    "explain": {
     "en": "Growing bigger makes external dealings cheaper but internal politics costlier; shrinking does the reverse. The 150 figure (Path's friend cap, tribal sizes) illustrates natural coordination limits, but the general principle is the cost trade-off, not a fixed number.",
     "zh": "組織變大,對外交易變便宜,但內部政治成本上升;變小則相反。150 這個數字(Path 的好友上限、部落規模)只是自然協調極限的例證,一般原則是成本取捨,而不是某個固定數字。"
    }
   }
  ]
 },
 {
  "slug": "class-2",
  "layout": "lesson",
  "icon": "menu_book",
  "navLabel": "2",
  "classNo": 2,
  "sourceUrl": "https://blakemasters.tumblr.com/post/20582845717/peter-thiels-cs183-startup-class-2-notes-essay",
  "title": {
   "en": "Party Like It's 1999?",
   "zh": "像 1999 年那樣狂歡?"
  },
  "subtitle": {
   "en": "The dot-com mania lasted just 18 months — and most lessons drawn from it were overreactions.",
   "zh": "網路狂熱其實只有 18 個月,而世人從中學到的教訓大多是過度反應。"
  },
  "objectives": [
   {
    "en": "Trace how the gloomy early 1990s and a chain of global crises funneled the world's money into tech by late 1998.",
    "zh": "說出 1990 年代初的低迷與一連串全球危機,如何在 1998 年底把全世界的資金推向科技業。"
   },
   {
    "en": "Retell the 18-month dot-com mania — including PayPal's ride through it — with the key numbers and turning points.",
    "zh": "用關鍵數字與轉折點,重述那 18 個月的網路狂熱(dot-com mania),包括 PayPal 一路的驚險歷程。"
   },
   {
    "en": "List the seven lessons Silicon Valley drew from the crash and judge which ones were overreactions.",
    "zh": "列出矽谷從崩盤中學到的七條教訓,並判斷哪些其實是過度反應。"
   },
   {
    "en": "Apply Thiel's definition of a bubble and explain why 'is there a bubble?' is usually the wrong question.",
    "zh": "運用 Thiel 對泡沫(bubble)的定義,說明為什麼「現在有沒有泡沫?」通常是問錯了問題。"
   }
  ],
  "sections": [
   {
    "id": "late-to-the-party",
    "heading": {
     "en": "1. Late to the Party",
     "zh": "1. 錯過那場派對"
    },
    "summary": {
     "en": "You cannot reason well about startups today without a visceral grasp of what happened in the late 1990s.",
     "zh": "若沒有親身體會過 1990 年代末發生了什麼,就很難真正想清楚今天的新創。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Thiel opens with a generational point: someone who was a toddler in 1969 can read about civil rights and Vietnam, but never truly feels those debates the way people who lived them do. The 1990s play the same role for technology. Students in 2012 were children during the boom, yet the entire landscape they operate in — which ideas get funded, which behaviors are taboo — was cast in that fire. So before asking whether startups make sense now, you have to reconstruct what the decade actually felt like.",
       "zh": "Thiel 從世代差異談起:1969 年還在學步的孩子,長大後可以讀到民權運動與越戰的資料,卻永遠無法像親歷者那樣切身感受那些論戰。1990 年代之於科技,正是同樣的角色。2012 年的學生在網路熱潮時還是小孩,但他們如今身處的整個環境——哪些點子拿得到錢、哪些行為成了禁忌——都是在那場大火中鑄成的。所以在問「現在做新創合不合理」之前,得先重建那個年代真實的感受。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "It is questionable whether one can really understand startups without, say, knowing about Webvan or recognizing the Pets.com mascot.",
       "zh": "如果你不知道 Webvan、認不出 Pets.com 的吉祥物,你是否真能理解新創,恐怕要打上問號。"
      }
     }
    ]
   },
   {
    "id": "quick-history-90s",
    "heading": {
     "en": "2. A Quick History of the '90s",
     "zh": "2. 九〇年代速覽"
    },
    "summary": {
     "en": "The decade remembered as one long boom was mostly gloom; a chain of global failures eliminated every alternative until tech became the last investment standing.",
     "zh": "被記成一路榮景的十年,其實大半在低迷中度過;一連串全球性挫敗把其他選項逐一淘汰,科技成了資金最後的去處。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "The euphoria after the Berlin Wall fell in November 1989 was brief. From 1990 to about 1994 the U.S. slogged through recession: manufacturing kept declining, the shift to a service economy was slow and painful, and the culture turned pessimistic — think Nirvana and grunge. Ross Perot mounted a serious third-party run, and George H.W. Bush became a one-term president. In the late 1980s, Japan looked set to dominate semiconductors, and even at Stanford the tech world felt distant.",
       "zh": "1989 年 11 月柏林圍牆倒下後的興奮很短暫。1990 到約 1994 年,美國深陷衰退:製造業持續萎縮,轉向服務業經濟的過程緩慢而痛苦,文化氛圍轉為悲觀——想想 Nirvana 與 grunge 音樂。Ross Perot 以第三勢力之姿認真角逐總統,George H.W. Bush 則成了一任總統。1980 年代末,日本眼看要稱霸半導體;連在 Stanford,科技圈都顯得遙遠。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "The Internet changed the mood. Xanadu had imagined a two-way network between all computers back in 1963, but it needed everyone to adopt it at once; it raised venture money for some 29 years without shipping and finally died in 1992. Netscape arrived in 1993 with a workable server-client model, and its August 1995 IPO woke the public up: priced at $14, doubled before trading, doubled again on day one, and hit $160 within five months — for an unprofitable company. Hubris followed: Netscape taunted Microsoft on its own campus, Bill Gates threw the company at the Internet, IE ate Netscape's share, and the pioneer ultimately sold to AOL for over a billion dollars largely on the value of its antitrust claims. The next three years were quiet: by late 1998 the NASDAQ sat near 1,400, only 400 points above August 1995. Yahoo went public in 1996 at a $350M valuation, Amazon in 1997 at $460M, and skeptics scoffed at the multiples.",
       "zh": "網際網路改變了氣氛。Xanadu 早在 1963 年就構想出所有電腦之間的雙向網路,但它需要所有人同時採用才能運作;這家公司募了大約 29 年的創投資金卻始終沒做出東西,1992 年終於倒閉。Netscape 在 1993 年帶著可行的伺服器—用戶端(server-client)架構登場,1995 年 8 月的 IPO 才真正喚醒大眾:定價 14 美元,掛牌前先翻倍,上市首日再翻倍,五個月內衝上 160 美元——而這是一家還不賺錢的公司。接著是傲慢:Netscape 跑到 Microsoft 園區裡貼海報挑釁,Bill Gates 下令全公司撲向網路,IE 蠶食了 Netscape 的市占,這位先驅最後主要靠反壟斷訴訟請求權的價值,以超過十億美元賣給 AOL。之後三年相對平靜:到 1998 年底,NASDAQ 只在 1,400 點附近,比 1995 年 8 月僅高出 400 點。Yahoo 於 1996 年以 3.5 億美元估值上市,Amazon 於 1997 年以 4.6 億美元估值跟進,懷疑者則對這些本益比嗤之以鼻。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "December 1996: Alan Greenspan warns of 'irrational exuberance' — roughly three years early.",
        "1997: The East Asian financial crisis flattens Thailand, Indonesia, South Korea, and Taiwan.",
        "1998: Russia's ruble crisis, then the leveraged collapse of Long-Term Capital Management, contained only by a Fed-orchestrated bailout.",
        "January 1999: The euro launches to immediate skepticism and promptly loses value."
       ],
       "zh": [
        "1996 年 12 月:Alan Greenspan 警告市場「非理性繁榮」(irrational exuberance)——大約早了三年。",
        "1997 年:東亞金融風暴重創泰國、印尼、南韓與台灣。",
        "1998 年:俄羅斯盧布危機,接著是高槓桿的 Long-Term Capital Management 崩潰,靠 Fed 出面協調紓困才沒有引爆系統性危機。",
        "1999 年 1 月:歐元上路即遭質疑,隨後應聲貶值。"
       ]
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Put together, the mania was a proof by elimination. The old economy could not compete with cheap labor in Mexico and China. Emerging markets had just revealed themselves as crony capitalism. Europe inspired little confidence, and after LTCM nobody trusted leverage. With every alternative discredited, money defaulted into the one thing left: technology.",
       "zh": "拼起來看,這場狂熱其實是一種「排除法證明」。舊經濟拚不過墨西哥與中國的廉價勞力;新興市場剛剛暴露出裙帶資本主義的本質;歐洲令人難有信心;LTCM 之後也沒人敢信槓桿。當所有替代選項都信譽掃地,資金便自動流向僅存的那一項:科技。"
      }
     }
    ]
   },
   {
    "id": "the-mania",
    "heading": {
     "en": "3. The Mania: September 1998 – March 2000",
     "zh": "3. 狂熱期:1998 年 9 月至 2000 年 3 月"
    },
    "summary": {
     "en": "The real frenzy lasted only 18 months — parties ranked by email, negative-margin business models, instant paper billionaires — and PayPal was born right in the middle of it.",
     "zh": "真正的瘋狂只有 18 個月——用 email 排名的發表派對、賣一單賠一單的商業模式、一夕誕生的帳面億萬富翁——而 PayPal 正是在這風暴中心誕生的。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "The dot-com mania was intense but shorter than people remember: roughly September 1998 to March 2000. Money was everywhere, and so were sketchy operators. Launch parties happened nightly, ranked by an exclusive email list. Forty-year-old grad students ran multiple dubious companies at once; a billionaire from Idaho handed capital to anyone with a polished pitch; broke founders picked up thousand-dollar dinner tabs and paid in shares. Business models went negative-margin — losing money on every customer while vowing to make it up in volume — and merely adding '.com' to a name could roughly double a company's value. Yahoo, by then the Valley's largest Internet company, justified stock-for-stock acquisitions with the claim that its stock only went up.",
       "zh": "網路狂熱很猛烈,但比人們記憶中短:大約從 1998 年 9 月到 2000 年 3 月。錢到處都是,可疑人物也是。發表派對夜夜上演,還有專屬 email 名單為派對排名。四十歲的研究生同時經營好幾家不知所云的公司;一位來自 Idaho 的億萬富翁把資金發給任何簡報夠漂亮的人;身無分文的創辦人搶著買單上千美元的晚餐,然後用公司股票付帳。商業模式做成負毛利——每多一個客戶就多賠一筆,還發誓要「靠量賺回來」;公司名稱只要加上「.com」,估值大概就能翻倍。當時已是矽谷最大網路公司的 Yahoo,則用「我們的股票只漲不跌」來合理化換股收購。"
      }
     },
     {
      "type": "cards",
      "items": [
       {
        "title": {
         "en": "VA Linux: a billion for a day",
         "zh": "VA Linux:一日億萬富翁"
        },
        "body": {
         "en": "Larry Augustin nearly shut VA Linux in 1997 but kept going. Its 1999 IPO priced at $30, traded up to $300 the same day — the biggest first-day pop ever — making his 10% stake worth about $1 billion. By the end of the lock-up six months later the stock had lost 90%, then another 90% over the next six. He walked away with $5–6 million. He had also once declined to be Yahoo's third employee.",
         "zh": "Larry Augustin 在 1997 年差點收掉 VA Linux,但撐了下來。1999 年 IPO 定價 30 美元,當天就衝上 300 美元——史上首日漲幅最大——他手上 10% 的持股一日之間價值約 10 億美元。六個月後閉鎖期一到,股價跌掉九成,接下來六個月再跌九成。他最後拿到 500 到 600 萬美元。他當年還曾婉拒成為 Yahoo 的第三號員工。"
        }
       },
       {
        "title": {
         "en": "The aura test",
         "zh": "氣場測試(aura test)"
        },
        "body": {
         "en": "With sketchy people everywhere, Max Levchin developed a filter: size up anyone pitching you within about 15 seconds, and if the aura is off, walk away. Crude, but companies that screened hard survived the flood of bad actors better than those that did not.",
         "zh": "可疑人物滿街跑,Max Levchin 因此發展出一套過濾法:任何人向你推銷,15 秒內判斷對方氣場;不對勁就掉頭走人。方法粗糙,但嚴格篩選的公司,比不篩選的更能在騙子橫行中存活。"
        }
       },
       {
        "title": {
         "en": "Negative-margin economics",
         "zh": "負毛利經濟學"
        },
        "body": {
         "en": "The era's signature absurdity: business models that lost more per customer than they earned, like a bank paying more to sort $100 in pennies than the deposit is worth. Growth metrics masked the fact that scaling only scaled the losses.",
         "zh": "那個年代的招牌荒謬:每個客戶帶來的虧損比營收還多,就像銀行為了清點 100 美元的零錢,花的成本比存款本身還高。漂亮的成長數字掩蓋了一件事:規模做大,虧損也跟著等比放大。"
        }
       }
      ]
     },
     {
      "type": "h3",
      "text": {
       "en": "PayPal's wild ride",
       "zh": "PayPal 的驚險之旅"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "PayPal started in December 1998 and deliberately hired only friends — a defense against the era's sketchy talent pool. The original idea, beaming money between Palm Pilots, was voted one of the ten worst business ideas of 1999. Angel investors barely cared what the product was; one asked only who else was investing, then reportedly consulted a fortune cookie. Nokia Ventures put in $4.5 million, and at the very first board meeting after the investment, the team announced a pivot: mobile infrastructure was years away, so PayPal became an account system for emailing money to anyone.",
       "zh": "PayPal 創立於 1998 年 12 月,而且刻意只僱用朋友——這是對那個年代滿街可疑人才的防禦。最初的點子是用 Palm Pilot 互相「發射」金錢,被票選為 1999 年十大最爛商業點子之一。天使投資人根本不在乎產品是什麼;有人只問還有誰要投,然後據說拆了張幸運籤餅來做決定。Nokia Ventures 投了 450 萬美元,而在投資後的第一次董事會上,團隊就宣布轉向(pivot):行動網路基礎設施還要好幾年才會成熟,於是 PayPal 改做帳戶系統,讓任何人都能透過 email 收付款。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Growth was the next crisis. Advertising was too expensive and business development with big banks went nowhere — a meeting Luke Nosek arranged with HSBC executives convinced the team BD was hopeless. So PayPal bought virality directly: $10 for signing up, $10 per referral. The user base grew 7–10% per day, but each customer cost about $20 and revenue was zero, so costs grew exponentially too. The company needed buzz to raise more money to keep going. A flattering Wall Street Journal piece on February 16, 2000 tossed off a back-of-envelope $500M valuation; the lead investor in the next round treated that number as authoritative. A South Korean firm wired $5 million without documents or negotiation and refused every attempt to return it. PayPal closed $100 million on March 31, 2000 — days after the market peaked. The luck of that timing funded its survival; Thiel notes this worked, but is hardly a recommended way to run a company.",
       "zh": "接下來的危機是成長。打廣告太貴,和大銀行談商務開發(BD)也毫無進展——Luke Nosek 安排的一場 HSBC 高層會議,讓團隊徹底認清 BD 此路不通。於是 PayPal 直接花錢買病毒式擴散:註冊送 10 美元,推薦一人再送 10 美元。用戶數以每天 7–10% 的速度成長,但每位客戶的取得成本約 20 美元、營收掛零,成本同樣呈指數成長。公司需要話題熱度,才能募到下一輪資金活下去。2000 年 2 月 16 日,Wall Street Journal 一篇讚譽有加的報導隨手估了個 5 億美元的粗略估值;下一輪的領投方竟把這個數字當成權威依據。一家南韓公司沒簽任何文件、沒談任何條件就電匯了 500 萬美元進來,PayPal 想退還,對方說什麼都不收。2000 年 3 月 31 日,PayPal 完成 1 億美元募資——就在市場觸頂後幾天。這份運氣換來了活下去的本錢;不過 Thiel 也說,這雖然行得通,卻絕不是經營公司的推薦方式。"
      }
     }
    ]
   },
   {
    "id": "hubris-schadenfreude",
    "heading": {
     "en": "4. Hubris and Schadenfreude",
     "zh": "4. 傲慢與幸災樂禍"
    },
    "summary": {
     "en": "The crash rolled through sector by sector, hubris flipped into schadenfreude, and PayPal was publicly mocked on its way to a post-9/11 IPO.",
     "zh": "崩盤逐一輾過各個產業,傲慢翻轉成幸災樂禍;而 PayPal 一路被公開嘲諷,直到 911 之後率先申請上市。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Prince's song turned out to be literal: the party ended right on schedule. In the first half of 2000, marketing-driven e-commerce companies died; in the second half, the B2B companies followed; in 2001, telecom collapsed. Thiel adds a telling inversion: in March 2000, arguably the single most depressed sector was military defense — with the NASDAQ soaring, nobody believed there would ever be another war — and defense then rose for most of the following decade. Peak optimism about one future was peak blindness about another.",
       "zh": "Prince 那首歌一語成讖:派對準時散場。2000 年上半年,靠行銷驅動的電商公司先倒;下半年輪到 B2B 公司;2001 年,電信業全面崩塌。Thiel 補了一個耐人尋味的反轉:2000 年 3 月,全市場最低迷的產業大概是國防軍工——NASDAQ 一路狂飆,沒有人相信世上還會有戰爭——結果國防類股在接下來近十年裡持續上漲。對某一種未來的樂觀頂點,正是對另一種未來的盲目頂點。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Culturally, enormous hubris gave way to schadenfreude: the skeptics declared they had been right all along, and the mood curdled into depression. PayPal, meanwhile, ground its way to breakeven in 2001 by solving fraud and customer service, and in late September 2001 became the first company to file for an IPO after 9/11. Twenty months after the rosy profile, the Wall Street Journal ran a piece titled 'Earth to Palo Alto,' sneering at a three-year-old company that had never turned an annual profit, was on track to lose a quarter billion dollars, and whose own filings warned of fraud and money-laundering risks — yet whose managers and VCs were taking it public. The kicker was brutal.",
       "zh": "文化上,巨大的傲慢讓位給幸災樂禍(schadenfreude):懷疑論者宣稱自己從頭到尾都是對的,整體氛圍隨之陷入陰鬱。與此同時,PayPal 靠著解決詐欺與客服問題,在 2001 年硬是做到損益兩平,並在 2001 年 9 月底成為 911 之後第一家申請 IPO 的公司。距離那篇美言報導才 20 個月,Wall Street Journal 又刊出一篇題為「Earth to Palo Alto」的文章,冷嘲一家成立三年、從未有過年度獲利、正朝著虧損 2.5 億美元邁進、自家申報文件還警告詐欺與洗錢風險的公司——而它的經營層和創投竟然要把它送上市。文末那句話尤其狠毒。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "The U.S. needs [PayPal] as much as it does an anthrax epidemic.",
       "zh": "美國需要 PayPal 的程度,就跟需要一場炭疽疫情差不多。"
      }
     }
    ]
   },
   {
    "id": "lessons-learned",
    "heading": {
     "en": "5. Lessons Learned — and Overlearned",
     "zh": "5. 學到的教訓——與矯枉過正"
    },
    "summary": {
     "en": "The world and Silicon Valley drew opposite but equally emotional lessons from the crash; Thiel argues most are overreactions, because March 2000 was a peak of clarity as well as insanity.",
     "zh": "崩盤後,世界與矽谷各自學到方向相反、卻同樣情緒化的教訓;Thiel 認為多數是過度反應,因為 2000 年 3 月既是瘋狂的頂點,也是清醒的頂點。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "The world's post-2000 narrative: the bubble was pure destruction, so return to the real economy — 'bricks and clicks' became clicks going back to bricks. Money rotated into housing and emerging markets; Warren Buffett's old-economy stance looked vindicated; only profits could justify valuations; globalization beat technology; the future was declared fundamentally unknowable, all prophets false, all claims suspect. Thiel's critique is that these lessons were driven by hubris, envy, and resentment — emotions that make for bad analysis. People in the 1990s were right about a great deal: the euro really was shaky, crony capitalism and overleverage really were problems, and the grand belief in technology was directionally sound even when the prices were insane.",
       "zh": "2000 年後世界的主流敘事是:泡沫純屬破壞,所以要回歸實體經濟——「從實體到網路」倒轉成「從網路退回實體」。資金轉進房地產與新興市場;Warren Buffett 的舊經濟路線看似獲得平反;估值只認獲利;全球化壓過科技;未來被宣告本質上不可知,所有先知都是假先知,所有主張都值得懷疑。Thiel 的批評是:這些教訓出自傲慢、嫉妒與怨恨——被這些情緒驅動的分析注定失準。1990 年代的人其實看對了很多事:歐元真的體質不穩,裙帶資本主義與過度槓桿真的是問題;而對科技的宏大信念,即使價格瘋狂,方向上仍是對的。"
      }
     },
     {
      "type": "table",
      "head": {
       "en": [
        "Silicon Valley's post-crash dogma",
        "Thiel's caveat"
       ],
       "zh": [
        "矽谷崩盤後的信條",
        "Thiel 的保留意見"
       ]
      },
      "rows": [
       {
        "en": [
         "Incrementalism: grand visions and moving fast are suspect",
         "Caution became a reflex; boldness was never actually refuted"
        ],
        "zh": [
         "漸進主義:宏大願景與快速行動都可疑",
         "謹慎成了反射動作;大膽從未真正被證明是錯的"
        ]
       },
       {
        "en": [
         "Stay lean: don't commit to a plan, experiment and iterate",
         "Leanness is a means, not an end — it can excuse having no plan at all"
        ],
        "zh": [
         "保持精實(lean):別押定計畫,不斷實驗與迭代",
         "精實是手段而非目的——它可能變成完全沒有計畫的藉口"
        ]
       },
       {
        "en": [
         "Never advertise: only viral, organic growth is real",
         "Paid channels sometimes work; 'never' is dogma, not analysis"
        ],
        "zh": [
         "絕不打廣告:只有病毒式、自然成長才算數",
         "付費通路有時確實有效;「絕不」是教條,不是分析"
        ]
       },
       {
        "en": [
         "Anti-social products: machines over human interaction",
         "A mood of cultural withdrawal, not a law of product design"
        ],
        "zh": [
         "反社交的產品:寧可面對機器,不面對人",
         "那是文化性退縮的情緒,不是產品設計的定律"
        ]
       },
       {
        "en": [
         "Product people over salespeople; business development is out",
         "Should a company really never do sales or BD? Unlikely"
        ],
        "zh": [
         "產品人凌駕業務人;商務開發(BD)退流行",
         "一家公司真的永遠不該做業務或 BD 嗎?恐怕不是"
        ]
       },
       {
        "en": [
         "Delay monetization and IPO; grow quietly for years",
         "Avoiding a hostile IPO window is sensible strategy, not religion"
        ],
        "zh": [
         "延後變現與上市,先安靜成長好幾年",
         "避開不友善的上市窗口是合理策略,但不該當成信仰"
        ]
       },
       {
        "en": [
         "Never talk about the future — visionaries sound crazy",
         "Refusing to discuss the future forfeits the whole point of technology"
        ],
        "zh": [
         "絕口不談未來——談願景的人像瘋子",
         "拒絕談未來,等於放棄了科技存在的意義"
        ]
       }
      ]
     },
     {
      "type": "quote",
      "text": {
       "en": "March of 2000 wasn't just a peak of insanity. In some important ways, it was still a peak of clarity as well.",
       "zh": "2000 年 3 月不只是瘋狂的頂點。在某些重要層面上,它同時也是清醒的頂點。"
      }
     }
    ]
   },
   {
    "id": "bubbles",
    "heading": {
     "en": "6. Bubbles: Are We in One?",
     "zh": "6. 泡沫:我們正身在其中嗎?"
    },
    "summary": {
     "en": "By Thiel's definition — widespread, intense belief that is false — 2012 is not a bubble; the useful move is to drop the debate and evaluate specific companies.",
     "zh": "依 Thiel 的定義——廣泛而強烈、卻不為真的信念——2012 年並非泡沫;真正有用的做法是放下這場辯論,直接評估個別公司的價值。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Is 2012 another bubble? There are frothy data points: more Stanford students studying computer science than in 1999, valuations creeping upward. But scattered froth does not make a bubble. A bubble requires two things: widespread, intense belief, and that belief being false. Thiel's diagnosis is that society in 2012 no longer intensely believes in much of anything — so the precondition fails. The insistent bubble narrative comes from people hunting for one, which is itself an overreaction to the pain of the 1990s rather than good analysis.",
       "zh": "2012 年是另一場泡沫嗎?確實有些冒泡的跡象:Stanford 讀資工的學生比 1999 年還多,估值也在悄悄上升。但零星的泡沫感並不構成泡沫。泡沫需要兩個條件:廣泛而強烈的信念,而且這個信念是錯的。Thiel 的診斷是:2012 年的社會已經不再對任何事物有強烈的信念——前提根本不成立。喋喋不休的泡沫論,出自那些一心想找泡沫的人;那本身是對 1990 年代創傷的過度反應,而不是嚴謹的分析。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "The tempting alternative — antibubble thinking, insisting everything will work and everyone should load up on houses and tech stocks — is probably somewhat closer to true, but Thiel rejects it too. Both positions make the same mistake: they treat truth as a social fact, something to be read off the crowd, whether by copying it or inverting it.",
       "zh": "另一個誘人的選項——反泡沫思維(antibubble thinking),堅稱一切都會成功、大家該加碼買房與科技股——或許稍微接近事實,但 Thiel 同樣拒絕。兩種立場犯的是同一個錯:把真理當成一種社會事實,以為可以從群眾身上讀出來——不管是照抄群眾,還是刻意反著做。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "If the herd isn't thinking at all, being contrarian—doing the opposite of the herd—is just as random and useless.",
       "zh": "如果群眾根本沒在思考,那麼所謂逆勢操作——跟群眾對著幹——也一樣隨機而無用。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "The genuinely contrarian move is to think for yourself. Instead of asking whether there is a bubble, ask: is this specific company valuable? Why? How would you actually figure that out? Those questions have answers you can work toward — and they set up the rest of the course.",
       "zh": "真正的逆向思考,是自己動腦。與其問「有沒有泡沫」,不如問:這家特定的公司有價值嗎?為什麼?你要怎麼實際驗證?這些問題有可以逐步逼近的答案——而它們正是這門課接下來要處理的主題。"
      }
     }
    ]
   }
  ],
  "factcheck": [
   {
    "claim": {
     "en": "In 2012 Thiel argued there was no tech bubble: bubbles need widespread, intense belief, and society had none — the bubble narrative was overreaction to the 1990s.",
     "zh": "2012 年 Thiel 主張當時沒有科技泡沫:泡沫需要廣泛而強烈的信念,而社會並不存在這種信念——泡沫論只是對 1990 年代的過度反應。"
    },
    "now": {
     "en": "He was largely vindicated: no dot-com-style collapse followed. The Nasdaq-100 returned 18.1% in 2012 and 36.6% in 2013 and compounded strongly for over a decade; even after a 32.6% drop in 2022, it rebounded 55% in 2023 and kept rising.",
     "zh": "他的判斷大致獲得驗證:之後並未出現網路泡沫式的崩盤。Nasdaq-100 在 2012 年上漲 18.1%、2013 年上漲 36.6%,並在其後十多年強勁複利成長;即使 2022 年下跌 32.6%,2023 年也反彈 55% 並持續走高。"
    },
    "sourceTitle": "Trade That Swing — Historical Average Returns for Nasdaq 100 Index (QQQ)",
    "sourceUrl": "https://tradethatswing.com/historical-average-returns-for-nasdaq-100-index-qqq/"
   },
   {
    "claim": {
     "en": "In late 2001 the Wall Street Journal's 'Earth to Palo Alto' piece mocked PayPal as a never-profitable three-year-old on track to lose $250M, needed 'as much as an anthrax epidemic.'",
     "zh": "2001 年底,Wall Street Journal 的「Earth to Palo Alto」一文嘲諷 PayPal 是一家從未獲利、即將虧損 2.5 億美元的三歲公司,美國需要它「就像需要一場炭疽疫情」。"
    },
    "now": {
     "en": "PayPal went public in February 2002, was acquired by eBay that October for $1.5 billion, and was spun off as an independent company in July 2015. It is now one of the world's largest payment platforms, with hundreds of millions of active accounts processing well over a trillion dollars a year.",
     "zh": "PayPal 於 2002 年 2 月上市,同年 10 月被 eBay 以 15 億美元收購,2015 年 7 月分拆為獨立公司。如今它是全球最大的支付平台之一,擁有數億活躍帳戶,每年處理超過一兆美元的金流。"
    },
    "sourceTitle": "Britannica Money — PayPal",
    "sourceUrl": "https://www.britannica.com/money/PayPal"
   }
  ],
  "quiz": [
   {
    "q": {
     "en": "On Thiel's account, why did the world's money flood into Internet stocks starting in late 1998?",
     "zh": "依照 Thiel 的說法,為什麼從 1998 年底開始,全世界的資金湧入網路股?"
    },
    "options": [
     {
      "en": "Internet companies had finally proven they could generate large profits",
      "zh": "網路公司終於證明自己能創造豐厚獲利"
     },
     {
      "en": "Every alternative — the old economy, emerging markets, Europe, leverage — had just failed, leaving tech as the default",
      "zh": "所有替代選項——舊經濟、新興市場、歐洲、槓桿——都剛剛失敗,科技成了預設去處"
     },
     {
      "en": "The Federal Reserve cut interest rates to zero after the LTCM collapse",
      "zh": "LTCM 崩潰後,Fed 把利率降到零"
     },
     {
      "en": "Netscape's IPO in late 1998 triggered the frenzy overnight",
      "zh": "Netscape 在 1998 年底的 IPO 一夜之間引爆狂熱"
     }
    ],
    "answer": 1,
    "explain": {
     "en": "The mania was a proof by elimination, not a proof of profits: dot-coms were mostly unprofitable (Netscape IPO'd back in August 1995), and the Fed's role in 1998 was orchestrating the LTCM bailout, not zero rates. Old-economy competition from Mexico and China, crony capitalism in emerging markets, a doubted euro, and discredited leverage left tech as the only story still standing.",
     "zh": "這場狂熱是「排除法證明」,不是獲利的證明:網路公司多半不賺錢(Netscape 早在 1995 年 8 月就上市了),而 Fed 在 1998 年做的是協調 LTCM 紓困,不是零利率。墨西哥與中國打垮舊經濟、新興市場暴露裙帶資本主義、歐元備受質疑、槓桿信譽掃地——科技成了唯一還站著的故事。"
    }
   },
   {
    "q": {
     "en": "Why did Thiel argue in 2012 that there was no tech bubble?",
     "zh": "為什麼 Thiel 在 2012 年主張當時並沒有科技泡沫?"
    },
    "options": [
     {
      "en": "Valuations in 2012 were lower than at any point in the 1990s",
      "zh": "2012 年的估值比 1990 年代任何時候都低"
     },
     {
      "en": "Fewer students were studying computer science than in 1999",
      "zh": "讀資工的學生比 1999 年還少"
     },
     {
      "en": "A bubble requires widespread, intense belief, and society no longer intensely believed in anything",
      "zh": "泡沫需要廣泛而強烈的信念,而當時的社會已不再強烈相信任何事物"
     },
     {
      "en": "Post-2000 government regulation made bubbles impossible",
      "zh": "2000 年後的政府監管使泡沫不可能再發生"
     }
    ],
    "answer": 2,
    "explain": {
     "en": "Thiel conceded the frothy data points — valuations were creeping up, and there were actually more CS students than in 1999, not fewer. His argument was definitional: a bubble is widespread, intense belief that's false, and without collective conviction the precondition fails. The bubble narrative, he argued, came from people hunting for one — an overreaction to the 1990s.",
     "zh": "Thiel 承認有冒泡跡象——估值在上升,而且讀資工的學生其實比 1999 年更多,不是更少。他的論證是定義層次的:泡沫是廣泛、強烈卻錯誤的信念;沒有集體堅信,前提就不成立。他認為泡沫論出自一心想找泡沫的人——那是對 1990 年代的過度反應。"
    }
   },
   {
    "q": {
     "en": "What finally made PayPal's user base take off in early 2000?",
     "zh": "2000 年初,究竟是什麼讓 PayPal 的用戶數起飛?"
    },
    "options": [
     {
      "en": "A distribution partnership with major banks like HSBC",
      "zh": "與 HSBC 等大型銀行的通路合作"
     },
     {
      "en": "A television advertising campaign funded by Nokia Ventures",
      "zh": "由 Nokia Ventures 出資的電視廣告"
     },
     {
      "en": "Beaming money between Palm Pilots at conferences",
      "zh": "在研討會上用 Palm Pilot 互相傳送金錢"
     },
     {
      "en": "Paying users directly — $10 to sign up and $10 per referral — producing 7–10% daily growth",
      "zh": "直接付錢給用戶——註冊送 10 美元、推薦再送 10 美元——創造出每天 7–10% 的成長"
     }
    ],
    "answer": 3,
    "explain": {
     "en": "Advertising was too expensive and bank business development went nowhere — the HSBC meeting convinced the team BD was hopeless. Palm Pilot beaming was the abandoned original idea. Buying virality worked spectacularly, but at roughly $20 per customer with zero revenue, which is why PayPal needed buzz and a $100M round (closed March 31, 2000) to survive.",
     "zh": "廣告太貴,與銀行談商務開發也毫無進展——那場 HSBC 會議讓團隊認清 BD 此路不通;Palm Pilot 傳錢則是被放棄的最初點子。花錢買病毒式擴散效果驚人,但每位客戶成本約 20 美元、營收掛零,這正是 PayPal 需要話題熱度、並趕在 2000 年 3 月 31 日完成 1 億美元募資才能活下來的原因。"
    }
   }
  ]
 },
 {
  "slug": "class-3",
  "layout": "lesson",
  "icon": "menu_book",
  "navLabel": "3",
  "classNo": 3,
  "sourceUrl": "https://blakemasters.tumblr.com/post/20955341708/peter-thiels-cs183-startup-class-3-notes-essay",
  "title": {
   "en": "Value Systems",
   "zh": "價值體系"
  },
  "subtitle": {
   "en": "Great companies create value, last for decades, and capture value — and intense competition makes capturing it impossible.",
   "zh": "偉大的公司要創造價值、活得夠久、還留得住價值——而激烈的競爭會讓你什麼都留不住。"
  },
  "objectives": [
   {
    "en": "Name the three requirements of a great technology company and explain why creating value alone is not enough.",
    "zh": "說出偉大科技公司的三個條件,並解釋為什麼光是創造價值還不夠。"
   },
   {
    "en": "Use discounted cash flow logic to see why most of a healthy tech company's value sits 10+ years in the future.",
    "zh": "運用現金流折現(DCF)的邏輯,理解為什麼健康科技公司的多數價值落在十年以後。"
   },
   {
    "en": "Contrast perfect competition with monopoly and explain why competition drives profits — and captured value — to zero.",
    "zh": "比較完全競爭與獨占(monopoly),說明為什麼競爭會把利潤與可留住的價值壓到零。"
   },
   {
    "en": "Replace the 'chase the biggest market' instinct with the sharper question: what valuable company is nobody building?",
    "zh": "拋開「市場越大越好」的直覺,改問更關鍵的問題:還有哪家有價值的公司沒人去做?"
   }
  ],
  "sections": [
   {
    "id": "great-companies",
    "heading": {
     "en": "1. What Makes a Company Great",
     "zh": "1. 偉大公司的三個條件"
    },
    "summary": {
     "en": "A great company must create value, endure, and capture a meaningful share of the value it creates — most businesses fail at least one of the three.",
     "zh": "偉大的公司必須創造價值、經久不衰,還要留得住自己創造的價值——多數企業至少在其中一項上失敗。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "After the dot-com bubble, valuations driven by mood and social proof proved worthless, so this class asks how to think about business value objectively. The anchoring questions are personal — what can I do, what do I find valuable, what do I see others not doing — and they converge on one big question: what valuable company is nobody building?",
       "zh": "網路泡沫破滅後,大家看清了由情緒和從眾心理堆出來的估值一文不值,所以這堂課要問的是:怎麼客觀地思考商業價值?出發點是幾個個人化的提問——我能做什麼?我覺得什麼有價值?我看到哪些事別人沒在做?——最後匯聚成一個大問題:還有哪家有價值的公司沒人去做?"
      }
     },
     {
      "type": "cards",
      "items": [
       {
        "title": {
         "en": "Create value",
         "zh": "創造價值"
        },
        "body": {
         "en": "The non-negotiable starting point: a company that creates nothing of value cannot be great, no matter how it is packaged.",
         "zh": "不可妥協的起點:不創造價值的公司,再怎麼包裝也不可能偉大。"
        }
       },
       {
        "title": {
         "en": "Be durable",
         "zh": "經久不衰"
        },
        "body": {
         "en": "The company must last. 1980s disk drive makers created real value but were replaced so fast they captured little of it.",
         "zh": "公司必須活得夠久。1980 年代的硬碟製造商確實創造了價值,卻很快被取代,幾乎什麼都沒留下。"
        }
       },
       {
        "title": {
         "en": "Capture value",
         "zh": "留住價值"
        },
        "body": {
         "en": "You must keep a meaningful slice of the value you create. Isaac Newton created enormous value for the world and captured almost none of it.",
         "zh": "你必須把自己創造的價值留下有意義的一部分。牛頓為世界創造了巨大價值,自己卻幾乎什麼都沒拿到。"
        }
       }
      ]
     },
     {
      "type": "p",
      "text": {
       "en": "Airlines are the canonical failure case: they create huge value for society and employ enormous numbers of people, yet historically the airlines themselves have never really made money. Value creation without capture makes you socially useful but not a great business.",
       "zh": "航空公司是經典的反面教材:它們為社會創造巨大價值、雇用大量員工,但歷來航空公司本身幾乎沒賺過錢。只創造價值卻留不住,對社會很有用,卻成不了偉大的企業。"
      }
     }
    ]
   },
   {
    "id": "valuation",
    "heading": {
     "en": "2. Valuation: Tech Value Lives in the Future",
     "zh": "2. 估值:科技公司的價值在遙遠的未來"
    },
    "summary": {
     "en": "When a company's growth rate exceeds its discount rate, most of its value sits a decade or more out — the opposite of Old Economy businesses.",
     "zh": "當成長率高於折現率時,公司的多數價值落在十年以後——這與傳統產業正好相反。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "In practice, startup valuations are often set by social heuristics — incubator conventions like a $10M cap — rather than analysis. Guy Kawasaki's tongue-in-cheek formula captures the spirit: pre-money valuation equals $1M per engineer minus $500k per MBA. Serious valuation instead rests on a few standard tools.",
       "zh": "實務上,新創估值常常是由社會慣例決定的——例如孵化器約定俗成的 1,000 萬美元估值上限——而不是靠嚴謹分析。Guy Kawasaki 半開玩笑的公式抓到了精髓:投資前估值 = 每位工程師加 100 萬美元,每位 MBA 扣 50 萬美元。認真的估值則要靠幾個標準工具。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "P/E ratio: market value per share over earnings per share — widely used, but it ignores growth entirely.",
        "PEG ratio: P/E divided by annual earnings growth — it corrects for growth and should generally be below one.",
        "Time value of money: a dollar today beats a dollar tomorrow, so future cash flows get discounted back via NPV.",
        "The key inequality: the growth rate g must exceed the discount rate r, or the company simply is not growing enough."
       ],
       "zh": [
        "本益比(P/E):每股市價除以每股盈餘——用得最廣,但完全忽略成長。",
        "PEG 比率:本益比再除以年盈餘成長率——把成長納入修正,一般應該低於 1。",
        "金錢的時間價值:今天的一塊錢比明天的值錢,所以未來現金流要用淨現值(NPV)折算回來。",
        "關鍵不等式:成長率 g 必須大於折現率 r,否則公司根本成長得不夠快。"
       ]
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Old Economy businesses concentrate their value in the near term: investors watch whether cash flows hold up over the next 5–6 years. High-growth tech companies are the mirror image — they lose money at first, and when g exceeds r, a typical model puts about two-thirds of total value in years 10 through 15.",
       "zh": "傳統產業的價值集中在近期:投資人盯的是未來五、六年現金流能不能撐住。高成長科技公司正好相反——初期虧錢,而當 g 大於 r 時,典型模型會算出大約三分之二的價值落在第 10 到第 15 年之間。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Two live examples. PayPal at 27 months old was growing 100% a year; the original models put its value arrival around 2011, but with growth still at 15%, most of PayPal's value looked like it would not come until 2020. LinkedIn in 2012 had a roughly $10B market cap at a P/E near 850 — defensible only because DCF assigned about $2B of value to 2012–2019 and the remaining $8B to 2020 and beyond. Both valuations are bets on durability: the company must still matter decades from now.",
       "zh": "兩個活生生的例子。PayPal 成立 27 個月時年成長率 100%;原本的模型預估價值會在 2011 年左右實現,但在成長率仍有 15% 的情況下,PayPal 的多數價值看起來要到 2020 年才會到來。2012 年的 LinkedIn 市值約 100 億美元,本益比高達 850 倍——唯一說得通的理由是 DCF 把 2012–2019 年的價值算成約 20 億美元,其餘 80 億全押在 2020 年以後。這兩個估值賭的都是持久性(durability):這家公司幾十年後必須還舉足輕重。"
      }
     }
    ]
   },
   {
    "id": "durability-last-mover",
    "heading": {
     "en": "3. Durability: Be the Last Mover",
     "zh": "3. 持久性:當最後行動者"
    },
    "summary": {
     "en": "First-mover advantage is overrated — what matters is being the durable last mover still standing when the value actually arrives.",
     "zh": "先行者優勢被高估了——真正重要的是成為最後行動者(last mover),在價值真正到來時仍屹立不搖。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "If most value arrives in years 10–15, then moving first is worthless if you fade before then. The disk drive makers moved first and died; whoever occupies the market at the end captures the value. The goal is not to be the first mover but the last mover — the company that makes the final, durable move in its market.",
       "zh": "如果多數價值要到第 10–15 年才出現,那麼搶先起跑卻中途消失就毫無意義。硬碟製造商跑在最前面,結果全數陣亡;最後占住市場的人才拿得到價值。目標不是當先行者,而是當後發制人的最後行動者——在這個市場走出最後一步、然後長存的那家公司。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "You must study the endgame before everything else.",
       "zh": "你必須先研究殘局,再學其他一切。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "That is chess grandmaster José Raúl Capablanca's advice, and it maps directly onto business: plan from the endgame backwards. Ask what the market looks like when the dust settles and whether your company is the one still on the board.",
       "zh": "這是西洋棋大師 José Raúl Capablanca 的忠告,而它可以直接套用在商業上:從終局倒推來規劃。問問塵埃落定時市場長什麼樣子,以及棋盤上留下的那家公司是不是你。"
      }
     }
    ]
   },
   {
    "id": "competition-vs-monopoly",
    "heading": {
     "en": "4. Perfect Competition vs. Monopoly",
     "zh": "4. 完全競爭 vs. 獨占"
    },
    "summary": {
     "en": "Markets tend toward one of two poles — perfect competition, where nobody makes money, or monopoly, where the winner sets prices — and great tech companies live near the monopoly pole.",
     "zh": "市場會趨向兩個極端——沒人賺得到錢的完全競爭,或贏家可以定價的獨占——而偉大的科技公司都靠近獨占那一端。"
    },
    "blocks": [
     {
      "type": "table",
      "head": {
       "en": [
        "Dimension",
        "Perfect competition",
        "Monopoly"
       ],
       "zh": [
        "面向",
        "完全競爭",
        "獨占"
       ]
      },
      "rows": [
       {
        "en": [
         "Economic profit",
         "Zero — entry erases any profit, exit erases any loss",
         "Sustained — prices can be set above marginal cost"
        ],
        "zh": [
         "經濟利潤",
         "零——有利潤就有人進場把它抹平,有虧損就有人退場止血",
         "可持續——價格能訂在邊際成本之上"
        ]
       },
       {
        "en": [
         "Pricing power",
         "None — every firm is a price taker",
         "Full — the monopolist is a price setter"
        ],
        "zh": [
         "定價能力",
         "沒有——每家公司都是價格接受者",
         "完整——獨占者是價格制定者"
        ]
       },
       {
        "en": [
         "Firm's weight in market",
         "Negligible — one player among countless clones",
         "Total — the sole producer of its specific thing"
        ],
        "zh": [
         "單一公司的分量",
         "微不足道——無數同質玩家之一",
         "全部——某個特定產品的唯一生產者"
        ]
       },
       {
        "en": [
         "Long-term planning",
         "Impossible — zero profit leaves nothing to invest",
         "Possible — durable profits fund deep, patient projects"
        ],
        "zh": [
         "長期規劃",
         "不可能——零利潤讓你沒本錢投資未來",
         "可行——持久的利潤能支撐深遠而有耐心的計畫"
        ]
       }
      ]
     },
     {
      "type": "p",
      "text": {
       "en": "Textbooks treat monopoly as the rare exception and competition as the norm. Thiel flips the question: maybe perfect competition is the default only in textbooks, while in reality great tech companies routinely build monopoly-like advantages through economies of scale, patents, and uniquely low production costs.",
       "zh": "教科書把獨占當成罕見例外、競爭當成常態。Thiel 把問題反過來問:也許完全競爭只在教科書裡才是預設值,現實中偉大的科技公司透過規模經濟、專利和獨特的低生產成本,經常打造出近乎獨占的優勢。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Lerner Index: (price − marginal cost) / price, from 0 (perfect competition) to 1 (monopoly); hard for regulators to compute, but worth tracking internally.",
        "Herfindahl-Hirschman Index (HHI): sum of squared market shares of the top 50 firms; above 0.25 means highly concentrated, possibly monopolistic.",
        "m-firm concentration ratio: combined share of the 4 or 8 largest firms; above 70% signals a concentrated market.",
        "Legally, monopoly power alone is not unlawful under the Sherman Act — it must be paired with anticompetitive conduct."
       ],
       "zh": [
        "勒納指數(Lerner Index):(價格 − 邊際成本)÷ 價格,介於 0(完全競爭)到 1(獨占);監管機構很難實際算出,但公司內部值得自己追蹤。",
        "赫芬達爾—赫希曼指數(HHI):前 50 大公司市占率平方後加總;超過 0.25 代表高度集中,可能構成獨占。",
        "前 m 大廠商集中度:前 4 或前 8 大公司市占率加總;超過 70% 就算集中市場。",
        "法律上,依《休曼法》(Sherman Act),光有獨占力並不違法——必須伴隨反競爭行為才算。"
       ]
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Monopoly has real downsides — lower output, higher prices, price discrimination, and possibly less pressure to innovate. But the innovation argument cuts both ways: if you build something dramatically better, charging well above marginal cost is exactly how creators get rewarded, and durable profits are what make long-term planning and deep project financing possible at all.",
       "zh": "獨占確實有缺點——產量較低、價格較高、可以差別定價,也可能少了創新的壓力。但創新這個論點是雙面刃:如果你做出遠遠更好的東西,把價格訂在邊際成本之上正是創造者應得的回報;而且正是持久的利潤,才讓長期規劃和大型專案的融資成為可能。"
      }
     }
    ]
   },
   {
    "id": "ideology-of-competition",
    "heading": {
     "en": "5. The Ideology of Competition",
     "zh": "5. 競爭的意識形態"
    },
    "summary": {
     "en": "Our culture glorifies competition from high school to Big Law, but competition is what destroys profits — escaping it, as PayPal did through decisive advantages, is the real game.",
     "zh": "從高中到頂級律所,我們的文化一路歌頌競爭,但競爭正是利潤的殺手——像 PayPal 那樣靠決定性優勢跳出競爭,才是真正的賽局。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "PayPal could not out-muscle credit card giants in a scale business, so it had to differentiate decisively. It built sophisticated fraud detection software — cheekily named 'Igor' after a notorious hacker whose peers ran dark markets like Carders World — and it engineered instant-feeling payments by pulling users' bank account details, modeling balances, and working around ACH delays. The lesson: even a handful of competing services quickly creates a brutally competitive dynamic, so a decisive advantage is essential.",
       "zh": "在講規模的支付產業裡,PayPal 硬拚不過信用卡巨頭,只能靠決定性的差異化。它打造了精密的詐欺偵測軟體——戲謔地以惡名昭彰的駭客 Igor 命名,那個圈子還經營著 Carders World 這類盜刷黑市——又透過取得使用者銀行帳戶資訊、建模預測餘額、繞過 ACH 清算延遲,讓付款體驗近乎即時。教訓是:哪怕只有少數幾家競爭者,也會迅速演變成慘烈的競爭態勢,所以決定性優勢不可或缺。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "The more intense the competition, the less likely you'll be able to capture any value at all.",
       "zh": "競爭越激烈,你能留住任何價值的可能性就越低。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Even the phrase 'perfect competition' is loaded — nobody calls it 'ruthless' or 'insane' competition. The bias exists because competition is easy to model, statically efficient, and politically easy to sell. But in a dynamic world with no equilibrium, the model is irrelevant, and psychologically it is corrosive: all the benefits go to society, none to you. The Big Law treadmill makes it vivid — Stanford Law graduates grinding toward partnership with terrible odds, most quitting before they can even fail.",
       "zh": "連「完全競爭」這個詞本身都帶著偏袒——沒有人叫它「無情競爭」或「瘋狂競爭」。這種偏見的來源是:競爭好建模、在靜態世界裡有效率、政治上也好推銷。但在沒有均衡的動態世界裡,這套模型根本不適用;而且它在心理上是腐蝕性的:好處全歸社會,你自己一無所得。頂級律所(Big Law)的滾輪最能說明這點——史丹佛法學院畢業生拚命朝合夥人衝刺,勝率極低,多數人還沒等到失敗就先辭職了。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Globalization gets framed as a flat-world sprint — a race to the bottom where you take a pay cut because someone elsewhere is cheaper. Technology offers the opposite metaphor: the world as Mount Everest, jagged and unique, where vast differences are possible. Which brings us to the most common startup mistake — assuming a bigger market is better. Thiel calls that utterly, totally wrong: restaurants sit in a huge market with terrible profits, while a well-defined, smaller market is one you can actually own.",
       "zh": "全球化總被描繪成一場「世界是平的」短跑——一場向下沉淪的競賽,因為別處有人更便宜,你就得減薪。科技提供了相反的隱喻:世界是聖母峰,崎嶇而獨特,巨大的差異在此成為可能。這就帶出新創最常見的錯誤——以為市場越大越好。Thiel 直言這是大錯特錯:餐飲業市場巨大,利潤卻慘不忍睹;反而是定義清晰的小市場,你才真正有機會獨占。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "What valuable company is nobody building?",
       "zh": "還有哪家有價值的公司沒人去做?"
      }
     }
    ]
   },
   {
    "id": "networks-endgame",
    "heading": {
     "en": "6. Networks, VC, and the Endgame",
     "zh": "6. 人脈網絡、創投與終局"
    },
    "summary": {
     "en": "The best venture firms and the best tech companies share the same shape: relationship-driven, personal, anti-commoditized businesses that endure.",
     "zh": "最好的創投和最好的科技公司長得一模一樣:靠關係驅動、個人化、反商品化,而且經久不衰。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Venture capital itself is not really a business of managing big pools of money — it runs on discreet networks of affiliated people with unique access to entrepreneurs. The network is the value proposition: personal, idiosyncratic, impossible to commoditize.",
       "zh": "創投本質上不是管理大筆資金的生意——它靠的是一群關係緊密、能獨家接觸到創業者的隱密人脈網絡。這個網絡本身就是價值主張:個人化、獨一無二、無法被商品化。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "The PayPal network — friendships compounded over a decade into something franchise-like — is not an anomaly; it is arguably what every great tech company looks like. Pulling the threads together: the winning shape is a last-mover monopoly built on non-commoditized relationships, one that creates value, endures to the endgame, and actually captures what it creates.",
       "zh": "PayPal 幫的人脈網絡——十年累積的友誼,滾成近乎特許經營般的體系——並非特例;幾乎每一家偉大的科技公司都是這個樣子。把所有線索收攏:致勝的形態是一個建立在反商品化人際關係上的後發獨占者,它創造價值、撐到終局,並真正留住自己所創造的。"
      }
     }
    ]
   }
  ],
  "factcheck": [
   {
    "claim": {
     "en": "In April 2012, LinkedIn's ~$10B market cap at a P/E near 850 was defensible only if the company stayed durable for decades, with ~$8B of the value attributed to 2020 and beyond.",
     "zh": "2012 年 4 月,LinkedIn 約 100 億美元的市值、近 850 倍的本益比,唯有公司能持續數十年才說得通,其中約 80 億美元的價值被歸於 2020 年以後。"
    },
    "now": {
     "en": "The durability bet paid off early: Microsoft agreed in June 2016 to buy LinkedIn for $26.2B in cash ($196/share, a ~50% premium) — about 2.6x the 2012 valuation — and the deal closed that December, with LinkedIn continuing as a Microsoft unit.",
     "zh": "這場持久性的賭注提前兌現:微軟於 2016 年 6 月同意以 262 億美元現金(每股 196 美元,溢價約 50%)收購 LinkedIn——約為 2012 年估值的 2.6 倍——交易於同年 12 月完成,LinkedIn 至今仍是微軟旗下事業。"
    },
    "sourceTitle": "Microsoft to acquire LinkedIn (Microsoft News)",
    "sourceUrl": "https://news.microsoft.com/source/2016/06/13/microsoft-to-acquire-linkedin/"
   },
   {
    "claim": {
     "en": "Thiel's updated DCF analysis suggested that most of PayPal's value would not arrive until around 2020.",
     "zh": "Thiel 更新後的現金流折現分析認為,PayPal 的多數價值要到 2020 年左右才會到來。"
    },
    "now": {
     "en": "Broadly vindicated, then reversed: PayPal spun off from eBay in July 2015 at about a $47B market cap, soared to roughly $360B at its July 2021 pandemic peak, but by early 2026 had slid back to around $40B — below former parent eBay.",
     "zh": "大方向應驗,隨後反轉:PayPal 於 2015 年 7 月從 eBay 分拆,市值約 470 億美元,在 2021 年 7 月疫情高峰衝上約 3,600 億美元,但到 2026 年初已回落至約 400 億美元——甚至低於前母公司 eBay。"
    },
    "sourceTitle": "Once As High As $360 Billion, PayPal's Market Value Has Slipped To $40 Billion (Forbes)",
    "sourceUrl": "https://www.forbes.com/sites/brandonkochkodin/2026/02/03/once-as-high-360-billion-paypals-market-value-has-slipped-to-40-billion-below-former-parent-ebay/"
   }
  ],
  "quiz": [
   {
    "q": {
     "en": "According to Thiel, why can't airlines be considered great companies?",
     "zh": "根據 Thiel 的說法,為什麼航空公司稱不上偉大的公司?"
    },
    "options": [
     {
      "en": "They don't create real value for society.",
      "zh": "它們沒有為社會創造真正的價值。"
     },
     {
      "en": "They create huge value but capture almost none of it as profit.",
      "zh": "它們創造了巨大價值,卻幾乎沒有以利潤形式留住任何一分。"
     },
     {
      "en": "Their market is too small to matter.",
      "zh": "它們的市場太小,無足輕重。"
     },
     {
      "en": "They lack durability and disappear within a few years.",
      "zh": "它們缺乏持久性,幾年內就會消失。"
     }
    ],
    "answer": 1,
    "explain": {
     "en": "Airlines pass the value-creation test — they move millions of people and employ many — but historically the airlines themselves have never really made money. Greatness requires all three conditions: create, endure, and capture. Failing capture alone is disqualifying.",
     "zh": "航空公司通過了「創造價值」這一關——它們運送數百萬人、雇用大量員工——但歷來航空公司本身幾乎沒賺過錢。偉大需要三個條件齊備:創造、持久、留住。光是「留不住」這一項不及格,就足以出局。"
    }
   },
   {
    "q": {
     "en": "For a healthy tech company whose growth rate exceeds its discount rate, where does a typical model place most of its value?",
     "zh": "對一家成長率高於折現率的健康科技公司,典型的估值模型會把多數價值放在哪裡?"
    },
    "options": [
     {
      "en": "In the first two to three years of cash flow.",
      "zh": "在最初兩三年的現金流。"
     },
     {
      "en": "Spread evenly across every year of operation.",
      "zh": "平均分布在營運的每一年。"
     },
     {
      "en": "In years 10 through 15 — far in the future.",
      "zh": "在第 10 到第 15 年——遙遠的未來。"
     },
     {
      "en": "In the liquidation value of its assets.",
      "zh": "在資產的清算價值。"
     }
    ],
    "answer": 2,
    "explain": {
     "en": "Old Economy value is front-loaded, but when g > r the discounting math flips: a typical model puts about two-thirds of a tech company's value in years 10–15. That is why LinkedIn's 850 P/E could be rationalized — and why durability is everything.",
     "zh": "傳統產業的價值集中在前期,但當 g > r 時,折現數學整個翻轉:典型模型會把科技公司約三分之二的價值放在第 10–15 年。這正是 LinkedIn 850 倍本益比說得通的原因——也是持久性至關重要的原因。"
    }
   },
   {
    "q": {
     "en": "What is Thiel's verdict on the common startup instinct that a bigger market is always better?",
     "zh": "對於「市場越大越好」這個常見的創業直覺,Thiel 的判定是什麼?"
    },
    "options": [
     {
      "en": "Correct — bigger markets mean bigger potential outcomes.",
      "zh": "正確——市場越大,潛在成果越大。"
     },
     {
      "en": "Utterly wrong — huge markets breed brutal competition, while well-defined smaller markets can actually be owned.",
      "zh": "大錯特錯——巨大市場孕育慘烈競爭,定義清晰的小市場才真正能被獨占。"
     },
     {
      "en": "Right for consumer products, wrong for enterprise software.",
      "zh": "對消費性產品成立,對企業軟體不成立。"
     },
     {
      "en": "Irrelevant — only the founding team determines outcomes.",
      "zh": "無關緊要——結果只由創始團隊決定。"
     }
    ],
    "answer": 1,
    "explain": {
     "en": "Thiel calls the bigger-is-better idea 'utterly, totally wrong.' Restaurants sit in an enormous market with dreadful profits; larger markets are harder to master and more uncertain. The better question pairs market size with: what valuable company is nobody building?",
     "zh": "Thiel 直言「越大越好」的想法是大錯特錯。餐飲業市場巨大,利潤卻慘不忍睹;市場越大越難掌握、不確定性越高。更好的問法是把市場規模和這個問題放在一起:還有哪家有價值的公司沒人去做?"
    }
   }
  ]
 },
 {
  "slug": "class-4",
  "layout": "lesson",
  "icon": "menu_book",
  "navLabel": "4",
  "classNo": 4,
  "sourceUrl": "https://blakemasters.tumblr.com/post/21169325300/peter-thiels-cs183-startup-class-4-notes-essay",
  "title": {
   "en": "The Last Mover Advantage",
   "zh": "後發優勢"
  },
  "subtitle": {
   "en": "Don't race to be first — make the last great development in a market, then own it forever.",
   "zh": "別搶當第一個進場的人——做出市場上最後一次重大突破,然後永遠擁有它。"
  },
  "objectives": [
   {
    "en": "Explain why Thiel sees capitalism and perfect competition as opposites, and why escaping competition matters more than winning it.",
    "zh": "說明為什麼 Thiel 認為資本主義與完全競爭(perfect competition)是對立的,以及為什麼「逃離競爭」比「贏得競爭」更重要。"
   },
   {
    "en": "Decode the rhetorical tricks firms use to look either more unique or more competitive than they really are, and read cash and margins instead.",
    "zh": "拆解企業用來把自己講得更獨特、或更沒有壟斷嫌疑的話術,並學會改看現金水位與毛利率等客觀訊號。"
   },
   {
    "en": "Apply the small-market-first playbook: dominate a niche, then expand into adjacent markets the way Amazon and eBay did.",
    "zh": "運用「先吃小市場」的打法:先壟斷一個利基市場,再像 Amazon 與 eBay 一樣往相鄰市場擴張。"
   },
   {
    "en": "Judge timing on technology frontiers — when a field is too early, too late, or exactly right to enter.",
    "zh": "判斷科技前沿(tech frontier)的進場時機——一個領域什麼時候太早、什麼時候太晚、什麼時候剛剛好。"
   }
  ],
  "sections": [
   {
    "id": "escaping-competition",
    "heading": {
     "en": "1. Escaping Competition",
     "zh": "1. 逃離競爭"
    },
    "summary": {
     "en": "Culture celebrates competition as character-building, but economically it destroys profits — the winners are those who step out of the race.",
     "zh": "文化把競爭歌頌成鍛鍊人格的美德,但在經濟上競爭會把利潤磨到零——真正的贏家是退出賽局的人。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Thiel opens with a provocation: capitalism and perfect competition are not synonyms but opposites. Under perfect competition, profits get competed away to zero; a business that wants to accumulate value must escape competition and build a monopoly. Americans romanticize competition, so the trap is spending a whole career competing harder instead of asking whether the race is worth running.",
       "zh": "Thiel 一開場就拋出挑釁的論點:資本主義與完全競爭不是同義詞,而是對立面。在完全競爭下,利潤會被競爭消磨到零;想累積價值的企業必須逃離競爭、建立獨占(monopoly)。美國文化把競爭浪漫化,於是最大的陷阱就是花一輩子拚命競爭,卻從沒問過這場比賽值不值得跑。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "He makes it personal. After Stanford Law School he came within reach of a Supreme Court clerkship — the ultimate credential — and lost it. Years later, after PayPal, an old friend reframed the loss as an escape: winning would have meant a future of ever more intense competition, and no PayPal.",
       "zh": "他用自己的故事說明。史丹佛法學院畢業後,他一度離美國最高法院書記官(Supreme Court clerkship)這個終極學歷勳章只差一步,最後落選。多年後、PayPal 成功之後,一位老朋友把這次失利重新定義成一次逃脫:如果當年贏了,等著他的只會是更瘋狂的競爭——而且不會有 PayPal。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "So, aren't you glad you didn't get that Supreme Court clerkship?",
       "zh": "「所以,你現在是不是很慶幸當年沒拿到那個最高法院書記官的職位?」"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Elite tracks breed people who, like many Rhodes Scholars, had 'a great future in their past' — the credential race peaks early and leads nowhere new.",
        "In academia the battles are fierce precisely because the stakes are so small; difficulty becomes a fake proxy for value.",
        "Elite universities mostly teach students to cope with competitive stress rather than question it.",
        "Stanford's edge is structured heterogeneity — strong engineering, humanities, and athletics form separate arenas, so not everyone fights over the same prize."
       ],
       "zh": [
        "菁英跑道量產出像許多羅德學者(Rhodes Scholars)那樣「輝煌的未來留在過去」的人——學歷競賽早早登頂,之後再無新路。",
        "學術圈的鬥爭之所以激烈,正是因為賭注太小;「很難」被誤當成「很有價值」的代理指標。",
        "菁英大學大多只教學生如何承受競爭壓力,而不是質疑競爭本身。",
        "史丹佛的優勢在於「結構性的異質」:工程、人文、體育各自都強,形成互不重疊的競技場,大家不必搶同一個獎盃。"
       ]
      }
     }
    ]
   },
   {
    "id": "lies-people-tell",
    "heading": {
     "en": "2. Lies People Tell",
     "zh": "2. 人們說的謊"
    },
    "summary": {
     "en": "Monopolists pretend to be embattled competitors and competitive firms pretend to be unique, so you must define markets objectively and follow the cash.",
     "zh": "獨占者假裝自己身處激烈競爭,競爭者假裝自己獨一無二;所以你必須客觀定義市場,並且跟著現金走。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Both ends of the spectrum have reasons to lie toward the middle. Monopolies downplay their dominance to keep antitrust regulators away; firms stuck in brutal competition exaggerate their uniqueness because otherwise no investor should fund them. The rhetoric compresses everything toward the center, but reality is closer to binary: you either own a market or you are selling a commodity.",
       "zh": "光譜兩端的公司都有動機往中間說謊。獨占者刻意淡化自己的支配地位,以免招來反托拉斯(antitrust)監管;困在殘酷競爭裡的公司則誇大自己的獨特性,否則沒有投資人該給他們錢。話術把所有公司都往中間壓,但現實其實接近二元:你要嘛擁有一個市場,要嘛在賣大宗商品。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Non-monopolies tell intersection stories: 'we are the only British restaurant in Palo Alto' sounds unique until you ask whether anyone eats only British food. A film pitch stitching together a football star, elite hackers, and a killer shark is technically unprecedented and still worthless. Monopolies run the trick in reverse with union stories, casting themselves as tiny players in some enormous market. Thiel's counterexample from 2001: Castro Street in Mountain View was packed with competing restaurants, while PayPal — the world's only email-payments company, with fewer employees than those restaurants — was worth more than all of them combined.",
       "zh": "非獨占公司愛講「交集」故事:「我們是 Palo Alto 唯一的英式餐廳」聽起來很獨特,直到你追問:真的有人只吃英國菜嗎?一部把美式足球明星、頂尖駭客和殺人鯊魚湊在一起的電影提案,技術上確實前所未有,但依然一文不值。獨占者則反向操作,講「聯集」故事,把自己說成巨大市場裡的小角色。Thiel 舉 2001 年的對照:Mountain View 的 Castro Street 擠滿互相廝殺的餐廳,而 PayPal——全世界唯一的 email 支付公司,員工比那條街的餐廳還少——市值卻超過那些餐廳的總和。"
      }
     },
     {
      "type": "table",
      "head": {
       "en": [
        "How Google defines its market",
        "Share",
        "Verdict"
       ],
       "zh": [
        "Google 如何定義自己的市場",
        "市占",
        "結論"
       ]
      },
      "rows": [
       {
        "en": [
         "Search engines",
         "66.4% (Microsoft 15.3%, Yahoo 13.8%)",
         "Clear monopoly"
        ],
        "zh": [
         "搜尋引擎",
         "66.4%(Microsoft 15.3%、Yahoo 13.8%)",
         "明顯獨占"
        ]
       },
       {
        "en": [
         "Global advertising (~$412B)",
         "Under 4%",
         "Small player"
        ],
        "zh": [
         "全球廣告市場(約 4,120 億美元)",
         "不到 4%",
         "小角色"
        ]
       },
       {
        "en": [
         "Consumer tech (~$964B; cars, TV, Android...)",
         "Tiny fraction",
         "Just one of many"
        ],
        "zh": [
         "消費科技(約 9,640 億美元;汽車、電視、Android……)",
         "微不足道",
         "眾多玩家之一"
        ]
       }
      ]
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Cash reserves reveal the truth rhetoric hides: Apple held about $98B (growing ~$30B a year), Microsoft $52B, Google $45B — truly competitive firms must reinvest everything just to survive.",
        "Gross margins tell the same story: Microsoft ~75%, Google ~65%, Apple ~40%, versus Amazon's 14% — which is still exceptional next to a grocery store's ~2%.",
        "When a company piles up cash it cannot profitably reinvest, that is monopoly economics, whatever its press releases say."
       ],
       "zh": [
        "現金水位會揭露話術掩蓋的真相:Apple 手握約 980 億美元現金(每年還增加約 300 億)、Microsoft 520 億、Google 450 億——真正身處競爭的公司必須把每一分錢投回去才能活命。",
        "毛利率說的是同一個故事:Microsoft 約 75%、Google 約 65%、Apple 約 40%;相較之下 Amazon 只有 14%——但對照雜貨店約 2% 的毛利,這已經非常出色。",
        "當一家公司堆積出多到花不完的現金,那就是獨占的經濟學——不管它的新聞稿怎麼說。"
       ]
      }
     }
    ]
   },
   {
    "id": "how-to-own-a-market",
    "heading": {
     "en": "3. How to Own a Market",
     "zh": "3. 如何擁有一個市場"
    },
    "summary": {
     "en": "Durable monopolies rest on four foundations — brand, scale cost advantages, network effects, and proprietary technology — and the best companies stack several.",
     "zh": "持久的獨占建立在四大基礎上:品牌、規模成本優勢、網路效應、專有技術;最強的公司會同時疊加好幾項。"
    },
    "blocks": [
     {
      "type": "cards",
      "items": [
       {
        "title": {
         "en": "Brand",
         "zh": "品牌 (Brand)"
        },
        "body": {
         "en": "Hard to define, but real: people insist Pepsi and Coke are different, and that perceived non-interchangeability sustains cash flows. 'Brand' often works as a polite code word for monopoly.",
         "zh": "難以精確定義,但真實存在:人們堅持 Pepsi 和可口可樂不一樣,這種「不可互換」的認知撐起長期現金流。「品牌」常常是「獨占」的委婉代號。"
        }
       },
       {
        "title": {
         "en": "Scale cost advantages",
         "zh": "規模成本優勢 (Scale advantages)"
        },
        "body": {
         "en": "High fixed costs plus low marginal costs mean the biggest player keeps getting cheaper to run — Amazon online and Walmart in retail become more efficient with every increment of scale.",
         "zh": "高固定成本加上低邊際成本,代表規模最大的玩家營運成本越來越低——線上的 Amazon 和實體零售的 Walmart 每擴大一分規模就更有效率一分。"
        }
       },
       {
        "title": {
         "en": "Network effects",
         "zh": "網路效應 (Network effects)"
        },
        "body": {
         "en": "The product gets more valuable as more people use it, and switching costs lock users in — telephone networks and social platforms are the classic cases.",
         "zh": "使用的人越多,產品越有價值,而轉換成本把使用者鎖在裡面——電話網路與社群平台是最經典的例子。"
        }
       },
       {
        "title": {
         "en": "Proprietary technology",
         "zh": "專有技術 (Proprietary technology)"
        },
        "body": {
         "en": "Technology rivals simply cannot replicate creates a defensible moat — the hardest foundation to fake and the one startups should aim for first.",
         "zh": "對手就是複製不了的技術,構成可防禦的護城河——這是最難造假的基礎,也是新創最該優先追求的一項。"
        }
       }
      ]
     },
     {
      "type": "p",
      "text": {
       "en": "Apple is the integration case: proprietary hardware-software technology, scale advantages through its manufacturing network, an ecosystem of developers and accessories that locks customers in, and a brand that lets it charge a premium for components competitors also use. Stacked together, the four foundations explain why Apple monetizes where imitators cannot.",
       "zh": "Apple 是「全部疊加」的範例:軟硬體整合的專有技術、透過製造網絡取得的規模優勢、把顧客鎖住的開發者與週邊生態系,以及讓它能對「對手也用得到的零件」收取溢價的品牌。四大基礎疊在一起,解釋了為什麼 Apple 賺得到模仿者賺不到的錢。"
      }
     }
    ]
   },
   {
    "id": "creating-your-market",
    "heading": {
     "en": "4. Creating Your Market",
     "zh": "4. 創造你的市場"
    },
    "summary": {
     "en": "The winning formula is three steps: find a right-sized new market, monopolize it, then expand outward along a credible scaling story.",
     "zh": "致勝公式只有三步:找到大小剛好的新市場、壟斷它、再沿著一條可信的擴張敘事往外長。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Market choice is a Goldilocks problem. Too small and there is no one to sell to — PayPal's original idea of beaming money between Palm Pilots served a market of roughly nobody. Too big and you are back in brutal competition. The right target is a small market you can dominate outright, judged by objective reality rather than intersection-or-union wordplay. Bell's telephone began as a tiny new market with a handful of users; network effects then made later entry effectively impossible.",
       "zh": "選市場是個「剛剛好」(Goldilocks)的問題。太小,沒人可賣——PayPal 最初「Palm Pilot 之間互傳金錢」的點子,服務的市場約等於零。太大,你又掉回殘酷競爭。正確的目標是一個你能徹底支配的小市場,而且要用客觀現實來判斷,不是靠交集、聯集的文字遊戲。貝爾(Bell)的電話起初就是個只有少數使用者的微型新市場;之後網路效應讓後進者幾乎不可能進場。"
      }
     },
     {
      "type": "cards",
      "items": [
       {
        "title": {
         "en": "Amazon: name your ambition",
         "zh": "Amazon:把野心寫進名字"
        },
        "body": {
         "en": "Started as an online bookstore aiming to catalog every book, then walked the ladder from books to a general store to everything — a name evoking the world's most diverse ecosystem left room to grow.",
         "zh": "從「收錄所有書」的網路書店起家,再一階一階從書店走向百貨、走向什麼都賣——用地球上生態最多樣的亞馬遜當名字,預先留好了長大的空間。"
        }
       },
       {
        "title": {
         "en": "eBay: monopoly with a ceiling",
         "zh": "eBay:有天花板的獨占"
        },
        "body": {
         "en": "Grew from Pez dispensers and Beanie Babies into the natural monopoly of a marketplace — buyers go where sellers are. But by 2004 the auction model failed for commodity goods, so the monopoly proved smaller than expected.",
         "zh": "從 Pez 糖果盒和豆豆娃(Beanie Babies)收藏品起家,長成交易市集的自然獨占——買家會去賣家聚集的地方。但到了 2004 年,拍賣模式在標準化商品上失靈,這個獨占比預期的小。"
        }
       },
       {
        "title": {
         "en": "Twitter: durable but unmonetized",
         "zh": "Twitter:耐久但還不會賺錢"
        },
        "body": {
         "en": "A niche microbroadcasting tool that scaled into a media distribution hub. Its business model was unclear, but Thiel judged the technology position itself extremely hard to attack.",
         "zh": "從利基的微型廣播工具,長成新的媒體傳播中樞。商業模式當時還不明朗,但 Thiel 認為它的技術位置本身極難被攻擊。"
        }
       },
       {
        "title": {
         "en": "Zynga: science or studio?",
         "zh": "Zynga:科學還是片廠?"
        },
        "body": {
         "en": "Scaled social games aggressively on superior monetization. The open question: is its edge a durable psychometric science, or is it just a hit-driven Hollywood studio in disguise?",
         "zh": "靠更強的變現能力,把社交遊戲(如 Farmville)快速做大。未解的問題是:它的優勢是可長可久的心理計量科學,還是偽裝成科技公司的好萊塢式「爆款」片廠?"
        }
       },
       {
        "title": {
         "en": "LinkedIn & Groupon: test the story",
         "zh": "LinkedIn 與 Groupon:檢驗敘事"
        },
        "body": {
         "en": "LinkedIn (150M users) claimed a proprietary business network but functioned largely as a headhunting platform. Groupon scaled fast yet lacked proprietary tech or network effects — if its brand was weaker than claimed, so was its future.",
         "zh": "LinkedIn(全球 1.5 億用戶)自稱獨有的商務人脈網路,實際上主要是獵頭平台。Groupon 擴張很快,卻沒有專有技術或網路效應——如果它的品牌不如宣稱的強,它的未來也就不如宣稱的穩。"
        }
       },
       {
        "title": {
         "en": "The inverted recipe fails",
         "zh": "反著做,必失敗"
        },
        "body": {
         "en": "Pets.com, Webvan, and Kozmo ran the formula backwards: start huge, then try to shrink to something ownable. Confusing rhetoric with reality, they burned out in open competition.",
         "zh": "Pets.com、Webvan、Kozmo 把公式反過來用:先做超大,再想縮回一塊守得住的地盤。他們把話術當成現實,最後在開放競爭中燒光陣亡。"
        }
       }
      ]
     },
     {
      "type": "quote",
      "text": {
       "en": "It's almost impossible to imagine a technological future where you can compete with Twitter.",
       "zh": "「幾乎無法想像有哪種科技上的未來,能讓你和 Twitter 競爭。」"
      }
     }
    ]
   },
   {
    "id": "tech-frontiers",
    "heading": {
     "en": "5. Tech Frontiers",
     "zh": "5. 科技前沿"
    },
    "summary": {
     "en": "Timing is everything: use how long a field has been developing as a proxy for how much frontier remains, and aim to make the last great development.",
     "zh": "時機決定一切:用一個領域已經發展多久,推估前沿還剩多少,然後瞄準「最後一次重大突破」。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Thiel's navigation metaphor: you are a boat in fog, unsure if you are crossing a pond, a lake, or an ocean. The best clue is how long you have already been sailing — elapsed time is a proxy for remaining distance. The car industry shows the pattern: the 19th century was too early, the 20th century saw roughly 300 car companies founded at the right moment, and the 21st is too late for a classic car startup. The goal is not to be first but to make the last great development in a market — then the drawbridge goes up behind you.",
       "zh": "Thiel 的導航比喻:你是霧中的一條船,不知道自己在橫渡池塘、湖泊還是海洋。最好的線索是你已經航行了多久——經過的時間就是剩餘距離的代理指標。汽車業就是範本:19 世紀進場太早,20 世紀約有 300 家車廠在對的時間創立,21 世紀再開傳統車廠就太遲了。目標不是當第一個,而是做出市場上「最後一次重大突破」——然後吊橋在你身後升起。"
      }
     },
     {
      "type": "table",
      "head": {
       "en": [
        "Frontier",
        "Thiel's 2012 read"
       ],
       "zh": [
        "前沿領域",
        "Thiel 在 2012 年的判斷"
       ]
      },
      "rows": [
       {
        "en": [
         "Operating systems",
         "Microsoft was probably the last OS company — its leap is unlikely to be surpassed."
        ],
        "zh": [
         "作業系統",
         "Microsoft 大概是最後一家作業系統公司——它的躍進很難再被超越。"
        ]
       },
       {
        "en": [
         "Search",
         "Google's algorithmic breakthrough may make it the last search engine company."
        ],
        "zh": [
         "搜尋",
         "Google 的演算法突破,可能讓它成為最後一家搜尋引擎公司。"
        ]
       },
       {
        "en": [
         "Bioinformatics",
         "Promising but possibly too early — a 15–20 year trajectory, hard to call."
        ],
        "zh": [
         "生物資訊 (bioinformatics)",
         "有潛力但可能還太早——這是 15 到 20 年的長路,很難判斷。"
        ]
       },
       {
        "en": [
         "Lithium batteries",
         "Probably too late — innovation too slow, the window has closed."
        ],
        "zh": [
         "鋰電池",
         "大概太晚了——創新速度太慢,窗口已經關上。"
        ]
       },
       {
        "en": [
         "Aerospace (SpaceX)",
         "A dormant field where a 70–90% cut in launch costs was still possible — real frontier left."
        ],
        "zh": [
         "航太(SpaceX)",
         "長期停滯的領域,發射成本仍有降低 70–90% 的空間——前沿還很大。"
        ]
       },
       {
        "en": [
         "Artificial intelligence",
         "Underrated after past hype burnout; progress was relentless and measurable."
        ],
        "zh": [
         "人工智慧",
         "因過去的炒作幻滅而被低估;實際進展持續且可量測。"
        ]
       },
       {
        "en": [
         "Mobile internet",
         "A gold rush — beware crowded diggings; Google and Apple sell the shovels."
        ],
        "zh": [
         "行動網路",
         "一場淘金熱——小心人擠人的礦區;賣鏟子的是 Google 和 Apple。"
        ]
       }
      ]
     },
     {
      "type": "quote",
      "text": {
       "en": "Computers will probably beat humans in Go in 4 or 5 years.",
       "zh": "「電腦大概會在四、五年內於圍棋上擊敗人類。」"
      }
     }
    ]
   },
   {
    "id": "frontiers-and-people",
    "heading": {
     "en": "6. Frontiers and People",
     "zh": "6. 前沿與人才"
    },
    "summary": {
     "en": "Your monopoly story is also your recruiting pitch — it is the only honest answer to why a great engineer should join you instead of Google.",
     "zh": "你的獨占敘事同時就是你的徵才話術——它是「頂尖工程師為什麼該加入你而不是 Google」唯一誠實的答案。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "The deceptively simple test: why should the 20th employee join your company? The pointed version adds — when Google offers more money and more prestige. Reciting perks dodges the question. The only compelling answer is a credible claim that you are building a different monopoly: a market Google does not own, on a trajectory the recruit can verify.",
       "zh": "一個看似簡單、實則致命的測試:第 20 號員工為什麼要加入你的公司?尖銳版還要加上——當 Google 開得出更高的薪水和更亮的名聲時。背福利清單是在閃避問題。唯一有說服力的答案,是一個可信的主張:你正在建立另一個獨占——一個 Google 不擁有的市場,而且應徵者能自己驗證這條軌跡。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "The strategic corollary: never fight Google where its monopoly lives. Early-stage companies are made or broken by the quality of the people they attract, and the best people join missions, not lotteries — so the monopoly narrative from this whole class doubles as the foundation of hiring. Next question, taken up in Class 5: exactly who should join you at the frontier.",
       "zh": "策略上的推論:永遠不要在 Google 的獨占地盤上跟它開戰。早期公司的成敗取決於它吸引到什麼樣的人,而最好的人加入的是使命,不是樂透——所以本課整套獨占敘事,同時也是徵才的地基。下一個問題留給第五課:到底該找什麼樣的人一起走向前沿。"
      }
     }
    ]
   }
  ],
  "factcheck": [
   {
    "claim": {
     "en": "In 2012 Thiel predicted computers would probably beat humans at Go within 4 or 5 years, citing AI's relentless, measurable progress.",
     "zh": "2012 年 Thiel 預測,電腦大概會在四、五年內於圍棋上擊敗人類,理由是 AI 的進展持續且可量測。"
    },
    "now": {
     "en": "Almost exactly on schedule: in March 2016 Google DeepMind's AlphaGo defeated world champion Lee Sedol 4–1 in Seoul, the first time AI beat a top human professional at Go.",
     "zh": "幾乎分毫不差:2016 年 3 月,Google DeepMind 的 AlphaGo 在首爾以 4 比 1 擊敗世界冠軍李世乭(Lee Sedol),是 AI 首次在圍棋上戰勝頂尖人類職業棋士。"
    },
    "sourceTitle": "CNBC: Google DeepMind's AlphaGo beats Go champion Lee Sedol in AI milestone in Seoul",
    "sourceUrl": "https://www.cnbc.com/2016/03/08/google-deepminds-alphago-takes-on-go-champion-lee-sedol-in-ai-milestone-in-seoul.html"
   },
   {
    "claim": {
     "en": "Thiel argued Twitter's position was so durable it was almost impossible to imagine a technological future where anyone could compete with it, even though its business model was unclear.",
     "zh": "Thiel 主張 Twitter 的位置極其穩固,幾乎無法想像有哪種科技未來能與它競爭——儘管它當時的商業模式並不明朗。"
    },
    "now": {
     "en": "Partly vindicated: Elon Musk bought Twitter in 2022 and rebranded it X, triggering user exoduses and a wave of rivals (Threads, Bluesky, Mastodon) — yet by 2026 X had survived them all as the dominant microblogging platform, with Bluesky's daily activity falling well off its peak.",
     "zh": "部分應驗:Elon Musk 在 2022 年買下 Twitter 並改名為 X,引發用戶出走潮與一波競品(Threads、Bluesky、Mastodon)——但到 2026 年,X 仍撐過所有挑戰者、穩坐微網誌平台龍頭,Bluesky 的日活躍度更從高峰大幅回落。"
    },
    "sourceTitle": "The National: How X survived Bluesky, Mastodon, Post, Threads and an ocean of critics",
    "sourceUrl": "https://www.thenationalnews.com/news/us/2026/08/07/x-twitter-alternatives-elon-musk-bluesky/"
   }
  ],
  "quiz": [
   {
    "q": {
     "en": "According to Thiel, why do both monopolies and highly competitive firms misdescribe their market position?",
     "zh": "根據 Thiel 的說法,為什麼獨占者和身處激烈競爭的公司都會謊報自己的市場地位?"
    },
    "options": [
     {
      "en": "Neither type of firm can actually measure its own market share.",
      "zh": "兩種公司其實都無法衡量自己的市占率。"
     },
     {
      "en": "Monopolies downplay dominance to avoid antitrust scrutiny, while competitive firms exaggerate uniqueness to attract capital.",
      "zh": "獨占者淡化支配地位以避開反托拉斯審查,競爭中的公司則誇大獨特性以吸引資金。"
     },
     {
      "en": "Both exaggerate their dominance to intimidate potential entrants.",
      "zh": "兩者都誇大自己的支配力,以嚇阻潛在進入者。"
     },
     {
      "en": "Accounting rules force every firm to report a conservative market definition.",
      "zh": "會計準則強迫每家公司採用保守的市場定義。"
     }
    ],
    "answer": 1,
    "explain": {
     "en": "The incentives point in opposite directions but converge on the same distortion: monopolists whisper 'we're just one player in a huge market' to regulators, while commodity firms shout 'we're one of a kind' to investors. Both push perceived reality toward the middle, which is why Thiel says the truth is more binary than it looks.",
     "zh": "兩種誘因方向相反,卻造成同一種扭曲:獨占者對監管機關低聲說「我們只是大市場裡的一個小玩家」,而大宗商品化的公司對投資人高喊「我們獨一無二」。兩邊都把外界認知往中間推,所以 Thiel 才說真相比表象更接近二元。"
    }
   },
   {
    "q": {
     "en": "Which of the following is NOT one of the four foundations of market ownership discussed in this class?",
     "zh": "下列何者「不是」本課討論的四大市場擁有權基礎之一?"
    },
    "options": [
     {
      "en": "Network effects",
      "zh": "網路效應"
     },
     {
      "en": "Proprietary technology",
      "zh": "專有技術"
     },
     {
      "en": "Being first to enter the market",
      "zh": "第一個進入市場"
     },
     {
      "en": "Scale cost advantages",
      "zh": "規模成本優勢"
     }
    ],
    "answer": 2,
    "explain": {
     "en": "The four foundations are brand, scale cost advantages, network effects, and proprietary technology. Being first is conspicuously absent — the whole point of the class is that moving first only matters if it lets you build these durable advantages; otherwise the last mover who perfects the market wins.",
     "zh": "四大基礎是品牌、規模成本優勢、網路效應、專有技術。「先進場」明顯不在其中——本課的核心正是:先行只有在能幫你建立這些持久優勢時才有意義;否則贏家是把市場做到極致的後發者(last mover)。"
    }
   },
   {
    "q": {
     "en": "In the boat-in-the-fog metaphor, what does the time you have already spent sailing represent?",
     "zh": "在「霧中行船」的比喻裡,你已經航行的時間代表什麼?"
    },
    "options": [
     {
      "en": "A proxy for how much distance — how much frontier — likely remains ahead.",
      "zh": "剩餘距離的代理指標——前方大概還剩多少前沿可以開發。"
     },
     {
      "en": "The amount of funding a startup has already burned.",
      "zh": "新創已經燒掉的資金量。"
     },
     {
      "en": "Proof that the market has already closed to new entrants.",
      "zh": "市場已對新進者關閉的證明。"
     },
     {
      "en": "The number of competitors that have entered the field.",
      "zh": "已經進入該領域的競爭者數量。"
     }
    ],
    "answer": 0,
    "explain": {
     "en": "If you've been sailing an hour you may be crossing a pond; if you've sailed for days it's an ocean. Likewise, how long a technology field has been developing hints at how much development remains — which is how Thiel judges cars (too late), lithium batteries (probably too late), and aerospace or AI (frontier still open).",
     "zh": "如果只航行了一小時,你可能在渡池塘;航行了好幾天,那就是海洋。同理,一個技術領域已經發展了多久,暗示它還剩多少可發展的空間——Thiel 就是這樣判斷汽車(太遲)、鋰電池(大概太遲),以及航太與 AI(前沿仍開放)。"
    }
   }
  ]
 },
 {
  "slug": "class-5",
  "layout": "lesson",
  "icon": "menu_book",
  "navLabel": "5",
  "classNo": 5,
  "sourceUrl": "https://blakemasters.tumblr.com/post/21437840885/peter-thiels-cs183-startup-class-5-notes-essay",
  "title": {
   "en": "The Mechanics of Mafia",
   "zh": "幫派的養成機制 (The Mechanics of Mafia)"
  },
  "subtitle": {
   "en": "Great startups feel like mafias: talent-dense, alike, loyal for the long haul, and ready to fight when they must.",
   "zh": "偉大的新創像幫派:人才密集、彼此相似、長期忠誠,必要時也懂得作戰。"
  },
  "objectives": [
   {
    "en": "Place any company on the culture spectrum between mercenary consulting firm and dogmatic cult, and explain why the winning zone is in between.",
    "zh": "能將任何公司放在「傭兵型顧問公司」與「教條式邪教」之間的文化光譜上,並說明為什麼贏家落在中間地帶。"
   },
   {
    "en": "Diagnose whether a team can both create (non-zero-sum work) and fight (zero-sum conflict), and spot passivity as an investor-grade red flag.",
    "zh": "能判斷一個團隊是否既能創造(非零和)也能作戰(零和),並看出「過度被動」是投資人眼中的重大警訊。"
   },
   {
    "en": "Apply PayPal-style hiring rules: optimize the early team for sameness and speed, treat any doubt as disqualifying, and prize equity-minded candidates.",
    "zh": "能運用 PayPal 式的招聘原則:早期團隊追求同質與速度、任何疑慮即出局,並偏好在意股權的候選人。"
   },
   {
    "en": "Recruit engineers against a giant like Google with narrative and compounding growth instead of cash.",
    "zh": "能在不比薪水的情況下,用故事與能力複利說服工程師放棄 Google 這類巨頭,加入新創。"
   }
  ],
  "sections": [
   {
    "id": "culture-spectrum",
    "heading": {
     "en": "1. The Culture Spectrum: Nihilists vs. Cults",
     "zh": "1. 文化光譜:虛無主義 vs. 邪教"
    },
    "summary": {
     "en": "Good culture sits between the belief-free anti-culture of a consulting firm and the fervent wrongness of a cult.",
     "zh": "好的文化介於顧問公司「什麼都不信」的反文化,與邪教「狂熱但錯誤」的信仰之間。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Everyone agrees culture matters, but it is hard to say what an ideal culture actually is. Thiel anchors the question with two extremes. At one end is the cult: a group with intense, distinctive shared beliefs that happen to be badly wrong, sealed off from outside correction. At the other end is the big consulting firm: an anti-culture where nothing binds people beyond the billable hour, a kind of professional nihilism. Neither extreme builds anything great, but the early Microsoft team shows that some version of strong culture clearly works.",
       "zh": "人人都同意文化很重要,但很難說清楚理想的文化究竟長什麼樣。Thiel 用兩個極端來定位這個問題。一端是邪教(cult):一群人共享強烈而獨特的信念,只可惜信錯了,而且封閉到外界無法糾正。另一端是大型顧問公司:一種「反文化」,除了計費工時之外沒有任何東西把人綁在一起,近乎職業上的虛無主義。兩個極端都成不了大事,但早期 Microsoft 團隊證明,某種強文化確實行得通。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "The target is the middle of the spectrum, tilted toward conviction: a team that shares a distinctive philosophy about its mission which outsiders may not get. Crucially, sameness for its own sake is not culture. Shared traits and individual differences only matter to the extent they serve the company's core purpose; everything else is decoration.",
       "zh": "目標是落在光譜中段、但偏向「有信念」的那一側:團隊對自身使命抱持一套外人未必理解的獨特哲學。關鍵在於,為同質而同質並不是文化。成員的共同點與差異,只有在服務公司核心使命時才有意義,其餘都只是裝飾。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Cult: fervent shared beliefs that are wrong and closed to correction.",
        "Consulting firm: no shared beliefs at all — mercenaries renting out hours.",
        "Great startup: fervent shared beliefs about the mission that turn out to be right.",
        "Test every hiring or culture choice against the mission, not against personal taste."
       ],
       "zh": [
        "邪教:狂熱的共同信念,但信錯了,而且拒絕修正。",
        "顧問公司:毫無共同信念——一群出租工時的傭兵。",
        "偉大的新創:對使命抱持狂熱的共同信念,而且信對了。",
        "所有招聘與文化決策,都該用使命來檢驗,而不是用個人喜好。"
       ]
      }
     }
    ]
   },
   {
    "id": "zero-sum-or-not",
    "heading": {
     "en": "2. Zero-Sum or Not: To Fight or Not to Fight",
     "zh": "2. 零和與否:打,還是不打?"
    },
    "summary": {
     "en": "Avoid competition wherever possible, but when a fight is unavoidable, fight hard and win — and build a team capable of both modes.",
     "zh": "能避開競爭就避開;但當戰鬥無法避免時,就要狠狠打贏——而且團隊必須兩種模式都會。"
    },
    "blocks": [
     {
      "type": "quote",
      "text": {
       "en": "Capitalism and competition are better seen as antonyms than as synonyms.",
       "zh": "資本主義與競爭,與其說是同義詞,不如說是反義詞。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "The default move is to build where others are not, since value comes from escaping competition, not winning races. But conflicts still find you. Thiel cites Gandhi's wartime counsel of total non-resistance — letting an invader take everything rather than fighting — as gracious philosophy and terrible startup advice. The operating rule: do not seek fights, but when one is forced on you, commit fully and win, preferably through speed and innovation rather than brute aggression.",
       "zh": "預設策略是去別人不在的地方創造,因為價值來自逃離競爭,而不是贏得賽跑。但衝突還是會找上門。Thiel 引用甘地(Gandhi)戰時「完全不抵抗」的主張——寧可讓侵略者拿走一切也不還手——認為那或許是高尚的哲學,卻是糟糕透頂的創業建議。行動準則是:不要主動找架打,但當戰爭被強加在你身上,就要全力以赴打贏,而且最好靠速度與創新,而非蠻力。"
      }
     },
     {
      "type": "table",
      "head": {
       "en": [
        "Team make-up",
        "Failure mode or strength"
       ],
       "zh": [
        "團隊組成",
        "失敗模式或優勢"
       ]
      },
      "rows": [
       {
        "en": [
         "All creators (nerds)",
         "Never notice they have wandered into a war until it is over; crushed by their own naivete."
        ],
        "zh": [
         "全是創造者(書呆子型)",
         "直到戰爭結束才發現自己早已身在戰場,被自己的天真輾壓。"
        ]
       },
       {
        "en": [
         "All fighters (athletes)",
         "Instinctively charge into crowded, competitive markets and fight even when they should not."
        ],
        "zh": [
         "全是戰士(運動員型)",
         "本能地衝進擁擠的競爭市場,連不該打的仗也照打。"
        ]
       },
       {
        "en": [
         "Mostly creators plus some fighters, in a monopoly business",
         "The ideal: build in peace, and defend decisively when attacked."
        ],
        "zh": [
         "以創造者為主、搭配少數戰士,經營獨占事業",
         "理想狀態:平時安心創造,遭攻擊時果斷防守。"
        ]
       }
      ]
     },
     {
      "type": "p",
      "text": {
       "en": "The same lens works as an investor heuristic. Founders Fund once examined a cleantech company with excellent scientists and real technology — but founders and employees together held only about 20% of the equity, with VCs holding the other 80%. Asked about it, the team said they cared about the technology, not ownership. That settled the decision: a team too passive to hold its ground against its own investors will not hold its ground against competitors.",
       "zh": "同一套視角也能當投資判斷法。Founders Fund 曾評估一家潔淨科技(cleantech)公司:科學家一流、技術扎實——但創辦人加員工只持有約 20% 股權,其餘 80% 在創投手上。被問到這件事時,團隊說他們在乎的是技術,不是股權。這一句話就決定了結論:連面對自己投資人都守不住立場的團隊,面對競爭者時更不可能守得住。"
      }
     }
    ]
   },
   {
    "id": "hiring-the-mafia",
    "heading": {
     "en": "3. Hiring: Talent Density, Sameness, and the No-Doubt Rule",
     "zh": "3. 招聘:人才密度、同質性與「零疑慮」原則"
    },
    "summary": {
     "en": "Culture cannot manufacture talent — hiring does; early teams should optimize for sameness and speed, and any real doubt about a candidate is disqualifying.",
     "zh": "文化無法製造人才,招聘才可以;早期團隊要為同質與速度而優化,對候選人只要有真正的疑慮,就直接出局。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Palantir co-founder Stephen Cohen argues good culture merely reflects and amplifies three underlying properties: talented people, a long-term time horizon, and a generative, creative spirit. Culture cannot create talent from non-talent — his objection to the famous Netflix culture deck — and it can always do more harm than good. That makes hiring the highest-stakes act: the people you wrongly let in cost more than almost anything, and firing your way back to quality later is destructive even when necessary.",
       "zh": "Palantir 共同創辦人 Stephen Cohen 認為,好文化只是三種底層特質的反映與放大器:有才華的人、長期的時間視野、以及旺盛的創造精神。文化無法把庸才變成人才——這正是他對知名 Netflix 文化簡報的異議——而且文化造成的傷害,永遠可能大於好處。因此招聘是風險最高的一件事:錯放進來的人代價高於一切,而事後靠開除來補救,即使必要也極具破壞性。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "PayPal's war stories make it concrete. The company first hired only friends, because vetting strangers kept failing; one outside sysadmin hire showed up late, skipped backups, and nearly killed the company when the database crashed — it survived only because another engineer had been quietly making his own backups. Max Levchin draws the sharper lesson: a startup's single weapon is speed, and demographic variety in a tiny team creates n-squared communication overhead. Early PayPal was deliberately uniform — Illinois and Stanford nerds who read the same science fiction and could understand each other in half-sentences. They rejected a candidate who aced every test but talked about playing hoops, and they regretted overriding their hesitation about a candidate who seemed culturally close but shaky at coding.",
       "zh": "PayPal 的實戰故事把這件事講得很具體。公司起初只雇朋友,因為篩選陌生人一再失敗;一位外聘的系統管理員上班遲到、不做備份,資料庫當機時差點讓公司滅頂——全靠另一位工程師默默自做備份才活下來。Max Levchin 的結論更尖銳:新創唯一的武器是速度,而小團隊裡的背景差異會造成 n 平方級的溝通成本。早期 PayPal 刻意同質——一群來自伊利諾大學與 Stanford、讀同樣科幻小說、半句話就能互相聽懂的書呆子。他們曾拒絕一位測驗全過、卻說自己喜歡打「hoops」(籃球)的候選人;也曾後悔壓下疑慮,錄取一位文化上看似契合、寫程式卻不穩的候選人。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "The notion that diversity in an early team is important or good is completely wrong.",
       "zh": "認為早期團隊的多元化很重要或很好,這個想法完全是錯的。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "Whenever there's any doubt, there's no doubt.",
       "zh": "只要有任何疑慮,其實就沒有疑慮了——答案就是不行。"
      }
     },
     {
      "type": "cards",
      "items": [
       {
        "title": {
         "en": "Show, don't tell",
         "zh": "看表現,不聽宣稱"
        },
        "body": {
         "en": "Cohen: talent shows itself. Judge what candidates demonstrate, not what they claim, and imagine them actually working beside you.",
         "zh": "Cohen:才華自己會現形。評斷候選人展現了什麼,而不是他宣稱了什麼,並想像他真的坐在你旁邊工作的樣子。"
        }
       },
       {
        "title": {
         "en": "Surface doubts live",
         "zh": "當場說出疑慮"
        },
        "body": {
         "en": "Raise concerns during the interview instead of swallowing them; unspoken doubts always resurface after the hire.",
         "zh": "疑慮要在面試當下提出,不要吞下去;沒說出口的疑慮,錄取後一定會再冒出來。"
        }
       },
       {
        "title": {
         "en": "Screen for badness, not taste",
         "zh": "篩掉真缺陷,不篩個人品味"
        },
        "body": {
         "en": "Dogmatism about surface preferences (like code syntax) is personal bias, not engineering judgment. Quirkiness is fine — the most talented people are rarely conventional, and flashy designer clothes rarely coincide with great engineering.",
         "zh": "對表面偏好(例如程式碼語法風格)的教條堅持,是個人偏見而非工程判斷。古怪沒關係——最頂尖的人才很少是循規蹈矩的,而一身名牌行頭的人,很少同時是頂尖工程師。"
        }
       },
       {
        "title": {
         "en": "Beware nine Steve Jobses",
         "zh": "小心九個賈伯斯"
        },
        "body": {
         "en": "Ask how candidates see themselves and why they made past big decisions. One next-Steve-Jobs is fine; a team of ten produces nine frustrated egos, and blame-shifting about the past predicts dodged accountability later.",
         "zh": "問候選人如何看待自己、以及過去重大決定的理由。一個「下一個 Steve Jobs」沒問題;十個湊成一隊,就會有九個受挫的自尊。而把過去的決定推給別人的人,將來也會逃避責任。"
        }
       }
      ]
     }
    ]
   },
   {
    "id": "internal-conflict",
    "heading": {
     "en": "4. Fighting Inside: Respect Beats Niceness",
     "zh": "4. 內部的戰爭:尊重勝過和氣"
    },
    "summary": {
     "en": "Companies are destroyed from the inside before competitors get them; suppressed disagreement is deadlier than loud argument, as long as anger targets problems and rests on respect.",
     "zh": "公司總是先從內部被摧毀,才輪得到競爭者;只要怒氣對事不對人、底層有尊重,壓抑歧見比大聲爭吵致命得多。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "PayPal's management meetings were loud and contentious — people got told off bluntly when they deserved it. At his next company, Slide, Levchin deliberately engineered a nicer, more harmonious environment, assuming it would improve performance. It did the opposite. Smart, driven people get angry at obstacles to progress, not at each other; bluntness signals trust in a colleague's competence. Slide's politeness masked a quiet, passive-aggressive disrespect, and by the time Levchin forced a painful reset, the damage was done. Respect, not niceness, is the real currency.",
       "zh": "PayPal 的管理層會議吵鬧而火爆——該被罵的人就會被直接罵。到了下一家公司 Slide,Levchin 刻意打造更和氣、更和諧的環境,以為這會提升績效,結果適得其反。聰明又拚命的人,生氣的對象是擋住進度的障礙,而不是彼此;直言不諱反而代表你信任同事的能力。Slide 的客氣底下藏著安靜的、被動攻擊式的不尊重,等到 Levchin 被迫進行痛苦的大整頓時,傷害早已造成。真正的貨幣是尊重,不是和氣。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Thiel generalizes: companies are destroyed internally before external competition ever finishes them off. Suppressing disagreements because conflict feels uncomfortable just lets problems fester unseen. A team moving in perfect lockstep is a warning sign, not an ideal; real companies have ups and downs, and it is the concealed resentments that wreck the ship in a vulnerable moment.",
       "zh": "Thiel 把這件事一般化:公司總是先被內部摧毀,外部競爭者只是收尾。因為衝突令人不舒服就壓下歧見,只會讓問題在暗處潰爛。全員步伐一致、毫無雜音,是警訊而不是理想;真實的公司本來就有起伏,而在最脆弱的時刻讓船沉沒的,正是那些被藏起來的怨氣。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Healthy: loud debate about the work, blunt feedback, visible ups and downs.",
        "Unhealthy: polite surfaces over passive-aggressive contempt.",
        "Unhealthy: perfect harmony and lockstep agreement — something is being hidden.",
        "Fix problems early; a late bloodletting costs far more than an early hard conversation."
       ],
       "zh": [
        "健康:對工作大聲辯論、回饋直接、起伏攤在檯面上。",
        "不健康:表面客氣,底下是被動攻擊式的輕蔑。",
        "不健康:完美和諧、全員一致——代表有事被藏起來了。",
        "問題要趁早處理;拖到最後的大清洗,代價遠高於及早的一次艱難對話。"
       ]
      }
     }
    ]
   },
   {
    "id": "equity-love-google",
    "heading": {
     "en": "5. Equity, Love, and Out-Recruiting Google",
     "zh": "5. 股權、熱愛,與跟 Google 搶人"
    },
    "summary": {
     "en": "The best hires think in ownership and commit for a decade out of love; you win them from giants with a story about meaning and compounding, never with cash.",
     "zh": "最好的人才用股權思考、因為熱愛而投入十年;要從巨頭手上搶到他們,靠的是意義與複利的故事,絕不是現金。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Compensation behavior is a screening signal. Candidates who haggle hard over salary are a warning; the best ones ask about the denominator — what fraction of the whole company their shares represent — because they think like owners. Sales roles deserve the same rigor as engineering: good salespeople are smart, so test them with lateral-thinking problems, and borrow the IronPort trick of asking for W-2s, since commission history cannot be inflated by storytelling.",
       "zh": "候選人對報酬的態度本身就是篩選訊號。死命殺價談薪水的人是警訊;最好的人會問「分母」——他拿到的股數佔整家公司的比例是多少——因為他們用所有權思考。業務職也該用工程師等級的嚴格標準:好的業務很聰明,可以用橫向思考題測試,還可以借用 IronPort 的招數:直接要 W-2 報稅單,因為佣金紀錄是編不出來的。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Cohen's core claim: money can buy about one year of an engineer's all-out effort, but no amount of money buys ten years — that requires love of the work and the mission. Most startup value accrues over long horizons, which is why eBay's purchase of PayPal backfired on talent: the engineers left, and eBay had to rehire them as consultants at roughly three times their old salaries because nobody else could run the systems. Against Google, never compete on cash — its search business throws off tens of billions a year and will outbid you every time. Tell the true story instead: at Google you are an interchangeable cog; here you are instrumental, and one percent of something new is more exciting than a comfortable salary and a cubicle.",
       "zh": "Cohen 的核心主張:錢可以買到工程師大約一年的全力以赴,但再多的錢也買不到十年——那需要對工作與使命的熱愛。新創的價值多半在長期才兌現,這正是 eBay 收購 PayPal 後在人才上吃癟的原因:工程師集體離開,eBay 只好用約三倍的舊薪水把他們請回來當顧問,因為沒有別人有能力維運那套系統。面對 Google,絕對不要比現金——它的搜尋事業一年產出數百億美元,出價永遠比你高。要說的是那個真實的故事:在 Google 你是可替換的齒輪;在這裡你是關鍵人物,而新事物的百分之一,比一份舒服的薪水加一個小隔間刺激得多。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Cohen's closer — intelligence compounds: a 22-year-old at Google is comfortable but implicitly paid to accept a lower rate of intellectual growth.",
        "Missing years of compounding on your own abilities is astronomically expensive; comfortable engineers eventually stall.",
        "The honest recruiting pitch: the startup, not Google, is the best thing for the candidate's own development.",
        "Meet real cash-flow needs (rent, a life), then sell ownership and growth, not salary."
       ],
       "zh": [
        "Cohen 的收尾論點——智力會複利:22 歲進 Google 很舒服,但等於被付錢接受較低的智識成長率。",
        "錯過自身能力的長期複利,代價高得驚人;過得太舒服的工程師終將停滯。",
        "最誠實的招募說法:對候選人自己的成長而言,新創才是最好的選擇,不是 Google。",
        "先滿足基本現金流需求(房租、正常生活),然後賣的是所有權與成長,不是薪水。"
       ]
      }
     }
    ]
   },
   {
    "id": "debate-and-search",
    "heading": {
     "en": "6. What to Debate, and Where to Search",
     "zh": "6. 該爭論什麼、該往哪裡找"
    },
    "summary": {
     "en": "Shut down debate where the decision is already made, demand it where real uncertainty remains, and search for your business vertically — deep, not wide.",
     "zh": "已定案的事就別再吵,真正不確定的事必須吵;而尋找事業機會要走垂直路線——往深處挖,不是往寬處掃。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Levchin's rule for diversity of opinion: some topics must be off-limits. PayPal decreed that relitigating the choice of C++ was pointless — the language had flaws, but arguing about it only burned speed. Yet on marketing, tactics, and strategy, dissent is essential, because groupthink there is fatal. The heuristic: suppress debate where the organization already has clarity; insist on it where the stakes are high and the answer is genuinely uncertain.",
       "zh": "Levchin 對「意見多元」的規則是:有些議題必須列為禁區。PayPal 明令不准再吵 C++ 的選擇——這語言確實有缺點,但吵它只是在燒掉速度。然而在行銷、戰術與策略上,異議不可或缺,因為那裡的集體盲思(groupthink)是致命的。判斷法則:組織已有明確共識的事,停止辯論;攸關重大且真正不確定的事,必須辯論。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "When the facts change, I change my mind. What do you do?",
       "zh": "當事實改變,我就改變想法。你呢?"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Thiel closes with a caution against over-applying Keynes's famous line: perpetually reopening strategy is its own failure mode. Think of the search space for great businesses as vertical, not horizontal. Depth in one domain compounds; shallow scanning across many domains only feels thorough because people underestimate how vast the space is. An internet company announcing a move into cleantech is not being flexible — it is announcing that it is lost.",
       "zh": "Thiel 最後提醒,別把凱因斯(Keynes)這句名言用過頭:不停重啟策略辯論本身就是一種失敗模式。尋找偉大事業的搜尋空間應該垂直思考,而非水平思考。在單一領域的深度會複利;在許多領域淺淺掃過只是感覺周全,因為人們低估了這個空間有多浩瀚。一家網路公司宣布跨足潔淨科技,不是展現彈性——是在宣告自己迷路了。"
      }
     }
    ]
   }
  ],
  "factcheck": [
   {
    "claim": {
     "en": "In 2012, Stephen Cohen's Palantir was presented as a private, little-known startup exemplifying talent density and an unusually long-term time horizon.",
     "zh": "2012 年課堂上,Stephen Cohen 的 Palantir 還是一家外界不太熟悉的未上市新創,被當成人才密度與超長期時間視野的範例。"
    },
    "now": {
     "en": "The long horizon paid off spectacularly: Palantir went public in 2020, joined the S&P 500, and by August 2026 traded around a $400+ billion market cap, ranking among the world's most valuable companies.",
     "zh": "長期視野獲得驚人回報:Palantir 於 2020 年上市、納入 S&P 500,到 2026 年 8 月市值約在 4,000 億美元以上,躋身全球最有價值的公司之列。"
    },
    "sourceTitle": "The Motley Fool — Palantir Is Worth $413 Billion (Aug 2026)",
    "sourceUrl": "https://www.fool.com/investing/2026/08/08/palantir-is-worth-413-billion-the-500-billion-line/"
   },
   {
    "claim": {
     "en": "Levchin told the class that Slide's engineered niceness backfired, and that the painful reset came too late to save the culture he wanted.",
     "zh": "Levchin 在課堂上坦承,Slide 刻意營造的和氣文化適得其反,痛苦的大整頓來得太晚。"
    },
    "now": {
     "en": "Slide was sold to Google in 2010 for a reported $182 million and shut down soon after. Levchin's next company, Affirm, built with far more PayPal-style intensity, went public in January 2021 with shares nearly doubling on debut.",
     "zh": "Slide 於 2010 年以約 1.82 億美元賣給 Google,不久後即被關閉。Levchin 的下一家公司 Affirm 以更接近 PayPal 式的強度打造,2021 年 1 月上市,首日股價幾乎翻倍。"
    },
    "sourceTitle": "CNBC — Max Levchin's Affirm pops nearly 100% in market debut",
    "sourceUrl": "https://www.cnbc.com/2021/01/13/affirm-ipo-afrm-starts-trading-on-nasdaq.html"
   }
  ],
  "quiz": [
   {
    "q": {
     "en": "On Thiel's culture spectrum, where should a startup aim to sit?",
     "zh": "在 Thiel 的文化光譜上,新創應該把自己放在哪裡?"
    },
    "options": [
     {
      "en": "As close as possible to the detached professionalism of a consulting firm",
      "zh": "盡量靠近顧問公司那種超然的專業主義"
     },
     {
      "en": "At full cult-level devotion, sealed off from all outside input",
      "zh": "徹底的邪教式虔誠,完全隔絕外界意見"
     },
     {
      "en": "Between consultant nihilism and cult dogmatism — strong shared beliefs about the mission, still open to correction",
      "zh": "介於顧問式虛無主義與邪教式教條之間——對使命有強烈共同信念,但仍可被修正"
     },
     {
      "en": "Culture is irrelevant as long as the product is good enough",
      "zh": "只要產品夠好,文化根本無關緊要"
     }
    ],
    "answer": 2,
    "explain": {
     "en": "Both extremes fail: consultants share nothing beyond billable hours, and cults believe intensely in something wrong. A great startup keeps the intensity of shared belief but points it at a mission that is actually right — and stays correctable.",
     "zh": "兩個極端都會失敗:顧問公司除了計費工時之外一無所共,邪教則狂熱地信錯了東西。偉大的新創保留信念的強度,但把它對準真正正確的使命——而且保持可被修正。"
    }
   },
   {
    "q": {
     "en": "Why did Founders Fund treat the cleantech team's 20% ownership (vs. 80% for VCs) as disqualifying?",
     "zh": "為什麼 Founders Fund 認為那家潔淨科技公司「團隊持股 20%、創投持股 80%」是一票否決的理由?"
    },
    "options": [
     {
      "en": "The cap table made future fundraising legally impossible",
      "zh": "這樣的股權結構讓未來募資在法律上不可行"
     },
     {
      "en": "It revealed a passivity so deep that a team unable to stand up to its own investors could never stand up to competitors",
      "zh": "它暴露了深層的被動性:連面對自家投資人都守不住立場的團隊,更不可能對抗競爭者"
     },
     {
      "en": "Founders Fund only invests when founders keep at least 50% of the equity",
      "zh": "Founders Fund 規定創辦人必須至少保留 50% 股權才投資"
     },
     {
      "en": "Cleantech was considered a fundamentally unattractive sector",
      "zh": "潔淨科技本身就被視為毫無吸引力的產業"
     }
    ],
    "answer": 1,
    "explain": {
     "en": "The technology and team were excellent; the ownership split itself was the symptom, not the crime. What killed the deal was what it revealed: founders who shrugged off being negotiated down to 20% showed they lacked the fighting instinct that competitive situations would eventually demand.",
     "zh": "技術與團隊都很優秀;股權比例本身只是症狀,不是罪行。真正否決這筆投資的,是它揭露的事實:被談判壓到只剩 20% 還無所謂的創辦人,缺乏未來競爭局面終將需要的戰鬥本能。"
    }
   },
   {
    "q": {
     "en": "According to Stephen Cohen, what can compensation alone actually buy from an engineer?",
     "zh": "根據 Stephen Cohen 的說法,光靠報酬到底能從一位工程師身上買到什麼?"
    },
    "options": [
     {
      "en": "A full decade of loyalty, if enough equity is included",
      "zh": "只要股權給得夠多,就能買到整整十年的忠誠"
     },
     {
      "en": "About one year of all-out effort — ten years requires genuine love of the work",
      "zh": "大約一年的全力以赴——十年的投入需要對工作真正的熱愛"
     },
     {
      "en": "Nothing at all; great engineers ignore money completely",
      "zh": "什麼都買不到;偉大的工程師完全不在乎錢"
     },
     {
      "en": "Permanent retention, as long as you match Google's offer",
      "zh": "只要開得出跟 Google 一樣的價碼,就能永久留住人"
     }
    ],
    "answer": 1,
    "explain": {
     "en": "Money is a one-year lease on effort, not a decade-long bond. Engineers who fall in love with the mission stop optimizing their comp package and just start working — which is why the winning recruiting pitch is narrative and growth, not a bidding war you will lose to Google.",
     "zh": "錢只能租到一年的拚勁,換不到十年的羈絆。真正愛上使命的工程師會停止計較待遇細節,直接開始做事——這也是為什麼致勝的招募話術是故事與成長,而不是一場你注定輸給 Google 的競價戰。"
    }
   }
  ]
 },
 {
  "slug": "class-6",
  "layout": "lesson",
  "icon": "menu_book",
  "navLabel": "6",
  "classNo": 6,
  "sourceUrl": "https://blakemasters.tumblr.com/post/21742864570/peter-thiels-cs183-startup-class-6-notes-essay",
  "title": {
   "en": "Thiel's Law",
   "zh": "提爾定律(Thiel's Law)"
  },
  "subtitle": {
   "en": "Foundations are destiny: alignment among founders, employees, and investors is set at the start and nearly impossible to fix later.",
   "zh": "基礎決定命運:創辦人、員工與投資人之間的利益對齊,在創立之初就已定型,事後幾乎無法補救。"
  },
  "objectives": [
   {
    "en": "Explain Thiel's Law — why decisions made at a company's founding are nearly irreversible and shape everything it later becomes.",
    "zh": "說明提爾定律(Thiel's Law):為什麼創立時的決定幾乎不可逆,並決定公司日後的一切走向。"
   },
   {
    "en": "Set a startup up correctly: a Delaware C-corp, with a clear view of who owns, who operates, and who controls the company.",
    "zh": "正確地架設公司:選擇德拉瓦州 C 型股份有限公司(Delaware C-corp),並釐清誰擁有、誰經營、誰控制這家公司。"
   },
   {
    "en": "Use equity, vesting schedules, and low cash pay to keep founders, employees, and investors pulling in the same direction.",
    "zh": "運用股權、分期歸屬(vesting)與低現金薪資,讓創辦人、員工與投資人朝同一個方向使力。"
   },
   {
    "en": "Read a financing term sheet: convertible notes, option pools, liquidation preferences, anti-dilution — and why a down round breaks a company.",
    "zh": "看懂募資條件書(term sheet):可轉換公司債(convertible note)、選擇權池(option pool)、清算優先權(liquidation preference)、反稀釋條款,以及為什麼估值下修輪(down round)會毀掉一家公司。"
   }
  ],
  "sections": [
   {
    "id": "foundings-are-forever",
    "heading": {
     "en": "1. Foundings Are Forever",
     "zh": "1. 創立時刻,影響一生"
    },
    "summary": {
     "en": "Companies, like countries, live under rules written at their founding — and a botched foundation cannot be repaired later.",
     "zh": "公司和國家一樣,活在創立時寫下的規則之下;基礎打壞了,之後再也修不好。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Thiel opens with constitutions: the United States still lives under compromises struck at its founding — tiny Alaska gets as many senators as giant California. Companies work the same way. The founding moment is when the rules, formal and cultural, get written, and they keep governing long after everyone forgets writing them. At Google, internal debates years later were settled by appealing to what the founders decided at the start. The founding era arguably lasts as long as a company keeps creating genuinely new things — which is also why founders should stay in charge while it does.",
       "zh": "Thiel 從憲法談起:美國至今仍活在建國時的政治妥協之下——人口極少的阿拉斯加州,參議員席次卻和巨大的加州一樣多。公司也是如此。創立的那一刻,正式與文化上的規則同時被寫下,而它們會在所有人都忘了自己寫過之後,仍持續支配公司。Google 多年後的內部爭論,常靠「創辦人當初怎麼決定」一錘定音。可以說,只要公司還在創造真正新的東西,「創立時期」就還沒結束——這也是為什麼在這段期間,應該由創辦人掌舵。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "A startup messed up at its foundation cannot be fixed.",
       "zh": "在基礎上搞砸的新創公司,是無法修復的。"
      }
     },
     {
      "type": "table",
      "head": {
       "en": [
        "Culture",
        "Weak alignment structure",
        "Strong alignment structure"
       ],
       "zh": [
        "文化類型",
        "對齊結構弱",
        "對齊結構強"
       ]
      },
      "rows": [
       {
        "en": [
         "High trust",
         "Anarchy — chaotic, but it can work for a while, like early Google",
         "The ideal — people trust each other, and the rules reinforce that trust"
        ],
        "zh": [
         "高信任",
         "無政府狀態(anarchy)——混亂但短期可行,如早期的 Google",
         "理想狀態——人們彼此信任,規則又進一步強化這種信任"
        ]
       },
       {
        "en": [
         "Low trust",
         "Dog-eat-dog — a mercenary environment that grinds people down",
         "Totalitarian — rules enforced through fear, like Foxconn"
        ],
        "zh": [
         "低信任",
         "弱肉強食——唯利是圖的環境,把人消磨殆盡",
         "極權式——靠恐懼執行規則,如富士康(Foxconn)"
        ]
       }
      ]
     },
     {
      "type": "p",
      "text": {
       "en": "The single most important founding decision is who you found with. Co-founders need a real shared history and complementary strengths; grabbing one in a hurry because you feel you need one is how companies get pre-broken. A brilliant team that cannot get along fails no matter how good everything else is.",
       "zh": "創立時最重要的決定,是「和誰一起創業」。共同創辦人之間需要真實的共同經歷與互補的長處;因為覺得「該有個共同創辦人」而倉促抓一個,公司從一開始就注定壞掉。一個彼此處不來的天才團隊,不管其他條件多好,終究會失敗。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "Getting married to the first person you meet at the slot machines in Vegas probably doesn't [make sense].",
       "zh": "和你在拉斯維加斯吃角子老虎機旁遇到的第一個人結婚,大概不是個好主意。"
      }
     }
    ]
   },
   {
    "id": "structure-and-control",
    "heading": {
     "en": "2. Structure: Delaware C-corp and the Three Kinds of Power",
     "zh": "2. 公司架構:德拉瓦州 C-corp 與三種權力"
    },
    "summary": {
     "en": "Incorporate as a Delaware C-corp, and understand that ownership, day-to-day possession, and formal control are three different things that must stay aligned.",
     "zh": "公司應註冊為德拉瓦州 C-corp;並理解所有權、日常經營與正式控制權是三件不同的事,必須保持對齊。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "The boring answer is the right one: be a Delaware C corporation. S-corps allow only one class of stock and cannot grant options; LLCs look tax-efficient but make preferred stock and option grants awkward — and acquirers price every target as if it were double-taxed anyway, so the LLC advantage evaporates at exit. Delaware wins because its corporate law is clear and its Chancery courts are fast and predictable; more than half of large U.S. corporations incorporate there.",
       "zh": "最無聊的答案就是正確答案:成立德拉瓦州的 C 型股份有限公司。S-corp 只能有單一股別、無法發選擇權;LLC 看似省稅,但發行特別股與選擇權都很麻煩——而且收購方估價時,本來就會把每個標的都當作要被雙重課稅來計算,LLC 的優勢在出場時直接蒸發。德拉瓦州勝出的原因是公司法明確、衡平法院(Chancery Court)判決快速且可預測;超過半數的美國大型企業都在該州註冊。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Ownership: who legally holds the equity — founders, employees, investors.",
        "Possession: who actually runs the company day to day.",
        "Control: who formally governs — in practice, the board of directors.",
        "When the three drift apart you get DMV-style dysfunction: citizens nominally own it, window clerks possess it, bureaucrats control it — and nobody is aligned with anybody."
       ],
       "zh": [
        "所有權(ownership):法律上誰持有股份——創辦人、員工、投資人。",
        "實際經營(possession):日常真正在營運公司的是誰。",
        "控制權(control):正式治理權在誰手上——實務上就是董事會。",
        "三者一旦脫節,就會出現像監理站(DMV)那樣的失能:名義上人民擁有它、櫃檯人員實際佔有它、官僚控制它——彼此的利益完全沒有對齊。"
       ]
      }
     },
     {
      "type": "p",
      "text": {
       "en": "A solo founder is perfectly aligned with himself. Every person added — co-founder, employee, investor — splits the three kinds of power further: employees have possession but little ownership or control; investors have ownership and control but no possession. Each split is a new place where misalignment can take root and compound as the company grows.",
       "zh": "單一創辦人和自己完全對齊。每多加一個人——共同創辦人、員工、投資人——這三種權力就再被切分一次:員工握有實際經營權,卻少有所有權或控制權;投資人有所有權和控制權,卻不參與日常經營。每一道切口,都是利益錯位可能生根、並隨公司成長而放大的地方。"
      }
     }
    ]
   },
   {
    "id": "aligning-founders-and-employees",
    "heading": {
     "en": "3. Alignment: Equity, Cheap CEOs, and Vesting",
     "zh": "3. 利益對齊:股權、低薪執行長與分期歸屬"
    },
    "summary": {
     "en": "Equity, not salary, is the alignment technology — pay the CEO little, put everyone on the bus full-time, and vest everything over time.",
     "zh": "讓利益對齊的工具是股權而不是薪水——執行長要低薪、所有人都要全職上車、股權要隨時間分期歸屬。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Cash pay decouples people from outcomes; equity ties everyone's payoff to the same number — the value of the company. Thiel's most concrete rule comes from Founders Fund diligence: CEO salary turned out to be the single most predictive variable they found. A CEO earning under about $150k is betting on the equity and will attack problems; one earning $300k risks becoming a politician whose real job is defending the salary. And because the CEO's pay caps the whole pay scale, a cheap CEO keeps the entire company hungry.",
       "zh": "現金薪資讓個人利益與公司成敗脫鉤;股權則把所有人的報酬綁在同一個數字上——公司的價值。Thiel 最具體的一條規則來自 Founders Fund 的盡職調查經驗:CEO 薪資是他們找到預測力最強的單一變數。年薪低於約 15 萬美元的 CEO,是把賭注押在股權上,會正面迎擊問題;領 30 萬美元的 CEO,則有變成「以捍衛自己薪水為業的政客」的風險。而且 CEO 的薪水就是全公司薪資的天花板——CEO 便宜,整間公司就保持飢餓。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Standard vesting: four years with a one-year cliff — 25% vests at the one-year mark, the rest monthly over the next 36 months.",
        "Founders should vest too: it protects everyone left behind if a founder walks away early.",
        "Fully-vested grants and cash-paid consultants create bad incentives; equity should always be earned over time."
       ],
       "zh": [
        "標準的分期歸屬(vesting):四年、含一年斷崖期(cliff)——滿一年歸屬 25%,其餘 36 個月按月歸屬。",
        "創辦人自己也應該適用 vesting:萬一有創辦人提早離開,這能保護留下來的所有人。",
        "一次性全數歸屬的股權、領現金的外部顧問,都會製造糟糕的誘因;股權永遠應該是隨時間掙來的。"
       ]
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Everyone in a substantive role must be full-time and paid mainly in equity. Part-timers, advisors, and consultants are misaligned by construction: they capture upside without sharing the risk. In Thiel's framing, you are either on the bus or off the bus — there is no half-seat.",
       "zh": "所有擔任實質角色的人,都必須全職投入、以股權為主要報酬。兼職者、顧問(advisor)與外部顧問(consultant)在結構上就注定利益錯位:他們分享上檔獲利,卻不承擔風險。用 Thiel 的說法:你要嘛在車上,要嘛在車下——沒有半個座位這回事。"
      }
     }
    ]
   },
   {
    "id": "equity-forms-and-math",
    "heading": {
     "en": "4. Equity: Forms, and the Only Number That Matters",
     "zh": "4. 股權的形式,以及唯一重要的數字"
    },
    "summary": {
     "en": "Common stock, options, and restricted stock differ in mechanics and tax — but the only number that ever matters is your percentage of the company.",
     "zh": "普通股、選擇權與限制性股票在機制與稅務上各有不同,但真正重要的數字永遠只有一個:你佔公司的百分比。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Startup equity confuses smart people because absolute numbers feel meaningful and are not. Share count, share price, even the nominal size of an option grant are all noise; the signal is the percentage of the fully-diluted company you would own. Most founders — and most employees — never do this arithmetic.",
       "zh": "新創股權常把聰明人搞糊塗,因為「絕對數字」看起來很有意義,實際上沒有。持股數、每股價格、甚至選擇權授予的名目大小都是雜訊;唯一的訊號,是你在完全稀釋(fully-diluted)後佔公司的百分比。多數創辦人——以及多數員工——從來沒真的算過這筆帳。"
      }
     },
     {
      "type": "cards",
      "items": [
       {
        "title": {
         "en": "Common stock",
         "zh": "普通股(common stock)"
        },
        "body": {
         "en": "The baseline ownership unit for founders and employees. 200k shares out of 10m is exactly the same as 20m out of 2bn: 2%.",
         "zh": "創辦人與員工持股的基本形式。1,000 萬股中的 20 萬股,和 20 億股中的 2,000 萬股完全一樣:都是 2%。"
        }
       },
       {
        "title": {
         "en": "Stock options (ISOs / NSOs)",
         "zh": "股票選擇權(ISO/NSO)"
        },
        "body": {
         "en": "The right to buy shares at a strike price set at fair market value to avoid immediate tax. ISOs get friendlier tax treatment and expire in ten years, which quietly locks employees in; NSO gains are taxed as ordinary income at exercise.",
         "zh": "以公平市價(fair market value)訂定履約價、日後買進股票的權利,藉此避免當下就被課稅。ISO 稅務待遇較佳、十年到期,無形中把員工綁得更緊;NSO 的獲利則在行使時按一般所得課稅。"
        }
       },
       {
        "title": {
         "en": "Restricted stock",
         "zh": "限制性股票(restricted stock)"
        },
        "body": {
         "en": "Stock bought cheaply up front, with the company's right to repurchase it lapsing over time — vesting run in reverse.",
         "zh": "以低價先行買下的股票,公司握有的買回權隨時間逐步失效——等於反向運作的 vesting。"
        }
       }
      ]
     },
     {
      "type": "p",
      "text": {
       "en": "Because risk falls as a company matures, earlier equity is worth far more per unit of work: at eBay, secretaries who joined three years early ended up making about 100x what their later-hired Stanford MBA bosses did. That is rational risk-reward — but explosive if visible, which is why companies keep individual grants confidential.",
       "zh": "由於風險隨公司成熟而下降,越早期的股權單位價值越高:在 eBay,比史丹佛 MBA 主管早三年加入的祕書,最後賺到的錢大約是主管的 100 倍。這在風險報酬上完全合理——但一旦攤在陽光下就會引爆不滿,所以公司才會對個別股權授予保密。"
      }
     }
    ]
   },
   {
    "id": "raising-money",
    "heading": {
     "en": "5. Raising Money: Angels, Convertible Notes, Series A",
     "zh": "5. 募資:天使輪、可轉換公司債與 A 輪"
    },
    "summary": {
     "en": "Early money should be simple and cheap to raise — often as convertible debt — and the Series A option pool is a negotiation between fear and greed.",
     "zh": "早期資金要拿得簡單又便宜——常見做法是可轉換公司債;而 A 輪選擇權池的大小,是一場恐懼與貪婪之間的談判。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "The essay works the arithmetic of a first round: two founders each buy 1m shares at $0.001; an angel puts in $200k at $1 per share for 200k new shares; early hires and consultants get grants of 100k shares each. Afterward roughly 3m shares are outstanding — the angel owns 6.7%, each founder 33.3%, and the notional valuation is $3m. Note the mechanism: dilution happens because the company issues new shares, not because anyone sells their own.",
       "zh": "本課實際演算了一輪早期募資:兩位創辦人各以每股 0.001 美元買入 100 萬股;天使投資人以每股 1 美元投入 20 萬美元、取得 20 萬新股;早期員工與顧問各獲配 10 萬股。之後在外流通股數約 300 萬股——天使佔 6.7%、每位創辦人佔 33.3%,名目估值 300 萬美元。注意其中的機制:稀釋來自公司「發行新股」,而不是任何人賣出自己手上的股票。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "A priced equity round in Silicon Valley runs roughly $30–40k in transaction costs; a convertible note is far cheaper and faster.",
        "A note with a valuation cap (say $4m) and a discount (say 20%) defers the valuation question until professional VCs price the Series A.",
        "No price today means no reference point — so before the Series A, a down round is mathematically impossible."
       ],
       "zh": [
        "在矽谷,一輪定價的股權融資,交易成本大約就要 3–4 萬美元;可轉換公司債便宜又快得多。",
        "帶估值上限(cap,例如 400 萬美元)與折價(discount,例如 20%)的可轉債,把估值問題延後到專業創投為 A 輪定價時再處理。",
        "今天不定價,就沒有參考點——在 A 輪之前,估值下修在數學上根本不可能發生。"
       ]
      }
     },
     {
      "type": "p",
      "text": {
       "en": "At the Series A, VCs spend about a month on diligence — people, financials, technology — and then negotiate the option pool before their money goes in. A 15% pool leaves room to hire stars but dilutes founders up front; a 5% pool protects ownership but may cost you the one person you need. VCs push for a large pre-money pool precisely because that way the dilution lands on the founders, not on them. It is a pure fear-versus-greed tradeoff.",
       "zh": "到了 A 輪,創投大約花一個月做盡職調查——看人、看財務、看技術——然後在資金進來之前談定選擇權池。15% 的池子留有招募明星人才的空間,但一開始就稀釋創辦人;5% 的池子保住持股,卻可能讓你請不到那個關鍵的人。創投堅持在投前(pre-money)先設大池子,正是因為這樣稀釋會落在創辦人頭上,而不是他們身上。這是一場純粹的恐懼與貪婪的取捨。"
      }
     }
    ]
   },
   {
    "id": "term-sheets-boards-dilution",
    "heading": {
     "en": "6. Protections, Boards, and the Long Dilution Game",
     "zh": "6. 保護條款、董事會與漫長的稀釋賽局"
    },
    "summary": {
     "en": "Prefer terms that protect without misaligning — a 1x non-participating preference, no down rounds ever, small excellent boards — and know that ending with 10% is a win.",
     "zh": "選擇能保護投資人又不破壞對齊的條款——1 倍不參與分配的清算優先權、絕不估值下修、小而精的董事會——並理解最後還能留住 10% 就算大勝。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "A 1x non-participating liquidation preference — investors get their money back first, then everyone shares pro rata — protects against founder self-dealing without warping incentives. A 2x participating preference breaks alignment in the middle: in a $100m exit the investors double their money while the founders may see little, so the two sides start wanting different outcomes. Anti-dilution provisions — full ratchet at the harsh end, weighted average more commonly — retroactively reprice earlier investments whenever a round is done at a lower valuation, and it is founders and employees who absorb the hit.",
       "zh": "1 倍、不參與分配(1x non-participating)的清算優先權——投資人先拿回本金,剩下的大家依持股比例分——既能防止創辦人上下其手,又不扭曲誘因。2 倍且參與分配(2x participating)的優先權,則會在「中間地帶」破壞對齊:公司以 1 億美元出售時,投資人賺一倍,創辦人卻可能所剩無幾,雙方想要的結局從此不同。反稀釋條款——最狠的是 full ratchet,較常見的是加權平均——會在公司以更低估值募資時,回頭重新計價舊投資,而代價由創辦人與員工吸收。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "Companies are essentially broken the day they have a down round.",
       "zh": "公司在估值下修的那一天,基本上就已經壞掉了。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "In a down round, anti-dilution triggers gut founder and employee equity, and owners, controllers, and operators start blaming one another. If one is truly unavoidable, make it catastrophic enough to wipe out and silence the angriest parties.",
        "Boards: less is more. Three people — two founders plus one VC — is ideal; five is the workable norm; every single member must be excellent, because each one shapes the company.",
        "Dilution benchmarks at IPO: Google's founders were at about 15.6%, Steve Jobs at 13.5% of Apple, Mark Pincus at 16% of Zynga. Staying above 10% through many rounds is a very good outcome."
       ],
       "zh": [
        "估值下修時,反稀釋條款會重創創辦人與員工的股權,接著擁有者、控制者與經營者開始互相指責。若真的無法避免,就讓它慘烈到把最憤怒的一方徹底洗出場,重建時才不會被扯後腿。",
        "董事會:越小越好。三人——兩位創辦人加一位創投——最理想;五人是可行的常態;而且每一位成員都必須是一流的,因為每個人都會左右公司的方向。",
        "IPO 時的稀釋參考值:Google 創辦人約 15.6%、賈伯斯持有 Apple 13.5%、Mark Pincus 持有 Zynga 16%。歷經多輪募資還能守住 10% 以上,就是非常好的結果。"
       ]
      }
     },
     {
      "type": "p",
      "text": {
       "en": "The overlooked alternative is not raising at all. Craigslist would plausibly be worth around $5bn if run as a normal company; GoDaddy and Trilogy took no outside investors; Microsoft took a single small venture check just before its IPO — which is why Bill Gates still owned 49.2% when it went public. And whoever's money you do take, the closing question is the same one you ask about co-founders and employees: are these the people you want permanently tied to your company?",
       "zh": "常被忽略的另一條路是:根本不募資。Craigslist 若照一般公司經營,價值可能高達 50 億美元;GoDaddy 與 Trilogy 沒拿任何外部投資;Microsoft 只在 IPO 前拿過一筆小額創投資金——所以上市時比爾.蓋茲仍持有 49.2% 的股份。而無論你最終拿了誰的錢,收尾的問題和挑共同創辦人、挑員工時一模一樣:這些人,是你想永遠和你的公司綁在一起的人嗎?"
      }
     }
    ]
   }
  ],
  "factcheck": [
   {
    "claim": {
     "en": "Thiel presented convertible notes with a valuation cap and discount as the smart default for angel financing — cheaper and faster than a priced equity round.",
     "zh": "Thiel 把附估值上限與折價的可轉換公司債,視為天使輪募資的聰明預設選項——比定價股權輪便宜又快速。"
    },
    "now": {
     "en": "The logic won but the instrument changed: Y Combinator introduced the SAFE in late 2013 as an explicit replacement for convertible notes, and by 2026 SAFEs had become the overwhelming standard for pre-seed and seed deals, with convertible notes shrinking to a small minority.",
     "zh": "這套邏輯獲勝,但工具換了:Y Combinator 於 2013 年底推出 SAFE,明確作為可轉債的替代品;到 2026 年,SAFE 已成為 pre-seed 與種子輪的絕對主流,可轉債僅剩少數。"
    },
    "sourceTitle": "Y Combinator: Announcing the Safe, a Replacement for Convertible Notes",
    "sourceUrl": "https://www.ycombinator.com/blog/announcing-the-safe-a-replacement-for-convertible-notes"
   },
   {
    "claim": {
     "en": "Zynga appears as a founder-friendly benchmark: Mark Pincus still held about 16% of the company at its December 2011 IPO.",
     "zh": "Zynga 在課堂上是對創辦人友善的參考案例:Mark Pincus 在 2011 年 12 月 IPO 時仍持有約 16% 的股份。"
    },
    "now": {
     "en": "Zynga's run as an independent public company ended: after a long post-IPO slump and turnaround, Take-Two Interactive acquired it in 2022 in a cash-and-stock deal valuing Zynga at $12.7 billion.",
     "zh": "Zynga 的獨立上市公司之路走到終點:歷經 IPO 後長期低迷與轉型,Take-Two Interactive 於 2022 年以現金加股票、總值 127 億美元的交易將其收購。"
    },
    "sourceTitle": "CNBC: Take-Two Interactive to buy FarmVille creator Zynga for $12.7 billion",
    "sourceUrl": "https://www.cnbc.com/2022/01/10/take-two-interactive-to-buy-farmville-creator-zynga-for-12point7-billion.html"
   }
  ],
  "quiz": [
   {
    "q": {
     "en": "According to Thiel, if a VC could reduce all diligence to a single question, what should it be?",
     "zh": "根據 Thiel 的說法,如果創投只能用一個問題做完所有盡職調查,該問什麼?"
    },
    "options": [
     {
      "en": "How large is the addressable market?",
      "zh": "潛在市場規模有多大?"
     },
     {
      "en": "How much does the CEO draw in salary?",
      "zh": "CEO 領多少薪水?"
     },
     {
      "en": "How strong is the company's patent portfolio?",
      "zh": "公司的專利組合有多強?"
     },
     {
      "en": "How fast is monthly revenue growing?",
      "zh": "月營收成長有多快?"
     }
    ],
    "answer": 1,
    "explain": {
     "en": "Founders Fund found CEO pay to be the most predictive single variable: below roughly $150k, the CEO is betting on the equity and stays aligned with everyone else; above it, the salary itself becomes the thing being defended.",
     "zh": "Founders Fund 發現 CEO 薪資是預測力最強的單一變數:低於約 15 萬美元,代表 CEO 把賭注押在股權上,和所有人利益一致;高於這個數字,薪水本身反而變成他要捍衛的東西。"
    }
   },
   {
    "q": {
     "en": "Why does Thiel favor a 1x non-participating liquidation preference over a 2x participating one?",
     "zh": "為什麼 Thiel 偏好 1 倍不參與分配的清算優先權,而不是 2 倍參與分配?"
    },
    "options": [
     {
      "en": "It guarantees investors a larger payout in every possible exit.",
      "zh": "它保證投資人在任何出場情境都拿得更多。"
     },
     {
      "en": "It protects investors from abuse while keeping founders and investors wanting the same outcome in mid-sized exits.",
      "zh": "它能防止投資人被坑,同時讓創辦人和投資人在中型出場時仍想要同一個結果。"
     },
     {
      "en": "It removes the need for a board of directors.",
      "zh": "它讓公司不再需要董事會。"
     },
     {
      "en": "It automatically prevents future down rounds.",
      "zh": "它能自動避免日後的估值下修。"
     }
    ],
    "answer": 1,
    "explain": {
     "en": "A 1x non-participating preference stops founders from paying themselves out ahead of investors, but beyond that point everyone shares alike. A 2x participating preference makes investors and founders want different things whenever the exit is medium-sized — say $100m.",
     "zh": "1 倍不參與分配的優先權能防止創辦人搶在投資人之前把錢分給自己,但超過該門檻後大家依比例同享。2 倍參與分配則讓投資人和創辦人在中型出場(例如 1 億美元)時,想要的結局完全不同。"
    }
   },
   {
    "q": {
     "en": "A startup offers you 200,000 shares. Per this class, what do you actually need to know to evaluate the offer?",
     "zh": "某家新創開給你 20 萬股。根據本課,你真正需要知道什麼才能評估這個 offer?"
    },
    "options": [
     {
      "en": "The current price per share",
      "zh": "目前的每股價格"
     },
     {
      "en": "The total number of shares you would hold after four years",
      "zh": "四年後你總共會持有幾股"
     },
     {
      "en": "What percentage of the fully-diluted company those shares represent",
      "zh": "這些股份佔公司完全稀釋後股本的百分比"
     },
     {
      "en": "Whether the shares are ISOs or NSOs",
      "zh": "這些股份是 ISO 還是 NSO"
     }
    ],
    "answer": 2,
    "explain": {
     "en": "Absolute share counts and prices carry no information: 200k of 10m shares and 20m of 2bn shares are both exactly 2%. Your percentage of the whole company is the only number that matters.",
     "zh": "絕對股數和股價不帶任何資訊量:1,000 萬股中的 20 萬股,與 20 億股中的 2,000 萬股,同樣都是 2%。唯一重要的數字,是你佔整家公司的百分比。"
    }
   }
  ]
 },
 {
  "slug": "class-7",
  "layout": "lesson",
  "icon": "menu_book",
  "navLabel": "7",
  "classNo": 7,
  "sourceUrl": "https://blakemasters.tumblr.com/post/21869934240/peter-thiels-cs183-startup-class-7-notes-essay",
  "title": {
   "en": "Follow The Money",
   "zh": "跟著錢走"
  },
  "subtitle": {
   "en": "Venture returns follow a power law: the best investment outweighs the whole fund, and that reshapes every decision.",
   "zh": "創投報酬遵循冪次法則:最好的一筆投資勝過整檔基金,而這重塑了每一個決策。"
  },
  "objectives": [
   {
    "en": "Explain how a venture fund actually works: limited partners, the 2-and-20 fee structure, and the J curve.",
    "zh": "說明創投基金實際如何運作:有限合夥人(limited partners)、「2 與 20」收費結構,以及 J 曲線。"
   },
   {
    "en": "State the power law of venture returns and its two consequences for how funds pick and size investments.",
    "zh": "陳述創投報酬的冪次法則(power law),以及它對基金選案與投資規模的兩個推論。"
   },
   {
    "en": "Apply power-law thinking to personal choices: which company to join, how to weigh equity, whether to take a co-founder.",
    "zh": "把冪次法則思維套用到個人抉擇:加入哪家公司、如何衡量股權、要不要找共同創辦人。"
   },
   {
    "en": "Decide when raising venture capital beats bootstrapping, and know what top investors look for in founders.",
    "zh": "判斷什麼時候募創投資金勝過自力成長(bootstrapping),並了解頂尖投資人看重創辦人的哪些特質。"
   }
  ],
  "sections": [
   {
    "id": "how-vc-works",
    "heading": {
     "en": "1. How Venture Capital Works",
     "zh": "1. 創投如何運作"
    },
    "summary": {
     "en": "VCs pool limited partners' money, earn through 2-and-20, and live or die by a J curve most funds never climb out of.",
     "zh": "創投匯集有限合夥人的資金,靠「2 與 20」收費,成敗繫於一條多數基金爬不出來的 J 曲線。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Most founders never deal with VCs at all — early money comes from savings, friends, family, and angels. But once a company needs serious capital, you must understand how the people writing big checks think. Professionally pooled venture funds are a surprisingly recent invention, dating to the late 1940s; before that, wealthy individuals and families backed new ventures directly. The Sand Hill Road ecosystem took shape in the late 1960s with pioneers like Sequoia, Kleiner Perkins, and Mayfield.",
       "zh": "多數創辦人根本不會接觸創投——早期資金來自積蓄、親友和天使投資人。但公司一旦需要大筆資本,你就必須理解開大額支票的人怎麼思考。專業匯集資金的創投基金其實是相當晚近的發明,始於 1940 年代末;在那之前,是富有的個人與家族直接投資新事業。沙丘路(Sand Hill Road)的生態系則在 1960 年代末成形,先驅包括 Sequoia、Kleiner Perkins 與 Mayfield。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Limited partners (LPs) supply the capital; the VC invests it in startups over a multi-year fund life and returns most of the profits to the LPs.",
        "Fees follow the 2-and-20 rule: a 2% annual management fee on fund size (a $200m fund throws off $4m a year to run the firm) plus 20% of the gains — the carry — which is where VCs really get paid.",
        "Returns trace a J curve: fees and early failures drag the fund underwater at first; the whole game is whether and when it climbs back above break-even."
       ],
       "zh": [
        "有限合夥人(LP)出資;創投在長達數年的基金存續期內投資新創,並把大部分獲利返還給 LP。",
        "收費遵循「2 與 20」:每年收基金規模 2% 的管理費(2 億美元的基金一年產生 400 萬美元營運費),外加獲利的 20%——也就是 carry(績效分紅)——這才是創投真正賺錢的地方。",
        "報酬呈 J 曲線:管理費與早期的失敗案先把基金拖到水面下;整場遊戲的重點是它能否、以及何時重新爬回損益兩平線之上。"
       ]
      }
     }
    ]
   },
   {
    "id": "power-law-of-returns",
    "heading": {
     "en": "2. The Power Law of Returns",
     "zh": "2. 報酬的冪次法則"
    },
    "summary": {
     "en": "Venture outcomes are not spread out — the best company in a portfolio tends to be worth more than all the others combined.",
     "zh": "創投的結果並不平均——組合裡最好的公司,往往比其他所有公司加總還值錢。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "The naive model sorts investments into tidy buckets — failures return nothing, the mediocre roughly break even, winners return 3–10x — with results spread comfortably across the portfolio. Reality is radically skewed: venture outcomes follow a power law, the financial cousin of the compound interest Einstein reportedly called the most powerful force in the universe.",
       "zh": "天真的模型把投資整齊分類——失敗的歸零、平庸的大致打平、贏家回報 3 到 10 倍——結果平順地分布在整個組合上。現實卻極度傾斜:創投的結果遵循冪次法則,它是複利的近親,而愛因斯坦據說稱複利為宇宙中最強大的力量。"
      }
     },
     {
      "type": "table",
      "head": {
       "en": [
        "Naive model",
        "Power-law reality"
       ],
       "zh": [
        "天真的模型",
        "冪次法則的現實"
       ]
      },
      "rows": [
       {
        "en": [
         "Returns fall into tidy buckets: 0x, ~1x, 3–10x",
         "One investment is worth roughly as much as everything else combined"
        ],
        "zh": [
         "報酬整齊分成幾類:0 倍、約 1 倍、3–10 倍",
         "最好的一筆投資,價值約等於其餘所有投資的總和"
        ]
       },
       {
        "en": [
         "Diversify across ~100 companies to spread risk",
         "Concentrate on 7–8 companies with a credible path to 10x"
        ],
        "zh": [
         "分散投資約 100 家公司來分攤風險",
         "集中投資 7–8 家有可信路徑回報 10 倍的公司"
        ]
       },
       {
        "en": [
         "A deal is good if it can return a decent multiple",
         "A deal is good only if your stake could plausibly be worth the whole fund"
        ],
        "zh": [
         "只要可能有不錯的倍數就算好案子",
         "唯有你的持股有可能值回整檔基金,才算好案子"
        ]
       }
      ]
     },
     {
      "type": "p",
      "text": {
       "en": "In Founders Fund's 2005 fund, the best investment was worth about as much as every other investment combined; the second-best was worth about as much as everything from third place down — and the pattern kept repeating. PayPal's $1.5bn sale to eBay made early investors with large stakes roughly a fund's worth of money, which merely meant breaking even, since the rest of the portfolio underperformed. Series B investors did well on PayPal itself and still lost money at the fund level.",
       "zh": "在 Founders Fund 2005 年的基金裡,最好的一筆投資約等於其他所有投資的總和;第二好的約等於第三名以下所有投資的總和——這個模式一路重複下去。PayPal 以 15 億美元賣給 eBay,讓持股高的早期投資人賺到約一整檔基金的錢,但這只代表打平,因為組合其餘部分表現不佳。B 輪投資人在 PayPal 這一筆賺得不錯,基金整體卻仍然虧損。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "To a first approximation, a VC portfolio will only make money if your best company investment ends up being worth more than your whole fund.",
       "zh": "粗略來說,一個創投組合要賺錢,唯有你最好的一筆投資,最終價值超過整檔基金。"
      }
     }
    ]
   },
   {
    "id": "thinking-in-exponents",
    "heading": {
     "en": "3. Thinking in Exponents",
     "zh": "3. 用指數思考"
    },
    "summary": {
     "en": "Because people think linearly, power-law assets get mispriced — exploitable in funding rounds, unavoidable in career choices.",
     "zh": "因為人用線性思考,冪次資產總被錯價——這在募資輪可以利用,在職涯選擇上則無從迴避。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Two consequences follow for investors. First, the only question that matters before writing a check: is there a plausible scenario where this stake becomes worth the entire fund? Second, a 100-company portfolio signals sloppy thinking — a disciplined fund holds 7 or 8 companies it genuinely believes can return 10x, rather than a drawer of lottery tickets. The difficulty is that human experience is linear; we systematically underestimate what exponential growth does.",
       "zh": "對投資人有兩個推論。第一,出手前唯一重要的問題是:有沒有一個合理情境,讓這筆持股值回整檔基金?第二,一口氣投 100 家公司代表思考草率——有紀律的基金會持有 7、8 家真心相信能回報 10 倍的公司,而不是一抽屜的樂透彩券。難處在於人類的經驗是線性的,我們總是系統性低估指數成長的威力。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Founders Fund backtested a simple rule: always exercise full pro rata rights in up rounds led by smart VCs, and never add money in flat or down rounds. It worked remarkably well — because most VCs do not truly believe in the power law, prices for exponentially growing companies feel too steep and stay too low. Flat rounds, priced by investors hoping for 2x, usually mask real deterioration. And a single down round tends to be disastrous, mostly because it poisons relationships among everyone involved.",
       "zh": "Founders Fund 回測過一條簡單規則:凡是聰明創投領投的估值上升輪(up round),一律足額行使按比例跟投權(pro rata rights);平盤輪或估值下修輪則絕不加碼。結果出奇地好——因為多數創投並不真的相信冪次法則,指數成長公司的價格讓人覺得太貴,實則一直偏低。平盤輪由指望 2 倍回報的投資人定價,通常掩蓋著實質惡化。而一次估值下修輪往往就是災難,主要因為它會毒化所有參與者之間的關係。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Joining or starting a startup puts all your eggs in one basket, so the shape of the distribution you are stepping into matters enormously.",
        "A post office job has a flat distribution — what you see is what you get; a tech startup's outcomes are violently skewed.",
        "When weighing an equity offer, where the company sits on the curve can matter more than the percentage: the 100th employee at Google did far better than the average venture-backed CEO of the decade.",
        "Thiel rejects the objection that it is all a lottery — the power law is real, not random, a claim he defers to a later class."
       ],
       "zh": [
        "加入或創辦新創,等於把所有雞蛋放進一個籃子,所以你踏入的那個分布長什麼樣,至關重要。",
        "郵局的工作是平坦分布——所見即所得;科技新創的結果則傾斜得驚人。",
        "衡量股權報價時,公司在曲線上的位置可能比百分比更重要:Google 第 100 號員工的報酬,遠勝那十年間創投支持的 CEO 平均水準。",
        "有人反駁說這一切只是隨機的樂透。Thiel 不接受——冪次法則是真實的、並非隨機,這個論證他留待後面的課程展開。"
       ]
      }
     }
    ]
   },
   {
    "id": "view-from-sand-hill-road",
    "heading": {
     "en": "4. The View from Sand Hill Road",
     "zh": "4. 沙丘路的觀點"
    },
    "summary": {
     "en": "Paul Graham and Roelof Botha confirm the power law from the inside: most VCs lose money, capital alone is a commodity, and value lives in the future.",
     "zh": "Paul Graham 與 Roelof Botha 從業內視角印證冪次法則:多數創投賠錢、光有資本只是大宗商品,價值永遠在未來。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "The second half of class is a conversation with Paul Graham (Y Combinator) and Roelof Botha (Sequoia Capital). Thiel opens with a twist: most VCs do not actually make money. Botha blames the 1990s — spectacular returns pulled in blind capital until the industry was overfunded. Graham's advice to founders: VCs are neither evil nor corrupt, and your best protection is competition among them. In practice you tend to end up with two interested investors or none, because many VCs wait and imitate one another.",
       "zh": "課程後半是與 Paul Graham(Y Combinator)和 Roelof Botha(Sequoia Capital)的對談。Thiel 開場就語出驚人:大多數創投其實不賺錢。Botha 歸咎於 1990 年代——驚人的報酬引來盲目的資金,整個產業被過度灌注。Graham 給創辦人的建議是:創投既不邪惡也不腐敗,你最好的保護是讓他們彼此競爭。實務上你通常會有兩個感興趣的投資人,或者一個都沒有,因為許多創投都在觀望並模仿彼此。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Capital is a commodity: Botha argues no firm earns Sequoia-level returns just by cutting checks — the differentiators are network, counsel, and discipline, including tight 3–5 page research memos; a company that cannot be described succinctly probably has nothing there.",
        "The power law runs inside companies too: one revenue stream almost always dominates, so a pitch promising streams A through E frightens investors — LinkedIn's three balanced streams is the exception that proves the rule.",
        "Scale arrives faster than ever: PayPal grew up with roughly 300 million internet users; with 2 billion users plus mobile and cloud, an entrepreneur's possible impact is qualitatively larger.",
        "Graham sees the whole world drifting into a power-law shape as people leave uniform big-company career tracks and split toward the extremes."
       ],
       "zh": [
        "資本只是大宗商品:Botha 認為光開支票不可能拿到 Sequoia 等級的報酬,差異在人脈、建言與紀律——包括精煉的 3 至 5 頁研究備忘錄;一家無法被簡潔描述的公司,多半沒有真材實料。",
        "冪次法則也在公司內部運作:幾乎總有一條營收來源獨大,號稱有 A 到 E 五種營收的簡報反而嚇壞投資人——LinkedIn 三條均衡的營收,是證明規則的例外。",
        "規模來得比以往更快:PayPal 成長時全球約 3 億網路使用者;如今 20 億使用者加上行動與雲端,創業者可能造成的影響有質的飛躍。",
        "Graham 認為整個世界正走向冪次分布:人們離開整齊劃一的大企業職涯軌道,朝各種極端分化。"
       ]
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Thiel recalls PayPal's best up round: a 5x jump in valuation within months, sellable only as a story about the future. Without a specific future to point to, people anchor on the past and balk at the new price.",
       "zh": "Thiel 回憶 PayPal 最成功的一次上升輪:幾個月內估值跳升 5 倍,而這只能用一個關於未來的故事來說服人。若沒有一個可以明確指出的未來,人們就會錨定在過去,對新價格卻步。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "The real value is always in the future.",
       "zh": "真正的價值永遠在未來。"
      }
     }
    ]
   },
   {
    "id": "founders-money-motivation",
    "heading": {
     "en": "5. Founders, Money, and Motivation",
     "zh": "5. 創辦人、金錢與動機"
    },
    "summary": {
     "en": "The Q&A lands on a paradox: in a power-law world, the biggest outcomes go to founders who are not chasing money.",
     "zh": "問答收束在一個悖論:在冪次法則的世界裡,最大的成果屬於不是為錢而來的創辦人。"
    },
    "blocks": [
     {
      "type": "cards",
      "items": [
       {
        "title": {
         "en": "Bootstrap or raise?",
         "zh": "自力成長還是募資?"
        },
        "body": {
         "en": "VC money lets you borrow against future growth and move fast, and backing from a top firm opens doors and helps hiring. If speed does not matter, reconsider — but in a winner-take-all market, Thiel says trading a quarter of the company for a shot at owning the industry is a good deal.",
         "zh": "創投資金讓你預支未來的成長、加快速度;頂級基金的背書還能敲開大門、幫助招募。如果速度不重要,就該重新考慮——但在贏者全拿的市場,Thiel 認為用四分之一的股權換取稱霸整個產業的機會,划得來。"
        }
       },
       {
        "title": {
         "en": "Founders over ideas",
         "zh": "看人,不看點子"
        },
        "body": {
         "en": "Graham funds relentlessly resourceful people; the idea mainly shows how the founders think. It is fine to be lame in many ways as long as you are not lame in the important ones — Apple's founders dressed terribly but understood microprocessors.",
         "zh": "Graham 投資的是「堅韌而機敏」(relentlessly resourceful)的人;點子主要透露創辦人怎麼思考。你可以在很多地方很遜,只要別在關鍵的地方遜——Apple 的創辦人穿著糟透了,卻懂微處理器的重要性。"
        }
       },
       {
        "title": {
         "en": "Hedgehog beats fox",
         "zh": "刺蝟勝過狐狸"
        },
        "body": {
         "en": "Borrowing from Isaiah Berlin's essay: the fox knows many little things, the hedgehog one big thing. Thiel says in business, forced to choose, be the hedgehog — while still picking up little things along the way.",
         "zh": "借用 Isaiah Berlin 的散文:狐狸知道很多小事,刺蝟只懂一件大事。Thiel 說在商業世界,非選不可時就當刺蝟——但沿路還是要多學些小事。"
        }
       },
       {
        "title": {
         "en": "Failure and second acts",
         "zh": "失敗與東山再起"
        },
        "body": {
         "en": "Failed founders can raise again — Max Levchin stumbled twice before PayPal, and Silicon Valley stigmatizes failure far less than, say, France. But do not take failure lightly: it still carries real cost, and why you failed matters.",
         "zh": "失敗過的創辦人仍能再募資——Max Levchin 在 PayPal 之前跌倒過兩次,而矽谷對失敗的污名遠低於法國等地。但別輕視失敗:代價依然不小,而且失敗的原因很重要。"
        }
       },
       {
        "title": {
         "en": "How many founders?",
         "zh": "幾個創辦人才對?"
        },
        "body": {
         "en": "One can work (Drew Houston applied solo), two equal co-founders works very well, four is too many. In a power-law world the right co-founder tends to more than double the outcome, so giving up half the company is usually worth it.",
         "zh": "一個人可行(Drew Houston 當初獨自申請),兩位平分股權的共同創辦人效果最好,四個就太多了。在冪次法則的世界裡,選對共同創辦人往往能讓成果翻超過一倍,所以讓出一半公司通常值得。"
        }
       }
      ]
     },
     {
      "type": "p",
      "text": {
       "en": "One thread runs through the panel: Botha walks away the moment he senses a founder angling for a quick flip. Great companies start from problems that genuinely frustrate their founders — Google grew out of irritation with AltaVista — and the people who build them are usually reluctant to sell, never for lack of offers.",
       "zh": "整場座談貫穿一條主線:Botha 一旦察覺創辦人只想快速套現,便會轉身離開。偉大的公司源自真正困擾創辦人的問題——Google 就是出於對 AltaVista 的不滿——而打造這些公司的人通常不願出售,而且絕不是因為沒人出價。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "People who are heavily motivated by money are never the ones who make the most money in the power law world.",
       "zh": "在冪次法則的世界裡,被金錢強烈驅動的人,從來不是賺最多錢的人。"
      }
     }
    ]
   }
  ],
  "factcheck": [
   {
    "claim": {
     "en": "In 2012 Thiel argued that growing from $100bn to $1 trillion in market cap would be far harder than earlier jumps because the world simply is not big enough — Apple, then the most valuable company, sat near $500bn.",
     "zh": "2012 年 Thiel 認為,市值從 1,000 億美元成長到 1 兆美元會比先前的跳躍難得多,因為世界根本沒那麼大;當時最有價值的 Apple 市值約 5,000 億美元。"
    },
    "now": {
     "en": "Apple became the first US company to hit $1 trillion in August 2018 and touched $3 trillion in January 2022, and several other tech giants have since crossed the trillion-dollar line.",
     "zh": "Apple 於 2018 年 8 月成為首家市值突破 1 兆美元的美國公司,2022 年 1 月一度觸及 3 兆美元;其後多家科技巨頭也陸續跨過兆元門檻。"
    },
    "sourceTitle": "CNBC: Apple becomes first U.S. company to reach $3 trillion market cap",
    "sourceUrl": "https://www.cnbc.com/2022/01/03/apple-becomes-first-us-company-to-reach-3-trillion-market-cap.html"
   },
   {
    "claim": {
     "en": "Guest speaker Roelof Botha appeared as one of Sequoia Capital's partners, sharing the stage with Paul Graham of Y Combinator.",
     "zh": "來賓 Roelof Botha 當時以 Sequoia Capital 合夥人之一的身分出席,與 Y Combinator 的 Paul Graham 同台。"
    },
    "now": {
     "en": "Botha went on to run the firm: in July 2022 he became Sequoia's Senior Steward and global leader, a role he held until stepping down in late 2025, when Alfred Lin and Pat Grady took over as co-stewards.",
     "zh": "Botha 後來執掌整家公司:2022 年 7 月出任 Sequoia 的 Senior Steward(全球領導人),直到 2025 年底卸任,由 Alfred Lin 與 Pat Grady 接任共同掌舵人。"
    },
    "sourceTitle": "Forbes: VC Heavyweight Sequoia Names Roelof Botha As New Global Leader",
    "sourceUrl": "https://www.forbes.com/sites/alexkonrad/2022/04/04/vc-firm-sequoia-names-roelof-botha-global-leader/"
   }
  ],
  "quiz": [
   {
    "q": {
     "en": "According to Thiel, a venture fund is, to a first approximation, profitable only when what happens?",
     "zh": "根據 Thiel 的說法,粗略而言,創投基金唯有在什麼情況下才會獲利?"
    },
    "options": [
     {
      "en": "More than half of its portfolio companies return at least 2x",
      "zh": "超過一半的投資組合公司回報至少 2 倍"
     },
     {
      "en": "Its single best investment ends up worth more than the entire fund",
      "zh": "單一最佳投資的最終價值超過整檔基金"
     },
     {
      "en": "Annual management fees exceed the fund's operating costs",
      "zh": "每年管理費超過基金的營運成本"
     },
     {
      "en": "It diversifies across at least 100 companies to catch every winner",
      "zh": "分散投資至少 100 家公司,把所有贏家一網打盡"
     }
    ],
    "answer": 1,
    "explain": {
     "en": "Because returns follow a power law, winners are so concentrated that fund math reduces to one test: the best investment must return more than all the committed capital. Spreading bets across 100 companies is lottery-ticket thinking, and management fees only keep the lights on.",
     "zh": "因為報酬遵循冪次法則,贏家高度集中,基金的算術可以化約成一個檢驗:最好的一筆投資必須賺回超過整檔基金的資本。把賭注分散到 100 家公司是買樂透的思維,管理費也只夠維持營運。"
    }
   },
   {
    "q": {
     "en": "Founders Fund's backtest found that always taking full pro rata in up rounds led by smart VCs was highly profitable. Why does this inefficiency exist?",
     "zh": "Founders Fund 的回測發現:聰明創投領投的上升輪一律足額跟投,績效極佳。這個定價失靈為什麼存在?"
    },
    "options": [
     {
      "en": "Up rounds usually include liquidation preferences that protect follow-on investors",
      "zh": "上升輪通常附帶保護後續投資人的清算優先權"
     },
     {
      "en": "Most VCs do not truly believe the power law, so exponentially growing companies stay underpriced even in up rounds",
      "zh": "多數創投並不真的相信冪次法則,所以指數成長的公司即使在上升輪仍被低估"
     },
     {
      "en": "Lead investors are contractually obliged to buy out earlier investors at a premium",
      "zh": "領投方依約必須以溢價買下早期投資人的持股"
     },
     {
      "en": "Flat and down rounds are priced too low, so skipping them sacrifices the best bargains",
      "zh": "平盤輪和下修輪定價過低,跳過它們等於錯失最划算的機會"
     }
    ],
    "answer": 1,
    "explain": {
     "en": "The inefficiency exists because the power law is hard to believe. Most VCs anchor on the last valuation, so a company compounding exponentially looks overpriced in an up round when it is actually still cheap. Flat rounds are the opposite trap: priced by investors hoping for 2x, they often hide real deterioration.",
     "zh": "這個定價失靈之所以存在,是因為冪次法則違反直覺。多數創投錨定上一輪估值,於是指數成長的公司在上升輪看似太貴,實際上仍然便宜。平盤輪則是反向陷阱:由指望 2 倍回報的投資人定價,往往掩蓋著實質惡化。"
    }
   },
   {
    "q": {
     "en": "What did the panel say about a startup that pitches five different revenue streams, A through E?",
     "zh": "對於一家簡報中列出 A 到 E 五種營收來源的新創,座談嘉賓怎麼看?"
    },
    "options": [
     {
      "en": "It is ideal, because multiple streams diversify the company's risk",
      "zh": "這很理想,因為多元營收能分散公司風險"
     },
     {
      "en": "It is a red flag: within a business, one revenue stream almost always dominates",
      "zh": "這是警訊:企業內部幾乎總有一條營收獨大"
     },
     {
      "en": "It only matters for consumer startups, not enterprise companies",
      "zh": "這只對消費型新創重要,企業級公司無妨"
     },
     {
      "en": "It is required — most VCs want at least three proven streams before investing",
      "zh": "這是必要條件——多數創投要求至少三條經過驗證的營收才投資"
     }
    ],
    "answer": 1,
    "explain": {
     "en": "The power law operates inside a single business too: one revenue source ends up dominating. Promising five parallel streams suggests the founders have not figured out which one matters. Botha called LinkedIn's three balanced streams the exception that proves the rule.",
     "zh": "冪次法則也在單一企業內部運作:最終會有一條營收來源獨大。承諾五條並行的營收,代表創辦人還沒想清楚哪一條才重要。Botha 說 LinkedIn 三條均衡的營收,是證明規則的例外。"
    }
   }
  ]
 },
 {
  "slug": "class-8",
  "layout": "lesson",
  "icon": "menu_book",
  "navLabel": "8",
  "classNo": 8,
  "sourceUrl": "https://blakemasters.tumblr.com/post/22271192791/peter-thiels-cs183-startup-class-8-notes-essay",
  "title": {
   "en": "The Pitch",
   "zh": "募資提案 (The Pitch)"
  },
  "subtitle": {
   "en": "Fundraising is a psychology game: know the VC's mind, tell a story, and pitch from a position of strength.",
   "zh": "募資是一場心理戰:摸透創投的腦袋、說一個好故事,並在不缺錢的時候出手。"
  },
  "objectives": [
   {
    "en": "Explain why pitching is mostly about VC psychology — cognitive bias, decision fatigue, inertia — and how to exploit each one.",
    "zh": "說明為什麼募資提案的核心是創投的心理——認知偏誤、決策疲勞、慣性——以及如何逐一利用這些弱點。"
   },
   {
    "en": "Structure a pitch around story and Aristotle's logos, ethos, and pathos instead of a slide-reading ritual.",
    "zh": "用故事以及亞里斯多德的 logos、ethos、pathos 三要素來架構提案,而不是照著投影片逐字唸稿。"
   },
   {
    "en": "Answer the substance questions every VC will ask — vision, team, market, model, the ask — and avoid classic amateur mistakes.",
    "zh": "回答每個創投必問的實質問題——願景、團隊、市場、商業模式、募資需求——並避開典型的外行錯誤。"
   },
   {
    "en": "Treat fundraising as a long-term, two-way relationship: evaluate VCs as carefully as they evaluate you.",
    "zh": "把募資當成長期的雙向關係:你評估創投的認真程度,應該不亞於他們評估你。"
   }
  ],
  "sections": [
   {
    "id": "goals-of-fundraising",
    "heading": {
     "en": "1. What You're Really Raising For",
     "zh": "1. 募資的真正目標"
    },
    "summary": {
     "en": "The goal is not just money — it is the right amount of money, at a sane valuation, with control intact and the right partners.",
     "zh": "募資的目標不只是拿到錢,而是拿到金額適當、估值合理、控制權完整、夥伴正確的錢。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "VCs see enormous numbers of deals and fund very few, so a pitch has to break through the clutter of a skeptical, distracted audience. But before thinking about how to pitch, founders should be clear on what a successful raise actually looks like — and it is more than a wire transfer.",
       "zh": "創投每天看大量案子,真正投資的卻寥寥無幾,所以提案必須穿透一群多疑又分心的聽眾。但在思考怎麼提案之前,創辦人得先想清楚「成功的募資」長什麼樣子——它遠不只是一筆匯款。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Raise the right amount: as a first approximation, map out a year of operating expenses and multiply by 1.5.",
        "Avoid a valuation so high it scares off later investors or creates problems for employees.",
        "Keep control of your company — terms matter, not just the check size.",
        "Choose VC partners carefully: unlike employees, you cannot easily replace an investor later."
       ],
       "zh": [
        "募對金額:第一個粗略估法是抓出一年的營運開支,再乘以 1.5。",
        "避免把估值抬到嚇跑後續投資人、或讓員工股權出問題的高度。",
        "守住公司的控制權——條款很重要,不是只看支票金額。",
        "慎選創投夥伴:員工可以換,投資人一旦上了股東名冊就很難請走。"
       ]
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Because the stakes go beyond cash, fundraising is a core CEO responsibility, not a distraction from \"real work.\" In Thiel's telling, roughly half the CEO's job is selling the company — Larry Ellison pitches Wall Street every quarter, and Warren Buffett has pitched investors through annual letters for fifty years.",
       "zh": "正因為賭注不只是現金,募資是執行長的核心職責,而不是「正事」之外的干擾。照 Thiel 的說法,執行長大約有一半的工作就是在推銷公司——Larry Ellison 每季都要向華爾街簡報,Warren Buffett 更是用年度股東信持續推銷了五十年。"
      }
     }
    ]
   },
   {
    "id": "know-your-audience",
    "heading": {
     "en": "2. Know Your Audience: Inside the VC Mind",
     "zh": "2. 了解你的聽眾:創投的腦袋"
    },
    "summary": {
     "en": "VCs are not perfectly rational machines; they are biased humans, and good pitching works with those biases instead of ignoring them.",
     "zh": "創投不是完美理性的機器,而是充滿偏誤的人類;好的提案是順著這些偏誤操作,而不是假裝它們不存在。"
    },
    "blocks": [
     {
      "type": "quote",
      "text": {
       "en": "VCs are just sacks of meat with the same cognitive biases as everyone else.",
       "zh": "創投說到底也只是一袋袋的肉,跟所有人一樣帶著相同的認知偏誤。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "A pitch must reach both the rational and the emotional brain. Humans are heavily biased toward near-term thinking, and resistance to a pitch drops as its entertainment value rises — being funny and telling a good story are not frills, they are tactics.",
       "zh": "提案必須同時打中理性腦和情緒腦。人類天生嚴重偏向短期思考,而且提案的娛樂性越高,聽眾的抗拒就越低——幽默和好故事不是點綴,而是戰術。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Decision fatigue is real: in a famous study, Israeli parole judges approved about two-thirds of cases in the early morning and almost none by day's end. So pitch early in the day.",
        "Choice overload hurts: do not present multiple financing options; keep the proposition simple.",
        "No senior VC needs your deal — wealthy partners default to inertia, since most deals fail and all of them eat time.",
        "Beware your own optimism bias: founders systematically overrate their odds, and VCs know it."
       ],
       "zh": [
        "決策疲勞是真的:著名研究顯示,以色列的假釋法官在清晨核准約三分之二的案件,到傍晚幾乎全數駁回。所以要一大早去提案。",
        "選項太多反而有害:不要端出好幾種融資方案,把提案保持簡單。",
        "沒有任何資深創投「需要」你的案子——已經很有錢的合夥人預設就是慣性拒絕,因為大多數案子會失敗,而且每個案子都很花時間。",
        "小心你自己的樂觀偏誤:創辦人普遍高估自己的勝率,而創投對此心知肚明。"
       ]
      }
     }
    ]
   },
   {
    "id": "mechanics",
    "heading": {
     "en": "3. Mechanics: Who, How, and When",
     "zh": "3. 實戰操作:找誰談、怎麼談、何時談"
    },
    "summary": {
     "en": "Pitch motivated junior investors first, keep it ninth-grade simple, raise before you need money, and never open with an \"X meets Y\" mashup.",
     "zh": "先找有動機的年輕投資人、把內容講到國三生也懂、在還不缺錢時就募資,而且絕對不要用「X 加 Y」的混搭句開場。"
    },
    "blocks": [
     {
      "type": "cards",
      "items": [
       {
        "title": {
         "en": "Who to pitch",
         "zh": "找誰談"
        },
        "body": {
         "en": "Counterintuitively, start with senior associates or principals: junior investors need good deals to advance, so they evaluate fairly. Later, work senior partners' loss aversion — make the deal seem oversubscribed (when plausible) so fear of missing out overcomes inertia.",
         "zh": "違反直覺地,先從資深經理(senior associate)或副總(principal)談起:年輕投資人需要好案子往上爬,所以會認真評估。之後再利用資深合夥人的損失趨避——在合理範圍內營造超額認購(oversubscribed)的氛圍,讓「怕錯過」壓過慣性。"
        }
       },
       {
        "title": {
         "en": "How to pitch",
         "zh": "怎麼談"
        },
        "body": {
         "en": "Early pitches get modest cognitive resources, so do the thinking for the VC: pre-digest your data and hand over conclusions. Engineers routinely lose the room with complexity. Add depth only once the audience is engaged, then answer hard questions honestly.",
         "zh": "初期提案只會分到創投一點點腦力,所以要替他們把思考做完:先消化好數據,直接端出結論。工程師最常犯的錯就是用複雜度把全場講到失神。等聽眾真的投入後再加深難度,並誠實回答尖銳的問題。"
        }
       },
       {
        "title": {
         "en": "When to pitch",
         "zh": "何時談"
        },
        "body": {
         "en": "Raise when you do not need money. With six months of runway left, the VC has all the leverage and desperate companies get crushed on terms; eight months after a raise, you negotiate from strength.",
         "zh": "在不需要錢的時候募資。當現金只剩六個月,籌碼全在創投手上,走投無路的公司在條款上一定被宰;反之,上一輪才過八個月就回來談,你就是站在強勢位置談判。"
        }
       },
       {
        "title": {
         "en": "The elevator pitch",
         "zh": "電梯簡報"
        },
        "body": {
         "en": "Reject the Hollywood mashup format (\"Instagram meets TaskRabbit\") — it makes you sound derivative and easy to copy. Instead state problem, solution, and market: SpaceX's version is that launch costs have not fallen in decades, they cut costs 90%, and the market is worth billions.",
         "zh": "拒絕好萊塢式的混搭句型(「Instagram 加 TaskRabbit」)——那會讓你聽起來只是模仿品、很容易被複製。改成直述問題、解法與市場:SpaceX 的版本是「發射成本幾十年沒降過,我們把它砍掉九成,市場規模數百億美元」。"
        }
       },
       {
        "title": {
         "en": "Other ways in",
         "zh": "其他敲門磚"
        },
        "body": {
         "en": "Cold-emailing a deck has a success rate near zero. Use warm introductions — the Stanford network is full of VC alumni — or bait the hook with press coverage so VCs come pitch you instead.",
         "zh": "把簡報冷寄到創投信箱,成功率趨近於零。改用熟人引薦——史丹佛的人脈網裡到處是創投校友——或先上媒體曝光當魚餌,讓創投反過來主動找你。"
        }
       }
      ]
     },
     {
      "type": "quote",
      "text": {
       "en": "Pretend you're pitching to an audience of moderately intelligent 9th graders—shortish attention span, no deep knowledge or intuition for your business.",
       "zh": "想像你是在對一群中等聰明的國三學生簡報——注意力不長,對你的生意也沒有深入的知識或直覺。"
      }
     }
    ]
   },
   {
    "id": "story-over-slides",
    "heading": {
     "en": "4. The Main Pitch: Story Over Slides",
     "zh": "4. 正式提案:故事勝過投影片"
    },
    "summary": {
     "en": "Ditch the darkened-room slide ritual: send an info-rich deck ahead, then have a real conversation built on logos, ethos, and pathos.",
     "zh": "拋棄關燈唸投影片的儀式:先寄出一份資訊密度高的簡報,見面時用 logos、ethos、pathos 進行一場真正的對話。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "The standard failure mode: founder reads 10–20 slides aloud in a dark room, the audience drifts into a sleepy alpha-wave state, and the Q&A is perfunctory. The fix is narrative — human brains are wired for stories, and facts embedded in stories are what people actually remember. Aristotle's three modes of persuasion still apply: logos (facts and reason), ethos (your credibility), and pathos (the listeners' emotions).",
       "zh": "標準的失敗劇本是:創辦人在暗房裡逐字唸完十到二十頁投影片,聽眾進入昏昏欲睡的 α 波狀態,問答時間敷衍了事。解方是敘事——人腦天生為故事而生,包在故事裡的事實才會被記住。亞里斯多德的三種說服要素至今適用:logos(事實與邏輯)、ethos(你的可信度)、pathos(聽眾的情緒)。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "The deck is written propaganda meant to circulate and stand alone when emailed — flashy PowerPoint animation actively detracts.",
        "Junior analysts will write up your company anyway, so give them text worth copying; the easier you make their job, the more work they do for you.",
        "In the room, leave the deck behind quickly and have a real conversation — VCs have usually pre-read it, and the meeting is a two-way pitch.",
        "Prototypes beat slides: people like things they can touch.",
        "VCs read negatively, hunting for any reason to say no — deny them easy ones (unlabeled charts, clip art, sloppy data)."
       ],
       "zh": [
        "簡報檔是用來流傳的書面文宣,寄出後必須能獨立成立——華麗的 PowerPoint 動畫反而扣分。",
        "反正基層分析師一定會寫你公司的分析報告,不如直接給他們值得照抄的文字;你讓他們越省力,他們就替你做越多事。",
        "會議室裡要盡快放下簡報、進行真正的對話——創投通常已經先讀過了,而且這場會議是雙向互相推銷。",
        "原型勝過投影片:人喜歡摸得到的東西。",
        "創投是帶著否定眼光在讀資料,專找說「不」的理由——別送上現成藉口(座標軸沒標示、剪貼美工圖、草率的數據)。"
       ]
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "Do not ask for an NDA. Ever. You will be perceived as a rank amateur.",
       "zh": "永遠不要要求簽保密協議(NDA)。你會被當成十足的外行。"
      }
     }
    ]
   },
   {
    "id": "the-substance",
    "heading": {
     "en": "5. The Substance: What the Pitch Must Answer",
     "zh": "5. 實質內容:提案必須回答的問題"
    },
    "summary": {
     "en": "Open with vision, then arm the VC with clear answers on business, team, market, model, and the ask — framed inside one compelling story.",
     "zh": "先講願景,再就業務、團隊、市場、商業模式與募資需求給出清楚答案,並全部包進一個有說服力的故事裡。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Start with the vision — what you will ultimately accomplish and why you are a company, not just a product or feature. Then supply enough ammunition that your internal champion can defend the deal when partners start poking holes.",
       "zh": "開場先講願景——你最終要完成什麼,以及你為什麼是一家公司,而不只是一個產品或功能。接著提供足夠的彈藥,讓創投內部支持你的人在合夥人開始挑毛病時守得住這個案子。"
      }
     },
     {
      "type": "table",
      "head": {
       "en": [
        "Pitch element",
        "What the VC needs to hear"
       ],
       "zh": [
        "提案要素",
        "創投需要聽到什麼"
       ]
      },
      "rows": [
       {
        "en": [
         "Business",
         "What it is, why it is superior, and why it will not be displaced anytime soon — clear and concise."
        ],
        "zh": [
         "業務",
         "這是什麼、為什麼更優越、為什麼短期內不會被取代——清楚而精煉。"
        ]
       },
       {
        "en": [
         "Team (ethos)",
         "Why you are the right people, what skills are missing, how you will recruit employee #20, and your compensation philosophy."
        ],
        "zh": [
         "團隊(ethos)",
         "為什麼你們是對的人、還缺哪些能力、要怎麼招到第 20 號員工,以及你們的薪酬哲學。"
        ]
       },
       {
        "en": [
         "Market",
         "Addressable market size, how much you will capture and how — with honest competitive analysis, never a claim of zero competition."
        ],
        "zh": [
         "市場",
         "可觸及市場規模、你能拿下多少、怎麼拿下——附上誠實的競爭分析,絕不宣稱「沒有競爭者」。"
        ]
       },
       {
        "en": [
         "Business model",
         "A reasonable story for turning product into revenue — acquisition costs, sales process, barriers — while admitting it will probably evolve."
        ],
        "zh": [
         "商業模式",
         "一套把產品變成營收的合理說法——獲客成本、銷售流程、進入障礙——同時承認它大概還會演變。"
        ]
       },
       {
        "en": [
         "The ask",
         "How much, for what, at what burn rate — and raise valuation early, since it is a gating factor that can save everyone wasted cycles."
        ],
        "zh": [
         "募資需求",
         "募多少、用在哪、燒錢速度多快——並及早談估值,因為那是門檻問題,先談能替雙方省下大量空轉。"
        ]
       },
       {
        "en": [
         "Why this VC (pathos)",
         "A quasi-tailored answer for each firm, like a college application essay — generic \"you're a top firm\" logic convinces no one."
        ],
        "zh": [
         "為什麼是這家創投(pathos)",
         "對每一家都要有量身訂做的理由,就像申請大學的作文——「因為你們是頂尖創投」這種通用答案說服不了任何人。"
        ]
       }
      ]
     },
     {
      "type": "p",
      "text": {
       "en": "One underused weapon: a data room with financials in modifiable formats, so VCs can test your assumptions themselves instead of sending a thousand follow-up emails. Almost nobody does this, which is exactly why it stands out.",
       "zh": "一個被嚴重低估的武器:準備一個資料室(data room),把財務資料放成可編輯的格式,讓創投自己動手檢驗你的假設,而不是事後寄一千封追問信。幾乎沒人這麼做,所以做了就特別突出。"
      }
     }
    ]
   },
   {
    "id": "pitching-for-life",
    "heading": {
     "en": "6. Pitching for Life — and Hard Truths from Q&A",
     "zh": "6. 一輩子都在提案——問答時間的殘酷真相"
    },
    "summary": {
     "en": "Deals close slowly through an internal evangelist; meanwhile vet your VCs hard, because most of the industry does not actually make money.",
     "zh": "案子要靠創投內部的擁護者慢慢推進;同時你要嚴格檢驗創投,因為這個產業大多數玩家其實根本不賺錢。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Term sheets rarely appear right after a pitch; good VCs take days to months to decide, and the deal only survives if someone inside the firm evangelizes it. Diligence runs both ways: companies stay private for years — Facebook had been private for eight at the time — and the average American marriage lasts about ten, so vet the people you will be stuck with. Are they smart? Honest? Experienced in your space, or just buying lottery tickets across 150 deals? Once the deal closes, publicize it immediately and start planning the next round, roughly 18 months out.",
       "zh": "提案結束後很少當場拿到投資條件書;好的創投要花數天到數月做決定,而案子能活下來,靠的是投資機構裡有人替你傳教。盡職調查是雙向的:公司會維持私有很多年——當時 Facebook 已經私有八年——而美國婚姻平均約十年,所以請認真審視這些將與你綁定多年的人。他們聰明嗎?誠實嗎?懂你的領域,還是只是在 150 個案子裡亂買樂透?一旦成交,立刻發新聞稿昭告天下,並著手規劃大約 18 個月後的下一輪。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "On VC quality: most VCs are not very good — the bottom 80% of the industry had made no money over the prior decade.",
        "On terms: startup outcomes are bimodal. If you go to zero, terms did not matter; if you win huge, they barely matter either — so do not burn $80k in legal fees perfecting them. Economics and control are the exceptions: raise those early.",
        "On timing: do not pitch until you are actually a company — VCs fund companies, not ideas.",
        "On value-add: a VC's value is roughly 80% capital, 20% advice. Anyone claiming to be a hybrid VC-consultant hand-holding every portfolio company is not being honest — the math of their time does not work."
       ],
       "zh": [
        "關於創投素質:大多數創投其實不怎麼樣——業界後段 80% 的基金在過去十年根本沒賺到錢。",
        "關於條款:新創的結局是雙峰分布。歸零時條款無所謂,大獲全勝時條款也幾乎無所謂——所以別花八萬美元的律師費雕琢細節。例外是經濟條件與控制權:這兩項要及早攤開來談。",
        "關於時機:在真正成為一家公司之前不要去提案——創投投的是公司,不是點子。",
        "關於附加價值:創投的價值大約是 80% 資本、20% 建議。誰宣稱自己是「創投兼顧問」、對每家被投公司都貼身輔導,都是在說謊——他們的時間在數學上根本不夠用。"
       ]
      }
     }
    ]
   }
  ],
  "factcheck": [
   {
    "claim": {
     "en": "As an example of companies staying private longer, the essay notes Facebook had been private for 8 years.",
     "zh": "課堂舉「公司維持私有的時間越來越長」為例,提到 Facebook 當時已私有八年。"
    },
    "now": {
     "en": "Weeks after this class, Facebook went public on May 18, 2012, raising $16 billion at a $104 billion valuation — then the largest tech IPO in U.S. history. The broader point held: later giants like Stripe and SpaceX stayed private far longer.",
     "zh": "這堂課結束幾週後,Facebook 於 2012 年 5 月 18 日上市,以 1,040 億美元估值募得 160 億美元,是當時美國史上最大的科技 IPO。但大趨勢的判斷是對的:Stripe、SpaceX 等後起巨頭維持私有的時間長得多。"
    },
    "sourceTitle": "Wikipedia: Initial public offering of Facebook",
    "sourceUrl": "https://en.wikipedia.org/wiki/Initial_public_offering_of_Facebook"
   },
   {
    "claim": {
     "en": "The model elevator pitch was SpaceX's: launch costs haven't come down in decades, and we will slash them by 90%.",
     "zh": "課堂的示範電梯簡報是 SpaceX 的:「發射成本幾十年沒降過,我們要砍掉九成。」"
    },
    "now": {
     "en": "The pitch largely came true. SpaceX first landed a Falcon 9 booster in December 2015, and reusable rockets cut launch costs to roughly $1,400–$2,700 per kilogram versus the $10,000+ typical of traditional expendable rockets — a reduction of about 70–90%.",
     "zh": "這個提案大致兌現了。SpaceX 於 2015 年 12 月首次回收 Falcon 9 推進器,可重複使用火箭把發射成本壓到每公斤約 1,400–2,700 美元,相較傳統拋棄式火箭動輒每公斤上萬美元,降幅約七到九成。"
    },
    "sourceTitle": "PatentPC: Reusable Rockets vs. Disposable Rockets — Market Trends and Cost Reduction Stats",
    "sourceUrl": "https://patentpc.com/blog/reusable-rockets-vs-disposable-rockets-market-trends-and-cost-reduction-stats"
   }
  ],
  "quiz": [
   {
    "q": {
     "en": "Why does Thiel advise founders to pitch VCs early in the day?",
     "zh": "為什麼 Thiel 建議創辦人一大早去向創投提案?"
    },
    "options": [
     {
      "en": "VC partner meetings are always scheduled in the morning, so decisions happen then.",
      "zh": "創投的合夥人會議都排在早上,決策當下就會發生。"
     },
     {
      "en": "Decision fatigue: like the parole judges who approved two-thirds of morning cases and almost none by day's end, VCs get more likely to say no as the day wears on.",
      "zh": "決策疲勞:就像假釋法官早上核准三分之二的案件、傍晚幾乎全數駁回,創投越到一天的尾聲越傾向說「不」。"
     },
     {
      "en": "Morning slots are longer, giving you more time to walk through the full deck.",
      "zh": "早上的時段比較長,你有更多時間完整講完簡報。"
     },
     {
      "en": "Competing startups usually pitch in the afternoon, so mornings are less crowded.",
      "zh": "競爭的新創通常下午才提案,早上比較不擁擠。"
     }
    ],
    "answer": 1,
    "explain": {
     "en": "Thiel cites the Israeli parole judge study to show decision quality decays across the day. Saying no is the low-energy default, and tired decision-makers default harder — so claim the hours when the VC's brain is freshest.",
     "zh": "Thiel 引用以色列假釋法官的研究,說明決策品質會隨著一天的時間流逝而下滑。「拒絕」是最省力的預設選項,人越累就越依賴預設——所以要搶創投腦袋最清醒的時段。"
    }
   },
   {
    "q": {
     "en": "Whom does Thiel counterintuitively suggest pitching first inside a VC firm?",
     "zh": "在一家創投內部,Thiel 違反直覺地建議先找誰提案?"
    },
    "options": [
     {
      "en": "The most senior partner, since only partners can ultimately approve an investment.",
      "zh": "最資深的合夥人,因為最終只有合夥人能拍板投資。"
     },
     {
      "en": "Whichever partner shares your alma mater, since affinity drives deals.",
      "zh": "跟你同校的合夥人,因為校友情誼最能促成案子。"
     },
     {
      "en": "Senior associates or principals — junior investors need good deals to advance their careers, so they evaluate fairly and push hard.",
      "zh": "資深經理或副總(principal)——年輕投資人需要好案子來升遷,所以會公平評估並全力推案。"
     },
     {
      "en": "The firm's external scouts, who filter everything before partners see it.",
      "zh": "該機構的外部星探(scout),所有案子都要先經過他們過濾。"
     }
    ],
    "answer": 2,
    "explain": {
     "en": "Wealthy senior partners do not need your deal and default to inertia. Junior investment professionals, by contrast, must find winners to build their careers — their incentives are aligned with giving your company a real look.",
     "zh": "已經很有錢的資深合夥人不需要你的案子,預設反應就是慣性拒絕。相反地,年輕的投資專業人士必須靠找到贏家來累積戰功——他們的誘因跟「認真看你的公司」是一致的。"
    }
   },
   {
    "q": {
     "en": "Why does Thiel reject the \"Instagram meets TaskRabbit\" style of elevator pitch?",
     "zh": "為什麼 Thiel 反對「Instagram 加 TaskRabbit」這種電梯簡報句型?"
    },
    "options": [
     {
      "en": "It is too long to deliver in an actual elevator ride.",
      "zh": "在真實的電梯行程裡根本講不完,太冗長了。"
     },
     {
      "en": "VCs rarely know the referenced companies well enough to decode it.",
      "zh": "創投通常不夠熟悉被引用的公司,聽不懂你在比喻什麼。"
     },
     {
      "en": "The mashup format works in Hollywood but signals a derivative, easily replicated business; a strong pitch instead states the problem, the solution, and the market.",
      "zh": "混搭句型在好萊塢行得通,但在矽谷等於自曝是容易複製的模仿品;強的說法應該直述問題、解法與市場規模。"
     },
     {
      "en": "It reveals so much strategy that it should only be shared under an NDA.",
      "zh": "它透露太多策略,理應先簽保密協議(NDA)才能講。"
     }
    ],
    "answer": 2,
    "explain": {
     "en": "Recombining existing companies implies anyone could do the same. Thiel's model pitch is SpaceX's: launch costs have not fallen in decades, we cut them 90%, and the market is worth billions — problem plus solution equals money.",
     "zh": "把現有公司拼裝在一起,等於暗示任何人都做得出來。Thiel 的範本是 SpaceX:發射成本幾十年沒降,我們砍掉九成,市場規模數百億美元——問題加解法,就等於錢。"
    }
   }
  ]
 },
 {
  "slug": "class-9",
  "layout": "lesson",
  "icon": "menu_book",
  "navLabel": "9",
  "classNo": 9,
  "sourceUrl": "https://blakemasters.tumblr.com/post/22405055017/peter-thiels-cs183-startup-class-9-notes-essay",
  "title": {
   "en": "If You Build It, Will They Come?",
   "zh": "東西做出來,人就會來嗎?"
  },
  "subtitle": {
   "en": "Great products don't sell themselves; distribution — not product — decides which startups live or die.",
   "zh": "好產品不會自己賣自己;決定新創生死的是通路(distribution),不是產品。"
  },
  "objectives": [
   {
    "en": "Explain why distribution matters as much as product quality, and why engineers systematically underrate it.",
    "zh": "說明為什麼通路(distribution)和產品品質一樣重要,以及工程師為何長期低估它。"
   },
   {
    "en": "Use CLV and CPA to judge whether a business is actually viable.",
    "zh": "用顧客終身價值(CLV)與獲客成本(CPA)判斷一門生意是否真的成立。"
   },
   {
    "en": "Match a product's price point to the right channel — from complex sales to viral — and spot the dead zone in between.",
    "zh": "依產品單價選對通路——從複雜銷售(complex sales)到病毒式成長——並辨識中間的「死亡地帶」。"
   },
   {
    "en": "Apply the power law to channels: nail one, and extend selling to investors, employees, and the press.",
    "zh": "把冪次法則套用在通路上:專攻一條做到位,並把「銷售」延伸到投資人、員工與媒體。"
   }
  ],
  "sections": [
   {
    "id": "myth-products-sell-themselves",
    "heading": {
     "en": "1. The Myth That Products Sell Themselves",
     "zh": "1. 「產品會自己賣自己」的迷思"
    },
    "summary": {
     "en": "Engineers assume a great product finds its own users; history shows the better distributor beats the better inventor.",
     "zh": "工程師以為好產品自然會有人用;歷史證明,更會賣的人常打敗更會發明的人。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Distribution means everything it takes to get a product into customers' hands and the company's message into their heads. Founders with engineering backgrounds tend to dismiss it: build something great, and the world will show up. Thiel calls this the single most underrated topic in startups — even a fantastic product still has to be pushed out to people.",
       "zh": "通路(distribution)指的是把產品送到顧客手上、把公司訊息送進顧客腦中所需要的一切。工程師出身的創辦人往往不屑一顧:只要東西做得夠好,世界自然會找上門。Thiel 認為這是新創圈最被低估的主題——就算產品再驚人,你還是得親手把它推出去。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "History is unkind to the pure inventor. Nikola Tesla had the superior technology in alternating current, but Thomas Edison was the better businessman, and his company became General Electric. Tesla conceived of radio, yet Marconi commercialized it and took the Nobel Prize. Better science lost to better selling — twice, to the same man.",
       "zh": "歷史對純粹的發明家並不仁慈。Nikola Tesla 的交流電技術更優越,但 Thomas Edison 更會做生意,他的公司後來成了 General Electric。無線電的概念出自 Tesla,商業化並拿下諾貝爾獎的卻是 Marconi。更好的科學兩度輸給更會賣的人——而且輸的都是同一位。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Distribution covers both the physical channel (how the product reaches users) and the message (how people hear about it).",
        "It applies beyond customers: companies must also sell themselves to employees, investors, and the media.",
        "The belief that a product is so good it sells itself is not a fact — it is itself a sales pitch."
       ],
       "zh": [
        "通路同時包含實體管道(產品如何到使用者手上)與訊息傳遞(人們如何聽說它)。",
        "它不只針對顧客:公司也必須把自己「賣」給員工、投資人和媒體。",
        "「產品好到會自己賣自己」不是事實陳述——它本身就是一句銷售話術。"
       ]
      }
     }
    ]
   },
   {
    "id": "math-of-distribution",
    "heading": {
     "en": "2. The Math of Distribution",
     "zh": "2. 通路的數學"
    },
    "summary": {
     "en": "A business works only when a customer's lifetime value exceeds what it costs to acquire them, and price point dictates the channel.",
     "zh": "只有當顧客終身價值高於獲客成本,生意才成立;而產品單價決定你能用哪種通路。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Customer lifetime value (CLV) is average revenue per user times gross margin times average customer lifetime. In a frictionless world any CLV above zero would work; in the real world, acquiring customers costs money, so the rule is CLV > CPA (cost per acquisition). A cell phone plan illustrates it: $40 a month over a 24-month lifetime is $960 of revenue; at 40% gross margin the CLV is $384, so the carrier can profitably spend up to $384 to win a subscriber.",
       "zh": "顧客終身價值(CLV)= 每用戶平均收入(ARPU)× 毛利率 × 平均顧客存續期間。在沒有摩擦的理想世界,CLV 大於零就能做;現實中獲客要花錢,所以鐵律是 CLV 必須大於獲客成本(CPA)。以電信月租方案為例:每月 40 美元、平均使用 24 個月,收入共 960 美元;毛利率 40%,CLV 就是 384 美元——只要拉到一個用戶的成本低於 384 美元,這門生意就划算。"
      }
     },
     {
      "type": "table",
      "head": {
       "en": [
        "Price point",
        "Typical buyer",
        "Distribution method"
       ],
       "zh": [
        "產品單價",
        "典型買家",
        "通路方式"
       ]
      },
      "rows": [
       {
        "en": [
         "$1–2 (thin products)",
         "Individual consumers",
         "Mass advertising and viral marketing"
        ],
        "zh": [
         "1–2 美元(薄利小產品)",
         "一般消費者",
         "大眾廣告與病毒式行銷"
        ]
       },
       {
        "en": [
         "~$10k–100k",
         "Small and mid-size businesses",
         "A real, scalable sales team"
        ],
        "zh": [
         "約 1 萬–10 萬美元",
         "中小企業",
         "貨真價實、可規模化的銷售團隊"
        ]
       },
       {
        "en": [
         "$1M–$50M+",
         "Governments and large enterprises",
         "Complex sales led by founders and senior people"
        ],
        "zh": [
         "100 萬–5,000 萬美元以上",
         "政府與大型企業",
         "由創辦人與高層親自主導的複雜銷售"
        ]
       }
      ]
     },
     {
      "type": "p",
      "text": {
       "en": "The channel must match the economics. A $250-a-month product cannot support salespeople flying around the country, and a $5 million system will never be sold by banner ads. Each order of magnitude in price demands its own playbook.",
       "zh": "通路必須配得上單價的經濟結構。月費 250 美元的產品養不起全國飛透透的業務;500 萬美元的系統也絕不可能靠橫幅廣告賣掉。價格每差一個數量級,就是一套完全不同的打法。"
      }
     }
    ]
   },
   {
    "id": "sales-is-hidden",
    "heading": {
     "en": "3. Sales Is Hidden",
     "zh": "3. 銷售是隱形的"
    },
    "summary": {
     "en": "Selling is everywhere but disguised — in job titles, in advertising, in stories — and the best salespeople are invisible grandmasters.",
     "zh": "銷售無所不在卻被層層偽裝——藏在職稱裡、廣告裡、故事裡——最頂尖的銷售高手你根本看不見。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Engineers distrust sales because engineering is transparent — code works or it doesn't — while selling looks irrational. But the numbers say it matters: the U.S. has roughly 610,000 people in advertising (a $95 billion industry) and 3.2 million in sales (a $450 billion industry). At Oracle and Google, salespeople of the same seniority out-earn engineers once bonuses and commissions are counted.",
       "zh": "工程師不信任銷售,因為工程是透明的——程式能跑就是能跑——而銷售看起來毫無道理。但數字會說話:美國約有 61 萬人從事廣告業(950 億美元的產業)、320 萬人從事銷售(4,500 億美元的產業)。在 Oracle 和 Google,把獎金與佣金算進去後,同資歷的業務賺得比工程師還多。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Thiel's favorite illustration is a 2001 lunch where investor Bill Gross congratulated him on PayPal's growth, then told a charming story about his apathetic 14-year-old son spontaneously emailing friends about PayPal's referral bonuses. The story was itself a nested sales job: the son selling friends, Gross selling Thiel, and Gross covertly selling the other investors on his own savvy.",
       "zh": "Thiel 最愛舉的例子是 2001 年的一場投資人午餐:IdeaLab 創辦人 Bill Gross 恭喜他 PayPal 成長驚人,接著講了一個動人的故事——他那個對什麼都無感的 14 歲兒子,竟主動寫信向朋友介紹 PayPal 的推薦獎金。這個故事本身就是層層嵌套的銷售:兒子在對朋友推銷,Gross 在對 Thiel 推銷,而 Gross 同時也在對滿桌投資人偷偷推銷自己的眼光。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "Sales is hidden. Advertising is hidden. It works best that way.",
       "zh": "銷售是隱形的,廣告也是隱形的。愈隱形,效果愈好。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "That is why job titles get relabeled: salespeople become account executives, fundraisers become corporate development. People resist admitting they are being sold to, so the sale works best in disguise. And unlike coding skill, sales skill is opaque — the range from amateur to grandmaster is invisible from the outside, which is exactly why great salespeople are far better than you think.",
       "zh": "這正是職稱不斷改名的原因:業務變成「客戶經理(account executive)」,募資變成「企業發展(corporate development)」。人們不願承認自己正在被推銷,所以偽裝過的銷售最有效。而且銷售功力不像寫程式那樣一眼可辨——從生手到大師的差距外人完全看不出來,這也正是頂尖銷售遠比你以為的更強的原因。"
      }
     }
    ]
   },
   {
    "id": "tour-of-channels",
    "heading": {
     "en": "4. A Tour of the Channels",
     "zh": "4. 通路巡禮"
    },
    "summary": {
     "en": "From SpaceX lobbying Congress to PayPal's viral loop, each price tier has a distinct playbook — with a deadly gap in the middle.",
     "zh": "從 SpaceX 對決國會到 PayPal 的病毒式循環,每個價格帶各有打法——而中間橫著一條致命的空隙。"
    },
    "blocks": [
     {
      "type": "cards",
      "items": [
       {
        "title": {
         "en": "SpaceX: selling against a lobby",
         "zh": "SpaceX:對抗遊說機器的銷售"
        },
        "body": {
         "en": "The U.S. space industry spreads some 500,000 jobs across all 50 states, giving incumbents enormous lobbying power. SpaceX effectively took on Congress itself, won hundreds of millions in government business, and aims to cut launch costs by 90%.",
         "zh": "美國太空產業把約 50 萬個工作分散在全美 50 州,讓既有業者握有龐大的遊說力量。SpaceX 等於直接和整個國會對打,拿下數億美元的政府生意,目標是把發射成本砍掉九成。"
        }
       },
       {
        "title": {
         "en": "Palantir: deals without salespeople",
         "zh": "Palantir:沒有業務的百萬大單"
        },
        "body": {
         "en": "Deals run $1M to $100M, closed by a CEO who travels 25-plus days a month and by forward deployed engineers — salespeople wearing an engineering title, because at this level clients only want to talk to principals.",
         "zh": "單筆合約 100 萬到 1 億美元,靠的是每月出差 25 天以上的執行長,以及「前線部署工程師(forward deployed engineer)」——掛工程師頭銜的銷售,因為這個層級的客戶只想跟最高層對話。"
        }
       },
       {
        "title": {
         "en": "Yammer and ZocDoc: sales machines",
         "zh": "Yammer 與 ZocDoc:銷售機器"
        },
        "body": {
         "en": "David Sacks came from famously anti-sales PayPal, yet built a serious sales org at Yammer and poached a top Salesforce sales leader. ZocDoc sells a $250-a-month product doctor by doctor, with in-house recruiters whose only job is hiring more salespeople.",
         "zh": "David Sacks 出身以反銷售聞名的 PayPal,卻在 Yammer 建起正規銷售組織,還挖來 Salesforce 的頂尖銷售主管。ZocDoc 則一位醫師一位醫師地推銷月費 250 美元的服務,內部甚至有專職招募員,唯一任務就是招更多業務。"
        }
       },
       {
        "title": {
         "en": "Marketing you can measure",
         "zh": "可以量化的行銷"
        },
        "body": {
         "en": "Ad man John Wanamaker admitted half his ad spend was wasted — he just never knew which half. Google changed that with CPM, CTR, and CPC, making ROI calculable. Zynga looked purely viral from outside, but quietly out-monetized rivals and recycled the revenue into targeted ads.",
         "zh": "廣告之父 John Wanamaker 坦言他一半的廣告費都浪費了——只是永遠不知道是哪一半。Google 用 CPM、CTR、CPC 改寫了規則,讓投資報酬率變得可以計算。Zynga 表面看是純病毒式成長,實際上是變現能力壓過對手,再把收入回灌到精準廣告。"
        }
       },
       {
        "title": {
         "en": "Viral done right",
         "zh": "做對的病毒式成長"
        },
        "body": {
         "en": "PayPal paid cash for signups and referrals and hit 7% daily growth — the user base doubling every 10 days — by targeting eBay power sellers, the segment with the highest money velocity. Hotmail's signup link at the bottom of every email built the same loop into the product itself.",
         "zh": "PayPal 用現金獎勵註冊與推薦,鎖定金流速度最快的 eBay 強力賣家,做到每日 7% 成長——用戶數每 10 天翻一倍。Hotmail 在每封信末尾附上註冊連結,把同樣的循環直接內建在產品裡。"
        }
       }
      ]
     },
     {
      "type": "p",
      "text": {
       "en": "Real virality cannot be bolted on afterward: the product's core use case must be inherently viral, the way sending money with PayPal or sharing files with Dropbox necessarily involves another user. A tell-your-friends button is not a viral strategy.",
       "zh": "真正的病毒式成長無法事後外掛:產品的核心使用情境本身就必須具傳播性——就像用 PayPal 轉帳、用 Dropbox 共享檔案,天生就會牽動另一個使用者。加一顆「告訴朋友」按鈕不叫病毒式策略。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Between big-ticket sales and mass marketing sits a dead zone: products too cheap to justify a sales force, aimed at buyers — especially small businesses — that mass advertising cannot reach efficiently. Intuit cracked that zone for small-business accounting software and gained what Thiel calls a terminal monopoly, so durable that regulators blocked Microsoft from simply buying it.",
       "zh": "在高價銷售與大眾行銷之間橫著一條死亡地帶:產品單價撐不起業務團隊,目標客群(尤其是中小企業)又無法用大眾廣告有效觸及。Intuit 在中小企業會計軟體上攻克了這條地帶,拿下 Thiel 所謂的「終極壟斷(terminal monopoly)」——穩固到主管機關直接擋下 Microsoft 的收購。"
      }
     }
    ]
   },
   {
    "id": "power-law-of-channels",
    "heading": {
     "en": "5. The Power Law of Channels",
     "zh": "5. 通路的冪次法則"
    },
    "summary": {
     "en": "One channel is usually optimal; most startups get zero to work, and dabbling in several is a death sentence.",
     "zh": "通常只有一條通路是最佳解;多數新創連一條都沒打通,而樣樣沾一點等於自尋死路。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Like startup outcomes and venture returns, distribution follows a power law. Companies rarely have several equally good channels, but engineers who know nothing about distribution try everything at once — a little sales, a little business development, a little advertising, a little viral. In practice, one channel is very likely optimal, and most businesses get zero channels to work at all.",
       "zh": "和新創成敗、創投報酬一樣,通路也遵循冪次法則。很少有公司同時擁有好幾條一樣好的通路,但不懂通路的工程師偏偏什麼都試一點——一點業務、一點商務開發、一點廣告、一點病毒式。實務上,極可能只有一條通路是最佳解,而多數公司連一條都打不通。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "Poor distribution—not product—is the number one cause of failure.",
       "zh": "失敗的頭號原因是通路不行——不是產品不行。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Get even a single channel to work and you have a great business; try several without nailing one and you are finished.",
        "Aim sales effort at the people most likely to buy, not at everybody.",
        "Own the fastest segment first: by the time rivals decoded PayPal's eBay strategy, the segment was locked up — the first mover became the last mover."
       ],
       "zh": [
        "只要打通一條通路,你就有一門好生意;好幾條都試卻一條沒打通,你就完了。",
        "把銷售火力對準最可能買單的族群,而不是見人就推。",
        "先拿下成長最快的區隔:等對手看懂 PayPal 的 eBay 策略時,那塊市場早已被鎖死——先行者成了後發者(last mover)。"
       ]
      }
     }
    ]
   },
   {
    "id": "you-are-always-selling",
    "heading": {
     "en": "6. You Are Always Selling",
     "zh": "6. 你無時無刻不在銷售"
    },
    "summary": {
     "en": "Distribution extends past customers to media, investors, and recruits — and if you see no salespeople around, the salesman is you.",
     "zh": "通路不只對顧客,也延伸到媒體、投資人與人才——環顧四周若沒看到業務,那個業務就是你。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Media coverage rarely wins customers directly, but it shapes the two audiences a startup cannot ignore: investors and employees. Funding rounds come in zeros or manys — never exactly one offer — because investors copy each other rather than think independently. And every prospective hire searches your company online; even Palantir, long allergic to press, learned that silence costs talent.",
       "zh": "媒體報導很少直接帶來顧客,卻左右著新創絕不能忽視的兩群人:投資人和員工。募資的結果不是零就是一堆——從來不會剛好一個 offer——因為投資人互相抄答案,而非獨立思考。每個潛在員工都會先上網搜尋你的公司;連長年排斥媒體的 Palantir 都學到,沉默的代價是人才流失。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Once a company passes roughly a $30 million valuation, selling to investors deserves a full-time owner. Valuations at that stage can swing 2 to 1: on a $50 million raise, the gap between a $300 million and a $500 million valuation is several points of dilution — easily worth giving a great corporate development person 1% of the company. The same logic applies to talent: founders and senior leaders should spend a quarter to a third of their time identifying and attracting the best people.",
       "zh": "公司估值一旦超過約 3,000 萬美元,對投資人的銷售就值得有人全職負責。這個階段的估值可以差到兩倍:同樣募 5,000 萬美元,估值 3 億和 5 億之間差的是好幾個百分點的股權稀釋——就算給一位頂尖企業發展負責人 1% 股份也絕對划算。同樣的邏輯適用於人才:創辦人和高階主管應該花四分之一到三分之一的時間,親自發掘並吸引最好的人。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "Look around you. If you don't see any salespeople, you are the salesman.",
       "zh": "環顧四周,如果你沒看到任何銷售員——那個銷售員就是你。"
      }
     }
    ]
   }
  ],
  "factcheck": [
   {
    "claim": {
     "en": "Thiel held up Yammer as a rising startup whose founder, PayPal alum David Sacks, wisely embraced sales and built a scalable sales organization.",
     "zh": "Thiel 把 Yammer 當作明日之星:出身 PayPal 的創辦人 David Sacks 明智地擁抱銷售,建立了可規模化的銷售組織。"
    },
    "now": {
     "en": "Barely two months after this class, in June 2012, Microsoft agreed to acquire Yammer for $1.2 billion in cash, folding it into the Office division — a fast validation of its sales-driven model.",
     "zh": "這堂課後不到兩個月,2012 年 6 月 Microsoft 就以 12 億美元現金收購 Yammer,併入 Office 部門——其銷售驅動模式火速獲得驗證。"
    },
    "sourceTitle": "Microsoft to Acquire Yammer (Microsoft News)",
    "sourceUrl": "https://news.microsoft.com/source/2012/06/26/microsoft-to-acquire-yammer/"
   },
   {
    "claim": {
     "en": "Thiel said SpaceX was winning its complex-sales battle against the aerospace lobby and aimed to cut launch costs by 90%, with a key launch still pending at the time.",
     "zh": "Thiel 說 SpaceX 正在贏得對抗航太遊說集團的複雜銷售之戰,目標是把發射成本砍九成,當時關鍵發射還未成行。"
    },
    "now": {
     "en": "By 2025 SpaceX utterly dominated the industry, flying about 165 Falcon 9 missions in a single year — roughly 90% of global commercial orbital launches — with reusability cutting costs from about $10,000/kg to around $2,500/kg.",
     "zh": "到 2025 年,SpaceX 已徹底稱霸產業:單年約 165 次 Falcon 9 任務,占全球商業軌道發射約九成;可重複使用技術把成本從每公斤約 1 萬美元壓到約 2,500 美元。"
    },
    "sourceTitle": "IndexBox: SpaceX Launched 165 Falcon 9 Rockets in 2025",
    "sourceUrl": "https://www.indexbox.io/blog/spacex-launched-165-falcon-9-rockets-in-2025-dominating-global-orbital-launches/"
   }
  ],
  "quiz": [
   {
    "q": {
     "en": "According to Thiel, what is the number one cause of startup failure?",
     "zh": "根據 Thiel 的說法,新創失敗的頭號原因是什麼?"
    },
    "options": [
     {
      "en": "A product users don't love enough",
      "zh": "產品不夠讓使用者喜愛"
     },
     {
      "en": "Running out of funding too early",
      "zh": "資金太早燒完"
     },
     {
      "en": "Poor distribution",
      "zh": "通路(distribution)不行"
     },
     {
      "en": "Hiring the wrong early team",
      "zh": "早期團隊找錯人"
     }
    ],
    "answer": 2,
    "explain": {
     "en": "Thiel argues most startups get zero distribution channels to work. Product quality cannot save a company nobody hears about — but nailing even one channel makes a great business.",
     "zh": "Thiel 主張多數新創連一條通路都沒打通。沒人聽過的公司,產品再好也救不了——反之,只要打通一條通路,就是一門好生意。"
    }
   },
   {
    "q": {
     "en": "A subscription product has $40 monthly ARPU, a 24-month average customer lifetime, and 40% gross margin. What is the most you should spend to acquire one customer?",
     "zh": "某訂閱制產品每月 ARPU 為 40 美元、平均顧客存續 24 個月、毛利率 40%。獲取一位顧客最多可以花多少錢?"
    },
    "options": [
     {
      "en": "$960",
      "zh": "960 美元"
     },
     {
      "en": "$384",
      "zh": "384 美元"
     },
     {
      "en": "$40",
      "zh": "40 美元"
     },
     {
      "en": "Any amount, as long as growth is viral",
      "zh": "只要成長是病毒式的,花多少都行"
     }
    ],
    "answer": 1,
    "explain": {
     "en": "CLV = $40 × 24 months × 40% margin = $384, and the real-world rule is CPA below CLV. $960 is lifetime revenue before margin — spending that much would lose money on every customer.",
     "zh": "CLV = 40 × 24 × 40% = 384 美元,現實世界的鐵律是 CPA 必須低於 CLV。960 美元是未扣毛利的終身營收——花到這個數,每接一位顧客就賠一筆。"
    }
   },
   {
    "q": {
     "en": "Why did PayPal concentrate its viral push on eBay power sellers?",
     "zh": "PayPal 為什麼把病毒式成長的火力集中在 eBay 強力賣家身上?"
    },
    "options": [
     {
      "en": "Their high money velocity made viral growth fastest, and locking up the best segment forced rivals into second-best segments",
      "zh": "他們金流速度最快、病毒式成長最猛,先鎖死最好的區隔,逼對手只能撿次好的"
     },
     {
      "en": "They were the largest group of internet users at the time",
      "zh": "他們是當時網路上人數最多的族群"
     },
     {
      "en": "eBay had officially partnered with PayPal and subsidized the effort",
      "zh": "eBay 官方與 PayPal 結盟並提供補貼"
     },
     {
      "en": "Power sellers rarely churned, which maximized lifetime value",
      "zh": "強力賣家幾乎不流失,終身價值最高"
     }
    ],
    "answer": 0,
    "explain": {
     "en": "Different segments grow at different speeds; you win by finding the fastest one first. Money moved quickly among power sellers, so virality compounded fastest there — and by the time competitors understood the strategy, the segment was locked in.",
     "zh": "不同區隔的成長速度不同,勝負在於先找到最快的那一塊。強力賣家之間金流最快,病毒式成長在那裡複利最猛——等對手看懂這套策略時,市場早已被鎖死。"
    }
   }
  ]
 },
 {
  "slug": "class-10",
  "layout": "lesson",
  "icon": "menu_book",
  "navLabel": "10",
  "classNo": 10,
  "sourceUrl": "https://blakemasters.tumblr.com/post/22660214207/peter-thiels-cs183-startup-class-10-notes-essay",
  "title": {
   "en": "After Web 2.0",
   "zh": "Web 2.0 之後"
  },
  "subtitle": {
   "en": "The '90s ideas were right but early — Marc Andreessen on timing, software eating the world, and disrupting without getting crushed.",
   "zh": "90 年代的構想沒有錯,只是太早——Marc Andreessen 談時機、軟體吞噬世界,以及如何顛覆而不被反殺。"
  },
  "objectives": [
   {
    "en": "Explain why being too early is deadlier for founders than being wrong, and use Thiel's surfing metaphor to reason about timing.",
    "zh": "說明為什麼對創業者來說「太早」比「做錯」更致命,並用 Thiel 的衝浪比喻思考進場時機。"
   },
   {
    "en": "Distinguish the weak, strong, and strongest versions of 'software is eating the world' and name the industries next in line.",
    "zh": "區分「軟體正在吞噬世界(software is eating the world)」的弱、強、最強三種版本,並指出下一批會被吞噬的產業。"
   },
   {
    "en": "Describe Spotify's pay-the-incumbents playbook and why it avoids Napster's fate when attacking entrenched industries.",
    "zh": "說明 Spotify「先付錢給既得利益者」的打法,以及它為何能在進攻既有產業時避免重蹈 Napster 的覆轍。"
   },
   {
    "en": "Argue why distribution matters as much as product, and why a16z treats the CEO role as a learnable skill for product founders.",
    "zh": "論證為什麼通路(distribution)和產品一樣重要,以及 a16z 為何主張 CEO 是產品型創辦人可以學會的技能。"
   }
  ],
  "sections": [
   {
    "id": "from-arpanet-to-the-wild-west",
    "heading": {
     "en": "1. From ARPANET to the Wild West",
     "zh": "1. 從 ARPANET 到蠻荒西部"
    },
    "summary": {
     "en": "Forty years of internet history unfolded on an unregulated frontier — and that freedom is exactly why bits kept innovating while atoms stagnated.",
     "zh": "網際網路四十年的歷史發生在一片幾乎不受監管的邊疆上——正是這種自由,讓位元世界持續創新,而原子世界停滯不前。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "The class opens with a sweep of internet history: ARPANET in the military and academia, walled gardens like CompuServe (1979) and AOL, then the Mosaic browser in 1993 and Netscape's founding in 1994 blowing the web open. What people did online kept shifting, the user base grew roughly 20x after the late '90s, and mobile was widely seen as the next era.",
       "zh": "課程開頭快速回顧網際網路的歷史:從軍方與學術圈的 ARPANET,到 CompuServe(1979)、AOL 這類封閉圍牆花園,再到 1993 年的 Mosaic 瀏覽器與 1994 年成立的 Netscape 把全球資訊網徹底打開。人們上網做的事不斷改變,使用者數量比 90 年代末成長了約 20 倍,而行動裝置被普遍視為下一個時代。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Early '90s: file transfer and email for academics — you practically needed a CS degree just to get online",
        "Late '90s: web browsing and peer-to-peer take over, with only about 50 million people online",
        "By 2010: video passes half of all traffic, billions are connected, and mobile looms as the next platform"
       ],
       "zh": [
        "90 年代初:學術圈的檔案傳輸與 email——想上網幾乎得先有資工學位",
        "90 年代末:網頁瀏覽與 P2P 成為主流,但全球上網人口只有約 5,000 萬",
        "到 2010 年:影音超過所有流量的一半,數十億人連上網路,行動裝置成為下一個平台"
       ]
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Thiel's frame: for two decades the internet has been a Wild West. The world of atoms is heavily regulated — finance was arguably 'too innovative' and got clamped down — while the world of bits mostly is not, which is why computing stayed fertile. The glaring exception is patents, which function like regulation aimed squarely at the small: no regulator can shut you down for being tiny, but a patent holder can. The SOPA and PIPA fights showed the mounting pressure to tame the frontier, because the Wild West makes people uncomfortable.",
       "zh": "Thiel 的框架是:過去二十年,網際網路一直是一片蠻荒西部(Wild West)。原子的世界受到重度監管——金融業甚至可說「創新過頭」而被管制收緊——位元的世界則大致自由,這正是運算領域能持續創新的原因。最刺眼的例外是專利:沒有監管者能因為你太小就把你關掉,但專利持有者可以,專利實質上是一種專打小公司的監管。SOPA 與 PIPA 的攻防顯示,馴服這片邊疆的壓力正在升高,因為蠻荒西部讓人不安。"
      }
     }
    ]
   },
   {
    "id": "when-will-the-future-arrive",
    "heading": {
     "en": "2. When Will the Future Arrive?",
     "zh": "2. 未來何時到來?"
    },
    "summary": {
     "en": "Most predictions fail on timing, not direction — and for founders, arriving too early is deadlier than being wrong.",
     "zh": "多數預測錯在時機而非方向——對創業者來說,來得太早比看錯方向更致命。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "History is littered with confident predictions that missed: Lord Kelvin declared heavier-than-air flight impossible in 1895; the U.S. patent commissioner supposedly announced in 1899 that everything had already been invented. The gaps run the other way too — the Chinese built rockets in the 13th century, yet the moon landing took another seven centuries; the Apple Newton shipped in 1993, fifteen years before the iPhone made the idea work. Napster arrived too early and too confrontational; Spotify nailed the timing.",
       "zh": "歷史上充滿了自信卻落空的預測:Lord Kelvin 在 1895 年斷言比空氣重的飛行器不可能;美國專利局長據說在 1899 年宣稱能發明的東西都已發明完了。落差也會反過來出現——中國人在 13 世紀就造出火箭,但登月又花了七個世紀;Apple Newton 在 1993 年問世,比讓這個構想真正成立的 iPhone 早了十五年。Napster 來得太早也太衝;Spotify 則抓對了時機。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "All the ideas of the '90s were basically correct. They were just too early.",
       "zh": "90 年代的那些構想基本上都是對的,只是太早了。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Being early burns capital while you wait for the market to show up",
        "Your architecture is built for a world that doesn't exist yet — and is outdated by the time it does",
        "The long wait corrodes company culture",
        "Founders rarely get a second shot: whoever built Friendster didn't get to build Facebook"
       ],
       "zh": [
        "太早進場,只能一邊燒錢一邊等市場出現",
        "你的架構是為一個尚未存在的世界打造的——等那個世界真的到來,架構已經過時",
        "漫長的等待會腐蝕公司文化",
        "創辦人很少有第二次機會:做出 Friendster 的人,沒有機會再做一次 Facebook"
       ]
      }
     },
     {
      "type": "p",
      "text": {
       "en": "The 2000 crash split the industry into two populations. Survivors carry burned-on-the-stove scarring and hunt for bubbles everywhere, like the 1929 generation that never trusted stocks again — scarring that only dies off, never fades. Those who were too young escaped it entirely: Mark Zuckerberg, in junior high during the bust, reportedly had to ask what Netscape ever did. Thiel's timing heuristic is a surfing metaphor — you cannot wait until the wave is confirmed, and it is better to occasionally paddle for a wave that never comes than to miss the big one.",
       "zh": "2000 年的崩盤把產業切成兩群人。倖存者帶著「在爐子上燙傷過臉」的創傷,到處獵尋泡沫,就像 1929 年那一代人從此不再相信股票——這種創傷不會淡去,只會隨世代凋零。當年太年輕的人則完全沒被波及:崩盤時還在念國中的 Mark Zuckerberg,據說曾問過「Netscape 是做什麼的?」Thiel 的時機心法是一個衝浪比喻——你不能等浪頭確定成形才行動,偶爾為一道沒來的浪白划幾次,也好過錯過那道大浪。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "You have to paddle early, and then let the wave catch you.",
       "zh": "你必須提早划水,然後讓浪來追上你。"
      }
     }
    ]
   },
   {
    "id": "software-eating-the-world",
    "heading": {
     "en": "3. Software Is Eating the World — Three Versions",
     "zh": "3. 軟體正在吞噬世界——三種版本"
    },
    "summary": {
     "en": "Andreessen's thesis comes in three strengths, and the strongest says Silicon Valley-style software companies will end up running every industry.",
     "zh": "Andreessen 的論點有三種強度,最強的版本主張矽谷式軟體公司終將主導所有產業。"
    },
    "blocks": [
     {
      "type": "table",
      "head": {
       "en": [
        "Version",
        "What it claims"
       ],
       "zh": [
        "版本",
        "主張內容"
       ]
      },
      "rows": [
       {
        "en": [
         "Weak",
         "Software eats the tech industry itself: value migrates from hardware to software, as cloud computing shows — high volume, low cost, controlled by code."
        ],
        "zh": [
         "弱版本",
         "軟體吞噬科技業本身:價值從硬體移向軟體,雲端運算就是例證——高量、低價、由程式碼掌控。"
        ]
       },
       {
        "en": [
         "Strong",
         "Software transforms industries untouched for centuries — newspapers ran on essentially the same technology for 500 years until digital forced a scramble."
        ],
        "zh": [
         "強版本",
         "軟體改造數百年未變的產業——報業用了大約 500 年幾乎相同的技術,直到數位化逼它們倉皇轉型。"
        ]
       },
       {
        "en": [
         "Strongest",
         "Silicon Valley software companies — engineering-first cultures modeled on Google and Facebook — become the template that dominates every industry."
        ],
        "zh": [
         "最強版本",
         "矽谷軟體公司——以 Google、Facebook 為原型的工程優先文化——成為主導所有產業的範本。"
        ]
       }
      ]
     },
     {
      "type": "p",
      "text": {
       "en": "Thiel adds a 2x2: do you compete with computers or work with them, and do you compete with globalization (China) or work with it? The winning quadrant works with both. Near-term targets for software: healthcare records and analytics, computerized education, labor marketplaces like Uber and TaskRabbit that route around regulated models, and eventually law. In practice, a16z invests in no cleantech and no biotech — only companies that would collapse if you removed the software team — and expects incumbents to fight the transition every step of the way.",
       "zh": "Thiel 補上一個 2x2 矩陣:你是與電腦競爭還是與電腦合作?是與全球化(中國)對抗還是與之合作?勝出的象限是兩者都合作。軟體的近期目標包括:醫療紀錄與分析、電腦化教育、Uber 與 TaskRabbit 這類繞過既有管制模式的勞務市集,最終還有法律業。實務上,a16z 不投綠能科技也不投生技——只投「抽掉軟體團隊公司就會垮掉」的公司——並且預期既得利益者會在轉型的每一步激烈反抗。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "The clearest near-term wave is e-commerce 2.0. Version 1.0 was search-driven — Amazon and eBay; 2.0 companies like Warby Parker and Airbnb win on deep understanding of consumer behavior. With roughly 2.5 billion people online versus 50 million in the '90s, formerly absurd ideas now work: Diapers.com sold to Amazon for $450 million, Golfballs.com thrives, and Webvan-style grocery delivery is returning city by city. Retail's high fixed costs and razor-thin margins make it fragile — Andreessen jokes his 'fake hedge fund' is short retail, long e-commerce.",
       "zh": "最清晰的近期浪潮是電子商務 2.0。1.0 版由搜尋驅動——Amazon 與 eBay;2.0 的公司如 Warby Parker 與 Airbnb,勝在深度理解消費者行為。相較 90 年代的 5,000 萬,如今約 25 億人上網,當年荒謬的點子現在行得通了:Diapers.com 以 4.5 億美元賣給 Amazon,Golfballs.com 生意興隆,Webvan 式的生鮮外送正一個城市一個城市地捲土重來。實體零售的高固定成本與薄利讓它不堪一擊——Andreessen 開玩笑說他的「假避險基金」策略就是做空零售、做多電商。"
      }
     }
    ]
   },
   {
    "id": "disrupt-without-getting-crushed",
    "heading": {
     "en": "4. Disrupt Without Getting Crushed",
     "zh": "4. 顛覆,但別被反殺"
    },
    "summary": {
     "en": "Head-on disruption invites destruction; Spotify shows how paying incumbents and moving indirectly softens the blow.",
     "zh": "正面硬碰硬的顛覆會招來毀滅;Spotify 示範了先付錢給既得利益者、走迂迴路線來緩衝衝擊。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Disruptive kids get sent to the principal's office: Napster won the users but got crushed by the industry it attacked, and the record labels celebrated — prematurely. Spotify took the opposite approach: it writes massive checks to the labels, launched first in low-CD markets like Sweden, and staggers its contract expirations so the labels cannot coordinate a rate hike — the trap that squeezed Netflix when content providers jacked up prices in unison. The risk remains that incumbents take the money, demand equity, and still try to eliminate you.",
       "zh": "愛搗蛋的孩子會被叫去校長室:Napster 贏得了使用者,卻被它攻擊的產業碾碎,唱片公司還為此慶祝——慶祝得太早了。Spotify 反其道而行:開大額支票給唱片公司,先在 CD 市場疲弱的瑞典等地上線,並且把合約到期日錯開,讓唱片公司無法聯手漲價——這正是內容供應商同步抬價時輾壓 Netflix 的陷阱。風險依然存在:既得利益者可能拿了錢、要了股權,最後還是想把你做掉。"
      }
     },
     {
      "type": "cards",
      "items": [
       {
        "title": {
         "en": "Open with money",
         "zh": "先掏錢開場"
        },
        "body": {
         "en": "A conversation that starts with 'here's a check' goes better than one that starts with 'we're replacing you.' Revenue softens the disruption blow.",
         "zh": "用「這是給你們的支票」開場,遠比「我們要取代你」順利。營收能緩和顛覆帶來的衝擊。"
        }
       },
       {
        "title": {
         "en": "Enter indirectly",
         "zh": "迂迴進場"
        },
        "body": {
         "en": "Launch where you threaten incumbents least — Spotify started in geographies where CD sales were already weak, proving the model before facing the main fortress.",
         "zh": "從對既得利益者威脅最小的地方切入——Spotify 先在 CD 銷售本就疲弱的市場上線,驗證模式後再攻主堡。"
        }
       },
       {
        "title": {
         "en": "Stagger your contracts",
         "zh": "錯開合約"
        },
        "body": {
         "en": "Rolling expiration dates stop suppliers from coordinating a simultaneous squeeze; incumbents counter with shorter deals and non-dilutable equity stakes.",
         "zh": "讓合約輪流到期,供應商就無法同步聯手勒索;既得利益者則用更短的合約與不可稀釋的股權來反制。"
        }
       }
      ]
     },
     {
      "type": "p",
      "text": {
       "en": "New gatekeepers are forming even inside tech: on mobile, great distribution tricks get banned and then copied by Apple and Android, and Apple blocked iOS apps from integrating Dropbox — even a large startup can be stopped dead. As for patents, the system is broken — examiners can no longer judge novelty, and big companies stockpile thousands of patents a year — but Thiel reframes the pain: patent trouble means you built something worth suing over. It's a problem you want to have.",
       "zh": "就連科技業內部也在形成新的守門人:在行動平台上,出色的通路手法先被 Apple 與 Android 禁掉、再被抄走,Apple 甚至封殺了整合 Dropbox 的 iOS 應用程式——連大型新創都會被一擊斃命。至於專利,制度已經壞了——審查員早已無法判斷新穎性,大公司每年囤積數千件專利——但 Thiel 換了個角度:會惹上專利麻煩,代表你做出了值得被告的東西。這是一個你「想要擁有」的問題。"
      }
     }
    ]
   },
   {
    "id": "distribution-boards-learnable-ceo",
    "heading": {
     "en": "5. Distribution, Boards, and the Learnable CEO",
     "zh": "5. 通路、董事會,與「學得會」的 CEO"
    },
    "summary": {
     "en": "The top reason a16z passes is product obsession without a distribution strategy; boards should stay tiny; and the best CEOs are product founders who learn the job.",
     "zh": "a16z 拒絕新創的頭號原因,是只顧產品、沒有通路策略;董事會要小;而最好的 CEO 是邊做邊學的產品型創辦人。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Andreessen's number one reason for rejecting startups: a great product with no distribution strategy, usually disguised as a 'viral marketing strategy.' Founders cite Salesforce as proof that products sell themselves — but Salesforce runs a huge sales force; its tagline is 'No software,' not 'No sales.' Well-run software companies pair a great engineering culture with a great sales culture, with one law strictly enforced: sales never orders the product team around, or you decay into a consulting shop.",
       "zh": "Andreessen 拒絕新創的頭號原因:產品很棒,卻沒有通路策略,而且通常被包裝成「病毒式行銷策略」。創辦人愛拿 Salesforce 當「產品會自己賣」的證據——但 Salesforce 養著龐大的銷售部隊,它的標語是「No software」,不是「No sales」。經營良好的軟體公司同時擁有一流的工程文化與一流的銷售文化,並嚴格執行一條鐵律:銷售不能對產品團隊發號施令,否則公司會退化成顧問公司。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Thiel on boards: three people is optimal — the bigger the board, the weaker the oversight; a 50-person nonprofit board means the manager answers to no one",
        "Andreessen has never seen a contentious board vote — what kills companies is people, not process; startups are sausage factories, and founders under-vet their VCs",
        "When things go wrong, boards bias toward 'doing something' — which is often worse than the problem itself"
       ],
       "zh": [
        "Thiel 談董事會:三個人是最佳規模——董事會越大,監督越弱;非營利組織那種 50 人董事會,等於管理者不用對任何人負責",
        "Andreessen 從沒見過針鋒相對的董事會表決——殺死公司的是人,不是流程;新創是香腸工廠,而創辦人對投資人的盡職調查普遍不足",
        "出狀況時,董事會傾向「總得做點什麼」——而那個「什麼」常常比問題本身更糟"
       ]
      }
     },
     {
      "type": "p",
      "text": {
       "en": "a16z's most controversial position: CEO is a learnable skill, not something shrink-wrapped from a 'world-class CEO' mill. The counter-evidence to conventional VC wisdom is decisive — Microsoft, Google, and Facebook were built by inexperienced product founders who learned on the job. The curriculum: learn to manage managers (which scales, unlike managing people), enough law to stay out of jail, enough finance to raise money, enough sales to sell. Sales-guy CEOs can optimize a company for two to four years before it hollows out; you cannot swap a Pepsi marketing executive in for Steve Jobs — and Apple's real edge is its software, not its hardware.",
       "zh": "a16z 最具爭議的主張:CEO 是一種學得會的技能,不是從「世界級 CEO」工廠出來的現成品。反駁傳統創投觀念的證據非常有力——Microsoft、Google、Facebook 都是由毫無經驗的產品型創辦人邊做邊學建立起來的。學習清單是:學會管理「管理者」(這件事可以規模化,直接管人則不行)、懂足夠的法律讓自己不進監獄、懂足夠的財務把錢募到、懂足夠的銷售把產品賣掉。銷售型 CEO 可以讓公司好看個兩到四年,然後就開始被掏空;你不可能找一個百事可樂的行銷主管來接替 Steve Jobs——而 Apple 真正的優勢是軟體,不是硬體。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "On where students should start: if outcomes follow a power law, picking the single best company matters far more than choosing between 'founder vs. employee.' Big-company alumni rarely start startups — everything works automatically there, so you never see the machinery. Andreessen's proof from his 1991 IBM internship, 14 levels below the CEO in a 400,000-person org, is the sharpest line of the night.",
       "zh": "至於學生該從哪裡開始:如果成果服從冪次法則(power law),挑中那一家最好的公司,遠比糾結「創業還是就業」重要。大公司出身的人很少去創業——在那裡一切自動運轉,你永遠看不到機器的內部。Andreessen 用他 1991 年在 IBM 實習的經歷作證:在一個 40 萬人的組織裡,他距離 CEO 隔了 14 個層級。這段話是當晚最鋒利的一句。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "The skill that you learn at IBM is how to exist at IBM. It's completely self-referential.",
       "zh": "你在 IBM 學到的技能,就是如何在 IBM 生存。它完全是自我指涉的。"
      }
     }
    ]
   }
  ],
  "factcheck": [
   {
    "claim": {
     "en": "In 2012, Andreessen said the jury was still out on Spotify's pay-the-labels strategy — incumbents might take the money and equity and still eliminate the company.",
     "zh": "2012 年,Andreessen 認為 Spotify「付錢給唱片公司」策略的成敗未定——既得利益者可能拿了錢與股權之後,仍然把它做掉。"
    },
    "now": {
     "en": "The gambit worked: Spotify went public in 2018 and posted its first full year of profitability in 2024 (about 1.14 billion euros net income, 675 million monthly users), while paying the music industry a record 10 billion dollars in royalties that year.",
     "zh": "這步險棋成功了:Spotify 於 2018 年上市,2024 年首度全年獲利(淨利約 11.4 億歐元、月活躍用戶 6.75 億),同年還付給音樂產業創紀錄的 100 億美元版稅。"
    },
    "sourceTitle": "Variety — Spotify Q4 2024 Earnings: Streamer Posts First Full-Year Profit",
    "sourceUrl": "https://variety.com/2025/digital/news/spotify-q4-2024-earnings-first-full-year-profit-double-down-music-1236296518/"
   },
   {
    "claim": {
     "en": "Andreessen predicted there would likely be 5 billion smartphones within about three years (roughly by 2015).",
     "zh": "Andreessen 預測大約三年內(2015 年前後)全球智慧型手機將達 50 億支。"
    },
    "now": {
     "en": "Right direction, early timing: the world reached roughly 5.7 billion smartphone users only around 2025 — about 70 percent of humanity — nearly a decade later than predicted, neatly illustrating the class's own lesson about being early.",
     "zh": "方向正確、時間太早:全球智慧型手機使用者到 2025 年前後才達約 57 億人——約占人口七成——比預測晚了將近十年,恰好印證了本課關於「太早」的教訓。"
    },
    "sourceTitle": "BankMyCell — How Many People Have Smartphones Worldwide",
    "sourceUrl": "https://www.bankmycell.com/blog/how-many-phones-are-in-the-world"
   }
  ],
  "quiz": [
   {
    "q": {
     "en": "According to Andreessen, why did most of the great internet ideas of the late 1990s fail?",
     "zh": "根據 Andreessen 的說法,90 年代末那些偉大的網路構想大多為什麼失敗?"
    },
    "options": [
     {
      "en": "They fundamentally misread what consumers wanted",
      "zh": "它們從根本上誤判了消費者要什麼"
     },
     {
      "en": "They were substantively right but arrived too early, before the infrastructure and users existed",
      "zh": "它們本質上是對的,只是來得太早,基礎設施與使用者都還不存在"
     },
     {
      "en": "Government regulation shut them down before they could scale",
      "zh": "政府監管在它們規模化之前就把它們關掉了"
     },
     {
      "en": "They lacked patent protection against larger competitors",
      "zh": "它們缺乏對抗大型競爭者的專利保護"
     }
    ],
    "answer": 1,
    "explain": {
     "en": "Andreessen's core claim is that the dot-com ideas — grocery delivery, e-commerce in every vertical — were correct in substance but premature: only about 50 million people were online. The same ideas work now with billions connected. The crash punished timing, not vision.",
     "zh": "Andreessen 的核心主張是:網路泡沫時代的構想——生鮮外送、各垂直領域的電商——本質上都對,只是太早:當時全球上網人口僅約 5,000 萬。如今數十億人連網,同樣的構想就成立了。崩盤懲罰的是時機,不是願景。"
    }
   },
   {
    "q": {
     "en": "What does the 'strongest' version of the software-eats-the-world thesis claim?",
     "zh": "「軟體吞噬世界」論點的「最強版本」主張什麼?"
    },
    "options": [
     {
      "en": "Value within the tech industry shifts from hardware to software and the cloud",
      "zh": "科技業內部的價值從硬體移向軟體與雲端"
     },
     {
      "en": "Old industries like newspapers are forced to digitize their existing operations",
      "zh": "報業等舊產業被迫將既有營運數位化"
     },
     {
      "en": "Silicon Valley-style software companies, with engineering-first cultures, will come to dominate every industry",
      "zh": "以工程為先的矽谷式軟體公司,終將主導所有產業"
     },
     {
      "en": "Software will make sales and marketing organizations obsolete",
      "zh": "軟體將讓銷售與行銷組織變得多餘"
     }
    ],
    "answer": 2,
    "explain": {
     "en": "The weak version stays inside tech (hardware to software) and the strong version digitizes old industries. The strongest goes further: the Silicon Valley software company itself — its engineering priority and Google/Facebook-style management — becomes the template that runs every industry.",
     "zh": "弱版本停留在科技業內部(硬體移向軟體),強版本是舊產業被迫數位化。最強版本更進一步:矽谷軟體公司本身——工程優先、Google/Facebook 式的管理——會成為主導所有產業的範本。"
    }
   },
   {
    "q": {
     "en": "What is the number one reason Andreessen Horowitz rejects startup pitches?",
     "zh": "Andreessen Horowitz 拒絕新創提案的頭號原因是什麼?"
    },
    "options": [
     {
      "en": "A great product with no real distribution strategy",
      "zh": "產品很棒,卻沒有真正的通路策略"
     },
     {
      "en": "Founders who are too young to serve as CEO",
      "zh": "創辦人太年輕,不適任 CEO"
     },
     {
      "en": "Target markets that are too small to matter",
      "zh": "目標市場太小,不值得投入"
     },
     {
      "en": "A weak patent portfolio relative to incumbents",
      "zh": "專利組合相對於既有業者太薄弱"
     }
    ],
    "answer": 0,
    "explain": {
     "en": "Andreessen says the Valley's product worship has a dark side: founders focus on product to the exclusion of everything else, and a missing go-to-market plan gets relabeled 'viral marketing.' Even Salesforce — tagline 'No software' — runs a huge sales force.",
     "zh": "Andreessen 指出,矽谷的產品崇拜有其陰暗面:創辦人只顧產品、排除一切其他事務,缺席的市場進入計畫被重新貼上「病毒式行銷」的標籤。連標語是「No software」的 Salesforce,都養著龐大的銷售部隊。"
    }
   }
  ]
 },
 {
  "slug": "class-11",
  "layout": "lesson",
  "icon": "menu_book",
  "navLabel": "11",
  "classNo": 11,
  "sourceUrl": "https://blakemasters.tumblr.com/post/22866240816/peter-thiels-cs183-startup-class-11-notes-essay",
  "title": {
   "en": "Secrets",
   "zh": "秘密"
  },
  "subtitle": {
   "en": "Every great company is built on a secret: an important truth that is hard, but possible, to discover.",
   "zh": "每一家偉大的公司都建立在一個秘密之上——一個困難、但有可能被發現的重要真相。"
  },
  "objectives": [
   {
    "en": "Define what Thiel means by a secret and locate it on the easy-hard-impossible spectrum of truths.",
    "zh": "說出 Thiel 所謂「秘密(secret)」的定義,並把它定位在「簡單—困難—不可能」的真相光譜上。"
   },
   {
    "en": "Explain the four social forces—incrementalism, risk aversion, complacency, egalitarianism—that make people stop believing secrets exist.",
    "zh": "解釋讓現代人不再相信秘密存在的四股社會力量:漸進主義、風險趨避、自滿與平等主義。"
   },
   {
    "en": "Hunt for secrets by distinguishing secrets of nature from secrets about people, and by asking what no one is allowed to say.",
    "zh": "區分自然的秘密與關於人的秘密,並透過「什麼是大家不能說的?」這類問題去尋找秘密。"
   },
   {
    "en": "Judge when a startup should share its secret and when to stay quiet, using PayPal and Tesla as reference cases.",
    "zh": "以 PayPal 與 Tesla 為例,判斷新創何時該分享秘密、何時該保持沉默。"
   }
  ],
  "sections": [
   {
    "id": "what-a-secret-is",
    "heading": {
     "en": "1. What a Secret Is",
     "zh": "1. 什麼是秘密"
    },
    "summary": {
     "en": "Secrets are unconventional truths in the hard-but-doable middle zone, and the course's biggest lessons—monopoly, power law, distribution—are all secrets.",
     "zh": "秘密是落在「困難但做得到」中間地帶的非常規真相;本課程最重要的三堂課——壟斷、冪次法則、通路——本身都是秘密。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Thiel's favorite interview question—what important truth do very few people agree with you on?—is really a request for a secret. Its business form: what great company is no one starting? Roughly speaking, the world can support as many great new companies as it holds undiscovered secrets.",
       "zh": "Thiel 最愛的面試題——「有什麼重要的真相,是很少人同意你的?」——其實就是在要一個秘密。換成商業版本就是:「有什麼偉大的公司,現在還沒有人創立?」粗略來說,世界上還藏著多少未被發現的秘密,就能撐起多少偉大的新公司。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "Secrets are unpopular or unconventional truths.",
       "zh": "秘密是不受歡迎、或不合常規的真相。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Truths come in three kinds: easy conventions everyone already accepts, impossible mysteries (like superstring theory) that cannot be tested, and a middle zone of hard but achievable truths—where secrets live. Secrets also move over time: triangle math was once Pythagoras's hard-won secret and is now a convention, while truths a society abandons can become hidden all over again.",
       "zh": "真相分三種:人人都接受的簡單常識;無法驗證的不可能之謎(例如超弦理論);以及中間那塊困難但做得到的真相——秘密就住在這裡。秘密也會隨時間移動:三角形的數學曾是畢達哥拉斯苦苦追尋的秘密,如今已是常識;而被社會拋棄的真相,也可能重新變回隱藏狀態。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Monopoly: capitalism and competition are opposites, but monopolists pretend to be small and also-rans pretend to dominate, so the truth stays buried.",
        "Power law: returns are radically unequal—one investment can outperform the rest of a fund combined—yet people are wired to deny inequality.",
        "Distribution: sales matters far more than anyone admits, and salespeople work hardest at hiding that you are being sold to.",
        "The meta-secret: many important secrets are still out there—a belief that was conventional 50 years ago and has itself become a secret."
       ],
       "zh": [
        "壟斷:資本主義與競爭是相反詞,但壟斷者假裝自己渺小、陪跑者假裝自己稱霸,真相因此被埋住。",
        "冪次法則(power law):報酬極度不平均——一筆投資可能勝過基金其餘部位的總和——但人天生抗拒承認不平等。",
        "通路(distribution):銷售遠比大家承認的重要,而銷售員最努力的,就是讓你不覺得自己正在被推銷。",
        "後設秘密(meta-secret):世上仍有許多重要秘密等著被發現——這個觀點五十年前是常識,如今本身也成了秘密。"
       ]
      }
     }
    ]
   },
   {
    "id": "why-people-stopped-believing",
    "heading": {
     "en": "2. Why People Stopped Believing in Secrets",
     "zh": "2. 為什麼人們不再相信秘密"
    },
    "summary": {
     "en": "From the Unabomber to fundamentalists and closed frontiers, culture teaches that only easy and impossible problems remain—a message driven by four social forces.",
     "zh": "從大學炸彈客到各種基本教義派、從探索殆盡的地圖到菁英學校,文化不斷灌輸「世上只剩簡單與不可能的問題」——背後是四股社會力量。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "The extreme case is Ted Kaczynski, the Unabomber: a 167-IQ, Harvard-trained mathematician who argued that all hard-but-satisfying goals are gone, leaving people depressed—and whose cure was destroying technology so that hard problems could return. Milder versions are everywhere: hipster anti-tech irony, and religious, environmental, and market fundamentalisms that each split the world into easy truths, sacred mysteries, and forbidden heresy in between (try telling a market fundamentalist you can beat the market).",
       "zh": "最極端的例子是「大學炸彈客」Ted Kaczynski:智商 167、哈佛出身的數學家。他主張世上困難而值得追求的目標已經消失,人們因此憂鬱;而他的「解方」是摧毀科技,讓困難的問題重新出現。溫和版則隨處可見:文青式的反科技嘲諷,以及宗教、環保、市場等各種基本教義派——它們都把世界切成簡單的真理、神聖的奧秘,以及夾在中間的異端(試試對市場基本教義派說你能打敗市場)。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Geography reinforces the message. The map has no blank spaces left, so people quietly conclude the intellectual frontier is closed too: the periodic table looks finished, and going to Mars gets filed under impossible. Past triumphs become evidence that nothing big is left to do.",
       "zh": "地理更強化了這種心態。地圖上已經沒有空白,於是人們默默斷定知識的疆界也關閉了:元素週期表看起來已經完備,登陸火星被歸入不可能。過去的成就,反而成了「大事已經做完」的證據。"
      }
     },
     {
      "type": "table",
      "head": {
       "en": [
        "Social force",
        "How it kills belief in secrets"
       ],
       "zh": [
        "社會力量",
        "它如何扼殺對秘密的信念"
       ]
      },
      "rows": [
       {
        "en": [
         "Incrementalism",
         "Schools and academia reward tiny steps over breakthroughs; papers count as new only in some small way."
        ],
        "zh": [
         "漸進主義 (incrementalism)",
         "學校與學術界獎勵小步前進而非突破;論文往往只有一點點微小的新意。"
        ]
       },
       {
        "en": [
         "Risk aversion",
         "Holding an unpopular belief and being proven wrong feels unbearable, so people avoid holding secrets at all."
        ],
        "zh": [
         "風險趨避 (risk aversion)",
         "抱持不受歡迎的信念又被證明是錯的,令人難以承受,所以人們乾脆不持有任何秘密。"
        ]
       },
       {
        "en": [
         "Complacency",
         "Elites are told they are set for life once admitted to the right school—so why go looking for hidden truths?"
        ],
        "zh": [
         "自滿 (complacency)",
         "菁英被告知只要進了名校,人生就穩了——那又何必去尋找隱藏的真相?"
        ]
       },
       {
        "en": [
         "Egalitarianism",
         "We distrust the idea that one person sees what others cannot; prophets read as crackpots. Einstein's 1939 nuclear letter to Roosevelt was taken seriously—today it would die in the mailroom."
        ],
        "zh": [
         "平等主義 (egalitarianism)",
         "我們不相信有人能看見別人看不見的東西;先知被當成怪人。愛因斯坦 1939 年寫給羅斯福談核武的信,當年被認真對待——放在今天大概會被丟在收發室。"
        ]
       }
      ]
     }
    ]
   },
   {
    "id": "case-for-secrets",
    "heading": {
     "en": "3. The Case for Secrets",
     "zh": "3. 為秘密辯護"
    },
    "summary": {
     "en": "Bubbles, injustice, and dissent all presuppose hidden truths, and solved impossible-looking problems like Fermat's Last Theorem prove the hard middle zone is real.",
     "zh": "泡沫、不公義與異議的存在,都以隱藏的真相為前提;而費馬最後定理這類「看似不可能」的問題被解決,證明困難的中間地帶真實存在。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "If there were no secrets, markets would be perfectly efficient—yet in 2000 you could not call the dot-com bubble irrational, in 2007 naming the housing bubble was heresy, and the Fed modeled maximum subprime losses at $25 billion, off by orders of magnitude. Likewise, every fight against injustice begins as a minority's secret (as civil rights did), and every legitimate dissident presupposes a hidden truth about the system. Denying secrets means claiming either that everything is already just, or that nothing can ever be fixed.",
       "zh": "如果世上沒有秘密,市場就該完全有效率——但 2000 年你不能說網路泡沫不理性,2007 年指出房市泡沫是異端,聯準會當時估計次貸最大損失是 250 億美元,結果差了好幾個數量級。同樣地,每一場對抗不公義的運動,一開始都是少數人的秘密(民權運動正是如此);每一個站得住腳的異議者,都預設了體制中存在隱藏的真相。否認秘密,等於宣稱世界要嘛已經完全公義、要嘛永遠無可救藥。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "The HP board saga shows the corporate cost. Tom Perkins wanted the board to wrestle with hard technical problems; Patricia Dunn's camp insisted such questions were beyond the board and that process compliance was the job—and ended up illegally wiretapping to hunt a leaker: process violations chasing process violations. Deny that hard, solvable problems exist and you get dysfunction, not safety.",
       "zh": "惠普(HP)董事會風波顯示了企業層面的代價。Tom Perkins 希望董事會直面困難的技術問題;Patricia Dunn 一派則堅持那超出董事會能力、董事會的工作就是流程合規——最後卻為了追查洩密者而非法監聽,變成用違規手段調查違規。否認「困難但可解」的問題存在,得到的不是安全,而是失能。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "The positive evidence: Andrew Wiles proved Fermat's Last Theorem in 1995 after roughly nine years of work—possible only because he believed the problem was hard rather than impossible. Web 2.0 showed that tiny secrets aggregate: individually trivial tweets summed into movements that helped topple governments. And WikiLeaks raises the timing question—does the secret that destroys a government surface before the secret that destroys its revealer?",
       "zh": "正面的證據是:Andrew Wiles 花了約九年,在 1995 年證明了費馬最後定理——正因為他相信這個問題是「困難」而非「不可能」。Web 2.0 則證明微小的秘密可以累積:單則推文微不足道,加總起來卻能幫助推翻政府。而 WikiLeaks 拋出了時序問題——摧毀政府的秘密,會比摧毀揭密者的秘密先曝光嗎?"
      }
     }
    ]
   },
   {
    "id": "how-to-find-secrets",
    "heading": {
     "en": "4. How to Find Secrets",
     "zh": "4. 如何找到秘密"
    },
    "summary": {
     "en": "Secrets divide into secrets of nature and secrets about people; the richest hunting ground is their intersection, reached by asking what people are not allowed to say.",
     "zh": "秘密分成自然的秘密與關於人的秘密;最肥沃的獵場在兩者的交會處,而入口就是問:「什麼是大家不能說的?」"
    },
    "blocks": [
     {
      "type": "quote",
      "text": {
       "en": "There are secrets of nature and then there are secrets about people.",
       "zh": "世上有自然的秘密,也有關於人的秘密。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Natural secrets demand observation and experiment; human secrets are things people hide because exposure would hurt them. Thiel argues human secrets are underrated—they tell you where to point your instruments. Monopoly, power law, and distribution are all both at once, and asking what a CEO cannot say reaches the anti-competition insight faster than deriving it from economic theory. Beware physics chauvinism, though: the PhD candidate who cut off his interviewer mid-question, insisting he already knew what would be asked, was wrong—and was not hired.",
       "zh": "自然的秘密需要觀察與實驗;關於人的秘密,則是人們因為曝光會受傷而刻意隱藏的事。Thiel 認為人的秘密被低估了——它們會告訴你該把儀器對準哪裡。壟斷、冪次法則、通路三者都同時屬於兩類;而問「執行長有什麼不能說的?」比從經濟理論推導,更快抵達反競爭的洞見。但要小心物理學沙文主義:那位在面試中打斷面試官、堅稱自己早就知道要被問什麼的博士生,答錯了,也沒被錄取。"
      }
     },
     {
      "type": "cards",
      "items": [
       {
        "title": {
         "en": "Nutrition",
         "zh": "營養學"
        },
        "body": {
         "en": "Elite science abandoned the field decades ago; the food pyramid owed more to Kellogg's lobbying than to evidence, and the obesity epidemic followed. A Manhattan Project for nutrition, staffed by six great scientists, is a wide-open opportunity.",
         "zh": "頂尖科學家數十年前就離開了這個領域;食物金字塔與其說是科學,不如說是家樂氏(Kellogg's)遊說的產物,肥胖症大流行隨之而來。找六位頂尖人才發動「營養學的曼哈頓計畫」,是一個敞開的機會。"
        }
       },
       {
        "title": {
         "en": "Stem cells × cancer",
         "zh": "幹細胞 × 癌症"
        },
        "body": {
         "en": "Politics keeps the two fields apart, yet injected stem cells divide and multiply much like cancer, and some cancer cells behave like stem cells. The uninvestigated intersection may hide breakthroughs.",
         "zh": "政治讓這兩個領域彼此隔離,但注入體內的幹細胞會分裂增殖,行為很像癌細胞;某些癌細胞也表現得像幹細胞。這個沒人研究的交會處,可能藏著重大突破。"
        }
       },
       {
        "title": {
         "en": "Cleantech and Tesla",
         "zh": "潔淨科技與 Tesla"
        },
        "body": {
         "en": "The real secret was sociological: cleantech was partly fashion. Musk embraced it—luxury electric cars for the rich fund cheaper models later. Start with a brand and build the tech company up underneath it.",
         "zh": "真正的秘密是社會學的:潔淨科技有一部分是時尚。Musk 選擇擁抱這一點——先賣豪華電動車給有錢人,用獲利資助之後更平價的車款。先建立品牌,再從底下把科技公司蓋起來。"
        }
       },
       {
        "title": {
         "en": "Agriculture",
         "zh": "農業"
        },
        "body": {
         "en": "The trade deficit, around 4% of GDP, looks unsustainable, and exports are growing fastest in agriculture—a sector tech investors dismiss as pre-technological. The obscurity is the signal.",
         "zh": "約佔 GDP 4% 的貿易逆差看起來難以持續,而出口成長最快的是農業——一個被科技投資人視為「前科技」的領域。乏人問津,正是訊號。"
        }
       },
       {
        "title": {
         "en": "Governance",
         "zh": "治理"
        },
        "body": {
         "en": "Everyone debates big versus small government; no one explores doing more with less—which is exactly what technology means.",
         "zh": "所有人都在吵大政府還是小政府,卻沒有人探索「用更少做更多」——而那正是科技的定義。"
        }
       }
      ]
     },
     {
      "type": "quote",
      "text": {
       "en": "The basic challenge is to find things that are hard but doable. You want to find a frontier.",
       "zh": "根本的挑戰,是找到困難但做得到的事。你要找到一條疆界(frontier)。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "The corollary: never accept anyone else's definition of where the frontier is. Secrets are concealed both by nature and by the people around you.",
       "zh": "推論是:永遠別照單全收別人對疆界的定義。秘密不只被大自然藏起來,也被你身邊的人藏起來。"
      }
     }
    ]
   },
   {
    "id": "what-to-do-with-secrets",
    "heading": {
     "en": "5. What to Do with a Secret",
     "zh": "5. 找到秘密之後怎麼辦"
    },
    "summary": {
     "en": "Whether and when to tell depends on the secret's type and the ecosystem: PayPal chose speed over stealth, and the truly great companies may be the hidden ones.",
     "zh": "要不要說、何時說,取決於秘密的類型與整個生態系:PayPal 選擇速度而非隱匿;而真正偉大的公司,可能正藏在看不見的地方。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Tell no one and you get no team; tell everyone and you get competitors. Intellectual and natural secrets are relatively safe to share; human and political secrets can be lethal—the essay quotes Goethe's Faust to warn that mankind has always punished those who put hidden truths on display.",
       "zh": "誰都不告訴,就沒有團隊;告訴所有人,就迎來競爭者。知識性與自然類的秘密分享起來相對安全;關於人與政治的秘密則可能致命——文章引用歌德《浮士德》警告:人類向來嚴懲那些把隱藏真相攤在眾人面前的人。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "PayPal, summer 1999: linking money to email was a big secret but not a hard one—others would find it soon—so the right call was to move extremely fast and share the secret liberally inside the company. One interview candidate revealed a different, human secret: he wanted Thiel's job. He was not hired, and weeks later he launched a competitor. PayPal's deeper secret was that fraud is endemic to finance: banks quietly absorb enormous losses rather than admit they cannot stop the theft.",
       "zh": "1999 年夏天的 PayPal:把金錢和電子郵件連起來是個大秘密,但不是難的秘密——別人很快也會想到——所以正確的做法是全速衝刺,並在公司內部大方分享這個秘密。有位面試者洩露了另一種「關於人的秘密」:他想要 Thiel 的位子。他沒被錄取,幾週後就創了一家競爭對手。PayPal 更深層的秘密則是:詐欺是金融業的地方病——銀行寧可默默吸收巨額損失,也不承認自己擋不住盜竊。"
      }
     },
     {
      "type": "table",
      "head": {
       "en": [
        "Playbook",
        "Secret type",
        "Behavior"
       ],
       "zh": [
        "打法",
        "秘密類型",
        "行為模式"
       ]
      },
      "rows": [
       {
        "en": [
         "Small and vocal",
         "Small, quickly copyable",
         "Hypergrowth and constant PR—reveal and scale before the copycats arrive"
        ],
        "zh": [
         "小而高調",
         "小型、容易被抄襲",
         "超高速成長、天天發新聞稿——趕在模仿者出現前公開並擴張"
        ]
       },
       {
        "en": [
         "Big and quiet",
         "Big, hard, defensible",
         "Stealth, trade secrets, unique expertise—build a serious business over years, unseen"
        ],
        "zh": [
         "大而安靜",
         "大型、困難、可防禦",
         "隱身模式、營業秘密、獨門專業——花數年默默打造一家扎實的公司"
        ]
       }
      ]
     },
     {
      "type": "p",
      "text": {
       "en": "Because the vocal companies dominate headlines, perception is skewed: the best companies may be hidden. Do not take the media's ranking of startups as the true power-law distribution—ask instead which potentially great company everyone is overlooking. The essay closes with Tolkien: the known road runs ever on, but around the corner there may wait a new road or a secret gate. Take the hidden paths.",
       "zh": "因為高調的公司佔據了版面,大家的認知是扭曲的:最好的公司可能藏在暗處。不要把媒體對新創的排名當成真實的冪次分布——該問的是:哪家可能偉大的公司正被所有人忽略?文章以托爾金作結:已知的道路綿延不絕,但轉角之後,也許正等著一條新路、或一道秘密之門。去走那條隱藏的小徑吧。"
      }
     }
    ]
   }
  ],
  "factcheck": [
   {
    "claim": {
     "en": "In 2012 Thiel praised Tesla for grasping cleantech's sociological secret: sell luxury electric cars to the wealthy first, build the brand, then use the profits to fund cheaper mass-market models.",
     "zh": "2012 年,Thiel 稱讚 Tesla 抓住了潔淨科技的社會學秘密:先賣豪華電動車給有錢人、建立品牌,再用獲利資助更平價的大眾車款。"
    },
    "now": {
     "en": "The playbook worked: Roadster and Model S profits funded the mass-market Model 3 (2017), which drew roughly 200,000 orders within 24 hours, and Tesla went on to become the world's most valuable automaker.",
     "zh": "這套打法奏效了:Roadster 與 Model S 的獲利資助了 2017 年的大眾車款 Model 3,開放預訂 24 小時內湧入約 20 萬張訂單,Tesla 之後更成為全球市值最高的汽車公司。"
    },
    "sourceTitle": "World Economic Forum: How Elon Musk set out to achieve his Tesla master plan",
    "sourceUrl": "https://www.weforum.org/stories/2016/04/this-is-how-elon-musk-set-out-to-achieve-his-tesla-master-plan/"
   },
   {
    "claim": {
     "en": "Discussing WikiLeaks, the essay asked whether the secret that destroys a government would surface before the secret that destroys its revealer—Julian Assange's fate was still open in 2012.",
     "zh": "談到 WikiLeaks 時,文章問道:摧毀政府的秘密,會比摧毀揭密者的秘密先曝光嗎?2012 年時,Julian Assange 的命運仍是未知數。"
    },
    "now": {
     "en": "The revealer paid first: after seven years in Ecuador's London embassy and five in Belmarsh prison, Assange pleaded guilty to one Espionage Act count in June 2024 and returned to Australia a free man.",
     "zh": "先付出代價的是揭密者:在厄瓜多駐倫敦大使館躲了七年、又在 Belmarsh 監獄被關五年之後,Assange 於 2024 年 6 月就一項《間諜法》罪名認罪,以自由之身返回澳洲。"
    },
    "sourceTitle": "NBC News: Julian Assange returns home to Australia a free man after U.S. plea deal",
    "sourceUrl": "https://www.nbcnews.com/news/world/julian-assange-arrives-home-australia-free-man-us-plea-deal-rcna158970"
   }
  ],
  "quiz": [
   {
    "q": {
     "en": "On Thiel's map of truths, where do valuable secrets live?",
     "zh": "在 Thiel 的真相地圖上,有價值的秘密位在哪裡?"
    },
    "options": [
     {
      "en": "Among easy conventions that everyone already accepts",
      "zh": "在人人都已接受的簡單常識裡"
     },
     {
      "en": "In the middle zone of truths that are hard but possible to reach",
      "zh": "在困難但有可能達成的中間地帶"
     },
     {
      "en": "Among impossible mysteries like superstring theory",
      "zh": "在像超弦理論那樣無法驗證的奧秘裡"
     },
     {
      "en": "Spread evenly across easy, hard, and impossible truths",
      "zh": "平均分布在簡單、困難與不可能三種真相中"
     }
    ],
    "answer": 1,
    "explain": {
     "en": "Easy truths are already conventions, and impossible ones cannot be verified or acted on. Only the hard-but-doable middle zone yields truths you can discover first and build a company on before they become common knowledge.",
     "zh": "簡單的真相早已是常識,不可能的真相無法驗證也無從行動。只有「困難但做得到」的中間地帶,才藏著你能搶先發現、並在它變成常識之前拿來創業的真相。"
    }
   },
   {
    "q": {
     "en": "Which set is Thiel's list of social forces that erode belief in secrets?",
     "zh": "下列哪一組,是 Thiel 所列出侵蝕「相信秘密」的社會力量?"
    },
    "options": [
     {
      "en": "Globalization, regulation, taxation, litigation",
      "zh": "全球化、管制、稅負、訴訟"
     },
     {
      "en": "Monopoly, power law, distribution, sales",
      "zh": "壟斷、冪次法則、通路、銷售"
     },
     {
      "en": "Incrementalism, risk aversion, complacency, egalitarianism",
      "zh": "漸進主義、風險趨避、自滿、平等主義"
     },
     {
      "en": "Optimism, pessimism, determinism, indeterminism",
      "zh": "樂觀、悲觀、決定論、非決定論"
     }
    ],
    "answer": 2,
    "explain": {
     "en": "Each force narrows vision: schools reward tiny steps, people fear being wrong about unpopular beliefs, elites are told they are set for life, and society distrusts anyone claiming to see what others cannot—leaving only easy and impossible problems in view.",
     "zh": "這四股力量各自收窄視野:學校獎勵小步前進、人們害怕抱持不受歡迎的信念又出錯、菁英被告知人生已經穩了、社會不信任自稱看得見別人看不見之事的人——最後視野裡只剩「簡單」和「不可能」。"
    }
   },
   {
    "q": {
     "en": "In 1999 PayPal saw that linking money to email was a big secret that others would soon discover. What did that imply?",
     "zh": "1999 年,PayPal 看出「把金錢與電子郵件連結」是個別人很快也會發現的大秘密。這意味著什麼?"
    },
    "options": [
     {
      "en": "Go into deep stealth mode and file patents before doing anything else",
      "zh": "先進入完全隱身模式,把專利申請好再說"
     },
     {
      "en": "Keep the idea from most employees to prevent leaks",
      "zh": "對多數員工保密,以防洩露"
     },
     {
      "en": "Drop the idea, since a secret others can find is not worth pursuing",
      "zh": "放棄這個想法,因為別人找得到的秘密不值得做"
     },
     {
      "en": "Move extremely fast and share the secret liberally to build the team before copycats arrived",
      "zh": "全速衝刺、大方分享這個秘密,趕在模仿者出現前把團隊做起來"
     }
    ],
    "answer": 3,
    "explain": {
     "en": "What to do with a secret depends on the ecosystem. When a secret is big but easy for others to find, speed beats secrecy: recruiting people and executing fast matters more than hiding the idea.",
     "zh": "如何處置秘密,取決於整個生態系。當秘密很大、卻容易被別人發現時,速度勝過保密:快速招人與執行,比藏住點子更重要。"
    }
   }
  ]
 },
 {
  "slug": "class-12",
  "layout": "lesson",
  "icon": "menu_book",
  "navLabel": "12",
  "classNo": 12,
  "sourceUrl": "https://blakemasters.tumblr.com/post/23250566538/peter-thiels-cs183-startup-class-12-notes-essay",
  "title": {
   "en": "War and Peace",
   "zh": "戰爭與和平"
  },
  "subtitle": {
   "en": "Rivals converge and go blind as they fight; great companies avoid wars — or end them fast.",
   "zh": "交戰的對手會愈打愈像、雙雙失焦;偉大的公司避開戰爭,真要打就速戰速決。"
  },
  "objectives": [
   {
    "en": "Explain the Marx and Shakespeare theories of conflict, and why tech competition is almost always Shakespearean.",
    "zh": "說明馬克思(Marx)與莎士比亞(Shakespeare)兩種衝突理論,以及為什麼科技業的競爭幾乎都是莎士比亞式的。"
   },
   {
    "en": "Read the history of tech wars — from 1970s mainframes to Oracle vs. Siebel and Microsoft vs. Google — and see the real cost of fighting.",
    "zh": "從 1970 年代大型主機、Oracle 對 Siebel 到 Microsoft 對 Google 的科技戰史中,看清打仗的真實代價。"
   },
   {
    "en": "Apply Thiel's rules of engagement: avoid wars, merge or run when you can't win, and end unavoidable fights fast — including fights inside your own company.",
    "zh": "運用 Thiel 的交戰守則:能避戰就避戰,打不贏就合併或撤退,非打不可就速戰速決——公司內部的鬥爭也一樣。"
   },
   {
    "en": "Use Reid Hoffman's tests — contrarian and right, a 10x edge, a secret plan — to judge whether a battle is worth fighting.",
    "zh": "用 Reid Hoffman 的檢驗標準——「逆勢而且正確」、十倍優勢、祕密計畫——判斷一場仗值不值得打。"
   }
  ],
  "sections": [
   {
    "id": "war-as-theater",
    "heading": {
     "en": "1. War Without: Theater and Psychology",
     "zh": "1. 外部之戰:劇場與心理"
    },
    "summary": {
     "en": "Competition often works as motivating theater, but obsessing over an enemy warps you into its mirror image.",
     "zh": "競爭常常只是激勵人心的劇場,但對敵人的執念會把你變成他的鏡像。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Wars are everywhere — real ones, and metaphorical ones like the war on cancer or the War on Terror — and the language of war maps directly onto startups. This class asks when fighting is actually justified, and how to tilt energy away from destruction toward building something productive.",
       "zh": "戰爭無所不在——既有真實的戰爭,也有「對癌症宣戰」、「反恐戰爭」這類隱喻式的戰爭——而戰爭的語言可以直接對應到新創公司。本課要問的是:什麼時候真的值得開戰?以及如何把精力從破壞導向建設。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Cold War rivalry played out as proxy theater: the Fischer–Spassky chess match (1972) and the Miracle on Ice hockey upset (1980).",
        "The space race ended not with a bang but with the Apollo–Soyuz handshake in orbit (1975).",
        "Decades of intense tension stayed largely symbolic — proof that rivalry can motivate without destroying, though the line between the two is dangerously thin."
       ],
       "zh": [
        "冷戰的對抗以代理劇場的形式上演:1972 年 Fischer 對 Spassky 的西洋棋大戰、1980 年的冰上奇蹟(Miracle on Ice)冰球爆冷。",
        "太空競賽最後不是以爆炸收場,而是 1975 年 Apollo–Soyuz 任務在軌道上的握手。",
        "數十年的高度緊張大多停留在象徵層次——證明對抗可以只激勵而不毀滅,但這條界線危險地薄。"
       ]
      }
     },
     {
      "type": "p",
      "text": {
       "en": "The psychological price is steep: fixate on an enemy long enough and you lose sight of everything else. The skinny kid who obsesses over the bully grows up to become one himself.",
       "zh": "心理代價很高:對敵人執著太久,你會看不見其他一切。整天想著惡霸的瘦弱男孩,長大後往往自己變成了惡霸。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "The battles are so fierce because the stakes are so small. — Henry Kissinger, on academia",
       "zh": "鬥爭之所以如此激烈,正因為賭注如此微小。——Henry Kissinger 評學術圈"
      }
     }
    ]
   },
   {
    "id": "marx-vs-shakespeare",
    "heading": {
     "en": "2. Marx vs. Shakespeare",
     "zh": "2. 馬克思 vs. 莎士比亞"
    },
    "summary": {
     "en": "Marx says people fight because they differ; Shakespeare says they fight because they are alike — and tech is almost always Shakespeare.",
     "zh": "馬克思說人們因差異而戰;莎士比亞說人們因相似而戰——科技業幾乎全是莎士比亞式的。"
    },
    "blocks": [
     {
      "type": "table",
      "head": {
       "en": [
        "Question",
        "Marx model",
        "Shakespeare model"
       ],
       "zh": [
        "問題",
        "馬克思模型",
        "莎士比亞模型"
       ]
      },
      "rows": [
       {
        "en": [
         "Why do people fight?",
         "Fundamental differences — class, ideology, goals",
         "They are basically alike; outsiders can barely tell them apart"
        ],
        "zh": [
         "人為什麼開戰?",
         "根本性的差異——階級、意識形態、目標",
         "雙方其實非常相似,外人幾乎分不出誰是誰"
        ]
       },
       {
        "en": [
         "How the fight looks",
         "From inside: a righteous struggle over real stakes",
         "From outside: tiny stakes, with combatants converging as they escalate"
        ],
        "zh": [
         "這場仗看起來如何",
         "從內部看:為真實利害而戰的正義之爭",
         "從外部看:賭注很小,交戰雙方在互相升級中愈打愈像"
        ]
       },
       {
        "en": [
         "Archetype",
         "Bourgeoisie vs. proletariat",
         "Romeo and Juliet: two households, both alike in dignity"
        ],
        "zh": [
         "原型",
         "資產階級 vs. 無產階級",
         "《羅密歐與茱麗葉》:兩個門第相當、彼此相像的家族"
        ]
       }
      ]
     },
     {
      "type": "p",
      "text": {
       "en": "Hamlet pushes the standard to its extreme: greatness means finding quarrel in a straw when honor is at stake — true heroes fight over things that do not matter. Thiel's warning is that this is madness as much as greatness, and founders should not romanticize it.",
       "zh": "哈姆雷特把標準推到極端:所謂偉大,是在名譽攸關時連一根稻草都能開戰——真正的英雄為不重要的事而戰。Thiel 的提醒是:這既是偉大也是瘋狂,創業者不該浪漫化這種心態。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "You must choose your enemies well, since you'll soon become just like them.",
       "zh": "你必須慎選敵人,因為你很快就會變得跟他們一模一樣。"
      }
     }
    ]
   },
   {
    "id": "tech-wars",
    "heading": {
     "en": "3. A Short History of Tech Wars",
     "zh": "3. 科技戰爭簡史"
    },
    "summary": {
     "en": "Copycat rivals from 1970s mainframes to mobile card readers lost sight of the only question that mattered: is this market worth winning?",
     "zh": "從 1970 年代主機到行動刷卡機,互相模仿的對手都忘了唯一重要的問題:這個市場值得贏嗎?"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "In the 1970s, NCR, Control Data, and Honeywell all built similar machines to fight IBM — and every one of them missed the microcomputer wave. In the dot-com era, Pets.com, PetStore.com, and Petopia battled over an online pet-supply market that was never viable, while Kozmo, Webvan, and UrbanFetch repeated the pattern in delivery. Inside each war the narrative felt urgent; from outside, the combatants were interchangeable and the prize was worthless.",
       "zh": "1970 年代,NCR、Control Data 和 Honeywell 都造出類似的機器來對抗 IBM——結果全數錯過微電腦浪潮。網路泡沫時期,Pets.com、PetStore.com 和 Petopia 為一個根本不成立的線上寵物用品市場廝殺;Kozmo、Webvan、UrbanFetch 則在外送領域重演同樣劇本。身在戰局中,劇情感覺無比迫切;從外面看,參戰者面目雷同,獎品也一文不值。"
      }
     },
     {
      "type": "cards",
      "items": [
       {
        "title": {
         "en": "Oracle vs. Siebel",
         "zh": "Oracle 對 Siebel"
        },
        "body": {
         "en": "Siebel's founder was a top Oracle salesman, and his company mirrored Oracle from day one. After years of stunts — Oracle once parked a recruiting truck outside Siebel's headquarters — Oracle simply acquired Siebel in 2005. When a war ends in acquisition, the fighting was probably pointless all along.",
         "zh": "Siebel 的創辦人本是 Oracle 的頂尖業務,公司從第一天起就處處模仿 Oracle。雙方較勁多年——Oracle 甚至派招募卡車停在 Siebel 總部門口——最後 Oracle 在 2005 年直接把 Siebel 買下。戰爭若以收購收場,那這場仗大概從頭到尾都不必打。"
        }
       },
       {
        "title": {
         "en": "Informix vs. Oracle",
         "zh": "Informix 對 Oracle"
        },
        "body": {
         "en": "A 1990s billboard war — signs like 'You just passed Redwood Shores. So did we.' — targeted rival employees, not customers: pure motivational theater. Informix imploded in 1997. Larry Ellison's playbook: always keep an enemy big enough to motivate you but too weak to threaten you.",
         "zh": "1990 年代的看板大戰——像「你剛經過 Redwood Shores,我們也剛超越它」這類標語——瞄準的是對手的員工,不是顧客:純粹的激勵劇場。Informix 在 1997 年自爆。Larry Ellison 的心法:永遠留一個大到能激勵你、卻弱到威脅不了你的敵人。"
        }
       },
       {
        "title": {
         "en": "The card-reader shape war",
         "zh": "刷卡機形狀大戰"
        },
        "body": {
         "en": "Square's little white square spawned PayPal's triangle reader and Intuit's cylinder — imitators literally running out of shapes. Thiel's verdict: the copycats are in serious trouble; it is much better to be original.",
         "zh": "Square 的白色小方塊引來 PayPal 的三角形讀卡機與 Intuit 的圓柱形讀卡機——模仿者連形狀都快用完了。Thiel 的判詞:抄襲者麻煩大了,當原創者好得多。"
        }
       }
      ]
     },
     {
      "type": "p",
      "text": {
       "en": "Microsoft and Google spent over a decade converging — Bing vs. Search, Chrome vs. Explorer, Docs vs. Office. While they fought, Apple rose above the battlefield: by 2012 its $531 billion market cap exceeded the $456 billion of Microsoft and Google combined. Fighting is costly; those who avoid it can swoop in and capitalize on the peace.",
       "zh": "Microsoft 與 Google 花了十多年彼此趨同——Bing 對 Search、Chrome 對 Explorer、Docs 對 Office。就在他們纏鬥時,Apple 凌空而起:到 2012 年,Apple 市值 5,310 億美元,超過 Microsoft 加 Google 的 4,560 億總和。打仗代價高昂;避開戰場的人,反而能坐收和平的紅利。"
      }
     }
    ]
   },
   {
    "id": "paypal-vs-xcom",
    "heading": {
     "en": "4. If You Can't Beat Them, Merge: PayPal vs. X.com",
     "zh": "4. 打不贏就合併:PayPal 對 X.com"
    },
    "summary": {
     "en": "An all-out feature war between offices four blocks apart nearly destroyed both companies; a 50-50 merger bought peace — and survival through the crash.",
     "zh": "相隔四個街區的全面功能大戰差點毀掉兩家公司;五五對分的合併換來和平,也換來撐過股災的資本。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "In late 1999, PayPal and X.com sat four blocks apart on University Avenue in Palo Alto, matching each other feature for feature and signup bonus for signup bonus. Engineers worked 90–100 hour weeks; one sleep-deprived engineer even presented an actual bomb design in a meeting. The focus was never on building something objectively useful — it was on beating X.com.",
       "zh": "1999 年底,PayPal 和 X.com 在 Palo Alto 的 University Avenue 上只隔四個街區,功能對功能、註冊獎金對註冊獎金地互相追趕。工程師每週工作 90 到 100 小時;一位嚴重睡眠不足的工程師甚至在會議上端出真正的炸彈設計圖。當時的重點從來不是做出客觀上有用的東西,而是打敗 X.com。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Both leaderships were scared enough to talk. In February 2000 they agreed to a 50-50 merger on neutral ground, and the combined company raised capital just before the market crashed — peace bought years of runway to actually build the business.",
       "zh": "雙方高層都怕到願意坐下來談。2000 年 2 月,他們在中立地點談成五五對分的合併;合併後的公司趕在股市崩盤前完成募資——和平換來了好幾年安心打造事業的跑道。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Avoid wars whenever you can — most are not worth fighting.",
        "If you can't win, run away or merge.",
        "If you must fight, strike fast with overwhelming force and end it — the longer a war drags on, the more you become indistinguishable from your enemy."
       ],
       "zh": [
        "能避戰就避戰——大多數戰爭根本不值得打。",
        "打不贏,就撤退或合併。",
        "非打不可,就用壓倒性的力量速戰速決——仗拖得越久,你就越跟敵人難以區分。"
       ]
      }
     }
    ]
   },
   {
    "id": "war-within",
    "heading": {
     "en": "5. War Within: Infighting as an Autoimmune Disease",
     "zh": "5. 內部之戰:如同自體免疫疾病的內鬥"
    },
    "summary": {
     "en": "Internal conflict kills more companies than competitors do — and it starts when two people want the same thing, not different things.",
     "zh": "殺死公司的往往是內鬥而非對手——而內鬥的起點是兩個人想要同一個東西,不是想要不同的東西。"
    },
    "blocks": [
     {
      "type": "quote",
      "text": {
       "en": "Most companies are killed by internal infighting... It's like an autoimmune disease.",
       "zh": "大多數公司是被內鬥殺死的……那就像自體免疫疾病。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Internal fights are Shakespearean too. The Marx story — people clashing over deep disagreements about direction — is rare; in practice people fight because they want the same role or turf. In well-functioning companies, people who want different things simply go own those different things. At PayPal, David Sacks's mandate to build one seamless product overlapped with everyone else's job — exactly the kind of conflict a CEO must defuse before it escalates.",
       "zh": "內鬥同樣是莎士比亞式的。馬克思式的劇本——因為對公司方向有根本歧見而衝突——其實很少見;現實中人們開打,是因為想要同一個職位或地盤。在運作良好的公司裡,想要不同東西的人,就直接去擁有那些不同的東西。在 PayPal,David Sacks 負責打造無縫單一產品的任務跟所有人的職責都重疊——這正是 CEO 必須在惡化前拆除的衝突引信。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "PayPal redrew its org chart every three months to defuse conflicts before they formed.",
        "Every person was evaluated on exactly one thing.",
        "Each person's mandate was completely different from everyone else's — focusing on an internal rival is almost always the wrong move."
       ],
       "zh": [
        "PayPal 每三個月重畫一次組織圖,在衝突成形前先拆掉它。",
        "每個人只用一件事來評量。",
        "每個人的職責都跟其他所有人完全不同——盯著內部對手,幾乎永遠是錯的。"
       ]
      }
     }
    ]
   },
   {
    "id": "hoffman-conversation",
    "heading": {
     "en": "6. Conversation with Reid Hoffman",
     "zh": "6. 與 Reid Hoffman 對談"
    },
    "summary": {
     "en": "Hoffman's playbook for staying out of dumb fights: be contrarian and right, be 10x better, carry a secret plan, and stay paranoid about which battle you're in.",
     "zh": "Hoffman 的避戰心法:逆勢而且正確、好上十倍、握有祕密計畫,並隨時警惕自己正在打哪場仗。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Competition hurts on every front at once — customers, hiring, financing. Hoffman's founding test is to be 'contrarian and right': if the consensus dismisses your idea, you get room to grow before rivals arrive. But never count on rationality — people will compete with you even when doing so is a bad idea.",
       "zh": "競爭會同時在每條戰線傷害你——客戶、徵才、募資。Hoffman 的創業檢驗是「逆勢而且正確(contrarian and right)」:當共識都看衰你的點子,你就有一段沒有對手的成長空間。但別指望對手理性——就算參戰是個爛主意,還是會有人來跟你打。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "A marginal edge is worthless: you need something 10x better that fits in one sentence. One startup needed a 30-minute pitch to differentiate its anti-spam product — fatal.",
        "'Google can do it' is a weak objection unless you're building a search engine: big companies have limited focus, not limited smart people.",
        "Hoffman's interview question — how would you split $100k between iOS and Android? — has exactly one wrong answer: 50-50, which means you have no view.",
        "Few companies have plans; fewer have secret plans (Mozilla, Quora, Dropbox). Even a bad plan beats no plan — stacking resume lines to 'keep options open' is not a strategy."
       ],
       "zh": [
        "邊際優勢一文不值:你需要能用一句話講完的十倍優勢。有家新創得花 30 分鐘簡報才能講清楚自家反垃圾郵件產品哪裡不同——這就註定完了。",
        "除非你做的是搜尋引擎,否則「Google 也做得出來」是個薄弱的反駁:大公司缺的不是聰明人,是專注力。",
        "Hoffman 的面試題——10 萬美元要怎麼分配到 iOS 和 Android?——只有一個錯誤答案:五五對分,因為那等於說你沒有觀點。",
        "有計畫的公司很少,有祕密計畫的更少(Mozilla、Quora、Dropbox)。爛計畫也勝過沒計畫——為了「保留選項」不斷堆履歷,並不是策略。"
       ]
      }
     },
     {
      "type": "p",
      "text": {
       "en": "PayPal beat eBay's in-house Billpoint by seeing that the real platform was email, not the eBay site — PayPal's notifications often reached auction winners before eBay's own did. The lesson: keep questioning which battle you are actually in; in battle, only the paranoid survive. On geography, Hoffman calls New York the second most interesting consumer-internet hub, but Silicon Valley's network effects and single-minded focus on tech make it unlikely to be displaced.",
       "zh": "PayPal 能贏過 eBay 自家的 Billpoint,是因為看出真正的平台是 email,而不是 eBay 網站——PayPal 的得標通知常常比 eBay 自己的還快送到買家手上。教訓是:隨時重新檢視自己到底在打哪場仗;身處戰場,唯偏執者得以倖存。至於地理,Hoffman 認為紐約是消費性網路第二有趣的據點,但矽谷的網路效應與對科技的心無旁騖,讓它很難被取代。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "A half hour pitch on anti-spam is just more spam.",
       "zh": "花半小時簡報反垃圾郵件產品,本身就是另一種垃圾郵件。"
      }
     }
    ]
   }
  ],
  "factcheck": [
   {
    "claim": {
     "en": "In 2012, Thiel noted that Apple ($531B) — which stayed out of the Microsoft–Google war — was worth more than both rivals combined ($456B).",
     "zh": "2012 年 Thiel 指出,置身 Microsoft 與 Google 戰局之外的 Apple 市值(5,310 億美元)超過了兩個對手的總和(4,560 億美元)。"
    },
    "now": {
     "en": "All three became multi-trillion-dollar giants: by mid-2026 Apple is around $4.4T (it briefly topped $5T in July 2026), Alphabet about $4.5T, and Microsoft about $3.7T — while Nvidia, unmentioned in 2012, leads them all at roughly $5T.",
     "zh": "三家都成了數兆美元巨頭:到 2026 年年中,Apple 約 4.4 兆美元(2026 年 7 月一度突破 5 兆)、Alphabet 約 4.5 兆、Microsoft 約 3.7 兆——而 2012 年根本沒人提到的 Nvidia,以約 5 兆美元領先所有公司。"
    },
    "sourceTitle": "Forbes: Apple Briefly Surpasses $5 Trillion Market Value",
    "sourceUrl": "https://www.forbes.com/sites/tylerroush/2026/07/28/apple-briefly-surpasses-5-trillion-market-value-joining-nvidia/"
   },
   {
    "claim": {
     "en": "Thiel predicted the copycat card readers — PayPal's triangle, Intuit's cylinder — were 'in a great deal of trouble' and that the original, Square, was better positioned.",
     "zh": "Thiel 預測抄襲的讀卡機——PayPal 的三角形、Intuit 的圓柱形——「麻煩大了」,原創者 Square 的處境好得多。"
    },
    "now": {
     "en": "Square went public in 2015, renamed itself Block in 2021, and is worth roughly $50B in 2026. PayPal Here was discontinued in 2023 in favor of the acquired Zettle — the original outlasted its imitators.",
     "zh": "Square 於 2015 年上市,2021 年更名為 Block,2026 年市值約 500 億美元。PayPal Here 則在 2023 年停止服務,改由收購來的 Zettle 接手——原創者活得比模仿者久。"
    },
    "sourceTitle": "CardPaymentOptions: PayPal Here Review",
    "sourceUrl": "https://www.cardpaymentoptions.com/credit-card-processors/paypal-here/"
   }
  ],
  "quiz": [
   {
    "q": {
     "en": "According to the Shakespearean model Thiel favors, why did PayPal and X.com end up in all-out war?",
     "zh": "根據 Thiel 支持的莎士比亞式模型,PayPal 和 X.com 為什麼會打到你死我活?"
    },
    "options": [
     {
      "en": "Their founders held fundamentally opposed ideologies about payments",
      "zh": "兩邊創辦人對支付抱持根本對立的理念"
     },
     {
      "en": "They were nearly identical companies chasing exactly the same prize",
      "zh": "兩家公司幾乎一模一樣,追逐的是完全相同的獎品"
     },
     {
      "en": "One side was far stronger and set out to crush the weaker player",
      "zh": "其中一方遠比另一方強大,刻意輾壓弱者"
     },
     {
      "en": "Regulators forced them into a winner-take-all market",
      "zh": "監管機關迫使他們進入贏者全拿的市場"
     }
    ],
    "answer": 1,
    "explain": {
     "en": "Marx says difference causes conflict, but Thiel argues tech wars are Shakespearean: the two firms sat four blocks apart building the same product for the same users. Likeness, not difference, made the fight vicious — and fighting made them even more alike, until merging was the only sane move.",
     "zh": "馬克思認為差異引發衝突,但 Thiel 主張科技戰是莎士比亞式的:兩家公司相隔四個街區,為同一群用戶做同樣的產品。讓戰況慘烈的是相似而非差異——而且越打越像,最後合併成了唯一理智的出路。"
    }
   },
   {
    "q": {
     "en": "What does the Microsoft–Google rivalry illustrate in this essay?",
     "zh": "在本課中,Microsoft 與 Google 的對抗說明了什麼?"
    },
    "options": [
     {
      "en": "Sustained head-to-head competition sharpens both companies into winners",
      "zh": "持續正面對決會把兩家公司都磨練成贏家"
     },
     {
      "en": "While two rivals converged and fought, Apple avoided the war and became worth more than both combined",
      "zh": "當兩個對手彼此趨同、纏鬥不休時,Apple 避開戰爭,市值超越兩者總和"
     },
     {
      "en": "Search engines are inherently more profitable than operating systems",
      "zh": "搜尋引擎天生比作業系統更賺錢"
     },
     {
      "en": "The first mover in any market eventually wins",
      "zh": "任何市場的先行者終將獲勝"
     }
    ],
    "answer": 1,
    "explain": {
     "en": "After a decade of Bing vs. Search, Chrome vs. Explorer, and Docs vs. Office, Apple's $531B market cap in 2012 topped Microsoft and Google's $456B combined. Thiel's point: fighting is costly, and those who stay out of the war can swoop in and capitalize on the peace.",
     "zh": "經過十年的 Bing 對 Search、Chrome 對 Explorer、Docs 對 Office,2012 年 Apple 的 5,310 億美元市值超過 Microsoft 加 Google 的 4,560 億總和。Thiel 的重點:打仗代價高昂,置身戰場之外的人反而能坐收和平的紅利。"
    }
   },
   {
    "q": {
     "en": "In Hoffman's interview question about splitting $100k between iOS and Android, why is '50-50' the only wrong answer?",
     "zh": "在 Hoffman 的面試題「10 萬美元怎麼分配到 iOS 和 Android」中,為什麼「五五對分」是唯一的錯誤答案?"
    },
    "options": [
     {
      "en": "Because Android clearly deserved the larger share in 2012",
      "zh": "因為 2012 年 Android 顯然值得分到更多"
     },
     {
      "en": "Because iOS developers earned more revenue per user",
      "zh": "因為 iOS 開發者的單一用戶營收更高"
     },
     {
      "en": "Because an even split signals you have no developed view of where technology is heading",
      "zh": "因為平均分配代表你對科技走向沒有形成任何觀點"
     },
     {
      "en": "Because budgets should never be divided across two platforms",
      "zh": "因為預算永遠不該分散到兩個平台上"
     }
    ],
    "answer": 2,
    "explain": {
     "en": "The question isn't about the correct ratio — it tests whether you've formed an insight at all. '50-50' is equivalent to 'I don't know.' Hoffman argues that staying ahead of technological curves requires developing a view, largely by regularly exchanging ideas with smart people.",
     "zh": "這題考的不是正確比例,而是你到底有沒有形成洞見。「五五對分」等於說「我不知道」。Hoffman 認為,要走在科技曲線前面,就必須培養觀點——主要方法是經常與聰明人交流想法。"
    }
   }
  ]
 },
 {
  "slug": "class-13",
  "layout": "lesson",
  "icon": "menu_book",
  "navLabel": "13",
  "classNo": 13,
  "sourceUrl": "https://blakemasters.tumblr.com/post/23435743973/peter-thiels-cs183-startup-class-13-notes-essay",
  "title": {
   "en": "You Are Not A Lottery Ticket",
   "zh": "你不是一張樂透彩券"
  },
  "subtitle": {
   "en": "Success isn't a lottery: treating the future as definite — and planning it — beats drifting on optionality.",
   "zh": "成功不是樂透:把未來當成可規劃的明確目標,勝過靠保留選項隨波逐流。"
  },
  "objectives": [
   {
    "en": "Explain why Thiel treats the 'success is mostly luck' narrative as a bias, and what serial founders suggest instead.",
    "zh": "說明 Thiel 為何把「成功主要靠運氣」視為一種偏見,以及連續創業者的存在暗示了什麼。"
   },
   {
    "en": "Place people, companies, and countries on the 2x2 map of optimism/pessimism crossed with definite/indefinite futures.",
    "zh": "能用樂觀/悲觀 × 明確/不明確的 2x2 框架,定位個人、公司與國家看待未來的方式。"
   },
   {
    "en": "Diagnose the built-in contradiction of indefinite optimism: a better future that nobody concretely plans, saves, or invests for.",
    "zh": "診斷不明確樂觀(indefinite optimism)的內在矛盾:人人期待更好的未來,卻沒有人為它規劃、儲蓄或投資。"
   },
   {
    "en": "Apply definite thinking: design over blind iteration, secret plans over optionality, a career plan over a portfolio resume.",
    "zh": "實際運用明確思維:用設計取代盲目迭代、用祕密計畫取代選擇權、用職涯規劃取代履歷集點。"
   }
  ],
  "sections": [
   {
    "id": "the-question-of-luck",
    "heading": {
     "en": "1. The Question of Luck",
     "zh": "1. 運氣之謎"
    },
    "summary": {
     "en": "Luck vs. skill can't be tested — you can't run Facebook 1,000 times — so which story you believe is itself a choice.",
     "zh": "運氣與實力之爭無法用實驗驗證——你不能把 Facebook 重跑一千次——所以你相信哪種說法,本身就是一種選擇。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Every big success invites two stories: an internal one about talent and hard work, and an external one about being in the right place at the right time. Since each company happens exactly once, statistics can never settle the debate. Thiel's claim is that the culture has swung far too hard toward the luck story — and that the swing itself is historically recent.",
       "zh": "每一個巨大的成功都有兩種說法:向內歸因於天分與努力,或向外歸因於天時地利。因為每家公司都只會發生一次,統計學永遠無法裁決這場爭論。Thiel 的主張是:當代文化已經過度倒向「運氣說」——而且這種傾斜本身是晚近才發生的。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Serial founders are the strongest counter-evidence: Steve Jobs (Apple, NeXT, Pixar), Jack Dorsey (Twitter, Square), and Elon Musk (PayPal, SpaceX, Tesla) each built multiple billion-dollar companies — hard to dismiss as repeated coin flips.",
        "From Jefferson's era through the 1950s, luck was something to be mastered; only recently did the Malcolm Gladwell view — success as a product of context — become the cultural default.",
        "The prevailing startup ethos (Paul Graham, the book 'Accidental Empires') treats a founder who credits his own skill as arrogant, which quietly discounts skill everywhere.",
        "Thiel's reframe: stop litigating past luck — the birth lotteries you can't change — and ask instead whether the future is something you can control."
       ],
       "zh": [
        "連續創業者是最有力的反證:Steve Jobs(Apple、NeXT、Pixar)、Jack Dorsey(Twitter、Square)、Elon Musk(PayPal、SpaceX、Tesla)各自打造了多家十億美元等級的公司——很難用連續擲硬幣都擲中來解釋。",
        "從 Jefferson 的年代到 1950 年代,運氣被視為可以駕馭的東西;直到晚近,Malcolm Gladwell 式的「成功來自環境脈絡」才成為文化預設。",
        "主流創業文化(Paul Graham、《Accidental Empires》一書)把將成功歸功於自身實力的創辦人視為傲慢,等於在各個角落悄悄貶低實力的作用。",
        "Thiel 的轉向:別再爭辯過去的運氣——那些你無法改變的出生樂透——改問未來是不是你能掌控的東西。"
       ]
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "I'm a great believer in luck, and I find the harder I work the more I have of it. — Thomas Jefferson",
       "zh": "我非常相信運氣,而且我發現,我工作得越努力,運氣就越多。——Thomas Jefferson"
      }
     }
    ]
   },
   {
    "id": "four-views-of-the-future",
    "heading": {
     "en": "2. Four Views of the Future",
     "zh": "2. 看待未來的四種方式"
    },
    "summary": {
     "en": "Cross optimism/pessimism with whether the future is knowable, and you get four worldviews — America drifted from definite to indefinite optimism.",
     "zh": "把樂觀/悲觀與未來是否可知交叉,得到四種世界觀——美國從明確樂觀漂移到了不明確樂觀。"
    },
    "blocks": [
     {
      "type": "table",
      "head": {
       "en": [
        "Quadrant",
        "Who lives there",
        "Signature strategy"
       ],
       "zh": [
        "象限",
        "代表",
        "典型策略"
       ]
      },
      "rows": [
       {
        "en": [
         "Definite optimism",
         "U.S. before the 1960s",
         "Firm convictions and grand projects: land grants, railroads, the space program"
        ],
        "zh": [
         "明確樂觀 (definite optimism)",
         "1960 年代以前的美國",
         "堅定信念與宏大工程:土地放領、鐵路、太空計畫"
        ]
       },
       {
        "en": [
         "Indefinite optimism",
         "U.S. from 1982 to 2007",
         "Diversify, keep options open, build a resume instead of a plan"
        ],
        "zh": [
         "不明確樂觀 (indefinite optimism)",
         "1982–2007 年的美國",
         "分散風險、保留選項,用履歷取代計畫"
        ]
       },
       {
        "en": [
         "Definite pessimism",
         "China today",
         "Copy what already works and save hard (~40% savings rate) — it may get old before it gets rich"
        ],
        "zh": [
         "明確悲觀 (definite pessimism)",
         "今日中國",
         "照抄已被驗證的模式並拚命儲蓄(儲蓄率約 40%),因為可能「未富先老」"
        ]
       },
       {
        "en": [
         "Indefinite pessimism",
         "Europe today; Japan since the 1990s",
         "No plan and no hope — drift"
        ],
        "zh": [
         "不明確悲觀 (indefinite pessimism)",
         "今日歐洲、1990 年代後的日本",
         "沒有計畫也沒有盼望——隨波逐流"
        ]
       }
      ]
     },
     {
      "type": "p",
      "text": {
       "en": "The tell is in the money. Indefinite optimism should be impossible: a better future you cannot describe is one you neither save for (U.S. savings around 4%, negative once government deficits count) nor invest in (corporations sit on roughly a trillion dollars of cash with nothing definite to do with it). A worldview that expects progress while nobody works toward anything specific is living on borrowed time.",
       "zh": "破綻藏在錢的流向裡。不明確樂觀照理說不該成立:一個你描述不出來的美好未來,你既不會為它儲蓄(美國儲蓄率約 4%,計入政府赤字後為負),也不會為它投資(企業坐擁約一兆美元現金,卻沒有明確的用途)。一種期待進步、卻沒有人朝任何具體目標努力的世界觀,是在借來的時間上過活。"
      }
     },
     {
      "type": "h3",
      "text": {
       "en": "The end of big plans",
       "zh": "宏大計畫的終結"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Robert Moses held a dozen posts at once and rebuilt New York; after the 1965 Greenwich Village protests, the era of major new construction there ended.",
        "The 1940s Reber Plan — a schoolteacher's scheme to dam and re-engineer San Francisco Bay — earned congressional hearings; today it would be laughed off, its author disqualified for lacking credentials.",
        "Schools mirror the shift: calculus, which computes one definite trajectory, is giving way to statistics — bell curves and random walks."
       ],
       "zh": [
        "Robert Moses 曾同時身兼十多個公職,重建了整個紐約;1965 年格林威治村的抗爭之後,那個大興土木的時代就此結束。",
        "1940 年代的 Reber Plan——一位中學教師提出築壩改造舊金山灣的方案——當年能開到國會聽證;放到今天只會被當成笑話,提案人還會因為「沒有資歷」直接出局。",
        "學校教育也反映了這個轉變:計算一條明確軌跡的微積分,正讓位給統計學——鐘形曲線與隨機漫步。"
       ]
      }
     }
    ]
   },
   {
    "id": "our-indefinite-world",
    "heading": {
     "en": "3. Our Indefinite World",
     "zh": "3. 我們身處的不明確世界"
    },
    "summary": {
     "en": "Once you name it, indefinite thinking shows up everywhere — in finance, politics, philosophy, science fiction, even how we face death and physics.",
     "zh": "一旦點破,不明確思維無所不在——金融、政治、哲學、科幻,甚至我們面對死亡與物理學的方式。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Finance is peak indefiniteness: markets are modeled as random walks, so the only permitted knowledge is that nothing can be known. Money loops from founders to banks to institutional investors to stocks and back into companies, and at every stop nobody knows what to do with it. That is exactly why cash — pure optionality — is prized, even with government bonds yielding less than inflation. Venture capital, which should be the opposite of statistical thinking, instead asks how to access deals rather than what should get built.",
       "zh": "金融是不明確思維的極致:市場被建模成隨機漫步,於是唯一被允許的「知識」就是一切不可知。錢從創辦人流向銀行、機構投資人、股票,再流回企業,每一站都沒有人知道該拿錢做什麼。這正是現金——純粹的選擇權——備受追捧的原因,即使公債殖利率已低於通膨。而本該與統計思維背道而馳的創投,問的卻是「怎麼擠進好案子」,而不是「該打造什麼」。"
      }
     },
     {
      "type": "cards",
      "items": [
       {
        "title": {
         "en": "Politics",
         "zh": "政治"
        },
        "body": {
         "en": "Pollsters beat visionaries: campaigns react to numbers instead of designing the future — McCain reportedly picked Sarah Palin largely off approval ratings — and government shifted from running projects like Apollo to simply transferring money.",
         "zh": "民調專家壓過了有遠見的人:選戰跟著數字走而不是設計未來——據說 McCain 挑選 Sarah Palin 主要看的是支持率——政府也從執行阿波羅那樣的具體工程,退化成單純的資金移轉。"
        }
       },
       {
        "title": {
         "en": "Philosophy",
         "zh": "哲學"
        },
        "body": {
         "en": "Marx and Hegel plotted definite better futures; today's favorites, Rawls and Nozick, are indefinite optimists; Epicurus and Lucretius — random atoms, calm acceptance — mark where the drift ends.",
         "zh": "Marx 與 Hegel 規劃明確的美好未來;當代最受歡迎的 Rawls 與 Nozick 屬於不明確樂觀派;而 Epicurus 與 Lucretius——原子隨機碰撞、平靜接受——則是這場漂流的終點站。"
        }
       },
       {
        "title": {
         "en": "Science fiction",
         "zh": "科幻"
        },
        "body": {
         "en": "From Clarke's 2001: A Space Odyssey (1968), a confidently mapped tomorrow, to Gibson's Neuromancer (1984), where even the sky reads as dead-channel static — the imagined future dissolved into noise in sixteen years.",
         "zh": "從 Clarke 的《2001 太空漫遊》(1968)那個被自信描繪的明天,到 Gibson 的《Neuromancer》(1984)裡連天空都像收播後的雜訊——短短十六年,想像中的未來就溶解成雜音。"
        }
       },
       {
        "title": {
         "en": "Death",
         "zh": "死亡"
        },
        "body": {
         "en": "We meet mortality with actuarial tables instead of ambition. Between 1600 and 1850 people hunted for a fountain of youth; probabilistic thinking now convinces us not even to try — belief in luck stops people from acting.",
         "zh": "我們用精算表而不是野心面對死亡。1600 到 1850 年間,人們還在尋找青春之泉;如今機率思維說服我們連試都不必試——相信運氣,會讓人放棄行動。"
        }
       },
       {
        "title": {
         "en": "Physics",
         "zh": "物理"
        },
        "body": {
         "en": "Belief in the many-worlds interpretation grew from roughly 10-15% of physicists in the 1970s to over half today, with no deciding experiment in between — the culture turned indefinite, not the evidence.",
         "zh": "相信多世界詮釋(many-worlds interpretation)的物理學家,從 1970 年代的約 10–15% 成長到今天的過半,期間並沒有任何決定性實驗——轉向的是文化,不是證據。"
        }
       }
      ]
     }
    ]
   },
   {
    "id": "can-indefinite-optimism-work",
    "heading": {
     "en": "4. Can Indefinite Optimism Work?",
     "zh": "4. 不明確的樂觀行得通嗎?"
    },
    "summary": {
     "en": "Progress without a plan is Darwinian evolution — it can work, but it takes eons and often iterates into sprawl rather than greatness.",
     "zh": "沒有計畫的進步就是達爾文式演化——可行,但需要億萬年,而且往往迭代出蔓延失序,而不是偉大。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "The only honest model of progress without planning is evolution: local iteration really did produce the tree of life, but it took billions of years and left plenty of appendixes behind. Companies and countries do not have that kind of time.",
       "zh": "不靠規劃也能進步的唯一誠實模型是演化:局部迭代確實長出了生命之樹,但那花了數十億年,還留下一堆盲腸。公司與國家沒有這種時間。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Los Angeles, built almost from scratch, iterated into endless sprawl instead of becoming the world's greatest city — the market never fixed it.",
        "Sao Paulo's airport sits five miles from downtown: ten minutes by helicopter, up to three hours by car. Mumbai and Lagos tell similar stories of unplanned growth.",
        "In the climate debate, both loud camps are indefinite — markets will iterate us out versus it is already too late — while definite fixes like geoengineering barely enter the conversation."
       ],
       "zh": [
        "幾乎從零建起的洛杉磯,迭代成了無止境的市郊蔓延,而不是世界最偉大的城市——市場從未修好它。",
        "聖保羅的機場離市中心只有五英里:搭直升機十分鐘,開車卻可能要三小時。孟買與拉哥斯(Lagos)是類似的失控成長故事。",
        "氣候辯論裡,兩大陣營都是不明確派——「市場會自動迭代出解方」對上「一切已經太遲」——而像地球工程(geoengineering)這樣的明確解法幾乎進不了對話。"
       ]
      }
     },
     {
      "type": "p",
      "text": {
       "en": "The same suspicion lands on startup orthodoxy. A/B tests, lean iteration, machine learning, and short time horizons are not self-evidently correct methods; they may be the costume indefinite thinking wears in tech, where iteration becomes a respectable excuse for having no idea where you are going.",
       "zh": "同樣的懷疑也適用於創業圈的正統教條。A/B 測試、精實迭代、機器學習、短視的時間軸,並不是不證自明的正確方法;它們可能只是不明確思維在科技業穿上的戲服——迭代成了「不知道要去哪裡」的體面藉口。"
      }
     }
    ]
   },
   {
    "id": "the-return-of-design",
    "heading": {
     "en": "5. The Return of Design",
     "zh": "5. 設計的回歸"
    },
    "summary": {
     "en": "Apple and the design-led startups are the countercurrent: in an indefinite world, a definite multi-year plan is the most undervalued asset there is.",
     "zh": "Apple 與設計導向的新創是逆流:在不明確的世界裡,一份明確的多年計畫是最被低估的資產。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Apple is the anti-finance company: deliberate design at every layer — product, strategy, rollout — executed against multi-year plans. Institutional investors, trained not to think about the future, systematically underweighted the stock from six dollars onward, while retail buyers who sensed the plan did better. The design wave of Airbnb, Pinterest, Dropbox, and Path makes the same point: deeply understanding users can reach the answer faster than Darwinian A/B testing.",
       "zh": "Apple 是金融的反面:從產品、策略到上市節奏,每一層都是刻意設計,並依照多年計畫按部就班執行。被訓練成不思考未來的機構投資人,從股價 6 美元起就一路低配這檔股票,反而是隱約感覺到那份計畫的散戶表現更好。Airbnb、Pinterest、Dropbox、Path 掀起的設計浪潮說明同一件事:深刻理解使用者,可以比達爾文式的 A/B 測試更快找到答案。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "In an indefinite world, investors will value secret plans at zero.",
       "zh": "在不明確的世界裡,投資人會把祕密計畫的價值估為零。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "That mispricing cuts both ways: companies with real plans rarely sell — PayPal sold in 2002 only after it had run out of new ideas — so the ability to execute a long-term secret plan is an enormous edge. The personal lesson is identical: do not iterate your resume one line at a time; walk in planning to make partner from day one, and revise the plan rather than drift. Computer science, the most deterministic of fields, is the natural home for rebuilding definite optimism.",
       "zh": "這種錯價是雙向的:真正有計畫的公司很少出售——PayPal 在 2002 年賣掉,是因為當時已經想不出新點子——所以能長期執行祕密計畫本身就是巨大優勢。對個人的啟示完全相同:別一行一行地迭代履歷;第一天進場就以成為合夥人為目標,計畫可以修改,但不要漂流。而最具決定論色彩的電腦科學,正是重建明確樂觀的天然基地。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "The best edit is often a complete re-write. And maybe it's time to start writing lots of things from scratch.",
       "zh": "最好的編輯往往是整篇重寫。也許,是時候把許多東西從頭寫起了。"
      }
     }
    ]
   }
  ],
  "factcheck": [
   {
    "claim": {
     "en": "The essay filed China under definite pessimism: saving around 40% of income, enforcing the one-child policy, and expecting to get old before it gets rich.",
     "zh": "本文把中國歸入明確悲觀:儲蓄率約四成、實施一胎化政策,並預期「未富先老」。"
    },
    "now": {
     "en": "The diagnosis largely held: China ended the one-child policy in 2016 (three children allowed from 2021), yet births kept falling, the population began shrinking in 2022, and India overtook China as the world's most populous country.",
     "zh": "這個判斷大致應驗:中國 2016 年終止一胎化(2021 年開放三孩),但出生數持續下滑,人口自 2022 年起負成長,印度已超越中國成為世界人口最多的國家。"
    },
    "sourceTitle": "Britannica: One-child policy",
    "sourceUrl": "https://www.britannica.com/topic/one-child-policy"
   },
   {
    "claim": {
     "en": "The essay held up Airbnb, Pinterest, Dropbox, and Path as the design-led startups pushing back against indefinite iteration.",
     "zh": "本文將 Airbnb、Pinterest、Dropbox、Path 列為對抗不明確迭代的設計導向新創代表。"
    },
    "now": {
     "en": "Three of the four became public companies — Dropbox (2018), Pinterest (2019), and Airbnb (2020, at a roughly $47 billion IPO valuation) — while Path, once a Facebook challenger, shut down in October 2018.",
     "zh": "四家中有三家後來上市——Dropbox(2018)、Pinterest(2019)、Airbnb(2020 年以約 470 億美元估值 IPO)——曾挑戰 Facebook 的 Path 則於 2018 年 10 月關閉。"
    },
    "sourceTitle": "TechCrunch: Path is closing down",
    "sourceUrl": "https://techcrunch.com/?p=1713709"
   }
  ],
  "quiz": [
   {
    "q": {
     "en": "What does Thiel offer as the strongest evidence that startup success is not mostly luck?",
     "zh": "Thiel 用什麼作為「創業成功並非主要靠運氣」的最有力證據?"
    },
    "options": [
     {
      "en": "Large statistical studies comparing thousands of startups",
      "zh": "比較數千家新創的大型統計研究"
     },
     {
      "en": "Serial founders — Jobs, Dorsey, Musk — who each built multiple billion-dollar companies",
      "zh": "連續創業者——Jobs、Dorsey、Musk——各自打造多家十億美元等級的公司"
     },
     {
      "en": "The consistently high hit rate of top venture capital funds",
      "zh": "頂尖創投基金始終如一的高命中率"
     },
     {
      "en": "Founders' own testimony that they worked harder than everyone else",
      "zh": "創辦人自述比所有人都更努力"
     }
    ],
    "answer": 1,
    "explain": {
     "en": "Because each company happens only once, statistics can never settle the question. Repeated success by the same people across different companies is the pattern chance struggles hardest to explain.",
     "zh": "因為每家公司只會發生一次,統計永遠無法回答這個問題。同一批人在不同公司反覆成功,才是運氣最難解釋的模式。"
    }
   },
   {
    "q": {
     "en": "According to the essay, what is the built-in contradiction of indefinite optimism?",
     "zh": "根據本文,不明確樂觀的內在矛盾是什麼?"
    },
    "options": [
     {
      "en": "It expects a better future while nobody plans, saves, or invests to create it",
      "zh": "它期待更好的未來,卻沒有人為此規劃、儲蓄或投資"
     },
     {
      "en": "It requires a savings rate as high as China's",
      "zh": "它需要像中國一樣高的儲蓄率"
     },
     {
      "en": "It only works in countries with strong central governments",
      "zh": "它只在中央政府強勢的國家行得通"
     },
     {
      "en": "It is too obsessed with engineering mega-projects",
      "zh": "它過度沉迷於巨型工程"
     }
    ],
    "answer": 0,
    "explain": {
     "en": "Progress needs someone to make it happen. A future that is better but unknowable leaves money circulating through the system with no one willing to commit it — low savings plus low investment is the visible symptom.",
     "zh": "進步需要有人動手實現。一個更好卻不可知的未來,只會讓錢在體系裡空轉、沒有人願意投入——低儲蓄加上低投資就是可見的症狀。"
    }
   },
   {
    "q": {
     "en": "In an indefinite world, how are companies with genuine secret plans priced — and what follows from that?",
     "zh": "在不明確的世界裡,握有真正祕密計畫的公司會被如何定價?這又意味著什麼?"
    },
    "options": [
     {
      "en": "At a premium, because scarce plans attract capital",
      "zh": "溢價,因為稀缺的計畫會吸引資本"
     },
     {
      "en": "Fairly, because markets are efficient",
      "zh": "合理定價,因為市場是有效率的"
     },
     {
      "en": "At zero, so truly definite companies are systematically undervalued",
      "zh": "估為零,所以真正明確的公司會被系統性低估"
     },
     {
      "en": "They cannot be priced at all and get shut out of markets",
      "zh": "完全無法定價,因此被市場拒於門外"
     }
    ],
    "answer": 2,
    "explain": {
     "en": "Investors trained on randomness cannot credit what their models exclude — Thiel's example is institutions underweighting Apple for years — so the ability to execute a long-term secret plan becomes an enormous competitive edge.",
     "zh": "習慣隨機性的投資人無法為模型之外的東西給分——Thiel 舉的例子是機構投資人長年低配 Apple——因此能長期執行祕密計畫,本身就是巨大的競爭優勢。"
    }
   }
  ]
 },
 {
  "slug": "class-14",
  "layout": "lesson",
  "icon": "menu_book",
  "navLabel": "14",
  "classNo": 14,
  "sourceUrl": "https://blakemasters.tumblr.com/post/23787022006/peter-thiels-cs183-startup-class-14-notes-essay",
  "title": {
   "en": "Seeing Green",
   "zh": "看見綠色商機"
  },
  "subtitle": {
   "en": "Cleantech 1.0 flunked the ten tests every startup must pass; energy progress demands determinate optimism — maybe thorium.",
   "zh": "清潔技術(cleantech)1.0 幾乎沒通過新創必考的十道題;能源要進步,需要明確的樂觀——答案也許是釷(thorium)。"
  },
  "objectives": [
   {
    "en": "Place any energy technology or policy in Thiel's determinate/indeterminate x optimistic/pessimistic matrix and see the worldview behind it.",
    "zh": "能把任何能源技術或政策放進 Thiel 的「明確/不明確 × 樂觀/悲觀」矩陣,看出它背後的世界觀。"
   },
   {
    "en": "Explain, using the ten-factor checklist, why the 2000s cleantech bubble produced almost nothing but failures.",
    "zh": "能用十項檢核清單解釋,為什麼 2000 年代的清潔技術泡沫幾乎全軍覆沒。"
   },
   {
    "en": "Apply power-law thinking to energy history: why one source tends to dominate each era, and what that means for portfolio-style strategies.",
    "zh": "能把冪次法則(power law)套用在能源史上:為什麼每個時代多半由單一能源主宰,以及這對「投資組合式」思維的意涵。"
   },
   {
    "en": "Evaluate a secret energy bet like thorium, including how dependence on government money changes a company's risk.",
    "zh": "能評估像釷這樣「藏在眾目睽睽下的祕密」,並判斷依賴政府資金會如何改變一家公司的風險。"
   }
  ],
  "sections": [
   {
    "id": "how-to-think-about-energy",
    "heading": {
     "en": "1. How to Think About Energy",
     "zh": "1. 如何思考能源"
    },
    "summary": {
     "en": "Energy debates map onto the determinate/indeterminate x optimistic/pessimistic matrix — and the determinate-optimist square is nearly empty today.",
     "zh": "能源議題可以放進「明確/不明確 × 樂觀/悲觀」矩陣,而今天「明確樂觀」那一格幾乎空無一人。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Thiel opens by reprising his four-quadrant framework: you can be optimistic or pessimistic about the future, and you can hold definite views or vague ones. A concrete plan beats an aspiration — 'I intend to get rich and famous' is a wish, not a strategy — and portfolio- or process-driven thinking is what people substitute when they have no specific picture of what comes next.",
       "zh": "Thiel 開場重提他的四象限架構:你可以對未來樂觀或悲觀,也可以抱持明確或模糊的看法。具體的計畫勝過空泛的抱負——「我想要名利雙收」是願望,不是策略;而組合式、流程式的思維,正是人們對未來沒有具體想像時的替代品。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "Winning without a plan is hitting the jackpot, and most people do not hit the jackpot.",
       "zh": "沒有計畫就獲勝,等於中了頭獎;而大多數人不會中頭獎。"
      }
     },
     {
      "type": "table",
      "head": {
       "en": [
        "Quadrant",
        "Energy worldview",
        "Who lives here"
       ],
       "zh": [
        "象限",
        "能源世界觀",
        "誰在這裡"
       ]
      },
      "rows": [
       {
        "en": [
         "Determinate optimist",
         "One energy source is best — figure out which and build it",
         "1950s America: nuclear power 'too cheap to meter'"
        ],
        "zh": [
         "明確樂觀",
         "有一種能源最好——找出它、把它做出來",
         "1950 年代的美國:核電「便宜到不必計費」"
        ]
       },
       {
        "en": [
         "Indeterminate optimist",
         "Something better exists but nobody knows what — fund a portfolio",
         "Today's U.S.: subsidize (or deregulate) a bit of everything"
        ],
        "zh": [
         "不明確樂觀",
         "更好的能源存在,但沒人知道是哪個——投一整個組合",
         "今日美國:對各種選項都補貼(或鬆綁)一點"
        ]
       },
       {
        "en": [
         "Determinate pessimist",
         "Nothing much better is coming — lock up what exists",
         "China: buying African oilfields, mining coal at deadly cost"
        ],
        "zh": [
         "明確悲觀",
         "不會有更好的了——先把現有資源鎖起來",
         "中國:收購非洲油田、以每年數千礦工喪生的代價採煤"
        ]
       },
       {
        "en": [
         "Indeterminate pessimist",
         "Alternatives will be worse and pricier — hedge and economize",
         "Europe and Japan: bikes, small cars, long train commutes"
        ],
        "zh": [
         "不明確悲觀",
         "替代能源只會更差更貴——避險、省著用",
         "歐洲與日本:腳踏車、小車、長程通勤電車"
        ]
       }
      ]
     },
     {
      "type": "p",
      "text": {
       "en": "The contrast with mid-century America is stark. Eisenhower's 1953 'Atoms for Peace' speech promised energy too cheap to meter, and people expected supersonic travel next. Today determinate optimism about energy is essentially dead: both U.S. parties push indeterminate portfolios, while China locks up resources and Europe economizes.",
       "zh": "和二十世紀中期的美國對比十分強烈。艾森豪 1953 年的「原子能為和平服務」(Atoms for Peace)演說,承諾能源將「便宜到不必計費」,人們還在期待超音速旅行。今天對能源的明確樂觀幾乎已死:美國兩黨推的都是不明確的組合,中國忙著鎖定資源,歐洲則選擇省著用。"
      }
     }
    ]
   },
   {
    "id": "brief-history-of-energy",
    "heading": {
     "en": "2. A Brief History of Energy",
     "zh": "2. 能源簡史"
    },
    "summary": {
     "en": "Energy history follows a power law — one dominant source per era — while demand math and peak oil point to a real coming squeeze.",
     "zh": "能源史遵循冪次法則——每個時代由單一能源主宰;而需求數學與石油峰值(peak oil)都指向一場真實的短缺壓力。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "History shows a power law: at any moment one energy source dominates. Wood ruled the 19th century, coal the early 20th, oil from the 1930s and 40s onward, with natural gas lately displacing coal as number two. It would be a strange coincidence if several radically different technologies happened to be almost exactly equal in cost and effectiveness — yet that is precisely what portfolio thinking about energy assumes.",
       "zh": "歷史呈現冪次法則:任一時期幾乎都由單一能源主宰。19 世紀是木材,20 世紀初是煤,1930、40 年代之後是石油,近年天然氣則取代煤成為第二名。如果幾種本質完全不同的技術恰好在成本與效益上勢均力敵,那會是非常詭異的巧合——但能源的「投資組合」思維假設的正是這件事。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "China has overtaken the U.S. in total energy consumption, and its GDP and energy use have grown in lockstep at roughly 8% a year.",
        "The world burns about 85 million barrels of oil per day; the U.S. accounts for roughly 18 million of them.",
        "If China consumed per capita like America, it alone would need about 72 million barrels a day — close to all current world production.",
        "Oil demand is brutally inelastic: a 10% jump in demand can drive something like a 100% jump in price."
       ],
       "zh": [
        "中國的總能源消耗已超越美國,且過去十年 GDP 與能源使用以每年約 8% 的速度同步成長。",
        "全球每天燒掉約 8,500 萬桶石油,其中美國約占 1,800 萬桶。",
        "若中國人均耗油量達到美國水準,光是中國就需要每天約 7,200 萬桶——幾乎等於目前全球總產量。",
        "石油需求極度缺乏彈性:需求增加 10%,價格可能暴漲 100%。"
       ]
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Peak oil is the sharpest version of the squeeze. In 1956 Shell geologist M. King Hubbert noticed that discoveries lead production by 20 to 30 years and predicted U.S. output would peak in the mid-1970s; he was dismissed, then proven right, and pricing power passed from the Texas Railroad Commission to OPEC. Thiel reads 2008 partly as an energy crisis — with oil at $140 a barrel, the only way to contain the price was to destroy economic activity — and he reminds the class that energy runs through two millennia of war, from West Virginia's coal in the Civil War to Churchill taking over Persian oil before WWI.",
       "zh": "石油峰值是這場擠壓最尖銳的版本。1956 年,殼牌(Shell)地質學家 M. King Hubbert 發現油田的發現量領先產量 20 到 30 年,據此預測美國產量將在 1970 年代中期見頂;當時沒人理他,後來證明他是對的,油價主導權也從德州鐵路委員會轉移到 OPEC 手上。Thiel 把 2008 年的危機部分解讀為能源危機——油價衝上每桶 140 美元時,唯一能壓下價格的方法就是摧毀經濟活動。他也提醒學生:能源貫穿了兩千年的戰爭史,從南北戰爭中西維吉尼亞的煤,到一戰前邱吉爾接管波斯石油。"
      }
     }
    ]
   },
   {
    "id": "why-cleantech-failed",
    "heading": {
     "en": "3. Why Cleantech 1.0 Failed",
     "zh": "3. 清潔技術 1.0 為何失敗"
    },
    "summary": {
     "en": "More money went into cleantech than the Internet in the 2000s, yet most companies failed nearly every test on the startup checklist.",
     "zh": "2000 年代投入清潔技術的錢一度超過網路業,但多數公司幾乎沒通過新創檢核清單上的任何一關。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Cleantech investment surged past Internet investment during the 2000s, powered by a muddle: is the problem that carbon is wrecking the climate, or that oil is running out? The two diagnoses imply different cures — subsidize alternatives versus ration fossil fuels — and few people bothered to separate them. Against this backdrop Thiel lists ten things a startup must get right. Most cleantech companies got zero or one.",
       "zh": "2000 年代流入清潔技術的創投資金一度超過網路業,背後卻是一團混亂:問題到底是碳排放正在毀壞氣候,還是石油即將耗盡?兩種診斷指向不同的處方——前者要補貼替代能源,後者要對化石燃料限量——但很少人認真區分。在這個背景下,Thiel 列出新創必須做對的十件事;多數清潔技術公司只做對了零到一件。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "8 out of 10 is sort of a B-, and 5 of 10 earns you an F.",
       "zh": "做對 8 件大概是 B-;只做對 5 件,就是不及格。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Markets — pick one you can actually dominate",
        "Competition and mimesis — don't do what's fashionable",
        "Secrets — know something others don't",
        "Escape incrementalism — deliver a real step change",
        "Durability — still winning 20 to 30 years out",
        "Teams — engineers and builders, not just salesmen",
        "Distribution — a concrete way to deliver the product",
        "Timing — catch the wave, not the mirage",
        "Financing — need neither too little nor too much",
        "Luck — whatever remains after mastering the rest"
       ],
       "zh": [
        "市場——挑一個你真的能主宰的市場",
        "競爭與模仿(mimesis)——別做正在流行的事",
        "祕密——知道別人不知道的事",
        "擺脫漸進主義——做出真正的跳躍式進步",
        "耐久性——20 到 30 年後仍是贏家",
        "團隊——要工程師與實作者,不能只有業務員",
        "通路(distribution)——有具體的交付方式",
        "時機——追的是浪,不是海市蜃樓",
        "融資——需要的錢不能太少也不能太多",
        "運氣——把其他九項都掌握之後剩下的部分"
       ]
      }
     },
     {
      "type": "cards",
      "items": [
       {
        "title": {
         "en": "Market framing",
         "zh": "市場框架"
        },
        "body": {
         "en": "Solyndra shipped over 1,000 systems totaling 100+ MW — 10.5% of the small U.S. solar market, under 1% of global solar, and a dot in the 15,000 GW world power market. Founders shrink the market to look dominant or inflate it to a trillion dollars; either way they fool themselves.",
         "zh": "Solyndra 出貨超過 1,000 套系統、總計逾 100 MW——占小小的美國太陽能市場 10.5%,但不到全球太陽能市場的 1%,放進 15,000 GW 的全球發電市場更只是滄海一粟。創辦人不是把市場縮小好顯得自己獨大,就是把市場吹成上兆美元;兩種說法都是自欺。"
        }
       },
       {
        "title": {
         "en": "Fashion instead of secrets",
         "zh": "趕流行,而非靠祕密"
        },
        "body": {
         "en": "Solar was culturally fashionable, so crowds of near-identical startups fought over scraps. Thiel's verdict on 'doing well by doing good': serving two masters at once usually means serving neither.",
         "zh": "太陽能在文化上正流行,於是一大群幾乎一模一樣的新創為了殘羹剩飯廝殺。Thiel 對「行善兼賺錢」(doing well by doing good)的評語是:同時侍奉兩個主人,通常兩邊都落空。"
        }
       },
       {
        "title": {
         "en": "Increments, not breakthroughs",
         "zh": "漸進,而非突破"
        },
        "body": {
         "en": "Solar, wind, and battery costs all fell only gradually — no step function anywhere. A venture that takes 10 to 15 years to build needs a big secret to escape competition, and cleantech had none.",
         "zh": "太陽能、風電與電池的成本都只是緩步下降——看不到任何跳躍式的進展。一個要花 10 到 15 年才能建成的事業,需要夠大的祕密來擺脫競爭,而清潔技術沒有。"
        }
       },
       {
        "title": {
         "en": "Salesmen in charge",
         "zh": "業務員當家"
        },
        "body": {
         "en": "Cleantech founders wore suits and ties while tech founders wore t-shirts — a tell. Sales-led leadership signals a product that needs heavy persuasion because it cannot speak for itself.",
         "zh": "清潔技術的創辦人穿西裝打領帶,科技圈創辦人穿 T 恤——這是一個訊號。由業務主導的公司,代表產品得靠強力推銷,因為它自己說不了話。"
        }
       },
       {
        "title": {
         "en": "Distribution as afterthought",
         "zh": "把通路當事後補課"
        },
        "body": {
         "en": "A superb solar farm in the desert is worthless without transmission lines to the city. Even Obama's budget office knew permits for new power lines would take years — stimulus money deliberately skipped unconnectable projects.",
         "zh": "沙漠裡再出色的太陽能電廠,沒有輸電線接到城市就一文不值。連歐巴馬的預算辦公室都明白,新輸電線的許可要跑好幾年——振興方案因此刻意避開那些接不上電網的計畫。"
        }
       },
       {
        "title": {
         "en": "Timing and financing",
         "zh": "時機與融資"
        },
        "body": {
         "en": "The cleantech wave was forever four to five years away, and capital needs were extreme: Solyndra absorbed $1.65 billion in late-stage money. Thiel's heuristic: be wary of any company that needs less than $1 million or more than $1 billion.",
         "zh": "清潔技術的大浪永遠在「四、五年後」,資本需求卻極端龐大:Solyndra 光後期融資就吞了 16.5 億美元。Thiel 的經驗法則:凡是只需要不到 100 萬美元、或需要超過 10 億美元的公司,都要提高警覺。"
        }
       }
      ]
     }
    ]
   },
   {
    "id": "solyndra-postmortem",
    "heading": {
     "en": "4. The Post-mortem: Ask the Engineering Question",
     "zh": "4. 事後檢討:要問工程問題"
    },
    "summary": {
     "en": "After Solyndra, both parties argued about process; neither asked whether the technology worked — the signature of an indeterminate culture.",
     "zh": "Solyndra 倒閉後,兩黨吵的是程序;沒有人問技術到底行不行——這正是「不明確」文化的標誌。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "When Solyndra collapsed, Republicans hunted for scandal and Democrats defended the integrity of the loan process. Nobody asked the substantive question: did the technology actually work? That is the tell of an indeterminate culture — it asks legal and financial process questions where a determinate culture would ask engineering questions. A determinate president could have named the two or three technologies the country would seriously pursue; since that was politically impossible, the administration was left defending process, a fight it could not win.",
       "zh": "Solyndra 倒閉後,共和黨忙著找弊案,民主黨忙著辯護貸款程序的正當性,卻沒有人問那個實質問題:這項技術到底行不行?這正是「不明確」文化的標誌——它問的是法律與財務的程序問題,而「明確」文化會問工程問題。一位明確派的總統大可直接點名國家要認真押注的兩、三項技術;但這在政治上不可行,於是政府只能困在為程序辯護的必輸戰場。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Inspiration versus incrementalism — cleantech executed increments competently, but conventional increments carry no secret",
        "Complex coordination — fitting a technology into the grid, regulation, and society was treated as somebody else's job, i.e. left to luck",
        "Breakthrough technology — for the most part, nobody even tried"
       ],
       "zh": [
        "靈感 vs. 漸進——清潔技術把漸進改良做得不錯,但照常規走的漸進沒有任何祕密",
        "複雜協調(complex coordination)——把技術嵌進電網、法規與社會,被當成別人的工作,等於全交給運氣",
        "突破性技術——大多數人根本連試都沒試"
       ]
      }
     },
     {
      "type": "p",
      "text": {
       "en": "The Internet comparison is blunt: a web startup can succeed almost without talking to anyone, but energy is the opposite — a coordination-heavy business where the grid, regulators, utilities, and customers all have to move together.",
       "zh": "和網路業相比更是殘酷:網路新創幾乎可以不用跟任何人打交道就成功;能源恰恰相反——它是高度依賴協調的產業,電網、監管機關、電力公司與客戶必須一起動起來。"
      }
     }
    ]
   },
   {
    "id": "energy-futures-thorium",
    "heading": {
     "en": "5. Energy Futures: Software and the Thorium Secret",
     "zh": "5. 能源的未來:軟體與釷的祕密"
    },
    "summary": {
     "en": "Software is honorary cleantech, but conservation cannot outrun global growth; the real neglected breakthrough may be thorium power.",
     "zh": "軟體算是榮譽版清潔技術,但節能追不上全球成長;真正被忽略的突破也許是釷(thorium)發電。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "In one sense the best cleantech companies have been Internet companies: eBay is a giant recycling operation, Amazon reduces sprawl, and smart thermostats, demand-shifting software, and eventually self-driving cars squeeze real waste out of the system. But conservation alone cannot win — American savings get canceled as the developing world catches up; when every household in Uttar Pradesh gets a refrigerator, our smaller fridges wash out. So the old question returns: can energy actually become too cheap to meter?",
       "zh": "某種意義上,最好的清潔技術公司其實是網路公司:eBay 是一座巨大的回收場,Amazon 減少了郊區蔓延,智慧溫控器、需求移轉軟體,乃至將來的自駕車,都能實際擠出系統裡的浪費。但光靠節約贏不了——開發中世界追上來,美國省下的都會被抵銷;等北方邦(Uttar Pradesh)家家戶戶都有冰箱,我們換小冰箱的努力就歸零了。於是老問題又回來了:能源真的可能「便宜到不必計費」嗎?"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Thiel's candidate secret is thorium. In the 1940s the government weighed three fissile elements — plutonium, uranium, and thorium — and dropped thorium precisely because it cannot be weaponized. The priority was bombs, not power, so an entire branch of nuclear engineering was politically orphaned. Decades of neglect for non-technical reasons is exactly what makes a secret.",
       "zh": "Thiel 點名的祕密是釷。1940 年代,美國政府評估過三種可裂變元素——鈽、鈾、釷——最後放棄釷,原因正是它做不成核彈。當時的優先目標是武器而非發電,於是一整支核工程分支因政治因素被打入冷宮。因為非技術原因被冷落數十年——這正是祕密的長相。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Abundant: enough for on the order of a million years at current consumption",
        "Clean: uranium reactors burn only about 0.7% of their fuel; a thorium cycle consumes far more of it with far less waste",
        "Safe: no runaway chain reaction, and no need for vessels holding hundreds of atmospheres of pressure",
        "Cheap: roughly an order of magnitude better — think a $250 million plant versus $1.1 billion for uranium"
       ],
       "zh": [
        "蘊藏豐富:以目前的消耗速度,足夠用上百萬年等級的時間",
        "乾淨:鈾反應爐只燒掉約 0.7% 的燃料;釷循環燃燒得更完全、廢料也少得多",
        "安全:不會發生失控連鎖反應,也不需要承受數百大氣壓的壓力容器",
        "便宜:整體約有一個數量級的優勢——一座廠約 2.5 億美元,鈾電廠則要 11 億美元"
       ]
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Run thorium through the ten-point checklist and it starts with roughly six boxes already checked: it is unfashionable, secret, non-incremental, durable, well timed, and financeable in staged milestones. What remains is the hard human work — defining the market, recruiting nuclear engineers, and coordinating distribution and regulation. Solve those, and you have done everything possible to put mastery ahead of luck.",
       "zh": "把釷放進十項檢核清單,一開始就大約打勾六項:不流行、有祕密、非漸進、夠耐久、時機對、也能以分階段里程碑的方式融資。剩下的是最難的人的工作——定義市場、找到核子工程師、搞定通路與法規協調。把這幾塊解決,你就已經把「靠實力、不靠運氣」做到極致了。"
      }
     }
    ]
   },
   {
    "id": "government-question",
    "heading": {
     "en": "6. The Government Question",
     "zh": "6. 政府問題"
    },
    "summary": {
     "en": "Startups can sell to, be subsidized by, or replace government; with deficits near 10% of GDP, subsidy-dependent models are the fragile ones.",
     "zh": "新創與政府的關係只有三種:賣給它、拿補貼、或取代它;在赤字接近 GDP 10% 的年代,靠補貼的模式最脆弱。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "There are only three molds for a technology company's relationship with government: sell to it, take subsidies from it, or replace it. Venture capitalists dislike all three — subsidy dependence most of all. And the macro picture makes subsidies a wasting asset: the U.S. deficit runs near 10% of GDP with no credible plan to close it, a secret hidden in plain sight because nobody knows what to do about it. Whatever the future holds, there will be less free money.",
       "zh": "科技公司與政府的關係只有三種模子:賣東西給政府、拿政府補貼、或取代政府。創投三種都不喜歡,最忌諱的是依賴補貼。而總體數字讓補貼注定縮水:美國赤字接近 GDP 的 10%,卻沒有任何可信的收斂方案——這是個「藏在眾目睽睽之下」的祕密,因為沒人知道怎麼辦,所以大家乾脆不談。無論未來如何,免費的錢只會越來越少。"
      }
     },
     {
      "type": "table",
      "head": {
       "en": [
        "Company",
        "Relationship to government",
        "Risk profile"
       ],
       "zh": [
        "公司",
        "與政府的關係",
        "風險樣貌"
       ]
      },
      "rows": [
       {
        "en": [
         "SpaceX",
         "Sells launches to a paying government customer; may replace retired capability",
         "Main risk is budget cuts to a customer — real but modest"
        ],
        "zh": [
         "SpaceX",
         "把發射服務賣給付錢的政府客戶;太空梭退役後甚至可能取而代之",
         "主要風險是客戶預算被砍——存在但可控"
        ]
       },
       {
        "en": [
         "Solyndra",
         "Depended on subsidies and loan guarantees to stay alive",
         "Fatal in a future where subsidy money dries up"
        ],
        "zh": [
         "Solyndra",
         "靠補貼與貸款擔保續命",
         "在補貼枯竭的未來,這是致命傷"
        ]
       }
      ]
     },
     {
      "type": "p",
      "text": {
       "en": "The conclusion sends cleantech back to the quadrant where the Internet lives: determinate optimism. The classic definition of technology is doing more with less — so name the breakthrough, then improve it relentlessly. A decade of good intentions produced failure; twenty years from now, John Doerr should be able to tell his daughter that actual progress was made.",
       "zh": "結論是把清潔技術送回網路業所在的象限:明確的樂觀。科技的經典定義就是「用更少做到更多」——先點名突破在哪,再不懈地改良它。過去十年,滿滿的善意換來一場失敗;二十年後,John Doerr 應該要能告訴女兒:這次是真的有進展。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "The first step, as usual, is to think big and think boldly about the future.",
       "zh": "第一步一如既往:對未來要想得夠大、也夠大膽。"
      }
     }
    ]
   }
  ],
  "factcheck": [
   {
    "claim": {
     "en": "In 2012 Thiel presented thorium power as an untried secret — an order-of-magnitude better reactor that nobody had seriously attempted, for political rather than technical reasons.",
     "zh": "2012 年,Thiel 把釷能源說成一個沒人認真嘗試過的祕密——一種因政治而非技術因素被冷落、卻可能好上一個數量級的反應爐。"
    },
    "now": {
     "en": "China took the bet: its 2 MW TMSR-LF1 molten salt reactor in Wuwei reached criticality in 2023, full power in 2024, and in April 2025 achieved the world's first in-reactor thorium-to-uranium fuel conversion, with a 100 MW demonstrator targeted around 2035.",
     "zh": "中國接下了這個賭注:位於甘肅武威的 2 MW 釷基熔鹽實驗堆 TMSR-LF1 於 2023 年達臨界、2024 年滿功率運轉,並在 2025 年 4 月完成全球首次堆內釷鈾燃料轉換;100 MW 示範堆預計 2035 年前後落成。"
    },
    "sourceTitle": "World Nuclear News: Chinese molten salt reactor achieves conversion of thorium-uranium fuel",
    "sourceUrl": "https://www.world-nuclear-news.org/articles/chinese-msr-achieves-conversion-of-thorium-uranium-fuel"
   },
   {
    "claim": {
     "en": "The essay argued solar was merely incremental — costs falling slowly, no step function — so cheap solar power and durable solar companies were not to be expected.",
     "zh": "文章主張太陽能只是漸進式進步——成本下降緩慢、沒有跳躍——因此別指望便宜的太陽能電力或耐久的太陽能公司。"
    },
    "now": {
     "en": "Solar electricity costs fell about 89% from 2009 to 2019, and the IEA's World Energy Outlook 2020 called the best utility-scale solar 'the cheapest electricity in history'. Yet the winners were commodity-scale manufacturers rather than differentiated startups — the cost prediction failed while the durability warning largely held.",
     "zh": "太陽能發電成本在 2009 至 2019 年間下降約 89%,IEA《世界能源展望 2020》稱最佳的公用事業級太陽能是「史上最便宜的電力」。不過贏家是大宗規模化製造商,而非有差異化的新創——成本預測落空,但他對「耐久性」的警告大致應驗。"
    },
    "sourceTitle": "Carbon Brief: Solar is now 'cheapest electricity in history', confirms IEA",
    "sourceUrl": "https://www.carbonbrief.org/solar-is-now-cheapest-electricity-in-history-confirms-iea"
   }
  ],
  "quiz": [
   {
    "q": {
     "en": "Why, in Thiel's telling, did the cleantech bubble produce so many failed companies?",
     "zh": "依 Thiel 的說法,清潔技術泡沫為什麼倒了一大片公司?"
    },
    "options": [
     {
      "en": "Government pulled subsidies too early.",
      "zh": "政府太早抽走補貼。"
     },
     {
      "en": "The underlying science was mostly fraudulent.",
      "zh": "背後的科學大多是造假。"
     },
     {
      "en": "They failed nearly all of the ten things every startup must get right, not just one.",
      "zh": "新創必須做對的十件事,他們幾乎全部沒做對,而不是只錯一項。"
     },
     {
      "en": "Oil prices collapsed and made alternatives uncompetitive.",
      "zh": "油價崩盤,讓替代能源失去競爭力。"
     }
    ],
    "answer": 2,
    "explain": {
     "en": "Success requires getting essentially all ten factors right — 8 of 10 is a B-, 5 of 10 an F — and most cleantech companies scored zero or one. The failure was overdetermined, not caused by a single external shock.",
     "zh": "成功需要十項幾乎全對——做對 8 項是 B-,只做對 5 項就不及格——而多數清潔技術公司只拿到零到一項。失敗是多重因素注定的,不是單一外部衝擊造成的。"
    }
   },
   {
    "q": {
     "en": "Which technology does the essay hold up as a genuine energy secret — a breakthrough hiding in plain sight?",
     "zh": "文章認為哪一項技術是真正的能源「祕密」——藏在眾目睽睽下的突破?"
    },
    "options": [
     {
      "en": "Nuclear fusion",
      "zh": "核融合"
     },
     {
      "en": "Thorium reactors",
      "zh": "釷(thorium)反應爐"
     },
     {
      "en": "Shale gas fracking",
      "zh": "頁岩氣壓裂(fracking)"
     },
     {
      "en": "Grid-scale lithium batteries",
      "zh": "電網級鋰電池"
     }
    ],
    "answer": 1,
    "explain": {
     "en": "Thorium was one of three fissile candidates studied in the 1940s and was dropped precisely because it cannot make bombs. Decades of politically motivated neglect left an order-of-magnitude opportunity — abundant, clean, safe, roughly one-tenth the cost — unexplored.",
     "zh": "釷是 1940 年代研究過的三種可裂變元素之一,被放棄的原因正是它做不成核彈。數十年出於政治因素的忽視,留下一個數量級的機會——蘊藏豐富、乾淨、安全、成本約十分之一——卻無人開發。"
    }
   },
   {
    "q": {
     "en": "After Solyndra collapsed, what question did Thiel say neither political party asked?",
     "zh": "Solyndra 倒閉後,Thiel 指出兩黨都沒問的問題是什麼?"
    },
    "options": [
     {
      "en": "Whether executives should be prosecuted",
      "zh": "高層該不該被起訴"
     },
     {
      "en": "Whether the loan process followed proper procedure",
      "zh": "貸款程序是否合規"
     },
     {
      "en": "Whether taxpayers could be repaid",
      "zh": "納稅人的錢拿不拿得回來"
     },
     {
      "en": "Whether the technology actually worked",
      "zh": "這項技術到底行不行"
     }
    ],
    "answer": 3,
    "explain": {
     "en": "Republicans attacked ethics and Democrats defended process — both legal/financial questions typical of an indeterminate culture. A determinate culture asks the substantive engineering question first: did the product work, and was it worth building?",
     "zh": "共和黨攻擊操守,民主黨辯護程序——都是「不明確」文化典型的法律與財務問題。「明確」文化會先問實質的工程問題:產品到底行不行?值不值得做?"
    }
   }
  ]
 },
 {
  "slug": "class-15",
  "layout": "lesson",
  "icon": "menu_book",
  "navLabel": "15",
  "classNo": 15,
  "sourceUrl": "https://blakemasters.tumblr.com/post/24122680868/peter-thiels-cs183-startup-class-15-notes-essay",
  "title": {
   "en": "Back to the Future",
   "zh": "回到未來"
  },
  "subtitle": {
   "en": "Yesterday's failed visions of the future — energy, weather, robots, space — are today's biggest startup openings.",
   "zh": "昨日落空的未來想像——能源、天氣、機器人、太空——正是今日最大的創業缺口。"
  },
  "objectives": [
   {
    "en": "Use the retrofuture method: spot fields where progress stalled decades ago and judge whether old failures can be reopened with modern tools.",
    "zh": "運用「復古未來(retrofuture)」方法:找出數十年前進展停滯的領域,判斷過去的失敗能否用現代工具重新挑戰。"
   },
   {
    "en": "Explain how LightSail, The Climate Corporation, RoboteX, and SpaceX each reframed a 'dead' problem instead of copying the old vision.",
    "zh": "說明 LightSail、The Climate Corporation、RoboteX 與 SpaceX 如何「重新定義」被視為死路的問題,而不是照搬舊有想像。"
   },
   {
    "en": "Apply Thiel's big-ticket distribution math: land reference customers first, grow deals roughly 2x at a time, and drop the mega-contract fantasy.",
    "zh": "應用 Thiel 的高單價銷售法則:先拿下口碑客戶(reference customer),讓訂單一次約放大兩倍成長,放棄一步登天的巨額合約幻想。"
   },
   {
    "en": "Describe why unfamiliarity cuts both ways for hard tech: it makes fundraising brutal, but it also keeps competitors out.",
    "zh": "解釋「陌生感」對硬科技的雙面效應:它讓募資變得極其困難,但同時也把競爭者擋在門外。"
   }
  ],
  "sections": [
   {
    "id": "future-of-the-past",
    "heading": {
     "en": "1. The Future of the Past",
     "zh": "1. 過去的未來"
    },
    "summary": {
     "en": "Mid-century America expected weather control, flying cars, and robot butlers; only computing delivered — and that gap is a map of opportunity.",
     "zh": "上世紀中葉的美國期待天氣控制、飛天車與機器人管家;最後只有電腦科學兌現承諾——而這道落差正是機會地圖。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "In the 1950s and 60s, people confidently predicted a future that mostly never arrived. Computing was the great exception: Moore's Law held, power consumption fell, connectivity kept improving, the Dick Tracy wristwatch effectively became the iPod nano, and Arthur C. Clarke's 1956 vision of a networked world came true. Almost everywhere else, the future quietly failed.",
       "zh": "1950、60 年代的人們信心滿滿地預測了一個大多從未到來的未來。電腦科學是最大的例外:摩爾定律(Moore's Law)持續成立、耗電量不斷下降、連網能力持續進步,漫畫裡 Dick Tracy 的手錶通訊器實質上變成了 iPod nano,Arthur C. Clarke 在 1956 年對網路世界的想像也成真了。但在幾乎所有其他領域,未來都悄悄地失敗了。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "Sometimes the best way to think about the future is to think about the way the future used to be.",
       "zh": "有時候,思考未來最好的方式,就是回頭看看「未來」曾經是什麼樣子。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Weather: prediction stayed unreliable, and cloud seeding was abandoned as too dangerous",
        "Transportation: flying cars never came; traffic looks the same as it did decades ago",
        "Robotics: we expected a general-purpose robot butler and got the Roomba",
        "Nuclear power: promised abundance, but it proved more dangerous than hoped and progress stalled"
       ],
       "zh": [
        "天氣:預報始終不準,人工造雨(cloud seeding)因被認為太危險而遭放棄",
        "交通:飛天車從未出現,塞車情況跟數十年前沒兩樣",
        "機器人:大家期待的是通用型機器人管家,結果只得到掃地機器人 Roomba",
        "核能:曾承諾能源無虞,卻被證明比預期更危險,進展因此停滯"
       ]
      }
     },
     {
      "type": "p",
      "text": {
       "en": "The retrofuture move is diagnostic, not nostalgic: find fields where progress stalled or reversed — thorium reactor research, for example, was sidelined when military priorities favored uranium and plutonium — then ask why they failed and attack the problem differently with modern tools. Copying the past directly never works.",
       "zh": "「復古未來」的做法是診斷,不是懷舊:先找出進展停滯甚至倒退的領域——例如釷(thorium)反應爐研究,就因軍方偏好鈾與鈽而被邊緣化——接著追問它們當年為何失敗,再用現代工具以不同方式重新進攻。直接複製過去,從來行不通。"
      }
     }
    ]
   },
   {
    "id": "four-stalled-frontiers",
    "heading": {
     "en": "2. Where the Future Failed: Four Frontiers",
     "zh": "2. 未來失靈之處:四大領域"
    },
    "summary": {
     "en": "Four guest companies each reopened a supposedly dead field — energy storage, weather, robotics, space — by reframing what the problem actually is.",
     "zh": "四家來賓公司各自重啟一個被認定已死的領域——儲能、天氣、機器人、太空——關鍵都在於重新定義問題本身。"
    },
    "blocks": [
     {
      "type": "table",
      "head": {
       "en": [
        "Frontier",
        "The old dead end",
        "The reframing (company)"
       ],
       "zh": [
        "領域",
        "舊的死路",
        "重新定義(公司)"
       ]
      },
      "rows": [
       {
        "en": [
         "Energy storage",
         "Batteries: ~200-year-old chemistry hitting physical limits, plagued by corrosion",
         "LightSail Energy: treat storage as physics — compressed air in steel tanks, with water spray to manage heat"
        ],
        "zh": [
         "儲能",
         "電池:約 200 年歷史的化學技術逼近物理極限,且飽受腐蝕問題困擾",
         "LightSail Energy:把儲能當物理問題——用鋼瓶壓縮空氣,噴水霧控制熱量"
        ]
       },
       {
        "en": [
         "Weather",
         "Forecasts dismissed as unreliable; weather control seen as dangerous and unethical",
         "The Climate Corporation: big-data crop insurance built on remote sensors and a thousand CPUs of modeling"
        ],
        "zh": [
         "天氣",
         "預報被視為不可靠;控制天氣被認為危險又不道德",
         "The Climate Corporation:以遠端感測器與上千顆 CPU 的模型運算,打造大數據農作物保險"
        ]
       },
       {
        "en": [
         "Robotics",
         "Humanoid butlers perpetually '25–50 years away'; state of the art folded laundry in 45 minutes per item",
         "RoboteX: simple tracked robots as intermediaries for SWAT, hazmat, and bomb disposal"
        ],
        "zh": [
         "機器人",
         "人形管家永遠「還要 25 到 50 年」;最先進的機器人摺一件衣服要 45 分鐘",
         "RoboteX:簡單的履帶機器人,作為特警(SWAT)、危險物質與拆彈任務的中介"
        ]
       },
       {
        "en": [
         "Space",
         "Launch cost per kilogram flat for 40 years under cost-plus contracting",
         "SpaceX: clean-sheet design and vertical integration to restructure the entire cost curve"
        ],
        "zh": [
         "太空",
         "在成本加成合約(cost-plus)下,每公斤發射成本 40 年不變",
         "SpaceX:從零開始的設計(clean-sheet design)加垂直整合,重構整條成本曲線"
        ]
       }
      ]
     },
     {
      "type": "quote",
      "text": {
       "en": "The Space Shuttle program was oddly Pareto inferior. It cost more, did less, and was more dangerous than a Saturn V rocket.",
       "zh": "太空梭計畫竟是全面劣勢(Pareto inferior):比土星五號火箭更貴、做得更少,也更危險。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "The common thread is that none of these companies copied the old dream. A cheap robot that rolls in ahead of a SWAT team — criminals often surrender to it on sight — beats a robot butler. Compressed air sidesteps the hunt for a miracle battery chemistry. And The Climate Corporation thrived partly because agricultural technology sits outside Silicon Valley's field of vision, so few people were even looking.",
       "zh": "共同點在於:沒有一家公司照抄舊夢。一台便宜、先於特警隊進場的機器人——歹徒常常一看到就投降——勝過機器人管家;壓縮空氣則繞開了尋找奇蹟電池化學的死胡同。而 The Climate Corporation 之所以壯大,部分原因是農業科技落在矽谷的視野之外,根本沒多少人在看這塊市場。"
      }
     }
    ]
   },
   {
    "id": "recruiting-for-hard-tech",
    "heading": {
     "en": "3. Recruiting for Hard Problems",
     "zh": "3. 為困難問題招募人才"
    },
    "summary": {
     "en": "Being radically different helps hiring more than it hurts: hard-tech startups win talent by offering responsibility and meaning that incumbents can't.",
     "zh": "與眾不同對招募利大於弊:硬科技新創靠著大公司給不了的責任與意義來贏得人才。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Asked whether radical uniqueness hampers recruiting, the panel largely said the opposite. SpaceX gave a small team of young engineers real responsibility that cost-plus aerospace bureaucracies never would. The Climate Corporation competed with Google and Facebook for quants by arguing that predicting weather for farmers matters more than optimizing games about virtual livestock. RoboteX's pitch is simply that it builds robots that save lives — and customers reinforce that message daily.",
       "zh": "被問到「太過與眾不同會不會不利招募」時,與談人的答案大多相反。SpaceX 讓一小群年輕工程師承擔真正的責任,這在成本加成文化的航太官僚體系裡根本不可能。The Climate Corporation 與 Google、Facebook 搶計量人才時,主打「為農民預測天氣,比優化虛擬牲畜遊戲更重要」。RoboteX 的訴求更直接:我們造的是能救人的機器人——而客戶每天的回饋都在強化這句話。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Mine adjacent industries with startup-compatible cultures: LightSail found scarce compressor talent in auto racing, after screening 1,000+ resumes and running some 400 interviews",
        "Sell impact and ownership, not salary — seasoned aerospace veterans with big salary expectations were harder to land than hungry young engineers",
        "Hiring academics works but takes patience: The Climate Corporation employed about 20 PhDs in their first jobs outside academia and had to teach research-to-product thinking",
        "Screen for cultural fit in both directions, and use professors' networks for honest reference checks on candidates"
       ],
       "zh": [
        "到文化相近的鄰近產業挖人:LightSail 在篩選超過 1,000 份履歷、面試約 400 人後,從賽車產業找到稀缺的壓縮機人才",
        "賣的是影響力與主導權,不是薪水——期望高薪的航太老將,反而比求知若渴的年輕工程師更難請動",
        "聘用學界人才可行但需要耐心:The Climate Corporation 聘了約 20 位博士,這是他們第一份學界以外的工作,公司得教他們把研究轉成產品思維",
        "文化契合要雙向篩選,並善用教授人脈對求職者做誠實的資歷查核"
       ]
      }
     }
    ]
   },
   {
    "id": "why-now",
    "heading": {
     "en": "4. Why Can These Be Solved Now?",
     "zh": "4. 為什麼是現在?"
    },
    "summary": {
     "en": "These aren't new ideas but old ones that failed for reasons that no longer hold — missing compute, wrong materials, path-dependent design choices.",
     "zh": "這些不是新點子,而是因「已不成立的理由」失敗的舊點子——當年缺算力、用錯材料,或被路徑依賴的設計綁死。"
    },
    "blocks": [
     {
      "type": "cards",
      "items": [
       {
        "title": {
         "en": "LightSail: history lost its notes",
         "zh": "LightSail:被歷史遺忘的筆記"
        },
        "body": {
         "en": "Compressed air storage was tried in the 1870s, before the electrical grid — even the water-spray cooling idea. Why it failed is unrecorded; you can't debug the mental processes of long-dead inventors. Technology is deeply path-dependent, and modern materials make the retry worthwhile.",
         "zh": "壓縮空氣儲能早在 1870 年代、電網出現之前就有人嘗試——連噴水冷卻的點子都試過。當年為何失敗已無從考證;你無法替早已作古的發明家「除錯」他們的思路。技術演進高度路徑依賴(path dependency),而現代材料讓重啟這條路變得值得。"
        }
       },
       {
        "title": {
         "en": "Climate Corp: compute caught up",
         "zh": "Climate Corp:算力終於跟上"
        },
        "body": {
         "en": "Crop insurance dates back to biblical times, but past attempts lacked data and computational power. With a thousand CPUs and granular remote sensing, the actuarial models finally work — the hard part now is boiling the output down into something a farmer can act on.",
         "zh": "農作物保險的概念可追溯到聖經時代,但過去的嘗試既缺資料又缺算力。有了上千顆 CPU 與細緻的遠端感測,精算模型終於可行——現在的難題反而是把結果濃縮成農民看得懂、用得上的形式。"
        }
       },
       {
        "title": {
         "en": "RoboteX: drop the sci-fi bias",
         "zh": "RoboteX:拋開科幻偏見"
        },
        "body": {
         "en": "Science fiction biased everyone toward legs and humanoid forms, but tracks are simply better. Riding Asia's commodity computer-component supply chain and substituting plastics for machined aluminum collapsed costs to a fraction of the old approach.",
         "zh": "科幻作品讓所有人偏執於雙腿與人形,但履帶其實更實用。RoboteX 借力亞洲成熟的電腦零組件供應鏈,並以塑膠取代精密加工的鋁件,把成本壓到舊做法的零頭。"
        }
       },
       {
        "title": {
         "en": "SpaceX: rebuild the cost structure",
         "zh": "SpaceX:重建成本結構"
        },
        "body": {
         "en": "Incumbents wrote specs and outsourced everything, layering markups and friction. SpaceX went clean-sheet and vertically integrated, pushed composites hard, developed new welding techniques, and even resurrected a forgotten fuel-injector design. The number of innovations was staggering.",
         "zh": "傳統業者寫好規格後層層外包,疊加了利潤加成與磨合成本。SpaceX 從白紙開始設計並垂直整合,大量採用複合材料、開發新焊接工法,甚至復活了一種被遺忘的燃料噴注器設計。創新數量多到驚人。"
        }
       }
      ]
     },
     {
      "type": "p",
      "text": {
       "en": "Vertical integration emerged as the shared theme. Build key parts in-house and they do exactly what you need and no more — no supplier markups, no compromise specs. Even the credible threat of in-sourcing changes supplier behavior: Fong's tactic is to show suppliers you could build it yourself, then let their competing quotes discipline each other.",
       "zh": "垂直整合是貫穿全場的共同主題。關鍵零件自己做,就能「剛好符合需求、不多不少」——沒有供應商加成,也不必將就規格。就連「有能力自製」這個可信的威脅都能改變供應商行為:Fong 的談判戰術是先展示自己做得出來,再讓各家供應商的報價互相牽制。"
      }
     }
    ]
   },
   {
    "id": "selling-and-exits",
    "heading": {
     "en": "5. Distribution, References, and Exits",
     "zh": "5. 通路、口碑客戶與退場"
    },
    "summary": {
     "en": "Expensive products sell bottom-up through reference customers, deals realistically grow about 2x at a time, and acquisitions rarely fit truly unique tech.",
     "zh": "高價產品要靠口碑客戶由下而上賣起,訂單一次頂多放大約兩倍,而真正獨特的技術很少適合被收購。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "RoboteX skipped the conventional military-contract route and sold bottom-up to local police departments instead. Staying fully private kept the company free of government strings, while small deployments generated daily user feedback, real revenue, and strategic freedom — with commercial hazmat businesses as the next ring of expansion.",
       "zh": "RoboteX 跳過傳統的軍方合約路線,改以由下而上的方式賣給地方警局。維持完全私有讓公司不受政府資金的牽制,小規模部署則帶來每天的使用者回饋、真實營收與策略自由——下一圈擴張目標是各類處理危險物質的商業客戶。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "The bigger the ticket, the slower and less objective the sale; buyers always ask who else has bought, and having no references can kill the deal",
        "The $100M single-contract fantasy almost never happens; good enterprise startups instead grow 50–100% a year for a decade, e.g. $5M in year one, then doubling",
        "Your next biggest deal is realistically about 2x your current biggest — no customer signs on for 10x your largest prior deployment",
        "The same logic binds VCs raising funds: there is no single whale LP; investors herd, each affected by the others in hidden, unspoken ways",
        "Fong's exception: the perfect first customer is a desperate one whose current supplier just failed — motivated, fast, and grateful"
       ],
       "zh": [
        "單價越高,銷售週期越長、決策越不客觀;買家一定會問「還有誰買過?」,拿不出口碑客戶可能直接斷送交易",
        "「一紙一億美元合約」的幻想幾乎不會成真;好的企業級新創是連續十年每年成長 50–100%,例如第一年 500 萬美元、之後逐年翻倍",
        "下一筆最大訂單,實際上大約是你目前最大訂單的兩倍——沒有客戶會簽下比你既有最大案子大十倍的合約",
        "募資中的創投也適用同樣邏輯:不存在單一的超級 LP;投資人會群聚跟風,彼此以隱而不宣的方式互相影響",
        "Fong 的例外:最完美的第一個客戶,是原供應商剛出包、走投無路的客戶——有動機、動作快、還心懷感激"
       ]
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "If you want advice, ask for money. If you want money, ask for advice.",
       "zh": "想要建議,就去要錢;想要錢,就去要建議。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "On exits: the best sales are disguised, so a founder who wants to sell should act uninterested. Boards must weigh serious offers, but M&A is driven either by efficiency grinding (merge two banks, fire half the staff) or by product synergy — and genuine synergy is rare. PayPal/eBay was the exception, not the rule; the more unique your technology, the less likely an acquirer truly complements it.",
       "zh": "談到退場:最好的出售都經過偽裝,想賣的創辦人反而該表現得毫無興趣。董事會固然必須認真評估收購提案,但併購的動機不外乎兩種:效率壓榨(兩家銀行合併、裁掉一半員工),或產品綜效(synergy)——而真正的綜效非常罕見。PayPal 與 eBay 是例外而非通則;你的技術越獨特,收購方能真正互補的機率就越低。"
      }
     }
    ]
   },
   {
    "id": "funding-the-unfamiliar",
    "heading": {
     "en": "6. Funding the Unfamiliar",
     "zh": "6. 為陌生事物募資"
    },
    "summary": {
     "en": "Hard-tech fundraising is brutally hard because truly different things resist pattern-matching — but that same unfamiliarity scares off competitors.",
     "zh": "硬科技募資極其艱難,因為真正不同的東西無法被套公式評估——但同樣的陌生感,也把競爭者嚇跑了。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Asked how to fund hardcore technology, Fong's blunt answer was that it is extremely hard. Musk put roughly $100M of his own money into SpaceX and would have spent everything if needed. When NASA required outside funding in 2008, Founders Fund invested — after rockets had already been built and flown — while the rest of Silicon Valley called it crazy. Many investors recite disruption rhetoric; few partners have the internal clout to actually back it, so founders must find investors whose convictions genuinely align with the mission.",
       "zh": "被問到硬科技怎麼募資,Fong 的回答直白:非常非常難。Musk 把約一億美元的個人資金投入 SpaceX,必要時他願意花到一毛不剩。2008 年 NASA 要求 SpaceX 引入外部資金時,Founders Fund 出手投資——那時火箭早已造出來也試射過——矽谷其他人卻說這是瘋了。許多投資人嘴上愛講顛覆,真正有內部話語權敢押注的合夥人卻少之又少,所以創辦人必須找到信念與使命真正一致的投資人。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Thiel's unfamiliarity paradox: things that are truly different are hard to evaluate. When Musk pitched a rocket company, his relevant experience was zero — but so was everyone else's, since nobody had done rockets in 40 years. Contrast iPhone gaming, where every founder cites past titles, every VC cites a gaming portfolio, and competition is ferocious. In unknown territory the evaluative bar disappears — an advantage for teams that prioritize learning over process.",
       "zh": "Thiel 的「陌生悖論」:真正不同的東西很難被評估。Musk 提案做火箭公司時,他的相關經驗是零——但其他人也是零,因為 40 年來根本沒人做過火箭。對照 iPhone 遊戲市場:每個創辦人都能列出過往作品、每家創投都有遊戲投資組合,競爭慘烈。在無人涉足的領域,評估的標準反而消失了——這對重視學習勝過流程的團隊是種優勢。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Founder skin in the game substitutes for the missing evaluative framework — personal capital and commitment are the signal",
        "Court investors for their convictions, not their risk-taking slogans; portfolio 'diversification across different things' is often just a story",
        "Unfamiliar domains carry a hidden bonus: the same strangeness that repels capital also repels credible competitors — the quiet payoff of every retrofuture bet"
       ],
       "zh": [
        "創辦人的切身投入(skin in the game)可以彌補評估框架的缺席——個人資本與破釜沉舟的決心就是最強的訊號",
        "挑投資人要看信念,不要聽冒險口號;所謂「分散投資於各種不同事物」的組合說法,往往只是話術",
        "陌生領域藏著一個隱性紅利:嚇跑資本的那份陌生感,同樣嚇跑了有實力的競爭者——這是每個復古未來賭注的無聲回報"
       ]
      }
     }
    ]
   }
  ],
  "factcheck": [
   {
    "claim": {
     "en": "The Climate Corporation was showcased as proof that applying massive computation and remote sensing to weather-based crop insurance was a huge, underexplored opportunity hiding outside Silicon Valley's field of vision.",
     "zh": "課堂上以 The Climate Corporation 為例,證明把大規模運算與遠端感測應用於天氣型農作物保險,是一個藏在矽谷視野之外、未被充分開發的巨大機會。"
    },
    "now": {
     "en": "Vindicated fast: in October 2013, about 18 months after this class, Monsanto acquired The Climate Corporation for roughly $1.1 billion ($930M announced plus retention payouts), one of the defining agtech-data exits of the decade. It later became part of Bayer's digital farming arm.",
     "zh": "很快獲得驗證:2013 年 10 月,也就是本課約 18 個月後,Monsanto 以約 11 億美元(公告 9.3 億美元加上留任獎酬)收購 The Climate Corporation,成為那十年最具代表性的農業科技數據出場案之一,後來併入 Bayer 的數位農業部門。"
    },
    "sourceTitle": "TechCrunch: Monsanto Buys Weather Big Data Company Climate Corporation",
    "sourceUrl": "https://techcrunch.com/2013/10/02/monsanto-acquires-weather-big-data-company-climate-corporation-for-930m"
   },
   {
    "claim": {
     "en": "LightSail Energy pitched compressed-air storage — physics instead of battery chemistry — as its answer to a trillion-dollar energy storage market.",
     "zh": "LightSail Energy 主張用壓縮空氣儲能——以物理取代電池化學——搶攻上兆美元的儲能市場。"
    },
    "now": {
     "en": "It didn't pan out: despite raising over $70 million from backers including Thiel, Bill Gates, and Khosla Ventures, the tanks and compression gear cost more than the stored energy was worth. After a 2016 pivot to natural gas transport modules, the company entered hibernation in late 2017 and shut down in 2018 without shipping a product.",
     "zh": "結果未能成功:儘管從 Thiel、Bill Gates、Khosla Ventures 等投資人募得超過 7,000 萬美元,儲氣瓶與壓縮設備的成本仍高於所儲能源的價值。公司在 2016 年轉向天然氣運輸模組,2017 年底進入「冬眠」,2018 年在沒有推出產品的情況下結束營運。"
    },
    "sourceTitle": "Wikipedia: LightSail Energy",
    "sourceUrl": "https://en.wikipedia.org/wiki/LightSail_Energy"
   }
  ],
  "quiz": [
   {
    "q": {
     "en": "According to this class, what is the right way to use the failed predictions of the 1950s and 60s?",
     "zh": "根據本課,面對 1950、60 年代那些落空的未來預測,正確的做法是什麼?"
    },
    "options": [
     {
      "en": "Copy them faithfully now that technology has finally caught up",
      "zh": "既然技術終於跟上了,就照原樣忠實複製"
     },
     {
      "en": "Treat them as proof that those ideas were impossible all along",
      "zh": "把它們當成那些想法本來就不可行的證據"
     },
     {
      "en": "Diagnose why progress stalled, then attack the problem differently with modern tools",
      "zh": "診斷當年進展為何停滯,再用現代工具以不同方式重新進攻"
     },
     {
      "en": "Wait until experts stop saying the technology is 25–50 years away",
      "zh": "等到專家不再說「這技術還要 25 到 50 年」再行動"
     }
    ],
    "answer": 2,
    "explain": {
     "en": "The retrofuture method is diagnostic, not nostalgic. Every guest company reframed the old dream rather than rebuilding it: compressed air instead of miracle batteries, tracked robots instead of butlers. Copying the past directly never works, and expert 25–50 year forecasts are just accountability-free ways of saying someone else will do it.",
     "zh": "復古未來方法是診斷,不是懷舊。每家來賓公司都重新定義了舊夢想,而非重建它:用壓縮空氣取代奇蹟電池、用履帶機器人取代管家。直接複製過去從來行不通,而專家的「還要 25 到 50 年」只是不必負責任地說「反正會有別人做」。"
    }
   },
   {
    "q": {
     "en": "How did LightSail Energy reframe the energy storage problem?",
     "zh": "LightSail Energy 如何重新定義儲能問題?"
    },
    "options": [
     {
      "en": "By searching for a breakthrough battery chemistry beyond lithium",
      "zh": "尋找超越鋰電池的突破性電池化學"
     },
     {
      "en": "By treating storage as a physics problem: compressed air in tanks, with water spray to manage heat",
      "zh": "把儲能當成物理問題:用儲氣瓶壓縮空氣,並噴水霧控制熱量"
     },
     {
      "en": "By betting on hydrogen fuel cells for grid-scale storage",
      "zh": "押注氫燃料電池做電網級儲能"
     },
     {
      "en": "By building larger pumped-hydro reservoirs near cities",
      "zh": "在城市附近興建更大的抽蓄水力設施"
     }
    ],
    "answer": 1,
    "explain": {
     "en": "Batteries are roughly 200-year-old chemistry approaching hard physical limits — a genuinely better one might not even exist to be found. LightSail sidestepped chemistry entirely: compress air in steel tanks and spray in water so the heat of compression isn't lost. Same market, completely different discipline.",
     "zh": "電池是約 200 年歷史的化學技術,正逼近硬性物理極限——真正更好的電池甚至可能根本不存在。LightSail 乾脆繞開化學:把空氣壓進鋼瓶,並噴入水霧留住壓縮產生的熱。同一個市場,完全不同的學科。"
    }
   },
   {
    "q": {
     "en": "Thiel's rule of thumb for big-ticket enterprise sales: your next biggest deal will realistically be…",
     "zh": "Thiel 對高單價企業銷售的經驗法則:你下一筆最大的訂單,實際上會是……"
    },
    "options": [
     {
      "en": "Whatever a $100M government RFP happens to offer",
      "zh": "看政府剛好釋出的一億美元標案有多大"
     },
     {
      "en": "About 10x your largest deal, if the product is truly great",
      "zh": "只要產品夠好,大約是既有最大訂單的十倍"
     },
     {
      "en": "About 2x your largest deal so far",
      "zh": "大約是你目前最大訂單的兩倍"
     },
     {
      "en": "Unpredictable, since each enterprise buyer evaluates objectively",
      "zh": "無法預測,因為每個企業買家都會客觀評估"
     }
    ],
    "answer": 2,
    "explain": {
     "en": "Expensive sales are never fully objective: buyers ask who else has bought, and no customer signs up for 10x your largest prior deployment. The mega-contract fantasy almost never lands. Healthy enterprise startups instead compound 50–100% a year — roughly doubling deal sizes as references accumulate.",
     "zh": "高價銷售從來不是完全客觀的:買家會問「還有誰買過?」,也沒有客戶會簽下比你既有最大案子大十倍的合約。巨額合約的幻想幾乎不會成真。健康的企業級新創是每年成長 50–100%——隨著口碑客戶累積,訂單規模大約逐次翻倍。"
    }
   }
  ]
 },
 {
  "slug": "class-16",
  "layout": "lesson",
  "icon": "menu_book",
  "navLabel": "16",
  "classNo": 16,
  "sourceUrl": "https://blakemasters.tumblr.com/post/24253160557/peter-thiels-cs183-startup-class-16-decoding",
  "title": {
   "en": "Decoding Ourselves",
   "zh": "解碼我們自己"
  },
  "subtitle": {
   "en": "Biotech's future hinges on turning death from bad luck into a solvable engineering problem.",
   "zh": "生技的未來,在於把死亡從「壞運氣」變成可解的工程問題。"
  },
  "objectives": [
   {
    "en": "Explain why life expectancy has risen in a straight line since about 1840, and why whether that trend continues is an open question.",
    "zh": "說明為何自 1840 年左右以來,人類預期壽命呈直線上升,以及這條趨勢線能否延續為何仍是未解問題。"
   },
   {
    "en": "Diagnose why traditional drug discovery works like a lottery whose ticket price keeps rising, and why biotech venture returns have been so poor.",
    "zh": "診斷為何傳統新藥開發像一張越來越貴的樂透彩券,以及生技創投報酬為何長期慘澹。"
   },
   {
    "en": "Compare how three startups—Stem CentRx, Counsyl, and Emerald Therapeutics—use computation to shrink the role of luck in medicine.",
    "zh": "比較 Stem CentRx、Counsyl、Emerald Therapeutics 三家新創如何用運算縮小醫療中「運氣」的成分。"
   },
   {
    "en": "Apply the guests' playbook on timing windows, secrecy, and referral-based recruiting to any frontier technology venture.",
    "zh": "把來賓們關於時機之窗、保密策略與推薦式招募的打法,套用到任何前沿科技創業上。"
   }
  ],
  "sections": [
   {
    "id": "longevity-project",
    "heading": {
     "en": "1. The Longevity Project",
     "zh": "1. 長壽計畫"
    },
    "summary": {
     "en": "Life expectancy has climbed steadily for 170 years; the open question is whether biotech can keep—or bend—the curve.",
     "zh": "預期壽命已穩定爬升 170 年;未解的問題是生技能否讓這條曲線延續,甚至加速上彎。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "After the computer revolution, the class turns to biology: can startups take on cancer, aging, and death itself? The framing fact is striking. For thousands of years, human life expectancy barely moved. Then, from around 1840—when it stood at roughly 45 to 46 years—it began rising at about 2.5% per decade, in a straight line that looks a lot like Moore's Law for lifespans.",
       "zh": "談完電腦革命後,這堂課轉向生物學:新創公司能不能挑戰癌症、老化,甚至死亡本身?開場的事實相當震撼:數千年來人類預期壽命幾乎不動,但從 1840 年左右(當時約 45–46 歲)開始,每十年成長約 2.5%,畫出一條像壽命版摩爾定律(Moore's Law)的直線。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Statistically, every day you survive adds about 5 to 6 hours to your expected life.",
        "The U.S. actually lags the global frontier in life expectancy—there is catching up to do.",
        "Three futures are possible: the trend continues, stalls, or accelerates. Nothing guarantees the line keeps going; before 1840 it was flat forever.",
        "Biotech is the industry positioned to decide which future we get."
       ],
       "zh": [
        "從統計上看,你每多活一天,預期壽命就增加約 5 到 6 小時。",
        "美國的預期壽命其實落後全球最前緣,還有追趕空間。",
        "未來有三種可能:趨勢延續、停滯或加速。沒有任何定律保證這條線會一直走下去——1840 年之前它可是平了幾千年。",
        "生技正是那個將決定我們走向哪種未來的產業。"
       ]
      }
     }
    ]
   },
   {
    "id": "luck-life-death",
    "heading": {
     "en": "2. Luck, Life, and Death",
     "zh": "2. 運氣、生命與死亡"
    },
    "summary": {
     "en": "Since about 1850 we have treated death as a probability problem; the real question is whether it can become an engineering problem again.",
     "zh": "自 1850 年前後,我們一直把死亡當成機率問題;真正的問題是,它能否重新變成工程問題。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "One way to think about longevity is that dying is a matter of bad luck—accidents at three scales. Microscopic accidents are things like DNA mutations that cause cancer. Macroscopic accidents are car crashes. Cosmic accidents are asteroid strikes. From the 17th to 19th centuries, thinkers like Francis Bacon (in New Atlantis) imagined humanity achieving mastery over nature and overcoming accident altogether. But from around 1850, the opposite frame won: actuarial science and life insurance reduced life and death to probability functions, and indeterminacy became the dominant worldview.",
       "zh": "思考長壽的一種方式是:死亡其實是「運氣不好」——三種尺度的意外。微觀意外是導致癌症的 DNA 突變;巨觀意外是車禍;宇宙級意外是小行星撞地球。17 到 19 世紀,像法蘭西斯・培根(Francis Bacon)在《新亞特蘭提斯》(New Atlantis)裡想像的,是人類終將駕馭自然、徹底克服意外。但 1850 年左右之後,相反的世界觀勝出:精算學與人壽保險把生死化約成機率函數,「不確定性」成為主流思維。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "The actuarial math: a 30-year-old has about a 1-in-1,000 chance of dying in a given year; a 100-year-old, about 50%. Eventually your luck runs out.",
        "A telling footnote: around 1700, record-keeping was so poor that people claiming to be 150 were believed—and could earn special pensions from the King.",
        "The deterministic bet: if we could fix just the microscopic accidents—the mutations and cellular failures—estimated lifespans could reach 600 to 1,000 years.",
        "The class's core question: can biology move from the statistical, luck-driven realm into the deterministic, solvable one?"
       ],
       "zh": [
        "精算數學是這樣的:30 歲的人一年內死亡機率約千分之一;100 歲的人約五成。運氣終究會用完。",
        "一個有趣的註腳:1700 年左右因為戶籍紀錄太差,自稱 150 歲的人會被採信,甚至能領國王的特別年金。",
        "決定論的賭注是:如果我們能只解決微觀層次的意外——突變與細胞失靈——預估壽命可達 600 到 1,000 年。",
        "本課核心問題:生物學能否從統計的、運氣驅動的領域,走進決定論的、可解的領域?"
       ]
      }
     }
    ]
   },
   {
    "id": "cs-and-biology",
    "heading": {
     "en": "3. CS Meets Biology",
     "zh": "3. 電腦科學遇上生物學"
    },
    "summary": {
     "en": "Drug discovery is a lottery whose ticket price keeps rising; the bet is that computation can shrink the role of luck.",
     "zh": "新藥開發是一張票價不斷上漲的樂透;這裡的賭注是:運算能縮小運氣的角色。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Traditional drug discovery is a numbers game: screen roughly 10,000 starting compounds, watch about 5 survive to Phase 3 trials, and hope 1 wins FDA approval. Companies take 10 to 15 years to play out, with binary outcomes and little control along the way. That randomness worked for decades, but the soaring cost of each new discovery suggests the easy wins have been exhausted—which is why nearly all life-sciences funds have lost money, with returns as poor as cleantech's.",
       "zh": "傳統新藥開發是一場數字遊戲:從約 10,000 個起始化合物篩起,大約 5 個能撐到三期臨床試驗(Phase 3),祈禱有 1 個拿到 FDA 核准。一家公司要花 10 到 15 年走完全程,結果二元、過程幾乎無法掌控。這種隨機性運作了數十年,但每個新發現的成本飆升,暗示容易的果實已被摘完——這也是為什麼幾乎所有生命科學基金都在賠錢,報酬率跟綠能科技(cleantech)一樣慘。"
      }
     },
     {
      "type": "table",
      "head": {
       "en": [
        "Dimension",
        "Internet startups",
        "Traditional biotech"
       ],
       "zh": [
        "面向",
        "網路新創",
        "傳統生技"
       ]
      },
      "rows": [
       {
        "en": [
         "Feedback loop",
         "Minutes to days",
         "Years; 10–15-year company timelines"
        ],
        "zh": [
         "回饋循環",
         "幾分鐘到幾天",
         "以年計;公司週期 10–15 年"
        ]
       },
       {
        "en": [
         "Funding dynamics",
         "Success means a chain of up rounds",
         "Down rounds nearly inevitable; early investors get wiped out"
        ],
        "zh": [
         "募資動態",
         "成功等於一連串估值上升的輪次(up round)",
         "估值下修(down round)幾乎必然;早期投資人被稀釋殆盡"
        ]
       },
       {
        "en": [
         "Cost trend",
         "Cheaper to build every year",
         "New drug: $100M (1975) → $1.3B (2012)"
        ],
        "zh": [
         "成本趨勢",
         "打造產品一年比一年便宜",
         "一款新藥:1975 年 1 億美元 → 2012 年 13 億美元"
        ]
       },
       {
        "en": [
         "Nature of process",
         "Deterministic engineering",
         "Luck-driven screening lottery"
        ],
        "zh": [
         "流程本質",
         "決定論式的工程",
         "運氣驅動的篩選樂透"
        ]
       }
      ]
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "DNA sequencing costs are collapsing: about $500 million per genome in 2000, roughly $5,000 by 2012, with $1,000 expected within a year or two.",
        "Yet the Human Genome Project underdelivered on its late-1990s hype—a warning that the hard part isn't reading the data but knowing what to do with it.",
        "Biology degrades irreversibly; computation is reversible and reprogrammable. How much of biology is really computational remains an open question—and the opportunity."
       ],
       "zh": [
        "DNA 定序成本正在崩跌:2000 年一個基因體約 5 億美元,2012 年約 5,000 美元,一兩年內預期降到 1,000 美元。",
        "然而人類基因體計畫(Human Genome Project)並未兌現 1990 年代末的狂熱期待——這是個警訊:難的不是讀出資料,而是知道拿資料做什麼。",
        "生物過程會不可逆地劣化;運算過程則可逆、可重編程。生物學裡到底有多少是可運算的,仍是未解問題——也正是機會所在。"
       ]
      }
     }
    ]
   },
   {
    "id": "three-companies",
    "heading": {
     "en": "4. Three Companies Decoding Biology",
     "zh": "4. 三家解碼生物學的公司"
    },
    "summary": {
     "en": "The three guest companies each attack a different slice of medicine by treating biology as an engineering discipline.",
     "zh": "三家來賓公司各自進攻醫療的不同切面,共同點是把生物學當成工程學科來經營。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "The guests—Brian Slingerland of Stem CentRx, Balaji Srinivasan of Counsyl, and Brian Frezza of Emerald Therapeutics—run companies at three points on the spectrum from wet-lab biotech to pure computation. What unites them is culture: PhDs working like a hardcore tech startup, with advanced robotics, version control for lab notebooks, and heavy in-house software.",
       "zh": "三位來賓——Stem CentRx 的 Brian Slingerland、Counsyl 的 Balaji Srinivasan、Emerald Therapeutics 的 Brian Frezza——經營的公司,分佈在「濕實驗室生技」到「純運算」光譜上的三個位置。他們的共同點是文化:一群博士用硬派科技新創的方式工作,配備先進機器人、用版本控制管理實驗記錄,並大量自建軟體。"
      }
     },
     {
      "type": "cards",
      "items": [
       {
        "title": {
         "en": "Stem CentRx — cure cancer",
         "zh": "Stem CentRx——治癒癌症"
        },
        "body": {
         "en": "Targets cancer stem cells, the subpopulation that drives tumor growth, instead of carpet-bombing every cell with chemo. Precise targeting allows lower, more effective doses. Mouse studies looked very promising; human trials were expected within one to two years.",
         "zh": "鎖定驅動腫瘤生長的癌症幹細胞(cancer stem cells)次族群,而非用化療地毯式轟炸所有細胞。精準打擊讓劑量更低、效果更好。小鼠實驗成果亮眼,預計一到兩年內進入人體試驗。"
        }
       },
       {
        "title": {
         "en": "Counsyl — screen every pregnancy",
         "zh": "Counsyl——篩檢每一次懷孕"
        },
        "body": {
         "en": "A bioinformatics company aiming to be the default genetic test for pregnancy: one test covering about 100 genes, focused on well-defined Mendelian diseases. Already screening about 2% of all U.S. births, and built more like a software company than a biotech.",
         "zh": "一家生物資訊(bioinformatics)公司,目標成為孕期基因檢測的預設選項:一次檢測涵蓋約 100 個基因,專注於定義明確的孟德爾遺傳疾病(Mendelian diseases)。當時已篩檢全美約 2% 的新生兒,組織型態更像軟體公司而非生技公司。"
        }
       },
       {
        "title": {
         "en": "Emerald Therapeutics — cure viral infection",
         "zh": "Emerald Therapeutics——治癒病毒感染"
        },
        "body": {
         "en": "The most computational of the three: molecular machines that tag virus-infected cells and trigger them to self-destruct, aiming at all viral infections. Operating in stealth mode, betting on a scalable platform rather than a single product.",
         "zh": "三者中最偏運算的一家:用分子機器標記受病毒感染的細胞並觸發其自毀,目標是所有病毒感染。公司處於隱形模式(stealth mode),押注的是可擴張的平台,而非單一產品。"
        }
       }
      ]
     },
     {
      "type": "quote",
      "text": {
       "en": "Bio should just be sensors and gathering data. Everything else should be done at the command line.",
       "zh": "生物實驗應該只負責感測與蒐集資料,其他一切都該在命令列上完成。"
      }
     }
    ]
   },
   {
    "id": "timing-secrecy-talent",
    "heading": {
     "en": "5. Timing, Secrecy, and Talent",
     "zh": "5. 時機、保密與人才"
    },
    "summary": {
     "en": "The guests argue the computational-biology window is opening now, and that secrecy plus referral recruiting is how you build inside it.",
     "zh": "來賓們主張運算生物學的時機之窗正在打開,而在窗內建設的方法是保密策略加上推薦式招募。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Thiel presses on timing: Marc Andreessen says many late-90s internet ideas were right but too early—why is biotech's moment now? Balaji compares genome sequencing to ARPANET's first packets: real, but not yet compelling; pregnancy screening is the on-ramp, and once people have their data, the marginal cost of using it approaches zero. Slingerland answers the 40-year 'War on Cancer' objection: the approach never changed—carpet-bomb chemo judged by tumor shrinkage, the wrong endpoint since tumors shrink and recur. Frezza's evidence is Genentech: founded in 1976, it opened a window in which 9 of America's 10 largest biotechs were born—and that window had been shut for 30 years before it. His bet is that a new, computational window is opening, and that clinical-trial barriers turn first movers into monopolists: imagine if Chrome had needed FDA approval to challenge Internet Explorer.",
       "zh": "Thiel 追問時機:Marc Andreessen 說 90 年代末許多網路點子是對的、只是太早——憑什麼說生技的時刻是現在?Balaji 把基因體定序比作 ARPANET 的第一批封包:真實存在,但還不夠吸引人;孕期篩檢是「上手入口(on ramp)」,而一旦人們拿到自己的資料,使用資料的邊際成本就趨近於零。Slingerland 則回應「抗癌戰爭 40 年無果」的質疑:方法從未改變——化療地毯式轟炸,而且用腫瘤縮小當指標根本是錯的終點,因為腫瘤縮了還會復發。Frezza 的證據是 Genentech:1976 年創立,打開了一扇窗,美國前十大生技公司有九家誕生於那個窗口——而那扇窗在此之前關了 30 年。他賭的是一扇新的、運算式的窗正在打開;而臨床試驗的高門檻會讓先行者變成獨占者:想像 Chrome 得先通過 FDA 審查才能挑戰 IE。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Secrecy playbook: no press releases until a drug launches; stay quiet about techniques so rivals can't blanket-patent them (Genentech-era firms patented broad concepts and now some companies earn millions licensing patents while shipping zero drugs).",
        "But assume 10 hidden competitors are chasing you anyway—it forces better, faster execution.",
        "How to size invisible competition: sample the network like an ecologist samples a jungle; if no capital or talent in Silicon Valley is on your problem, you are probably alone.",
        "Recruiting under secrecy: personal referrals compound—each great engineer refers about two more, and 2^n scales. Engineers are shy referrers, so Frezza goes through their friend lists one by one asking who is good.",
        "Why leave web/mobile for biotech: social's flags are already planted, the genome never becomes obsolete, and it is hard to bleed and sweat for another dating app."
       ],
       "zh": [
        "保密打法:藥品上市前不發任何新聞稿;對技術細節保持沉默,避免對手搶先把概念全面專利化(Genentech 時代的公司曾把廣泛概念申請成專利,如今有些公司零藥品上市,卻靠授權專利年收數百萬美元)。",
        "但無論如何都要假設有 10 家隱形對手在追趕——這會逼你執行得更好、更快。",
        "如何估算看不見的競爭:像生態學家抽樣叢林物種一樣抽樣人脈網;若矽谷的資金與人才都沒投入你的問題,你八成是孤軍。",
        "保密下的招募:個人推薦會複利成長——每位優秀工程師約可再推薦兩人,2^n 的規模化很可觀。工程師推薦時很害羞,所以 Frezza 會逐一翻他們的朋友名單,問誰值得共事。",
        "為何離開網路/行動去做生技:社群領域的旗子都插完了,基因體永遠不會過時,而且你很難為了又一個交友 app 流血流汗流淚。"
       ]
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "The next big thing won't look like the last big thing.",
       "zh": "下一個大機會,不會長得像上一個大機會。"
      }
     }
    ]
   },
   {
    "id": "qa-frontier",
    "heading": {
     "en": "6. Q&A: Regulation, Feedback Loops, and Getting Started",
     "zh": "6. 問答:監管、回饋循環與起步"
    },
    "summary": {
     "en": "The FDA bottleneck may break, slow iteration is not a law of nature, and the hardest part is laying the analytical foundation.",
     "zh": "FDA 瓶頸可能被打破,迭代緩慢並非自然定律,而最難的部分是打好分析的地基。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "On regulation, Thiel notes something odd: the FDA effectively bottlenecks drug development for the whole world. He sees a tipping point coming where the U.S. can no longer dictate global pace and must compete—perhaps with China—on speed, a potential paradigm shift. SpaceX is the precedent: heavily regulated at first, it persevered as aerospace rules eased. A hostile regulatory baseline can even be an advantage for those willing to endure it. On iteration speed, Frezza explains that computational biotech validates with physical models and experiments rather than external feedback, and Balaji insists slow cycles are contingent, not necessary: insulin went from discovery to patients between 1920 and 1923—software speed—and Counsyl went from conception to product in 15 to 18 months, versus a typical 7 to 8 years.",
       "zh": "談到監管,Thiel 指出一件怪事:FDA 實質上卡住了全世界的新藥開發。他預見一個臨界點:美國將無法再主導全球節奏,而必須在速度上競爭——對手也許是中國——這可能是一次典範轉移。SpaceX 是先例:起初監管重重,但它撐了下來,航太法規在近十年間逐漸鬆綁。對願意熬的人來說,不友善的監管環境反而可能成為優勢。至於迭代速度,Frezza 說明運算生技靠物理模型與驗證實驗來確認方向,而非外部回饋;Balaji 則堅持慢速循環是偶然、不是必然:胰島素從發現到用在病人身上只花了 1920 到 1923 年——軟體般的速度——而 Counsyl 從構想到產品只用了 15 到 18 個月,對比業界典型的 7 到 8 年。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "On venture capital: 'VC is broken' with respect to biotech—funds lost money, time horizons are too short, and VCs want single-compound companies, not multi-compound platforms doing serious pre-clinical research.",
        "On the grind of starting: setting up a lab took Emerald about a full year of equipment-buying and troubleshooting—unlike PayPal, where the interface to physical reality was so thin that new hires just assembled their own desks.",
        "Balaji's closing advice: startups always begin with futons and ironing boards; what matters is getting the foundation right. You don't need a science-fair project at the start—you need to do your analytical homework."
       ],
       "zh": [
        "談創投:就生技而言「創投模式是壞掉的」——基金賠錢、投資期限太短,而且創投只想要單一化合物的公司,不想要認真做臨床前研究的多化合物平台。",
        "談起步的苦工:Emerald 光是建實驗室就花了將近一整年採購設備、排除故障——不像 PayPal,與物理世界的介面薄到新員工只要自己組桌子就能開工。",
        "Balaji 的收尾建議:新創的起點永遠是沙發床和燙衣板;關鍵是把地基打對。起步時你不需要做一個科展作品——你需要把分析功課做足。"
       ]
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "If you want money, ask for advice. If you want advice, ask for money. That game is exhausting.",
       "zh": "想要錢,就去請教建議;想要建議,就去開口要錢。這種遊戲玩起來很累人。"
      }
     }
    ]
   }
  ],
  "factcheck": [
   {
    "claim": {
     "en": "Stem CentRx said its cancer-stem-cell approach gave it 'a very good chance' of solving cancer soon, with promising mouse data and human trials expected within one to two years.",
     "zh": "Stem CentRx 表示其癌症幹細胞療法「很有機會」在不久的將來攻克癌症,小鼠數據亮眼,並預計一到兩年內進入人體試驗。"
    },
    "now": {
     "en": "AbbVie bought Stemcentrx for $5.8 billion in 2016—one of biotech's biggest private acquisitions—but its lead drug Rova-T repeatedly failed lung-cancer trials; AbbVie killed the program in 2019 and wrote off roughly $4 billion, a cautionary coda to the cancer-stem-cell thesis.",
     "zh": "AbbVie 於 2016 年以 58 億美元收購 Stemcentrx,是生技史上最大的私有公司收購之一;但主力藥物 Rova-T 在肺癌試驗中屢次失敗,AbbVie 於 2019 年終止計畫並認列約 40 億美元減損,為癌症幹細胞論點寫下警世註腳。"
    },
    "sourceTitle": "Pharmaphorum: Rova-T — the story of AbbVie's multi-billion dollar failure",
    "sourceUrl": "https://pharmaphorum.com/r-d/views-analysis-r-d/rova-t-the-story-of-abbvies-multi-billion-dollar-failure"
   },
   {
    "claim": {
     "en": "Counsyl was screening about 2% of all U.S. births and aimed to become the default genetic test for pregnancy.",
     "zh": "Counsyl 當時已篩檢全美約 2% 的新生兒,目標是成為孕期基因檢測的預設選項。"
    },
    "now": {
     "en": "Counsyl grew into a leading reproductive genetic-testing company and was acquired by Myriad Genetics for $375 million in 2018; its carrier and prenatal screens lived on as Myriad's Foresight and Prelude tests, validating the pregnancy 'on-ramp' thesis even if Counsyl didn't stay independent.",
     "zh": "Counsyl 成長為生殖基因檢測的領導廠商,2018 年被 Myriad Genetics 以 3.75 億美元收購;其帶因與產前篩檢以 Myriad 的 Foresight 與 Prelude 產品延續,證實了「孕期入口」的論點——只是 Counsyl 沒有維持獨立。"
    },
    "sourceTitle": "GenomeWeb: Myriad Genetics to Acquire Counsyl for $375M",
    "sourceUrl": "https://www.genomeweb.com/business-news/myriad-genetics-acquire-counsyl-375m"
   }
  ],
  "quiz": [
   {
    "q": {
     "en": "The class notes that developing a new drug cost about $100 million in 1975 but $1.3 billion by 2012. What explanation does the essay favor?",
     "zh": "課堂指出,開發一款新藥的成本從 1975 年的約 1 億美元漲到 2012 年的 13 億美元。本課偏好的解釋是什麼?"
    },
    "options": [
     {
      "en": "FDA fees and paperwork alone account for the increase.",
      "zh": "光是 FDA 規費與文書作業就足以解釋漲幅。"
     },
     {
      "en": "Scientists have become dramatically less productive.",
      "zh": "科學家的生產力大幅下滑。"
     },
     {
      "en": "The luck-driven screening lottery has exhausted its easy wins, so each random discovery costs more.",
      "zh": "運氣驅動的篩選樂透已摘完容易的果實,所以每個隨機發現都變得更貴。"
     },
     {
      "en": "Demand for new drugs has collapsed, shrinking economies of scale.",
      "zh": "新藥需求崩跌,規模經濟消失。"
     }
    ],
    "answer": 2,
    "explain": {
     "en": "The essay frames traditional discovery as a lottery—10,000 compounds screened for 1 approval. Rising ticket prices signal the low-hanging fruit is gone, which is precisely why the guests bet on making discovery deterministic through computation instead of buying ever-costlier lottery tickets.",
     "zh": "本課把傳統新藥開發框架成樂透——篩 10,000 個化合物才換 1 個核准。票價上漲代表低垂的果實已被摘完,這正是來賓們押注「用運算讓開發變得可決定」的原因:與其買越來越貴的彩券,不如改寫遊戲規則。"
    }
   },
   {
    "q": {
     "en": "Why does Brian Frezza believe now is the right time for computational biology, despite biotech's long slump?",
     "zh": "儘管生技產業長期低迷,Brian Frezza 為什麼相信現在正是運算生物學的好時機?"
    },
    "options": [
     {
      "en": "Windows open and close: Genentech's late-1970s window produced 9 of the 10 largest U.S. biotechs after 30 shut years, and a new computational window is opening now.",
      "zh": "時機之窗會開也會關:Genentech 在 1970 年代末打開的窗,誕生了美國前十大生技公司中的九家(此前關了 30 年),而現在一扇新的運算之窗正在打開。"
     },
     {
      "en": "The FDA has recently deregulated drug approval, making trials cheap.",
      "zh": "FDA 最近放寬新藥審查,讓臨床試驗變便宜了。"
     },
     {
      "en": "Biotech VCs are newly eager to fund multi-compound platform companies.",
      "zh": "生技創投最近特別熱衷投資多化合物的平台型公司。"
     },
     {
      "en": "Viral diseases have mostly been eliminated, freeing resources for harder problems.",
      "zh": "病毒疾病大多已被消滅,資源得以轉向更難的問題。"
     }
    ],
    "answer": 0,
    "explain": {
     "en": "Frezza's argument is historical: industry windows are rare and brief, and real work happens in stealth years before the public notices. He pairs this with the moat logic—clinical-trial barriers mean whoever gets through the new window first becomes very hard to displace.",
     "zh": "Frezza 的論證是歷史性的:產業之窗稀有且短暫,而真正的工作早在公眾察覺前就於隱形模式中進行多年。他再搭配護城河邏輯——臨床試驗門檻意味著先穿過新窗口的人,將極難被取代。"
    }
   },
   {
    "q": {
     "en": "How does Balaji Srinivasan expect genomics to reach mainstream adoption?",
     "zh": "Balaji Srinivasan 認為基因體學要如何走向大眾採用?"
    },
    "options": [
     {
      "en": "By hiring a large hospital-facing sales force to push sequencing.",
      "zh": "靠龐大的醫院業務團隊推銷定序服務。"
     },
     {
      "en": "By waiting for governments to mandate universal sequencing.",
      "zh": "等政府強制全民定序。"
     },
     {
      "en": "By making sequencing entirely free to consumers.",
      "zh": "把定序做到對消費者完全免費。"
     },
     {
      "en": "Through a compelling on-ramp—pregnancy screening—after which the marginal cost of using one's genetic data approaches zero.",
      "zh": "透過一個有說服力的入口——孕期篩檢——之後使用自身基因資料的邊際成本便趨近於零。"
     }
    ],
    "answer": 3,
    "explain": {
     "en": "Balaji's analogy: nobody buys a computer just to use Twitter, but once they own one, they do. People overcome their discomfort with sequencing when it is framed as demonstrably useful—here, protecting their children—and adoption compounds from that entry point.",
     "zh": "Balaji 的類比:沒有人為了用 Twitter 而買電腦,但買了電腦之後自然會用。當定序被框架成「明顯有用」——在這裡是為了保護孩子——人們就會跨出舒適圈,而採用會從這個入口開始複利擴散。"
    }
   }
  ]
 },
 {
  "slug": "class-17",
  "layout": "lesson",
  "icon": "menu_book",
  "navLabel": "17",
  "classNo": 17,
  "sourceUrl": "https://blakemasters.tumblr.com/post/24464587112/peter-thiels-cs183-startup-class-17-deep-thought",
  "title": {
   "en": "Deep Thought",
   "zh": "深度思考(Deep Thought)"
  },
  "subtitle": {
   "en": "Thiel's contrarian case that strong AI — huge, strange, and underexplored — is the best opportunity almost nobody is chasing.",
   "zh": "Thiel 的逆勢論點:規模巨大、性質怪異、乏人問津的強 AI,是幾乎沒人在追的最佳機會。"
  },
  "objectives": [
   {
    "en": "Explain why the design space of possible AIs dwarfs all naturally evolved intelligence, and why that makes superhuman AI nearly impossible to picture.",
    "zh": "說明為什麼「所有可能的 AI」的設計空間遠大於自然演化出的所有智慧,以及這為何讓超人 AI 幾乎無法想像。"
   },
   {
    "en": "Use the Luddite vs. Ricardian framing to analyze when technology complements humans — and where the gains-from-trade logic falls off a cliff.",
    "zh": "運用盧德派(Luddite)對李嘉圖派(Ricardian)的框架,分析科技何時是人類的互補品,以及貿易利得的邏輯會在哪裡跌落懸崖。"
   },
   {
    "en": "Reconstruct Thiel's contrarian argument that AI beats biotech 2.0 on engineering freedom, regulatory freedom, and thin competition.",
    "zh": "重建 Thiel 的逆勢論證:AI 在工程自由、監管自由與競爭稀少這三點上勝過生技 2.0(biotech 2.0)。"
   },
   {
    "en": "Compare three live strategies for attacking AI — brain principles, Bayesian data, and intelligence augmentation — and how each plans to defend its lead.",
    "zh": "比較三種進攻 AI 的實戰路線——大腦原理、貝氏資料、智慧增強——以及各自打算如何守住領先。"
   }
  ],
  "sections": [
   {
    "id": "hugeness-of-ai",
    "heading": {
     "en": "1. The Hugeness of AI",
     "zh": "1. AI 之巨大"
    },
    "summary": {
     "en": "All human intelligence is a tiny dot in the space of possible minds, so superhuman AI may be literally unimaginable.",
     "zh": "人類智慧只是「可能心智空間」裡的一個小點,因此超人 AI 可能真的超出想像。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "For one of the course's final classes, Thiel brings in three founders working on the frontier question of computer science: Scott Brown of Vicarious, Eric Jonas of Prior Knowledge, and Bob McGrew of Palantir. The topic is artificial intelligence — in Thiel's view the most important and least discussed frontier of all.",
       "zh": "在課程接近尾聲的這一堂,Thiel 請來三位站在電腦科學最前線的創辦人:Vicarious 的 Scott Brown、Prior Knowledge 的 Eric Jonas,以及 Palantir 的 Bob McGrew。主題是人工智慧(artificial intelligence)——在 Thiel 眼中,這是最重要卻最少被認真討論的前沿。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "We instinctively place intelligence on a human scale running from a mouse to a moron to Einstein. But that whole scale is a tiny dot. Evolution explored only one corner of the design space; engineered minds need not resemble anything nature built, just as a supersonic jet is a bird with titanium wings that no bird could evolve into. A truly superhuman AI might be as unfathomable to us as general relativity is to a mouse — which pushes the discussion into almost theological territory: would such an AI be all-powerful, and would it care about us at all?",
       "zh": "我們直覺上把智慧放在一條人類尺度上:從老鼠、笨蛋到愛因斯坦。但整條尺度其實只是一個小點。演化只探索了設計空間的一個角落;人造心智不必長得像任何自然產物,就像超音速飛機是一隻「鈦合金翅膀的鳥」,而鳥永遠演化不出來。真正超人的 AI 對我們來說,可能就像廣義相對論之於老鼠一樣難以理解——這讓討論幾乎進入神學領域:這個 AI 會是全能的嗎?它會在乎我們嗎?"
      }
     }
    ]
   },
   {
    "id": "strangeness-of-ai",
    "heading": {
     "en": "2. The Strangeness of AI",
     "zh": "2. AI 之怪異"
    },
    "summary": {
     "en": "Trade logic says technology complements humans — but unlike every past technology, AI may have a cliff where that logic collapses.",
     "zh": "貿易邏輯說科技是人類的互補品——但不同於過去所有科技,AI 可能存在一個讓這套邏輯崩潰的懸崖。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "The old Turing-test question was whether machines can think; the newer expectation is that they should also relate to us emotionally. The practical question underneath is displacement: the plow, the printing press, and the cotton gin all displaced workers yet made society richer. Does AI follow that pattern, or break it?",
       "zh": "圖靈測試(Turing Test)的老問題是機器能不能思考;較新的期待則是機器還要能與人產生情感連結。底下真正實際的問題是「取代」:犁、印刷機、軋棉機都曾讓工人失業,卻讓社會整體更富有。AI 會延續這個模式,還是打破它?"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Luddite paradigm: machines destroy livelihoods, so smash them before they destroy you — the textile workers wrecking cotton mills.",
        "Ricardian paradigm: after economist David Ricardo — technology is a trading partner; displaced Detroit workers retrain, the production frontier expands, prices fall, and everyone captures gains from trade."
       ],
       "zh": [
        "盧德派(Luddite)模式:機器摧毀生計,所以要在被摧毀前先砸爛機器——就像搗毀棉紡廠的紡織工人。",
        "李嘉圖派(Ricardian)模式:源自經濟學家 David Ricardo——科技是貿易夥伴;底特律失業的工人可以轉業,生產可能疆界外擴、價格下降,所有人分享貿易利得(gains from trade)。"
       ]
      }
     },
     {
      "type": "p",
      "text": {
       "en": "The Ricardian frame holds so long as AI is only somewhat better than people: comparative advantage creates a division of labor and everyone wins. But if AI becomes vastly superior at everything, the trade frame simply stops applying. Most technologies improve smoothly with no cliff; AI may be the exception — humans stay in control right up until the moment the system goes superhuman, and then lose control entirely.",
       "zh": "只要 AI 只是「比人稍微強一點」,李嘉圖框架就成立:比較利益創造分工,人人受惠。但如果 AI 在所有事情上都遠遠超越人類,貿易框架就直接失效。大多數科技是平滑進步、沒有懸崖;AI 可能是例外——人類一路握有控制權,直到系統跨過超人門檻的那一刻,便一次全部失去。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "Humans don't trade with monkeys or mice.",
       "zh": "人類不會和猴子或老鼠做貿易。"
      }
     }
    ]
   },
   {
    "id": "ai-vs-biotech",
    "heading": {
     "en": "3. The Opportunity: AI vs. Biotech 2.0",
     "zh": "3. 機會所在:AI 對決生技 2.0"
    },
    "summary": {
     "en": "Consensus favored biotech 2.0 over AI in 2012 — which, by Thiel's contrarian logic, is exactly why AI was the better bet.",
     "zh": "2012 年的共識看好生技 2.0 勝過 AI——依 Thiel 的逆勢邏輯,這正是 AI 更值得押注的原因。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Timing is brutally hard to judge in advance: supersonic passenger jets flopped in the '70s, handheld devices in the '90s, and even Siri was arguably still too early in 2012. At a Santa Clara event called 5 Top VCs, 10 Tech Trends, the audience agreed 100% that biology was becoming an information science, voted 92% against electric cars, and split 50-50 on Moore's Law accelerating — yet most assumed AI was much further away than biotech 2.0. Unanimity should make you suspicious; consensus is where returns go to die.",
       "zh": "時機在事前極難判斷:超音速客機在 70 年代失敗、掌上型裝置在 90 年代失敗,連 Siri 在 2012 年都可能還太早。在 Santa Clara 一場名為「5 Top VCs, 10 Tech Trends」的活動上,全場 100% 同意生物學正變成資訊科學、92% 不看好電動車、對摩爾定律(Moore's Law)是否加速則五五分歧——但多數人都認定 AI 比生技 2.0 遙遠得多。全場一致本身就該讓你起疑:共識正是報酬歸零之處。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Both fields may harbor hidden limits. Biotech's dream of indefinite lifespan could collide with a built-in trade-off: unbounded cell division via telomerase looks a lot like cancer, so curing aging might feed the other great killer. AI's leading candidate limit is code complexity — past some threshold, as with decades of Windows, no single person understands the system, debugging becomes near impossible, and code added to improve things makes them worse. The open question for both is whether exponential hopes eventually flatten into an asymptotic plateau.",
       "zh": "兩個領域都可能藏著看不見的極限。生技追求無限壽命的夢想,可能撞上一個內建的取捨:靠端粒酶(telomerase)無限分裂的細胞,看起來就跟癌症沒兩樣——治好老化也許正好餵養另一個頭號殺手。AI 這邊最可能的極限是程式碼複雜度——超過某個門檻(想想累積數十年的 Windows),沒有任何人能理解整個系統,除錯近乎不可能,為了改善而加的程式碼反而讓表現更糟。兩者共同的懸念是:指數式的希望,最終會不會攤平成一條漸近線的現實。"
      }
     },
     {
      "type": "table",
      "head": {
       "en": [
        "Dimension",
        "Biotech 2.0",
        "Strong AI"
       ],
       "zh": [
        "面向",
        "生技 2.0",
        "強 AI"
       ]
      },
      "rows": [
       {
        "en": [
         "Design model",
         "A recipe: sequence-dependent; when the cake fails, the cookbook won't tell you why",
         "A true blueprint: flexible, engineerable, fixable"
        ],
        "zh": [
         "設計模型",
         "像食譜(recipe):步驟順序綁死;蛋糕壞了,光看食譜找不出原因",
         "像真正的藍圖(blueprint):彈性、可工程化、可修正"
        ]
       },
       {
        "en": [
         "Regulation & cost",
         "FDA with 4,000 staff; roughly 10 years and $1.3 billion per drug",
         "Essentially unregulated; ship from a basement for a million dollars, not a billion"
        ],
        "zh": [
         "監管與成本",
         "FDA 有 4,000 名員工;一款新藥約需 10 年、13 億美元",
         "幾乎無監管;從地下室就能出貨,花的是百萬而非十億美元"
        ]
       },
       {
        "en": [
         "Crowd position",
         "Heavily explored + consensus — the worst quadrant of the 2x2",
         "Underexplored + contrarian — decades of broken promises scare rivals away"
        ],
        "zh": [
         "群眾位置",
         "高度探索+共識——2x2 矩陣裡最糟的象限",
         "未被探索+逆勢——數十年的跳票嚇跑了競爭者"
        ]
       }
      ]
     },
     {
      "type": "p",
      "text": {
       "en": "A telling anecdote: PayPal was the first company to offer cryonics as an employee benefit — $50k for neuro, $120k for full body — and enrollment collapsed because a dot-matrix printer couldn't print the policies. Thiel's wry moral: maybe the way to make biotech work is to push harder on AI.",
       "zh": "一則很能說明問題的軼事:PayPal 是第一家把人體冷凍(cryonics)列為員工福利的公司——凍腦 5 萬美元、全身 12 萬美元——結果因為點陣印表機印不出保單,登記作業直接告吹。Thiel 的黑色幽默結論:也許讓生技成功的辦法,就是更用力地推進 AI。"
      }
     }
    ]
   },
   {
    "id": "tackling-ai",
    "heading": {
     "en": "4. Three Ways to Tackle AI",
     "zh": "4. 進攻 AI 的三條路線"
    },
    "summary": {
     "en": "The three guest companies embody three distinct bets: extract the brain's principles, skip the brain with Bayesian math, or augment humans instead.",
     "zh": "三家來賓公司代表三種截然不同的賭注:萃取大腦原理、用貝氏數學繞過大腦,或乾脆選擇增強人類。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Each guest answers the same question — how do you attack AI as a company right now? — differently. Notably, none of them requires waiting for the endgame: each path monetizes intermediate milestones along the way.",
       "zh": "三位來賓對同一個問題——「現在的公司該怎麼進攻 AI?」——給出不同答案。值得注意的是,沒有一條路需要等到終局:每條路線沿途的里程碑本身就能變現。"
      }
     },
     {
      "type": "cards",
      "items": [
       {
        "title": {
         "en": "Vicarious — brain principles",
         "zh": "Vicarious——大腦原理"
        },
        "body": {
         "en": "Extract the neocortex's computational principles (hierarchy, sparse representation) rather than simulate neurons. Start with human-level vision, then image search, robotics, and diagnostics — with generally intelligent machines as the explicit end goal. Unrestricted object recognition alone would be tremendously valuable, so each milestone funds the next.",
         "zh": "萃取新皮質(neocortex)的計算原理(階層結構、稀疏表徵),而不是模擬神經元。先做人類等級的視覺,再延伸到影像搜尋、機器人與醫療診斷——終極目標明白寫著:通用智慧機器。光是不受限的物體辨識就價值連城,所以每個里程碑都能養活下一個。"
        }
       },
       {
        "title": {
         "en": "Prior Knowledge — Bayesian data",
         "zh": "Prior Knowledge——貝氏資料"
        },
        "body": {
         "en": "Skip the brain entirely. Use Bayesian probabilistic models — math deliberately unlike everyday human reasoning — to find patterns and causal structure in data. The five-year goal: machines that find things in data that humans can't, compounding like Linux, where apps build on a core no one has to touch.",
         "zh": "完全繞過大腦。用貝氏機率模型(Bayesian probabilistic models)——一種刻意不同於人類日常推理的數學——在資料中找出模式與因果結構。五年目標:打造能在資料裡找到人類找不到之物的機器,並像 Linux 一樣複利成長——應用蓋在核心之上,沒人需要動到核心。"
        }
       },
       {
        "title": {
         "en": "Palantir — augmentation",
         "zh": "Palantir——智慧增強"
        },
        "body": {
         "en": "Don't chase strong AI at all. Pair human conceptual judgment with machine-scale data processing — the PayPal anti-fraud lesson: humans can't scan millions of transactions, computers can't adapt to shifting adversaries, but the combination can. Squarely the Ricardian gains-from-trade play; it still took three years to land a paying customer.",
         "zh": "根本不追強 AI。把人類的概念判斷力與機器等級的資料處理配成一組——這是 PayPal 反詐騙的教訓:人掃不完數百萬筆交易,電腦跟不上不斷變招的對手,但兩者合體就可以。這正是李嘉圖式貿易利得的標準打法;即便如此,還是花了三年才拿到第一個付費客戶。"
        }
       }
      ]
     }
    ]
   },
   {
    "id": "why-now-and-moats",
    "heading": {
     "en": "5. Why Now, and How to Defend the Win",
     "zh": "5. 為什麼是現在,以及如何守住勝利"
    },
    "summary": {
     "en": "Data, cloud compute, and everyone else's short-termism explain the timing; process, network effects, and compounding leads are the moats.",
     "zh": "資料、雲端運算與其他人的短視解釋了時機;流程、網路效應與複利式領先則構成護城河。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Why now? Data has outrun human analysts, and AWS turned server farms into a credit-card purchase, so the need and the compute finally coincide. Brown adds a striking projection: within 14 years, the world's fastest supercomputer will perform more operations per second than there are neurons in the brains of all living people — so the real race is figuring out what algorithms to run on it. Meanwhile academia rewards marginal papers and big companies shun decade-long projects, leaving few teams even attempting a Manhattan Project for strong AI.",
       "zh": "為什麼是現在?資料量早已超出人類分析師的負荷,而 AWS 把伺服器機房變成刷卡就能買到的服務——需求與算力終於交會。Brown 還丟出一個驚人的推算:14 年內,世界最快的超級電腦每秒運算次數,將超過全人類大腦神經元的總數——所以真正的競賽是想清楚要在上面跑什麼演算法。同時,學術界獎勵邊際改良的論文、大公司迴避十年等級的計畫,結果幾乎沒有團隊敢嘗試強 AI 的曼哈頓計畫(Manhattan Project)。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Why copy the brain at all? Brown's answer is the airplane analogy: the Wright brothers didn't need detailed bird physiology — they needed the principles of lift. Likewise Vicarious hunts for the cortex's governing principles. Ferret experiments hint the bet is sound: rewire optic nerves into the auditory cortex and the ferrets learn to see, suggesting one common cortical algorithm underlies vision, hearing, and perhaps language.",
       "zh": "那為什麼要參考大腦?Brown 的回答是飛機類比:萊特兄弟不需要鳥類生理學的細節,他們需要的是升力的原理。同樣地,Vicarious 要找的是大腦皮質的支配性原理。雪貂(ferret)實驗暗示這個賭注是對的:把視神經改接到聽覺皮質,雪貂照樣學會「看」——顯示視覺、聽覺、甚至語言背後,可能是同一套皮質演算法。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "You can't succeed by making a thing that has feathers and poops.",
       "zh": "你不可能靠做出一個有羽毛、還會大便的東西而成功。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Process as moat: like the Wrights' kite-to-glider-to-flyer discipline, rivals can copy your artifact but not the experimental process that produces the next one.",
        "Network effects: become the AWS of image recognition — every new user makes the system better and the feedback loop more entrenched.",
        "Escape velocity: keep out-innovating so the lead compounds; while rivals copy V1, you've applied the tech to hearing and language and shipped an improved V1 with more data behind it.",
        "Talent as filter: recruit by asking candidates what they care about — people serious about intelligent machines select themselves in."
       ],
       "zh": [
        "以流程為護城河:就像萊特兄弟從風箏、滑翔機到動力飛行的嚴謹實驗紀律,對手抄得走成品,抄不走能產出下一個成品的實驗流程。",
        "網路效應:成為影像辨識界的 AWS——每多一個使用者,系統就更強,回饋迴圈也更難撼動。",
        "脫離速度(escape velocity):持續創新讓領先複利累積;當對手還在抄 V1,你已把技術延伸到聽覺與語言,並帶著更多資料推出更強的 V1。",
        "以人才為濾網:面試時問候選人「你在乎什麼」——真正認真想打造智慧機器的人會自己選進來。"
       ]
      }
     }
    ]
   },
   {
    "id": "danger-baggage-timing",
    "heading": {
     "en": "6. Danger, Baggage, and Timing",
     "zh": "6. 危險、歷史包袱與時機"
    },
    "summary": {
     "en": "The founders discount doomsday, treat AI's broken promises as their moat, and close on why bad timing kills companies, not ideas.",
     "zh": "創辦人們淡化末日論、把 AI 的歷史跳票當成護城河,最後點出:糟糕的時機殺死的是公司,不是想法。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "On existential risk, Jonas jokes he worries more about getting cash-flow positive than about Skynet — though he plans to name his kid John Connor. The serious position: intelligence is orthogonal to volition. An oracle that reasons about facts is a neutral tool, and fearing it conflates having intelligence with having a will. Still, Brown says the work deserves the reverence you'd bring to building bombs or super-viruses, and McGrew notes computers can threaten civil liberties well short of strong AI — which is why Palantir works with privacy lawyers and civil-liberties advocates from the start.",
       "zh": "談到存亡風險,Jonas 開玩笑說他比較擔心現金流轉正,而不是天網(Skynet)——雖然他打算幫小孩取名 John Connor。認真的立場是:智慧與意志(volition)是彼此正交的。一個只會就事實推理的神諭(oracle)是中性工具,恐懼它等於把「擁有智慧」和「擁有意志」混為一談。話雖如此,Brown 認為這項工作值得用「造炸彈或超級病毒」的敬畏心對待;McGrew 則指出,電腦遠不必到強 AI 就可能威脅公民自由——所以 Palantir 從一開始就與隱私律師和公民自由倡議者合作。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "AI's real handicap is its baggage: the War on Cancer spent 40 years to end up arguably further from victory; an infamous early MIT summer project expected to crack AI in months; the 1980s insisted AI was just around the corner. The rebuttal is twofold. First, humanity itself is an existence proof that general intelligence is physically possible — unlike faster-than-light travel, there's no theoretical barrier. Second, the smartest people in the field once declared heavier-than-air flight impossible, right up until the Wrights flew.",
       "zh": "AI 真正的包袱是歷史:抗癌戰爭(War on Cancer)打了 40 年,離勝利卻可能更遠;MIT 早年一個惡名昭彰的暑期專案,以為幾個月就能解決 AI;1980 年代則堅稱 AI 近在眼前。反駁有兩層。第一,人類本身就是「通用智慧在物理上可行」的存在證明——不像超光速旅行,這裡沒有理論屏障。第二,當年領域裡最聰明的人也曾斷言比空氣重的飛行器不可能上天,直到萊特兄弟飛起來為止。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Timing errors kill companies, not ideas. Project Xanadu tried to network the world's computers from 1963 until it ran out of money in 1992; Netscape arrived the very next year and opened the Internet era. Thiel closes with Columbus, who talked his mutinous crew into just three more days at sea — and landed on a continent he wasn't looking for.",
       "zh": "時機的錯誤殺死的是公司,不是想法。Project Xanadu 從 1963 年起就想把全世界的電腦連起來,直到 1992 年燒光資金;隔年 Netscape 問世,開啟了網際網路時代。Thiel 用哥倫布收尾:他說服快要叛變的船員再撐三天——結果登上了一塊他原本沒在找的大陸。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "Which pretty much makes North America the biggest pivot ever.",
       "zh": "這大概讓北美洲成為史上最大的一次轉向(pivot)。"
      }
     }
    ]
   }
  ],
  "factcheck": [
   {
    "claim": {
     "en": "Vicarious presented itself as the serious long-term bet on generally intelligent machines, working backward from a brain-inspired vision system through commercially valuable milestones.",
     "zh": "Vicarious 自許為打造通用智慧機器的認真長期賭注,從仿大腦的視覺系統出發,靠沿途具商業價值的里程碑倒推前進。"
    },
    "now": {
     "en": "Vicarious raised about $250 million from backers including Bezos, Musk, and Zuckerberg but never reached general intelligence; in April 2022 Alphabet's Intrinsic acquired it for robotics software, with a team under co-founder Dileep George joining DeepMind.",
     "zh": "Vicarious 從 Bezos、Musk、Zuckerberg 等人手中募得約 2.5 億美元,但始終未達成通用智慧;2022 年 4 月 Alphabet 旗下的 Intrinsic 收購其機器人軟體業務,共同創辦人 Dileep George 則率隊加入 DeepMind。"
    },
    "sourceTitle": "TechCrunch: Intrinsic acquires robotic software firm Vicarious (2022)",
    "sourceUrl": "https://techcrunch.com/2022/04/22/alphabet-owned-intrinsic-is-acquiring-fellow-robotic-software-firm-vicarious/"
   },
   {
    "claim": {
     "en": "Eric Jonas framed Prior Knowledge as a compounding 5-to-15-year bet: Bayesian machines that find things in data humans can't, growing like Linux.",
     "zh": "Eric Jonas 把 Prior Knowledge 定位成一場 5 到 15 年的複利賭注:能在資料中找到人類找不到之物的貝氏機器,像 Linux 一樣成長。"
    },
    "now": {
     "en": "Just months after this class, Salesforce acquired Prior Knowledge in November 2012 for roughly $24 million; the technology became an internal predictive-analytics project and Jonas served as Salesforce's Chief Predictive Scientist until 2014.",
     "zh": "這堂課才過幾個月,Salesforce 就在 2012 年 11 月以約 2,400 萬美元收購 Prior Knowledge;該技術成為公司內部的預測分析專案,Jonas 出任 Salesforce 首席預測科學家至 2014 年。"
    },
    "sourceTitle": "TechCrunch: Prior Knowledge becomes a Salesforce skunkworks project (2013)",
    "sourceUrl": "https://techcrunch.com/2013/08/11/prior-knowledge-goes-from-techcrunch-disrupt-finalist-to-salesforce-com-skunk-works-project/"
   },
   {
    "claim": {
     "en": "Bob McGrew argued intelligence augmentation beats chasing strong AI, estimating that machines capable of human-like adversarial thinking were roughly 20 years away.",
     "zh": "Bob McGrew 主張智慧增強勝過追逐強 AI,並估計能像人類一樣進行對抗性思考的機器還要大約 20 年。"
    },
    "now": {
     "en": "McGrew himself switched sides of the debate: he joined OpenAI in 2017 and rose to Chief Research Officer, helping lead ChatGPT, GPT-4, and the o1 reasoning model before departing in late 2024 — and AI flipped from contrarian backwater to the industry's dominant consensus.",
     "zh": "McGrew 本人後來換了立場:他 2017 年加入 OpenAI,升任首席研究長,參與領導 ChatGPT、GPT-4 與 o1 推理模型,直到 2024 年底離開——而 AI 也從逆勢冷門翻轉為整個產業的主流共識。"
    },
    "sourceTitle": "Sequoia Capital Training Data podcast: Bob McGrew",
    "sourceUrl": "https://sequoiacap.com/podcast/training-data-bob-mcgrew/"
   }
  ],
  "quiz": [
   {
    "q": {
     "en": "In Thiel's explored-vs-consensus 2x2 matrix, where did AI sit in 2012 — and why did that matter?",
     "zh": "在 Thiel 的「探索程度 × 共識程度」2x2 矩陣中,2012 年的 AI 位在哪一格?這為什麼重要?"
    },
    "options": [
     {
      "en": "Heavily explored, consensus — everyone agreed it was the next big thing",
      "zh": "高度探索、共識——所有人都同意它是下一個大機會"
     },
     {
      "en": "Underexplored, contrarian — decades of broken promises scared rivals off, leaving thin competition",
      "zh": "未被探索、逆勢——數十年的跳票嚇跑了對手,競爭稀少"
     },
     {
      "en": "Underexplored, consensus — everyone agreed but no one acted",
      "zh": "未被探索、共識——大家都同意,卻沒有人行動"
     },
     {
      "en": "Heavily explored, contrarian — many teams pursued it in secret",
      "zh": "高度探索、逆勢——許多團隊在檯面下祕密進行"
     }
    ],
    "answer": 1,
    "explain": {
     "en": "Biotech 2.0 sat in the heavily-explored consensus cell — the worst quadrant, since crowded agreement competes away returns. AI's baggage of unfulfilled promises kept rivals away, and by Thiel's contrarian logic that scarcity of competition was precisely the opportunity.",
     "zh": "生技 2.0 位在「高度探索的共識」那一格——最糟的象限,因為擁擠的共識會把報酬競爭殆盡。AI 的歷史包袱讓對手卻步,而依 Thiel 的逆勢邏輯,競爭稀少本身正是機會所在。"
    }
   },
   {
    "q": {
     "en": "According to the class, when does the Ricardian gains-from-trade case for AI break down?",
     "zh": "根據這堂課,李嘉圖式「貿易利得」對 AI 的論證會在什麼時候失效?"
    },
    "options": [
     {
      "en": "When AI is slightly better than humans at a few tasks",
      "zh": "當 AI 在少數任務上比人類稍強時"
     },
     {
      "en": "When AI starts facing FDA-style regulation",
      "zh": "當 AI 開始面臨類似 FDA 的監管時"
     },
     {
      "en": "When AI becomes vastly superior at everything, so trading with humans stops making sense",
      "zh": "當 AI 在所有事情上都遠遠超越人類,與人類交易不再有意義時"
     },
     {
      "en": "When displaced workers refuse to retrain, as the Luddites did",
      "zh": "當失業工人像盧德派一樣拒絕轉業時"
     }
    ],
    "answer": 2,
    "explain": {
     "en": "Comparative advantage thrives on marginal differences — a somewhat-better AI creates a division of labor that enriches everyone. But at a vast gap, humans are to AI what mice are to humans: there is no trade. Unlike most technologies, AI may have a cliff where control is total one moment and gone the next.",
     "zh": "比較利益靠的是「差距不大」——稍強的 AI 會創造分工、讓所有人受惠。但當差距變得巨大,人類之於 AI 就像老鼠之於人類:根本沒有貿易可言。與多數科技不同,AI 可能存在一個懸崖:前一刻控制權完好,下一刻全數消失。"
    }
   },
   {
    "q": {
     "en": "Which strategy did Bob McGrew's Palantir represent, and what evidence supported it?",
     "zh": "Bob McGrew 的 Palantir 代表哪一種策略?支持它的證據是什麼?"
    },
    "options": [
     {
      "en": "Extracting brain principles, supported by ferret rewiring experiments",
      "zh": "萃取大腦原理,證據是雪貂神經改接實驗"
     },
     {
      "en": "Bayesian predictive databases, supported by the explosion of cloud data",
      "zh": "貝氏預測資料庫,證據是雲端資料爆炸性成長"
     },
     {
      "en": "Full brain emulation, supported by Deep Blue defeating Kasparov",
      "zh": "完整大腦模擬,證據是深藍(Deep Blue)擊敗 Kasparov"
     },
     {
      "en": "Intelligence augmentation, supported by human-computer chess teams beating both lone grandmasters and lone computers",
      "zh": "智慧增強,證據是人機組隊在西洋棋中同時擊敗單獨的大師與單獨的電腦"
     }
    ],
    "answer": 3,
    "explain": {
     "en": "McGrew argued for augmentation over strong AI: after Deep Blue beat Kasparov in 1997, the best chess entity became neither human nor machine but decent players paired with computers. Palantir applies the same logic to data analysis — humans supply concepts, machines supply scale.",
     "zh": "McGrew 主張增強而非強 AI:1997 年深藍擊敗 Kasparov 之後,棋力最強的其實既不是人也不是機器,而是「普通好手加電腦」的組合。Palantir 把同樣邏輯用在資料分析上——人類出概念,機器出規模。"
    }
   }
  ]
 },
 {
  "slug": "class-18",
  "layout": "lesson",
  "icon": "menu_book",
  "navLabel": "18",
  "classNo": 18,
  "sourceUrl": "https://blakemasters.tumblr.com/post/24578683805/peter-thiels-cs183-startup-class-18-notes-essay",
  "title": {
   "en": "Founder as Victim, Founder as God",
   "zh": "創辦人是受害者,也是神"
  },
  "subtitle": {
   "en": "Founders live at both extremes at once: the same crowd that crowns them as gods later tears them down as scapegoats.",
   "zh": "創辦人同時站在兩個極端:同一群人先把他捧成神,之後又把他當代罪羔羊拉下神壇。"
  },
  "objectives": [
   {
    "en": "Explain why founder traits follow an inverted normal distribution — extreme insider and extreme outsider in the same person.",
    "zh": "解釋為什麼創辦人的特質呈現「反轉的常態分布(inverted normal distribution)」——同一個人既是極端的內部人,也是極端的外部人。"
   },
   {
    "en": "Apply the scapegoat mechanism from archaic sacrifice to explain why societies first deify and then destroy their most extreme figures.",
    "zh": "運用古代獻祭的「代罪羔羊機制(scapegoat mechanism)」,說明社會為什麼先神化、再毀滅最極端的人物。"
   },
   {
    "en": "Spot modern versions of ritual sacrifice in celebrity culture, politics, and the rise-and-fall arcs of tech founders.",
    "zh": "辨認獻祭儀式在現代的變形:名人文化、政治,以及科技創辦人大起大落的軌跡。"
   },
   {
    "en": "Use concrete tactics — co-founders, title design, succession insurance, perpetual innovation — to extend the founding and survive the boardroom trial.",
    "zh": "運用具體戰術——共同創辦人、頭銜設計、接班保險、持續創新——延長創業時刻,並在董事會的「審判」中活下來。"
   }
  ],
  "sections": [
   {
    "id": "founder-traits",
    "heading": {
     "en": "1. The Paradoxical Traits of Founders",
     "zh": "1. 創辦人的矛盾特質"
    },
    "summary": {
     "en": "Founders are not just unusual — they cluster at both extremes of every trait at once, and feedback loops push them further out.",
     "zh": "創辦人不只是「不尋常」——他們同時佔據每項特質的兩個極端,而且回饋循環會把他們推得更極端。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Start with PayPal's six founders: four were born outside the US, five were 23 or younger, and four had built bombs in high school. One had fled the collapsing Soviet Union and was briefly a citizen of no country; another grew up in a trailer park; another took a 66% pay cut to skip investment banking and join. Is this coincidence, or are founders systematically extreme people?",
       "zh": "從 PayPal 的六位創辦人說起:四位在美國以外出生、五位不到 23 歲、四位高中時做過炸彈。其中一位從解體中的蘇聯逃出來,一度是無國籍者;一位在拖車屋(trailer park)長大;還有一位為了加入 PayPal 放棄投資銀行工作,自砍 66% 的薪水。這是巧合,還是創辦人本來就是系統性的極端人物?"
      }
     },
     {
      "type": "table",
      "head": {
       "en": [
        "Model",
        "What it implies about founders"
       ],
       "zh": [
        "模型",
        "對創辦人的解讀"
       ]
      },
      "rows": [
       {
        "en": [
         "Normal distribution",
         "Most people sit in the middle; founders would be basically unremarkable — clearly wrong."
        ],
        "zh": [
         "常態分布",
         "大多數人落在中間,創辦人應該平凡無奇——顯然不對。"
        ]
       },
       {
        "en": [
         "Fat-tailed distribution",
         "Founders sit further out in the tails than normal people — closer, but still understates it."
        ],
        "zh": [
         "肥尾分布(fat-tailed)",
         "創辦人比一般人更靠近尾端——比較接近了,但仍低估現實。"
        ]
       },
       {
        "en": [
         "Inverted normal distribution",
         "Both tails are extremely fat: the same founder is an extreme insider AND an extreme outsider at once."
        ],
        "zh": [
         "反轉的常態分布",
         "兩端的尾巴都極肥:同一位創辦人同時是極端的內部人「和」極端的外部人。"
        ]
       }
      ]
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Natural: some founders really are born different.",
        "Nurtured: environment and cultural feedback amplify the difference.",
        "Self-created: founders learn to exaggerate their own extremes.",
        "Other-created: crowds project and inflate the myth — and all four feed each other in a loop, so founders end up more extreme than they started."
       ],
       "zh": [
        "天生(natural):有些創辦人真的天生就不一樣。",
        "後天(nurtured):環境與文化回饋放大了差異。",
        "自我塑造(self-created):創辦人學會誇大自己的極端。",
        "他人塑造(other-created):群眾投射並吹大神話——四種力量互相餵養、形成循環,創辦人於是變得比一開始更極端。"
       ]
      }
     },
     {
      "type": "p",
      "text": {
       "en": "The examples write themselves. Richard Branson is perpetually crowned 'king' of something, lion mane included. Jack Dorsey swung from nose ring and unkempt hair to Prada suits — extreme outsider branding to extreme insider branding. Sean Parker cycled from teenage hacker with criminal associations to the cover of Forbes, with Justin Timberlake playing him on screen. And Lady Gaga's 'Born This Way' is itself the question: born, made, self-made, or crowd-made?",
       "zh": "例子俯拾皆是。Richard Branson 永遠被封為某種「王」,還留著一頭獅子鬃毛;Jack Dorsey 從鼻環、亂髮擺盪到 Prada 西裝——品牌形象從極端外部人跳到極端內部人;Sean Parker 從有犯罪陰影的青少年駭客,一路循環到《富比士》封面,還讓賈斯汀(Justin Timberlake)在電影裡飾演他;而 Lady Gaga 的《Born This Way》本身就是那個問題:是天生、養成、自我打造,還是群眾打造?"
      }
     }
    ]
   },
   {
    "id": "mythology",
    "heading": {
     "en": "2. Mythology: Gods and Monsters Are the Same People",
     "zh": "2. 神話:神與怪物是同一批人"
    },
    "summary": {
     "en": "Classical myth heroes map onto the same inverted curve — supreme insiders who are simultaneously ultimate outsiders, like Rome's founder Romulus.",
     "zh": "古典神話英雄正好落在同一條反轉曲線上——他們是至高的內部人,同時也是徹底的外部人,羅馬創建者羅慕路斯(Romulus)就是典型。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Overlay mythology on the inverted curve and it fits disturbingly well: in most myths the line between god and monster is thin, and often they are the same figure. Were the heroes born extreme, made extreme, or exaggerated into legend? The same four-way question applies.",
       "zh": "把神話疊到反轉曲線上,吻合得令人不安:多數神話裡,神與怪物只有一線之隔,甚至根本是同一個角色。英雄是天生極端、被養成極端,還是被誇大成傳奇?同樣那四個問題再度適用。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Oedipus: abandoned infant and foreigner, yet the brilliant king who solved the Sphinx's riddle — then the ultimate transgressor.",
        "Achilles: incredibly strong and perfect, except exactly where he was weak and flawed.",
        "Romulus and Remus: orphans raised by a wolf — total outsiders — who became Rome's founders and lawgivers."
       ],
       "zh": [
        "伊底帕斯(Oedipus):被遺棄的嬰兒、外邦人,卻是解開人面獅身像謎題的天才國王——最後又成了終極的踰越者。",
        "阿基里斯(Achilles):強大而近乎完美,唯獨在他脆弱有缺陷的那一點上例外。",
        "羅慕路斯與雷穆斯(Romulus and Remus):狼養大的孤兒——徹底的外部人——後來卻成了羅馬的創建者與立法者。"
       ]
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Romulus killed Remus for jumping over the city's boundary line, then codified the rule in blood: whoever leaps Rome's walls dies. Was Romulus a criminal outlaw or the lawgiver who defined Rome? Both. Even his death is doubled: Livy records that he vanished in a great storm and was proclaimed a god; a rival account says the senators killed him in the chaos and disposed of the body. Founder-as-god and founder-as-victim are the same story told twice.",
       "zh": "雷穆斯跳過羅馬的界線,羅慕路斯殺了他,並用鮮血立下規矩:凡跳過羅馬城牆者死。羅慕路斯是罪犯,還是定義羅馬的立法者?兩者皆是。連他的死也有兩個版本:李維(Livy)記載他在暴風雨中消失、被尊奉為神;另一個版本則說元老們趁亂殺了他、處理掉屍體。「創辦人是神」與「創辦人是受害者」,是同一個故事的兩種講法。"
      }
     }
    ]
   },
   {
    "id": "scapegoat-mechanism",
    "heading": {
     "en": "3. The Scapegoat Mechanism",
     "zh": "3. 代罪羔羊機制"
    },
    "summary": {
     "en": "Archaic societies escaped all-against-all chaos by uniting against a single insider-outsider victim — and monarchy itself may descend from scapegoats who postponed their execution.",
     "zh": "古代社會靠著團結起來對付一個「內外兼具」的受害者,逃出人人相殘的混亂——而君主制本身,可能就源自學會拖延處決的代罪羔羊。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Cultures without institutions kept sliding into a war of all against all — a dynamic Thiel notes has a striking parallel in startup life. The way out was not the Enlightenment's rational social contract; it was polarizing all hostility onto one victim. Killing the scapegoat converted chaos into peace, so successful cultures ritualized it: scheduled sacrifice instead of waiting for random collapse. Selection methods varied — a charcoal-marked piece of cake at Gaelic Beltane fires, or a Gaulish footrace where the slowest man was offered up — but the dynamic was identical.",
       "zh": "沒有制度的文化不斷滑向人人相殘的戰爭——Thiel 指出這與新創圈的處境驚人地相似。出路不是啟蒙運動想像的理性社會契約,而是把所有敵意集中到一個受害者身上。殺掉代罪羔羊能把混亂轉化為和平,所以成功的文化把它儀式化:定期獻祭,而不是等待失控的崩潰。挑選方式各異——蓋爾人在 Beltane 火祭中抽到炭黑記號蛋糕的人,或高盧人賽跑中跑最慢的人——但機制完全相同。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "The victim can't be a random average person: the crowd would see itself in him and fear being next. The workable scapegoat must be outsider enough to be safely 'other,' yet insider enough to be plausibly blamed for the community's internal strife. The perfect victim occupies both extremes — exactly the founder's profile. And because his death buys peace, he is judged omnimalevolent and omnibenevolent at once.",
       "zh": "受害者不能是隨機的普通人:群眾會在他身上看見自己,害怕下一個就輪到自己。可行的代罪羔羊必須「外」到足以被安全地視為異類,又「內」到足以被合理地怪罪為內部紛爭的元兇。完美的受害者同時佔據兩個極端——恰恰是創辦人的側寫。而因為他的死換來和平,他被同時判定為至惡(omnimalevolent)與至善(omnibenevolent)。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "Every king was a living god. Every god was a murdered king.",
       "zh": "「每個國王都是還活著的神;每個神都是被殺掉的國王。」"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Monarchy, on this reading, descends from scapegoats who figured out how to delay their own execution: Aztec god-kings were crowned and then sacrificed; 19th-century Zulu kings were deposed and killed once their hair turned white — which is why they begged British traders for hair dye. Aristotle read tragedy as political technology: watching the great fall converts commoners' envy into pity, so they go home instead of plotting. Revolutions run the machine in reverse — France's revolutionaries refused to give Louis XVI a trial, because a verdict of innocent would make the people guilty; the king had to be slaughtered without one.",
       "zh": "照這個讀法,君主制的祖先就是學會拖延自己處決的代罪羔羊:阿茲提克(Aztec)的神王被加冕後仍難逃獻祭;十九世紀的祖魯(Zulu)國王一旦白髮蒼蒼便被廢黜處死——所以他們向英國商人討的不是槍砲,而是染髮劑。亞里斯多德把悲劇讀成政治技術:看著偉人殞落,平民的嫉妒轉化為憐憫,回家安睡而不再密謀。革命則是把機器倒著開——法國革命者拒絕審判路易十六,因為一旦判他無罪,有罪的就是人民;所以國王必須不經審判就被處決。"
      }
     }
    ]
   },
   {
    "id": "sacrifice-today",
    "heading": {
     "en": "4. Sacrifice Endures: Celebrities, Presidents, Tech Founders",
     "zh": "4. 獻祭從未停止:名人、總統、科技創辦人"
    },
    "summary": {
     "en": "We still anoint kings and devour them — in pop culture, in politics, and in the rise-fall-resurrection arcs of Gates, Hughes, and Jobs.",
     "zh": "我們仍在加冕君王、再將其吞噬——在流行文化、政治,以及蓋茲、休斯、賈伯斯的興衰與復活軌跡中。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "We say monarchy is dead, yet we literally anoint our stars as kings: the King of Rock, the King of Pop, the Princess of Pop. The crowd that crowns is the crowd that devours. At her peak, Britney Spears drove roughly $100 million of a $400-million-a-year paparazzi industry, with one to two thousand people earning a living by chasing her. And dead stars get resurrected as god-kings — Elvis, Michael Jackson, and the 'Forever 27' musicians who died young and live on as icons, much as Alexander the Great drank himself to death at 32 yet remains forever the great conqueror.",
       "zh": "我們嘴上說君主制已死,卻名符其實地為明星封王:搖滾之王、流行之王、流行小天后。加冕的群眾就是吞噬的群眾。全盛時期的布蘭妮(Britney Spears)一個人撐起每年四億美元狗仔產業中約一億美元的產值,一、兩千人靠追拍她維生。而死去的明星則復活成神王——貓王、麥可傑克森,以及英年早逝、化為永恆符號的「永遠 27 俱樂部(Forever 27 Club)」樂手;正如亞歷山大大帝 32 歲把自己喝死,卻永遠是偉大的征服者。"
      }
     },
     {
      "type": "cards",
      "items": [
       {
        "title": {
         "en": "Bill Gates",
         "zh": "比爾・蓋茲(Bill Gates)"
        },
        "body": {
         "en": "The '90s 'Bill Gates is god' era: Harvard insider, dropout outsider, nerd glasses possibly accentuated on purpose. Then rival CEOs formed a de facto 'We Hate Gates' club, the DOJ moved in, and the fall came fast. Thiel's dark reading: the charity circuit is Gates' ongoing punishment — paying tribute to the very people who ganged up on him.",
         "zh": "九〇年代是「蓋茲即神」的年代:哈佛的內部人、輟學的外部人,那副書呆子眼鏡可能還是刻意強化的。接著對手 CEO 們組成實質上的「反蓋茲俱樂部」,司法部(DOJ)出手,墜落來得飛快。Thiel 的黑暗解讀:慈善晚宴就是蓋茲持續進行中的懲罰——他得掏錢進貢給當年圍剿他的同一批人。"
        }
       },
       {
        "title": {
         "en": "Howard Hughes",
         "zh": "霍華・休斯(Howard Hughes)"
        },
        "body": {
         "en": "Parallel careers in movies and aviation made him America's richest man by 45. His favorite trick was playing crazy so nobody would dare compete — he even claimed a December 25 birthday. Had he died in his 1946 plane crash he'd be remembered as the century's greatest entrepreneur; instead came painkillers and 30 years sealed in penthouses, refusing to eat.",
         "zh": "電影與航空的雙軌事業讓他 45 歲就成為全美首富。他最愛的把戲是裝瘋——沒人敢跟瘋子競爭——甚至宣稱自己生於 12 月 25 日。如果他死於 1946 年那場墜機,將以「二十世紀最偉大的創業家」留名;實際上迎來的卻是止痛藥成癮,以及封閉在頂層公寓、拒絕進食的三十年。"
        }
       },
       {
        "title": {
         "en": "Steve Jobs",
         "zh": "史蒂夫・賈伯斯(Steve Jobs)"
        },
        "body": {
         "en": "College dropout, crazy diets, phone phreaking, LSD — the classic extreme profile. Exiled from Apple in 1985 for a 'normal adult' CEO, he returned in 1997 to a 14-year arc that remade the company. The options-backdating scandal stayed a footnote — partly, Thiel suggests, because there is little power in scapegoating a man whose life is visibly waning.",
         "zh": "大學輟學、極端飲食、電話飛客(phone phreaking)、LSD——經典的極端側寫。1985 年他被逐出 Apple,換上一位「正常的大人」CEO;1997 年回歸後展開重塑公司的十四年弧線。選擇權回溯(options backdating)醜聞最後只是註腳——Thiel 暗示,部分原因是:對一個生命正在明顯消逝的人,獻祭不再有力量。"
        }
       }
      ]
     },
     {
      "type": "quote",
      "text": {
       "en": "Towering genius disdains a beaten path. — Lincoln, Lyceum Address",
       "zh": "「巍然的天才不屑走前人踏平的路。」——林肯,學園演說(Lyceum Address)"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Politics runs the same script. Lincoln — log-cabin outsider, probably the poorest president, who may even have uglified himself with that beard — warned at age 28 that America's founding was over and that Alexander-scale ambition would never settle for a seat in Congress. His assassin reenacted Caesar's murder, shouting 'Sic semper tyrannis.' Four of 44 US presidents have been assassinated in office and four more nearly were — roughly a 9% fatality rate worth pondering if the throne is your goal.",
       "zh": "政治跑的是同一套劇本。林肯——小木屋出身的外部人、大概是最窮的總統,甚至可能用那把怪鬍子刻意把自己弄得更醜——28 歲就警告:美國的建國時刻已經結束,而亞歷山大等級的野心絕不會滿足於一個國會席位。刺殺他的人重演了凱撒之死,高喊「Sic semper tyrannis(暴君下場皆如此)」。美國 44 位總統中有 4 位在任內遇刺身亡、另外 4 位險遭不測——約 9% 的死亡率,想坐上王座的人值得深思。"
      }
     }
    ]
   },
   {
    "id": "extending-the-founding",
    "heading": {
     "en": "5. Extending the Founding, Surviving the Trial",
     "zh": "5. 延長創業時刻,在審判中活下來"
    },
    "summary": {
     "en": "Startups work best as quasi-monarchies, so the founder's job is to survive the boardroom trial — through title design, co-founders, succession insurance, and perpetual innovation.",
     "zh": "新創以「準君主制」運作得最好,所以創辦人的任務是在董事會的審判中活下來——靠頭銜設計、共同創辦人、接班保險與持續創新。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Startups are monarchies in all but name: nobody votes on the org chart. Thiel's spectrum: pure democracy fails because putting everything to a vote yields lowest-common-denominator results, while pure dictatorship fails because nobody talented will join. The best arrangement is quasi-mythological — a king-like founder who can do more than a democratic ruler but remains far from all-powerful. As companies mature they drift toward constitutional republics, and once process replaces substance, much less gets done.",
       "zh": "新創其實就是沒掛名的君主制:組織圖從來不是投票投出來的。Thiel 的光譜是:純民主行不通,因為凡事表決只會得到最小公分母的結果;純獨裁也行不通,因為找不到人才願意加入。最好的安排是「準神話式」的結構——一位權力大於民主領袖、卻遠非全能的王者型創辦人。公司成熟後會漂向立憲共和,而一旦流程取代了實質創新,能做成的事就大幅減少。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "Your job as founder is to survive the trial.",
       "zh": "「身為創辦人,你的任務就是在審判中活下來。」"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "Treat every board meeting as a trial: the board is a jury (probably not of your peers) or a mob seeking a victim — the most fatal wounds come from internal, not external conflict.",
        "Downplay the dangerous title: after Caesar's murder, Augustus never called himself king, only 'first among equals' — founders can likewise de-emphasize the CEO crown.",
        "Buy succession insurance: at PayPal, Thiel got David Sacks made COO — the natural replacement slot — partly because Sacks was perceived as crazier than Thiel himself.",
        "Have co-founders: a mob needs a singular victim, so pairs like Hewlett-Packard, Moore-Noyce, and Page-Brin are structurally much harder to scapegoat.",
        "Keep innovating: the founding lasts only as long as genuine technological creation does, so build strategies to extend that moment."
       ],
       "zh": [
        "把每一場董事會都當成審判:董事會是陪審團(而且多半不是你的同儕),或是一群正在物色祭品的暴民——最致命的傷口來自內部衝突,而非外部。",
        "淡化危險的頭銜:凱撒被刺後,奧古斯都(Augustus)從不自稱國王,只稱「同儕之首(first among equals)」——創辦人同樣可以淡化 CEO 這頂王冠。",
        "買好接班保險:在 PayPal,Thiel 推動讓 David Sacks 出任營運長(COO)——那是天然的替補席——部分原因是大家覺得 Sacks 比 Thiel 更瘋。",
        "找共同創辦人:暴民需要單一的受害者,所以 Hewlett-Packard、Moore-Noyce、Page-Brin 這種組合在結構上更難被獻祭。",
        "持續創新:創業時刻只在真正的技術創造持續時存在,所以要有意識地設計延長它的策略。"
       ]
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Apple's 12 lost years under conventional CEOs versus Jobs' 1997–2011 arc show the power of the returning king — though resurrections come only after a death. Thiel closes with a heresy: society is organized to reward people who play by the rules, but perhaps the people who don't play by the rules are, in some key way, the most important — and perhaps we should let them off the hook. The whole argument, he notes, is built on René Girard's theory of scapegoating and mimesis.",
       "zh": "Apple 在傳統 CEO 治下迷失的十二年,對照賈伯斯 1997–2011 年的弧線,說明了「王者歸來」的力量——只是復活必先經歷死亡。Thiel 以一句異端作結:社會的預設是獎勵守規矩的人,但也許不守規矩的人,在某個關鍵意義上才是最重要的——也許我們應該放他們一馬。他並註明,整套論證奠基於 René Girard 的代罪羔羊與模仿(mimesis)理論。"
      }
     }
    ]
   }
  ],
  "factcheck": [
   {
    "claim": {
     "en": "Thiel warned founders to treat every board meeting as a trial: the board is a mob looking for a sacrificial victim, and the most fatal wounds come from internal, not external conflict.",
     "zh": "Thiel 警告創辦人要把每場董事會當成審判:董事會是一群物色祭品的暴民,而最致命的傷口來自內部而非外部衝突。"
    },
    "now": {
     "en": "In November 2023 OpenAI's board abruptly fired founder-CEO Sam Altman; after over 700 employees threatened to quit and Microsoft applied pressure, he was reinstated just five days later with the old board replaced — a public replay of the founder's trial and the return of the king.",
     "zh": "2023 年 11 月,OpenAI 董事會突然開除創辦人執行長 Sam Altman;在七百多名員工威脅離職、微軟施壓之後,他僅僅五天後就復職,原董事會反遭撤換——創辦人的審判與王者歸來在眾目睽睽下重演。"
    },
    "sourceTitle": "PBS NewsHour: Sam Altman reinstated as OpenAI CEO with new board",
    "sourceUrl": "https://www.pbs.org/newshour/nation/sam-altman-reinstated-as-openai-ceo-with-new-board-replacing-the-one-which-fired-him"
   },
   {
    "claim": {
     "en": "The essay cast Britney Spears as the modern crowned-then-devoured monarch: at her peak she drove roughly $100 million of a $400-million-a-year paparazzi industry before being torn from the pedestal.",
     "zh": "本文把布蘭妮描寫成現代「先加冕、後吞噬」的君王:全盛時期她一人撐起每年四億美元狗仔產業中約一億美元的產值,之後被拉下神壇。"
    },
    "now": {
     "en": "The conservatorship imposed after her 2008 breakdown lasted nearly 14 years and was terminated in November 2021, after the fan-driven #FreeBritney movement helped force the issue — the crowd that once tore her down campaigned to set her free.",
     "zh": "2008 年她精神崩潰後被強加的監護權(conservatorship)持續了近 14 年,直到 2021 年 11 月才在粉絲發起的 #FreeBritney 運動推波助瀾下正式終止——當年把她拉下神壇的群眾,最後反過來替她爭取自由。"
    },
    "sourceTitle": "PBS NewsHour: Judge dissolves Britney Spears conservatorship",
    "sourceUrl": "https://www.pbs.org/newshour/arts/judge-dissolves-britney-spears-conservatorship"
   }
  ],
  "quiz": [
   {
    "q": {
     "en": "According to the essay, which model best describes the distribution of founder traits?",
     "zh": "根據本文,哪個模型最能描述創辦人特質的分布?"
    },
    "options": [
     {
      "en": "A normal distribution — founders are average people who got lucky.",
      "zh": "常態分布——創辦人是運氣好的普通人。"
     },
     {
      "en": "A right-shifted curve — founders are simply above average on most traits.",
      "zh": "整體右移的曲線——創辦人只是大多數特質都優於平均。"
     },
     {
      "en": "An inverted normal distribution — founders occupy both extremes of the same traits simultaneously.",
      "zh": "反轉的常態分布——創辦人同時佔據同一特質的兩個極端。"
     },
     {
      "en": "A uniform distribution — founder traits are essentially random.",
      "zh": "均勻分布——創辦人的特質基本上是隨機的。"
     }
    ],
    "answer": 2,
    "explain": {
     "en": "Thiel argues founders are extreme insiders and extreme outsiders at once — both tails are fat. Four forces (nature, nurture, self-exaggeration, crowd exaggeration) loop together and push founders even further toward both poles, which a merely 'above average' model cannot capture.",
     "zh": "Thiel 主張創辦人同時是極端內部人與極端外部人——兩端尾巴都很肥。四股力量(天生、後天、自我誇大、群眾誇大)互相循環,把創辦人往兩極推得更遠;「只是優於平均」的模型無法捕捉這一點。"
    }
   },
   {
    "q": {
     "en": "Why can't the scapegoat be a completely ordinary member of the community, chosen at random?",
     "zh": "為什麼代罪羔羊不能是隨機挑選的普通社群成員?"
    },
    "options": [
     {
      "en": "Ordinary people were too well protected by their clans.",
      "zh": "普通人受到家族嚴密保護,難以下手。"
     },
     {
      "en": "The crowd would see itself in the victim and fear being chosen next.",
      "zh": "群眾會在受害者身上看見自己,害怕下一個就輪到自己。"
     },
     {
      "en": "The gods were believed to accept only high-born victims.",
      "zh": "人們相信神明只接受出身高貴的祭品。"
     },
     {
      "en": "Random selection was impractical before written records existed.",
      "zh": "在文字紀錄出現之前,隨機挑選在技術上不可行。"
     }
    ],
    "answer": 1,
    "explain": {
     "en": "The mechanism only works if the victim is outsider enough to be safely 'other,' yet insider enough to be plausibly blamed for internal strife. Sacrificing someone just like everyone else would make every member of the crowd feel like the next candidate — so the perfect scapegoat sits at both extremes.",
     "zh": "這套機制要運作,受害者必須「外」到能被安全地當成異類,又「內」到能被合理怪罪為內鬥元兇。獻祭一個跟大家一模一樣的人,會讓群眾人人自危、覺得下一個就是自己——所以完美的代罪羔羊必須同時站在兩個極端。"
    }
   },
   {
    "q": {
     "en": "What does Thiel identify as the truly decisive advantage of having co-founders?",
     "zh": "Thiel 認為擁有共同創辦人「真正決定性」的優勢是什麼?"
    },
    "options": [
     {
      "en": "More capital and wider networks at the earliest stage.",
      "zh": "在最早期帶來更多資金與更廣的人脈。"
     },
     {
      "en": "Complementary skills reduce technical mistakes.",
      "zh": "互補的技能可以減少技術上的失誤。"
     },
     {
      "en": "Investors systematically prefer teams over solo founders.",
      "zh": "投資人系統性地偏好團隊勝過單一創辦人。"
     },
     {
      "en": "A mob needs a singular victim, so multiple founders are much harder to scapegoat.",
      "zh": "暴民需要單一的受害者,所以多位創辦人更難被當成代罪羔羊。"
     }
    ],
    "answer": 3,
    "explain": {
     "en": "Brainstorming and collaboration are the conventional benefits, but Thiel's point is structural: scapegoating requires isolating one person. Pairs like Hewlett-Packard, Moore-Noyce, and Page-Brin are hard for a mob-like board to unite against — the more singular and isolated the founder, the more dangerous the phenomenon.",
     "zh": "腦力激盪與協作只是常見的表面好處;Thiel 的重點是結構性的:獻祭需要孤立出「一個人」。像 Hewlett-Packard、Moore-Noyce、Page-Brin 這樣的組合,讓暴民化的董事會難以齊心對付——創辦人越單一、越孤立,獻祭現象就越危險。"
    }
   }
  ]
 },
 {
  "slug": "class-19",
  "layout": "lesson",
  "icon": "menu_book",
  "navLabel": "19",
  "classNo": 19,
  "sourceUrl": "https://blakemasters.tumblr.com/post/25149261055/peter-thiels-cs183-startup-class-19-notes-essay",
  "title": {
   "en": "Stagnation or Singularity?",
   "zh": "停滯,還是奇點?"
  },
  "subtitle": {
   "en": "The final class: a panel on whether radical technology will arrive, and why building it is a choice, not fate.",
   "zh": "最後一堂課:激進科技到底會不會來?未來不是命定,而是選擇與行動的結果。"
  },
  "objectives": [
   {
    "en": "Summarize how Vassar, de Grey, and Arrison each picture the next 30 to 40 years of computing, longevity, and biotech.",
    "zh": "說出 Vassar、de Grey、Arrison 三位與談人對未來 30 至 40 年運算、壽命延長與生物科技的不同想像。"
   },
   {
    "en": "Explain why \"the singularity is inevitable\" is a trap that kills urgency, using de Grey's 100,000-lives-a-day argument.",
    "zh": "用 de Grey「每天十萬條人命」的論證,解釋為什麼「奇點必然到來」是一個消滅急迫感的陷阱。"
   },
   {
    "en": "Compare three models of who builds the future: distributed innovation, mainstream opinion formers, and small coordinated groups.",
    "zh": "比較「誰來打造未來」的三種模型:分散式創新、主流意見領袖,以及小型高信任團體。"
   },
   {
    "en": "Apply Thiel's closing idea, that your life is a singularity rather than a statistic, to your own career choices.",
    "zh": "把 Thiel 的結語——人生是奇點(singularity)而非統計數字——應用到自己的生涯選擇上。"
   }
  ],
  "sections": [
   {
    "id": "three-visions",
    "heading": {
     "en": "1. Three Visions of the Next 30-40 Years",
     "zh": "1. 三種未來想像:接下來的 30 至 40 年"
    },
    "summary": {
     "en": "CS183 ends with a panel where a futurist, a gerontologist, and a biotech analyst each sketch a radically accelerated future, with heavy caveats.",
     "zh": "CS183 以一場座談收尾:未來學家、老化研究者與生技分析師各自描繪一個劇烈加速的未來,但都附上重要的但書。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "For the last session, Thiel trades lecturing for moderating. The question on the table is the course's biggest: are the coming decades headed for technological stagnation, or for a runaway acceleration, the singularity? Three guests answer from three different frontiers.",
       "zh": "最後一堂課,Thiel 從講者變成主持人。桌上的問題也是整門課最大的問題:接下來的幾十年,我們會走向科技停滯,還是失控加速的奇點(singularity)?三位來賓從三個不同的前沿給出答案。"
      }
     },
     {
      "type": "cards",
      "items": [
       {
        "title": {
         "en": "Michael Vassar: brains and computing",
         "zh": "Michael Vassar:大腦與運算"
        },
        "body": {
         "en": "Within 30 years computing could become around a million times more powerful and algorithms perhaps 100x more efficient, enough to make brain emulation plausible. But energy is the bottleneck, and none of this progress can be taken for granted.",
         "zh": "30 年內,運算能力可能提升約一百萬倍、演算法效率提升上百倍,足以讓大腦模擬(brain emulation)變得可行。但能源是瓶頸,而且這些進展沒有一項是理所當然的。"
        }
       },
       {
        "title": {
         "en": "Aubrey de Grey: defeating aging",
         "zh": "Aubrey de Grey:戰勝老化"
        },
        "body": {
         "en": "Maybe 25 years to bring aging under control, but only with about 50% odds and sufficient funding; there is also a 10% chance it takes over a century. The uncertainty is in timelines, not feasibility, and even 10% odds justify working on radical technology.",
         "zh": "把老化控制住也許需要 25 年,但成功機率大約只有五成,而且前提是資金充足;也有一成的機率會拖過一百年。不確定的是時程,不是可行性——就算只有 10% 的把握,也值得投入激進科技。"
        }
       },
       {
        "title": {
         "en": "Sonia Arrison: biology as engineering",
         "zh": "Sonia Arrison:生物學工程化"
        },
        "body": {
         "en": "Biology is becoming an engineering discipline. Sequencing a genome fell from $3 billion for the first one to about $1,000, faster than Moore's Law. Gene therapy, designed organisms like bioluminescent trees, and free online courses are early signals of the shift.",
         "zh": "生物學正在變成一門工程學科。基因體定序的成本從第一次的 30 億美元跌到約 1,000 美元,比摩爾定律(Moore's Law)還快。基因治療、發光樹之類的人造生物,以及免費線上課程,都是這場轉變的早期訊號。"
        }
       }
      ]
     }
    ]
   },
   {
    "id": "why-crazy",
    "heading": {
     "en": "2. Why Do People Think You're Crazy?",
     "zh": "2. 為什麼大家覺得你瘋了?"
    },
    "summary": {
     "en": "Resistance to radical futures comes from discomfort with holding any view of the future, from stagnation bias, and from fear of what looks like magic.",
     "zh": "人們抗拒激進未來的原因有三:不敢對未來持有任何看法、預設停滯的偏誤,以及對「看起來像魔法」的事物感到恐懼。"
    },
    "blocks": [
     {
      "type": "ul",
      "items": {
       "en": [
        "Vassar: most people never form a real opinion about the future at all. What reads as \"crazy\" is not the content of a belief but the act of daring to hold one.",
        "De Grey: people project the recent past's relative stagnation forward. Extrapolating in 1900 from ships, you would predict 1950 Atlantic crossing times and miss the airplane entirely; critics attack the optimism itself, not the logic.",
        "Arrison: three barriers stand in the way: people do not understand, do not believe, or are afraid. Technology people do not understand looks like magic, and magic is scary."
       ],
       "zh": [
        "Vassar:大多數人根本從未對未來形成真正的看法。被當成「瘋子」的原因不是信念的內容,而是你竟然敢有信念這件事。",
        "de Grey:人們把近期的相對停滯直接投射到未來。如果 1900 年的人用輪船外推 1950 年橫渡大西洋要多久,會完全漏掉飛機的出現;批評者攻擊的是樂觀本身,而不是邏輯漏洞。",
        "Arrison:阻力有三道關卡——不理解、不相信、會害怕。人們不理解的科技看起來就像魔法,而魔法令人恐懼。"
       ]
      }
     },
     {
      "type": "p",
      "text": {
       "en": "The cure is framing and education, not dismissing skeptics. A glowing tree sounds like \"playing God\" until you present it as street lighting that burns no fossil fuels; the same idea lands completely differently depending on how the benefits are shown against the costs.",
       "zh": "解方是換個框架與好好教育,而不是無視質疑者。一棵會發光的樹聽起來像在「扮演上帝」,但若把它介紹成不燒任何化石燃料的路燈,同一個點子的接受度會完全不同——關鍵在於怎麼把效益與成本攤開來講。"
      }
     }
    ]
   },
   {
    "id": "inevitability-trap",
    "heading": {
     "en": "3. The Inevitability Trap",
     "zh": "3. 必然論的陷阱"
    },
    "summary": {
     "en": "If the singularity comes no matter what, why work? Because timing means lives, complacency corrupts institutions, and inevitability includes bad outcomes too.",
     "zh": "如果奇點注定會來,為什麼還要努力?因為時程就是人命、自滿會腐蝕制度,而「必然」也可能包含壞結局。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Thiel plays devil's advocate with Kurzweil-style determinism: if exponential progress is practically a law of nature, why not just grab popcorn and enjoy the show? Each panelist rejects the premise from a different angle.",
       "zh": "Thiel 故意用 Kurzweil 式的決定論唱反調:如果指數型進步幾乎是自然定律,那為什麼不乾脆抱著爆米花看戲就好?三位與談人從不同角度否定了這個前提。"
      }
     },
     {
      "type": "ul",
      "items": {
       "en": [
        "De Grey: about 150,000 people die every day, roughly 100,000 of them from aging-related causes. Every day the solution slips costs those lives; \"inevitable eventually\" is cold comfort to people dying now.",
        "Vassar: inevitability cuts both ways. Some plausible futures are ones we want to prevent, so the work is steering toward good outcomes and away from bad ones. (And popcorn is bad for you.)",
        "Arrison: if progress feels automatic, nobody bothers reforming broken institutions, like regulatory bottlenecks that block important treatments. The perverse incentives simply stay in place."
       ],
       "zh": [
        "de Grey:全球每天約有 15 萬人死亡,其中約 10 萬人死於老化相關疾病。解方每晚一天到來,就是這麼多條人命的代價;對正在失去生命與親人的人來說,「反正遲早會發生」是冰冷的安慰。",
        "Vassar:必然論是雙面刃。有些看似可能的未來正是我們想避免的,所以真正的工作是把方向導向好結局、避開壞結局。(而且爆米花對身體不好。)",
        "Arrison:如果進步感覺是自動的,就沒有人會去改革失能的制度——例如卡住重要療法的審批瓶頸。扭曲的誘因會原封不動地留在那裡。"
       ]
      }
     }
    ]
   },
   {
    "id": "who-builds-future",
    "heading": {
     "en": "4. Who Will Build the Future?",
     "zh": "4. 誰來打造未來?"
    },
    "summary": {
     "en": "The panel offers three competing models: distributed innovation from many directions, mainstream opinion formers who legitimize radical ideas, and small high-trust groups.",
     "zh": "與談人提出三種互相競爭的模型:多方匯流的分散式創新、能讓激進想法「正常化」的主流意見領袖,以及小型高信任團體。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Vassar's first answer, pointing at Thiel and naming \"you, Elon, Sean,\" gets laughs but is not a plan. Pressed further, the panel converges on three more general models of where the future comes from.",
       "zh": "Vassar 的第一個答案是指著 Thiel 說「你、Elon、Sean……」,引來一陣笑聲,但這算不上一套方法。被追問之後,三人各自給出更一般化的模型,說明未來從哪裡來。"
      }
     },
     {
      "type": "table",
      "head": {
       "en": [
        "Model",
        "Champion",
        "Core idea"
       ],
       "zh": [
        "模型",
        "提出者",
        "核心主張"
       ]
      },
      "rows": [
       {
        "en": [
         "Distributed innovation",
         "Arrison",
         "Top-down funding (e.g. defense research money) plus bottom-up DIY biology hobbyists; progress emerges from many interconnected efforts converging."
        ],
        "zh": [
         "分散式創新",
         "Arrison",
         "由上而下的資金(如國防研究經費)加上由下而上的 DIY 生物學玩家;進步來自無數互相連結的努力最終匯流。"
        ]
       },
       {
        "en": [
         "Mainstream opinion formers",
         "de Grey",
         "Wealthy would-be backers fear ridicule; trusted mainstream figures, his surprise pick being Oprah Winfrey, could make radical technology respectable and unlock money and public support."
        ],
        "zh": [
         "主流意見領袖",
         "de Grey",
         "有錢的潛在金主怕被嘲笑;受信任的主流人物——他出人意料地點名 Oprah Winfrey——能讓激進科技變得體面,進而解鎖資金與民意。"
        ]
       },
       {
        "en": [
         "Coordinated tribes",
         "Vassar",
         "History's leaps come from mid-sized trusting groups of dozens to a few hundred, like the Quakers, the Royal Society, or the American founders, not lone geniuses or giant institutions."
        ],
        "zh": [
         "協作的「部落」",
         "Vassar",
         "歷史上的躍進來自數十到數百人的中型高信任團體——貴格會(Quakers)、皇家學會(Royal Society)、美國開國元勳——而非孤獨天才或龐大機構。"
        ]
       }
      ]
     },
     {
      "type": "quote",
      "text": {
       "en": "Just because you're rich doesn't mean you don't fear people laughing at you.",
       "zh": "有錢,不代表你就不怕被人嘲笑。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "De Grey adds a sobering constraint: visionaries alone are not enough, because radical technology is expensive. Early-stage work runs on philanthropy, commercial money arrives only once viability shows, and public funding follows public opinion, so individual innovators must plug into these networks of money flows.",
       "zh": "de Grey 補上一個現實的限制:光有遠見者還不夠,因為激進科技非常燒錢。早期研究靠慈善捐助,商業資金要等到可行性浮現才會進場,公共經費則跟著民意走——所以個別創新者必須接上這些資金流動的網絡。"
      }
     }
    ]
   },
   {
    "id": "qa-timing-limits",
    "heading": {
     "en": "5. Q&A: Prediction, Timing, and Limits",
     "zh": "5. 問答:預測、時機與極限"
    },
    "summary": {
     "en": "Audience questions probe whether the future can be predicted at all, when building is premature, and where exponential curves finally hit ceilings.",
     "zh": "學生的提問直指三個難題:未來到底能不能預測、什麼時候動手算太早,以及指數曲線最終會在哪裡撞上天花板。"
    },
    "blocks": [
     {
      "type": "ul",
      "items": {
       "en": [
        "Can we predict at all? Vassar: modern forecasting is often about looking credible rather than being accurate, but good abstractions can hold even when details miss. Arrison: this is not fantasy; gene splicing and synthetic cells already exist, so the open question is speed, not possibility.",
        "When is it too early? Thiel worries about paddling too far ahead of the wave, like 11th-century Chinese rocketry aiming at the sky. De Grey: pick the right trajectory and find stepping stones. Arrison: visible interim wins, like lab-grown bladders and blood vessels, keep ordinary people motivated.",
        "Where are the limits? Every trend is an S-curve that plateaus, but each paradigm shift starts a new curve, and physical laws impose ceilings we are nowhere near hitting yet. Arrison: there will always be a new exponential curve."
       ],
       "zh": [
        "未來到底能不能預測?Vassar:現代的預測常常是為了看起來可信,而不是為了準確;但好的抽象框架即使細節全錯,大方向仍可能成立。Arrison:這不是科幻——基因剪接、人工合成細胞已經存在,懸而未決的是速度,不是可能性。",
        "什麼時候動手算太早?Thiel 擔心「划得比浪還前面太多」,就像十一世紀中國的火箭仰望天空。de Grey:選對軌道,然後找出踏腳石(stepping stones)。Arrison:看得見的階段性成果——實驗室培養出的膀胱與血管——才能讓一般人保持動力。",
        "極限在哪裡?每條趨勢都是會趨緩的 S 曲線,但每次典範轉移都會啟動一條新曲線;物理定律終究是天花板,只是我們離撞上還很遠。Arrison:永遠會有下一條指數曲線。"
       ]
      }
     },
     {
      "type": "p",
      "text": {
       "en": "Vassar's most haunting point comes from history: the Apollo program reached the moon within a decade, yet forty years later that capability was gone, and the constitution-writing skill of the American founders has proven equally hard to replicate. Civilizational capacity can regress, which is exactly why progress is never automatic.",
       "zh": "Vassar 最發人深省的論點來自歷史:阿波羅計畫(Apollo program)十年內就登上月球,但四十年後那個能力已經消失;美國開國元勳起草憲法的功力,後人也證明極難複製。文明的能力是會倒退的——這正是進步從來不會自動發生的原因。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "Applied history is underrated.",
       "zh": "應用歷史(applied history)被嚴重低估了。"
      }
     }
    ]
   },
   {
    "id": "your-life-is-a-singularity",
    "heading": {
     "en": "6. Thiel's Closing: Your Life Is a Singularity",
     "zh": "6. Thiel 的結語:你的人生就是一個奇點"
    },
    "summary": {
     "en": "The course's zero-to-one frame applies to individual lives: reject the statistical view of yourself, find a frontier, and act as if no one else will.",
     "zh": "整門課的「從 0 到 1」框架同樣適用於個人:拒絕把自己當統計數字,找到一條前沿,然後當作沒有別人會出手一樣去行動。"
    },
    "blocks": [
     {
      "type": "p",
      "text": {
       "en": "Thiel closes the whole course by widening the lens. Going from zero to one is not just about companies: every genuinely new thing is a small singularity, and every life is a singular, unrepeatable event. The \"obvious\" script, following the well-trodden safe path, quietly treats you as a statistic in an actuarial table, and that is selling yourself short.",
       "zh": "Thiel 在結尾把鏡頭拉遠。「從 0 到 1」不只是公司的事:每一件真正的新事物都是一個小小的奇點,而每一個人生都是獨一無二、無法重來的事件。那套「理所當然」的劇本——走那條被踩實的安全道路——其實是悄悄把你當成精算表上的一個統計數字,那是看輕了自己。"
      }
     },
     {
      "type": "p",
      "text": {
       "en": "The big secret is that many secrets remain: there are still large blank spaces on the map of human knowledge, and those frontiers are reachable right now, not in some distant era. There is no universally right time to start, but some moments are more auspicious than others, and this is one of them. If you do not take charge of the future, and of your own life, no one else will do it for you.",
       "zh": "最大的祕密是:世上還有許多祕密沒被揭開。人類知識的地圖上仍有大片空白,而那些前沿此刻就搆得到,不必等到遙遠的未來。創業和人生都沒有放諸四海皆準的「對的時機」,但有些時刻確實比較有利——現在就是這樣的時刻。如果你不出手掌握未來、掌握自己的人生,沒有人會替你出手。"
      }
     },
     {
      "type": "quote",
      "text": {
       "en": "Don't be deterred by notions of luck, impossibility, or futility.",
       "zh": "別被「運氣不好」、「不可能」或「徒勞無功」這些念頭勸退。"
      }
     }
    ]
   }
  ],
  "factcheck": [
   {
    "claim": {
     "en": "In 2012 de Grey estimated roughly 25 years to reach longevity escape velocity, with about 50% odds given sufficient funding.",
     "zh": "2012 年,de Grey 估計約 25 年可達到長壽逃逸速度,在資金充足的前提下機率約五成。"
    },
    "now": {
     "en": "Aging remains undefeated in 2026. De Grey left SENS Research Foundation in 2021 and founded the LEV Foundation in 2022; he still gives about 50% odds, now within 12-15 years, a horizon critics note has barely moved closer in a decade.",
     "zh": "到 2026 年,老化仍未被攻克。de Grey 於 2021 年離開 SENS Research Foundation,2022 年創立 LEV Foundation;他仍給出約五成機率,只是時程改成「12 至 15 年內」——批評者指出這個期限十年來幾乎沒有真正逼近。"
    },
    "sourceTitle": "CEO Today — Dr. Aubrey de Grey's Longevity Escape Velocity",
    "sourceUrl": "https://www.ceotodaymagazine.com/2025/08/dr-aubrey-de-greys-longevity-escape-velocity-when-will-humanity-outrun-aging/"
   },
   {
    "claim": {
     "en": "Arrison noted genome sequencing had fallen from $3 billion for the first human genome to about $1,000, outpacing Moore's Law.",
     "zh": "Arrison 指出,基因體定序成本已從第一個人類基因體的 30 億美元跌到約 1,000 美元,速度超越摩爾定律。"
    },
    "now": {
     "en": "The trend held. Illumina's NovaSeq X series brought list-price sequencing to roughly $200 per genome, and sub-$100 genomes are now marketed, making population-scale genomics routine.",
     "zh": "這條趨勢延續了下去。Illumina 的 NovaSeq X 系列把定序牌價壓到每個基因體約 200 美元,市面上甚至已出現低於 100 美元的方案,讓族群規模的基因體學成為日常。"
    },
    "sourceTitle": "Illumina — NovaSeq X Series Enables Broader, Deeper Sequencing",
    "sourceUrl": "https://www.illumina.com/systems/sequencing-platforms/novaseq-x-plus/applications/broad-sequencing.html"
   }
  ],
  "quiz": [
   {
    "q": {
     "en": "Thiel challenges the panel: if the singularity is inevitable, why not just grab popcorn and watch? What is de Grey's core rebuttal?",
     "zh": "Thiel 向與談人挑戰:如果奇點必然到來,為什麼不乾脆抱著爆米花看戲就好?de Grey 的核心反駁是什麼?"
    },
    "options": [
     {
      "en": "Exponential extrapolation is statistically flawed, so the singularity may never come at all.",
      "zh": "指數外推在統計上站不住腳,所以奇點可能根本不會來。"
     },
     {
      "en": "Timing matters enormously: roughly 100,000 people die of aging-related causes every day, so each day of delay carries a massive human cost.",
      "zh": "時程至關重要:每天約有 10 萬人死於老化相關疾病,所以每延遲一天都是巨大的人命代價。"
     },
     {
      "en": "Watching passively is fine for individuals, but governments have a duty to act first.",
      "zh": "個人袖手旁觀沒關係,但政府有義務率先行動。"
     },
     {
      "en": "The singularity is only inevitable if enough billionaires fund it directly.",
      "zh": "只有夠多億萬富翁直接出資,奇點才是必然的。"
     }
    ],
    "answer": 1,
    "explain": {
     "en": "De Grey does not dispute feasibility; he attacks complacency. \"Inevitable eventually\" ignores that every day the cure slips costs about 100,000 lives, so urgency is a moral question, not merely a technical one.",
     "zh": "de Grey 質疑的不是可行性,而是自滿心態。「反正遲早會發生」忽略了解方每晚到一天,就多付出約 10 萬條人命——急迫性是道德問題,不只是技術問題。"
    }
   },
   {
    "q": {
     "en": "According to Vassar, who has historically forged the big leaps forward?",
     "zh": "根據 Vassar 的說法,歷史上真正推動重大躍進的是誰?"
    },
    "options": [
     {
      "en": "Lone geniuses working in isolation.",
      "zh": "獨自埋頭苦幹的孤獨天才。"
     },
     {
      "en": "Large government institutions and defense departments.",
      "zh": "龐大的政府機構與國防部門。"
     },
     {
      "en": "Mid-sized groups of dozens to a few hundred people bound by trust, like the Royal Society or the American founders.",
      "zh": "數十到數百人、以信任凝聚的中型團體,例如皇家學會或美國開國元勳。"
     },
     {
      "en": "Mass consumer markets voting with their wallets.",
      "zh": "用鈔票投票的大眾消費市場。"
     }
    ],
    "answer": 2,
    "explain": {
     "en": "Vassar argues breakthroughs are almost never lone geniuses and almost never giant institutions. The sweet spot is coordinated \"tribes\": big enough to matter, small enough for genuine dependency and trust.",
     "zh": "Vassar 主張,突破幾乎從來不是孤獨天才的功勞,也幾乎從來不是龐大機構的產物。甜蜜點是協作的「部落」:大到足以成事,小到成員之間仍有真實的依賴與信任。"
    }
   },
   {
    "q": {
     "en": "In his closing remarks, what does Thiel mean by \"your life is a singularity\"?",
     "zh": "在結語中,Thiel 說「你的人生就是一個奇點」是什麼意思?"
    },
    "options": [
     {
      "en": "Everyone in the class should go work on singularity-related technologies.",
      "zh": "全班每個人都應該投身與奇點相關的科技領域。"
     },
     {
      "en": "Careers, like startups, succeed by following well-established statistical patterns.",
      "zh": "職涯和新創一樣,照著成熟的統計規律走才會成功。"
     },
     {
      "en": "Your life is a one-time, unrepeatable event, so treating yourself as a statistic on the safe default path sells yourself short.",
      "zh": "人生是一次性、無法重來的事件,把自己當成安全預設路徑上的統計數字,是看輕了自己。"
     },
     {
      "en": "Only a handful of founders like Thiel or Musk can actually shape the future.",
      "zh": "只有 Thiel 或 Musk 這樣少數的創業者能真正塑造未來。"
     }
    ],
    "answer": 2,
    "explain": {
     "en": "The point is agency. Probabilistic thinking describes repeatable processes, but a life happens exactly once, like a technology going from zero to one. So find a frontier and act, instead of following the \"obvious\" well-trodden path.",
     "zh": "重點是能動性(agency)。機率思維描述的是可重複的過程,但人生只會發生一次,就像一項科技從 0 到 1。所以要找到一條前沿並採取行動,而不是照著那條「理所當然」的老路走。"
    }
   }
  ]
 },
 {
  "slug": "glossary",
  "layout": "glossary",
  "icon": "dictionary",
  "title": {
   "en": "Glossary",
   "zh": "術語表"
  },
  "subtitle": {
   "en": "Every key concept from the course, in one searchable list.",
   "zh": "整門課的關鍵概念,一個可搜尋的清單。"
  },
  "terms": [
   {
    "term": {
     "en": "10x edge",
     "zh": "十倍優勢 (10x edge)"
    },
    "def": {
     "en": "Hoffman and Thiel's bar for a real competitive advantage: an order of magnitude better, cheaper, or faster — and explainable in a sentence. Marginal improvements can't buy customers' attention.",
     "zh": "Hoffman 與 Thiel 對真正競爭優勢的門檻:好一個數量級——好十倍、便宜十倍或快十倍,而且一句話就能講清楚。邊際改良買不到顧客的注意力。"
    },
    "cls": 12
   },
   {
    "term": {
     "en": "1x non-participating liquidation preference",
     "zh": "1 倍不參與分配清算優先權(1x non-participating liquidation preference)"
    },
    "def": {
     "en": "In an exit, investors first recover their capital; after that, everyone shares pro rata. The investor-protection term Thiel considers best aligned, unlike a 2x participating preference.",
     "zh": "公司出售或清算時,投資人先拿回本金,其餘再依持股比例分配。Thiel 認為這是最能維持利益對齊的投資人保護條款,與 2 倍參與分配形成對比。"
    },
    "cls": 6
   },
   {
    "term": {
     "en": "2-and-20",
     "zh": "「2 與 20」收費結構 (2-and-20)"
    },
    "def": {
     "en": "The standard VC fee structure: a 2% annual management fee on fund size plus 20% of profits (the carry). The carry, not the fee, is where VCs are meant to make their money.",
     "zh": "創投的標準收費結構:每年收基金規模 2% 的管理費,外加利潤的 20%(即 carry,績效分紅)。創投真正該賺的是 carry,而不是管理費。"
    },
    "cls": 7
   },
   {
    "term": {
     "en": "Antibubble Thinking",
     "zh": "反泡沫思維 (Antibubble Thinking)"
    },
    "def": {
     "en": "The mirror-image error of bubble-calling: assuming everything will work because the crowd is gloomy. Like bubble thinking, it lets the herd define your views instead of reasoning about specific companies.",
     "zh": "泡沫論的鏡像錯誤:因為群眾悲觀,就斷定一切都會成功。它和泡沫思維一樣,讓群眾替你決定觀點,而不是針對個別公司獨立推理。"
    },
    "cls": 2
   },
   {
    "term": {
     "en": "Applied History",
     "zh": "應用歷史 (Applied History)"
    },
    "def": {
     "en": "Mining concrete historical episodes, like the Apollo program or the drafting of the U.S. Constitution, for lessons about what coordinated groups can achieve and how hard-won capabilities get lost.",
     "zh": "從具體歷史事件——如阿波羅計畫、美國制憲——萃取教訓,理解協作團體能成就什麼,以及得來不易的能力如何流失。"
    },
    "cls": 19
   },
   {
    "term": {
     "en": "Athletes vs. Nerds",
     "zh": "運動員 vs. 書呆子 (Athletes vs. Nerds)"
    },
    "def": {
     "en": "Thiel's shorthand (from Class 5) for zero-sum fighters vs. non-zero-sum builders. The ideal company pursues peace but keeps athletes who can fight when a battle is truly unavoidable — while guarding against them turning on each other.",
     "zh": "Thiel 在第五課提出的分類:運動員是零和的戰士,書呆子是非零和的創造者。理想的公司追求和平,但保留能在非打不可時應戰的運動員——同時提防他們彼此內鬥。"
    },
    "cls": 12
   },
   {
    "term": {
     "en": "Aura Test",
     "zh": "氣場測試 (Aura Test)"
    },
    "def": {
     "en": "Max Levchin's mania-era survival heuristic: judge anyone pitching you within about 15 seconds and walk away if something feels off. A crude but effective filter when capital was indiscriminate and sketchy operators were everywhere.",
     "zh": "Max Levchin 在狂熱年代的生存法則:任何人向你推銷,15 秒內判斷,感覺不對就走人。在資金氾濫、可疑人物橫行的年代,這是粗糙卻有效的過濾器。"
    },
    "cls": 2
   },
   {
    "term": {
     "en": "Bubble (Thiel's definition)",
     "zh": "泡沫 (Bubble,Thiel 的定義)"
    },
    "def": {
     "en": "A situation of widespread, intense belief that turns out to be false. Scattered frothy valuations don't qualify; without genuine collective conviction there is no bubble to pop.",
     "zh": "一種廣泛而強烈、但事後證明為假的集體信念。零星偏高的估值不算數;沒有真正的集體堅信,就沒有可以破掉的泡沫。"
    },
    "cls": 2
   },
   {
    "term": {
     "en": "Cancer Stem Cells",
     "zh": "癌症幹細胞 (cancer stem cells)"
    },
    "def": {
     "en": "A distinct subpopulation of cells that drives tumor growth. Targeting them—rather than carpet-bombing all cells with chemo—promises lower doses, better outcomes, and a fix for the misleading 'tumor shrinkage' endpoint.",
     "zh": "驅動腫瘤生長的一群特殊細胞。鎖定它們——而非用化療地毯式轟炸所有細胞——有望以更低劑量取得更好療效,並修正「腫瘤縮小」這個誤導性的試驗終點。"
    },
    "cls": 16
   },
   {
    "term": {
     "en": "CLV vs. CPA",
     "zh": "顧客終身價值 vs. 獲客成本 (CLV vs. CPA)"
    },
    "def": {
     "en": "CLV = average revenue per user × gross margin × average customer lifetime. A business is sustainable in the real world only when CLV exceeds CPA, the cost of acquiring a customer.",
     "zh": "CLV = 每用戶平均收入 × 毛利率 × 平均顧客存續期間。現實世界中,唯有 CLV 高於獲客成本(CPA),生意才撐得下去。"
    },
    "cls": 9
   },
   {
    "term": {
     "en": "Complex Coordination",
     "zh": "複雜協調 (Complex Coordination)"
    },
    "def": {
     "en": "Value created by orchestrating many existing pieces — grid access, regulation, capital, customers — rather than by a single gadget. Cleantech treated it as an afterthought and paid for it.",
     "zh": "價值來自把許多既有元素——電網、法規、資本、客戶——編排在一起,而不是來自單一產品。清潔技術把它當成事後補課,也為此付出代價。"
    },
    "cls": 14
   },
   {
    "term": {
     "en": "Complex Sales",
     "zh": "複雜銷售 (complex sales)"
    },
    "def": {
     "en": "Selling deals in the $1M–$100M range to governments and large enterprises, closed through long relationship-building by founders and senior people rather than a conventional sales force.",
     "zh": "面向政府與大型企業、單筆 100 萬到 1 億美元的交易,靠創辦人與高層長期經營關係成交,而非傳統業務團隊。"
    },
    "cls": 9
   },
   {
    "term": {
     "en": "Convention",
     "zh": "常規 (convention)"
    },
    "def": {
     "en": "A former secret that has been discovered and absorbed by everyone—like triangle math after Pythagoras. Conventions can no longer power a new company.",
     "zh": "已被發現並被眾人吸收的「前秘密」——就像畢達哥拉斯之後的三角形數學。常規再也撐不起一家新公司。"
    },
    "cls": 11
   },
   {
    "term": {
     "en": "Coordination costs (Coase Theorem)",
     "zh": "協調成本(寇斯定理 Coase Theorem)"
    },
    "def": {
     "en": "Firms exist, and settle at a given size, because they balance internal coordination costs (politics, communication) against external ones (negotiating every deal with outsiders).",
     "zh": "公司之所以存在並停在某個規模,是因為它在內部協調成本(政治、溝通)與外部協調成本(和每個外部對象逐一談判)之間取得平衡。"
    },
    "cls": 1
   },
   {
    "term": {
     "en": "Cost-Plus Contracting",
     "zh": "成本加成合約 (Cost-Plus Contracting)"
    },
    "def": {
     "en": "The aerospace billing model that reimburses expenses plus a guaranteed margin, systematically rewarding cost inflation — the reason launch cost per kilogram stayed flat for 40 years until SpaceX broke the structure.",
     "zh": "航太業的計價模式:實報實銷再加保證利潤,等於制度性地獎勵墊高成本——這正是每公斤發射成本 40 年不動,直到 SpaceX 打破結構才改變的原因。"
    },
    "cls": 15
   },
   {
    "term": {
     "en": "Data Room",
     "zh": "資料室 (data room)"
    },
    "def": {
     "en": "A prepared set of company financials and assumptions in modifiable formats that lets VCs test the numbers themselves. It preempts endless follow-up emails, and because almost no founder builds one, it signals unusual competence.",
     "zh": "預先整理好的公司財務資料與假設,以可編輯的格式提供,讓創投能親手驗算。它能省去沒完沒了的追問信;正因幾乎沒有創辦人這麼做,做了反而是能力出眾的訊號。"
    },
    "cls": 8
   },
   {
    "term": {
     "en": "Definite Optimism",
     "zh": "明確樂觀 (Definite Optimism)"
    },
    "def": {
     "en": "Believing the future will be better and that it is knowable and shapeable — so you commit to firm convictions and concrete plans, like pre-1960s America.",
     "zh": "相信未來會更好,而且可知、可塑——因此押上堅定的信念與具體計畫,如同 1960 年代以前的美國。"
    },
    "cls": 13
   },
   {
    "term": {
     "en": "Determinate Optimism",
     "zh": "明確的樂觀 (Determinate Optimism)"
    },
    "def": {
     "en": "The belief that the future will be better and that you can see specifically how — so you make a concrete plan and build it. Mid-century nuclear ambition embodied it; today's energy policy has abandoned it.",
     "zh": "相信未來會更好,而且看得出具體會怎麼變好——因此擬定明確計畫並動手打造。二十世紀中期的核能雄心是其化身;今日的能源政策則已放棄這種態度。"
    },
    "cls": 14
   },
   {
    "term": {
     "en": "Determinate vs. Indeterminate Biology",
     "zh": "決定論式 vs. 機率式生物學 (determinate vs. indeterminate biology)"
    },
    "def": {
     "en": "The essay's central axis: whether death and disease are statistical inevitabilities to be insured against, or engineering problems that computation can actually solve.",
     "zh": "本課的核心軸線:死亡與疾病究竟是只能靠保險對沖的統計必然,還是運算真的可以解決的工程問題。"
    },
    "cls": 16
   },
   {
    "term": {
     "en": "Determinate vs. indeterminate thinking",
     "zh": "決定論式 vs. 非決定論式思維"
    },
    "def": {
     "en": "Statistics fits repeatable 1-to-n processes, but a genuinely new venture has a sample size of one — it must be planned like a calculus problem (the Apollo program), not treated as a random walk.",
     "zh": "統計適用於可重複的 1 到 n 過程;但真正的新事業樣本數只有 1,必須像微積分問題(如阿波羅計畫)那樣精確規劃,而不是當成隨機漫步。"
    },
    "cls": 1
   },
   {
    "term": {
     "en": "Distribution",
     "zh": "通路/銷售體系 (distribution)"
    },
    "def": {
     "en": "In Andreessen's usage, everything about how a product actually reaches customers — sales and marketing strategy. Its absence, dressed up as 'viral marketing,' is the single biggest reason a16z passes on product-obsessed startups.",
     "zh": "在 Andreessen 的用法裡,指產品如何真正觸及顧客的一切——銷售與行銷策略。缺了它卻包裝成「病毒式行銷」,是 a16z 拒絕產品至上型新創的最大單一原因。"
    },
    "cls": 10
   },
   {
    "term": {
     "en": "Down round",
     "zh": "估值下修輪(down round)"
    },
    "def": {
     "en": "A financing priced below the previous round. It triggers anti-dilution repricing, guts founder and employee equity, and turns owners, controllers, and operators against one another.",
     "zh": "估值低於前一輪的募資。它會觸發反稀釋重新計價、重創創辦人與員工的股權,並讓擁有者、控制者與經營者彼此反目。"
    },
    "cls": 6
   },
   {
    "term": {
     "en": "Easy-hard-impossible trichotomy",
     "zh": "簡單—困難—不可能三分法"
    },
    "def": {
     "en": "Truths are either conventions anyone can learn, hard-but-doable discoveries, or untestable mysteries. Startups and secrets live only in the middle zone.",
     "zh": "真相分為人人可學的常識、困難但做得到的發現,以及無法驗證的奧秘。新創與秘密只存在於中間地帶。"
    },
    "cls": 11
   },
   {
    "term": {
     "en": "Evangelist",
     "zh": "內部擁護者 (evangelist)"
    },
    "def": {
     "en": "The person inside a VC firm who champions your deal in internal debates. Since partners love poking holes in each other's deals, a pitch that fails to create an evangelist quietly dies no matter how good the meeting felt.",
     "zh": "創投內部在合夥人辯論時替你的案子奮力辯護的人。合夥人最愛互挑彼此案子的毛病,所以一場提案若沒能養出擁護者,不管會議氣氛多好,案子都會無聲無息地死掉。"
    },
    "cls": 8
   },
   {
    "term": {
     "en": "Exponential Hope vs. Asymptotic Reality",
     "zh": "指數希望與漸近現實(exponential hope vs. asymptotic reality)"
    },
    "def": {
     "en": "The open question over any frontier field: does the growth curve keep compounding, or quietly flatten into a plateau because of hidden limits — the cancer-aging trade-off in biotech, runaway code complexity in AI?",
     "zh": "所有前沿領域頭上的懸念:成長曲線會持續複利,還是因為隱藏極限而悄悄攤平成高原——生技的例子是癌症與老化的取捨,AI 的例子是失控的程式碼複雜度。"
    },
    "cls": 17
   },
   {
    "term": {
     "en": "Extending the Founding",
     "zh": "延長創業時刻 (Extending the Founding)"
    },
    "def": {
     "en": "The strategy of prolonging a company's monarchical founding phase — when genuine 0-to-1 creation happens — and delaying the shift to process-driven bureaucracy where much less gets done.",
     "zh": "延長公司「君主制建國期」的策略——真正從 0 到 1 的創造發生在這個階段——並拖延轉向流程官僚化的時點,因為那之後能做成的事會大幅減少。"
    },
    "cls": 18
   },
   {
    "term": {
     "en": "First Among Equals",
     "zh": "同儕之首 (First Among Equals)"
    },
    "def": {
     "en": "Augustus' post-Caesar survival tactic: hold king-like power while refusing the king's title. Thiel's analogue for founders: consider minimizing the dangerous CEO crown even while leading.",
     "zh": "凱撒死後奧古斯都的求生戰術:握有王權,卻拒絕國王的頭銜。Thiel 給創辦人的類比:即使實際領導,也可以考慮淡化 CEO 這頂危險的王冠。"
    },
    "cls": 18
   },
   {
    "term": {
     "en": "Generational Scarring",
     "zh": "世代性創傷 (generational scarring)"
    },
    "def": {
     "en": "The deep, permanent trauma of those burned in a crash (2000, or 1929) that makes them see bubbles everywhere. It never fades — it has to die off — which hands an edge to young founders who never got burned.",
     "zh": "在崩盤(2000 年或 1929 年)中受重傷的人留下的深層永久創傷,讓他們看什麼都像泡沫。這種創傷不會淡去,只會隨世代凋零——這反而給了沒被燙過的年輕創辦人一種優勢。"
    },
    "cls": 10
   },
   {
    "term": {
     "en": "Goldilocks Market",
     "zh": "剛剛好的市場 (Goldilocks Market)"
    },
    "def": {
     "en": "A starting market sized just right: big enough to contain real customers, small enough that a startup can take the whole thing before expanding outward.",
     "zh": "大小剛剛好的起始市場:大到真的有顧客,小到一家新創能先整碗端走,再往外擴張。"
    },
    "cls": 4
   },
   {
    "term": {
     "en": "Herfindahl-Hirschman Index (HHI)",
     "zh": "赫芬達爾—赫希曼指數 (HHI)"
    },
    "def": {
     "en": "A concentration measure: the sum of squared market shares of the top 50 firms. Below 0.15 is competitive; above 0.25 is highly concentrated and possibly monopolistic.",
     "zh": "市場集中度指標:前 50 大公司市占率平方後加總。低於 0.15 屬競爭市場;高於 0.25 屬高度集中,可能構成獨占。"
    },
    "cls": 3
   },
   {
    "term": {
     "en": "Indefinite Optimism",
     "zh": "不明確樂觀 (Indefinite Optimism)"
    },
    "def": {
     "en": "Expecting a better future without any idea what it looks like — so you diversify, keep options open, and wait. Thiel argues this stance is internally contradictory.",
     "zh": "期待更好的未來,卻說不出它長什麼樣——於是分散風險、保留選項、等待進步。Thiel 認為這種立場有內在矛盾。"
    },
    "cls": 13
   },
   {
    "term": {
     "en": "Intelligence Augmentation",
     "zh": "智慧增強(intelligence augmentation)"
    },
    "def": {
     "en": "Building systems that pair human conceptual judgment with machine-scale computation instead of pursuing autonomous strong AI — Palantir's core bet, modeled on human-computer chess teams that beat both grandmasters and computers alone.",
     "zh": "不追求自主的強 AI,而是把人類的概念判斷與機器等級的運算配對成系統——這是 Palantir 的核心賭注,原型是「人機組隊」在西洋棋中同時擊敗單獨的大師與單獨的電腦。"
    },
    "cls": 17
   },
   {
    "term": {
     "en": "Intelligence compounding",
     "zh": "智力複利 (intelligence compounding)"
    },
    "def": {
     "en": "Cohen's idea that ability grows like compound interest when you keep solving hard problems. A comfortable big-company job implicitly pays you to accept a lower growth rate, and the long-run cost of the missed compounding is enormous.",
     "zh": "Cohen 的概念:持續解決困難問題時,能力會像複利一樣成長。大公司的舒適職位等於付錢請你接受較低的成長率,而錯過複利的長期代價極其巨大。"
    },
    "cls": 5
   },
   {
    "term": {
     "en": "Intersection vs. Union Rhetoric",
     "zh": "交集與聯集話術 (Intersection vs. Union)"
    },
    "def": {
     "en": "Non-monopolies describe their market as an intersection of categories ('the only British restaurant in Palo Alto') to fake uniqueness; monopolies describe theirs as a sliver of a giant union ('under 4% of global advertising') to fake weakness.",
     "zh": "非獨占公司用「類別的交集」描述市場(「Palo Alto 唯一的英式餐廳」)來假裝獨特;獨占公司則用「巨大聯集裡的一小片」(「全球廣告市場不到 4%」)來假裝弱小。"
    },
    "cls": 4
   },
   {
    "term": {
     "en": "Inverted Normal Distribution",
     "zh": "反轉的常態分布 (Inverted Normal Distribution)"
    },
    "def": {
     "en": "Thiel's model of founder traits: instead of clustering in the middle, founders pile up at both tails at once — the same person is extreme insider and extreme outsider, and feedback loops keep pushing both extremes further out.",
     "zh": "Thiel 描述創辦人特質的模型:創辦人不聚在中間,而是同時堆在兩端尾巴——同一個人既是極端內部人又是極端外部人,而且回饋循環會持續把兩個極端推得更遠。"
    },
    "cls": 18
   },
   {
    "term": {
     "en": "J Curve",
     "zh": "J 曲線 (J Curve)"
    },
    "def": {
     "en": "The shape of a fund's cumulative returns: fees and early failures push it underwater first; if winners compound, it climbs steeply later. The key question is when — if ever — it crosses break-even.",
     "zh": "基金累積報酬呈現的形狀:管理費與早期失敗先把它壓到水面下;若贏家開始複利成長,後期才陡峭上揚。關鍵問題是它何時——或究竟能否——越過損益兩平線。"
    },
    "cls": 7
   },
   {
    "term": {
     "en": "Last Mover Advantage",
     "zh": "後發優勢 (Last Mover Advantage)"
    },
    "def": {
     "en": "The idea that the company that makes the last great move in a market — and durably occupies it when most value arrives — beats the one that merely moved first.",
     "zh": "指在市場中走出最後一步關鍵棋、並在多數價值到來時仍穩穩占據市場的公司,勝過只是搶先起跑的公司。"
    },
    "cls": 3
   },
   {
    "term": {
     "en": "Logos, Ethos, Pathos",
     "zh": "Logos、Ethos、Pathos(三大說服要素)"
    },
    "def": {
     "en": "Aristotle's three modes of persuasion — argument from facts and reason, from the speaker's character and credibility, and from the audience's emotions. Thiel argues a complete pitch must work all three, not just logos.",
     "zh": "亞里斯多德的三種說服方式——訴諸事實與邏輯(logos)、訴諸講者的人格與可信度(ethos)、訴諸聽眾的情緒(pathos)。Thiel 主張完整的提案必須三者兼備,而不是只靠 logos。"
    },
    "cls": 8
   },
   {
    "term": {
     "en": "Longevity Escape Velocity",
     "zh": "長壽逃逸速度 (Longevity Escape Velocity)"
    },
    "def": {
     "en": "The point where each year of research adds more than one year to remaining life expectancy, so death from aging can be outrun indefinitely. De Grey's central goal, which he gave roughly 25 years and 50% odds in 2012.",
     "zh": "指研究每推進一年,平均餘命就延長超過一年,因而能無限期跑贏老化死亡的臨界點。這是 de Grey 的核心目標;2012 年他估計約需 25 年、成功機率五成。"
    },
    "cls": 19
   },
   {
    "term": {
     "en": "Marx vs. Shakespeare (models of conflict)",
     "zh": "馬克思式 vs. 莎士比亞式衝突 (Marx vs. Shakespeare)"
    },
    "def": {
     "en": "Two theories of why people fight. Marx: conflict comes from real, fundamental differences. Shakespeare: combatants are essentially alike and converge as they fight. Thiel argues tech competition is nearly always Shakespearean.",
     "zh": "解釋人為何開戰的兩種理論。馬克思:衝突源於真實而根本的差異。莎士比亞:交戰雙方本質相似,而且越打越像。Thiel 主張科技業的競爭幾乎都是莎士比亞式的。"
    },
    "cls": 12
   },
   {
    "term": {
     "en": "One to n / Globalization",
     "zh": "從 1 到 n/全球化 (Globalization)"
    },
    "def": {
     "en": "Horizontal, extensive progress: taking something that works and spreading it everywhere — e.g., China re-running the developed world's playbook.",
     "zh": "水平、廣度式的進步:把已經可行的東西推廣到所有地方——例如中國重跑已開發世界的劇本。"
    },
    "cls": 1
   },
   {
    "term": {
     "en": "Optionality",
     "zh": "選擇權思維 (Optionality)"
    },
    "def": {
     "en": "Treating keeping every door open as a value in itself. In an indefinite world cash is king precisely because it commits you to nothing.",
     "zh": "把「每扇門都不關上」本身當成價值。在不明確的世界裡現金為王,正因為它不承諾任何未來。"
    },
    "cls": 13
   },
   {
    "term": {
     "en": "Oversubscribed",
     "zh": "超額認購 (oversubscribed)"
    },
    "def": {
     "en": "A funding round with more investor demand than available allocation. Making a deal seem oversubscribed (when plausible) triggers VCs' fear of missing out, which is often the only force strong enough to overcome their default inertia.",
     "zh": "指投資人的認購需求超過本輪可釋出額度。在合理範圍內營造超額認購的印象,會觸發創投「怕錯過」的心理——這往往是唯一足以壓過他們預設慣性的力量。"
    },
    "cls": 8
   },
   {
    "term": {
     "en": "Ownership / Possession / Control",
     "zh": "所有權/實際經營/控制權"
    },
    "def": {
     "en": "Thiel's three-way split of corporate power: who holds the equity, who runs daily operations, and who formally governs through the board. Companies break where these three fall out of alignment.",
     "zh": "Thiel 把公司權力拆成三種:誰持有股權、誰負責日常營運、誰透過董事會握有正式治理權。公司出問題的地方,就是這三者失去對齊之處。"
    },
    "cls": 6
   },
   {
    "term": {
     "en": "Pareto Inferior",
     "zh": "全面劣勢 (Pareto Inferior)"
    },
    "def": {
     "en": "Worse on every dimension with no compensating gain. Thiel's label for the Space Shuttle versus the Saturn V: it cost more, did less, and was more dangerous — proof that technology can regress.",
     "zh": "在所有面向都更差、毫無補償性優點。Thiel 用它形容太空梭對比土星五號:更貴、做得更少、更危險——證明科技也會倒退。"
    },
    "cls": 15
   },
   {
    "term": {
     "en": "PayPal Mafia",
     "zh": "PayPal 幫 (PayPal Mafia)"
    },
    "def": {
     "en": "The tightly bonded early PayPal team whose alumni went on to found or lead a striking number of major companies. The class asks what mechanics — hiring, sameness, conflict norms, equity — produce a team that loyal and that generative.",
     "zh": "早期 PayPal 那支關係緊密的團隊,成員後來創辦或領導了多家重量級公司。本課要問的是:什麼樣的機制——招聘、同質性、衝突規範、股權——能養出如此忠誠又如此能生出新事業的團隊。"
    },
    "cls": 5
   },
   {
    "term": {
     "en": "Peak Oil",
     "zh": "石油峰值 (Peak Oil)"
    },
    "def": {
     "en": "M. King Hubbert's thesis that because discoveries lead production by 20 to 30 years, oil output must peak and then decline. His mid-1970s call for the U.S. proved right and became the template for worrying about the world.",
     "zh": "M. King Hubbert 的理論:因為油田發現量領先產量 20 至 30 年,石油產量終將見頂下滑。他對美國 1970 年代中期見頂的預測應驗,也成了全球焦慮的原型。"
    },
    "cls": 14
   },
   {
    "term": {
     "en": "PEG Ratio",
     "zh": "PEG 比率 (Price/Earnings to Growth)"
    },
    "def": {
     "en": "P/E divided by annual earnings growth. It fixes the P/E ratio's blindness to growth; a sound growth company should generally have PEG below one.",
     "zh": "本益比除以年盈餘成長率,修正了本益比忽略成長的盲點;體質好的成長型公司 PEG 通常應低於 1。"
    },
    "cls": 3
   },
   {
    "term": {
     "en": "Perfect Competition",
     "zh": "完全競爭 (Perfect Competition)"
    },
    "def": {
     "en": "The textbook state where undifferentiated firms compete until no one earns economic profit. Thiel's twist: far from being the essence of capitalism, it is capitalism's opposite — capital cannot accumulate there.",
     "zh": "教科書上的狀態:無差異的公司彼此競爭,直到沒有人賺得到經濟利潤。Thiel 的翻轉在於:完全競爭不但不是資本主義的本質,反而是它的對立面——資本在那裡無法累積。"
    },
    "cls": 4
   },
   {
    "term": {
     "en": "Power Law",
     "zh": "冪次法則 (Power Law)"
    },
    "def": {
     "en": "A distribution in which the top item outweighs all the rest combined. In venture, the best company in a portfolio tends to be worth more than every other investment together.",
     "zh": "一種頂端項目勝過其餘總和的分布。在創投裡,組合中最好的公司往往比其他所有投資加總還值錢。"
    },
    "cls": 7
   },
   {
    "term": {
     "en": "Pro Rata Rights",
     "zh": "按比例跟投權 (Pro Rata Rights)"
    },
    "def": {
     "en": "An investor's right to invest in later rounds to maintain their ownership percentage. Thiel's backtest: exercise them fully in up rounds led by smart VCs; never add money in flat or down rounds.",
     "zh": "投資人在後續輪次加碼以維持持股比例的權利。Thiel 的回測結論:聰明創投領投的上升輪要足額行使;平盤輪或下修輪則絕不加碼。"
    },
    "cls": 7
   },
   {
    "term": {
     "en": "Proof by Elimination",
     "zh": "排除法證明 (Proof by Elimination)"
    },
    "def": {
     "en": "Thiel's explanation of why money flooded into tech in late 1998: the old economy, emerging markets, Europe, and leverage had all just failed, so tech became the default not by direct argument but because nothing else was left.",
     "zh": "Thiel 對 1998 年底資金湧入科技業的解釋:舊經濟、新興市場、歐洲與槓桿全都剛剛失敗,科技成為預設選項——不是因為正面論證,而是因為別無選擇。"
    },
    "cls": 2
   },
   {
    "term": {
     "en": "Reference Customer",
     "zh": "口碑客戶 (Reference Customer)"
    },
    "def": {
     "en": "A satisfied existing buyer whose name answers the prospect's inevitable question of who else has bought. In big-ticket sales, references are the real unit of progress: land the smallest good one first, then compound.",
     "zh": "一位滿意的既有買家,用來回答潛在客戶必問的「還有誰買過?」。在高單價銷售中,口碑客戶才是真正的進度單位:先拿下最小但夠好的那一個,再滾動放大。"
    },
    "cls": 15
   },
   {
    "term": {
     "en": "Regulatory Moat (Last Mover in Biotech)",
     "zh": "監管護城河(生技的後發優勢)"
    },
    "def": {
     "en": "Frezza's point that clinical-trial barriers, brutal for entrants, protect whoever gets through first: if browsers needed FDA-style approval, Chrome could never have displaced Internet Explorer.",
     "zh": "Frezza 的觀點:臨床試驗門檻對新進者殘酷,卻保護了先通過的人——如果瀏覽器也要 FDA 式審查,Chrome 永遠無法取代 IE。"
    },
    "cls": 16
   },
   {
    "term": {
     "en": "Retrofuture Thinking",
     "zh": "復古未來思維 (Retrofuture)"
    },
    "def": {
     "en": "Studying mid-century visions of the future to find technologies where progress stalled, diagnosing why they failed, and re-attempting them differently with modern tools — never by copying the past outright.",
     "zh": "研究上世紀中葉對未來的想像,找出進展停滯的技術,診斷當年失敗的原因,再用現代工具以不同方式重新挑戰——絕不是照抄過去。"
    },
    "cls": 15
   },
   {
    "term": {
     "en": "Ricardian Paradigm (Gains from Trade)",
     "zh": "李嘉圖模式(Ricardian paradigm,貿易利得)"
    },
    "def": {
     "en": "David Ricardo's framework applied to technology: even when one side is better at everything, comparative advantage makes specialization and trade mutually profitable — so an AI that is only somewhat better enriches humans instead of replacing them.",
     "zh": "把經濟學家 David Ricardo 的框架套用到科技上:即使一方樣樣更強,比較利益仍讓分工與交易對雙方有利——所以「只強一些」的 AI 會讓人類更富有,而不是取代人類。"
    },
    "cls": 17
   },
   {
    "term": {
     "en": "S-Curve",
     "zh": "S 曲線 (S-Curve)"
    },
    "def": {
     "en": "Technologies start slow, accelerate exponentially, then plateau. Seemingly endless exponential progress is really stacked S-curves, with each paradigm shift kicking off the next one.",
     "zh": "科技發展先慢、再指數加速、最後趨緩。看似永無止境的指數進步,其實是一條條 S 曲線疊加而成——每次典範轉移都會啟動下一條曲線。"
    },
    "cls": 19
   },
   {
    "term": {
     "en": "Scapegoat Mechanism",
     "zh": "代罪羔羊機制 (Scapegoat Mechanism)"
    },
    "def": {
     "en": "From René Girard: a community in crisis restores peace by uniting all against one victim, who is blamed for the chaos and credited with the peace — judged all-evil and all-good at once. The viable victim must be both insider and outsider.",
     "zh": "源自 René Girard:陷入危機的群體靠著全體團結對付一個受害者來恢復和平;這名受害者既被怪罪為亂源、又被歸功於帶來和平——同時被判定為至惡與至善。可行的祭品必須內外兼具。"
    },
    "cls": 18
   },
   {
    "term": {
     "en": "Secret",
     "zh": "秘密 (secret)"
    },
    "def": {
     "en": "An important, unpopular or unconventional truth that is hard—but possible—to discover. Every great business is built on at least one.",
     "zh": "一個重要、不受歡迎或不合常規的真相,困難但有可能被發現。每家偉大的公司都至少建立在一個秘密上。"
    },
    "cls": 11
   },
   {
    "term": {
     "en": "Secret plan",
     "zh": "祕密計畫 (secret plan)"
    },
    "def": {
     "en": "A distinctive, non-obvious roadmap to a prospective gold mine that competitors can't see or copy — Hoffman's examples include Mozilla, Quora, and Dropbox. Without a big, distinctive idea, you have nothing.",
     "zh": "一張通往潛在金礦、對手看不見也抄不走的獨特路線圖——Hoffman 舉的例子有 Mozilla、Quora 和 Dropbox。沒有獨特的大構想,你什麼都沒有。"
    },
    "cls": 12
   },
   {
    "term": {
     "en": "Secrets of nature vs. secrets about people",
     "zh": "自然的秘密與關於人的秘密"
    },
    "def": {
     "en": "Natural secrets require observing and experimenting on the physical world; human secrets are what people hide because exposure hurts. Their intersection is the most enlightening hunting ground.",
     "zh": "自然的秘密要靠對物理世界的觀察與實驗;關於人的秘密,則是人們因怕曝光受傷而隱藏的事。兩者的交會處是最有啟發性的獵場。"
    },
    "cls": 11
   },
   {
    "term": {
     "en": "Social Entrepreneurship",
     "zh": "社會企業 (Social Entrepreneurship)"
    },
    "def": {
     "en": "The 'doing well by doing good' model. Thiel's critique: optimizing for profit and social approval at the same time usually achieves neither, and the fashion fed the mimetic cleantech herd.",
     "zh": "「行善兼賺錢」的模式。Thiel 的批評是:同時最佳化利潤與社會認同,通常兩頭落空;而這股風潮也助長了清潔技術的一窩蜂。"
    },
    "cls": 14
   },
   {
    "term": {
     "en": "Software Is Eating the World",
     "zh": "軟體正在吞噬世界 (Software Is Eating the World)"
    },
    "def": {
     "en": "Andreessen's 2011 thesis that software companies systematically take over existing industries. The class splits it into three strengths: weak (software eats the tech industry itself), strong (software transforms centuries-old industries), and strongest (Silicon Valley-style software companies come to run everything).",
     "zh": "Andreessen 2011 年提出的論點:軟體公司會系統性地接管既有產業。本課把它拆成三種強度:弱版本(軟體吞噬科技業本身)、強版本(軟體改造數百年未變的產業)、最強版本(矽谷式軟體公司最終主導一切)。"
    },
    "cls": 10
   },
   {
    "term": {
     "en": "Technological Singularity",
     "zh": "技術奇點 (Technological Singularity)"
    },
    "def": {
     "en": "A hypothesized point where accelerating technology transforms civilization beyond current comprehension. The class's framing question is whether we are racing toward it or drifting into stagnation.",
     "zh": "指科技加速到某個臨界點後,文明被徹底改造、超出當下理解範圍的假想時刻。本課的核心提問正是:我們是在衝向奇點,還是在滑向停滯?"
    },
    "cls": 19
   },
   {
    "term": {
     "en": "The $1,000 Genome",
     "zh": "千元基因體 (the $1,000 genome)"
    },
    "def": {
     "en": "Shorthand for the collapse in sequencing costs—from $500 million per genome in 2000 toward $1,000—which turns biology into a data problem where the bottleneck is interpretation, not reading.",
     "zh": "指定序成本的崩跌——從 2000 年每個基因體 5 億美元一路逼近 1,000 美元——這讓生物學變成資料問題,瓶頸從「讀出資料」轉為「解讀資料」。"
    },
    "cls": 16
   },
   {
    "term": {
     "en": "The Contrarian Quadrant",
     "zh": "逆勢象限(contrarian quadrant)"
    },
    "def": {
     "en": "In the explored-vs-consensus 2x2, the underexplored-and-contrarian cell where the best opportunities hide. In 2012 Thiel placed AI there — and biotech 2.0 in the opposite, worst cell: heavily explored consensus.",
     "zh": "在「探索程度 × 共識程度」的 2x2 矩陣中,最佳機會藏身於「未被探索且逆勢」的那一格。2012 年 Thiel 把 AI 放在這一格,而把生技 2.0 放在對角最糟的一格:高度探索的共識。"
    },
    "cls": 17
   },
   {
    "term": {
     "en": "The Distribution Dead Zone",
     "zh": "通路死亡地帶 (dead zone)"
    },
    "def": {
     "en": "The gap where products are too cheap to support a sales force but their buyers — typically small businesses — cannot be reached efficiently by mass advertising. Intuit solved it and won a terminal monopoly.",
     "zh": "產品單價養不起業務團隊、客群(通常是中小企業)又無法用大眾廣告有效觸及的空隙地帶。Intuit 攻克了它,換來終極壟斷(terminal monopoly)。"
    },
    "cls": 9
   },
   {
    "term": {
     "en": "Thiel's Law",
     "zh": "提爾定律(Thiel's Law)"
    },
    "def": {
     "en": "A startup messed up at its foundation cannot be fixed. Founding-moment choices about people, structure, and culture are effectively permanent.",
     "zh": "在基礎上搞砸的新創無法修復。創立時關於人、架構與文化的選擇,實際上是永久性的。"
    },
    "cls": 6
   },
   {
    "term": {
     "en": "Timing Risk",
     "zh": "時機風險 (timing risk)"
    },
    "def": {
     "en": "The danger of being right on substance but wrong on when. Founders bear it fully — one shot at one moment — while VCs diversify across a 20-year portfolio and can re-back the same idea when its time finally comes.",
     "zh": "方向看對、時間看錯的風險。創業者得完全承擔——一次機會、一個時點;創投則能在二十年的投資組合裡分散風險,等時機成熟時再投一次同樣的構想。"
    },
    "cls": 10
   },
   {
    "term": {
     "en": "Value Capture",
     "zh": "價值捕捉 (Value Capture)"
    },
    "def": {
     "en": "Keeping a meaningful share of the value you create as profit. Airlines and Isaac Newton created enormous value but captured almost none — which is why capture, not just creation, defines greatness.",
     "zh": "把自己創造的價值以利潤形式留下有意義的一部分。航空公司和牛頓都創造了巨大價值卻幾乎沒留住——所以定義偉大的是「留住」,不只是「創造」。"
    },
    "cls": 3
   },
   {
    "term": {
     "en": "Vertical vs. horizontal search",
     "zh": "垂直 vs. 水平搜尋"
    },
    "def": {
     "en": "Two ways to hunt for a great business: going deep in one domain (vertical) versus scanning broadly across many (horizontal). Thiel argues depth wins — breadth systematically underestimates how vast the search space is.",
     "zh": "尋找偉大事業的兩種方式:在單一領域深挖(垂直),或在多個領域廣掃(水平)。Thiel 主張深度勝出——廣度式搜尋總是低估了整個空間的浩瀚程度。"
    },
    "cls": 5
   },
   {
    "term": {
     "en": "Viral Coefficient",
     "zh": "病毒係數 (viral coefficient)"
    },
    "def": {
     "en": "The number of new users each existing user brings in per cycle; above 1 means exponential growth. PayPal sustained 7% daily growth — doubling every 10 days — by chasing the highest-velocity segment first.",
     "zh": "每位既有用戶在一個循環內帶進的新用戶數;大於 1 就是指數成長。PayPal 先攻金流速度最快的族群,做到每日 7% 成長、用戶數每 10 天翻倍。"
    },
    "cls": 9
   },
   {
    "term": {
     "en": "Zero to One (0 to 1)",
     "zh": "從 0 到 1 (Zero to One)"
    },
    "def": {
     "en": "Vertical, intensive progress: doing something genuinely new that has never been done, as opposed to replicating what exists.",
     "zh": "垂直、密集式的進步:做出前所未有的新東西,而不是複製既有事物。"
    },
    "cls": 1
   },
   {
    "term": {
     "en": "Zero-sum vs. non-zero-sum people",
     "zh": "零和型 vs. 非零和型人才"
    },
    "def": {
     "en": "Thiel's split between fighters (athletes), who instinctively compete, and creators (nerds), who instinctively build. All-nerd teams get ambushed by wars they never noticed; all-athlete teams start wars they should have avoided. Winning teams mix both inside a monopoly business.",
     "zh": "Thiel 把人分成戰士型(運動員),本能地競爭;與創造者型(書呆子),本能地打造東西。全是書呆子的團隊會被沒察覺的戰爭伏擊;全是運動員的團隊會發動本可避免的戰爭。贏家在獨占事業裡混合兩者。"
    },
    "cls": 5
   }
  ]
 },
 {
  "slug": "flashcards",
  "layout": "flashcards",
  "icon": "style",
  "title": {
   "en": "Flashcards",
   "zh": "字卡"
  },
  "subtitle": {
   "en": "Flip through the core concepts, one card at a time.",
   "zh": "一次一張,翻卡復習核心概念。"
  },
  "cards": [
   {
    "front": {
     "en": "0 to 1 vs. 1 to n",
     "zh": "0 到 1 vs. 1 到 n"
    },
    "back": {
     "en": "0 to 1 = vertical progress: creating something new (technology). 1 to n = horizontal progress: copying what works (globalization).",
     "zh": "0 到 1 = 垂直進步:創造新東西(科技)。1 到 n = 水平進步:複製可行的東西(全球化)。"
    },
    "cls": 1
   },
   {
    "front": {
     "en": "Thiel's contrarian question",
     "zh": "Thiel 的逆向思考問題"
    },
    "back": {
     "en": "What important truth do very few people agree with you on? Business version: what valuable company is nobody building?",
     "zh": "有什麼重要的真相,是很少人同意你的?商業版:有什麼有價值的公司,是沒有人在打造的?"
    },
    "cls": 1
   },
   {
    "front": {
     "en": "Why can't schools produce founders?",
     "zh": "為什麼學校教不出創辦人?"
    },
    "back": {
     "en": "Education is 1 to n by nature — watch, imitate, repeat. Learnable mechanics get you about 30% of the way; the 0-to-1 leap can't be taught.",
     "zh": "教育本質上是 1 到 n——觀察、模仿、重複。可學的技術面只能帶你走三成的路;0 到 1 的一躍是教不來的。"
    },
    "cls": 1
   },
   {
    "front": {
     "en": "Four theories of the future of intensive progress",
     "zh": "密集進步之未來的四種理論"
    },
    "back": {
     "en": "Convergence, cyclical, collapse, singularity. Thiel: people overrate the first two and underrate the last two.",
     "zh": "趨同、循環、毀滅、奇點。Thiel 認為人們高估前兩者、低估後兩者。"
    },
    "cls": 1
   },
   {
    "front": {
     "en": "The three questions for starting on the 0-to-1 path",
     "zh": "踏上 0 到 1 之路的三個起點問題"
    },
    "back": {
     "en": "What is valuable? What can I do? What is nobody else doing?",
     "zh": "什麼是有價值的?我能做什麼?有什麼是沒有人在做的?"
    },
    "cls": 1
   },
   {
    "front": {
     "en": "The real cost of startup failure",
     "zh": "新創失敗的真正代價"
    },
    "back": {
     "en": "Not money — the financial downside is smaller than assumed. The danger is nonfinancial: learning nothing except how to fail, and becoming more risk-averse.",
     "zh": "不是錢——金錢損失比想像中小。危險在非金錢面:可能什麼都沒學到,只學會怎麼失敗,並變得更害怕風險。"
    },
    "cls": 1
   },
   {
    "front": {
     "en": "Thiel's two-part definition of a bubble",
     "zh": "Thiel 對泡沫的兩要件定義"
    },
    "back": {
     "en": "(1) Widespread, intense belief that is (2) not true. Frothy valuations alone don't qualify — no collective conviction, no bubble.",
     "zh": "(1) 廣泛而強烈的信念,且 (2) 這個信念不為真。光有估值偏高不算——沒有集體堅信,就沒有泡沫。"
    },
    "cls": 2
   },
   {
    "front": {
     "en": "How long did the dot-com mania actually last?",
     "zh": "網路狂熱實際上持續了多久?"
    },
    "back": {
     "en": "About 18 months — roughly September 1998 to March 2000 — not the whole decade. The early '90s were recession and pessimism; 1995–98 was relatively quiet.",
     "zh": "大約 18 個月——約 1998 年 9 月到 2000 年 3 月——而非整個十年。九〇年代初是衰退與悲觀,1995 到 1998 年則相對平靜。"
    },
    "cls": 2
   },
   {
    "front": {
     "en": "Why did money default into tech in late 1998?",
     "zh": "為什麼 1998 年底資金會「預設」流向科技業?"
    },
    "back": {
     "en": "Proof by elimination: the old economy lost to Mexico/China, the Asian crisis exposed crony capitalism, the euro inspired doubt, and LTCM discredited leverage. Tech was the last option standing.",
     "zh": "排除法證明:舊經濟輸給墨西哥與中國、亞洲金融風暴暴露裙帶資本主義、歐元令人懷疑、LTCM 讓槓桿信譽掃地。科技是最後僅存的選項。"
    },
    "cls": 2
   },
   {
    "front": {
     "en": "PayPal's viral growth mechanics (1999–2000)",
     "zh": "PayPal 的病毒式成長機制(1999–2000)"
    },
    "back": {
     "en": "$10 sign-up bonus plus $10 per referral drove 7–10% daily user growth — at about $20 per customer with zero revenue. Buzz funded each next raise, capped by $100M closed March 31, 2000.",
     "zh": "註冊送 10 美元、推薦再送 10 美元,帶來每天 7–10% 的用戶成長——代價是每位客戶約 20 美元、營收掛零。靠話題熱度撐起一輪輪募資,最終在 2000 年 3 月 31 日完成 1 億美元募資。"
    },
    "cls": 2
   },
   {
    "front": {
     "en": "What does the VA Linux story illustrate?",
     "zh": "VA Linux 的故事說明了什麼?"
    },
    "back": {
     "en": "The mania's whiplash: IPO at $30, up to $300 the same day (biggest first-day gain ever), founder worth ~$1B on paper — then two consecutive 90% drops left him with $5–6M.",
     "zh": "狂熱的劇烈甩尾:IPO 定價 30 美元,當天衝上 300 美元(史上最大首日漲幅),創辦人帳面身價約 10 億美元——隨後連續兩次跌掉九成,最後只剩 500 到 600 萬美元。"
    },
    "cls": 2
   },
   {
    "front": {
     "en": "Why are bubble thinking and antibubble thinking both wrong?",
     "zh": "為什麼泡沫思維與反泡沫思維都是錯的?"
    },
    "back": {
     "en": "Both treat truth as social — read off the crowd, copied or inverted. If the herd isn't thinking, opposing it is as random as joining it. Instead ask: is this specific company valuable, and why?",
     "zh": "兩者都把真理當成社會事實——從群眾身上讀取,不是照抄就是反著做。如果群眾根本沒在思考,反著做和跟著做一樣隨機。正確的問法是:這家特定公司有價值嗎?為什麼?"
    },
    "cls": 2
   },
   {
    "front": {
     "en": "The three requirements of a great technology company",
     "zh": "偉大科技公司的三個條件"
    },
    "back": {
     "en": "Create value, be durable (last for decades), and capture a meaningful share of the value created. Fail any one and greatness is off the table.",
     "zh": "創造價值、經久不衰(能活數十年)、並留住所創造價值中有意義的一部分。缺一項就與偉大無緣。"
    },
    "cls": 3
   },
   {
    "front": {
     "en": "Why does perfect competition mean nobody makes money?",
     "zh": "為什麼完全競爭之下沒有人賺得到錢?"
    },
    "back": {
     "en": "Any profit attracts entrants until it vanishes; any loss drives exits until it stops. Every firm is a negligible price taker selling at marginal cost, so economic profit is competed to zero.",
     "zh": "只要有利潤就會吸引新玩家進場直到利潤消失;有虧損就會有人退場直到虧損停止。每家公司都是微不足道的價格接受者,以邊際成本出售,經濟利潤被競爭壓到零。"
    },
    "cls": 3
   },
   {
    "front": {
     "en": "Capablanca's chess lesson applied to startups",
     "zh": "Capablanca 的西洋棋心法如何套用在新創上?"
    },
    "back": {
     "en": "'You must study the endgame before everything else.' Plan backwards from what the market looks like when the dust settles; aim to be the durable last mover, not the fading first mover.",
     "zh": "「你必須先研究殘局,再學其他一切。」從塵埃落定後的市場樣貌倒推規劃;目標是成為屹立不搖的最後行動者,而不是曇花一現的先行者。"
    },
    "cls": 3
   },
   {
    "front": {
     "en": "PayPal's two decisive advantages over competitors",
     "zh": "PayPal 勝過競爭者的兩項決定性優勢"
    },
    "back": {
     "en": "(1) 'Igor', its sophisticated fraud detection software, built against rampant internet payment fraud; (2) instant-feeling payments, achieved by capturing bank account data, modeling balances, and working around ACH delays.",
     "zh": "(1)「Igor」——為對抗猖獗的網路支付詐欺打造的精密詐欺偵測軟體;(2)近乎即時的付款體驗——靠取得銀行帳戶資訊、建模預測餘額、繞過 ACH 清算延遲達成。"
    },
    "cls": 3
   },
   {
    "front": {
     "en": "How was LinkedIn's ~850 P/E in 2012 rationalized?",
     "zh": "2012 年 LinkedIn 高達約 850 倍的本益比要怎麼說得通?"
    },
    "back": {
     "en": "Via DCF: of its ~$10B market cap, only ~$2B mapped to expected value in 2012–2019; the other ~$8B reflected expectations for 2020 and beyond — a bet that only pays if the company endures for decades.",
     "zh": "靠 DCF:在約 100 億美元市值中,只有約 20 億對應 2012–2019 年的預期價值,其餘約 80 億全反映對 2020 年以後的期待——這個賭注只有公司能存活數十年才會兌現。"
    },
    "cls": 3
   },
   {
    "front": {
     "en": "The question Thiel says matters as much as market size",
     "zh": "Thiel 認為和市場規模同等重要的那個問題"
    },
    "back": {
     "en": "'What valuable company is nobody building?' A well-defined market you can own beats a huge market you must fight over.",
     "zh": "「還有哪家有價值的公司沒人去做?」一個你能獨占、定義清晰的市場,勝過一個必須殺得頭破血流的巨大市場。"
    },
    "cls": 3
   },
   {
    "front": {
     "en": "What is the 'last mover advantage'?",
     "zh": "什麼是「後發優勢」(last mover advantage)?"
    },
    "back": {
     "en": "Making the last great development in a market — a breakthrough so complete that no successor can top it — and then collecting durable monopoly profits, like Microsoft in operating systems or Google in search.",
     "zh": "做出一個市場「最後一次重大突破」——徹底到後來者無法超越——然後長期收取獨占利潤,例如作業系統的 Microsoft、搜尋的 Google。"
    },
    "cls": 4
   },
   {
    "front": {
     "en": "How could Google's market share be both 66% and under 4% at the same time?",
     "zh": "為什麼 Google 的市占率可以同時是 66% 和不到 4%?"
    },
    "back": {
     "en": "Market definition games: 66.4% of search (a monopoly), but under 4% of global advertising (~$412B) — the same lever companies pull to look dominant to investors or harmless to regulators.",
     "zh": "市場定義的把戲:在搜尋市場占 66.4%(獨占),但在約 4,120 億美元的全球廣告市場占不到 4%——公司就是用這根槓桿,對投資人裝強、對監管機關裝弱。"
    },
    "cls": 4
   },
   {
    "front": {
     "en": "Thiel's three-step formula for creating a market",
     "zh": "Thiel 創造市場的三步公式"
    },
    "back": {
     "en": "1) Find or create a new market of the right (small) size; 2) monopolize it outright; 3) expand into adjacent markets over time along a credible scaling story — Amazon: books, then a general store, then everything.",
     "zh": "1)找到或創造一個大小剛好(偏小)的新市場;2)徹底壟斷它;3)沿著可信的擴張敘事,逐步進入相鄰市場——Amazon:先賣書,再百貨,再什麼都賣。"
    },
    "cls": 4
   },
   {
    "front": {
     "en": "What do huge cash piles and high gross margins signal about a business?",
     "zh": "巨額現金與高毛利率透露出企業的什麼訊號?"
    },
    "back": {
     "en": "Monopoly. Firms in real competition must reinvest everything to survive; Apple's ~$98B in cash and Microsoft's ~75% gross margins are things perfect competition would never allow.",
     "zh": "獨占。真正身處競爭的公司必須把所有錢再投入才能存活;Apple 約 980 億美元的現金和 Microsoft 約 75% 的毛利率,在完全競爭下根本不可能存在。"
    },
    "cls": 4
   },
   {
    "front": {
     "en": "Why did Pets.com, Webvan, and Kozmo fail, in this framework?",
     "zh": "在這套框架下,Pets.com、Webvan、Kozmo 為什麼失敗?"
    },
    "back": {
     "en": "They ran the formula backwards — started with a huge, contested market and tried to shrink into something defensible, mistaking their own rhetoric about uniqueness for objective reality.",
     "zh": "他們把公式反著用——先衝進巨大且競爭激烈的市場,再想縮回一塊守得住的地盤,並把自己「很獨特」的話術誤當成客觀現實。"
    },
    "cls": 4
   },
   {
    "front": {
     "en": "The '20th employee' test",
     "zh": "「第 20 號員工」測試"
    },
    "back": {
     "en": "Why should employee #20 join you instead of Google, which pays more and carries more prestige? The only good answer is a credible story that you are building a different monopoly they can help own.",
     "zh": "第 20 號員工為什麼要加入你,而不是薪水更高、名聲更響的 Google?唯一的好答案,是一個可信的敘事:你正在建立另一個獨占,而他能參與擁有它。"
    },
    "cls": 4
   },
   {
    "front": {
     "en": "Nerds vs. athletes — why does a startup need both?",
     "zh": "書呆子 vs. 運動員——為什麼新創兩種人都需要?"
    },
    "back": {
     "en": "Pure creators never notice they have wandered into a war; pure fighters pick fights they should avoid. A monopoly business staffed mostly with creators plus a few fighters builds in peace and defends when attacked.",
     "zh": "純創造者永遠不會發現自己已身在戰場;純戰士則專挑不該打的仗。以創造者為主、佐以少數戰士的獨占事業,平時能安心創造,遇襲時能果斷防守。"
    },
    "cls": 5
   },
   {
    "front": {
     "en": "Levchin's rule when you hesitate about a candidate",
     "zh": "Levchin 對「面試時猶豫了」的處理原則"
    },
    "back": {
     "en": "Any real doubt is disqualifying. PayPal rejected an ace who talked about playing hoops, and regretted the one time it overrode its hesitation — cultural mismatch always resurfaces after the hire.",
     "zh": "只要有真正的疑慮就直接出局。PayPal 拒絕過一位提到打「hoops」的滿分候選人,也後悔過唯一一次壓下猶豫錄取的人——文化不合,錄取後一定會再浮現。"
    },
    "cls": 5
   },
   {
    "front": {
     "en": "The denominator question",
     "zh": "「分母」問題"
    },
    "back": {
     "en": "Told they will get N shares, the best candidates ask what the denominator is — what fraction of the company that means. Thinking in ownership percentages, not share counts or salary, marks a builder.",
     "zh": "聽到「你會拿到 N 股」時,最好的候選人會反問分母是多少——那些股數佔公司多少比例。用持股比例思考、而非股數或薪水,是打造者的印記。"
    },
    "cls": 5
   },
   {
    "front": {
     "en": "What does the eBay–PayPal consultant story prove?",
     "zh": "eBay 高薪回聘 PayPal 工程師的故事證明了什麼?"
    },
    "back": {
     "en": "Value accumulates in people over years. After the acquisition PayPal's engineers left, and eBay had to rehire them as consultants at roughly 3x pay because no one else understood the systems. Hire people who will stay for the long haul.",
     "zh": "價值是經年累月長在人身上的。收購後 PayPal 工程師集體離職,eBay 只能用約三倍薪資回聘他們當顧問,因為沒有別人懂那套系統。所以要雇用願意長期留下的人。"
    },
    "cls": 5
   },
   {
    "front": {
     "en": "How do you recruit an engineer away from Google?",
     "zh": "如何從 Google 手上把工程師挖過來?"
    },
    "back": {
     "en": "Never on cash — Google always outbids you. Sell the story: interchangeable cog there versus instrumental builder here; a real stake in something new; and the honest claim that a startup compounds their abilities faster than a comfortable job ever will.",
     "zh": "絕不比現金——Google 永遠出得更高。要賣故事:在那裡是可替換的齒輪,在這裡是關鍵的打造者;真正持有一份新事物;再加上誠實的論點——新創讓能力複利的速度,遠勝一份舒適的工作。"
    },
    "cls": 5
   },
   {
    "front": {
     "en": "Vertical vs. horizontal search for a business",
     "zh": "找事業機會:垂直搜尋 vs. 水平搜尋"
    },
    "back": {
     "en": "Go deep in one domain instead of scanning shallowly across many; depth compounds while breadth underestimates the vastness of the space. An internet company drifting into cleantech is not flexible — it is lost.",
     "zh": "在單一領域深挖,勝過在多個領域淺掃;深度會複利,廣度則低估了整個空間的浩瀚。一家網路公司飄去做潔淨科技,不是有彈性,而是迷路了。"
    },
    "cls": 5
   },
   {
    "front": {
     "en": "Thiel's Law",
     "zh": "提爾定律(Thiel's Law)"
    },
    "back": {
     "en": "A startup messed up at its foundation cannot be fixed.",
     "zh": "在基礎上搞砸的新創,是無法修復的。"
    },
    "cls": 6
   },
   {
    "front": {
     "en": "Standard startup vesting schedule",
     "zh": "新創標準的股權歸屬(vesting)排程"
    },
    "back": {
     "en": "Four years with a one-year cliff: 25% vests at year one, the rest monthly over the following 36 months. Founders should vest too.",
     "zh": "四年、含一年斷崖期(cliff):滿一年歸屬 25%,其餘 36 個月按月歸屬。創辦人自己也該適用。"
    },
    "cls": 6
   },
   {
    "front": {
     "en": "The $150k CEO salary rule",
     "zh": "CEO 薪資 15 萬美元法則"
    },
    "back": {
     "en": "CEO pay was the most predictive diligence variable Founders Fund found: under about $150k signals an equity-aligned CEO; higher pay predicts worse outcomes and inflates the whole pay scale.",
     "zh": "CEO 薪資是 Founders Fund 找到預測力最強的盡職調查變數:低於約 15 萬美元代表 CEO 與股權利益一致;薪水越高,預後越差,還會撐高全公司的薪資水準。"
    },
    "cls": 6
   },
   {
    "front": {
     "en": "Ownership vs. possession vs. control",
     "zh": "所有權 vs. 實際經營 vs. 控制權"
    },
    "back": {
     "en": "Who holds the equity, who runs the company day to day, and who formally governs (the board). Keeping the three aligned is the core structural problem of a startup.",
     "zh": "誰持有股權、誰實際營運公司、誰握有正式治理權(董事會)。讓三者保持對齊,是新創在結構上的核心課題。"
    },
    "cls": 6
   },
   {
    "front": {
     "en": "Why raise on a convertible note instead of priced equity?",
     "zh": "為什麼用可轉換公司債募資,而不是定價股權輪?"
    },
    "back": {
     "en": "A cap plus discount defers valuation to the Series A, transaction costs are far lower than a priced round's $30–40k, and with no price set, an early down round is mathematically impossible.",
     "zh": "估值上限加折價把定價問題延到 A 輪;交易成本遠低於定價輪的 3–4 萬美元;而且沒定價就沒有參考點,早期在數學上不可能出現估值下修。"
    },
    "cls": 6
   },
   {
    "front": {
     "en": "What happens in a down round?",
     "zh": "估值下修輪(down round)會發生什麼事?"
    },
    "back": {
     "en": "Anti-dilution provisions reprice earlier investments, gutting founder and employee equity, and the company's factions turn on each other. Thiel's rule: avoid down rounds, almost without exception.",
     "zh": "反稀釋條款回頭重新計價舊投資,重創創辦人與員工的股權,公司內各方開始反目。Thiel 的原則:幾乎沒有例外,絕對要避免估值下修。"
    },
    "cls": 6
   },
   {
    "front": {
     "en": "The one-line rule of VC fund profitability",
     "zh": "創投基金獲利的一句話法則"
    },
    "back": {
     "en": "To a first approximation, a fund makes money only if its best investment ends up worth more than the whole fund.",
     "zh": "粗略來說,唯有最佳投資的最終價值超過整檔基金,基金才賺錢。"
    },
    "cls": 7
   },
   {
    "front": {
     "en": "What does 2-and-20 mean?",
     "zh": "「2 與 20」是什麼意思?"
    },
    "back": {
     "en": "A 2% annual management fee on fund size, plus 20% of the profits (carry) — the carry is the real payday.",
     "zh": "每年收基金規模 2% 的管理費,外加利潤的 20%(carry)——carry 才是真正的報酬來源。"
    },
    "cls": 7
   },
   {
    "front": {
     "en": "The J curve",
     "zh": "J 曲線"
    },
    "back": {
     "en": "A fund dips underwater early from fees and failures, then climbs late if winners compound; the key question is when it crosses break-even.",
     "zh": "基金前期因管理費與失敗案沉到水面下,後期靠贏家複利上揚;關鍵是它何時越過損益兩平。"
    },
    "cls": 7
   },
   {
    "front": {
     "en": "How to weigh a startup equity offer",
     "zh": "如何衡量新創的股權報價"
    },
    "back": {
     "en": "The company's position on the power-law curve matters more than your percentage: Google's 100th employee beat the average venture-backed CEO of the decade.",
     "zh": "公司在冪次曲線上的位置比你的持股百分比更重要:Google 第 100 號員工的報酬,勝過那十年間創投支持的 CEO 平均水準。"
    },
    "cls": 7
   },
   {
    "front": {
     "en": "Hedgehog vs. fox in business",
     "zh": "商場上的刺蝟與狐狸"
    },
    "back": {
     "en": "The fox knows many little things; the hedgehog knows one big thing. Thiel: forced to choose, be the hedgehog.",
     "zh": "狐狸知道很多小事,刺蝟只懂一件大事。Thiel 說:非選不可時,當刺蝟。"
    },
    "cls": 7
   },
   {
    "front": {
     "en": "The panel's take on founding-team size",
     "zh": "座談嘉賓對創辦團隊人數的看法"
    },
    "back": {
     "en": "Solo can work, two equal co-founders is best, four is too many; the right co-founder usually more than doubles the outcome.",
     "zh": "單人可行,兩位平分股權最好,四人太多;選對共同創辦人通常能讓成果翻超過一倍。"
    },
    "cls": 7
   },
   {
    "front": {
     "en": "How much money should a startup raise, as a first approximation?",
     "zh": "新創第一輪該募多少錢?(粗略估法)"
    },
    "back": {
     "en": "Map out one year of operating expenses and multiply by 1.5.",
     "zh": "抓出一年的營運開支,乘以 1.5。"
    },
    "cls": 8
   },
   {
    "front": {
     "en": "The three Aristotelian elements every pitch needs",
     "zh": "每場提案都需要的亞里斯多德三要素"
    },
    "back": {
     "en": "Logos (facts and reason), ethos (your credibility), pathos (the audience's emotions) — data alone persuades no one.",
     "zh": "Logos(事實與邏輯)、ethos(你的可信度)、pathos(聽眾的情緒)——光靠數據說服不了任何人。"
    },
    "cls": 8
   },
   {
    "front": {
     "en": "Why should you never ask a VC to sign an NDA?",
     "zh": "為什麼絕對不要要求創投簽 NDA?"
    },
    "back": {
     "en": "It brands you a rank amateur. VCs see torrents of deals; ideas are not the scarce resource, execution is. If you cannot share details, find a different VC.",
     "zh": "這會讓你被貼上「十足外行」的標籤。創投閱案無數,稀缺的不是點子而是執行力。如果你不放心分享細節,就換一家創投。"
    },
    "cls": 8
   },
   {
    "front": {
     "en": "When is the strongest time to raise money?",
     "zh": "什麼時候是募資的最強時點?"
    },
    "back": {
     "en": "When you do not need it. With only six months of runway the VC holds all the leverage; raising well before the cash crunch keeps the negotiating power with you.",
     "zh": "在你不需要錢的時候。現金只剩六個月時,籌碼全在創投手上;在資金告急前早早出手,談判力才留在你這邊。"
    },
    "cls": 8
   },
   {
    "front": {
     "en": "Roughly how does a VC's value split between money and advice?",
     "zh": "創投的價值大致上是「錢」和「建議」各占多少?"
    },
    "back": {
     "en": "About 80% capital and 20% advising. Claims of intensive hands-on company building rarely survive the math of a large portfolio and limited partner time.",
     "zh": "大約 80% 是資本、20% 是建議。「貼身陪跑」的宣稱,在龐大投資組合與有限合夥人時間的數學面前多半站不住腳。"
    },
    "cls": 8
   },
   {
    "front": {
     "en": "What happens after a great pitch meeting with no internal evangelist?",
     "zh": "提案會議氣氛很好,但firm 內部沒有擁護者,結果會如何?"
    },
    "back": {
     "en": "The deal quietly dies. VC decisions take days to months, and partners poke holes in each other's deals — someone inside must keep championing yours.",
     "zh": "案子會無聲無息地死掉。創投的決策需要數天到數月,而合夥人專挑彼此案子的毛病——必須有內部的人持續替你辯護。"
    },
    "cls": 8
   },
   {
    "front": {
     "en": "The CLV formula and the viability test",
     "zh": "CLV 公式與生意成立的判準"
    },
    "back": {
     "en": "CLV = ARPU × gross margin × average customer lifetime. The business is sustainable only if CLV > CPA.",
     "zh": "CLV = ARPU × 毛利率 × 平均顧客存續期間。唯有 CLV 大於獲客成本(CPA),生意才成立。"
    },
    "cls": 9
   },
   {
    "front": {
     "en": "The distribution dead zone",
     "zh": "通路死亡地帶"
    },
    "back": {
     "en": "Products too cheap for a sales force but whose buyers (especially small businesses) can't be reached by mass ads. Intuit cracked it and gained a terminal monopoly.",
     "zh": "單價養不起業務、客群(尤其中小企業)又打不到大眾廣告的地帶。Intuit 攻克後拿下終極壟斷。"
    },
    "cls": 9
   },
   {
    "front": {
     "en": "What makes real viral marketing work?",
     "zh": "真正的病毒式行銷靠什麼成立?"
    },
    "back": {
     "en": "The product's core use case must be inherently viral — PayPal payments, Hotmail's email footer, Dropbox sharing. A tell-your-friends button is not virality.",
     "zh": "產品的核心使用情境必須天生具傳播性——PayPal 轉帳、Hotmail 信末連結、Dropbox 共享。加一顆「告訴朋友」按鈕不算。"
    },
    "cls": 9
   },
   {
    "front": {
     "en": "The power law of distribution",
     "zh": "通路的冪次法則"
    },
    "back": {
     "en": "One channel is usually optimal. Nail a single channel and you have a great business; dabble in several without nailing one and you're finished.",
     "zh": "通常只有一條通路是最佳解。打通一條就是好生意;好幾條都沾卻一條沒打通,就完了。"
    },
    "cls": 9
   },
   {
    "front": {
     "en": "Besides customers, who must a founder sell to?",
     "zh": "除了顧客,創辦人還得把公司賣給誰?"
    },
    "back": {
     "en": "Investors, employees, and the media. At scale, hire full-time corporate development; founders should spend 25–33% of their time attracting talent.",
     "zh": "投資人、員工和媒體。規模化後要有全職的企業發展負責人;創辦人應花 25–33% 的時間吸引人才。"
    },
    "cls": 9
   },
   {
    "front": {
     "en": "Why is great sales talent invisible?",
     "zh": "為什麼頂尖銷售人才是隱形的?"
    },
    "back": {
     "en": "Sales works best hidden: titles get relabeled (account executive, business development), and unlike coding, sales skill can't be judged from outside — the grandmasters never look like salespeople.",
     "zh": "銷售愈隱形愈有效:職稱不斷改名(客戶經理、商務開發),而且銷售功力不像寫程式能一眼判斷——真正的大師從不像個業務。"
    },
    "cls": 9
   },
   {
    "front": {
     "en": "The three versions of 'software is eating the world'",
     "zh": "「軟體正在吞噬世界」的三種版本"
    },
    "back": {
     "en": "Weak: software eats the tech industry itself (hardware to software/cloud). Strong: software transforms centuries-old industries like newspapers. Strongest: Silicon Valley-style software companies come to dominate every industry.",
     "zh": "弱版本:軟體吞噬科技業本身(硬體移向軟體/雲端)。強版本:軟體改造報業等數百年未變的產業。最強版本:矽谷式軟體公司終將主導所有產業。"
    },
    "cls": 10
   },
   {
    "front": {
     "en": "How did Spotify avoid Napster's fate?",
     "zh": "Spotify 如何避免重蹈 Napster 的覆轍?"
    },
    "back": {
     "en": "It paid the incumbents instead of attacking them: massive checks to labels, indirect entry via weak-CD markets like Sweden, and staggered contract expirations so labels could not coordinate a rate hike.",
     "zh": "它付錢給既得利益者而非正面攻擊:開大額支票給唱片公司、從瑞典等 CD 市場疲弱的地區迂迴進場,並錯開合約到期日,讓唱片公司無法聯手漲價。"
    },
    "cls": 10
   },
   {
    "front": {
     "en": "Thiel's surfing metaphor for timing",
     "zh": "Thiel 談時機的衝浪比喻"
    },
    "back": {
     "en": "You must paddle early and let the wave catch you — waiting to confirm the wave means missing it. Better to occasionally paddle for a wave that never comes than to miss the big one.",
     "zh": "你必須提早划水,讓浪來追上你——等浪頭確定才動就來不及了。偶爾為一道沒來的浪白划,也好過錯過那道大浪。"
    },
    "cls": 10
   },
   {
    "front": {
     "en": "Why do founders and VCs experience timing risk differently?",
     "zh": "為什麼創業者與創投面對時機風險的處境不同?"
    },
    "back": {
     "en": "A founder gets one shot at one moment in time. A VC runs a 20-year portfolio and can back the same idea again when timing improves — if a backed idea fails, it may still be a good idea.",
     "zh": "創業者只有一次機會、一個時點。創投經營的是二十年的投資組合,可以在時機成熟時再投一次同樣的構想——投過而失敗的構想,很可能仍是好構想。"
    },
    "cls": 10
   },
   {
    "front": {
     "en": "a16z's contrarian view of the CEO role",
     "zh": "a16z 對 CEO 角色的反主流觀點"
    },
    "back": {
     "en": "CEO is a learnable skill, not a shrink-wrapped hire: Microsoft, Google, and Facebook were built by inexperienced product founders. Learn to manage managers, plus enough law, finance, and sales to survive.",
     "zh": "CEO 是學得會的技能,不是現成品:Microsoft、Google、Facebook 都是由沒經驗的產品型創辦人打造的。要學會管理「管理者」,再加上足以生存的法律、財務與銷售知識。"
    },
    "cls": 10
   },
   {
    "front": {
     "en": "Thiel's ideal board size — and why",
     "zh": "Thiel 心中理想的董事會規模——以及原因"
    },
    "back": {
     "en": "Three people. The bigger the board, the weaker the oversight; a huge board (like 50-person nonprofit boards) effectively means no board at all, leaving the manager unchecked.",
     "zh": "三個人。董事會越大,監督越弱;超大型董事會(像非營利組織的 50 人董事會)實質上等於沒有董事會,管理者不受任何制衡。"
    },
    "cls": 10
   },
   {
    "front": {
     "en": "Thiel's definition of a secret",
     "zh": "Thiel 對「秘密」的定義"
    },
    "back": {
     "en": "An unpopular or unconventional truth—something important that very few people agree with you on.",
     "zh": "不受歡迎或不合常規的真相——一件很少人同意你、卻很重要的事。"
    },
    "cls": 11
   },
   {
    "front": {
     "en": "The three zones of truth",
     "zh": "真相的三個區域"
    },
    "back": {
     "en": "Easy (conventions), hard but doable (where secrets and startups live), impossible (untestable mysteries).",
     "zh": "簡單(常識)、困難但做得到(秘密與新創的所在地)、不可能(無法驗證的奧秘)。"
    },
    "cls": 11
   },
   {
    "front": {
     "en": "The two kinds of secrets—and the best hunting ground",
     "zh": "秘密的兩種類型——以及最好的獵場"
    },
    "back": {
     "en": "Secrets of nature and secrets about people; their intersection is the most interesting and enlightening place to search.",
     "zh": "自然的秘密與關於人的秘密;兩者的交會處是最有趣、最有啟發性的搜尋地點。"
    },
    "cls": 11
   },
   {
    "front": {
     "en": "Four forces that make people deny secrets exist",
     "zh": "讓人否認秘密存在的四股力量"
    },
    "back": {
     "en": "Incrementalism, risk aversion, complacency, and egalitarianism.",
     "zh": "漸進主義、風險趨避、自滿、平等主義。"
    },
    "cls": 11
   },
   {
    "front": {
     "en": "Tesla's cleantech secret",
     "zh": "Tesla 的潔淨科技秘密"
    },
    "back": {
     "en": "Cleantech demand was partly fashion. Embrace it: sell luxury EVs to the rich, build the brand first, and fund cheaper models from the top down.",
     "zh": "潔淨科技的需求有一部分是時尚。與其否認,不如擁抱:先賣豪華電動車給有錢人、先建立品牌,再由上而下資助更平價的車款。"
    },
    "cls": 11
   },
   {
    "front": {
     "en": "When should a startup tell its secret?",
     "zh": "新創該在什麼時候說出自己的秘密?"
    },
    "back": {
     "en": "Read the ecosystem: if others will find it soon (PayPal, 1999), speed and internal openness beat stealth; dangerous human secrets may be best never told.",
     "zh": "看生態系而定:如果別人很快就會發現(1999 年的 PayPal),速度與內部公開勝過隱匿;危險的「關於人的秘密」則可能最好永遠別說。"
    },
    "cls": 11
   },
   {
    "front": {
     "en": "Marx vs. Shakespeare theories of conflict",
     "zh": "馬克思式 vs. 莎士比亞式的衝突理論"
    },
    "back": {
     "en": "Marx: people fight because they are fundamentally different. Shakespeare: people fight because they are alike, and converge as they fight. Tech competition is almost always Shakespearean.",
     "zh": "馬克思:人因根本差異而戰。莎士比亞:人因相似而戰,而且越打越像。科技業的競爭幾乎都是莎士比亞式的。"
    },
    "cls": 12
   },
   {
    "front": {
     "en": "Why must you 'choose your enemies well'?",
     "zh": "為什麼要「慎選敵人」?"
    },
    "back": {
     "en": "Because prolonged fighting makes you converge with your rival — whoever you obsess over, you become.",
     "zh": "因為長期纏鬥會讓你和對手趨同——你對誰執迷,就會變成誰。"
    },
    "cls": 12
   },
   {
    "front": {
     "en": "Thiel's rules when a war looms",
     "zh": "Thiel 面對戰爭逼近時的守則"
    },
    "back": {
     "en": "Avoid the war if possible; if you can't win, run away or merge; if you must fight, use overwhelming force to end it fast — never settle into a long war.",
     "zh": "能避就避;打不贏就撤退或合併;非打不可就用壓倒性力量速戰速決——絕不陷入持久戰。"
    },
    "cls": 12
   },
   {
    "front": {
     "en": "Why is internal infighting like an autoimmune disease?",
     "zh": "為什麼內鬥像自體免疫疾病?"
    },
    "back": {
     "en": "It kills quietly from within while looking like something else. People fight over the same role, so PayPal gave everyone exactly one unique responsibility and redrew the org chart every three months.",
     "zh": "它從內部悄悄致命,表面上卻看不出來。人們為了同一個角色而鬥,所以 PayPal 讓每個人只負責一件獨一無二的事,並每三個月重畫組織圖。"
    },
    "cls": 12
   },
   {
    "front": {
     "en": "How did PayPal beat eBay's own Billpoint?",
     "zh": "PayPal 如何打敗 eBay 自家的 Billpoint?"
    },
    "back": {
     "en": "It saw that the real platform was email, not the eBay site, and optimized notifications — often reaching auction winners before eBay did.",
     "zh": "它看出真正的平台是 email 而非 eBay 網站,並把通知做到極致——常常比 eBay 更早通知得標買家。"
    },
    "cls": 12
   },
   {
    "front": {
     "en": "Hoffman's bar for a real competitive edge",
     "zh": "Hoffman 對真正競爭優勢的門檻"
    },
    "back": {
     "en": "10x better, cheaper, or faster — and explainable in one sentence. A 30-minute pitch on anti-spam is just more spam.",
     "zh": "好十倍、便宜十倍或快十倍,而且一句話講得完。花半小時簡報反垃圾郵件,本身就是另一種垃圾郵件。"
    },
    "cls": 12
   },
   {
    "front": {
     "en": "The two axes of the Class 13 framework",
     "zh": "第 13 課框架的兩條軸線"
    },
    "back": {
     "en": "Optimistic vs. pessimistic about the future, crossed with definite (knowable, plannable) vs. indefinite (random, unknowable) — yielding four worldviews.",
     "zh": "對未來樂觀 vs. 悲觀,交叉未來明確(可知、可規劃)vs. 不明確(隨機、不可知)——得出四種世界觀。"
    },
    "cls": 13
   },
   {
    "front": {
     "en": "Calculus vs. statistics",
     "zh": "微積分 vs. 統計學"
    },
    "back": {
     "en": "Thiel's shorthand for definite vs. indefinite thinking: computing one specific trajectory versus describing a cloud of probabilities.",
     "zh": "Thiel 用來對比明確與不明確思維的速記:計算一條具體軌跡,對上描述一團機率雲。"
    },
    "cls": 13
   },
   {
    "front": {
     "en": "Why is cash king in an indefinite world?",
     "zh": "為什麼在不明確的世界裡現金為王?"
    },
    "back": {
     "en": "Money is pure optionality: when nobody knows what to do next, the asset that commits to nothing looks most valuable — even at negative real yields.",
     "zh": "錢是純粹的選擇權:當沒有人知道下一步要做什麼,不承諾任何事的資產看起來最有價值——即使實質報酬率是負的。"
    },
    "cls": 13
   },
   {
    "front": {
     "en": "What does the Reber Plan episode show?",
     "zh": "Reber Plan 的故事說明什麼?"
    },
    "back": {
     "en": "In the 1940s a schoolteacher's plan to re-engineer San Francisco Bay earned congressional hearings; today it would be dismissed outright — definite optimism has died as a public mode of thought.",
     "zh": "1940 年代,一位教師改造舊金山灣的計畫能開到國會聽證;今天只會被直接打回票——明確樂觀作為一種公共思維已經消亡。"
    },
    "cls": 13
   },
   {
    "front": {
     "en": "Thiel's career advice for an indefinite age",
     "zh": "不明確年代的職涯建議"
    },
    "back": {
     "en": "Don't iterate a resume one line at a time; enter with a plan — plan on making partner from day one — and revise the plan rather than drift.",
     "zh": "別一行一行迭代履歷;帶著計畫進場——從第一天就以成為合夥人為目標——計畫可以修改,但不要漂流。"
    },
    "cls": 13
   },
   {
    "front": {
     "en": "Definite pessimism, in one country",
     "zh": "明確悲觀的國家範例"
    },
    "back": {
     "en": "China: it sees its future clearly enough to copy what works and save around 40% of income, because it expects to get old before it gets rich.",
     "zh": "中國:它把未來看得夠清楚,知道要照抄可行模式並儲蓄約四成收入,因為它預期自己會「未富先老」。"
    },
    "cls": 13
   },
   {
    "front": {
     "en": "The energy 2x2: what are the four quadrants?",
     "zh": "能源 2×2 矩陣:四個象限是什麼?"
    },
    "back": {
     "en": "Determinate optimist: one best source — build it (1950s nuclear). Indeterminate optimist: fund a portfolio (2000s cleantech). Determinate pessimist: lock up existing resources (China). Indeterminate pessimist: hedge and economize (Europe/Japan).",
     "zh": "明確樂觀:有一種最好的能源,把它做出來(1950 年代核能)。不明確樂觀:投一整個組合(2000 年代清潔技術)。明確悲觀:鎖定既有資源(中國)。不明確悲觀:避險、省著用(歐洲/日本)。"
    },
    "cls": 14
   },
   {
    "front": {
     "en": "How does the power law show up in energy history?",
     "zh": "冪次法則如何體現在能源史上?"
    },
    "back": {
     "en": "One source dominates each era — wood, then coal, then oil, with gas now second. Near-equal alternatives would be a freak coincidence, so portfolio-style energy strategies rest on a shaky premise.",
     "zh": "每個時代由單一能源主宰——先是木材,再是煤,然後是石油,如今天然氣居次。多種能源勢均力敵是機率極低的巧合,所以「組合式」能源戰略的前提站不住腳。"
    },
    "cls": 14
   },
   {
    "front": {
     "en": "Name the ten things a startup must get right.",
     "zh": "說出新創必須做對的十件事。"
    },
    "back": {
     "en": "Markets, competition/mimesis, secrets, escaping incrementalism, durability, teams, distribution, timing, financing, luck — and you need essentially all of them: 8 of 10 is a B-, 5 of 10 an F.",
     "zh": "市場、競爭與模仿、祕密、擺脫漸進主義、耐久性、團隊、通路、時機、融資、運氣——而且幾乎全都要做到:做對 8 項只是 B-,5 項就不及格。"
    },
    "cls": 14
   },
   {
    "front": {
     "en": "The China oil arithmetic",
     "zh": "中國石油算術"
    },
    "back": {
     "en": "World output is about 85M barrels a day and the U.S. uses about 18M. If China consumed per capita like America it would need about 72M by itself — the math forces either breakthrough or crisis.",
     "zh": "全球日產約 8,500 萬桶,美國用掉約 1,800 萬桶。若中國人均用油達美國水準,光中國就要約 7,200 萬桶——這道數學題逼你在突破與危機之間二選一。"
    },
    "cls": 14
   },
   {
    "front": {
     "en": "Why does thorium score about 6 of 10 out of the gate?",
     "zh": "為什麼釷一開始就能拿下十項中的約六項?"
    },
    "back": {
     "en": "It is unfashionable (no mimetic herd), a politically made secret, a genuine breakthrough, durable (order-of-magnitude cost edge), well timed, and financeable in staged milestones. Left to solve: market, team, distribution.",
     "zh": "它不流行(沒有模仿人潮)、是政治造成的祕密、是真突破、夠耐久(數量級的成本優勢)、時機對、又能分階段融資。剩下要解的是:市場、團隊、通路。"
    },
    "cls": 14
   },
   {
    "front": {
     "en": "Sell, subsidize, or replace: which posture toward government is riskiest?",
     "zh": "賣給政府、拿補貼、取代政府:哪種姿態風險最高?"
    },
    "back": {
     "en": "Subsidy dependence. With deficits near 10% of GDP the free money will shrink; Solyndra's model was fragile, while SpaceX sells to a paying government customer — a smaller, more honest risk.",
     "zh": "依賴補貼。赤字接近 GDP 10% 的年代,免費的錢只會變少;Solyndra 的模式因此脆弱,而 SpaceX 是把服務賣給付錢的政府客戶——風險更小、也更誠實。"
    },
    "cls": 14
   },
   {
    "front": {
     "en": "The retrofuture method",
     "zh": "復古未來方法"
    },
    "back": {
     "en": "Look at what the past expected of the future, find where progress stalled, diagnose why, and retry differently with modern tools — never copy the old vision outright.",
     "zh": "回顧過去對未來的期待,找出進展停滯之處,診斷失敗原因,再用現代工具以不同方式重試——絕不照抄舊願景。"
    },
    "cls": 15
   },
   {
    "front": {
     "en": "Why are meaningfully better batteries so hard?",
     "zh": "為什麼「明顯更好的電池」這麼難?"
    },
    "back": {
     "en": "Battery chemistry is about 200 years old and near its physical limits, with corrosion built into any charged-particle system. LightSail's answer: change disciplines — store energy with compressed-air physics instead.",
     "zh": "電池化學已有約 200 年歷史、逼近物理極限,而且任何帶電粒子系統都逃不掉腐蝕問題。LightSail 的解法是換學科——改用壓縮空氣的物理原理儲能。"
    },
    "cls": 15
   },
   {
    "front": {
     "en": "RoboteX's reframing of robotics",
     "zh": "RoboteX 對機器人的重新定義"
    },
    "back": {
     "en": "Forget humanoid butlers. Build cheap tracked robots that act as intermediaries, entering dangerous situations — SWAT raids, hazmat, bomb disposal — ahead of humans. Criminals often surrender to the robot on sight.",
     "zh": "別想人形管家了。做便宜的履帶機器人當「中介」,替人類先進入危險現場——特警攻堅、危險物質、拆彈。歹徒常常一看到機器人就投降。"
    },
    "cls": 15
   },
   {
    "front": {
     "en": "Why were launch costs flat for 40 years?",
     "zh": "為什麼發射成本 40 年不變?"
    },
    "back": {
     "en": "Cost-plus contracting reimbursed expenses plus a guaranteed margin, so incumbents profited from inflating costs. SpaceX broke the structure with clean-sheet design and in-house vertical integration.",
     "zh": "成本加成合約實報實銷再加保證利潤,既有業者靠墊高成本獲利。SpaceX 以從零開始的設計加自製垂直整合,打破了這個結構。"
    },
    "cls": 15
   },
   {
    "front": {
     "en": "The unfamiliarity paradox",
     "zh": "陌生悖論"
    },
    "back": {
     "en": "Truly different ventures are hard for investors to evaluate — nobody had rocket experience because nobody had built rockets in 40 years. But the same lack of pattern-matching keeps credible competitors out.",
     "zh": "真正不同的事業讓投資人難以評估——沒人有火箭經驗,因為 40 年來沒人造過火箭。但同樣無從套公式的特性,也把有實力的競爭者擋在門外。"
    },
    "cls": 15
   },
   {
    "front": {
     "en": "The ideal first customer for hard tech (Fong)",
     "zh": "硬科技的理想第一位客戶(Fong)"
    },
    "back": {
     "en": "A desperate customer whose current supplier just failed: motivated to move fast, immediately appreciative, and afterwards a powerful reference for the next sale.",
     "zh": "一位原供應商剛出包、走投無路的客戶:有動機快速行動、立刻心懷感激,事後更是下一筆交易最有力的口碑背書。"
    },
    "cls": 15
   },
   {
    "front": {
     "en": "The life expectancy trend since 1840",
     "zh": "1840 年以來的預期壽命趨勢"
    },
    "back": {
     "en": "From roughly 45–46 years, rising about 2.5% per decade in a straight line—a Moore's Law for lifespans. Every day survived adds ~5–6 hours of expected life. Whether it continues, stalls, or accelerates is biotech's open question.",
     "zh": "從約 45–46 歲起,每十年成長約 2.5%,呈一條直線——壽命版摩爾定律。每多活一天,預期壽命增加約 5–6 小時。這條線會延續、停滯或加速,是生技的未解問題。"
    },
    "cls": 16
   },
   {
    "front": {
     "en": "The drug discovery funnel and its cost curve",
     "zh": "新藥開發漏斗與成本曲線"
    },
    "back": {
     "en": "~10,000 compounds screened → ~5 reach Phase 3 → ~1 approved, over 10–15 years. Cost per new drug: $100M (1975) → $1.3B (2012). Rising costs suggest the luck-driven lottery has run out of easy wins.",
     "zh": "篩選約 10,000 個化合物 → 約 5 個進入三期試驗 → 約 1 個獲核准,歷時 10–15 年。單一新藥成本:1975 年 1 億美元 → 2012 年 13 億美元。成本上漲暗示這場運氣樂透的容易獎項已被領完。"
    },
    "cls": 16
   },
   {
    "front": {
     "en": "Three scales of deadly 'accidents'",
     "zh": "致命「意外」的三種尺度"
    },
    "back": {
     "en": "Microscopic (DNA mutations), macroscopic (car crashes), cosmic (asteroids). Solving just the microscopic ones could push lifespans to an estimated 600–1,000 years—reframing death from bad luck to unsolved engineering.",
     "zh": "微觀(DNA 突變)、巨觀(車禍)、宇宙級(小行星)。光是解決微觀意外,預估壽命就可達 600–1,000 年——把死亡從壞運氣重新定義為尚未解決的工程問題。"
    },
    "cls": 16
   },
   {
    "front": {
     "en": "Why stay secret in biotech? (Frezza)",
     "zh": "生技為何要保密?(Frezza)"
    },
    "back": {
     "en": "Broad technique patents let non-producing firms extract licensing fees, so you stay quiet about methods; no press until a drug launches. But always assume ~10 hidden competitors exist—it disciplines execution.",
     "zh": "涵蓋廣泛技術的專利讓不生產藥物的公司也能收授權金,所以對方法保持沉默;藥品上市前不發新聞稿。但永遠假設有約 10 家隱形對手存在——這會鍛鍊你的執行力。"
    },
    "cls": 16
   },
   {
    "front": {
     "en": "Referral recruiting math",
     "zh": "推薦式招募的數學"
    },
    "back": {
     "en": "Each great engineer refers about two more, so 2^n compounds—top talent while staying under the radar. Engineers are shy referrers: Frezza browses their friend lists with them, asking who is actually good.",
     "zh": "每位優秀工程師約可再推薦兩人,2^n 複利成長——既找到頂尖人才又保持低調。工程師推薦時很害羞:Frezza 會陪他們翻朋友名單,逐一問誰真的厲害。"
    },
    "cls": 16
   },
   {
    "front": {
     "en": "'The next big thing won't look like the last big thing'",
     "zh": "「下一個大機會不會長得像上一個」"
    },
    "back": {
     "en": "Search wasn't the desktop; social wasn't search. Social's flags are planted, but the genome never becomes obsolete—and meaningful work (curing cancer, not another dating app) is itself a recruiting advantage.",
     "zh": "搜尋不是桌面軟體的翻版;社群也不是搜尋的翻版。社群的旗子已插完,但基因體永遠不會過時——而有意義的工作(治癒癌症,而非又一個交友 app)本身就是招募優勢。"
    },
    "cls": 16
   },
   {
    "front": {
     "en": "Luddite paradigm vs. Ricardian paradigm",
     "zh": "盧德派模式 vs. 李嘉圖派模式"
    },
    "back": {
     "en": "Luddite: machines destroy livelihoods — smash them first. Ricardian: technology is a trading partner — the production frontier expands, workers retrain, and gains from trade enrich everyone.",
     "zh": "盧德派:機器摧毀生計——先砸爛它。李嘉圖派:科技是貿易夥伴——生產疆界外擴、工人轉業,貿易利得讓所有人更富有。"
    },
    "cls": 17
   },
   {
    "front": {
     "en": "Where does the trade-with-AI logic break?",
     "zh": "「與 AI 做貿易」的邏輯會在哪裡失效?"
    },
    "back": {
     "en": "When AI becomes vastly superior across the board. Humans don't trade with mice. Unlike most technologies, AI may have a cliff: full human control until the superhuman moment, then none.",
     "zh": "當 AI 全面且遠遠超越人類時。人類不會和老鼠做貿易。與多數科技不同,AI 可能有個懸崖:跨過超人門檻前人類完全掌控,跨過後瞬間歸零。"
    },
    "cls": 17
   },
   {
    "front": {
     "en": "Thiel's three reasons AI beats biotech 2.0",
     "zh": "Thiel 認為 AI 勝過生技 2.0 的三個理由"
    },
    "back": {
     "en": "1) Engineering freedom: a blueprint, not a sequence-locked recipe. 2) Regulatory freedom: roughly $1M of software versus $1.3B and 10 years per drug. 3) Position: the underexplored contrarian quadrant versus biotech's crowded consensus.",
     "zh": "1)工程自由:是藍圖,不是被步驟綁死的食譜。2)監管自由:約 100 萬美元的軟體 vs. 一款藥 13 億美元、10 年。3)位置:AI 在乏人問津的逆勢象限,生技擠在共識象限。"
    },
    "cls": 17
   },
   {
    "front": {
     "en": "The leading candidate for AI's hidden limit",
     "zh": "AI 最可能的隱藏極限是什麼?"
    },
    "back": {
     "en": "Code complexity: past a threshold no one understands the system, debugging becomes near impossible, and code added to help makes things worse — exponential hope colliding with asymptotic reality.",
     "zh": "程式碼複雜度:超過某個門檻後沒人能理解整個系統,除錯近乎不可能,為了改善而加的程式碼反而幫倒忙——指數希望撞上漸近現實。"
    },
    "cls": 17
   },
   {
    "front": {
     "en": "Vicarious' feathers-and-poops principle",
     "zh": "Vicarious 的「羽毛與大便」原則"
    },
    "back": {
     "en": "Don't copy the brain literally — extract its governing principles (hierarchy, sparse representation), the way aerodynamics, not feather-copying, enabled flight. Ferrets rewired to see with auditory cortex suggest one common cortical algorithm.",
     "zh": "不要照抄大腦——要萃取其支配性原理(階層、稀疏表徵),就像讓人類飛起來的是空氣動力學,不是模仿羽毛。視神經改接聽覺皮質的雪貂照樣能看,暗示皮質背後是同一套演算法。"
    },
    "cls": 17
   },
   {
    "front": {
     "en": "Process as moat (Wright brothers)",
     "zh": "以流程為護城河(萊特兄弟)"
    },
    "back": {
     "en": "Rivals can copy an artifact — the kite, your V1 — but not the disciplined experimental process that produces the next result. Add network effects and compounding data, and the lead sustains itself.",
     "zh": "對手抄得走成品——那只風箏、你的 V1——但抄不走能產出下一個成果的嚴謹實驗流程。再加上網路效應與資料複利,領先就能自我延續。"
    },
    "cls": 17
   },
   {
    "front": {
     "en": "Inverted normal distribution (founder traits)",
     "zh": "反轉的常態分布(創辦人特質)"
    },
    "back": {
     "en": "Founder traits pile up at both tails: the same person is extreme insider and extreme outsider, and a four-way loop (nature, nurture, self-exaggeration, crowd exaggeration) pushes both extremes further out.",
     "zh": "創辦人的特質堆在兩端尾巴:同一個人既是極端內部人又是極端外部人;四重循環(天生、後天、自我誇大、群眾誇大)還會把兩個極端推得更遠。"
    },
    "cls": 18
   },
   {
    "front": {
     "en": "Girard's scapegoat mechanism",
     "zh": "Girard 的代罪羔羊機制"
    },
    "back": {
     "en": "A community in all-against-all chaos restores peace by uniting against one insider-outsider victim, who is blamed for the crisis and credited with the peace — then the cycle is ritualized and repeats.",
     "zh": "陷入人人相殘的群體,靠著團結對付一個內外兼具的受害者恢復和平;受害者既被怪罪為危機元兇、又被歸功於帶來和平——之後這個循環被儀式化,不斷重演。"
    },
    "cls": 18
   },
   {
    "front": {
     "en": "Origin of monarchy, per the essay",
     "zh": "本文對君主制起源的解釋"
    },
    "back": {
     "en": "Kings began as scapegoats who learned to postpone their own execution — Aztec god-kings were still sacrificed, and aging Zulu kings were killed once their hair turned white.",
     "zh": "國王的前身是學會拖延自身處決的代罪羔羊——阿茲提克神王最終仍被獻祭,祖魯國王一旦白髮就會被廢黜處死。"
    },
    "cls": 18
   },
   {
    "front": {
     "en": "The Augustus move",
     "zh": "奧古斯都戰術"
    },
    "back": {
     "en": "After Caesar's assassination, Augustus held king-like power but styled himself only 'first among equals.' Founders can similarly de-emphasize the dangerous CEO crown while still leading.",
     "zh": "凱撒遇刺後,奧古斯都握有王權卻只自稱「同儕之首」。創辦人同樣可以一邊實際領導,一邊淡化 CEO 這頂危險的王冠。"
    },
    "cls": 18
   },
   {
    "front": {
     "en": "Why did Jobs' options-backdating scandal stay a footnote?",
     "zh": "為什麼賈伯斯的選擇權回溯醜聞只成了註腳?"
    },
    "back": {
     "en": "Apple's stock kept rising, the returning founder had quasi-mythic status, and — Thiel's darker point — there is little power in scapegoating someone whose power and life are visibly waning.",
     "zh": "Apple 股價持續上漲、回歸的創辦人帶著準神話光環,而 Thiel 更黑暗的論點是:對一個權力與生命都在明顯消逝的人,獻祭已經沒有力量。"
    },
    "cls": 18
   },
   {
    "front": {
     "en": "How to extend the founding moment",
     "zh": "如何延長創業時刻"
    },
    "back": {
     "en": "Keep genuine technological innovation going; treat board meetings as trials to survive; use co-founders and succession insurance (a 'crazier' COO) to avoid being isolated as the singular victim.",
     "zh": "讓真正的技術創新持續發生;把董事會當成必須活下來的審判;善用共同創辦人與接班保險(一位「更瘋」的 COO),避免被孤立成那個唯一的祭品。"
    },
    "cls": 18
   },
   {
    "front": {
     "en": "Longevity escape velocity (de Grey)",
     "zh": "長壽逃逸速度(de Grey)"
    },
    "back": {
     "en": "When each year of research adds more than one year of remaining life expectancy, aging death can be outrun indefinitely. In 2012 de Grey gave it about 25 years with 50% odds, funding permitting.",
     "zh": "當研究每推進一年、平均餘命延長超過一年,人就能無限期跑贏老化死亡。2012 年 de Grey 估計約需 25 年、機率五成,前提是資金到位。"
    },
    "cls": 19
   },
   {
    "front": {
     "en": "The inevitability trap",
     "zh": "必然論的陷阱"
    },
    "back": {
     "en": "Believing progress is automatic kills urgency: it excuses delay despite 100,000 aging deaths a day, tolerates broken institutions, and forgets that bad futures are possible too.",
     "zh": "相信進步會自動發生,會消滅急迫感:明明每天有 10 萬人死於老化仍拖延、容忍失能的制度,還忘了壞結局同樣可能發生。"
    },
    "cls": 19
   },
   {
    "front": {
     "en": "De Grey's surprising answer to \"who will build the future?\"",
     "zh": "de Grey 對「誰來打造未來」的意外答案"
    },
    "back": {
     "en": "Mainstream opinion formers like Oprah Winfrey. Wealthy backers fear ridicule, and trusted public figures can make radical technology respectable enough to attract money and support.",
     "zh": "像 Oprah Winfrey 這樣的主流意見領袖。有錢的金主怕被嘲笑,而受信任的公眾人物能讓激進科技變得體面,進而吸引資金與支持。"
    },
    "cls": 19
   },
   {
    "front": {
     "en": "Vassar's \"tribes\" model of progress",
     "zh": "Vassar 的「部落」進步模型"
    },
    "back": {
     "en": "Breakthroughs come from mid-sized, high-trust groups of dozens to a few hundred, like the Quakers, the Royal Society, or the American founders, not lone geniuses or giant institutions.",
     "zh": "突破來自數十到數百人的中型高信任團體——貴格會、皇家學會、美國開國元勳——而不是孤獨天才或龐大機構。"
    },
    "cls": 19
   },
   {
    "front": {
     "en": "Why did Arrison say biology is becoming engineering?",
     "zh": "Arrison 為什麼說生物學正在變成工程學?"
    },
    "back": {
     "en": "Sequencing collapsed from $3 billion for the first genome to about $1,000 by 2012, faster than Moore's Law, opening the door to gene therapy and designed organisms.",
     "zh": "定序成本從第一個基因體的 30 億美元,到 2012 年跌至約 1,000 美元,比摩爾定律還快,為基因治療與人造生物打開了大門。"
    },
    "cls": 19
   },
   {
    "front": {
     "en": "Thiel's final imperative to the class",
     "zh": "Thiel 給全班的最後叮嚀"
    },
    "back": {
     "en": "Find a frontier and pursue it boldly. Reject luck, impossibility, and futility as excuses; your life is a singular event, not a statistic, and no one else will take charge of it for you.",
     "zh": "找到一條前沿,勇敢追下去。別拿運氣、不可能或徒勞當藉口;人生是獨一無二的事件,不是統計數字,而且沒有人會替你掌舵。"
    },
    "cls": 19
   }
  ]
 },
 {
  "slug": "quiz",
  "layout": "quiz",
  "icon": "quiz",
  "title": {
   "en": "Course Quiz",
   "zh": "總測驗"
  },
  "subtitle": {
   "en": "All self-check questions from the 19 classes in one place.",
   "zh": "19 堂課的自我檢測題,一次做完。"
  },
  "groups": [
   {
    "slug": "class-1",
    "classNo": 1,
    "title": {
     "en": "The Challenge of the Future",
     "zh": "未來的挑戰"
    },
    "items": [
     {
      "q": {
       "en": "In Thiel's framing, what is the one-word synonym for horizontal (extensive) progress?",
       "zh": "在 Thiel 的架構裡,水平(廣度)進步用一個詞來說是什麼?"
      },
      "options": [
       {
        "en": "Technology",
        "zh": "科技"
       },
       {
        "en": "Globalization",
        "zh": "全球化"
       },
       {
        "en": "Disruption",
        "zh": "顛覆"
       },
       {
        "en": "Optimization",
        "zh": "最佳化"
       }
      ],
      "answer": 1,
      "explain": {
       "en": "Horizontal progress means copying things that work — going from 1 to n — which is exactly what globalization is. Doing new things, 0 to 1, is what Thiel reserves the word 'technology' for.",
       "zh": "水平進步是複製已經可行的東西——從 1 到 n——這正是全球化的定義。做新的事、從 0 到 1,Thiel 才稱之為「科技」。"
      }
     },
     {
      "q": {
       "en": "Why does Thiel argue that statistical thinking cannot guide a 0-to-1 venture?",
       "zh": "為什麼 Thiel 認為統計思維無法指引一個 0 到 1 的事業?"
      },
      "options": [
       {
        "en": "Because startups rarely gather enough user data in their first year",
        "zh": "因為新創公司第一年通常收集不到足夠的使用者資料"
       },
       {
        "en": "Because markets are perfectly efficient, so no analysis of any kind helps",
        "zh": "因為市場完全有效率,任何分析都沒有用"
       },
       {
        "en": "Because something genuinely new has a sample size of one, so there is no distribution to reason from — you need determinate, calculus-style planning",
        "zh": "因為真正的新事物樣本數只有 1,沒有任何分布可以推論——你需要決定論式、如微積分般的規劃"
       },
       {
        "en": "Because probability theory only applies to public companies with long track records",
        "zh": "因為機率理論只適用於有長期紀錄的上市公司"
       }
      ],
      "answer": 2,
      "explain": {
       "en": "With n = 1 the standard deviation is infinite: there is no reference class for a genuinely new thing. Thiel's alternative is Apollo-style determinate calculation — new ventures must be reasoned out, not treated as lottery tickets.",
       "zh": "當樣本數 n = 1,標準差是無限大:真正的新事物沒有可參照的母體。Thiel 提出的替代方案是阿波羅式的精確計算——新事業必須被推算出來,而不是被當成樂透彩券。"
      }
     },
     {
      "q": {
       "en": "According to the Coase framework in this class, what determines the size at which firms settle?",
       "zh": "根據本課的寇斯定理框架,是什麼決定了公司最終停在什麼規模?"
      },
      "options": [
       {
        "en": "The balance point between internal coordination costs and external coordination costs",
        "zh": "內部協調成本與外部協調成本的平衡點"
       },
       {
        "en": "The amount of venture capital available in their market",
        "zh": "市場上可取得的創投資金多寡"
       },
       {
        "en": "Government regulation and tax policy",
        "zh": "政府法規與稅收政策"
       },
       {
        "en": "Whether the firm has reached 150 employees, the universal natural limit",
        "zh": "公司是否達到 150 人這個普世的自然上限"
       }
      ],
      "answer": 0,
      "explain": {
       "en": "Growing bigger makes external dealings cheaper but internal politics costlier; shrinking does the reverse. The 150 figure (Path's friend cap, tribal sizes) illustrates natural coordination limits, but the general principle is the cost trade-off, not a fixed number.",
       "zh": "組織變大,對外交易變便宜,但內部政治成本上升;變小則相反。150 這個數字(Path 的好友上限、部落規模)只是自然協調極限的例證,一般原則是成本取捨,而不是某個固定數字。"
      }
     }
    ]
   },
   {
    "slug": "class-2",
    "classNo": 2,
    "title": {
     "en": "Party Like It's 1999?",
     "zh": "像 1999 年那樣狂歡?"
    },
    "items": [
     {
      "q": {
       "en": "On Thiel's account, why did the world's money flood into Internet stocks starting in late 1998?",
       "zh": "依照 Thiel 的說法,為什麼從 1998 年底開始,全世界的資金湧入網路股?"
      },
      "options": [
       {
        "en": "Internet companies had finally proven they could generate large profits",
        "zh": "網路公司終於證明自己能創造豐厚獲利"
       },
       {
        "en": "Every alternative — the old economy, emerging markets, Europe, leverage — had just failed, leaving tech as the default",
        "zh": "所有替代選項——舊經濟、新興市場、歐洲、槓桿——都剛剛失敗,科技成了預設去處"
       },
       {
        "en": "The Federal Reserve cut interest rates to zero after the LTCM collapse",
        "zh": "LTCM 崩潰後,Fed 把利率降到零"
       },
       {
        "en": "Netscape's IPO in late 1998 triggered the frenzy overnight",
        "zh": "Netscape 在 1998 年底的 IPO 一夜之間引爆狂熱"
       }
      ],
      "answer": 1,
      "explain": {
       "en": "The mania was a proof by elimination, not a proof of profits: dot-coms were mostly unprofitable (Netscape IPO'd back in August 1995), and the Fed's role in 1998 was orchestrating the LTCM bailout, not zero rates. Old-economy competition from Mexico and China, crony capitalism in emerging markets, a doubted euro, and discredited leverage left tech as the only story still standing.",
       "zh": "這場狂熱是「排除法證明」,不是獲利的證明:網路公司多半不賺錢(Netscape 早在 1995 年 8 月就上市了),而 Fed 在 1998 年做的是協調 LTCM 紓困,不是零利率。墨西哥與中國打垮舊經濟、新興市場暴露裙帶資本主義、歐元備受質疑、槓桿信譽掃地——科技成了唯一還站著的故事。"
      }
     },
     {
      "q": {
       "en": "Why did Thiel argue in 2012 that there was no tech bubble?",
       "zh": "為什麼 Thiel 在 2012 年主張當時並沒有科技泡沫?"
      },
      "options": [
       {
        "en": "Valuations in 2012 were lower than at any point in the 1990s",
        "zh": "2012 年的估值比 1990 年代任何時候都低"
       },
       {
        "en": "Fewer students were studying computer science than in 1999",
        "zh": "讀資工的學生比 1999 年還少"
       },
       {
        "en": "A bubble requires widespread, intense belief, and society no longer intensely believed in anything",
        "zh": "泡沫需要廣泛而強烈的信念,而當時的社會已不再強烈相信任何事物"
       },
       {
        "en": "Post-2000 government regulation made bubbles impossible",
        "zh": "2000 年後的政府監管使泡沫不可能再發生"
       }
      ],
      "answer": 2,
      "explain": {
       "en": "Thiel conceded the frothy data points — valuations were creeping up, and there were actually more CS students than in 1999, not fewer. His argument was definitional: a bubble is widespread, intense belief that's false, and without collective conviction the precondition fails. The bubble narrative, he argued, came from people hunting for one — an overreaction to the 1990s.",
       "zh": "Thiel 承認有冒泡跡象——估值在上升,而且讀資工的學生其實比 1999 年更多,不是更少。他的論證是定義層次的:泡沫是廣泛、強烈卻錯誤的信念;沒有集體堅信,前提就不成立。他認為泡沫論出自一心想找泡沫的人——那是對 1990 年代的過度反應。"
      }
     },
     {
      "q": {
       "en": "What finally made PayPal's user base take off in early 2000?",
       "zh": "2000 年初,究竟是什麼讓 PayPal 的用戶數起飛?"
      },
      "options": [
       {
        "en": "A distribution partnership with major banks like HSBC",
        "zh": "與 HSBC 等大型銀行的通路合作"
       },
       {
        "en": "A television advertising campaign funded by Nokia Ventures",
        "zh": "由 Nokia Ventures 出資的電視廣告"
       },
       {
        "en": "Beaming money between Palm Pilots at conferences",
        "zh": "在研討會上用 Palm Pilot 互相傳送金錢"
       },
       {
        "en": "Paying users directly — $10 to sign up and $10 per referral — producing 7–10% daily growth",
        "zh": "直接付錢給用戶——註冊送 10 美元、推薦再送 10 美元——創造出每天 7–10% 的成長"
       }
      ],
      "answer": 3,
      "explain": {
       "en": "Advertising was too expensive and bank business development went nowhere — the HSBC meeting convinced the team BD was hopeless. Palm Pilot beaming was the abandoned original idea. Buying virality worked spectacularly, but at roughly $20 per customer with zero revenue, which is why PayPal needed buzz and a $100M round (closed March 31, 2000) to survive.",
       "zh": "廣告太貴,與銀行談商務開發也毫無進展——那場 HSBC 會議讓團隊認清 BD 此路不通;Palm Pilot 傳錢則是被放棄的最初點子。花錢買病毒式擴散效果驚人,但每位客戶成本約 20 美元、營收掛零,這正是 PayPal 需要話題熱度、並趕在 2000 年 3 月 31 日完成 1 億美元募資才能活下來的原因。"
      }
     }
    ]
   },
   {
    "slug": "class-3",
    "classNo": 3,
    "title": {
     "en": "Value Systems",
     "zh": "價值體系"
    },
    "items": [
     {
      "q": {
       "en": "According to Thiel, why can't airlines be considered great companies?",
       "zh": "根據 Thiel 的說法,為什麼航空公司稱不上偉大的公司?"
      },
      "options": [
       {
        "en": "They don't create real value for society.",
        "zh": "它們沒有為社會創造真正的價值。"
       },
       {
        "en": "They create huge value but capture almost none of it as profit.",
        "zh": "它們創造了巨大價值,卻幾乎沒有以利潤形式留住任何一分。"
       },
       {
        "en": "Their market is too small to matter.",
        "zh": "它們的市場太小,無足輕重。"
       },
       {
        "en": "They lack durability and disappear within a few years.",
        "zh": "它們缺乏持久性,幾年內就會消失。"
       }
      ],
      "answer": 1,
      "explain": {
       "en": "Airlines pass the value-creation test — they move millions of people and employ many — but historically the airlines themselves have never really made money. Greatness requires all three conditions: create, endure, and capture. Failing capture alone is disqualifying.",
       "zh": "航空公司通過了「創造價值」這一關——它們運送數百萬人、雇用大量員工——但歷來航空公司本身幾乎沒賺過錢。偉大需要三個條件齊備:創造、持久、留住。光是「留不住」這一項不及格,就足以出局。"
      }
     },
     {
      "q": {
       "en": "For a healthy tech company whose growth rate exceeds its discount rate, where does a typical model place most of its value?",
       "zh": "對一家成長率高於折現率的健康科技公司,典型的估值模型會把多數價值放在哪裡?"
      },
      "options": [
       {
        "en": "In the first two to three years of cash flow.",
        "zh": "在最初兩三年的現金流。"
       },
       {
        "en": "Spread evenly across every year of operation.",
        "zh": "平均分布在營運的每一年。"
       },
       {
        "en": "In years 10 through 15 — far in the future.",
        "zh": "在第 10 到第 15 年——遙遠的未來。"
       },
       {
        "en": "In the liquidation value of its assets.",
        "zh": "在資產的清算價值。"
       }
      ],
      "answer": 2,
      "explain": {
       "en": "Old Economy value is front-loaded, but when g > r the discounting math flips: a typical model puts about two-thirds of a tech company's value in years 10–15. That is why LinkedIn's 850 P/E could be rationalized — and why durability is everything.",
       "zh": "傳統產業的價值集中在前期,但當 g > r 時,折現數學整個翻轉:典型模型會把科技公司約三分之二的價值放在第 10–15 年。這正是 LinkedIn 850 倍本益比說得通的原因——也是持久性至關重要的原因。"
      }
     },
     {
      "q": {
       "en": "What is Thiel's verdict on the common startup instinct that a bigger market is always better?",
       "zh": "對於「市場越大越好」這個常見的創業直覺,Thiel 的判定是什麼?"
      },
      "options": [
       {
        "en": "Correct — bigger markets mean bigger potential outcomes.",
        "zh": "正確——市場越大,潛在成果越大。"
       },
       {
        "en": "Utterly wrong — huge markets breed brutal competition, while well-defined smaller markets can actually be owned.",
        "zh": "大錯特錯——巨大市場孕育慘烈競爭,定義清晰的小市場才真正能被獨占。"
       },
       {
        "en": "Right for consumer products, wrong for enterprise software.",
        "zh": "對消費性產品成立,對企業軟體不成立。"
       },
       {
        "en": "Irrelevant — only the founding team determines outcomes.",
        "zh": "無關緊要——結果只由創始團隊決定。"
       }
      ],
      "answer": 1,
      "explain": {
       "en": "Thiel calls the bigger-is-better idea 'utterly, totally wrong.' Restaurants sit in an enormous market with dreadful profits; larger markets are harder to master and more uncertain. The better question pairs market size with: what valuable company is nobody building?",
       "zh": "Thiel 直言「越大越好」的想法是大錯特錯。餐飲業市場巨大,利潤卻慘不忍睹;市場越大越難掌握、不確定性越高。更好的問法是把市場規模和這個問題放在一起:還有哪家有價值的公司沒人去做?"
      }
     }
    ]
   },
   {
    "slug": "class-4",
    "classNo": 4,
    "title": {
     "en": "The Last Mover Advantage",
     "zh": "後發優勢"
    },
    "items": [
     {
      "q": {
       "en": "According to Thiel, why do both monopolies and highly competitive firms misdescribe their market position?",
       "zh": "根據 Thiel 的說法,為什麼獨占者和身處激烈競爭的公司都會謊報自己的市場地位?"
      },
      "options": [
       {
        "en": "Neither type of firm can actually measure its own market share.",
        "zh": "兩種公司其實都無法衡量自己的市占率。"
       },
       {
        "en": "Monopolies downplay dominance to avoid antitrust scrutiny, while competitive firms exaggerate uniqueness to attract capital.",
        "zh": "獨占者淡化支配地位以避開反托拉斯審查,競爭中的公司則誇大獨特性以吸引資金。"
       },
       {
        "en": "Both exaggerate their dominance to intimidate potential entrants.",
        "zh": "兩者都誇大自己的支配力,以嚇阻潛在進入者。"
       },
       {
        "en": "Accounting rules force every firm to report a conservative market definition.",
        "zh": "會計準則強迫每家公司採用保守的市場定義。"
       }
      ],
      "answer": 1,
      "explain": {
       "en": "The incentives point in opposite directions but converge on the same distortion: monopolists whisper 'we're just one player in a huge market' to regulators, while commodity firms shout 'we're one of a kind' to investors. Both push perceived reality toward the middle, which is why Thiel says the truth is more binary than it looks.",
       "zh": "兩種誘因方向相反,卻造成同一種扭曲:獨占者對監管機關低聲說「我們只是大市場裡的一個小玩家」,而大宗商品化的公司對投資人高喊「我們獨一無二」。兩邊都把外界認知往中間推,所以 Thiel 才說真相比表象更接近二元。"
      }
     },
     {
      "q": {
       "en": "Which of the following is NOT one of the four foundations of market ownership discussed in this class?",
       "zh": "下列何者「不是」本課討論的四大市場擁有權基礎之一?"
      },
      "options": [
       {
        "en": "Network effects",
        "zh": "網路效應"
       },
       {
        "en": "Proprietary technology",
        "zh": "專有技術"
       },
       {
        "en": "Being first to enter the market",
        "zh": "第一個進入市場"
       },
       {
        "en": "Scale cost advantages",
        "zh": "規模成本優勢"
       }
      ],
      "answer": 2,
      "explain": {
       "en": "The four foundations are brand, scale cost advantages, network effects, and proprietary technology. Being first is conspicuously absent — the whole point of the class is that moving first only matters if it lets you build these durable advantages; otherwise the last mover who perfects the market wins.",
       "zh": "四大基礎是品牌、規模成本優勢、網路效應、專有技術。「先進場」明顯不在其中——本課的核心正是:先行只有在能幫你建立這些持久優勢時才有意義;否則贏家是把市場做到極致的後發者(last mover)。"
      }
     },
     {
      "q": {
       "en": "In the boat-in-the-fog metaphor, what does the time you have already spent sailing represent?",
       "zh": "在「霧中行船」的比喻裡,你已經航行的時間代表什麼?"
      },
      "options": [
       {
        "en": "A proxy for how much distance — how much frontier — likely remains ahead.",
        "zh": "剩餘距離的代理指標——前方大概還剩多少前沿可以開發。"
       },
       {
        "en": "The amount of funding a startup has already burned.",
        "zh": "新創已經燒掉的資金量。"
       },
       {
        "en": "Proof that the market has already closed to new entrants.",
        "zh": "市場已對新進者關閉的證明。"
       },
       {
        "en": "The number of competitors that have entered the field.",
        "zh": "已經進入該領域的競爭者數量。"
       }
      ],
      "answer": 0,
      "explain": {
       "en": "If you've been sailing an hour you may be crossing a pond; if you've sailed for days it's an ocean. Likewise, how long a technology field has been developing hints at how much development remains — which is how Thiel judges cars (too late), lithium batteries (probably too late), and aerospace or AI (frontier still open).",
       "zh": "如果只航行了一小時,你可能在渡池塘;航行了好幾天,那就是海洋。同理,一個技術領域已經發展了多久,暗示它還剩多少可發展的空間——Thiel 就是這樣判斷汽車(太遲)、鋰電池(大概太遲),以及航太與 AI(前沿仍開放)。"
      }
     }
    ]
   },
   {
    "slug": "class-5",
    "classNo": 5,
    "title": {
     "en": "The Mechanics of Mafia",
     "zh": "幫派的養成機制 (The Mechanics of Mafia)"
    },
    "items": [
     {
      "q": {
       "en": "On Thiel's culture spectrum, where should a startup aim to sit?",
       "zh": "在 Thiel 的文化光譜上,新創應該把自己放在哪裡?"
      },
      "options": [
       {
        "en": "As close as possible to the detached professionalism of a consulting firm",
        "zh": "盡量靠近顧問公司那種超然的專業主義"
       },
       {
        "en": "At full cult-level devotion, sealed off from all outside input",
        "zh": "徹底的邪教式虔誠,完全隔絕外界意見"
       },
       {
        "en": "Between consultant nihilism and cult dogmatism — strong shared beliefs about the mission, still open to correction",
        "zh": "介於顧問式虛無主義與邪教式教條之間——對使命有強烈共同信念,但仍可被修正"
       },
       {
        "en": "Culture is irrelevant as long as the product is good enough",
        "zh": "只要產品夠好,文化根本無關緊要"
       }
      ],
      "answer": 2,
      "explain": {
       "en": "Both extremes fail: consultants share nothing beyond billable hours, and cults believe intensely in something wrong. A great startup keeps the intensity of shared belief but points it at a mission that is actually right — and stays correctable.",
       "zh": "兩個極端都會失敗:顧問公司除了計費工時之外一無所共,邪教則狂熱地信錯了東西。偉大的新創保留信念的強度,但把它對準真正正確的使命——而且保持可被修正。"
      }
     },
     {
      "q": {
       "en": "Why did Founders Fund treat the cleantech team's 20% ownership (vs. 80% for VCs) as disqualifying?",
       "zh": "為什麼 Founders Fund 認為那家潔淨科技公司「團隊持股 20%、創投持股 80%」是一票否決的理由?"
      },
      "options": [
       {
        "en": "The cap table made future fundraising legally impossible",
        "zh": "這樣的股權結構讓未來募資在法律上不可行"
       },
       {
        "en": "It revealed a passivity so deep that a team unable to stand up to its own investors could never stand up to competitors",
        "zh": "它暴露了深層的被動性:連面對自家投資人都守不住立場的團隊,更不可能對抗競爭者"
       },
       {
        "en": "Founders Fund only invests when founders keep at least 50% of the equity",
        "zh": "Founders Fund 規定創辦人必須至少保留 50% 股權才投資"
       },
       {
        "en": "Cleantech was considered a fundamentally unattractive sector",
        "zh": "潔淨科技本身就被視為毫無吸引力的產業"
       }
      ],
      "answer": 1,
      "explain": {
       "en": "The technology and team were excellent; the ownership split itself was the symptom, not the crime. What killed the deal was what it revealed: founders who shrugged off being negotiated down to 20% showed they lacked the fighting instinct that competitive situations would eventually demand.",
       "zh": "技術與團隊都很優秀;股權比例本身只是症狀,不是罪行。真正否決這筆投資的,是它揭露的事實:被談判壓到只剩 20% 還無所謂的創辦人,缺乏未來競爭局面終將需要的戰鬥本能。"
      }
     },
     {
      "q": {
       "en": "According to Stephen Cohen, what can compensation alone actually buy from an engineer?",
       "zh": "根據 Stephen Cohen 的說法,光靠報酬到底能從一位工程師身上買到什麼?"
      },
      "options": [
       {
        "en": "A full decade of loyalty, if enough equity is included",
        "zh": "只要股權給得夠多,就能買到整整十年的忠誠"
       },
       {
        "en": "About one year of all-out effort — ten years requires genuine love of the work",
        "zh": "大約一年的全力以赴——十年的投入需要對工作真正的熱愛"
       },
       {
        "en": "Nothing at all; great engineers ignore money completely",
        "zh": "什麼都買不到;偉大的工程師完全不在乎錢"
       },
       {
        "en": "Permanent retention, as long as you match Google's offer",
        "zh": "只要開得出跟 Google 一樣的價碼,就能永久留住人"
       }
      ],
      "answer": 1,
      "explain": {
       "en": "Money is a one-year lease on effort, not a decade-long bond. Engineers who fall in love with the mission stop optimizing their comp package and just start working — which is why the winning recruiting pitch is narrative and growth, not a bidding war you will lose to Google.",
       "zh": "錢只能租到一年的拚勁,換不到十年的羈絆。真正愛上使命的工程師會停止計較待遇細節,直接開始做事——這也是為什麼致勝的招募話術是故事與成長,而不是一場你注定輸給 Google 的競價戰。"
      }
     }
    ]
   },
   {
    "slug": "class-6",
    "classNo": 6,
    "title": {
     "en": "Thiel's Law",
     "zh": "提爾定律(Thiel's Law)"
    },
    "items": [
     {
      "q": {
       "en": "According to Thiel, if a VC could reduce all diligence to a single question, what should it be?",
       "zh": "根據 Thiel 的說法,如果創投只能用一個問題做完所有盡職調查,該問什麼?"
      },
      "options": [
       {
        "en": "How large is the addressable market?",
        "zh": "潛在市場規模有多大?"
       },
       {
        "en": "How much does the CEO draw in salary?",
        "zh": "CEO 領多少薪水?"
       },
       {
        "en": "How strong is the company's patent portfolio?",
        "zh": "公司的專利組合有多強?"
       },
       {
        "en": "How fast is monthly revenue growing?",
        "zh": "月營收成長有多快?"
       }
      ],
      "answer": 1,
      "explain": {
       "en": "Founders Fund found CEO pay to be the most predictive single variable: below roughly $150k, the CEO is betting on the equity and stays aligned with everyone else; above it, the salary itself becomes the thing being defended.",
       "zh": "Founders Fund 發現 CEO 薪資是預測力最強的單一變數:低於約 15 萬美元,代表 CEO 把賭注押在股權上,和所有人利益一致;高於這個數字,薪水本身反而變成他要捍衛的東西。"
      }
     },
     {
      "q": {
       "en": "Why does Thiel favor a 1x non-participating liquidation preference over a 2x participating one?",
       "zh": "為什麼 Thiel 偏好 1 倍不參與分配的清算優先權,而不是 2 倍參與分配?"
      },
      "options": [
       {
        "en": "It guarantees investors a larger payout in every possible exit.",
        "zh": "它保證投資人在任何出場情境都拿得更多。"
       },
       {
        "en": "It protects investors from abuse while keeping founders and investors wanting the same outcome in mid-sized exits.",
        "zh": "它能防止投資人被坑,同時讓創辦人和投資人在中型出場時仍想要同一個結果。"
       },
       {
        "en": "It removes the need for a board of directors.",
        "zh": "它讓公司不再需要董事會。"
       },
       {
        "en": "It automatically prevents future down rounds.",
        "zh": "它能自動避免日後的估值下修。"
       }
      ],
      "answer": 1,
      "explain": {
       "en": "A 1x non-participating preference stops founders from paying themselves out ahead of investors, but beyond that point everyone shares alike. A 2x participating preference makes investors and founders want different things whenever the exit is medium-sized — say $100m.",
       "zh": "1 倍不參與分配的優先權能防止創辦人搶在投資人之前把錢分給自己,但超過該門檻後大家依比例同享。2 倍參與分配則讓投資人和創辦人在中型出場(例如 1 億美元)時,想要的結局完全不同。"
      }
     },
     {
      "q": {
       "en": "A startup offers you 200,000 shares. Per this class, what do you actually need to know to evaluate the offer?",
       "zh": "某家新創開給你 20 萬股。根據本課,你真正需要知道什麼才能評估這個 offer?"
      },
      "options": [
       {
        "en": "The current price per share",
        "zh": "目前的每股價格"
       },
       {
        "en": "The total number of shares you would hold after four years",
        "zh": "四年後你總共會持有幾股"
       },
       {
        "en": "What percentage of the fully-diluted company those shares represent",
        "zh": "這些股份佔公司完全稀釋後股本的百分比"
       },
       {
        "en": "Whether the shares are ISOs or NSOs",
        "zh": "這些股份是 ISO 還是 NSO"
       }
      ],
      "answer": 2,
      "explain": {
       "en": "Absolute share counts and prices carry no information: 200k of 10m shares and 20m of 2bn shares are both exactly 2%. Your percentage of the whole company is the only number that matters.",
       "zh": "絕對股數和股價不帶任何資訊量:1,000 萬股中的 20 萬股,與 20 億股中的 2,000 萬股,同樣都是 2%。唯一重要的數字,是你佔整家公司的百分比。"
      }
     }
    ]
   },
   {
    "slug": "class-7",
    "classNo": 7,
    "title": {
     "en": "Follow The Money",
     "zh": "跟著錢走"
    },
    "items": [
     {
      "q": {
       "en": "According to Thiel, a venture fund is, to a first approximation, profitable only when what happens?",
       "zh": "根據 Thiel 的說法,粗略而言,創投基金唯有在什麼情況下才會獲利?"
      },
      "options": [
       {
        "en": "More than half of its portfolio companies return at least 2x",
        "zh": "超過一半的投資組合公司回報至少 2 倍"
       },
       {
        "en": "Its single best investment ends up worth more than the entire fund",
        "zh": "單一最佳投資的最終價值超過整檔基金"
       },
       {
        "en": "Annual management fees exceed the fund's operating costs",
        "zh": "每年管理費超過基金的營運成本"
       },
       {
        "en": "It diversifies across at least 100 companies to catch every winner",
        "zh": "分散投資至少 100 家公司,把所有贏家一網打盡"
       }
      ],
      "answer": 1,
      "explain": {
       "en": "Because returns follow a power law, winners are so concentrated that fund math reduces to one test: the best investment must return more than all the committed capital. Spreading bets across 100 companies is lottery-ticket thinking, and management fees only keep the lights on.",
       "zh": "因為報酬遵循冪次法則,贏家高度集中,基金的算術可以化約成一個檢驗:最好的一筆投資必須賺回超過整檔基金的資本。把賭注分散到 100 家公司是買樂透的思維,管理費也只夠維持營運。"
      }
     },
     {
      "q": {
       "en": "Founders Fund's backtest found that always taking full pro rata in up rounds led by smart VCs was highly profitable. Why does this inefficiency exist?",
       "zh": "Founders Fund 的回測發現:聰明創投領投的上升輪一律足額跟投,績效極佳。這個定價失靈為什麼存在?"
      },
      "options": [
       {
        "en": "Up rounds usually include liquidation preferences that protect follow-on investors",
        "zh": "上升輪通常附帶保護後續投資人的清算優先權"
       },
       {
        "en": "Most VCs do not truly believe the power law, so exponentially growing companies stay underpriced even in up rounds",
        "zh": "多數創投並不真的相信冪次法則,所以指數成長的公司即使在上升輪仍被低估"
       },
       {
        "en": "Lead investors are contractually obliged to buy out earlier investors at a premium",
        "zh": "領投方依約必須以溢價買下早期投資人的持股"
       },
       {
        "en": "Flat and down rounds are priced too low, so skipping them sacrifices the best bargains",
        "zh": "平盤輪和下修輪定價過低,跳過它們等於錯失最划算的機會"
       }
      ],
      "answer": 1,
      "explain": {
       "en": "The inefficiency exists because the power law is hard to believe. Most VCs anchor on the last valuation, so a company compounding exponentially looks overpriced in an up round when it is actually still cheap. Flat rounds are the opposite trap: priced by investors hoping for 2x, they often hide real deterioration.",
       "zh": "這個定價失靈之所以存在,是因為冪次法則違反直覺。多數創投錨定上一輪估值,於是指數成長的公司在上升輪看似太貴,實際上仍然便宜。平盤輪則是反向陷阱:由指望 2 倍回報的投資人定價,往往掩蓋著實質惡化。"
      }
     },
     {
      "q": {
       "en": "What did the panel say about a startup that pitches five different revenue streams, A through E?",
       "zh": "對於一家簡報中列出 A 到 E 五種營收來源的新創,座談嘉賓怎麼看?"
      },
      "options": [
       {
        "en": "It is ideal, because multiple streams diversify the company's risk",
        "zh": "這很理想,因為多元營收能分散公司風險"
       },
       {
        "en": "It is a red flag: within a business, one revenue stream almost always dominates",
        "zh": "這是警訊:企業內部幾乎總有一條營收獨大"
       },
       {
        "en": "It only matters for consumer startups, not enterprise companies",
        "zh": "這只對消費型新創重要,企業級公司無妨"
       },
       {
        "en": "It is required — most VCs want at least three proven streams before investing",
        "zh": "這是必要條件——多數創投要求至少三條經過驗證的營收才投資"
       }
      ],
      "answer": 1,
      "explain": {
       "en": "The power law operates inside a single business too: one revenue source ends up dominating. Promising five parallel streams suggests the founders have not figured out which one matters. Botha called LinkedIn's three balanced streams the exception that proves the rule.",
       "zh": "冪次法則也在單一企業內部運作:最終會有一條營收來源獨大。承諾五條並行的營收,代表創辦人還沒想清楚哪一條才重要。Botha 說 LinkedIn 三條均衡的營收,是證明規則的例外。"
      }
     }
    ]
   },
   {
    "slug": "class-8",
    "classNo": 8,
    "title": {
     "en": "The Pitch",
     "zh": "募資提案 (The Pitch)"
    },
    "items": [
     {
      "q": {
       "en": "Why does Thiel advise founders to pitch VCs early in the day?",
       "zh": "為什麼 Thiel 建議創辦人一大早去向創投提案?"
      },
      "options": [
       {
        "en": "VC partner meetings are always scheduled in the morning, so decisions happen then.",
        "zh": "創投的合夥人會議都排在早上,決策當下就會發生。"
       },
       {
        "en": "Decision fatigue: like the parole judges who approved two-thirds of morning cases and almost none by day's end, VCs get more likely to say no as the day wears on.",
        "zh": "決策疲勞:就像假釋法官早上核准三分之二的案件、傍晚幾乎全數駁回,創投越到一天的尾聲越傾向說「不」。"
       },
       {
        "en": "Morning slots are longer, giving you more time to walk through the full deck.",
        "zh": "早上的時段比較長,你有更多時間完整講完簡報。"
       },
       {
        "en": "Competing startups usually pitch in the afternoon, so mornings are less crowded.",
        "zh": "競爭的新創通常下午才提案,早上比較不擁擠。"
       }
      ],
      "answer": 1,
      "explain": {
       "en": "Thiel cites the Israeli parole judge study to show decision quality decays across the day. Saying no is the low-energy default, and tired decision-makers default harder — so claim the hours when the VC's brain is freshest.",
       "zh": "Thiel 引用以色列假釋法官的研究,說明決策品質會隨著一天的時間流逝而下滑。「拒絕」是最省力的預設選項,人越累就越依賴預設——所以要搶創投腦袋最清醒的時段。"
      }
     },
     {
      "q": {
       "en": "Whom does Thiel counterintuitively suggest pitching first inside a VC firm?",
       "zh": "在一家創投內部,Thiel 違反直覺地建議先找誰提案?"
      },
      "options": [
       {
        "en": "The most senior partner, since only partners can ultimately approve an investment.",
        "zh": "最資深的合夥人,因為最終只有合夥人能拍板投資。"
       },
       {
        "en": "Whichever partner shares your alma mater, since affinity drives deals.",
        "zh": "跟你同校的合夥人,因為校友情誼最能促成案子。"
       },
       {
        "en": "Senior associates or principals — junior investors need good deals to advance their careers, so they evaluate fairly and push hard.",
        "zh": "資深經理或副總(principal)——年輕投資人需要好案子來升遷,所以會公平評估並全力推案。"
       },
       {
        "en": "The firm's external scouts, who filter everything before partners see it.",
        "zh": "該機構的外部星探(scout),所有案子都要先經過他們過濾。"
       }
      ],
      "answer": 2,
      "explain": {
       "en": "Wealthy senior partners do not need your deal and default to inertia. Junior investment professionals, by contrast, must find winners to build their careers — their incentives are aligned with giving your company a real look.",
       "zh": "已經很有錢的資深合夥人不需要你的案子,預設反應就是慣性拒絕。相反地,年輕的投資專業人士必須靠找到贏家來累積戰功——他們的誘因跟「認真看你的公司」是一致的。"
      }
     },
     {
      "q": {
       "en": "Why does Thiel reject the \"Instagram meets TaskRabbit\" style of elevator pitch?",
       "zh": "為什麼 Thiel 反對「Instagram 加 TaskRabbit」這種電梯簡報句型?"
      },
      "options": [
       {
        "en": "It is too long to deliver in an actual elevator ride.",
        "zh": "在真實的電梯行程裡根本講不完,太冗長了。"
       },
       {
        "en": "VCs rarely know the referenced companies well enough to decode it.",
        "zh": "創投通常不夠熟悉被引用的公司,聽不懂你在比喻什麼。"
       },
       {
        "en": "The mashup format works in Hollywood but signals a derivative, easily replicated business; a strong pitch instead states the problem, the solution, and the market.",
        "zh": "混搭句型在好萊塢行得通,但在矽谷等於自曝是容易複製的模仿品;強的說法應該直述問題、解法與市場規模。"
       },
       {
        "en": "It reveals so much strategy that it should only be shared under an NDA.",
        "zh": "它透露太多策略,理應先簽保密協議(NDA)才能講。"
       }
      ],
      "answer": 2,
      "explain": {
       "en": "Recombining existing companies implies anyone could do the same. Thiel's model pitch is SpaceX's: launch costs have not fallen in decades, we cut them 90%, and the market is worth billions — problem plus solution equals money.",
       "zh": "把現有公司拼裝在一起,等於暗示任何人都做得出來。Thiel 的範本是 SpaceX:發射成本幾十年沒降,我們砍掉九成,市場規模數百億美元——問題加解法,就等於錢。"
      }
     }
    ]
   },
   {
    "slug": "class-9",
    "classNo": 9,
    "title": {
     "en": "If You Build It, Will They Come?",
     "zh": "東西做出來,人就會來嗎?"
    },
    "items": [
     {
      "q": {
       "en": "According to Thiel, what is the number one cause of startup failure?",
       "zh": "根據 Thiel 的說法,新創失敗的頭號原因是什麼?"
      },
      "options": [
       {
        "en": "A product users don't love enough",
        "zh": "產品不夠讓使用者喜愛"
       },
       {
        "en": "Running out of funding too early",
        "zh": "資金太早燒完"
       },
       {
        "en": "Poor distribution",
        "zh": "通路(distribution)不行"
       },
       {
        "en": "Hiring the wrong early team",
        "zh": "早期團隊找錯人"
       }
      ],
      "answer": 2,
      "explain": {
       "en": "Thiel argues most startups get zero distribution channels to work. Product quality cannot save a company nobody hears about — but nailing even one channel makes a great business.",
       "zh": "Thiel 主張多數新創連一條通路都沒打通。沒人聽過的公司,產品再好也救不了——反之,只要打通一條通路,就是一門好生意。"
      }
     },
     {
      "q": {
       "en": "A subscription product has $40 monthly ARPU, a 24-month average customer lifetime, and 40% gross margin. What is the most you should spend to acquire one customer?",
       "zh": "某訂閱制產品每月 ARPU 為 40 美元、平均顧客存續 24 個月、毛利率 40%。獲取一位顧客最多可以花多少錢?"
      },
      "options": [
       {
        "en": "$960",
        "zh": "960 美元"
       },
       {
        "en": "$384",
        "zh": "384 美元"
       },
       {
        "en": "$40",
        "zh": "40 美元"
       },
       {
        "en": "Any amount, as long as growth is viral",
        "zh": "只要成長是病毒式的,花多少都行"
       }
      ],
      "answer": 1,
      "explain": {
       "en": "CLV = $40 × 24 months × 40% margin = $384, and the real-world rule is CPA below CLV. $960 is lifetime revenue before margin — spending that much would lose money on every customer.",
       "zh": "CLV = 40 × 24 × 40% = 384 美元,現實世界的鐵律是 CPA 必須低於 CLV。960 美元是未扣毛利的終身營收——花到這個數,每接一位顧客就賠一筆。"
      }
     },
     {
      "q": {
       "en": "Why did PayPal concentrate its viral push on eBay power sellers?",
       "zh": "PayPal 為什麼把病毒式成長的火力集中在 eBay 強力賣家身上?"
      },
      "options": [
       {
        "en": "Their high money velocity made viral growth fastest, and locking up the best segment forced rivals into second-best segments",
        "zh": "他們金流速度最快、病毒式成長最猛,先鎖死最好的區隔,逼對手只能撿次好的"
       },
       {
        "en": "They were the largest group of internet users at the time",
        "zh": "他們是當時網路上人數最多的族群"
       },
       {
        "en": "eBay had officially partnered with PayPal and subsidized the effort",
        "zh": "eBay 官方與 PayPal 結盟並提供補貼"
       },
       {
        "en": "Power sellers rarely churned, which maximized lifetime value",
        "zh": "強力賣家幾乎不流失,終身價值最高"
       }
      ],
      "answer": 0,
      "explain": {
       "en": "Different segments grow at different speeds; you win by finding the fastest one first. Money moved quickly among power sellers, so virality compounded fastest there — and by the time competitors understood the strategy, the segment was locked in.",
       "zh": "不同區隔的成長速度不同,勝負在於先找到最快的那一塊。強力賣家之間金流最快,病毒式成長在那裡複利最猛——等對手看懂這套策略時,市場早已被鎖死。"
      }
     }
    ]
   },
   {
    "slug": "class-10",
    "classNo": 10,
    "title": {
     "en": "After Web 2.0",
     "zh": "Web 2.0 之後"
    },
    "items": [
     {
      "q": {
       "en": "According to Andreessen, why did most of the great internet ideas of the late 1990s fail?",
       "zh": "根據 Andreessen 的說法,90 年代末那些偉大的網路構想大多為什麼失敗?"
      },
      "options": [
       {
        "en": "They fundamentally misread what consumers wanted",
        "zh": "它們從根本上誤判了消費者要什麼"
       },
       {
        "en": "They were substantively right but arrived too early, before the infrastructure and users existed",
        "zh": "它們本質上是對的,只是來得太早,基礎設施與使用者都還不存在"
       },
       {
        "en": "Government regulation shut them down before they could scale",
        "zh": "政府監管在它們規模化之前就把它們關掉了"
       },
       {
        "en": "They lacked patent protection against larger competitors",
        "zh": "它們缺乏對抗大型競爭者的專利保護"
       }
      ],
      "answer": 1,
      "explain": {
       "en": "Andreessen's core claim is that the dot-com ideas — grocery delivery, e-commerce in every vertical — were correct in substance but premature: only about 50 million people were online. The same ideas work now with billions connected. The crash punished timing, not vision.",
       "zh": "Andreessen 的核心主張是:網路泡沫時代的構想——生鮮外送、各垂直領域的電商——本質上都對,只是太早:當時全球上網人口僅約 5,000 萬。如今數十億人連網,同樣的構想就成立了。崩盤懲罰的是時機,不是願景。"
      }
     },
     {
      "q": {
       "en": "What does the 'strongest' version of the software-eats-the-world thesis claim?",
       "zh": "「軟體吞噬世界」論點的「最強版本」主張什麼?"
      },
      "options": [
       {
        "en": "Value within the tech industry shifts from hardware to software and the cloud",
        "zh": "科技業內部的價值從硬體移向軟體與雲端"
       },
       {
        "en": "Old industries like newspapers are forced to digitize their existing operations",
        "zh": "報業等舊產業被迫將既有營運數位化"
       },
       {
        "en": "Silicon Valley-style software companies, with engineering-first cultures, will come to dominate every industry",
        "zh": "以工程為先的矽谷式軟體公司,終將主導所有產業"
       },
       {
        "en": "Software will make sales and marketing organizations obsolete",
        "zh": "軟體將讓銷售與行銷組織變得多餘"
       }
      ],
      "answer": 2,
      "explain": {
       "en": "The weak version stays inside tech (hardware to software) and the strong version digitizes old industries. The strongest goes further: the Silicon Valley software company itself — its engineering priority and Google/Facebook-style management — becomes the template that runs every industry.",
       "zh": "弱版本停留在科技業內部(硬體移向軟體),強版本是舊產業被迫數位化。最強版本更進一步:矽谷軟體公司本身——工程優先、Google/Facebook 式的管理——會成為主導所有產業的範本。"
      }
     },
     {
      "q": {
       "en": "What is the number one reason Andreessen Horowitz rejects startup pitches?",
       "zh": "Andreessen Horowitz 拒絕新創提案的頭號原因是什麼?"
      },
      "options": [
       {
        "en": "A great product with no real distribution strategy",
        "zh": "產品很棒,卻沒有真正的通路策略"
       },
       {
        "en": "Founders who are too young to serve as CEO",
        "zh": "創辦人太年輕,不適任 CEO"
       },
       {
        "en": "Target markets that are too small to matter",
        "zh": "目標市場太小,不值得投入"
       },
       {
        "en": "A weak patent portfolio relative to incumbents",
        "zh": "專利組合相對於既有業者太薄弱"
       }
      ],
      "answer": 0,
      "explain": {
       "en": "Andreessen says the Valley's product worship has a dark side: founders focus on product to the exclusion of everything else, and a missing go-to-market plan gets relabeled 'viral marketing.' Even Salesforce — tagline 'No software' — runs a huge sales force.",
       "zh": "Andreessen 指出,矽谷的產品崇拜有其陰暗面:創辦人只顧產品、排除一切其他事務,缺席的市場進入計畫被重新貼上「病毒式行銷」的標籤。連標語是「No software」的 Salesforce,都養著龐大的銷售部隊。"
      }
     }
    ]
   },
   {
    "slug": "class-11",
    "classNo": 11,
    "title": {
     "en": "Secrets",
     "zh": "秘密"
    },
    "items": [
     {
      "q": {
       "en": "On Thiel's map of truths, where do valuable secrets live?",
       "zh": "在 Thiel 的真相地圖上,有價值的秘密位在哪裡?"
      },
      "options": [
       {
        "en": "Among easy conventions that everyone already accepts",
        "zh": "在人人都已接受的簡單常識裡"
       },
       {
        "en": "In the middle zone of truths that are hard but possible to reach",
        "zh": "在困難但有可能達成的中間地帶"
       },
       {
        "en": "Among impossible mysteries like superstring theory",
        "zh": "在像超弦理論那樣無法驗證的奧秘裡"
       },
       {
        "en": "Spread evenly across easy, hard, and impossible truths",
        "zh": "平均分布在簡單、困難與不可能三種真相中"
       }
      ],
      "answer": 1,
      "explain": {
       "en": "Easy truths are already conventions, and impossible ones cannot be verified or acted on. Only the hard-but-doable middle zone yields truths you can discover first and build a company on before they become common knowledge.",
       "zh": "簡單的真相早已是常識,不可能的真相無法驗證也無從行動。只有「困難但做得到」的中間地帶,才藏著你能搶先發現、並在它變成常識之前拿來創業的真相。"
      }
     },
     {
      "q": {
       "en": "Which set is Thiel's list of social forces that erode belief in secrets?",
       "zh": "下列哪一組,是 Thiel 所列出侵蝕「相信秘密」的社會力量?"
      },
      "options": [
       {
        "en": "Globalization, regulation, taxation, litigation",
        "zh": "全球化、管制、稅負、訴訟"
       },
       {
        "en": "Monopoly, power law, distribution, sales",
        "zh": "壟斷、冪次法則、通路、銷售"
       },
       {
        "en": "Incrementalism, risk aversion, complacency, egalitarianism",
        "zh": "漸進主義、風險趨避、自滿、平等主義"
       },
       {
        "en": "Optimism, pessimism, determinism, indeterminism",
        "zh": "樂觀、悲觀、決定論、非決定論"
       }
      ],
      "answer": 2,
      "explain": {
       "en": "Each force narrows vision: schools reward tiny steps, people fear being wrong about unpopular beliefs, elites are told they are set for life, and society distrusts anyone claiming to see what others cannot—leaving only easy and impossible problems in view.",
       "zh": "這四股力量各自收窄視野:學校獎勵小步前進、人們害怕抱持不受歡迎的信念又出錯、菁英被告知人生已經穩了、社會不信任自稱看得見別人看不見之事的人——最後視野裡只剩「簡單」和「不可能」。"
      }
     },
     {
      "q": {
       "en": "In 1999 PayPal saw that linking money to email was a big secret that others would soon discover. What did that imply?",
       "zh": "1999 年,PayPal 看出「把金錢與電子郵件連結」是個別人很快也會發現的大秘密。這意味著什麼?"
      },
      "options": [
       {
        "en": "Go into deep stealth mode and file patents before doing anything else",
        "zh": "先進入完全隱身模式,把專利申請好再說"
       },
       {
        "en": "Keep the idea from most employees to prevent leaks",
        "zh": "對多數員工保密,以防洩露"
       },
       {
        "en": "Drop the idea, since a secret others can find is not worth pursuing",
        "zh": "放棄這個想法,因為別人找得到的秘密不值得做"
       },
       {
        "en": "Move extremely fast and share the secret liberally to build the team before copycats arrived",
        "zh": "全速衝刺、大方分享這個秘密,趕在模仿者出現前把團隊做起來"
       }
      ],
      "answer": 3,
      "explain": {
       "en": "What to do with a secret depends on the ecosystem. When a secret is big but easy for others to find, speed beats secrecy: recruiting people and executing fast matters more than hiding the idea.",
       "zh": "如何處置秘密,取決於整個生態系。當秘密很大、卻容易被別人發現時,速度勝過保密:快速招人與執行,比藏住點子更重要。"
      }
     }
    ]
   },
   {
    "slug": "class-12",
    "classNo": 12,
    "title": {
     "en": "War and Peace",
     "zh": "戰爭與和平"
    },
    "items": [
     {
      "q": {
       "en": "According to the Shakespearean model Thiel favors, why did PayPal and X.com end up in all-out war?",
       "zh": "根據 Thiel 支持的莎士比亞式模型,PayPal 和 X.com 為什麼會打到你死我活?"
      },
      "options": [
       {
        "en": "Their founders held fundamentally opposed ideologies about payments",
        "zh": "兩邊創辦人對支付抱持根本對立的理念"
       },
       {
        "en": "They were nearly identical companies chasing exactly the same prize",
        "zh": "兩家公司幾乎一模一樣,追逐的是完全相同的獎品"
       },
       {
        "en": "One side was far stronger and set out to crush the weaker player",
        "zh": "其中一方遠比另一方強大,刻意輾壓弱者"
       },
       {
        "en": "Regulators forced them into a winner-take-all market",
        "zh": "監管機關迫使他們進入贏者全拿的市場"
       }
      ],
      "answer": 1,
      "explain": {
       "en": "Marx says difference causes conflict, but Thiel argues tech wars are Shakespearean: the two firms sat four blocks apart building the same product for the same users. Likeness, not difference, made the fight vicious — and fighting made them even more alike, until merging was the only sane move.",
       "zh": "馬克思認為差異引發衝突,但 Thiel 主張科技戰是莎士比亞式的:兩家公司相隔四個街區,為同一群用戶做同樣的產品。讓戰況慘烈的是相似而非差異——而且越打越像,最後合併成了唯一理智的出路。"
      }
     },
     {
      "q": {
       "en": "What does the Microsoft–Google rivalry illustrate in this essay?",
       "zh": "在本課中,Microsoft 與 Google 的對抗說明了什麼?"
      },
      "options": [
       {
        "en": "Sustained head-to-head competition sharpens both companies into winners",
        "zh": "持續正面對決會把兩家公司都磨練成贏家"
       },
       {
        "en": "While two rivals converged and fought, Apple avoided the war and became worth more than both combined",
        "zh": "當兩個對手彼此趨同、纏鬥不休時,Apple 避開戰爭,市值超越兩者總和"
       },
       {
        "en": "Search engines are inherently more profitable than operating systems",
        "zh": "搜尋引擎天生比作業系統更賺錢"
       },
       {
        "en": "The first mover in any market eventually wins",
        "zh": "任何市場的先行者終將獲勝"
       }
      ],
      "answer": 1,
      "explain": {
       "en": "After a decade of Bing vs. Search, Chrome vs. Explorer, and Docs vs. Office, Apple's $531B market cap in 2012 topped Microsoft and Google's $456B combined. Thiel's point: fighting is costly, and those who stay out of the war can swoop in and capitalize on the peace.",
       "zh": "經過十年的 Bing 對 Search、Chrome 對 Explorer、Docs 對 Office,2012 年 Apple 的 5,310 億美元市值超過 Microsoft 加 Google 的 4,560 億總和。Thiel 的重點:打仗代價高昂,置身戰場之外的人反而能坐收和平的紅利。"
      }
     },
     {
      "q": {
       "en": "In Hoffman's interview question about splitting $100k between iOS and Android, why is '50-50' the only wrong answer?",
       "zh": "在 Hoffman 的面試題「10 萬美元怎麼分配到 iOS 和 Android」中,為什麼「五五對分」是唯一的錯誤答案?"
      },
      "options": [
       {
        "en": "Because Android clearly deserved the larger share in 2012",
        "zh": "因為 2012 年 Android 顯然值得分到更多"
       },
       {
        "en": "Because iOS developers earned more revenue per user",
        "zh": "因為 iOS 開發者的單一用戶營收更高"
       },
       {
        "en": "Because an even split signals you have no developed view of where technology is heading",
        "zh": "因為平均分配代表你對科技走向沒有形成任何觀點"
       },
       {
        "en": "Because budgets should never be divided across two platforms",
        "zh": "因為預算永遠不該分散到兩個平台上"
       }
      ],
      "answer": 2,
      "explain": {
       "en": "The question isn't about the correct ratio — it tests whether you've formed an insight at all. '50-50' is equivalent to 'I don't know.' Hoffman argues that staying ahead of technological curves requires developing a view, largely by regularly exchanging ideas with smart people.",
       "zh": "這題考的不是正確比例,而是你到底有沒有形成洞見。「五五對分」等於說「我不知道」。Hoffman 認為,要走在科技曲線前面,就必須培養觀點——主要方法是經常與聰明人交流想法。"
      }
     }
    ]
   },
   {
    "slug": "class-13",
    "classNo": 13,
    "title": {
     "en": "You Are Not A Lottery Ticket",
     "zh": "你不是一張樂透彩券"
    },
    "items": [
     {
      "q": {
       "en": "What does Thiel offer as the strongest evidence that startup success is not mostly luck?",
       "zh": "Thiel 用什麼作為「創業成功並非主要靠運氣」的最有力證據?"
      },
      "options": [
       {
        "en": "Large statistical studies comparing thousands of startups",
        "zh": "比較數千家新創的大型統計研究"
       },
       {
        "en": "Serial founders — Jobs, Dorsey, Musk — who each built multiple billion-dollar companies",
        "zh": "連續創業者——Jobs、Dorsey、Musk——各自打造多家十億美元等級的公司"
       },
       {
        "en": "The consistently high hit rate of top venture capital funds",
        "zh": "頂尖創投基金始終如一的高命中率"
       },
       {
        "en": "Founders' own testimony that they worked harder than everyone else",
        "zh": "創辦人自述比所有人都更努力"
       }
      ],
      "answer": 1,
      "explain": {
       "en": "Because each company happens only once, statistics can never settle the question. Repeated success by the same people across different companies is the pattern chance struggles hardest to explain.",
       "zh": "因為每家公司只會發生一次,統計永遠無法回答這個問題。同一批人在不同公司反覆成功,才是運氣最難解釋的模式。"
      }
     },
     {
      "q": {
       "en": "According to the essay, what is the built-in contradiction of indefinite optimism?",
       "zh": "根據本文,不明確樂觀的內在矛盾是什麼?"
      },
      "options": [
       {
        "en": "It expects a better future while nobody plans, saves, or invests to create it",
        "zh": "它期待更好的未來,卻沒有人為此規劃、儲蓄或投資"
       },
       {
        "en": "It requires a savings rate as high as China's",
        "zh": "它需要像中國一樣高的儲蓄率"
       },
       {
        "en": "It only works in countries with strong central governments",
        "zh": "它只在中央政府強勢的國家行得通"
       },
       {
        "en": "It is too obsessed with engineering mega-projects",
        "zh": "它過度沉迷於巨型工程"
       }
      ],
      "answer": 0,
      "explain": {
       "en": "Progress needs someone to make it happen. A future that is better but unknowable leaves money circulating through the system with no one willing to commit it — low savings plus low investment is the visible symptom.",
       "zh": "進步需要有人動手實現。一個更好卻不可知的未來,只會讓錢在體系裡空轉、沒有人願意投入——低儲蓄加上低投資就是可見的症狀。"
      }
     },
     {
      "q": {
       "en": "In an indefinite world, how are companies with genuine secret plans priced — and what follows from that?",
       "zh": "在不明確的世界裡,握有真正祕密計畫的公司會被如何定價?這又意味著什麼?"
      },
      "options": [
       {
        "en": "At a premium, because scarce plans attract capital",
        "zh": "溢價,因為稀缺的計畫會吸引資本"
       },
       {
        "en": "Fairly, because markets are efficient",
        "zh": "合理定價,因為市場是有效率的"
       },
       {
        "en": "At zero, so truly definite companies are systematically undervalued",
        "zh": "估為零,所以真正明確的公司會被系統性低估"
       },
       {
        "en": "They cannot be priced at all and get shut out of markets",
        "zh": "完全無法定價,因此被市場拒於門外"
       }
      ],
      "answer": 2,
      "explain": {
       "en": "Investors trained on randomness cannot credit what their models exclude — Thiel's example is institutions underweighting Apple for years — so the ability to execute a long-term secret plan becomes an enormous competitive edge.",
       "zh": "習慣隨機性的投資人無法為模型之外的東西給分——Thiel 舉的例子是機構投資人長年低配 Apple——因此能長期執行祕密計畫,本身就是巨大的競爭優勢。"
      }
     }
    ]
   },
   {
    "slug": "class-14",
    "classNo": 14,
    "title": {
     "en": "Seeing Green",
     "zh": "看見綠色商機"
    },
    "items": [
     {
      "q": {
       "en": "Why, in Thiel's telling, did the cleantech bubble produce so many failed companies?",
       "zh": "依 Thiel 的說法,清潔技術泡沫為什麼倒了一大片公司?"
      },
      "options": [
       {
        "en": "Government pulled subsidies too early.",
        "zh": "政府太早抽走補貼。"
       },
       {
        "en": "The underlying science was mostly fraudulent.",
        "zh": "背後的科學大多是造假。"
       },
       {
        "en": "They failed nearly all of the ten things every startup must get right, not just one.",
        "zh": "新創必須做對的十件事,他們幾乎全部沒做對,而不是只錯一項。"
       },
       {
        "en": "Oil prices collapsed and made alternatives uncompetitive.",
        "zh": "油價崩盤,讓替代能源失去競爭力。"
       }
      ],
      "answer": 2,
      "explain": {
       "en": "Success requires getting essentially all ten factors right — 8 of 10 is a B-, 5 of 10 an F — and most cleantech companies scored zero or one. The failure was overdetermined, not caused by a single external shock.",
       "zh": "成功需要十項幾乎全對——做對 8 項是 B-,只做對 5 項就不及格——而多數清潔技術公司只拿到零到一項。失敗是多重因素注定的,不是單一外部衝擊造成的。"
      }
     },
     {
      "q": {
       "en": "Which technology does the essay hold up as a genuine energy secret — a breakthrough hiding in plain sight?",
       "zh": "文章認為哪一項技術是真正的能源「祕密」——藏在眾目睽睽下的突破?"
      },
      "options": [
       {
        "en": "Nuclear fusion",
        "zh": "核融合"
       },
       {
        "en": "Thorium reactors",
        "zh": "釷(thorium)反應爐"
       },
       {
        "en": "Shale gas fracking",
        "zh": "頁岩氣壓裂(fracking)"
       },
       {
        "en": "Grid-scale lithium batteries",
        "zh": "電網級鋰電池"
       }
      ],
      "answer": 1,
      "explain": {
       "en": "Thorium was one of three fissile candidates studied in the 1940s and was dropped precisely because it cannot make bombs. Decades of politically motivated neglect left an order-of-magnitude opportunity — abundant, clean, safe, roughly one-tenth the cost — unexplored.",
       "zh": "釷是 1940 年代研究過的三種可裂變元素之一,被放棄的原因正是它做不成核彈。數十年出於政治因素的忽視,留下一個數量級的機會——蘊藏豐富、乾淨、安全、成本約十分之一——卻無人開發。"
      }
     },
     {
      "q": {
       "en": "After Solyndra collapsed, what question did Thiel say neither political party asked?",
       "zh": "Solyndra 倒閉後,Thiel 指出兩黨都沒問的問題是什麼?"
      },
      "options": [
       {
        "en": "Whether executives should be prosecuted",
        "zh": "高層該不該被起訴"
       },
       {
        "en": "Whether the loan process followed proper procedure",
        "zh": "貸款程序是否合規"
       },
       {
        "en": "Whether taxpayers could be repaid",
        "zh": "納稅人的錢拿不拿得回來"
       },
       {
        "en": "Whether the technology actually worked",
        "zh": "這項技術到底行不行"
       }
      ],
      "answer": 3,
      "explain": {
       "en": "Republicans attacked ethics and Democrats defended process — both legal/financial questions typical of an indeterminate culture. A determinate culture asks the substantive engineering question first: did the product work, and was it worth building?",
       "zh": "共和黨攻擊操守,民主黨辯護程序——都是「不明確」文化典型的法律與財務問題。「明確」文化會先問實質的工程問題:產品到底行不行?值不值得做?"
      }
     }
    ]
   },
   {
    "slug": "class-15",
    "classNo": 15,
    "title": {
     "en": "Back to the Future",
     "zh": "回到未來"
    },
    "items": [
     {
      "q": {
       "en": "According to this class, what is the right way to use the failed predictions of the 1950s and 60s?",
       "zh": "根據本課,面對 1950、60 年代那些落空的未來預測,正確的做法是什麼?"
      },
      "options": [
       {
        "en": "Copy them faithfully now that technology has finally caught up",
        "zh": "既然技術終於跟上了,就照原樣忠實複製"
       },
       {
        "en": "Treat them as proof that those ideas were impossible all along",
        "zh": "把它們當成那些想法本來就不可行的證據"
       },
       {
        "en": "Diagnose why progress stalled, then attack the problem differently with modern tools",
        "zh": "診斷當年進展為何停滯,再用現代工具以不同方式重新進攻"
       },
       {
        "en": "Wait until experts stop saying the technology is 25–50 years away",
        "zh": "等到專家不再說「這技術還要 25 到 50 年」再行動"
       }
      ],
      "answer": 2,
      "explain": {
       "en": "The retrofuture method is diagnostic, not nostalgic. Every guest company reframed the old dream rather than rebuilding it: compressed air instead of miracle batteries, tracked robots instead of butlers. Copying the past directly never works, and expert 25–50 year forecasts are just accountability-free ways of saying someone else will do it.",
       "zh": "復古未來方法是診斷,不是懷舊。每家來賓公司都重新定義了舊夢想,而非重建它:用壓縮空氣取代奇蹟電池、用履帶機器人取代管家。直接複製過去從來行不通,而專家的「還要 25 到 50 年」只是不必負責任地說「反正會有別人做」。"
      }
     },
     {
      "q": {
       "en": "How did LightSail Energy reframe the energy storage problem?",
       "zh": "LightSail Energy 如何重新定義儲能問題?"
      },
      "options": [
       {
        "en": "By searching for a breakthrough battery chemistry beyond lithium",
        "zh": "尋找超越鋰電池的突破性電池化學"
       },
       {
        "en": "By treating storage as a physics problem: compressed air in tanks, with water spray to manage heat",
        "zh": "把儲能當成物理問題:用儲氣瓶壓縮空氣,並噴水霧控制熱量"
       },
       {
        "en": "By betting on hydrogen fuel cells for grid-scale storage",
        "zh": "押注氫燃料電池做電網級儲能"
       },
       {
        "en": "By building larger pumped-hydro reservoirs near cities",
        "zh": "在城市附近興建更大的抽蓄水力設施"
       }
      ],
      "answer": 1,
      "explain": {
       "en": "Batteries are roughly 200-year-old chemistry approaching hard physical limits — a genuinely better one might not even exist to be found. LightSail sidestepped chemistry entirely: compress air in steel tanks and spray in water so the heat of compression isn't lost. Same market, completely different discipline.",
       "zh": "電池是約 200 年歷史的化學技術,正逼近硬性物理極限——真正更好的電池甚至可能根本不存在。LightSail 乾脆繞開化學:把空氣壓進鋼瓶,並噴入水霧留住壓縮產生的熱。同一個市場,完全不同的學科。"
      }
     },
     {
      "q": {
       "en": "Thiel's rule of thumb for big-ticket enterprise sales: your next biggest deal will realistically be…",
       "zh": "Thiel 對高單價企業銷售的經驗法則:你下一筆最大的訂單,實際上會是……"
      },
      "options": [
       {
        "en": "Whatever a $100M government RFP happens to offer",
        "zh": "看政府剛好釋出的一億美元標案有多大"
       },
       {
        "en": "About 10x your largest deal, if the product is truly great",
        "zh": "只要產品夠好,大約是既有最大訂單的十倍"
       },
       {
        "en": "About 2x your largest deal so far",
        "zh": "大約是你目前最大訂單的兩倍"
       },
       {
        "en": "Unpredictable, since each enterprise buyer evaluates objectively",
        "zh": "無法預測,因為每個企業買家都會客觀評估"
       }
      ],
      "answer": 2,
      "explain": {
       "en": "Expensive sales are never fully objective: buyers ask who else has bought, and no customer signs up for 10x your largest prior deployment. The mega-contract fantasy almost never lands. Healthy enterprise startups instead compound 50–100% a year — roughly doubling deal sizes as references accumulate.",
       "zh": "高價銷售從來不是完全客觀的:買家會問「還有誰買過?」,也沒有客戶會簽下比你既有最大案子大十倍的合約。巨額合約的幻想幾乎不會成真。健康的企業級新創是每年成長 50–100%——隨著口碑客戶累積,訂單規模大約逐次翻倍。"
      }
     }
    ]
   },
   {
    "slug": "class-16",
    "classNo": 16,
    "title": {
     "en": "Decoding Ourselves",
     "zh": "解碼我們自己"
    },
    "items": [
     {
      "q": {
       "en": "The class notes that developing a new drug cost about $100 million in 1975 but $1.3 billion by 2012. What explanation does the essay favor?",
       "zh": "課堂指出,開發一款新藥的成本從 1975 年的約 1 億美元漲到 2012 年的 13 億美元。本課偏好的解釋是什麼?"
      },
      "options": [
       {
        "en": "FDA fees and paperwork alone account for the increase.",
        "zh": "光是 FDA 規費與文書作業就足以解釋漲幅。"
       },
       {
        "en": "Scientists have become dramatically less productive.",
        "zh": "科學家的生產力大幅下滑。"
       },
       {
        "en": "The luck-driven screening lottery has exhausted its easy wins, so each random discovery costs more.",
        "zh": "運氣驅動的篩選樂透已摘完容易的果實,所以每個隨機發現都變得更貴。"
       },
       {
        "en": "Demand for new drugs has collapsed, shrinking economies of scale.",
        "zh": "新藥需求崩跌,規模經濟消失。"
       }
      ],
      "answer": 2,
      "explain": {
       "en": "The essay frames traditional discovery as a lottery—10,000 compounds screened for 1 approval. Rising ticket prices signal the low-hanging fruit is gone, which is precisely why the guests bet on making discovery deterministic through computation instead of buying ever-costlier lottery tickets.",
       "zh": "本課把傳統新藥開發框架成樂透——篩 10,000 個化合物才換 1 個核准。票價上漲代表低垂的果實已被摘完,這正是來賓們押注「用運算讓開發變得可決定」的原因:與其買越來越貴的彩券,不如改寫遊戲規則。"
      }
     },
     {
      "q": {
       "en": "Why does Brian Frezza believe now is the right time for computational biology, despite biotech's long slump?",
       "zh": "儘管生技產業長期低迷,Brian Frezza 為什麼相信現在正是運算生物學的好時機?"
      },
      "options": [
       {
        "en": "Windows open and close: Genentech's late-1970s window produced 9 of the 10 largest U.S. biotechs after 30 shut years, and a new computational window is opening now.",
        "zh": "時機之窗會開也會關:Genentech 在 1970 年代末打開的窗,誕生了美國前十大生技公司中的九家(此前關了 30 年),而現在一扇新的運算之窗正在打開。"
       },
       {
        "en": "The FDA has recently deregulated drug approval, making trials cheap.",
        "zh": "FDA 最近放寬新藥審查,讓臨床試驗變便宜了。"
       },
       {
        "en": "Biotech VCs are newly eager to fund multi-compound platform companies.",
        "zh": "生技創投最近特別熱衷投資多化合物的平台型公司。"
       },
       {
        "en": "Viral diseases have mostly been eliminated, freeing resources for harder problems.",
        "zh": "病毒疾病大多已被消滅,資源得以轉向更難的問題。"
       }
      ],
      "answer": 0,
      "explain": {
       "en": "Frezza's argument is historical: industry windows are rare and brief, and real work happens in stealth years before the public notices. He pairs this with the moat logic—clinical-trial barriers mean whoever gets through the new window first becomes very hard to displace.",
       "zh": "Frezza 的論證是歷史性的:產業之窗稀有且短暫,而真正的工作早在公眾察覺前就於隱形模式中進行多年。他再搭配護城河邏輯——臨床試驗門檻意味著先穿過新窗口的人,將極難被取代。"
      }
     },
     {
      "q": {
       "en": "How does Balaji Srinivasan expect genomics to reach mainstream adoption?",
       "zh": "Balaji Srinivasan 認為基因體學要如何走向大眾採用?"
      },
      "options": [
       {
        "en": "By hiring a large hospital-facing sales force to push sequencing.",
        "zh": "靠龐大的醫院業務團隊推銷定序服務。"
       },
       {
        "en": "By waiting for governments to mandate universal sequencing.",
        "zh": "等政府強制全民定序。"
       },
       {
        "en": "By making sequencing entirely free to consumers.",
        "zh": "把定序做到對消費者完全免費。"
       },
       {
        "en": "Through a compelling on-ramp—pregnancy screening—after which the marginal cost of using one's genetic data approaches zero.",
        "zh": "透過一個有說服力的入口——孕期篩檢——之後使用自身基因資料的邊際成本便趨近於零。"
       }
      ],
      "answer": 3,
      "explain": {
       "en": "Balaji's analogy: nobody buys a computer just to use Twitter, but once they own one, they do. People overcome their discomfort with sequencing when it is framed as demonstrably useful—here, protecting their children—and adoption compounds from that entry point.",
       "zh": "Balaji 的類比:沒有人為了用 Twitter 而買電腦,但買了電腦之後自然會用。當定序被框架成「明顯有用」——在這裡是為了保護孩子——人們就會跨出舒適圈,而採用會從這個入口開始複利擴散。"
      }
     }
    ]
   },
   {
    "slug": "class-17",
    "classNo": 17,
    "title": {
     "en": "Deep Thought",
     "zh": "深度思考(Deep Thought)"
    },
    "items": [
     {
      "q": {
       "en": "In Thiel's explored-vs-consensus 2x2 matrix, where did AI sit in 2012 — and why did that matter?",
       "zh": "在 Thiel 的「探索程度 × 共識程度」2x2 矩陣中,2012 年的 AI 位在哪一格?這為什麼重要?"
      },
      "options": [
       {
        "en": "Heavily explored, consensus — everyone agreed it was the next big thing",
        "zh": "高度探索、共識——所有人都同意它是下一個大機會"
       },
       {
        "en": "Underexplored, contrarian — decades of broken promises scared rivals off, leaving thin competition",
        "zh": "未被探索、逆勢——數十年的跳票嚇跑了對手,競爭稀少"
       },
       {
        "en": "Underexplored, consensus — everyone agreed but no one acted",
        "zh": "未被探索、共識——大家都同意,卻沒有人行動"
       },
       {
        "en": "Heavily explored, contrarian — many teams pursued it in secret",
        "zh": "高度探索、逆勢——許多團隊在檯面下祕密進行"
       }
      ],
      "answer": 1,
      "explain": {
       "en": "Biotech 2.0 sat in the heavily-explored consensus cell — the worst quadrant, since crowded agreement competes away returns. AI's baggage of unfulfilled promises kept rivals away, and by Thiel's contrarian logic that scarcity of competition was precisely the opportunity.",
       "zh": "生技 2.0 位在「高度探索的共識」那一格——最糟的象限,因為擁擠的共識會把報酬競爭殆盡。AI 的歷史包袱讓對手卻步,而依 Thiel 的逆勢邏輯,競爭稀少本身正是機會所在。"
      }
     },
     {
      "q": {
       "en": "According to the class, when does the Ricardian gains-from-trade case for AI break down?",
       "zh": "根據這堂課,李嘉圖式「貿易利得」對 AI 的論證會在什麼時候失效?"
      },
      "options": [
       {
        "en": "When AI is slightly better than humans at a few tasks",
        "zh": "當 AI 在少數任務上比人類稍強時"
       },
       {
        "en": "When AI starts facing FDA-style regulation",
        "zh": "當 AI 開始面臨類似 FDA 的監管時"
       },
       {
        "en": "When AI becomes vastly superior at everything, so trading with humans stops making sense",
        "zh": "當 AI 在所有事情上都遠遠超越人類,與人類交易不再有意義時"
       },
       {
        "en": "When displaced workers refuse to retrain, as the Luddites did",
        "zh": "當失業工人像盧德派一樣拒絕轉業時"
       }
      ],
      "answer": 2,
      "explain": {
       "en": "Comparative advantage thrives on marginal differences — a somewhat-better AI creates a division of labor that enriches everyone. But at a vast gap, humans are to AI what mice are to humans: there is no trade. Unlike most technologies, AI may have a cliff where control is total one moment and gone the next.",
       "zh": "比較利益靠的是「差距不大」——稍強的 AI 會創造分工、讓所有人受惠。但當差距變得巨大,人類之於 AI 就像老鼠之於人類:根本沒有貿易可言。與多數科技不同,AI 可能存在一個懸崖:前一刻控制權完好,下一刻全數消失。"
      }
     },
     {
      "q": {
       "en": "Which strategy did Bob McGrew's Palantir represent, and what evidence supported it?",
       "zh": "Bob McGrew 的 Palantir 代表哪一種策略?支持它的證據是什麼?"
      },
      "options": [
       {
        "en": "Extracting brain principles, supported by ferret rewiring experiments",
        "zh": "萃取大腦原理,證據是雪貂神經改接實驗"
       },
       {
        "en": "Bayesian predictive databases, supported by the explosion of cloud data",
        "zh": "貝氏預測資料庫,證據是雲端資料爆炸性成長"
       },
       {
        "en": "Full brain emulation, supported by Deep Blue defeating Kasparov",
        "zh": "完整大腦模擬,證據是深藍(Deep Blue)擊敗 Kasparov"
       },
       {
        "en": "Intelligence augmentation, supported by human-computer chess teams beating both lone grandmasters and lone computers",
        "zh": "智慧增強,證據是人機組隊在西洋棋中同時擊敗單獨的大師與單獨的電腦"
       }
      ],
      "answer": 3,
      "explain": {
       "en": "McGrew argued for augmentation over strong AI: after Deep Blue beat Kasparov in 1997, the best chess entity became neither human nor machine but decent players paired with computers. Palantir applies the same logic to data analysis — humans supply concepts, machines supply scale.",
       "zh": "McGrew 主張增強而非強 AI:1997 年深藍擊敗 Kasparov 之後,棋力最強的其實既不是人也不是機器,而是「普通好手加電腦」的組合。Palantir 把同樣邏輯用在資料分析上——人類出概念,機器出規模。"
      }
     }
    ]
   },
   {
    "slug": "class-18",
    "classNo": 18,
    "title": {
     "en": "Founder as Victim, Founder as God",
     "zh": "創辦人是受害者,也是神"
    },
    "items": [
     {
      "q": {
       "en": "According to the essay, which model best describes the distribution of founder traits?",
       "zh": "根據本文,哪個模型最能描述創辦人特質的分布?"
      },
      "options": [
       {
        "en": "A normal distribution — founders are average people who got lucky.",
        "zh": "常態分布——創辦人是運氣好的普通人。"
       },
       {
        "en": "A right-shifted curve — founders are simply above average on most traits.",
        "zh": "整體右移的曲線——創辦人只是大多數特質都優於平均。"
       },
       {
        "en": "An inverted normal distribution — founders occupy both extremes of the same traits simultaneously.",
        "zh": "反轉的常態分布——創辦人同時佔據同一特質的兩個極端。"
       },
       {
        "en": "A uniform distribution — founder traits are essentially random.",
        "zh": "均勻分布——創辦人的特質基本上是隨機的。"
       }
      ],
      "answer": 2,
      "explain": {
       "en": "Thiel argues founders are extreme insiders and extreme outsiders at once — both tails are fat. Four forces (nature, nurture, self-exaggeration, crowd exaggeration) loop together and push founders even further toward both poles, which a merely 'above average' model cannot capture.",
       "zh": "Thiel 主張創辦人同時是極端內部人與極端外部人——兩端尾巴都很肥。四股力量(天生、後天、自我誇大、群眾誇大)互相循環,把創辦人往兩極推得更遠;「只是優於平均」的模型無法捕捉這一點。"
      }
     },
     {
      "q": {
       "en": "Why can't the scapegoat be a completely ordinary member of the community, chosen at random?",
       "zh": "為什麼代罪羔羊不能是隨機挑選的普通社群成員?"
      },
      "options": [
       {
        "en": "Ordinary people were too well protected by their clans.",
        "zh": "普通人受到家族嚴密保護,難以下手。"
       },
       {
        "en": "The crowd would see itself in the victim and fear being chosen next.",
        "zh": "群眾會在受害者身上看見自己,害怕下一個就輪到自己。"
       },
       {
        "en": "The gods were believed to accept only high-born victims.",
        "zh": "人們相信神明只接受出身高貴的祭品。"
       },
       {
        "en": "Random selection was impractical before written records existed.",
        "zh": "在文字紀錄出現之前,隨機挑選在技術上不可行。"
       }
      ],
      "answer": 1,
      "explain": {
       "en": "The mechanism only works if the victim is outsider enough to be safely 'other,' yet insider enough to be plausibly blamed for internal strife. Sacrificing someone just like everyone else would make every member of the crowd feel like the next candidate — so the perfect scapegoat sits at both extremes.",
       "zh": "這套機制要運作,受害者必須「外」到能被安全地當成異類,又「內」到能被合理怪罪為內鬥元兇。獻祭一個跟大家一模一樣的人,會讓群眾人人自危、覺得下一個就是自己——所以完美的代罪羔羊必須同時站在兩個極端。"
      }
     },
     {
      "q": {
       "en": "What does Thiel identify as the truly decisive advantage of having co-founders?",
       "zh": "Thiel 認為擁有共同創辦人「真正決定性」的優勢是什麼?"
      },
      "options": [
       {
        "en": "More capital and wider networks at the earliest stage.",
        "zh": "在最早期帶來更多資金與更廣的人脈。"
       },
       {
        "en": "Complementary skills reduce technical mistakes.",
        "zh": "互補的技能可以減少技術上的失誤。"
       },
       {
        "en": "Investors systematically prefer teams over solo founders.",
        "zh": "投資人系統性地偏好團隊勝過單一創辦人。"
       },
       {
        "en": "A mob needs a singular victim, so multiple founders are much harder to scapegoat.",
        "zh": "暴民需要單一的受害者,所以多位創辦人更難被當成代罪羔羊。"
       }
      ],
      "answer": 3,
      "explain": {
       "en": "Brainstorming and collaboration are the conventional benefits, but Thiel's point is structural: scapegoating requires isolating one person. Pairs like Hewlett-Packard, Moore-Noyce, and Page-Brin are hard for a mob-like board to unite against — the more singular and isolated the founder, the more dangerous the phenomenon.",
       "zh": "腦力激盪與協作只是常見的表面好處;Thiel 的重點是結構性的:獻祭需要孤立出「一個人」。像 Hewlett-Packard、Moore-Noyce、Page-Brin 這樣的組合,讓暴民化的董事會難以齊心對付——創辦人越單一、越孤立,獻祭現象就越危險。"
      }
     }
    ]
   },
   {
    "slug": "class-19",
    "classNo": 19,
    "title": {
     "en": "Stagnation or Singularity?",
     "zh": "停滯,還是奇點?"
    },
    "items": [
     {
      "q": {
       "en": "Thiel challenges the panel: if the singularity is inevitable, why not just grab popcorn and watch? What is de Grey's core rebuttal?",
       "zh": "Thiel 向與談人挑戰:如果奇點必然到來,為什麼不乾脆抱著爆米花看戲就好?de Grey 的核心反駁是什麼?"
      },
      "options": [
       {
        "en": "Exponential extrapolation is statistically flawed, so the singularity may never come at all.",
        "zh": "指數外推在統計上站不住腳,所以奇點可能根本不會來。"
       },
       {
        "en": "Timing matters enormously: roughly 100,000 people die of aging-related causes every day, so each day of delay carries a massive human cost.",
        "zh": "時程至關重要:每天約有 10 萬人死於老化相關疾病,所以每延遲一天都是巨大的人命代價。"
       },
       {
        "en": "Watching passively is fine for individuals, but governments have a duty to act first.",
        "zh": "個人袖手旁觀沒關係,但政府有義務率先行動。"
       },
       {
        "en": "The singularity is only inevitable if enough billionaires fund it directly.",
        "zh": "只有夠多億萬富翁直接出資,奇點才是必然的。"
       }
      ],
      "answer": 1,
      "explain": {
       "en": "De Grey does not dispute feasibility; he attacks complacency. \"Inevitable eventually\" ignores that every day the cure slips costs about 100,000 lives, so urgency is a moral question, not merely a technical one.",
       "zh": "de Grey 質疑的不是可行性,而是自滿心態。「反正遲早會發生」忽略了解方每晚到一天,就多付出約 10 萬條人命——急迫性是道德問題,不只是技術問題。"
      }
     },
     {
      "q": {
       "en": "According to Vassar, who has historically forged the big leaps forward?",
       "zh": "根據 Vassar 的說法,歷史上真正推動重大躍進的是誰?"
      },
      "options": [
       {
        "en": "Lone geniuses working in isolation.",
        "zh": "獨自埋頭苦幹的孤獨天才。"
       },
       {
        "en": "Large government institutions and defense departments.",
        "zh": "龐大的政府機構與國防部門。"
       },
       {
        "en": "Mid-sized groups of dozens to a few hundred people bound by trust, like the Royal Society or the American founders.",
        "zh": "數十到數百人、以信任凝聚的中型團體,例如皇家學會或美國開國元勳。"
       },
       {
        "en": "Mass consumer markets voting with their wallets.",
        "zh": "用鈔票投票的大眾消費市場。"
       }
      ],
      "answer": 2,
      "explain": {
       "en": "Vassar argues breakthroughs are almost never lone geniuses and almost never giant institutions. The sweet spot is coordinated \"tribes\": big enough to matter, small enough for genuine dependency and trust.",
       "zh": "Vassar 主張,突破幾乎從來不是孤獨天才的功勞,也幾乎從來不是龐大機構的產物。甜蜜點是協作的「部落」:大到足以成事,小到成員之間仍有真實的依賴與信任。"
      }
     },
     {
      "q": {
       "en": "In his closing remarks, what does Thiel mean by \"your life is a singularity\"?",
       "zh": "在結語中,Thiel 說「你的人生就是一個奇點」是什麼意思?"
      },
      "options": [
       {
        "en": "Everyone in the class should go work on singularity-related technologies.",
        "zh": "全班每個人都應該投身與奇點相關的科技領域。"
       },
       {
        "en": "Careers, like startups, succeed by following well-established statistical patterns.",
        "zh": "職涯和新創一樣,照著成熟的統計規律走才會成功。"
       },
       {
        "en": "Your life is a one-time, unrepeatable event, so treating yourself as a statistic on the safe default path sells yourself short.",
        "zh": "人生是一次性、無法重來的事件,把自己當成安全預設路徑上的統計數字,是看輕了自己。"
       },
       {
        "en": "Only a handful of founders like Thiel or Musk can actually shape the future.",
        "zh": "只有 Thiel 或 Musk 這樣少數的創業者能真正塑造未來。"
       }
      ],
      "answer": 2,
      "explain": {
       "en": "The point is agency. Probabilistic thinking describes repeatable processes, but a life happens exactly once, like a technology going from zero to one. So find a frontier and act, instead of following the \"obvious\" well-trodden path.",
       "zh": "重點是能動性(agency)。機率思維描述的是可重複的過程,但人生只會發生一次,就像一項科技從 0 到 1。所以要找到一條前沿並採取行動,而不是照著那條「理所當然」的老路走。"
      }
     }
    ]
   }
  ]
 }
];
