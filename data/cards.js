window.CARDS_DATA = {
 "catalogRevision": "f324269bc9d24e369c3336b12380016bf56fa4930c971e364a3c71dbc112157a",
 "catalogFirstSeen": "2026-10-18T21:00:00+00:00",
 "source": "Showdown’s own card catalog, as read by the game client. Unofficial; card text changes with game updates.",
 "fields": {
  "copies": "Copies a deck may hold: 2 of a Common card, 1 of a Rare. A deck is 30 cards from at most 2 classes.",
  "stage": "The stage it can be played in: Any, PreFlop, Flop or River.",
  "pot": "Chips playing it adds to the pot (negative: takes chips out).",
  "note": "The game’s own extra rules note, when it has one.",
  "keywords": "Keywords the card uses; their meanings are in the glossary."
 },
 "glossary": [
  {
   "term": "All-in",
   "meaning": "Effect that applies only if you have no other action cards in hand"
  },
  {
   "term": "Backfire",
   "meaning": "50% chance the effect occurs"
  },
  {
   "term": "Chips",
   "meaning": "The points players compete for, first to 100 wins the game"
  },
  {
   "term": "Combo",
   "meaning": "Effect only applies if you have used an action card this stage"
  },
  {
   "term": "Cycle",
   "meaning": "Discard a card and draw a replacement from top of the deck"
  },
  {
   "term": "Face card",
   "meaning": "King, Queen or Jack"
  },
  {
   "term": "Lock",
   "meaning": "A locked card can't be played, chosen for any effects, or change zones"
  },
  {
   "term": "No-Show",
   "meaning": "Effect that triggers whenever your opponent folds"
  },
  {
   "term": "Rank",
   "meaning": "A poker card's tier determining its strength"
  },
  {
   "term": "Tax",
   "meaning": "Effect only applies if opponent has 25 more chips than you"
  },
  {
   "term": "Unlock",
   "meaning": "Removes Lock status"
  },
  {
   "term": "Wild",
   "meaning": "A Wild card can represent a card of any rank and suit to create best possible combination"
  }
 ],
 "cards": [
  {
   "id": "ace-in-sleeve",
   "name": "Ace in Sleeve",
   "class": "Cheater",
   "rarity": "Common",
   "copies": 2,
   "stage": "River",
   "pot": 2,
   "text": "Replace your higher pocket card with A♥.",
   "note": "",
   "keywords": []
  },
  {
   "id": "all-in",
   "name": "All-In",
   "class": "Rebel",
   "rarity": "Common",
   "copies": 2,
   "stage": "PreFlop",
   "pot": 4,
   "text": "Get a random action card with All-in when you have no action cards. (only once)",
   "note": "",
   "keywords": [
    "All-in"
   ]
  },
  {
   "id": "ante-up",
   "name": "Ante Up",
   "class": "Bureaucrat",
   "rarity": "Common",
   "copies": 2,
   "stage": "Any",
   "pot": 5,
   "text": "Tax: Your opponent puts 10 chips into the pot.",
   "note": "",
   "keywords": [
    "Chips",
    "Tax"
   ]
  },
  {
   "id": "armored-transport",
   "name": "Armored Transport",
   "class": "Protector",
   "rarity": "Common",
   "copies": 2,
   "stage": "Flop",
   "pot": 0,
   "text": "If there are 20 or more chips in the pot, draw 2 action cards.",
   "note": "",
   "keywords": [
    "Chips"
   ]
  },
  {
   "id": "atomic-shift",
   "name": "Atomic Shift",
   "class": "Inventor",
   "rarity": "Rare",
   "copies": 1,
   "stage": "PreFlop",
   "pot": 1,
   "text": "+1 rank to your lower pocket card. Repeat whenever you play an action card.",
   "note": "",
   "keywords": [
    "Rank"
   ]
  },
  {
   "id": "black-jack",
   "name": "Black Jack",
   "class": "Protector",
   "rarity": "Common",
   "copies": 2,
   "stage": "Flop",
   "pot": 4,
   "text": "Replace your pocket cards with J♠ and a random Face card.",
   "note": "",
   "keywords": [
    "Face card"
   ]
  },
  {
   "id": "bottom-dealing",
   "name": "Bottom Dealing",
   "class": "Cheater",
   "rarity": "Rare",
   "copies": 1,
   "stage": "Flop",
   "pot": 3,
   "text": "Look at the bottom 3 cards of the deck. Swap up to 3 board cards with them. Discard the rest.",
   "note": "",
   "keywords": []
  },
  {
   "id": "brick",
   "name": "Brick",
   "class": "Rebel",
   "rarity": "Rare",
   "copies": 1,
   "stage": "Any",
   "pot": 1,
   "text": "Replace a board card with a Brick.",
   "note": "",
   "keywords": []
  },
  {
   "id": "card-cam",
   "name": "Card Cam",
   "class": "Inventor",
   "rarity": "Common",
   "copies": 2,
   "stage": "Any",
   "pot": 1,
   "text": "Your opponent reveals a random pocket card. Draw an action card if it shares a suit or rank with the other.",
   "note": "",
   "keywords": [
    "Rank"
   ]
  },
  {
   "id": "card-payment",
   "name": "Card Payment",
   "class": "Gambler",
   "rarity": "Common",
   "copies": 2,
   "stage": "Any",
   "pot": 0,
   "text": "Cycle a random pocket card. Draw an action card if played Preflop.",
   "note": "",
   "keywords": [
    "Cycle"
   ]
  },
  {
   "id": "card-protector",
   "name": "Card Protector",
   "class": "Protector",
   "rarity": "Common",
   "copies": 2,
   "stage": "Flop",
   "pot": 7,
   "text": "Lock your pocket cards. If you win showdown, get Card Protector.",
   "note": "",
   "keywords": [
    "Lock"
   ]
  },
  {
   "id": "cardjacking",
   "name": "Cardjacking",
   "class": "Cheater",
   "rarity": "Common",
   "copies": 2,
   "stage": "PreFlop",
   "pot": 2,
   "text": "Swap your lower pocket card with your opponent's higher pocket card.",
   "note": "",
   "keywords": []
  },
  {
   "id": "chain-reaction",
   "name": "Chain Reaction",
   "class": "Inventor",
   "rarity": "Rare",
   "copies": 1,
   "stage": "PreFlop",
   "pot": -1,
   "text": "Combo: Get 3 random Preflop action cards.",
   "note": "",
   "keywords": [
    "Combo"
   ]
  },
  {
   "id": "change-of-heart",
   "name": "Change of Heart",
   "class": "Cheater",
   "rarity": "Common",
   "copies": 2,
   "stage": "Any",
   "pot": 1,
   "text": "Replace a board card with a Heart card of the same Rank. If it was an Ace, draw an action card.",
   "note": "",
   "keywords": [
    "Rank"
   ]
  },
  {
   "id": "cheat",
   "name": "Cheat",
   "class": "Cheater",
   "rarity": "Rare",
   "copies": 1,
   "stage": "River",
   "pot": -3,
   "text": "Swap a pocket card with a board card.",
   "note": "",
   "keywords": []
  },
  {
   "id": "chip-dumping",
   "name": "Chip Dumping",
   "class": "Rebel",
   "rarity": "Rare",
   "copies": 1,
   "stage": "Any",
   "pot": -2,
   "text": "If you have fewer action cards than your opponent, draw cards equal to the difference. Your opponent gains that many chips.",
   "note": "",
   "keywords": [
    "Chips"
   ]
  },
  {
   "id": "chromatic-shift",
   "name": "Chromatic Shift",
   "class": "Cheater",
   "rarity": "Common",
   "copies": 2,
   "stage": "River",
   "pot": -1,
   "text": "Cycle your pocket cards that aren't ♥.",
   "note": "",
   "keywords": [
    "Cycle"
   ]
  },
  {
   "id": "cinch",
   "name": "Cinch",
   "class": "Gambler",
   "rarity": "Common",
   "copies": 2,
   "stage": "PreFlop",
   "pot": 1,
   "text": "Your action cards can't Backfire. Get a random action card with Backfire.",
   "note": "",
   "keywords": [
    "Backfire"
   ]
  },
  {
   "id": "clean-slate",
   "name": "Clean Slate",
   "class": "Rebel",
   "rarity": "Rare",
   "copies": 1,
   "stage": "PreFlop",
   "pot": 2,
   "text": "Both players replace all action cards with random Universal action cards.",
   "note": "",
   "keywords": []
  },
  {
   "id": "cold-deck",
   "name": "Cold Deck",
   "class": "Gambler",
   "rarity": "Common",
   "copies": 2,
   "stage": "PreFlop",
   "pot": 4,
   "text": "Discard all [A], [K], [Q], [J] rank cards from the deck.",
   "note": "",
   "keywords": [
    "Rank"
   ]
  },
  {
   "id": "comeback-chance",
   "name": "Comeback Chance",
   "class": "Gambler",
   "rarity": "Rare",
   "copies": 1,
   "stage": "Flop",
   "pot": -1,
   "text": "Get a Roulette. Backfire: Replace your Flop action cards with Windfalls.",
   "note": "",
   "keywords": [
    "Backfire"
   ]
  },
  {
   "id": "compression",
   "name": "Compression",
   "class": "Inventor",
   "rarity": "Common",
   "copies": 2,
   "stage": "Any",
   "pot": 2,
   "text": "-1 rank to the highest board card. Repeat for each action card you played this stage.",
   "note": "",
   "keywords": [
    "Rank"
   ]
  },
  {
   "id": "countdown",
   "name": "Countdown",
   "class": "Inventor",
   "rarity": "Common",
   "copies": 2,
   "stage": "River",
   "pot": 8,
   "text": "Replace your pocket cards with 10♣9♠.",
   "note": "",
   "keywords": []
  },
  {
   "id": "court-order",
   "name": "Court Order",
   "class": "Protector",
   "rarity": "Common",
   "copies": 2,
   "stage": "Any",
   "pot": 3,
   "text": "Replace a pocket card with a random Face card.",
   "note": "",
   "keywords": [
    "Face card"
   ]
  },
  {
   "id": "cupid",
   "name": "Cupid",
   "class": "Cheater",
   "rarity": "Rare",
   "copies": 1,
   "stage": "Flop",
   "pot": 1,
   "text": "Draw an action card for each ♥ card on the board and gain that many chips.",
   "note": "",
   "keywords": [
    "Chips"
   ]
  },
  {
   "id": "custody-battle",
   "name": "Custody Battle",
   "class": "Protector",
   "rarity": "Rare",
   "copies": 1,
   "stage": "Any",
   "pot": 4,
   "text": "If there are 3 or more Face cards on the board, play Black Jack and VIP.",
   "note": "",
   "keywords": [
    "Face card"
   ]
  },
  {
   "id": "cyclone",
   "name": "Cyclone",
   "class": "Gambler",
   "rarity": "Common",
   "copies": 2,
   "stage": "River",
   "pot": 0,
   "text": "Cycle all board cards. Backfire: Lose 7 chips.",
   "note": "",
   "keywords": [
    "Chips",
    "Cycle",
    "Backfire"
   ]
  },
  {
   "id": "data-mining",
   "name": "Data Mining",
   "class": "Inventor",
   "rarity": "Common",
   "copies": 2,
   "stage": "Flop",
   "pot": -2,
   "text": "Draw the highest value action card from your deck.",
   "note": "",
   "keywords": []
  },
  {
   "id": "debt-collector",
   "name": "Debt Collector",
   "class": "Bureaucrat",
   "rarity": "Common",
   "copies": 2,
   "stage": "PreFlop",
   "pot": 2,
   "text": "Steal a random negative value action card from your opponent.",
   "note": "",
   "keywords": []
  },
  {
   "id": "degradation",
   "name": "Degradation",
   "class": "Inventor",
   "rarity": "Rare",
   "copies": 1,
   "stage": "River",
   "pot": -1,
   "text": "-1 rank to your pocket cards.",
   "note": "",
   "keywords": [
    "Rank"
   ]
  },
  {
   "id": "dirty-hands",
   "name": "Dirty Hands",
   "class": "Cheater",
   "rarity": "Common",
   "copies": 2,
   "stage": "River",
   "pot": 5,
   "text": "Look at the top 3 cards of your deck. Draw all that have negative value.",
   "note": "",
   "keywords": []
  },
  {
   "id": "disarming-gaze",
   "name": "Disarming Gaze",
   "class": "Cheater",
   "rarity": "Common",
   "copies": 2,
   "stage": "Any",
   "pot": 1,
   "text": "Choose an action card and swap it with an opponent's action card at random.",
   "note": "",
   "keywords": []
  },
  {
   "id": "document-dump",
   "name": "Document Dump",
   "class": "Bureaucrat",
   "rarity": "Rare",
   "copies": 1,
   "stage": "Flop",
   "pot": 0,
   "text": "-1 rank to your opponent's pocket cards. Tax: +3 rank to your pocket cards.",
   "note": "",
   "keywords": [
    "Rank",
    "Tax"
   ]
  },
  {
   "id": "drought",
   "name": "Drought",
   "class": "Rebel",
   "rarity": "Common",
   "copies": 2,
   "stage": "PreFlop",
   "pot": 1,
   "text": "Discard all River cards from both players' decks.",
   "note": "",
   "keywords": []
  },
  {
   "id": "dry-board",
   "name": "Dry Board",
   "class": "Bureaucrat",
   "rarity": "Common",
   "copies": 2,
   "stage": "River",
   "pot": 7,
   "text": "Players can‘t make Straight or Flush combinations.",
   "note": "",
   "keywords": []
  },
  {
   "id": "eureka",
   "name": "Eureka",
   "class": "Inventor",
   "rarity": "Rare",
   "copies": 1,
   "stage": "River",
   "pot": 3,
   "text": "If you played 6 or more other action cards, get 3 random River action cards.",
   "note": "",
   "keywords": []
  },
  {
   "id": "expose-weakness",
   "name": "Expose Weakness",
   "class": "Bureaucrat",
   "rarity": "Common",
   "copies": 2,
   "stage": "PreFlop",
   "pot": 5,
   "text": "-3 rank to your opponent’s higher pocket card. Reveal it.",
   "note": "",
   "keywords": [
    "Rank"
   ]
  },
  {
   "id": "eye-for-an-eye",
   "name": "Eye for an Eye",
   "class": "Rebel",
   "rarity": "Common",
   "copies": 2,
   "stage": "Flop",
   "pot": 1,
   "text": "Each player replaces a random pocket card with a Brick.",
   "note": "",
   "keywords": []
  },
  {
   "id": "fading-echo",
   "name": "Fading Echo",
   "class": "Inventor",
   "rarity": "Common",
   "copies": 2,
   "stage": "PreFlop",
   "pot": 7,
   "text": "Replace your lower pocket card with a copy of the other and give it -1 rank.",
   "note": "",
   "keywords": [
    "Rank"
   ]
  },
  {
   "id": "fantasy-land",
   "name": "Fantasy Land",
   "class": "Protector",
   "rarity": "Common",
   "copies": 2,
   "stage": "PreFlop",
   "pot": 5,
   "text": "Replace your pocket cards with Q♠Q♥.",
   "note": "",
   "keywords": []
  },
  {
   "id": "fatal-fortune",
   "name": "Fatal Fortune",
   "class": "Bureaucrat",
   "rarity": "Rare",
   "copies": 1,
   "stage": "Any",
   "pot": 0,
   "text": "Steal 2 random action cards from your opponent. Set your opponent's chips to 99.",
   "note": "",
   "keywords": [
    "Chips"
   ]
  },
  {
   "id": "favoritism",
   "name": "Favoritism",
   "class": "Protector",
   "rarity": "Common",
   "copies": 2,
   "stage": "Flop",
   "pot": 2,
   "text": "Lock all River action cards. No-show: Gain 5 chips.",
   "note": "",
   "keywords": [
    "Lock",
    "No-Show",
    "Chips"
   ]
  },
  {
   "id": "fibonacci",
   "name": "Fibonacci",
   "class": "Inventor",
   "rarity": "Rare",
   "copies": 1,
   "stage": "River",
   "pot": 0,
   "text": "Replace 4 random board cards with 2♠3♥5♣8♦.",
   "note": "",
   "keywords": []
  },
  {
   "id": "final-notice",
   "name": "Final Notice",
   "class": "Protector",
   "rarity": "Rare",
   "copies": 1,
   "stage": "Any",
   "pot": -1,
   "text": "Each player can only play 1 more action card.",
   "note": "",
   "keywords": []
  },
  {
   "id": "gamble",
   "name": "Gamble",
   "class": "Gambler",
   "rarity": "Common",
   "copies": 2,
   "stage": "River",
   "pot": 1,
   "text": "Draw 2 action cards. Backfire: Lock your action cards.",
   "note": "",
   "keywords": [
    "Lock",
    "Backfire"
   ]
  },
  {
   "id": "game-stop",
   "name": "Game Stop",
   "class": "Rebel",
   "rarity": "Common",
   "copies": 2,
   "stage": "Flop",
   "pot": 7,
   "text": "All-in: Go directly to showdown after the Flop. (players can still fold)",
   "note": "",
   "keywords": [
    "All-in"
   ]
  },
  {
   "id": "gameplan",
   "name": "Gameplan",
   "class": "Gambler",
   "rarity": "Common",
   "copies": 2,
   "stage": "River",
   "pot": 2,
   "text": "Replace your pocket cards with random, suited Number cards.",
   "note": "",
   "keywords": []
  },
  {
   "id": "hero-call",
   "name": "Hero Call",
   "class": "Rebel",
   "rarity": "Rare",
   "copies": 1,
   "stage": "Any",
   "pot": 0,
   "text": "Discard your action cards. If you win the pot, gain 20 extra chips, plus 5 chips for each card discarded this way.",
   "note": "",
   "keywords": [
    "Chips"
   ]
  },
  {
   "id": "high-five",
   "name": "High Five",
   "class": "Rebel",
   "rarity": "Rare",
   "copies": 1,
   "stage": "Flop",
   "pot": 5,
   "text": "Replace a board card and a random pocket card with 5♦. All-in: Your opponent discards a random action card.",
   "note": "",
   "keywords": [
    "All-in"
   ]
  },
  {
   "id": "high-hand-bonus",
   "name": "High Hand Bonus",
   "class": "Inventor",
   "rarity": "Common",
   "copies": 2,
   "stage": "River",
   "pot": 5,
   "text": "If the winning showdown combination is a Straight or better, the winner gains 10 extra chips. Combo: Get a random River action card.",
   "note": "",
   "keywords": [
    "Chips",
    "Combo"
   ]
  },
  {
   "id": "higher-authority",
   "name": "Higher Authority",
   "class": "Bureaucrat",
   "rarity": "Common",
   "copies": 2,
   "stage": "Any",
   "pot": 1,
   "text": "Steal 6 chips for each of your opponent's pocket Face cards.",
   "note": "",
   "keywords": [
    "Face card",
    "Chips"
   ]
  },
  {
   "id": "hostile-territory",
   "name": "Hostile Territory",
   "class": "Rebel",
   "rarity": "Common",
   "copies": 2,
   "stage": "Flop",
   "pot": 2,
   "text": "Your opponent discards all Universal action cards.",
   "note": "",
   "keywords": []
  },
  {
   "id": "hot-deck",
   "name": "Hot Deck",
   "class": "Protector",
   "rarity": "Common",
   "copies": 2,
   "stage": "PreFlop",
   "pot": 4,
   "text": "Shuffle 30 random Face cards into the deck.",
   "note": "",
   "keywords": [
    "Face card"
   ]
  },
  {
   "id": "house-cut",
   "name": "House Cut",
   "class": "Bureaucrat",
   "rarity": "Common",
   "copies": 2,
   "stage": "Any",
   "pot": 4,
   "text": "If your opponent has no action cards, steal half of the pot.",
   "note": "",
   "keywords": []
  },
  {
   "id": "inner-circle",
   "name": "Inner Circle",
   "class": "Protector",
   "rarity": "Rare",
   "copies": 1,
   "stage": "Flop",
   "pot": 2,
   "text": "Put 2 random face cards on top of the deck.",
   "note": "",
   "keywords": [
    "Face card"
   ]
  },
  {
   "id": "inspection",
   "name": "Inspection",
   "class": "Bureaucrat",
   "rarity": "Common",
   "copies": 2,
   "stage": "River",
   "pot": -1,
   "text": "If your opponent has 4 or more action cards, steal 2 random River action cards from your opponent’s deck.",
   "note": "",
   "keywords": []
  },
  {
   "id": "jackpot",
   "name": "Jackpot",
   "class": "Gambler",
   "rarity": "Rare",
   "copies": 1,
   "stage": "PreFlop",
   "pot": 7,
   "text": "If your showdown combination includes a Pair of Sevens, you win the pot.",
   "note": "",
   "keywords": []
  },
  {
   "id": "jailbreak",
   "name": "Jailbreak",
   "class": "Rebel",
   "rarity": "Common",
   "copies": 2,
   "stage": "River",
   "pot": 2,
   "text": "Unlock all pocket and board cards. All-in: Your opponent replaces a random pocket card with a Brick.",
   "note": "",
   "keywords": [
    "Lock",
    "Unlock"
   ]
  },
  {
   "id": "last-laugh",
   "name": "Last Laugh",
   "class": "Rebel",
   "rarity": "Rare",
   "copies": 1,
   "stage": "Any",
   "pot": 5,
   "text": "If there are no action cards in your deck, replace your opponent's pocket cards with Bricks.",
   "note": "",
   "keywords": []
  },
  {
   "id": "law-of-averages",
   "name": "Law of Averages",
   "class": "Inventor",
   "rarity": "Rare",
   "copies": 1,
   "stage": "River",
   "pot": 2,
   "text": "Replace the Highest board card with 8♦. Combo: Replace the lowest board card with 7♥.",
   "note": "The main effect resolves before Combo. Combo can affect the same card again.",
   "keywords": [
    "Combo"
   ]
  },
  {
   "id": "lockdown",
   "name": "Lockdown",
   "class": "Protector",
   "rarity": "Rare",
   "copies": 1,
   "stage": "Any",
   "pot": -2,
   "text": "Lock all pocket and board cards.",
   "note": "",
   "keywords": [
    "Lock"
   ]
  },
  {
   "id": "lockpick",
   "name": "Lockpick",
   "class": "Cheater",
   "rarity": "Common",
   "copies": 2,
   "stage": "Any",
   "pot": 5,
   "text": "Unlock all cards. Cycle all cards unlocked this way.",
   "note": "",
   "keywords": [
    "Lock",
    "Unlock",
    "Cycle"
   ]
  },
  {
   "id": "low-blow",
   "name": "Low Blow",
   "class": "Inventor",
   "rarity": "Common",
   "copies": 2,
   "stage": "Any",
   "pot": -2,
   "text": "Reveal a pocket card. Cycle all board cards with higher rank.",
   "note": "",
   "keywords": [
    "Rank",
    "Cycle"
   ]
  },
  {
   "id": "magnetize",
   "name": "Magnetize",
   "class": "Inventor",
   "rarity": "Rare",
   "copies": 1,
   "stage": "Flop",
   "pot": 0,
   "text": "Choose a board card. Replace the others with its copy, randomize their suits and give them -1 and +1 rank.",
   "note": "",
   "keywords": [
    "Rank"
   ]
  },
  {
   "id": "maniac",
   "name": "Maniac",
   "class": "Gambler",
   "rarity": "Common",
   "copies": 2,
   "stage": "PreFlop",
   "pot": 20,
   "text": "Backfire: Reveal a random pocket card.",
   "note": "",
   "keywords": [
    "Backfire"
   ]
  },
  {
   "id": "marked-card",
   "name": "Marked Card",
   "class": "Cheater",
   "rarity": "Common",
   "copies": 2,
   "stage": "Flop",
   "pot": -1,
   "text": "Replace a board card with A♥.",
   "note": "",
   "keywords": []
  },
  {
   "id": "misdeal",
   "name": "Misdeal",
   "class": "Gambler",
   "rarity": "Rare",
   "copies": 1,
   "stage": "River",
   "pot": -6,
   "text": "Each player Cycles both pocket cards.",
   "note": "",
   "keywords": [
    "Cycle"
   ]
  },
  {
   "id": "mulligan",
   "name": "Mulligan",
   "class": "Rebel",
   "rarity": "Common",
   "copies": 2,
   "stage": "Any",
   "pot": 2,
   "text": "Cycle up to 1 pocket card and up to 1 action card.",
   "note": "",
   "keywords": [
    "Cycle"
   ]
  },
  {
   "id": "noise-filtering",
   "name": "Noise Filtering",
   "class": "Inventor",
   "rarity": "Common",
   "copies": 2,
   "stage": "Any",
   "pot": 1,
   "text": "Unlock all board cards. Cycle all paired and [A] rank board cards.",
   "note": "",
   "keywords": [
    "Lock",
    "Rank",
    "Unlock",
    "Cycle"
   ]
  },
  {
   "id": "numerology",
   "name": "Numerology",
   "class": "Gambler",
   "rarity": "Rare",
   "copies": 1,
   "stage": "River",
   "pot": 0,
   "text": "If there are only number cards on board, play Jackpot, Wild Ducks and Gameplan.",
   "note": "A Brick is still considered a card, but not a Number one.",
   "keywords": [
    "Wild"
   ]
  },
  {
   "id": "one-time",
   "name": "One Time!",
   "class": "Cheater",
   "rarity": "Rare",
   "copies": 1,
   "stage": "PreFlop",
   "pot": 7,
   "text": "When dealing the 4th board card, choose it from the top 7 cards of the deck. Your opponent can't play One Time!",
   "note": "",
   "keywords": []
  },
  {
   "id": "out-of-sight",
   "name": "Out of Sight",
   "class": "Cheater",
   "rarity": "Common",
   "copies": 2,
   "stage": "Any",
   "pot": 2,
   "text": "Swap a pocket or a board card with the top card of the deck.",
   "note": "",
   "keywords": []
  },
  {
   "id": "over-under",
   "name": "Over/Under",
   "class": "Gambler",
   "rarity": "Rare",
   "copies": 1,
   "stage": "River",
   "pot": -5,
   "text": "For each board card, randomly give it +1 or -1 rank.",
   "note": "",
   "keywords": [
    "Rank"
   ]
  },
  {
   "id": "overplay",
   "name": "Overplay",
   "class": "Gambler",
   "rarity": "Common",
   "copies": 2,
   "stage": "River",
   "pot": 7,
   "text": "+1 rank to a pocket card. Backfire: -2 rank to a pocket card at random.",
   "note": "",
   "keywords": [
    "Rank",
    "Backfire"
   ]
  },
  {
   "id": "overprotect",
   "name": "Overprotect",
   "class": "Bureaucrat",
   "rarity": "Rare",
   "copies": 1,
   "stage": "PreFlop",
   "pot": 4,
   "text": "-1 rank to an opponent's pocket card at random. Lock both.",
   "note": "",
   "keywords": [
    "Lock",
    "Rank"
   ]
  },
  {
   "id": "paper-trail",
   "name": "Paper Trail",
   "class": "Bureaucrat",
   "rarity": "Rare",
   "copies": 1,
   "stage": "River",
   "pot": 2,
   "text": "If your opponent's combination is Two Pair or better, draw 2 action cards.",
   "note": "",
   "keywords": []
  },
  {
   "id": "pocket-mirror",
   "name": "Pocket Mirror",
   "class": "Protector",
   "rarity": "Rare",
   "copies": 1,
   "stage": "PreFlop",
   "pot": 3,
   "text": "Replace your lower pocket card with a copy of the other.",
   "note": "",
   "keywords": []
  },
  {
   "id": "poker-faces",
   "name": "Poker Faces",
   "class": "Protector",
   "rarity": "Rare",
   "copies": 1,
   "stage": "River",
   "pot": 1,
   "text": "Draw an action card for each unique Face card rank among your pocket and board cards.",
   "note": "",
   "keywords": [
    "Face card",
    "Rank"
   ]
  },
  {
   "id": "pot-control",
   "name": "Pot Control",
   "class": "Bureaucrat",
   "rarity": "Rare",
   "copies": 1,
   "stage": "Flop",
   "pot": 4,
   "text": "Your opponent can't get over 99 chips.",
   "note": "",
   "keywords": [
    "Chips"
   ]
  },
  {
   "id": "promote",
   "name": "Promote",
   "class": "Protector",
   "rarity": "Rare",
   "copies": 1,
   "stage": "PreFlop",
   "pot": 4,
   "text": "Replace your pocket Number cards with random Face cards. Lock your pocket cards.",
   "note": "",
   "keywords": [
    "Lock",
    "Face card"
   ]
  },
  {
   "id": "prototype",
   "name": "Prototype",
   "class": "Inventor",
   "rarity": "Common",
   "copies": 2,
   "stage": "Flop",
   "pot": 4,
   "text": "-2 rank to a board card. If you win the pot, get Prototype.",
   "note": "",
   "keywords": [
    "Rank"
   ]
  },
  {
   "id": "punching-down",
   "name": "Punching Down",
   "class": "Rebel",
   "rarity": "Common",
   "copies": 2,
   "stage": "PreFlop",
   "pot": 3,
   "text": "Your opponent discards the lowest value action card.",
   "note": "",
   "keywords": []
  },
  {
   "id": "read",
   "name": "Read",
   "class": "Inventor",
   "rarity": "Common",
   "copies": 2,
   "stage": "Any",
   "pot": 3,
   "text": "Your opponent reveals all action cards that can be played this stage. Draw an action card if there's 3 or more of them.",
   "note": "",
   "keywords": []
  },
  {
   "id": "red-tape",
   "name": "Red Tape",
   "class": "Bureaucrat",
   "rarity": "Rare",
   "copies": 1,
   "stage": "Any",
   "pot": 0,
   "text": "Lock all action cards until the end of the stage.",
   "note": "",
   "keywords": [
    "Lock"
   ]
  },
  {
   "id": "revolution",
   "name": "Revolution",
   "class": "Rebel",
   "rarity": "Common",
   "copies": 2,
   "stage": "Any",
   "pot": 6,
   "text": "Replace all Face cards with Bricks. Discard a random action card.",
   "note": "",
   "keywords": [
    "Face card"
   ]
  },
  {
   "id": "rich-get-richer",
   "name": "Rich Get Richer",
   "class": "Bureaucrat",
   "rarity": "Common",
   "copies": 2,
   "stage": "Any",
   "pot": 1,
   "text": "Each player draws an action card for each pocket card of rank [8] or above.",
   "note": "",
   "keywords": [
    "Rank"
   ]
  },
  {
   "id": "roll-the-dice",
   "name": "Roll the Dice",
   "class": "Gambler",
   "rarity": "Common",
   "copies": 2,
   "stage": "Flop",
   "pot": 1,
   "text": "Replace up to 1 board card and up to 1 pocket card with random Number cards.",
   "note": "",
   "keywords": []
  },
  {
   "id": "roulette",
   "name": "Roulette",
   "class": "Gambler",
   "rarity": "Rare",
   "copies": 1,
   "stage": "Flop",
   "pot": 0,
   "text": "Cycle a random Board card. Your opponent Cycles a random pocket card and discards a random Action card.",
   "note": "",
   "keywords": [
    "Cycle"
   ]
  },
  {
   "id": "rude-exchange",
   "name": "Rude Exchange",
   "class": "Cheater",
   "rarity": "Rare",
   "copies": 1,
   "stage": "River",
   "pot": 0,
   "text": "Swap your lower pocket card with your opponent's lower pocket card.",
   "note": "",
   "keywords": []
  },
  {
   "id": "salvaged-goods",
   "name": "Salvaged Goods",
   "class": "Rebel",
   "rarity": "Common",
   "copies": 2,
   "stage": "Flop",
   "pot": 0,
   "text": "Discard any number of action cards. Get that many Flop action cards plus 1.",
   "note": "",
   "keywords": []
  },
  {
   "id": "savor-the-moment",
   "name": "Savor the Moment",
   "class": "Protector",
   "rarity": "Common",
   "copies": 2,
   "stage": "Any",
   "pot": 8,
   "text": "Lock a board card.",
   "note": "",
   "keywords": [
    "Lock"
   ]
  },
  {
   "id": "scarlet-deck",
   "name": "Scarlet Deck",
   "class": "Cheater",
   "rarity": "Common",
   "copies": 2,
   "stage": "PreFlop",
   "pot": 4,
   "text": "Shuffle 30 random ♥ cards into the deck.",
   "note": "",
   "keywords": []
  },
  {
   "id": "second-thoughts",
   "name": "Second Thoughts",
   "class": "Cheater",
   "rarity": "Rare",
   "copies": 1,
   "stage": "Any",
   "pot": -3,
   "text": "Play a copy of the last card your opponent played this stage.",
   "note": "",
   "keywords": []
  },
  {
   "id": "secret-stash",
   "name": "Secret Stash",
   "class": "Rebel",
   "rarity": "Rare",
   "copies": 1,
   "stage": "PreFlop",
   "pot": 0,
   "text": "Draw an action card at the beginning of the Flop and River stages.",
   "note": "",
   "keywords": []
  },
  {
   "id": "seeing-red",
   "name": "Seeing Red",
   "class": "Cheater",
   "rarity": "Common",
   "copies": 2,
   "stage": "Any",
   "pot": 0,
   "text": "Look at the top card of the deck. If it's a ♥, draw an action card. Otherwise, gain 5 chips.",
   "note": "",
   "keywords": [
    "Chips"
   ]
  },
  {
   "id": "silver-bullet",
   "name": "Silver Bullet",
   "class": "Rebel",
   "rarity": "Rare",
   "copies": 1,
   "stage": "Flop",
   "pot": -1,
   "text": "Choose up to 1 action card and discard the rest. Your opponent discards 2 random action cards.",
   "note": "",
   "keywords": []
  },
  {
   "id": "sleight-of-hand",
   "name": "Sleight of Hand",
   "class": "Cheater",
   "rarity": "Common",
   "copies": 2,
   "stage": "Flop",
   "pot": 1,
   "text": "Swap a board card with your opponent's lower pocket card.",
   "note": "",
   "keywords": []
  },
  {
   "id": "sneak-out",
   "name": "Sneak Out",
   "class": "Cheater",
   "rarity": "Rare",
   "copies": 1,
   "stage": "Any",
   "pot": -2,
   "text": "If your opponent's combination is a Straight or better, the pot becomes 0. Draw an action card and fold.",
   "note": "",
   "keywords": []
  },
  {
   "id": "spiraling-debt",
   "name": "Spiraling Debt",
   "class": "Bureaucrat",
   "rarity": "Common",
   "copies": 2,
   "stage": "Any",
   "pot": -4,
   "text": "If you lose showdown, get Spiraling Debt.",
   "note": "",
   "keywords": []
  },
  {
   "id": "split-vision",
   "name": "Split Vision",
   "class": "Protector",
   "rarity": "Common",
   "copies": 2,
   "stage": "PreFlop",
   "pot": -2,
   "text": "If you have a Pair, draw 2 action cards.",
   "note": "",
   "keywords": []
  },
  {
   "id": "stained-money",
   "name": "Stained Money",
   "class": "Bureaucrat",
   "rarity": "Rare",
   "copies": 1,
   "stage": "River",
   "pot": -4,
   "text": "Showdown winner discards all action cards.",
   "note": "",
   "keywords": []
  },
  {
   "id": "steal",
   "name": "Steal",
   "class": "Bureaucrat",
   "rarity": "Common",
   "copies": 2,
   "stage": "Any",
   "pot": -2,
   "text": "Steal 2 chips for each card your opponent played this stage. Repeat if played on the River.",
   "note": "",
   "keywords": [
    "Chips"
   ]
  },
  {
   "id": "stroke-of-luck",
   "name": "Stroke of Luck",
   "class": "Gambler",
   "rarity": "Common",
   "copies": 2,
   "stage": "Flop",
   "pot": -1,
   "text": "Replace a random pocket card with a copy of a random board card.",
   "note": "",
   "keywords": []
  },
  {
   "id": "superstition",
   "name": "Superstition",
   "class": "Gambler",
   "rarity": "Common",
   "copies": 2,
   "stage": "Flop",
   "pot": 6,
   "text": "No-show: Your opponent discards a random action card and loses 6 chips.",
   "note": "",
   "keywords": [
    "No-Show",
    "Chips"
   ]
  },
  {
   "id": "surge",
   "name": "Surge",
   "class": "Inventor",
   "rarity": "Rare",
   "copies": 1,
   "stage": "River",
   "pot": -4,
   "text": "+1 rank to a board card.",
   "note": "",
   "keywords": [
    "Rank"
   ]
  },
  {
   "id": "sweetheart-scam",
   "name": "Sweetheart Scam",
   "class": "Cheater",
   "rarity": "Rare",
   "copies": 1,
   "stage": "River",
   "pot": 3,
   "text": "If there are 3 or more Heart cards on the board, play Chromatic Shift and Ace in Sleeve.",
   "note": "",
   "keywords": []
  },
  {
   "id": "symbiosis",
   "name": "Symbiosis",
   "class": "Inventor",
   "rarity": "Common",
   "copies": 2,
   "stage": "Flop",
   "pot": 4,
   "text": "Put a copy of a board card with +1 rank on top of the deck.",
   "note": "",
   "keywords": [
    "Rank"
   ]
  },
  {
   "id": "take-the-crown",
   "name": "Take the Crown",
   "class": "Protector",
   "rarity": "Common",
   "copies": 2,
   "stage": "River",
   "pot": 1,
   "text": "Replace a board card with a random Face card. Lock it.",
   "note": "",
   "keywords": [
    "Lock",
    "Face card"
   ]
  },
  {
   "id": "tax-burden",
   "name": "Tax Burden",
   "class": "Bureaucrat",
   "rarity": "Common",
   "copies": 2,
   "stage": "Flop",
   "pot": -1,
   "text": "If your opponent has more chips than you, gain chips equal to half the difference.",
   "note": "",
   "keywords": [
    "Chips"
   ]
  },
  {
   "id": "thought-police",
   "name": "Thought Police",
   "class": "Bureaucrat",
   "rarity": "Rare",
   "copies": 1,
   "stage": "PreFlop",
   "pot": 2,
   "text": "Steal a random action card from your opponent's deck. Tax: Repeat.",
   "note": "",
   "keywords": [
    "Tax"
   ]
  },
  {
   "id": "three-wise-men",
   "name": "Three Wise Men",
   "class": "Protector",
   "rarity": "Rare",
   "copies": 1,
   "stage": "Flop",
   "pot": 3,
   "text": "Replace the board cards with K♠K♥K♦.",
   "note": "",
   "keywords": []
  },
  {
   "id": "trap",
   "name": "Trap",
   "class": "Protector",
   "rarity": "Common",
   "copies": 2,
   "stage": "Flop",
   "pot": 0,
   "text": "If you win showdown, your opponent discards all action cards. No-show: Gain 6 chips.",
   "note": "",
   "keywords": [
    "No-Show",
    "Chips"
   ]
  },
  {
   "id": "unexpected-result",
   "name": "Unexpected Result",
   "class": "Inventor",
   "rarity": "Common",
   "copies": 2,
   "stage": "Flop",
   "pot": 2,
   "text": "-1 rank to a board card. Draw an action card if you don't have a Pair.",
   "note": "",
   "keywords": [
    "Rank"
   ]
  },
  {
   "id": "vip",
   "name": "VIP",
   "class": "Protector",
   "rarity": "Common",
   "copies": 2,
   "stage": "Any",
   "pot": 2,
   "text": "Lock the two highest board cards and one of your opponent's action cards at random.",
   "note": "",
   "keywords": [
    "Lock"
   ]
  },
  {
   "id": "wash-ashore",
   "name": "Wash Ashore",
   "class": "Rebel",
   "rarity": "Common",
   "copies": 2,
   "stage": "PreFlop",
   "pot": 2,
   "text": "Get a random Universal or River action card at the beginning of the River stage. No-show: Gain 4 chips.",
   "note": "",
   "keywords": [
    "No-Show",
    "Chips"
   ]
  },
  {
   "id": "wasteland",
   "name": "Wasteland",
   "class": "Rebel",
   "rarity": "Common",
   "copies": 2,
   "stage": "Any",
   "pot": -1,
   "text": "Replace 2 random board cards with bricks. Replace 1 more if played on the River.",
   "note": "",
   "keywords": []
  },
  {
   "id": "wear-down",
   "name": "Wear Down",
   "class": "Bureaucrat",
   "rarity": "Common",
   "copies": 2,
   "stage": "Any",
   "pot": -1,
   "text": "-2 rank to an opponent's pocket card at random. Tax: Repeat.",
   "note": "",
   "keywords": [
    "Rank",
    "Tax"
   ]
  },
  {
   "id": "wheel-of-fortune",
   "name": "Wheel of Fortune",
   "class": "Gambler",
   "rarity": "Common",
   "copies": 2,
   "stage": "Flop",
   "pot": 3,
   "text": "Replace the board cards with random Number cards.",
   "note": "",
   "keywords": []
  },
  {
   "id": "wild-ducks",
   "name": "Wild Ducks",
   "class": "Gambler",
   "rarity": "Rare",
   "copies": 1,
   "stage": "PreFlop",
   "pot": 2,
   "text": "Your [2] rank pocket cards become Wild in showdown.",
   "note": "",
   "keywords": [
    "Rank",
    "Wild"
   ]
  },
  {
   "id": "windfall",
   "name": "Windfall",
   "class": "Gambler",
   "rarity": "Rare",
   "copies": 1,
   "stage": "Any",
   "pot": -3,
   "text": "Randomly distribute 20 chips between players.",
   "note": "",
   "keywords": [
    "Chips"
   ]
  }
 ]
};
