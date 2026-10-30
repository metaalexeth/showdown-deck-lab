#!/usr/bin/env python3
"""Convert the local catalog copy into data/cards.json (+ data/cards.js for file:// use).

Usage: python tools/build_cards.py [path/to/source/cards.json]
Stdlib only. Fails loudly (exit 1) on any structural problem.
"""
import json, sys, hashlib
from pathlib import Path

HERE = Path(__file__).resolve().parent.parent
DEFAULT_SRC = Path(__file__).resolve().parent / "cards_source.json"
STAGES = {"Any", "PreFlop", "Flop", "River"}
RARITY_COPIES = {"Common": 2, "Rare": 1}


def slug(name):
    return "".join(c if c.isalnum() else "-" for c in name.lower()).strip("-")


def main():
    src = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_SRC
    raw = json.loads(src.read_text(encoding="utf-8"))
    cards = raw["cards"]
    names = [c["name"] for c in cards]
    if len(set(names)) != len(names):
        sys.exit("duplicate card names")
    out = []
    # Stable order: by name (the share code indexes into this order).
    for c in sorted(cards, key=lambda c: c["name"].lower()):
        if c["stage"] not in STAGES:
            sys.exit(f"bad stage {c['name']}: {c['stage']}")
        if RARITY_COPIES.get(c["rarity"]) != c["copies"]:
            sys.exit(f"copies/rarity mismatch {c['name']}")
        out.append({
            "id": slug(c["name"]), "name": c["name"], "class": c["class"],
            "rarity": c["rarity"], "copies": c["copies"], "stage": c["stage"],
            "pot": int(c["pot"]), "text": c["text"], "note": c.get("note", ""),
            "keywords": list(c.get("keywords", [])),
        })
    if len({c["id"] for c in out}) != len(out):
        sys.exit("slug collision")
    data = {
        "catalogRevision": raw["revision"],
        "catalogFirstSeen": raw.get("firstSeen"),
        "source": raw["source"],
        "fields": raw["fields"],
        "glossary": raw["glossary"],
        "cards": out,
    }
    text = json.dumps(data, ensure_ascii=False, indent=1)
    (HERE / "data" / "cards.json").write_text(text + "\n", encoding="utf-8", newline="\n")
    (HERE / "data" / "cards.js").write_text("window.CARDS_DATA = " + text + ";\n", encoding="utf-8", newline="\n")
    print(f"wrote {len(out)} cards, revision {raw['revision'][:12]}")


if __name__ == "__main__":
    main()
