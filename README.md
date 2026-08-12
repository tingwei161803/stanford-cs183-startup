# CS183 創業課筆記 | CS183: Startup — Class Notes

> 把 Peter Thiel 2012 年史丹佛 CS183 創業課的 19 篇課堂筆記,整理成中英雙語、可互動的學習網站。

2012 年春天,Peter Thiel 在史丹佛開設 CS183: Startup;當時還在讀法學院的 Blake Masters 把 19 堂課寫成詳盡的 essay 筆記(後來擴寫成《從 0 到 1 / Zero to One》)。本站將每堂課消化成結構化學習筆記——學習目標、核心概念、金句、以及「到 2026 年這些說法應驗了嗎」的現況查核——並附上全課程術語表、字卡與總測驗。

---

## 🔗 線上版 / Live

| | |
|---|---|
| 🌐 網站 | <https://stanford-cs183-startup.peteraim.com/> |

> 直接點進去就能用,無需安裝。每堂課有獨立網址(`/class-11.html`),課內段落可用 `#<section-id>` 深連結。

---

## ✨ 功能特色

- 📚 **19 堂課逐課筆記** — 學習目標、一句話摘要、核心概念、金句、表格與策略卡
- 🕰 **當年 vs. 現在(2026)** — 每課挑出當年的說法/預測,對照現況並附來源連結
- 🧠 **隨堂測驗 + 總測驗** — 每課 3 題即點即答(✅/❌ + 解析),另有跨 19 課的總測驗頁
- 🃏 **字卡復習** — 翻卡式 deck,支援鍵盤方向鍵與洗牌
- 📖 **術語表** — 全課程關鍵概念,可即時搜尋,並連回出處課次
- 🌏 **雙語切換** — English / 繁體中文一鍵全站切換
- 🌗 **深色 / 淺色模式** — 手動切換並記憶偏好
- 📱 **響應式設計** — 手機、平板、桌機皆適配
- ⚡ **純靜態** — 無後端、無 build step,clone 下來直接開

---

## 📂 內容結構 / 資料來源

本站內容整理自 **Blake Masters 的 CS183 課堂筆記 essay**(<https://blakemasters.tumblr.com/peter-thiels-cs183-startup>)。所有摘要皆為改寫後的學習筆記,僅保留少量短引言;完整論述請閱讀原文。

```
stanford-cs183-startup/
├── index.html            # 首頁:課程總覽 + 19 課大綱
├── class-1.html … class-19.html   # 每堂課一頁
├── glossary.html         # 術語表
├── flashcards.html       # 字卡
├── quiz.html             # 總測驗
├── assets/
│   ├── styles.css        # 樣式(深淺色 design tokens)
│   ├── shell.js          # 共用 chrome(app bar / 導覽 / footer)
│   └── app.js            # 各頁版型引擎與互動
└── data/
    └── data.js           # 全站資料(雙語)
```

> ⚠️ **非官方**:本網站為個人整理之非官方學習資源。課程觀點屬 Peter Thiel,原文著作權屬 Blake Masters;如有錯誤或出入,請以原文為準。「當年 vs. 現在」段落之現況資訊整理自公開報導,並附來源連結。

---

## 🛠 本機使用

```bash
# 1. clone 專案
git clone https://github.com/tingwei161803/stanford-cs183-startup.git
cd stanford-cs183-startup

# 2a. 最簡單:直接開啟 index.html
open index.html

# 2b. 或啟動本機伺服器(建議,跨頁連結/深連結才正常)
uv run python -m http.server 4173
# 然後瀏覽 http://localhost:4173
```

> 本專案為純靜態網站,不需安裝任何依賴。若要跑本機伺服器,一律使用 `uv`。

---

## 📝 聲明 / License

- 本站為非官方整理,內容著作權歸原始來源(Blake Masters / Peter Thiel)所有。
- 程式碼以 MIT 授權釋出。
- 本站使用 Google Analytics 4(property:CS183 Startup Notes - GA4)蒐集匿名流量數據,僅用於瞭解瀏覽狀況。
- 如為權利人且希望調整或移除內容,請開 issue 聯絡。
