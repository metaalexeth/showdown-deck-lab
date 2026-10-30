(function () {
  "use strict";
  var DATA = window.CARDS_DATA, DL = window.DL, CARDS = DATA.cards, REV = DATA.catalogRevision;
  var BY = DL.indexById(CARDS);
  var CLASS_COLORS = { Bureaucrat: "#6d8fb5", Cheater: "#b57ad1", Gambler: "#d9b24a", Inventor: "#4fb3a9", Protector: "#7aa86a", Rebel: "#d8323a" };
  var STAGE_ORDER = ["PreFlop", "Flop", "River", "Any"];
  var LS_CUR = "deckLab.v1.current", LS_SAVED = "deckLab.v1.saved";
  var deck = {}, deckName = "";

  function $(id) { return document.getElementById(id); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function uniq(a) { var o = {}; a.forEach(function (x) { o[x] = 1; }); return Object.keys(o); }
  function pct(p) { return (p * 100).toFixed(1) + "%"; }
  function msg(t, bad) { var m = $("msg"); m.textContent = t; m.style.color = bad ? "var(--warn)" : ""; }

  // ---------- storage (every failure is shown, never swallowed) ----------
  function lsGet(k, fallback) {
    try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; }
    catch (e) { msg("Local storage unavailable or corrupt (" + e.message + "); saving is off.", true); return fallback; }
  }
  function lsSet(k, v) {
    try { localStorage.setItem(k, JSON.stringify(v)); return true; }
    catch (e) { msg("Could not save locally: " + e.message, true); return false; }
  }

  // ---------- filters ----------
  function fillSelect(id, vals) { var s = $(id); vals.forEach(function (v) { var o = document.createElement("option"); o.value = v; o.textContent = v; s.appendChild(o); }); }
  fillSelect("fClass", uniq(CARDS.map(function (c) { return c["class"]; })).sort());
  fillSelect("fRarity", ["Common", "Rare"]);
  fillSelect("fStage", STAGE_ORDER);
  fillSelect("fKw", uniq([].concat.apply([], CARDS.map(function (c) { return c.keywords; }))).sort());

  function potOk(c, f) {
    if (!f) return true;
    if (f === "neg") return c.pot < 0; if (f === "0") return c.pot === 0;
    if (f === "low") return c.pot >= 1 && c.pot <= 3; return c.pot >= 4;
  }
  function filtered() {
    var q = $("q").value.trim().toLowerCase(), cl = $("fClass").value, ra = $("fRarity").value, st = $("fStage").value, kw = $("fKw").value, po = $("fPot").value;
    var out = CARDS.filter(function (c) {
      return (!cl || c["class"] === cl) && (!ra || c.rarity === ra) && (!st || c.stage === st) && (!kw || c.keywords.indexOf(kw) >= 0) && potOk(c, po) &&
        (!q || (c.name + " " + c.text + " " + c.note).toLowerCase().indexOf(q) >= 0);
    });
    var s = $("fSort").value;
    out.sort(function (a, b) {
      if (s === "class") return a["class"].localeCompare(b["class"]) || a.name.localeCompare(b.name);
      if (s === "pot") return b.pot - a.pot || a.name.localeCompare(b.name);
      if (s === "stage") return STAGE_ORDER.indexOf(a.stage) - STAGE_ORDER.indexOf(b.stage) || a.name.localeCompare(b.name);
      return a.name.localeCompare(b.name);
    });
    return out;
  }

  function cardHtml(c) {
    var n = deck[c.id] || 0, why = DL.canAdd(deck, c);
    return '<article class="card ' + c.rarity.toLowerCase() + '" style="--c:' + CLASS_COLORS[c["class"]] + '" data-id="' + c.id + '">' +
      '<h3 data-detail="' + c.id + '"><span>' + esc(c.name) + '</span><span class="pot">pot ' + (c.pot > 0 ? "+" : "") + c.pot + '</span></h3>' +
      '<div class="meta">' + esc(c["class"]) + ' · ' + c.rarity + ' · ' + c.stage + ' · max ' + c.copies + '</div>' +
      '<p>' + esc(c.text) + '</p>' +
      (c.keywords.length ? '<div>' + c.keywords.map(function (k) { return '<span class="tag">' + esc(k) + '</span>'; }).join("") + '</div>' : "") +
      '<div class="ctl"><button data-rm="' + c.id + '" aria-label="Remove ' + esc(c.name) + '"' + (n ? "" : " disabled") + '>-</button><span class="n">' + n + '</span>' +
      '<button data-add="' + c.id + '" aria-label="Add ' + esc(c.name) + '"' + (why ? " disabled" : "") + '>+</button>' + (why && n < c.copies ? '<span class="muted">' + why + '</span>' : "") + '</div></article>';
  }
  function renderGrid() {
    var list = filtered();
    $("resultCount").textContent = list.length + " of " + CARDS.length + " cards";
    $("grid").innerHTML = list.length ? list.map(cardHtml).join("") : '<p class="muted">No cards match these filters.</p>';
  }

  function showDetail(id) {
    var c = BY[id]; if (!c) return;
    var gl = DATA.glossary.filter(function (g) { return c.keywords.indexOf(g.term) >= 0; });
    $("detailBody").innerHTML = '<h2 style="color:' + CLASS_COLORS[c["class"]] + '">' + esc(c.name) + '</h2>' +
      '<p class="meta">' + esc(c["class"]) + ' · ' + c.rarity + ' · stage ' + c.stage + ' · pot ' + c.pot + ' · max ' + c.copies + ' per deck</p><p>' + esc(c.text) + '</p>' +
      (c.note ? '<p class="note">Game note: ' + esc(c.note) + '</p>' : "") +
      gl.map(function (g) { return '<p class="note"><b>' + esc(g.term) + ':</b> ' + esc(g.meaning) + '</p>'; }).join("") +
      '<p class="note">In deck: ' + (deck[c.id] || 0) + ' of ' + c.copies + '</p>';
    var d = $("detail");
    if (d.showModal) d.showModal(); else d.setAttribute("open", "");
  }

  // ---------- deck ops ----------
  function add(id) { var c = BY[id]; if (c && !DL.canAdd(deck, c)) { deck[id] = (deck[id] || 0) + 1; changed(); } }
  function rm(id) { if (deck[id]) { deck[id]--; if (!deck[id]) delete deck[id]; changed(); } }

  function sortedDeckCards() {
    return Object.keys(deck).map(function (id) { return BY[id]; }).filter(Boolean).sort(function (a, b) {
      return STAGE_ORDER.indexOf(a.stage) - STAGE_ORDER.indexOf(b.stage) || a["class"].localeCompare(b["class"]) || a.name.localeCompare(b.name);
    });
  }

  function renderDeck() {
    var res = DL.checkLegality(deck, CARDS), total = res.total;
    $("deckCount").textContent = total + " / " + DL.DECK_SIZE + " cards · " + (res.classes.join(" + ") || "no class yet");
    $("tabCount").textContent = total + "/" + DL.DECK_SIZE;
    $("meterFill").style.width = Math.min(100, total / DL.DECK_SIZE * 100) + "%";
    $("legality").innerHTML = res.legal ? '<li class="ok">Legal deck (by the catalog rules above)</li>'
      : res.issues.map(function (i) { return '<li class="bad">' + esc(i.msg) + '</li>'; }).join("");
    var html = "";
    STAGE_ORDER.forEach(function (st) {
      var cs = sortedDeckCards().filter(function (c) { return c.stage === st; });
      if (!cs.length) return;
      html += '<div class="grp">' + st + ' (' + cs.reduce(function (a, c) { return a + deck[c.id]; }, 0) + ')</div>';
      cs.forEach(function (c) {
        html += '<div class="dl"><b>' + deck[c.id] + '×</b><span class="nm" data-detail="' + c.id + '" style="border-left:3px solid ' + CLASS_COLORS[c["class"]] + ';padding-left:6px">' + esc(c.name) +
          ' <small>' + esc(c["class"]) + ' · ' + c.rarity[0] + ' · pot ' + c.pot + '</small></span>' +
          '<button data-rm="' + c.id + '" aria-label="Remove one ' + esc(c.name) + '">-</button><button data-add="' + c.id + '"' + (DL.canAdd(deck, c) ? " disabled" : "") + ' aria-label="Add one ' + esc(c.name) + '">+</button></div>';
      });
    });
    $("deckList").innerHTML = html || '<p class="muted">Empty. Add cards from the Cards panel.</p>';
    $("code").value = DL.encodeDeck(deck, CARDS, REV);
  }

  // ---------- analysis ----------
  function countBy(fn) { var o = {}; Object.keys(deck).forEach(function (id) { var c = BY[id]; if (!c) return; [].concat(fn(c)).forEach(function (k) { o[k] = (o[k] || 0) + deck[id]; }); }); return o; }
  function bars(title, o, order, total) {
    var keys = order || Object.keys(o).sort(function (a, b) { return o[b] - o[a]; });
    var max = Math.max.apply(null, keys.map(function (k) { return o[k] || 0; }).concat([1]));
    return '<div class="grp">' + title + '</div><div class="bars">' + keys.map(function (k) {
      var v = o[k] || 0; return '<span>' + esc(k) + '</span><span class="b" style="width:' + (v / max * 100) + '%"></span><span>' + v + '</span>';
    }).join("") + '</div>';
  }
  function renderAnalysis() {
    var total = DL.deckSize(deck), box = $("analysis");
    if (!total) { box.innerHTML = '<span class="muted">Add cards to see the breakdown.</span>'; return; }
    var cards = []; Object.keys(deck).forEach(function (id) { for (var i = 0; i < deck[id]; i++) cards.push(BY[id]); });
    var potSum = cards.reduce(function (a, c) { return a + c.pot; }, 0);
    var potB = countBy(function (c) { return c.pot < 0 ? "negative" : c.pot === 0 ? "0" : c.pot <= 3 ? "1 to 3" : c.pot <= 7 ? "4 to 7" : "8 or more"; });
    var h = '<p>Average pot value per card: <b>' + (potSum / total).toFixed(2) + '</b> (sum ' + potSum + '). Cards have no cost field; the pot value is the closest thing to a curve.</p>';
    h += bars("Stage", countBy(function (c) { return c.stage; }), STAGE_ORDER);
    h += bars("Pot value", potB, ["negative", "0", "1 to 3", "4 to 7", "8 or more"]);
    h += bars("Class", countBy(function (c) { return c["class"]; }));
    h += bars("Rarity", countBy(function (c) { return c.rarity; }), ["Common", "Rare"]);
    var kw = countBy(function (c) { return c.keywords.length ? c.keywords : []; });
    if (Object.keys(kw).length) h += bars("Keywords (a card can have several)", kw);
    var riv = cards.filter(function (c) { return c.stage === "River"; }).length, pre = cards.filter(function (c) { return c.stage === "PreFlop"; }).length;
    h += '<p class="note">Dead-card risk: ' + riv + ' River-only and ' + pre + ' PreFlop-only cards. Stage-locked cards in hand cannot be played outside their stage (by the catalog\'s stage field); a PreFlop card drawn after the PreFlop is a dead draw.</p>';
    box.innerHTML = h;
  }

  // ---------- draw odds ----------
  var TARGETS = []; // {label, K}
  function buildTargets() {
    var cur = $("oTarget").value, sel = $("oTarget"), t = [];
    sel.innerHTML = "";
    function group(label, items) { var g = document.createElement("optgroup"); g.label = label; items.forEach(function (it) { var o = document.createElement("option"); o.value = it.v; o.textContent = it.l; g.appendChild(o); }); if (items.length) sel.appendChild(g); }
    var inDeck = sortedDeckCards();
    group("A single card in the deck", inDeck.map(function (c) { return { v: "card:" + c.id, l: c.name + " (" + deck[c.id] + ")" }; }));
    var cl = countBy(function (c) { return c["class"]; }), st = countBy(function (c) { return c.stage; }), kw = countBy(function (c) { return c.keywords; }), ra = countBy(function (c) { return c.rarity; });
    group("Any card of a class", Object.keys(cl).map(function (k) { return { v: "class:" + k, l: k + " (" + cl[k] + ")" }; }));
    group("Any card of a stage", Object.keys(st).map(function (k) { return { v: "stage:" + k, l: k + " (" + st[k] + ")" }; }));
    group("Any card with a keyword", Object.keys(kw).sort().map(function (k) { return { v: "kw:" + k, l: k + " (" + kw[k] + ")" }; }));
    group("Any card of a rarity", Object.keys(ra).map(function (k) { return { v: "rarity:" + k, l: k + " (" + ra[k] + ")" }; }));
    if (cur && sel.querySelector('option[value="' + cur.replace(/"/g, "") + '"]')) sel.value = cur;
  }
  function targetK(val) {
    if (!val) return 0; var p = val.split(":"), kind = p[0], key = p.slice(1).join(":"), k = 0;
    Object.keys(deck).forEach(function (id) {
      var c = BY[id]; if (!c) return;
      if ((kind === "card" && c.id === key) || (kind === "class" && c["class"] === key) || (kind === "stage" && c.stage === key) ||
        (kind === "kw" && c.keywords.indexOf(key) >= 0) || (kind === "rarity" && c.rarity === key)) k += deck[id];
    });
    return k;
  }
  function numIn(id, lo, hi) { var v = parseInt($(id).value, 10); if (isNaN(v)) v = lo; return Math.max(lo, Math.min(hi, v)); }
  function renderOdds() {
    var out = $("odds"), N = DL.deckSize(deck);
    if (!N) { out.innerHTML = '<p class="muted">Add cards to the deck first.</p>'; return; }
    var open = numIn("oOpen", 0, 30), first = numIn("oFirst", 0, 10), later = numIn("oLater", 0, 10), need = numIn("oAtLeast", 1, 5);
    var K = targetK($("oTarget").value);
    var seen = [["Opening hand", open], ["After first-stage draw (PreFlop)", open + first], ["Flop (assumed)", open + first + later], ["River (assumed)", open + first + 2 * later]];
    var warn = N !== DL.DECK_SIZE ? '<p class="note">Deck has ' + N + ' cards, not 30; odds use the current size.</p>' : "";
    var h = warn + '<p>Target copies in deck: <b>' + K + '</b> of ' + N + '</p><table><tr><th>Point</th><th class="num">Cards seen</th><th class="num">P(≥' + need + ')</th></tr>';
    seen.forEach(function (r) { var n = Math.min(r[1], N); h += '<tr><td>' + r[0] + '</td><td class="num">' + n + '</td><td class="num"><b>' + pct(DL.atLeast(N, K, n, need)) + '</b></td></tr>'; });
    h += '</table><table><tr><th>Cards seen</th>';
    var ns = [3, 5, 7, 9, 12, 15]; ns.forEach(function (n) { h += '<th class="num">' + n + '</th>'; }); h += '</tr><tr><td>P(≥' + need + ')</td>';
    ns.forEach(function (n) { h += '<td class="num">' + pct(DL.atLeast(N, K, Math.min(n, N), need)) + '</td>'; }); h += '</tr></table>';
    out.innerHTML = h;
  }

  // ---------- PNG export ----------
  function drawPng() {
    var cv = $("cv"), g = cv.getContext("2d"), W = cv.width, H = cv.height;
    g.fillStyle = "#0e0f12"; g.fillRect(0, 0, W, H);
    g.fillStyle = "#d8323a"; g.fillRect(0, 0, 10, H);
    var name = (deckName || "Untitled deck"), res = DL.checkLegality(deck, CARDS), cs = sortedDeckCards();
    g.fillStyle = "#e9eaee"; g.font = "bold 40px system-ui, Segoe UI, sans-serif"; g.fillText(name.slice(0, 40), 40, 62);
    g.fillStyle = "#9a9ea9"; g.font = "22px system-ui, Segoe UI, sans-serif";
    var potSum = 0; cs.forEach(function (c) { potSum += c.pot * deck[c.id]; });
    g.fillText(res.total + " cards · " + (res.classes.join(" + ") || "no class") + " · " + (res.legal ? "legal" : "not legal") + " · avg pot " + (res.total ? (potSum / res.total).toFixed(2) : "0"), 40, 98);
    var rows = cs.length, perCol = Math.max(1, Math.ceil(rows / 2)), colW = 560, rowH = 36, y0 = 150;
    cs.forEach(function (c, i) {
      var col = Math.floor(i / perCol), row = i % perCol, x = 40 + col * (colW + 20), y = y0 + row * rowH;
      g.fillStyle = "#17181d"; g.fillRect(x, y - 26, colW, rowH - 4);
      g.fillStyle = CLASS_COLORS[c["class"]]; g.fillRect(x, y - 26, 6, rowH - 4);
      g.fillStyle = "#e9eaee"; g.font = "bold 22px system-ui, Segoe UI, sans-serif"; g.fillText(deck[c.id] + "×", x + 16, y);
      g.font = (c.rarity === "Rare" ? "bold " : "") + "22px system-ui, Segoe UI, sans-serif"; g.fillText(c.name, x + 64, y);
      g.fillStyle = "#9a9ea9"; g.font = "18px system-ui, Segoe UI, sans-serif"; g.textAlign = "right";
      g.fillText(c.stage + " · pot " + c.pot + " · " + c.rarity[0], x + colW - 10, y); g.textAlign = "left";
    });
    if (!rows) { g.fillStyle = "#9a9ea9"; g.font = "24px system-ui, sans-serif"; g.fillText("Empty deck", 40, y0); }
    g.fillStyle = "#9a9ea9"; g.font = "16px system-ui, Segoe UI, sans-serif";
    g.fillText("Code: " + DL.encodeDeck(deck, CARDS, REV), 40, H - 46);
    g.fillText("Showdown Deck Lab · unofficial fan tool, not affiliated with Showdown · card data via showdowned.vercel.app/cards", 40, H - 20);
  }

  // ---------- persistence + hash ----------
  function changed() {
    lsSet(LS_CUR, { name: deckName, deck: deck });
    try { history.replaceState(null, "", "#" + DL.encodeDeck(deck, CARDS, REV)); } catch (e) { /* file:// in some browsers; the code box still works */ }
    renderAll();
  }
  function renderAll() { renderGrid(); renderDeck(); renderAnalysis(); buildTargets(); renderOdds(); drawPng(); }

  function importCode(text) {
    var m = String(text).match(/#?(\d+\.[0-9a-f]{4}\.[A-Za-z0-9_-]*)\s*$/);
    try {
      var r = DL.decodeDeck(m ? m[1] : text, CARDS, REV);
      deck = r.deck; changed();
      msg(r.revisionMatch ? "Imported." : "Imported, but this code was made with a different catalog revision: card identities may be wrong. Check the list.", !r.revisionMatch);
      return true;
    } catch (e) { msg("Import failed: " + e.message, true); return false; }
  }
  function refreshSaved() {
    var s = lsGet(LS_SAVED, {}), sel = $("savedList"); sel.innerHTML = '<option value="">Saved decks</option>';
    Object.keys(s).sort().forEach(function (k) { var o = document.createElement("option"); o.value = k; o.textContent = k + " (" + DL.deckSize(s[k]) + ")"; sel.appendChild(o); });
  }
  function copy(text, ok) {
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(function () { msg(ok); }, function (e) { msg("Copy failed: " + e.message + ". Select the box and copy by hand.", true); });
    else msg("Clipboard not available here. Select the box and copy by hand.", true);
  }

  // ---------- events ----------
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-add],[data-rm],[data-detail],[data-tab]"); if (!t) return;
    if (t.dataset.add) add(t.dataset.add); else if (t.dataset.rm) rm(t.dataset.rm);
    else if (t.dataset.detail) showDetail(t.dataset.detail);
    else if (t.dataset.tab) {
      ["browse", "deck"].forEach(function (id) { $(id).classList.toggle("on", id === t.dataset.tab); });
      document.querySelectorAll(".tabs button").forEach(function (b) { b.classList.toggle("on", b === t); });
    }
  });
  ["q", "fClass", "fRarity", "fStage", "fKw", "fPot", "fSort"].forEach(function (id) { $(id).addEventListener("input", renderGrid); });
  $("fReset").addEventListener("click", function () { ["q", "fClass", "fRarity", "fStage", "fKw", "fPot"].forEach(function (id) { $(id).value = ""; }); $("fSort").value = "name"; renderGrid(); });
  ["oOpen", "oFirst", "oLater", "oAtLeast", "oTarget"].forEach(function (id) { $(id).addEventListener("input", renderOdds); });
  $("deckName").addEventListener("input", function () { deckName = this.value; lsSet(LS_CUR, { name: deckName, deck: deck }); drawPng(); });
  $("clearDeck").addEventListener("click", function () { deck = {}; changed(); msg("Deck cleared."); });
  $("saveDeck").addEventListener("click", function () {
    var n = (deckName || "").trim(); if (!n) { msg("Give the deck a name first.", true); return; }
    var s = lsGet(LS_SAVED, {}); s[n] = JSON.parse(JSON.stringify(deck));
    if (lsSet(LS_SAVED, s)) { msg('Saved "' + n + '" in this browser.'); refreshSaved(); }
  });
  $("loadSaved").addEventListener("click", function () {
    var k = $("savedList").value, s = lsGet(LS_SAVED, {}); if (!k || !s[k]) { msg("Pick a saved deck.", true); return; }
    deck = s[k]; deckName = k; $("deckName").value = k; changed(); msg('Loaded "' + k + '".');
  });
  $("delSaved").addEventListener("click", function () {
    var k = $("savedList").value, s = lsGet(LS_SAVED, {}); if (!k || !s[k]) { msg("Pick a saved deck.", true); return; }
    delete s[k]; if (lsSet(LS_SAVED, s)) { refreshSaved(); msg('Deleted "' + k + '".'); }
  });
  $("copyCode").addEventListener("click", function () { copy($("code").value, "Code copied."); });
  $("copyLink").addEventListener("click", function () { copy(location.href.split("#")[0] + "#" + $("code").value, "Link copied."); });
  $("importBtn").addEventListener("click", function () { importCode($("importBox").value); });
  $("exportPng").addEventListener("click", function () {
    drawPng();
    $("cv").toBlob(function (b) {
      if (!b) { msg("PNG export failed (canvas returned nothing).", true); return; }
      var a = document.createElement("a"); a.href = URL.createObjectURL(b); a.download = ((deckName || "deck").replace(/[^\w-]+/g, "_") || "deck") + ".png";
      document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000); msg("PNG downloaded.");
    }, "image/png");
  });
  window.addEventListener("hashchange", function () { var h = location.hash.slice(1); if (h && h !== DL.encodeDeck(deck, CARDS, REV)) importCode(h); });

  // ---------- init ----------
  $("rev").textContent = REV.slice(0, 12);
  var cur = lsGet(LS_CUR, null);
  if (cur && cur.deck) { deck = cur.deck; deckName = cur.name || ""; $("deckName").value = deckName; }
  Object.keys(deck).forEach(function (id) { if (!BY[id]) delete deck[id]; });
  refreshSaved();
  if (/[?&]tab=deck/.test(location.search)) { var tb = document.querySelector('[data-tab="deck"]'); if (tb) tb.click(); }
  if (location.hash.length > 1) importCode(location.hash.slice(1)); else renderAll();
})();
