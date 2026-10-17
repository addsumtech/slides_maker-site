# The Charge Report — Periodic Market Report (Global Electric Car Market, Data Year 2025)

## Template File
`template.pptx` — 14 slides, 16:9 (13.333 × 7.5 in), fully editable: native text, native editable charts
(column, line, stacked column, ranked bar), a native choropleth world map (shaded raster + native legend),
a native unit grid and ruled tables built from text and hairlines. Rendered pages: `render/slide01.png …
slide14.png` (1920 × 1080). Reproducible from `build_charge.py`, the source of truth; every number is traced
in `assets/research/claim_ledger.md` and was checked against primary sources (`assets/research/provenance_round1.json`).

## Summary
A **periodic market report in the form of a business newspaper**: the slide-maker example deck for the
**`broadsheet` visual language** (the newspaper front page), on its **salmon / pink-paper ground**. The topic is
the global electric car market in 2025, the latest full year with authoritative data. It runs in news order:
the headline number → ten years of sales and share → the markets compared → a world map of electric share by
country → China, Europe and the United States in brief → prices and affordability → battery prices → public
charging → an IEA pull quote → four things to watch in 2026 → sources.

It suits **annual or quarterly market reports, industry briefings, research newsletters, investor or policy
updates and "state of the market" readouts**: anywhere many verified numbers have to be carried with sources,
read on screen like a well-edited weekly business paper.

**Real example content and a reusable visual system.** Every figure is real and sourced on the page it
appears on (IEA Global EV Outlook 2026 and its Data Explorer, CPCA/CAAM, ACEA, Cox Automotive/KBB,
BloombergNEF, China's NEA, EU and US government sources), with its reference year. What a gallery user takes
away is the system, which still holds when the content is swapped:
- the masthead strip, whose folio names each page's section (MARKETS · CHINA · EUROPE …);
- the **signature device**: figures quoted like share prices, i.e. a ruled agate "markets" table with ▲/▼
  changes, used on the front-page lead, the cover ticker, the map's league tables and the market briefs;
- the front-page lead in three columns (giant figure | lead story with a raised initial | markets column);
- newspaper columns between hairline rules, kickers, Times headlines and a one-slot source line on every page.

Swap the DATA constants and the copy in `build_charge.py`. Every text box is measured from its own words,
so new content re-flows.

## Structure
1. **Cover / front page**: masthead, banner headline ("One in four new cars sold worldwide in 2025 was electric"), standfirst, INSIDE list, and a markets ticker strip (electric share by region, ▲▼ vs 2024).
2. **The headline number** (signature): giant "20m+" figure and "1 in 4" | lead story with a raised initial | "Markets at a glance" agate table.
3. **Sales and share 2015–2025**: lead column + two native charts (sales columns, 2025 in navy; share line).
4. **Markets compared**: stacked native column by region, 2020–2025, + "Who bought them" table.
5. **World map**: native choropleth of electric share by country (60 countries; scale tops out at 60%) + headline column + league tables.
6. **China in brief**: giant 54% retail-share figure, story column, "China in figures" table.
7. **Europe in brief**: ranked native bar chart (≥50% highlighted), story, "Europe in figures" table.
8. **The United States in brief**: two story columns over a full-width labelled chart of quarterly battery-electric sales, Q1 2025 to Q3 2026 (the record quarter, then the credit cliff and a slow recovery).
9. **Prices and affordability**: a wide China column leads (70% in navy), with Germany and the United States beside it; each figure is labelled with its own measure; italic "Elsewhere" strip.
10. **Batteries**: −8% figure + labelled native bar chart of 2025 pack prices ($/kWh), with electric-car packs in navy.
11. **Charging**: unit grid (one square = 100,000 public chargers, China in navy) + world charger table + story.
12. **Comment**: IEA pull quote between rules.
13. **Outlook**: "Four things to watch" for the rest of 2026, in four labelled columns, closed by a compact ticker of the IEA's 2026 expectations (23m, 28%, Europe one in three, China almost 60%), which answers the cover's ticker.
14. **Sources and notes**: two-column source list + definitions.

## Fonts & Colors
**Fonts (by role; all present on both macOS and Windows).**
- **Times New Roman Bold**: masthead, headlines, display figures and table numbers (lining figures, so "20m+" and "2025" stay even).
- **Georgia**: body columns, standfirsts and table names. Digits inside Georgia text are set in Times New Roman so old-style figures never bob.
- **Arial Bold**: meta lines (kickers in capitals, folio strip, chart labels, source lines).

**Colours: a semantic contract on pink paper (`#FBE8D8`, newsprint grain).**
- **Ink `#1A1714`**: headlines and body; **mute `#54493F`**: captions, source lines, rules.
- **Navy `#0F4C81`** (the language's accent) = **electric cars, the page's subject, and a rise ▲**: the 2025 bar, countries past 50%, electric-car battery packs, China's chargers, the US record quarter, every ▲.
- **Claret `#9A1B1E`** = **a fall ▼** only: Canada's and Nepal's share drops, Tesla's EU registrations, US quarters below the year before, the −8% battery price.
- **Fawn `#8E7764`** = **context**: earlier years, other markets, the rest of the world.
- **Steel `#3F75A8` / sky `#8DB1D3`**: Europe and the US, used only where markets are stacked beside navy China (the blue family = electric).

Every table's "vs 2024" header and the cover/lead notes key ▲▼ at first use. No icons: in this editorial
register the kickers, tables and change marks carry the categories.

*Font note: no macOS-only faces are used (Times New Roman, Georgia and Arial ship with both macOS and
Windows), so the deck renders the same on either system.*
