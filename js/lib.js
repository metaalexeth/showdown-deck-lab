/* Pure logic: legality, share code, hypergeometric. Works in browser (window.DL) and node (module.exports). */
(function (root) {
  "use strict";
  var DECK_SIZE = 30, MAX_CLASSES = 2, CODE_VERSION = 1;
  var ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

  // deck: { cardId: count }. cards: array from cards.json.
  function indexById(cards) { var m = {}; cards.forEach(function (c) { m[c.id] = c; }); return m; }

  function deckSize(deck) { var n = 0; for (var k in deck) n += deck[k]; return n; }

  function checkLegality(deck, cards) {
    var by = indexById(cards), issues = [], classes = {}, total = 0;
    Object.keys(deck).forEach(function (id) {
      var n = deck[id], c = by[id];
      if (!c) { issues.push({ rule: "unknown", msg: "Unknown card: " + id }); return; }
      total += n;
      if (n > c.copies) issues.push({ rule: "copies", msg: c.name + ": " + n + " copies, max " + c.copies + " (" + c.rarity + ")" });
      if (n > 0) classes[c["class"]] = true;
    });
    var cl = Object.keys(classes).sort();
    if (cl.length > MAX_CLASSES) issues.push({ rule: "classes", msg: cl.length + " classes (" + cl.join(", ") + "), max " + MAX_CLASSES });
    if (total !== DECK_SIZE) issues.push({ rule: "size", msg: "Deck has " + total + " cards, needs exactly " + DECK_SIZE });
    return { legal: issues.length === 0, issues: issues, total: total, classes: cl };
  }

  // Reason a card cannot be added right now, or "" if it can.
  function canAdd(deck, card) {
    if ((deck[card.id] || 0) >= card.copies) return "max copies";
    if (deckSize(deck) >= DECK_SIZE) return "deck full";
    return "";
  }

  // Share code: "1.<rev4>.<base64url of sorted card indices>"; one byte per copy, index into the name-sorted catalog.
  function b64enc(bytes) {
    var s = "", i;
    for (i = 0; i < bytes.length; i += 3) {
      var b0 = bytes[i], b1 = bytes[i + 1], b2 = bytes[i + 2];
      s += ALPHA[b0 >> 2] + ALPHA[((b0 & 3) << 4) | ((b1 || 0) >> 4)];
      if (i + 1 < bytes.length) s += ALPHA[((b1 & 15) << 2) | ((b2 || 0) >> 6)];
      if (i + 2 < bytes.length) s += ALPHA[b2 & 63];
    }
    return s;
  }
  function b64dec(str) {
    var out = [], buf = 0, bits = 0, i;
    for (i = 0; i < str.length; i++) {
      var v = ALPHA.indexOf(str[i]);
      if (v < 0) throw new Error("bad character in code");
      buf = (buf << 6) | v; bits += 6;
      if (bits >= 8) { bits -= 8; out.push((buf >> bits) & 255); buf &= (1 << bits) - 1; }
    }
    return out;
  }

  function encodeDeck(deck, cards, revision) {
    var idx = [];
    cards.forEach(function (c, i) { for (var k = 0; k < (deck[c.id] || 0); k++) idx.push(i); });
    return CODE_VERSION + "." + revision.slice(0, 4) + "." + b64enc(idx);
  }

  // returns { deck, revisionMatch } or throws Error with a readable message
  function decodeDeck(code, cards, revision) {
    var p = String(code || "").trim().replace(/^#/, "").split(".");
    if (p.length !== 3) throw new Error("Not a Deck Lab code");
    if (p[0] !== String(CODE_VERSION)) throw new Error("Unsupported code version " + p[0]);
    var bytes = b64dec(p[2]), deck = {};
    bytes.forEach(function (i) {
      if (i >= cards.length) throw new Error("Card index out of range");
      deck[cards[i].id] = (deck[cards[i].id] || 0) + 1;
    });
    return { deck: deck, revisionMatch: p[1] === revision.slice(0, 4) };
  }

  // Hypergeometric: drawing n from N containing K successes.
  function logC(n, k) {
    if (k < 0 || k > n) return -Infinity;
    var r = 0; k = Math.min(k, n - k);
    for (var i = 1; i <= k; i++) r += Math.log((n - k + i) / i);
    return r;
  }
  function hyperPmf(N, K, n, k) {
    if (k < Math.max(0, n - (N - K)) || k > Math.min(K, n)) return 0;
    return Math.exp(logC(K, k) + logC(N - K, n - k) - logC(N, n));
  }
  function atLeast(N, K, n, k) { // P(X >= k)
    var p = 0, hi = Math.min(K, n);
    for (var i = k; i <= hi; i++) p += hyperPmf(N, K, n, i);
    return Math.min(1, Math.max(0, p));
  }

  var api = { DECK_SIZE: DECK_SIZE, MAX_CLASSES: MAX_CLASSES, deckSize: deckSize, checkLegality: checkLegality, canAdd: canAdd,
    encodeDeck: encodeDeck, decodeDeck: decodeDeck, hyperPmf: hyperPmf, atLeast: atLeast, indexById: indexById };
  if (typeof module !== "undefined" && module.exports) module.exports = api; else root.DL = api;
})(typeof window !== "undefined" ? window : this);
