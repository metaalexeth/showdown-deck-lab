# Showdown Deck Lab (unofficial)

Unofficial, fan-made, static web app for Showdown players: card browser, deck builder with legality checks, composition and draw-odds analysis, share codes, PNG export. Not affiliated with Showdown. Local only; no backend, no trackers, no external requests, no accounts.

## Run

- Open `index.html` directly (works from file://), or
- `python -m http.server 8000` in this folder, then http://localhost:8000

## Tests

```
node tests/test.js
```

14 tests: catalog sanity, legality rules, share-code round trip and rejection of bad codes, hypergeometric known values (no dependencies, Node 18+).

## Data source and refresh

`data/cards.json` (and `data/cards.js`, the same data as a script so file:// works) are built by `tools/build_cards.py` from the local catalog copy a local copy of the showdowned.vercel.app/cards catalog. Details in `data/SOURCE.md`. Refresh: replace the source copy, run `python tools/build_cards.py [path]`, run the tests. Old share codes carry the first 4 hex chars of the catalog revision; a mismatch on import shows a warning (codes index into the name-sorted catalog, so new/renamed cards can shift them).

## Share code

`1.<rev4>.<base64url>`: version, catalog revision prefix, one byte per card copy (index in the name-sorted catalog), sorted, so the same deck always gives the same code. It is kept in the URL hash after every change. Decks and the current working deck are saved in this browser's localStorage.

## Assumptions (labelled in the UI)

1. Deck rules (30 cards, at most 2 classes, 2 copies of a Common, 1 of a Rare) come from the catalog's own `fields` text as copied by Showdowned from the game client; there is no official rules page. Treat as unconfirmed.
2. Draw odds: 4-card opening hand and a 2-card draw at the start of the first stage are operator observations from play (2026-10-27), not an official source. Later-stage draws default to 0 and are editable. The 5-card hand limit and random discard are not modelled. Odds assume a uniformly shuffled 30-card deck.
3. Cards have no cost field. The "curve" is stage mix plus pot value (chips added to the pot). Effects are free text; keyword counts come from the catalog's keyword list.
4. "Dead-card risk" flags use the catalog's stage field only.
5. Card text changes with game updates; this copy is from 2026-10-23 (revision f324269bc9d2).

## Not done / next

- Simulator: needs a rules engine for hold'em plus about 120 free-text effects and a play policy; not started and not promised.
- Counters layer (hand-tagged threats and answers), catalog-revision check against a newer file, official ToS review before any public release.
- Screenshots in `screenshots/` (Chrome headless, 390px via iframe, desktop 1440).
