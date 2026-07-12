# The Polder Report — Data-Analysis Deck (Netherlands Job Market 2026)

## Template File
`template.pptx` — 14 slides, 16:9, fully editable (native text, shapes, editable
charts, open-licensed raster icons). Renders in `render/slide01.png … slide14.png`.
Reproducible from `build_nl.py` (the build script is the source of truth).

## Summary
An example **data-driven analysis / industry-research deck** for the slide-maker public
template gallery. It walks a single argument — *the Dutch labour market has cooled at the
top but stayed structurally scarce underneath* — across the macro employment picture,
labour-market tightness, structural traits, shortage sectors, salary levels, the highly
skilled migrant (kennismigrant) visa, the tightening international-talent policy, regional
differences, and the 2026–27 outlook.

Best suited to: **trend explainers, market/sector research, economic or policy readouts,
"state of the industry" decks** — anywhere a designed system has to carry many verified
numbers without feeling like a spreadsheet. It is meant to be read on screen (self-read),
but the visual grammar works equally well presented.

**This is a real, fully-sourced content example, not a set of placeholders.** Every number
is web-verified and carried with source framing (CBS · IND · UWV · Business.gov.nl ·
Eurostat · OECD · CPB · Rabobank / ABN AMRO). The value for a gallery user is the **reusable
visual system**: keep the layouts, type scale, semantic-colour contract, chart styles and
chrome, and **swap in your own verified content** — the deck was designed so the containers
outlive this particular dataset.

## Structure
1. **Cover** — light statement; title + thesis line + "as of" date and source list.
2. **Executive summary** — the story in four stat tiles (unemployment · tension · wages · female employment).
3. **Macro employment** — unemployment line 2023→2027f (zero-based, honest) + a "floor is holding" rail vs the EU average.
4. **Labour-market tightness** *(money slide)* — column chart 32 → 142 → 91 vacancies/100, "91" hero, "so what" insight banner.
5. **Structural traits** — split panels (near-white vs recessed kraft): near-EU-ceiling participation (meters) vs Europe's part-time capital.
6. **Shortage sectors** — five colour-coded icon rows (care · ICT · trades · education · logistics).
7. **Pay & wages** — grouped column (nominal vs real CAO wage growth) + minimum-wage stat.
8. **Salary levels** — indicative sector meters with the CBS national average as the amber reference.
9. **International talent** — four kennismigrant salary-threshold cards (30+, <30, graduate, researcher).
10. **Policy shift** — vertical timeline of the 30%→27% ruling + a permits-decline column chart.
11. **Regional differences** — provincial tension meters + a "13 of 35 regions" callout box.
12. **Outlook 2026–27** — light statement; three directional forecast cards.
13. **Five things to remember** — light numbered editorial takeaways.
14. **Sources** — two-column mono citation list + reuse note.

## Fonts & Colors
**Fonts (role-based).** `Georgia` — serif display for titles/statements (editorial gravitas);
`Helvetica Neue` — sans for body, data, and hero numerals (lining figures, so "2026"/"€5,942"
stay even-height and on one line); `Courier New` — mono chrome for eyebrows, captions, page
markers and the sources list (a quiet "data-report" signature). *Portability note:* Helvetica
Neue is a macOS system font — on Windows substitute Arial (also lining-figure) in
`build_nl.py`'s `set_palette(font=…)`; Georgia and Courier New are cross-platform.

**Colors — a semantic contract (each hue means one thing deck-wide).**
- **Amber `#D8542A`** = *scarcity / demand / labour-market tightness* — the protagonist metric,
  the emphasised bar, the reference average, the "now" number.
- **Teal `#0E5C63`** (+ lighter `#2E8A8C`) = *people / supply / policy / wages-to-workers*.
- **Gold `#C08A2E`**, **green `#3E6B57`**, **rust `#9C4722`** = the extra category hues (e.g. the
  five shortage sectors), used only where a set genuinely needs distinct labels — never a neutral
  grey as a live category.
- **Ink `#20242A`** on **warm paper `#F4EFE6`** across the whole deck; the statement slides (cover ·
  outlook · takeaways) and their emphasis cards step down a tonal cream ladder — panel `#FBF8F2`,
  recessed kraft `#ECE4D6`, cover band `#EAE1D2` — for weight and layering without any dark field.
- Body `#4A4E56`, captions `#8A8478`, hairlines `#DED7C8`. All text clears the 4.5:1 contrast floor.

> **Fonts:** This deck uses macOS system fonts (Hiragino Sans GB / PingFang SC / Songti SC for Chinese; Helvetica Neue / Avenir Next / Georgia for Latin). On Windows or other systems, install **Noto Sans CJK SC / Source Han Sans** (and swap Latin display fonts) to reproduce the exact look; otherwise your app will substitute a system font. The online preview is a pixel-accurate render, so it always looks correct regardless of your fonts.
