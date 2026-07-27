# BASELINE · Quarterly Business Review deck template (Swiss grid / Netflix Q2 2026 example)

## Template File
`template.pptx` (16:9, 14 pages, English, natively editable; per-page renders in `render/slide01.png … slide14.png`)

## Summary
A **Swiss International Typographic Style grid** template for **quarterly and annual business reviews**, filled out end to end with **real content** — Netflix’s fiscal Q2 2026 (2026-04-01 – 06-30): quarter overview, key-metrics board, revenue and margin trends, regional breakdown, FX breakdown, members and engagement, cost and efficiency, margin bridge, beats and misses, risks, next-quarter priorities, basis and sources.

Where it fits: **quarterly / annual business reviews, board and executive readouts, investor communication, business-unit reviews, monthly operating meetings** — anything that has to explain, in a dozen-odd pages, *what happened this quarter, why, and what to watch next*, while **carrying a heavy load of numbers**, for an internal or external audience.

**The point: this is a real-content example plus a reusable visual system.** Every word and figure comes from the shareholder letter Netflix published on 2026-07-16 and its unaudited consolidated financial statements — each line is checkable, none of it is placeholder text; anything that could not be verified was either left out or written qualitatively. What is genuinely reusable is the **layout language and the chart grammar**: swap the Netflix content for your own company's numbers and you get a review deck of the same quality straight away.

The one thing this template sets out to prove: **a deck can carry very high numeric density and still be elegant.** It never leans on colour blocks, cards, icons or stock imagery to look "designed" — every level of hierarchy is carried by size, weight, whitespace and alignment. That is also what makes it the easiest deck in this gallery to reuse: replace the numbers and the copy, and the grid, rules, semantic colour and chart geometry hold the page up for you.

Every page is one example of a "data shape → layout" mapping:
- **Numeral on the rule** (one number becomes the page's horizontal rule; the rule stops at the numeral's **ink** edge, exactly one gutter away)
- **12-cell metric board** (twelve metrics on one screen, each with its year-over-year change and a basis note)
- **Two-register chart** (revenue columns on top, the growth line on its own track below, so neither fights the other)
- **Shared-axis bullet chart** (six quarters against one target line; black is the level, red is the gap to target, same height, continuous)
- **Two 100% stacked bars** (revenue share vs share of the year-over-year increase, aligned one above the other so the mismatch is obvious)
- **Dumbbell double read** (as reported vs FX-neutral; the red segment in the middle *is* the currency effect)
- **Delta-only waterfall** (the margin bridge: the four segments tie out inside the statements)
- **Compact three-rule table** (rules above the header, below it, and at the foot — no zebra striping, no grid lines)
- **Separating what shares an axis from what doesn't** (ratios with different denominators never share one: two percentages share an axis, "6 of the top 10" becomes a ten-cell counter)
- **Two-column comparison / six-row risk table / numbered source page**

## Structure (page by page)
01. Cover — Quarterly Review / Netflix Q2 2026; red rule across the top + a three-fact bar at the foot (revenue / margin / free cash flow)
02. Quarter overview — **hero `12.56`, its baseline *is* the page's horizontal rule**; four columns below the rule (operating income / margin / net income / EPS) + the company's own wording on guidance
03. Key metrics — a dense 4×3 board of twelve metrics, each "label · value · YoY · basis note", no cards, hairlines only
04. Revenue trend — six quarters of revenue columns (zero baseline, hollow Q3 bar = company guidance) + a year-over-year growth line on its own track below; the right rail sets "the company's stated growth drivers" beside "what the company says about Q3"
05. Margin trend — six quarters of operating margin on a shared-axis bullet chart; black runs to the target line, red runs from the target line to the bar end = the gap to target (computed only for fiscal-2026 quarters)
06. By region — revenue share and share of the year-over-year increase as two aligned 100% stacked bars + red dashed leader lines + a seven-column read-out table
07. Two reads on growth — a four-region dumbbell (filled = as reported / hollow = FX-neutral), red segment = the currency effect; two right-hand columns give the dollar amounts
08. Members and engagement — **hero `97` shares a baseline with its unit; the rule picks up from that group**; two live-programming shares (on a shared 0–10% axis) + a ten-cell counter (different denominator, so no shared axis) + this quarter's titles and their disclosed views
09. Cost and efficiency — four cost lines × a seven-column compact table (amount / YoY / % of revenue / margin effect), with the total row tying out
10. Margin bridge (inverted) — **the baseline of the hero `−0.69` is the zero axis of the four-segment waterfall**; technology and development alone is 84% of the entire decline
11. Beats and misses — a two-column comparison, each row naming its benchmark (vs guidance / vs the year-ago quarter / vs last quarter)
12. Risks — six rows, each "risk · evidence this quarter · metric to watch · where the evidence comes from (company disclosure / deck calculation / deck observation)"
13. Next quarter (inverted) — Q3 guidance + full-year progress bars + five announced actions
14. Basis and sources — five numbered sources + eleven basis notes + disclaimer

## Fonts & Colors
**Type (deliberately just two faces)**
- Latin / figures: **Helvetica Neue** (the Swiss original; lining figures, so hero numerals and table numbers never bob up and down; falls back to Arial / Helvetica cross-platform)
- East Asian slot: **Hiragino Sans GB** (render-loop-safe on macOS; falls back to Microsoft YaHei / Noto Sans CJK SC), kept only for any CJK proper noun. **PingFang is deliberately banned** — LibreOffice renders it as a script face
- **There is no third face.** Eyebrows, page numbers, the tick column and footnotes all run in Helvetica Neue and are separated by **weight (Regular / Bold) and tracking** — which is exactly the Swiss doctrine: hierarchy is carried by size and spacing, not by a family switch
- The whole deck uses six size tokens: `7 / 9.5 / 12 / 18 / 20 / 26`, plus hero numerals at `90 / 110 / 140`. No page uses more than five levels
- The components auto-attach an `<a:ea>` font to every run, so mixed scripts never garble or tofu
- Minus signs use the ASCII hyphen-minus rather than U+2212: in testing, LibreOffice renders U+2212 at East-Asian width (whatever `<a:latin>` / `<a:ea>` say), which opens a jarring gap inside a string like "YoY −28.0%". The ASCII minus sits tight against the digits, which is also standard practice in financial tables
- Every text box has zero left and right inset, so text ink and rule endpoints land on the same grid line
- **English dash convention**: the en dash (–) is the range separator (`51,000–51,400`, `10–19`, `[1]–[5]`, `2026.04.01 – 06.30`); the em dash (—) is reserved for the parenthetical break. A not-applicable table cell keeps the em dash. Mixing the two is the commonest carry-over when a CJK deck is translated, since — is the correct range dash in Chinese
- **Apostrophes and quotes are both typographic** (U+2019 / U+201C / U+201D), including the elided quarter tags (`Q2’26`). A straight ASCII tick beside a curly quote in the same sentence is the tell of a half-converted deck

**Colour (a semantic system — one colour, one meaning)**
- Canvas: near-white `#F4F4F2`; primary ink: **pure black `#000000`**
- Secondary ink `#55554F` (7.4:1) · tertiary ink `#6E6E68` (4.66:1) · hairline `#C9C9C3` · tick line `#D2D2CC`
- **Accent red `#D0021B` (5.15:1) = change / delta, and nothing else**: year-over-year Δ, the gap to target, the FX effect in Δpt, waterfall segments, the mismatch between stock and growth. **Levels and stocks are always pure black** — including a balance like net debt that is itself the difference of two stocks (it is a balance, not a change); numbering, indices and source markers are black too. Sign is encoded by **geometry** (which side of the axis the bar sits on, which end the dot is at, whether the red segment falls left or right of the target line) — never by a second colour. This is the single cheapest and most effective rule in the whole system
- The grey ladder `#000000 / #4A4A46 / #8E8E88 / #C4C4BE` is used **only to split one quantity into shares** (the regional share bars), never as categorical colour
- Inverted register (only P10 diagnosis and P13 decision): ground `#111111`, type `#FFFFFF` / `#A8A8A2`, hairline `#3A3A36`, accent red lifted to `#FF4A5E` (same meaning, 5.75:1 against the dark ground). **Inverted = the two pages where you should stop**, and they appear as a pair rather than a one-off; the cover stays near-white
- **No gradients, no rounded corners, no shadows, no card fills, no icons, no stock imagery.** Everything sits directly on the canvas, separated by hairlines alone
- Signature motif, the **tick column**: a 14-notch ruler down the left edge of every page; the current page's notch grows longer, turns black and carries the page number — both navigation and a statement that this deck was measured
- Signature move, the **numeral on the rule**: the lead figure is set at 90–140pt and **its baseline replaces the horizontal rule that page would otherwise draw**; the rule stops at the numeral's edge (P02 / P08 / P10). Every hero value is also restated once at body size on the same page, so fidelity and legibility never depend on the hero numeral

**Grid**: 12 columns (0.62in symmetric outer margins, 0.12in gutter, 0.62in column width, 0.74in pitch), 0.18in baseline rows. Every element lands on a column edge; the four title treatments (heavy rule / no rule with a right-hand stamp / red vertical bar / hairline above) each take 25% of the rotation, and no two adjacent pages repeat.

**Charts**: everything is drawn from native shapes with coordinates derived from the data, so any element can be selected and edited in PowerPoint. Every magnitude bar is zero-based, the axis spans every bar, and value→coordinate goes through one shared mapper, so the geometry and the numbers can never drift apart.

**Portability**: `.pptx` stores font names only. Opened on a machine without Helvetica Neue / Hiragino Sans GB, it falls back to Arial / Microsoft YaHei (metrics shift slightly; the grid and layout hold). This template uses the macOS system fonts Helvetica Neue and Hiragino Sans GB; on Windows, substitute Arial + Microsoft YaHei, or install Helvetica Neue / Noto Sans CJK SC for identical results.
