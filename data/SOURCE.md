# Card data source

- Source file: a local copy of the showdowned.vercel.app/cards catalog (saved 2026-10-23).
- Origin: the unofficial 120-card catalog at https://showdowned.vercel.app/cards ("Not run by Showdown"), which
  states it reads the game client's catalog. Copied by hand/browser; this app never fetches it at runtime.
- Catalog revision (from the file): `f324269bc9d24e369c3336b12380016bf56fa4930c971e364a3c71dbc112157a`, first seen 2026-10-18.
- Converted 2026-10-30 by `tools/build_cards.py` into `cards.json` (canonical) and `cards.js` (same data as a script, so
  `index.html` works from file://). Cards are sorted by name; the share code indexes into this order.
- Card text changes with game updates. To refresh: replace the source copy, run `python tools/build_cards.py <path>`.
- No official card art is held; the app renders text cards only.
