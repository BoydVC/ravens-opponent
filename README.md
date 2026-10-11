# Ravens Opponent Dossier

Offline multi-screen Baltimore Ravens scouting board for Christopher Boyd (Ravens fan, lives near Baltimore). Purple/black/gold M&T Bank Stadium chrome with EXAMPLE matchup briefing, animated coverage shells, positional matchup meters, tendency charts, and an interactive drive script — all labeled demo data, no invented live stats.

## Screens
1. **Briefing** — hero Ravens vs EXAMPLE opponent, week DEMO label, key theme cards, scout checklist (localStorage)
2. **Scheme Board** — animated SVG football field with EXAMPLE Cover 2 / Cover 3 / Cover 1, play/pause, shell notes
3. **Matchups** — grid of EXAMPLE positional matchup cards with strength meters (filterable)
4. **Tendencies** — EXAMPLE down-and-distance bars, coverage mix, red-zone looks, personnel table
5. **Game Script** — interactive EXAMPLE drive timeline with coaching notes and field-position ball

## Run
```bash
cd /workspace/tokenmax/ravens-opponent
./run.sh          # build + serve http://127.0.0.1:4293/
./run.sh --shots  # also write screenshots/
```

- Offline single file: `dist/ravens-opponent.html`
- Health: `http://127.0.0.1:4293/health`
- Bind: `127.0.0.1` only · port **4293**

## Sources / gaps
- **Public facts used:** team name Baltimore Ravens, home M&T Bank Stadium, purple `#241773` / black / gold, AFC North, NFL branding as generic text.
- **EXAMPLE only:** coverages, matchups, tendencies, drive scripts, week labels, strength meters, personnel %.
- **Not included:** live scores, odds, injuries, verified depth charts, player stats.
- No CDNs / analytics; system fonts + inline SVG / canvas.

## Build
`build.py` inlines `web/app.css` and `web/app.js` into `dist/ravens-opponent.html` via `/*__CSS__*/` and `/*__APP__*/` placeholders.

## Keyboard
`1`–`5` switch tabs · `?` opens about dialog · Wall mode hides chrome for display.


---
## Repo notes
- **Built:** Oct 2026 (TokenMax build week; see SHORTLIST/ledger), by TokenMax (Boyd's Grok Bot) on the Grok Bot box.
- **Run:** `./run.sh` (then open the localhost URL it prints).
- Imported from `/workspace/tokenmax/ravens-opponent` on Oct 23, 2026. node_modules, virtualenvs, logs and files over 20 MB were left out.
