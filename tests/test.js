// Run: node tests/test.js   (from the deck-lab folder; no dependencies)
const assert = require("assert"), fs = require("fs"), path = require("path");
const DL = require("../js/lib.js");
const data = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/cards.json"), "utf8"));
const cards = data.cards, rev = data.catalogRevision;
let n = 0; const t = (name, f) => { f(); n++; console.log("ok  " + name); };
const near = (a, b, e = 1e-9) => assert(Math.abs(a - b) < e, a + " != " + b);

// A legal deck: 2 classes, Commons x2 / Rares x1, exactly 30.
function legalDeck() {
  const d = {}; let total = 0;
  for (const cls of ["Bureaucrat", "Cheater"])
    for (const c of cards.filter(c => c["class"] === cls)) { if (total < 30) { d[c.id] = c.copies; total += c.copies; } }
  while (total > 30) { const id = Object.keys(d).pop(); d[id]--; total--; if (!d[id]) delete d[id]; }
  return d;
}

t("catalog sanity: 120 cards, 72C/48R, 6 classes", () => {
  assert.strictEqual(cards.length, 120);
  assert.strictEqual(cards.filter(c => c.rarity === "Common").length, 72);
  assert.strictEqual(cards.filter(c => c.rarity === "Rare").length, 48);
  assert.strictEqual(new Set(cards.map(c => c["class"])).size, 6);
});
t("legal deck passes", () => { const r = DL.checkLegality(legalDeck(), cards); assert.deepStrictEqual(r.issues, []); assert(r.legal); });
t("29 cards fails size", () => {
  const d = legalDeck(); const id = Object.keys(d)[0]; d[id]--; if (!d[id]) delete d[id];
  assert(DL.checkLegality(d, cards).issues.some(i => i.rule === "size"));
});
t("3 copies of a Common fails copies", () => {
  const c = cards.find(c => c.rarity === "Common");
  assert(DL.checkLegality({ [c.id]: 3 }, cards).issues.some(i => i.rule === "copies"));
});
t("2 copies of a Rare fails copies", () => {
  const c = cards.find(c => c.rarity === "Rare");
  assert(DL.checkLegality({ [c.id]: 2 }, cards).issues.some(i => i.rule === "copies"));
});
t("3 classes fails classes", () => {
  const d = {}; ["Bureaucrat", "Cheater", "Gambler"].forEach(k => { d[cards.find(c => c["class"] === k).id] = 1; });
  assert(DL.checkLegality(d, cards).issues.some(i => i.rule === "classes"));
});
t("unknown id reported", () => assert(DL.checkLegality({ nope: 1 }, cards).issues.some(i => i.rule === "unknown")));
t("canAdd respects copies and size", () => {
  const r = cards.find(c => c.rarity === "Rare");
  assert.strictEqual(DL.canAdd({ [r.id]: 1 }, r), "max copies");
  assert.strictEqual(DL.canAdd({}, r), "");
  const full = legalDeck(), other = cards.find(x => !full[x.id]);
  assert.strictEqual(DL.canAdd(full, other), "deck full");
});
t("share code round trip (legal deck), deterministic", () => {
  const d = legalDeck(), code = DL.encodeDeck(d, cards, rev), r = DL.decodeDeck(code, cards, rev);
  assert.deepStrictEqual(r.deck, d); assert(r.revisionMatch);
  assert.strictEqual(code, DL.encodeDeck(r.deck, cards, rev));
  assert(/^1\.[0-9a-f]{4}\.[A-Za-z0-9_-]+$/.test(code));
  console.log("    code: " + code + " (" + code.length + " chars)");
});
t("share code round trip: empty, small, every card", () => {
  for (const d of [{}, { [cards[0].id]: 1 }, { [cards[5].id]: 2, [cards[119].id]: 1 }])
    assert.deepStrictEqual(DL.decodeDeck(DL.encodeDeck(d, cards, rev), cards, rev).deck, d);
  cards.forEach(c => { const d = { [c.id]: c.copies }; assert.deepStrictEqual(DL.decodeDeck(DL.encodeDeck(d, cards, rev), cards, rev).deck, d); });
});
t("share code is insertion-order independent", () => {
  const a = { [cards[3].id]: 2, [cards[9].id]: 1 }, b = { [cards[9].id]: 1, [cards[3].id]: 2 };
  assert.strictEqual(DL.encodeDeck(a, cards, rev), DL.encodeDeck(b, cards, rev));
});
t("decode rejects garbage and flags revision mismatch", () => {
  assert.throws(() => DL.decodeDeck("hello", cards, rev));
  assert.throws(() => DL.decodeDeck("9.abcd.AAAA", cards, rev));
  assert.throws(() => DL.decodeDeck("1.abcd.!!!", cards, rev));
  assert.throws(() => DL.decodeDeck("1.abcd.__", cards, rev)); // byte 255 out of range
  assert.strictEqual(DL.decodeDeck("1.0000.AA", cards, rev).revisionMatch, false);
  assert.strictEqual(DL.decodeDeck("#" + DL.encodeDeck({}, cards, rev), cards, rev).revisionMatch, true);
});
t("hypergeometric known values", () => {
  near(DL.hyperPmf(52, 4, 5, 0), 0.65884, 1e-5);          // no ace in 5 of 52
  near(DL.atLeast(52, 4, 5, 1), 0.34116, 1e-5);
  near(DL.atLeast(30, 1, 6, 1), 6 / 30, 1e-12);           // one copy, 6 cards seen of 30
  near(DL.atLeast(30, 2, 6, 1), 1 - (28 / 30) * (27 / 29) * (26 / 28) * (25 / 27) * (24 / 26) * (23 / 25), 1e-12);
  near(DL.atLeast(30, 2, 6, 2), 15 / 435, 1e-12);         // C(6,2)/C(30,2)
});
t("hypergeometric edges", () => {
  assert.strictEqual(DL.atLeast(30, 0, 6, 1), 0); assert.strictEqual(DL.atLeast(30, 5, 0, 1), 0);
  near(DL.atLeast(30, 5, 30, 5), 1); near(DL.atLeast(30, 29, 6, 1), 1);
  let s = 0; for (let k = 0; k <= 6; k++) s += DL.hyperPmf(30, 7, 6, k); near(s, 1);
});
console.log("\n" + n + " tests passed");
