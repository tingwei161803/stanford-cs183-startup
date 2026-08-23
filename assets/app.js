/* =========================================================================
   multipage · app.js   (vanilla, no build, no chart lib)

   The PAGE-LEVEL LAYOUT ENGINE. shell.js has already injected the shared
   chrome and published window.LDW. This script:

     1. reads the current page from <body data-page="..."> (via LDW),
     2. picks a renderer from RENDERERS by that page's `layout`,
     3. paints it into <main id="page"> and wires its interactions,
     4. registers an onLang() callback so a language switch repaints the body.

   RENDERERS is the LAYOUT REGISTRY — one entry per supported page layout:
     hub | gallery | article | dashboard | timeline | table |
     bento | kanban | faq | comparison | leaderboard | scrolly | map
   To add a layout, add one renderer (returns the inner HTML for #page) and,
   if it needs interaction, one matching WIRE entry. Nothing else changes.
   ========================================================================= */
(function () {
  "use strict";

  function boot() {
    // Wait until shell.js has injected the chrome (app bar, nav, footer, #dialog)
    // and published LDW. End-of-body scripts run while readyState === "loading",
    // so the shell defers its injection to DOMContentLoaded — we must wait for it.
    if (!window.LDW || !window.LDW.ready) {
      document.addEventListener("ldw:shell-ready", boot, { once: true });
      return;
    }
    var L = window.LDW;

    var t = L.t, esc = L.escapeHtml, r = L.r;
    var pageEl = document.getElementById("page");
    var teardowns = [];   // observers / listeners to disconnect before each repaint

    /* ---------- shared bits ---------- */
    function head(p) {
      var sub = t(p.subtitle)
        ? '<p class="page-head__sub">' + esc(t(p.subtitle)) + "</p>" : "";
      return '<header class="page-head"><h1>' + esc(t(p.title)) + "</h1>" + sub + "</header>";
    }

    function tArr(obj) {
      if (!obj) return [];
      if (Array.isArray(obj)) return obj;
      var a = obj[L.state.lang] || obj.en || obj.zh;
      return Array.isArray(a) ? a : [];
    }

    /* UI strings for the lesson / glossary / flashcards / quiz layouts */
    function LS() {
      return {
        en: { toc: "On this page", objectives: "Learning objectives", summary: "In one sentence",
              quiz: "Self-check quiz", quizHint: "Pick an answer to reveal the explanation.",
              correct: "Correct.", wrong: "Not quite.", score: "Score",
              factcheck: "Then vs. now (2026)", then: "2012", now: "2026", source: "Source",
              original: "Read the original essay", prevClass: "Previous class", nextClass: "Next class",
              searchTerms: "Search terms…", noTerms: "No matching terms.", terms: "terms",
              flip: "Flip", shuffle: "Shuffle", front: "Concept", back: "Answer",
              deckHint: "Click the card (or press Space) to flip it; use the arrow keys to move between cards.",
              syllabus: "The 19 classes", tools: "Study tools", sources: "Sources" },
        zh: { toc: "本頁目錄", objectives: "學習目標", summary: "一句話摘要",
              quiz: "隨堂測驗", quizHint: "點選一個答案,即可揭曉解析。",
              correct: "正確。", wrong: "答錯了。", score: "得分",
              factcheck: "當年 vs. 現在(2026)", then: "2012", now: "2026", source: "來源",
              original: "閱讀原文", prevClass: "上一課", nextClass: "下一課",
              searchTerms: "搜尋術語…", noTerms: "沒有符合的術語。", terms: "個術語",
              flip: "翻面", shuffle: "洗牌", front: "概念", back: "解答",
              deckHint: "點擊卡片(或按空白鍵)翻面;用左右方向鍵切換卡片。",
              syllabus: "19 堂課", tools: "學習工具", sources: "資料來源" }
      }[L.state.lang];
    }

    var classLabel = L.classLabel;   // "Class 7" / "第 7 課" — shared with the chrome

    /* lesson content blocks: p | h3 | ul | quote | code | table | cards */
    function lessonBlock(b) {
      if (b.type === "h3") return "<h3>" + esc(t(b.text)) + "</h3>";
      if (b.type === "ul") return "<ul>" + tArr(b.items).map(function (it) {
        return "<li>" + esc(t(it)) + "</li>";
      }).join("") + "</ul>";
      if (b.type === "quote") return "<blockquote>" + esc(t(b.text)) + "</blockquote>";
      if (b.type === "code") return "<pre><code>" + esc(t(b.text)) + "</code></pre>";
      if (b.type === "table") {
        var headCells = tArr(b.head).map(function (h) {
          return '<th scope="col">' + esc(t(h)) + "</th>";
        }).join("");
        var rows = (b.rows || []).map(function (row) {
          return "<tr>" + tArr(row).map(function (c) { return "<td>" + esc(t(c)) + "</td>"; }).join("") + "</tr>";
        }).join("");
        return '<div class="table-wrap table-wrap--prose"><table class="data-table">' +
          (headCells ? "<thead><tr>" + headCells + "</tr></thead>" : "") +
          "<tbody>" + rows + "</tbody></table></div>";
      }
      if (b.type === "cards") {
        return '<ol class="strat-cards">' + (b.items || []).map(function (it, i) {
          return '<li class="strat-card"><span class="strat-card__num" aria-hidden="true">' + (i + 1) + "</span>" +
            '<div><p class="strat-card__title">' + esc(t(it.title)) + "</p>" +
            '<p class="strat-card__text">' + esc(t(it.body)) + "</p></div></li>";
        }).join("") + "</ol>";
      }
      return "<p>" + esc(t(b.text)) + "</p>";
    }

    /* ---- shared quiz engine (lesson pages + the exam page) ----
       Answers are session-only, keyed "<prefix>:<index>" so they survive
       language-switch repaints but reset on reload (deliberately ephemeral). */
    var quizAnswers = {};

    function quizHtml(items, keyPrefix) {
      var S = LS();
      return (items || []).map(function (item, qi) {
        var key = keyPrefix + ":" + qi;
        var chosen = quizAnswers[key];
        var answered = typeof chosen === "number";
        var opts = (item.options || []).map(function (opt, oi) {
          var cls = "quiz__opt", mark = "";
          if (answered) {
            if (oi === item.answer) { cls += " is-correct"; mark = "check_circle"; }
            else if (oi === chosen) { cls += " is-wrong"; mark = "cancel"; }
            else cls += " is-dim";
          }
          return '<li><button type="button" class="' + cls + '"' + (answered ? " disabled" : "") +
            ' data-qkey="' + esc(key) + '" data-o="' + oi + '">' +
            "<span>" + esc(t(opt)) + "</span>" +
            (mark ? '<span class="material-symbols-rounded quiz__mark" aria-hidden="true">' + mark + "</span>" : "") +
            "</button></li>";
        }).join("");
        var fb = "";
        if (answered) {
          var right = chosen === item.answer;
          fb = '<p class="quiz__feedback ' + (right ? "is-correct" : "is-wrong") + '" role="status"><strong>' +
            esc(right ? S.correct : S.wrong) + "</strong> " + esc(t(item.explain)) + "</p>";
        }
        return '<article class="quiz-card" data-item><p class="quiz-card__q"><span class="quiz-card__n">Q' +
          (qi + 1) + "</span> " + esc(t(item.q)) + '</p><ul class="quiz__opts">' + opts + "</ul>" + fb + "</article>";
      }).join("");
    }

    function quizScoreText(groups) {
      var S = LS(), answered = 0, correct = 0, total = 0;
      groups.forEach(function (g) {
        (g.items || []).forEach(function (item, qi) {
          total++;
          var c = quizAnswers[g.keyPrefix + ":" + qi];
          if (typeof c === "number") { answered++; if (c === item.answer) correct++; }
        });
      });
      if (!answered) return "";
      return S.score + ": " + correct + " / " + total;
    }

    function wireQuiz(container, repaint) {
      function onClick(e) {
        var btn = e.target.closest ? e.target.closest(".quiz__opt") : null;
        if (!btn || btn.disabled) return;
        var key = btn.getAttribute("data-qkey");
        var oi = parseInt(btn.getAttribute("data-o"), 10);
        if (!key || isNaN(oi) || typeof quizAnswers[key] === "number") return;
        quizAnswers[key] = oi;
        repaint();
      }
      container.addEventListener("click", onClick);
      teardowns.push(function () { container.removeEventListener("click", onClick); });
    }

    /* flashcard deck state — survives language switches, resets on reload */
    var deckOrder = null, deckI = 0, deckFlipped = false;

    function barChart(series, accent) {
      var W = 520, H = 240, padL = 16, padR = 16, padT = 16, padB = 44;
      var plotW = W - padL - padR, plotH = H - padT - padB;
      var max = Math.max.apply(null, series.map(function (d) { return d.value; }).concat([1]));
      var n = series.length || 1, gap = 14, bw = (plotW - gap * (n - 1)) / n, baseY = padT + plotH;
      var bars = series.map(function (d, i) {
        var x = padL + i * (bw + gap), h = (d.value / max) * plotH, y = baseY - h;
        var label = esc(t(d.label)), val = esc(String(d.value));
        return '<rect class="bar-rect" x="' + r(x) + '" y="' + r(y) + '" width="' + r(bw) +
          '" height="' + r(h) + '" rx="5"' + (accent ? ' style="fill:' + esc(accent) + '"' : "") +
          '><title>' + label + ": " + val + "</title></rect>" +
          '<text class="bar-value" x="' + r(x + bw / 2) + '" y="' + r(y - 6) + '" text-anchor="middle">' + val + "</text>" +
          '<text class="bar-label" x="' + r(x + bw / 2) + '" y="' + r(baseY + 18) + '" text-anchor="middle">' + label + "</text>";
      }).join("");
      return '<svg viewBox="0 0 ' + W + " " + H + '" role="img" preserveAspectRatio="xMidYMid meet" aria-label="bar chart">' +
        '<line class="axis-line" x1="' + padL + '" y1="' + r(baseY) + '" x2="' + r(W - padR) + '" y2="' + r(baseY) + '" />' +
        bars + "</svg>";
    }

    function lineChart(points) {
      var W = 520, H = 240, padL = 28, padR = 16, padT = 16, padB = 32;
      var plotW = W - padL - padR, plotH = H - padT - padB;
      var ys = points.map(function (d) { return d.y; });
      var max = Math.max.apply(null, ys.concat([1])), min = Math.min.apply(null, ys.concat([0]));
      var span = (max - min) || 1, n = points.length || 1;
      var xy = points.map(function (d, i) {
        var x = padL + (n === 1 ? plotW / 2 : (i / (n - 1)) * plotW);
        var y = padT + plotH - ((d.y - min) / span) * plotH;
        return { x: x, y: y, d: d };
      });
      var path = xy.map(function (pt, i) { return (i ? "L" : "M") + r(pt.x) + " " + r(pt.y); }).join(" ");
      var area = path + " L" + r(xy[xy.length - 1].x) + " " + r(padT + plotH) + " L" + r(xy[0].x) + " " + r(padT + plotH) + " Z";
      var dots = xy.map(function (pt) {
        return '<circle class="line-dot" cx="' + r(pt.x) + '" cy="' + r(pt.y) + '" r="3"><title>' +
          esc(String(pt.d.x)) + ": " + esc(String(pt.d.y)) + "</title></circle>";
      }).join("");
      var labels = xy.map(function (pt) {
        return '<text class="bar-label" x="' + r(pt.x) + '" y="' + r(padT + plotH + 20) + '" text-anchor="middle">' + esc(String(pt.d.x)) + "</text>";
      }).join("");
      return '<svg viewBox="0 0 ' + W + " " + H + '" role="img" preserveAspectRatio="xMidYMid meet" aria-label="line chart">' +
        '<path class="line-area" d="' + area + '" />' +
        '<path class="line-path" d="' + path + '" fill="none" />' + dots + labels + "</svg>";
    }

    /* =====================================================================
       LAYOUT REGISTRY
       ===================================================================== */
    var RENDERERS = {

      /* ---- hub: intro + hero stats + editorial syllabus list + study tools ---- */
      hub: function (p) {
        var S = LS();
        var stats = (p.stats || []).map(function (s) {
          return '<div class="hero__stat" data-item>' +
            '<b class="hero__stat-value" data-count="' + esc(String(s.value)) + '">0</b>' +
            '<span class="hero__stat-label">' + esc(t(s.label)) + "</span></div>";
        }).join("");
        var about = (p.about || []).map(function (para) {
          return '<p class="hub-about__p">' + esc(t(para)) + "</p>";
        }).join("");
        var sources = (p.sourceLinks || []).map(function (lnk) {
          return '<a class="hub-src" href="' + esc(lnk.url) + '" target="_blank" rel="noopener">' +
            esc(t(lnk.label)) + ' <span class="material-symbols-rounded" aria-hidden="true">open_in_new</span></a>';
        }).join("");
        var rows = L.pages.filter(function (q) { return q.layout === "lesson"; }).map(function (q) {
          return '<a class="syl-row" data-item href="' + esc(L.pageHref(q)) + '">' +
            '<span class="syl-num" aria-hidden="true">' + esc(String(q.classNo)) + "</span>" +
            '<span class="syl-main"><b class="syl-title">' + esc(t(q.title)) + "</b>" +
            '<span class="syl-sub">' + esc(t(q.subtitle)) + "</span></span>" +
            '<span class="material-symbols-rounded syl-arrow" aria-hidden="true">arrow_forward</span></a>';
        }).join("");
        var tools = L.pages.filter(function (q) {
          return q.slug !== "home" && q.layout !== "lesson";
        }).map(function (q) {
          return '<a class="card card--nav" data-item href="' + esc(L.pageHref(q)) + '" ' +
              'aria-label="' + esc(t(q.title)) + '">' +
            '<span class="material-symbols-rounded card__icon" aria-hidden="true">' + esc(q.icon || "label") + "</span>" +
            '<h3 class="card__title">' + esc(t(q.title)) + "</h3>" +
            '<p class="card__summary">' + esc(t(q.subtitle)) + "</p></a>";
        }).join("");
        return head(p) +
          (about ? '<div class="hub-about">' + about +
            (sources ? '<p class="hub-about__srcs"><span class="kicker kicker--inline">' + esc(S.sources) + "</span>" + sources + "</p>" : "") +
            "</div>" : "") +
          (stats ? '<div class="hero__stats">' + stats + "</div>" : "") +
          '<h2 class="hub-h2">' + esc(S.syllabus) + "</h2>" +
          '<div class="syllabus">' + rows + "</div>" +
          (tools ? '<h2 class="hub-h2">' + esc(S.tools) + "</h2>" +
            '<div class="grid grid--tools">' + tools + "</div>" : "");
      },

      /* ---- gallery: search + chips + card grid + dialog ---- */
      gallery: function (p) {
        var cats = (p.categories || []).map(function (c) {
          return '<button class="chip" type="button" data-cat="' + esc(c.key) + '">' +
            esc(c[L.state.lang] || c.en) + "</button>";
        }).join("");
        var allLabel = L.state.lang === "en" ? "All" : "全部";
        return head(p) +
          '<div class="toolbar">' +
            '<input id="search" class="search" type="search" autocomplete="off" ' +
              'placeholder="' + (L.state.lang === "en" ? "Search…" : "搜尋…") + '" ' +
              'aria-label="' + (L.state.lang === "en" ? "Search" : "搜尋") + '" />' +
            (cats ? '<div class="chips"><button class="chip chip--active" type="button" data-cat="">' + esc(allLabel) + "</button>" + cats + "</div>" : "") +
          "</div>" +
          '<p class="result-count" id="resultCount" aria-live="polite"></p>' +
          '<div class="grid" id="grid"></div>';
      },

      /* ---- article: sticky TOC + prose + reading progress ---- */
      article: function (p) {
        var toc = (p.sections || []).map(function (s) {
          return '<a class="toc-link" href="#' + esc(s.id) + '" data-toc="' + esc(s.id) + '">' + esc(t(s.heading)) + "</a>";
        }).join("");
        var body = (p.sections || []).map(function (s) {
          var blocks = (s.blocks || []).map(function (b) {
            if (b.type === "h3") return "<h3>" + esc(t(b.text)) + "</h3>";
            if (b.type === "quote") return "<blockquote>" + esc(t(b.text)) + "</blockquote>";
            if (b.type === "code") return "<pre><code>" + esc(t(b.text)) + "</code></pre>";
            if (b.type === "ul") {
              var arr = (b.items && (b.items[L.state.lang] || b.items.en || b.items.zh)) || [];
              return "<ul>" + arr.map(function (li) { return "<li>" + esc(li) + "</li>"; }).join("") + "</ul>";
            }
            return "<p>" + esc(t(b.text)) + "</p>";
          }).join("");
          return '<section class="article-section" id="' + esc(s.id) + '" data-item ' +
            'aria-labelledby="' + esc(s.id) + '-h"><h2 id="' + esc(s.id) + '-h">' + esc(t(s.heading)) + "</h2>" + blocks + "</section>";
        }).join("");
        return '<div class="reading-progress" id="readingProgress" aria-hidden="true"></div>' +
          head(p) +
          '<div class="article-layout">' +
            '<nav class="toc" aria-label="Contents"><div class="toc__inner">' + toc + "</div></nav>" +
            '<div class="article-body prose">' + body + "</div>" +
          "</div>";
      },

      /* ---- dashboard: stat cards + bar + line + table ---- */
      dashboard: function (p) {
        var stats = (p.stats || []).map(function (s) {
          var d = s.delta;
          var deltaHtml = (d === 0 || d) ?
            '<span class="stat-delta stat-delta--' + (d >= 0 ? "up" : "down") + '">' +
              (d >= 0 ? "▲ " : "▼ ") + esc(String(Math.abs(d))) + "%</span>" : "";
          return '<div class="stat-card" data-item>' +
            '<span class="stat-label">' + esc(t(s.label)) + "</span>" +
            '<b class="stat-value">' + esc(String(s.value)) +
              (t(s.unit) ? ' <span class="stat-unit">' + esc(t(s.unit)) + "</span>" : "") + "</b>" +
            deltaHtml + "</div>";
        }).join("");
        var bars = p.bars ? '<figure class="panel" data-item><figcaption>' + esc(t(p.bars.title)) + "</figcaption>" +
          '<div class="chart-wrap">' + barChart(p.bars.series || []) + "</div></figure>" : "";
        var line = p.line ? '<figure class="panel" data-item><figcaption>' + esc(t(p.line.title)) + "</figcaption>" +
          '<div class="chart-wrap">' + lineChart(p.line.points || []) + "</div></figure>" : "";
        var table = "";
        if (p.table) {
          var thead = (p.table.columns || []).map(function (c) { return "<th>" + esc(t(c.label)) + "</th>"; }).join("");
          var tbody = (p.table.rows || []).map(function (row) {
            return "<tr data-item>" + (p.table.columns || []).map(function (c) {
              var v = row[c.key];
              return "<td>" + esc(typeof v === "object" ? t(v) : String(v == null ? "" : v)) + "</td>";
            }).join("") + "</tr>";
          }).join("");
          table = '<div class="panel panel--wide" data-item><div class="table-wrap"><table class="data-table">' +
            "<thead><tr>" + thead + "</tr></thead><tbody>" + tbody + "</tbody></table></div></div>";
        }
        return head(p) +
          '<div class="stat-grid">' + stats + "</div>" +
          '<div class="panel-grid">' + bars + line + "</div>" + table;
      },

      /* ---- timeline: dated event cards down a rail ---- */
      timeline: function (p) {
        var items = (p.events || []).map(function (ev) {
          return '<li class="tl-item" data-item><div class="tl-dot" aria-hidden="true"></div>' +
            '<div class="tl-card"><span class="tl-date">' + esc(t(ev.date)) + "</span>" +
            '<h3 class="tl-title">' + esc(t(ev.title)) + "</h3>" +
            '<p class="tl-body">' + esc(t(ev.body)) + "</p></div></li>";
        }).join("");
        return head(p) + '<ol class="timeline">' + items + "</ol>";
      },

      /* ---- table: searchable + sortable ---- */
      table: function (p) {
        return head(p) +
          '<div class="toolbar">' +
            '<input id="search" class="search" type="search" autocomplete="off" ' +
              'placeholder="' + (L.state.lang === "en" ? "Search…" : "搜尋…") + '" ' +
              'aria-label="' + (L.state.lang === "en" ? "Search" : "搜尋") + '" />' +
            '<div class="chips" id="tableChips"></div>' +
          "</div>" +
          '<div class="table-wrap"><table class="data-table" id="dataTable"><thead></thead><tbody></tbody></table></div>';
      },

      /* ---- bento: asymmetric tile grid ---- */
      bento: function (p) {
        var tiles = (p.tiles || []).map(function (tile) {
          return '<article class="tile tile--' + esc(tile.size || "sm") + (tile.accent ? " tile--accent" : "") + '" data-item>' +
            (tile.icon ? '<span class="material-symbols-rounded tile__icon" aria-hidden="true">' + esc(tile.icon) + "</span>" : "") +
            (tile.value ? '<b class="tile__value">' + esc(tile.value) + "</b>" : "") +
            '<h3 class="tile__title">' + esc(t(tile.title)) + "</h3>" +
            (t(tile.body) ? '<p class="tile__body">' + esc(t(tile.body)) + "</p>" : "") + "</article>";
        }).join("");
        return head(p) + '<div class="bento">' + tiles + "</div>";
      },

      /* ---- kanban: cards grouped by status column ---- */
      kanban: function (p) {
        var cols = (p.columns || []).map(function (col) {
          var cards = (p.cards || []).filter(function (c) { return c.column === col.key; }).map(function (c) {
            var tags = (c.tags || []).map(function (g) { return '<span class="tag">' + esc(g) + "</span>"; }).join("");
            return '<article class="kb-card" data-item><h3 class="kb-card__title">' + esc(t(c.title)) + "</h3>" +
              (t(c.body) ? '<p class="kb-card__body">' + esc(t(c.body)) + "</p>" : "") +
              (tags ? '<div class="card__tags">' + tags + "</div>" : "") + "</article>";
          }).join("");
          var count = (p.cards || []).filter(function (c) { return c.column === col.key; }).length;
          return '<div class="kb-col"><div class="kb-col__head">' + esc(t(col.label)) +
            ' <span class="kb-col__count">' + count + "</span></div>" +
            '<div class="kb-col__body">' + cards + "</div></div>";
        }).join("");
        return head(p) + '<div class="kanban">' + cols + "</div>";
      },

      /* ---- faq: searchable accordion ---- */
      faq: function (p) {
        var items = (p.qa || []).map(function (row) {
          return '<details class="acc-item" data-item data-q="' + esc((t(row.q) + " " + t(row.a)).toLowerCase()) + '">' +
            '<summary class="acc-q"><span>' + esc(t(row.q)) + "</span>" +
            '<span class="material-symbols-rounded acc-chevron" aria-hidden="true">expand_more</span></summary>' +
            '<div class="acc-a">' + esc(t(row.a)) + "</div></details>";
        }).join("");
        return head(p) +
          '<div class="toolbar"><input id="search" class="search" type="search" autocomplete="off" ' +
            'placeholder="' + (L.state.lang === "en" ? "Search…" : "搜尋…") + '" ' +
            'aria-label="' + (L.state.lang === "en" ? "Search" : "搜尋") + '" /></div>' +
          '<div class="accordion" id="accordion">' + items + "</div>";
      },

      /* ---- comparison: plans (cols) x features (rows) ---- */
      comparison: function (p) {
        var plans = p.plans || [], feats = p.features || [];
        var thead = '<th scope="col"></th>' + plans.map(function (pl) {
          return '<th scope="col" class="' + (pl.highlight ? "cmp-col--hl" : "") + '">' +
            '<div class="cmp-plan">' + esc(t(pl.name)) + "</div>" +
            '<div class="cmp-price">' + esc(t(pl.price)) + "</div>" +
            (t(pl.note) ? '<div class="cmp-note">' + esc(t(pl.note)) + "</div>" : "") + "</th>";
        }).join("");
        var rows = feats.map(function (f) {
          var cells = plans.map(function (pl) {
            var v = f.values ? f.values[pl.key] : undefined;
            var cell;
            if (v === true) cell = '<span class="cmp-yes material-symbols-rounded" aria-label="yes">check</span>';
            else if (v === false || v == null) cell = '<span class="cmp-no" aria-label="no">—</span>';
            else cell = esc(t(v));
            return '<td class="' + (pl.highlight ? "cmp-col--hl" : "") + '">' + cell + "</td>";
          }).join("");
          return '<tr data-item><th scope="row" class="cmp-feat">' + esc(t(f.label)) + "</th>" + cells + "</tr>";
        }).join("");
        return head(p) + '<div class="table-wrap"><table class="cmp-table">' +
          "<thead><tr>" + thead + "</tr></thead><tbody>" + rows + "</tbody></table></div>";
      },

      /* ---- leaderboard: ranked list + tier grouping toggle ---- */
      leaderboard: function (p) {
        var listLabel = L.state.lang === "en" ? "List" : "排名";
        var tierLabel = L.state.lang === "en" ? "Tiers" : "階級";
        return head(p) +
          '<div class="seg" role="tablist">' +
            '<button class="seg__btn seg__btn--active" type="button" data-view="list">' + esc(listLabel) + "</button>" +
            '<button class="seg__btn" type="button" data-view="tier">' + esc(tierLabel) + "</button>" +
          "</div>" +
          '<div id="lbView"></div>';
      },

      /* ---- scrolly: sticky visual + stepped narrative ---- */
      scrolly: function (p) {
        var steps = (p.steps || []).map(function (s, i) {
          return '<div class="scrolly-step" data-item data-step="' + i + '"><p>' + esc(t(s.text)) + "</p></div>";
        }).join("");
        return head(p) +
          '<div class="scrolly">' +
            '<div class="scrolly-sticky"><div class="scrolly-visual" id="scrollyVisual"></div></div>' +
            '<div class="scrolly-steps">' + steps + "</div>" +
          "</div>";
      },

      /* ---- map: Leaflet map + list (needs Leaflet on the page) ---- */
      map: function (p) {
        return head(p) +
          '<div class="map-layout">' +
            '<div class="map-box" id="map" role="application" aria-label="Map"></div>' +
            '<ul class="map-list" id="mapList"></ul>' +
          "</div>";
      },

      /* ---- lesson: study-note page — objectives + sticky TOC + summary
              callouts + then-vs-now fact checks + self-check quiz + pager ---- */
      lesson: function (p) {
        var S = LS();
        var objectives = (p.objectives || []).map(function (o) {
          return '<li><span class="material-symbols-rounded" aria-hidden="true">check_circle</span>' +
            "<span>" + esc(t(o)) + "</span></li>";
        }).join("");
        var objCard = objectives
          ? '<aside class="objectives" data-item><h2 class="objectives__h">' + esc(S.objectives) +
            '</h2><ul class="objectives__list">' + objectives + "</ul></aside>"
          : "";
        var toc = (p.sections || []).map(function (s) {
          return '<a class="toc-link" href="#' + esc(s.id) + '" data-toc="' + esc(s.id) + '">' + esc(t(s.heading)) + "</a>";
        }).join("");
        if ((p.factcheck || []).length) toc += '<a class="toc-link" href="#now" data-toc="now">' + esc(S.factcheck) + "</a>";
        if ((p.quiz || []).length) toc += '<a class="toc-link" href="#quiz" data-toc="quiz">' + esc(S.quiz) + "</a>";
        var body = (p.sections || []).map(function (s) {
          var summary = t(s.summary)
            ? '<aside class="summary" role="note"><span class="summary__label">' + esc(S.summary) +
              '</span><p class="summary__text">' + esc(t(s.summary)) + "</p></aside>"
            : "";
          return '<section class="article-section" id="' + esc(s.id) + '" data-item aria-labelledby="' + esc(s.id) + '-h">' +
            '<h2 id="' + esc(s.id) + '-h">' + esc(t(s.heading)) + "</h2>" + summary +
            (s.blocks || []).map(lessonBlock).join("") + "</section>";
        }).join("");
        var facts = "";
        if ((p.factcheck || []).length) {
          facts = '<section class="article-section" id="now" data-item><h2>' + esc(S.factcheck) + "</h2>" +
            '<div class="facts">' + p.factcheck.map(function (f) {
              return '<div class="fact">' +
                '<p class="fact__then"><span class="fact__tag">' + esc(S.then) + "</span> " + esc(t(f.claim)) + "</p>" +
                '<p class="fact__now"><span class="fact__tag fact__tag--now">' + esc(S.now) + "</span> " + esc(t(f.now)) +
                (f.sourceUrl
                  ? ' <a class="fact__src" href="' + esc(f.sourceUrl) + '" target="_blank" rel="noopener">' +
                    esc(f.sourceTitle || S.source) + "</a>"
                  : "") +
                "</p></div>";
            }).join("") + "</div></section>";
        }
        var quiz = "";
        if ((p.quiz || []).length) {
          quiz = '<section class="article-section" id="quiz" data-item><h2>' + esc(S.quiz) + "</h2>" +
            '<p class="quiz-hint">' + esc(S.quizHint) + "</p>" +
            '<p class="quiz-score" id="quizScore" aria-live="polite"></p>' +
            '<div id="quizBox">' + quizHtml(p.quiz, p.slug) + "</div></section>";
        }
        var lessons = L.pages.filter(function (q) { return q.layout === "lesson"; });
        var i = lessons.indexOf(p);
        var prev = i > 0 ? lessons[i - 1] : null;
        var next = (i >= 0 && i < lessons.length - 1) ? lessons[i + 1] : null;
        var pager = '<nav class="pager">' +
          (prev
            ? '<a class="pager__link" href="' + esc(L.pageHref(prev)) + '"><span class="pager__dir">' + esc(S.prevClass) +
              "</span><b>" + esc(t(prev.title)) + "</b></a>"
            : "<span></span>") +
          (next
            ? '<a class="pager__link pager__link--next" href="' + esc(L.pageHref(next)) + '"><span class="pager__dir">' + esc(S.nextClass) +
              "</span><b>" + esc(t(next.title)) + "</b></a>"
            : "<span></span>") +
          "</nav>";
        var srcBtn = p.sourceUrl
          ? '<a class="btn-ink" href="' + esc(p.sourceUrl) + '" target="_blank" rel="noopener">' + esc(S.original) +
            ' <span class="material-symbols-rounded" aria-hidden="true">open_in_new</span></a>'
          : "";
        return '<div class="reading-progress" id="readingProgress" aria-hidden="true"></div>' +
          '<header class="page-head lesson-head"><p class="kicker">' + esc(classLabel(p.classNo)) + " · CS183</p>" +
          "<h1>" + esc(t(p.title)) + "</h1>" +
          '<p class="page-head__sub">' + esc(t(p.subtitle)) + "</p>" +
          (srcBtn ? '<div class="lesson-head__actions">' + srcBtn + "</div>" : "") +
          "</header>" +
          '<div class="article-layout">' +
            '<nav class="toc" aria-label="' + esc(S.toc) + '"><div class="toc__inner">' + toc + "</div></nav>" +
            '<div class="article-body prose">' + objCard + body + facts + quiz + pager + "</div>" +
          "</div>";
      },

      /* ---- glossary: searchable editorial term list across all classes ---- */
      glossary: function (p) {
        var S = LS();
        return head(p) +
          '<div class="toolbar"><input id="search" class="search" type="search" autocomplete="off" ' +
            'placeholder="' + esc(S.searchTerms) + '" aria-label="' + esc(S.searchTerms) + '" /></div>' +
          '<p class="result-count" id="resultCount" aria-live="polite"></p>' +
          '<dl class="glossary" id="glossaryList"></dl>' +
          '<p class="empty" id="glossaryEmpty" hidden>' + esc(S.noTerms) + "</p>";
      },

      /* ---- flashcards: one-card study deck (flip / prev / next / shuffle) ---- */
      flashcards: function (p) {
        var S = LS();
        return head(p) +
          '<p class="deck-hint">' + esc(S.deckHint) + "</p>" +
          '<div class="deck">' +
            '<div class="deck-stage" id="deckStage"></div>' +
            '<div class="deck-ctrls">' +
              '<button class="icon-btn deck-btn" id="deckPrev" type="button" aria-label="' + esc(S.prevClass) + '">' +
                '<span class="material-symbols-rounded">arrow_back</span></button>' +
              '<button class="btn-ink" id="deckFlip" type="button">' + esc(S.flip) + "</button>" +
              '<button class="icon-btn deck-btn" id="deckNext" type="button" aria-label="' + esc(S.nextClass) + '">' +
                '<span class="material-symbols-rounded">arrow_forward</span></button>' +
              '<button class="icon-btn deck-btn" id="deckShuffle" type="button" aria-label="' + esc(S.shuffle) + '" title="' + esc(S.shuffle) + '">' +
                '<span class="material-symbols-rounded">shuffle</span></button>' +
            "</div>" +
            '<p class="deck-count" id="deckCount" aria-live="polite"></p>' +
          "</div>";
      },

      /* ---- quiz: the whole-course exam, grouped by class ---- */
      quiz: function (p) {
        var S = LS();
        var groups = (p.groups || []).map(function (g) {
          return '<section class="quiz-group" data-item><h2 class="quiz-group__h">' +
            '<span class="kicker kicker--inline">' + esc(classLabel(g.classNo)) + "</span>" + esc(t(g.title)) + "</h2>" +
            quizHtml(g.items, "exam-" + g.slug) + "</section>";
        }).join("");
        return head(p) +
          '<p class="quiz-hint">' + esc(S.quizHint) + "</p>" +
          '<p class="quiz-score quiz-score--sticky" id="quizScore" aria-live="polite"></p>' +
          '<div id="examBox">' + groups + "</div>";
      }
    };

    /* =====================================================================
       WIRING (interactions) — keyed by layout, run after innerHTML is set
       ===================================================================== */
    var WIRE = {
      hub: function () { animateCounters(); },

      gallery: function (p) {
        var grid = document.getElementById("grid");
        var search = document.getElementById("search");
        var count = document.getElementById("resultCount");
        var chips = [].slice.call(pageEl.querySelectorAll(".chip"));
        var st = { q: "", cat: "" };

        function matches(item) {
          if (st.cat && item.category !== st.cat) return false;
          if (!st.q) return true;
          var hay = (t(item.title) + " " + t(item.summary) + " " + (item.tags || []).join(" ")).toLowerCase();
          return hay.indexOf(st.q) !== -1;
        }
        function paint() {
          var rows = (p.items || []).filter(matches);
          grid.innerHTML = rows.map(function (item) {
            var tags = (item.tags || []).map(function (g) { return '<span class="tag">' + esc(g) + "</span>"; }).join("");
            return '<article class="card" tabindex="0" role="button" data-item data-slug="' + esc(item.slug) + '" ' +
              'aria-label="' + esc(t(item.title)) + '">' +
              '<h3 class="card__title">' + esc(t(item.title)) + "</h3>" +
              '<p class="card__summary">' + esc(t(item.summary)) + "</p>" +
              (tags ? '<div class="card__tags">' + tags + "</div>" : "") + "</article>";
          }).join("");
          if (count) count.textContent = rows.length + (L.state.lang === "en" ? " result(s)" : " 筆結果");
          wireCards();
        }
        function wireCards() {
          [].forEach.call(grid.querySelectorAll(".card[data-slug]"), function (card) {
            var slug = card.dataset.slug;
            card.addEventListener("click", function () { openItem(slug); });
            card.addEventListener("keydown", function (e) {
              if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openItem(slug); }
            });
          });
        }
        function findItem(slug) {
          return (p.items || []).filter(function (it) { return it.slug === slug; })[0] || null;
        }
        function openItem(slug) {
          var item = findItem(slug); if (!item) return;
          var dlg = L.dialog(), body = document.getElementById("dialogBody");
          var tags = (item.tags || []).map(function (g) { return '<span class="tag">' + esc(g) + "</span>"; }).join("");
          body.innerHTML = '<h2 id="dialogTitle">' + esc(t(item.title)) + "</h2>" +
            (tags ? '<div class="card__tags">' + tags + "</div>" : "") +
            "<p>" + esc(t(item.overview) || t(item.summary)) + "</p>";
          if (!dlg.open) dlg.showModal();
          if (location.hash.slice(1) !== slug) history.replaceState(null, "", "#" + slug);
        }
        function syncHash() {
          var slug = location.hash.slice(1);
          if (slug && findItem(slug)) openItem(slug);
        }
        if (search) search.addEventListener("input", function () { st.q = this.value.trim().toLowerCase(); paint(); });
        chips.forEach(function (chip) {
          chip.addEventListener("click", function () {
            chips.forEach(function (c) { c.classList.remove("chip--active"); });
            chip.classList.add("chip--active");
            st.cat = chip.dataset.cat || "";
            paint();
          });
        });
        /* closing the dialog clears the #slug so the URL returns to clean state
           and a later deep link to the SAME slug fires hashchange again */
        var dlg = L.dialog();
        function onClose() {
          var slug = location.hash.slice(1);
          if (slug && findItem(slug)) history.replaceState(null, "", location.pathname + location.search);
        }
        dlg.addEventListener("close", onClose);
        var onHash = function () { syncHash(); };
        window.addEventListener("hashchange", onHash);
        teardowns.push(function () {
          window.removeEventListener("hashchange", onHash);
          dlg.removeEventListener("close", onClose);
        });
        paint();
        syncHash();
      },

      article: function () {
        var prog = document.getElementById("readingProgress");
        var links = [].slice.call(pageEl.querySelectorAll(".toc-link"));
        var secs = [].slice.call(pageEl.querySelectorAll(".article-section"));
        function onScroll() {
          var h = document.documentElement;
          var max = h.scrollHeight - h.clientHeight;
          if (prog) prog.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
        }
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        teardowns.push(function () { window.removeEventListener("scroll", onScroll); });
        if ("IntersectionObserver" in window) {
          var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
              if (!en.isIntersecting) return;
              links.forEach(function (a) {
                var on = a.dataset.toc === en.target.id;
                a.classList.toggle("toc-link--active", on);
              });
            });
          }, { rootMargin: "-30% 0px -60% 0px" });
          secs.forEach(function (s) { io.observe(s); });
          teardowns.push(function () { io.disconnect(); });
        }
      },

      dashboard: function () { /* static charts; nothing to wire */ },

      table: function (p) {
        var table = document.getElementById("dataTable");
        var thead = table.querySelector("thead"), tbody = table.querySelector("tbody");
        var search = document.getElementById("search");
        var chipsBox = document.getElementById("tableChips");
        var cols = p.columns || [];
        var st = { q: "", filter: "", sortKey: null, dir: 1 };
        var filterCol = cols.filter(function (c) { return c.filter; })[0];

        function cellText(row, c) { var v = row[c.key]; return typeof v === "object" ? t(v) : String(v == null ? "" : v); }
        function rowMatches(row) {
          if (filterCol && st.filter && cellText(row, filterCol) !== st.filter) return false;
          if (!st.q) return true;
          return cols.some(function (c) { return cellText(row, c).toLowerCase().indexOf(st.q) !== -1; });
        }
        function paintHead() {
          thead.innerHTML = "<tr>" + cols.map(function (c) {
            var arrow = st.sortKey === c.key ? (st.dir > 0 ? " ▲" : " ▼") : "";
            return '<th class="th-sort" data-key="' + esc(c.key) + '" role="button" tabindex="0" aria-label="Sort by ' +
              esc(t(c.label)) + '">' + esc(t(c.label)) + esc(arrow) + "</th>";
          }).join("") + "</tr>";
          [].forEach.call(thead.querySelectorAll(".th-sort"), function (th) {
            th.addEventListener("click", function () { sortBy(th.dataset.key); });
            th.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sortBy(th.dataset.key); } });
          });
        }
        function sortBy(key) {
          if (st.sortKey === key) st.dir = -st.dir; else { st.sortKey = key; st.dir = 1; }
          paint();
        }
        function paint() {
          paintHead();
          var col = cols.filter(function (c) { return c.key === st.sortKey; })[0];
          var rows = (p.rows || []).filter(rowMatches).slice();
          if (col) {
            rows.sort(function (a, b) {
              var va = a[col.key], vb = b[col.key];
              if (col.type === "num") return (Number(va) - Number(vb)) * st.dir;
              return String(typeof va === "object" ? t(va) : va).localeCompare(String(typeof vb === "object" ? t(vb) : vb)) * st.dir;
            });
          }
          tbody.innerHTML = rows.map(function (row) {
            return "<tr data-item>" + cols.map(function (c) {
              if (c.type === "link") {
                var u = row[c.key];
                return '<td><a class="row-link" href="' + esc(u) + '" target="_blank" rel="noopener">' + esc(u) + "</a></td>";
              }
              return "<td>" + esc(cellText(row, c)) + "</td>";
            }).join("") + "</tr>";
          }).join("");
        }
        if (filterCol) {
          var vals = [];
          (p.rows || []).forEach(function (row) { var v = cellText(row, filterCol); if (vals.indexOf(v) === -1) vals.push(v); });
          var allLabel = L.state.lang === "en" ? "All" : "全部";
          chipsBox.innerHTML = '<button class="chip chip--active" type="button" data-v="">' + esc(allLabel) + "</button>" +
            vals.map(function (v) { return '<button class="chip" type="button" data-v="' + esc(v) + '">' + esc(v) + "</button>"; }).join("");
          [].forEach.call(chipsBox.querySelectorAll(".chip"), function (chip) {
            chip.addEventListener("click", function () {
              [].forEach.call(chipsBox.querySelectorAll(".chip"), function (c) { c.classList.remove("chip--active"); });
              chip.classList.add("chip--active");
              st.filter = chip.dataset.v || "";
              paint();
            });
          });
        }
        if (search) search.addEventListener("input", function () { st.q = this.value.trim().toLowerCase(); paint(); });
        paint();
      },

      bento: function () { /* static */ },
      kanban: function () { /* static */ },

      faq: function () {
        var search = document.getElementById("search");
        var items = [].slice.call(pageEl.querySelectorAll(".acc-item"));
        if (search) search.addEventListener("input", function () {
          var q = this.value.trim().toLowerCase();
          items.forEach(function (it) {
            var hit = !q || (it.dataset.q || "").indexOf(q) !== -1;
            it.style.display = hit ? "" : "none";
          });
        });
      },

      comparison: function () { /* static */ },

      leaderboard: function (p) {
        var view = document.getElementById("lbView");
        var btns = [].slice.call(pageEl.querySelectorAll(".seg__btn"));
        var entries = (p.entries || []).slice().sort(function (a, b) { return b.score - a.score; });
        function row(e, rank) {
          return '<li class="lb-row" data-item>' +
            (rank ? '<span class="lb-rank">' + rank + "</span>" : "") +
            '<span class="lb-tier lb-tier--' + esc(e.tier || "") + '">' + esc(e.tier || "") + "</span>" +
            '<span class="lb-name">' + esc(t(e.name)) + "</span>" +
            '<span class="lb-meta">' + esc(t(e.meta)) + "</span>" +
            '<span class="lb-score">' + esc(String(e.score)) + "</span></li>";
        }
        function listView() {
          view.innerHTML = '<ol class="lb-list">' + entries.map(function (e, i) { return row(e, i + 1); }).join("") + "</ol>";
        }
        function tierView() {
          var tiers = [];
          entries.forEach(function (e) { if (tiers.indexOf(e.tier) === -1) tiers.push(e.tier); });
          view.innerHTML = tiers.map(function (tier) {
            var rows = entries.filter(function (e) { return e.tier === tier; }).map(function (e) { return row(e); }).join("");
            return '<div class="lb-tier-group"><div class="lb-tier-head lb-tier--' + esc(tier) + '">' + esc(tier) + "</div>" +
              '<ol class="lb-list">' + rows + "</ol></div>";
          }).join("");
        }
        btns.forEach(function (b) {
          b.addEventListener("click", function () {
            btns.forEach(function (x) { x.classList.remove("seg__btn--active"); });
            b.classList.add("seg__btn--active");
            if (b.dataset.view === "tier") tierView(); else listView();
          });
        });
        listView();
      },

      scrolly: function (p) {
        var visual = document.getElementById("scrollyVisual");
        var steps = [].slice.call(pageEl.querySelectorAll(".scrolly-step"));
        function paintVisual(i) {
          var s = (p.steps || [])[i]; if (!s) return;
          var v = s.visual || {};
          if (v.type === "bars") {
            visual.innerHTML = '<div class="chart-wrap">' + barChart(v.bars || [], v.color) + "</div>";
          } else {
            visual.innerHTML = '<div class="scrolly-stat" style="color:' + esc(v.color || "var(--primary)") + '">' +
              esc(t(v.value)) + "</div>";
          }
        }
        paintVisual(0);
        if ("IntersectionObserver" in window) {
          var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
              if (en.isIntersecting) {
                steps.forEach(function (s) { s.classList.remove("scrolly-step--active"); });
                en.target.classList.add("scrolly-step--active");
                paintVisual(parseInt(en.target.dataset.step, 10) || 0);
              }
            });
          }, { rootMargin: "-45% 0px -45% 0px" });
          steps.forEach(function (s) { io.observe(s); });
          teardowns.push(function () { io.disconnect(); });
        }
      },

      map: function (p) {
        var listEl = document.getElementById("mapList");
        var places = p.places || [];
        listEl.innerHTML = places.map(function (pl) {
          return '<li class="place" data-item data-slug="' + esc(pl.slug) + '" tabindex="0" role="button" ' +
            'aria-label="' + esc(t(pl.name)) + '"><b>' + esc(t(pl.name)) + "</b>" +
            '<span>' + esc(t(pl.body)) + "</span></li>";
        }).join("");

        if (typeof window.L === "undefined" || !window.L.map) {
          // Leaflet not loaded (offline / blocked): list-only graceful fallback.
          document.getElementById("map").innerHTML =
            '<div class="map-fallback">' + esc(L.state.lang === "en" ? "Map unavailable offline — see the list." : "離線時地圖無法載入 — 請看清單。") + "</div>";
          return;
        }
        var map = window.L.map("map", { scrollWheelZoom: false });
        window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap", maxZoom: 19
        }).addTo(map);
        var markers = {}, group = [];
        places.forEach(function (pl) {
          /* alt + title give Leaflet's marker <img role="button"> an accessible name */
          var m = window.L.marker([pl.lat, pl.lng], { alt: t(pl.name), title: t(pl.name), keyboard: true })
            .addTo(map).bindPopup("<b>" + esc(t(pl.name)) + "</b><br>" + esc(t(pl.body)));
          markers[pl.slug] = m; group.push([pl.lat, pl.lng]);
        });
        if (group.length) map.fitBounds(group, { padding: [30, 30] });
        [].forEach.call(listEl.querySelectorAll(".place"), function (li) {
          function go() { var m = markers[li.dataset.slug]; if (m) { map.panTo(m.getLatLng()); m.openPopup(); } }
          li.addEventListener("click", go);
          li.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } });
        });
        teardowns.push(function () { try { map.remove(); } catch (e) {} });
      },

      lesson: function (p) {
        WIRE.article();   // reading progress + sticky-TOC highlight (same DOM contract)
        var box = document.getElementById("quizBox");
        if (box) {
          var scoreEl = document.getElementById("quizScore");
          var paintScore = function () {
            if (scoreEl) scoreEl.textContent = quizScoreText([{ items: p.quiz, keyPrefix: p.slug }]);
          };
          wireQuiz(box, function () {
            box.innerHTML = quizHtml(p.quiz, p.slug);
            paintScore();
          });
          paintScore();
        }
      },

      glossary: function (p) {
        var listEl = document.getElementById("glossaryList");
        var emptyEl = document.getElementById("glossaryEmpty");
        var countEl = document.getElementById("resultCount");
        var search = document.getElementById("search");
        var S = LS();
        var st = { q: "" };
        function paint() {
          var rows = (p.terms || []).filter(function (g) {
            if (!st.q) return true;
            var hay = [t(g.term), t(g.def), g.term && g.term.en, g.term && g.term.zh]
              .filter(Boolean).join(" ").toLowerCase();
            return hay.indexOf(st.q) !== -1;
          });
          listEl.innerHTML = rows.map(function (g) {
            var ref = g.cls
              ? '<a class="gloss__cls" href="class-' + esc(String(g.cls)) + '.html">' + esc(classLabel(g.cls)) + "</a>"
              : "";
            return '<div class="gloss" data-item><dt class="gloss__term">' + esc(t(g.term)) + ref + "</dt>" +
              '<dd class="gloss__def">' + esc(t(g.def)) + "</dd></div>";
          }).join("");
          if (countEl) countEl.textContent = L.state.lang === "en"
            ? rows.length + " " + S.terms
            : rows.length + " " + S.terms;
          emptyEl.hidden = rows.length !== 0;
        }
        if (search) search.addEventListener("input", function () {
          st.q = this.value.trim().toLowerCase();
          paint();
        });
        paint();
      },

      flashcards: function (p) {
        var cards = p.cards || [];
        if (!deckOrder || deckOrder.length !== cards.length) {
          deckOrder = cards.map(function (_, i) { return i; });
          deckI = 0; deckFlipped = false;
        }
        var stage = document.getElementById("deckStage");
        var countEl = document.getElementById("deckCount");
        function paint() {
          if (!cards.length) { stage.innerHTML = '<p class="empty">—</p>'; return; }
          var S = LS();
          var c = cards[deckOrder[deckI]];
          stage.innerHTML =
            '<div class="flip-card' + (deckFlipped ? " is-flipped" : "") + '" id="flipCard" tabindex="0" role="button" ' +
              'data-item aria-label="' + esc(S.flip) + '">' +
              '<div class="flip-inner">' +
                '<div class="flip-face flip-front"><span class="flip-label">' + esc(S.front) + "</span>" +
                  "<p>" + esc(t(c.front)) + "</p>" +
                  '<span class="flip-cls">' + esc(classLabel(c.cls)) + "</span></div>" +
                '<div class="flip-face flip-back"><span class="flip-label">' + esc(S.back) + "</span>" +
                  "<p>" + esc(t(c.back)) + "</p>" +
                  '<span class="flip-cls">' + esc(classLabel(c.cls)) + "</span></div>" +
              "</div></div>";
          countEl.textContent = (deckI + 1) + " / " + cards.length;
          var fc = document.getElementById("flipCard");
          fc.addEventListener("click", flip);
          fc.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); }
          });
        }
        function flip() { deckFlipped = !deckFlipped; paint(); }
        function move(d) {
          if (!cards.length) return;
          deckI = (deckI + d + cards.length) % cards.length;
          deckFlipped = false;
          paint();
        }
        function shuffle() {
          for (var i = deckOrder.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = deckOrder[i]; deckOrder[i] = deckOrder[j]; deckOrder[j] = tmp;
          }
          deckI = 0; deckFlipped = false;
          paint();
        }
        document.getElementById("deckPrev").addEventListener("click", function () { move(-1); });
        document.getElementById("deckNext").addEventListener("click", function () { move(1); });
        document.getElementById("deckFlip").addEventListener("click", flip);
        document.getElementById("deckShuffle").addEventListener("click", shuffle);
        function onKey(e) {
          if (e.target && /^(input|textarea)$/i.test(e.target.tagName)) return;
          if (e.key === "ArrowLeft") move(-1);
          else if (e.key === "ArrowRight") move(1);
        }
        document.addEventListener("keydown", onKey);
        teardowns.push(function () { document.removeEventListener("keydown", onKey); });
        paint();
      },

      quiz: function (p) {
        var box = document.getElementById("examBox");
        var scoreEl = document.getElementById("quizScore");
        var S = LS();
        var groups = (p.groups || []).map(function (g) {
          return { items: g.items, keyPrefix: "exam-" + g.slug, ref: g };
        });
        function paintScore() {
          if (scoreEl) scoreEl.textContent = quizScoreText(groups);
        }
        function repaint() {
          box.innerHTML = (p.groups || []).map(function (g) {
            return '<section class="quiz-group" data-item><h2 class="quiz-group__h">' +
              '<span class="kicker kicker--inline">' + esc(classLabel(g.classNo)) + "</span>" + esc(t(g.title)) + "</h2>" +
              quizHtml(g.items, "exam-" + g.slug) + "</section>";
          }).join("");
          paintScore();
        }
        if (box) { wireQuiz(box, repaint); paintScore(); }
      }
    };

    /* ---- hero count-up (shared by hub) ---- */
    function animateCounters() {
      var els = [].slice.call(pageEl.querySelectorAll(".hero__stat-value[data-count]"));
      if (!els.length) return;
      function run(el) {
        var target = parseFloat(el.dataset.count) || 0, dur = 1000, start = null;
        function step(ts) {
          if (start === null) start = ts;
          var pr = Math.min(1, (ts - start) / dur), eased = 1 - Math.pow(1 - pr, 3);
          el.textContent = String(Math.round(target * eased));
          if (pr < 1) requestAnimationFrame(step); else el.textContent = String(target);
        }
        requestAnimationFrame(step);
      }
      if (!("IntersectionObserver" in window)) { els.forEach(run); return; }
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } });
      }, { threshold: 0.4 });
      els.forEach(function (el) { io.observe(el); });
      teardowns.push(function () { io.disconnect(); });
    }

    /* =====================================================================
       RENDER the current page; re-runnable on language switch
       ===================================================================== */
    function render() {
      teardowns.forEach(function (fn) { try { fn(); } catch (e) {} });
      teardowns = [];
      var p = L.currentPage();
      if (!p) { pageEl.innerHTML = '<p class="empty">No page data.</p>'; return; }
      var fn = RENDERERS[p.layout] || RENDERERS.gallery;
      pageEl.className = "page page--" + p.layout;
      pageEl.innerHTML = fn(p);
      var w = WIRE[p.layout];
      if (w) w(p);
      revealOnScroll();
    }

    /* gentle scroll-entry reveal; only opts elements in when IO is available,
       so nothing can ever be stuck invisible */
    function revealOnScroll() {
      if (!("IntersectionObserver" in window)) return;
      var els = [].slice.call(pageEl.querySelectorAll(".article-section, .syl-row, .quiz-group, .objectives"));
      if (!els.length) return;
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("reveal--in"); io.unobserve(en.target); }
        });
      }, { rootMargin: "0px 0px -8% 0px" });
      els.forEach(function (el) { el.classList.add("reveal"); io.observe(el); });
      teardowns.push(function () { io.disconnect(); });
    }

    L.onLang(render);
    render();
  }

  boot();
})();
