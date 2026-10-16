# The Four Numbers · Portrait Knowledge Carousel Template for Xiaohongshu (Pour-Over Coffee 101 example)

## Template File

- `template.pptx` — the finished deck (10 slides, Xiaohongshu 3:4 portrait, 7.5 × 10 in, English).
- `build_pour_over.py` — **the source of truth**: rerun it to rebuild the whole deck (one function per slide; sources and notes live in `SRC` / `ROWS` / `SOURCES_ALL` / `NOTES`; the four number slides share `numeral_page()`, so swapping the numbers only means editing `NUMBERS` and the call arguments).
- `render/slide01.png … slide10.png` — per-slide renders (1440 × 1920, long edge 1920).

## Summary

**What it is**: a portrait carousel template for Xiaohongshu-style image posts, filled with real content from *Pour-Over Coffee 101*. The visual language is slide-maker's built-in **`poster`**: every slide is one saturated color field, rotating cobalt → acid yellow → ink black → signal orange, so each swipe brings a new color. Headlines and numbers are set at poster scale in Impact. The type is the image, and no pictures are needed.

**Core move: the cover makes a promise, each slide pays it off.** The cover throws a single hook, "Great pour-over comes down to four numbers", with a giant acid-yellow "4" across the middle. Slides 3, 5, 6 and 8 each spend a full page on one number (ratio 1:15–1:17, water temperature 90–96°C, bloom 0:30–0:45, total time 2:30–3:30). All four numbers share one size and one baseline, so as you swipe only the number and the color change. A "THE FOUR NUMBERS n/4" counter in the top-left tells readers where they are. The last slide gathers the four numbers into a ledger-style cheat sheet that is easy to screenshot and save. The labels 01–04 belong to the four numbers alone; the gear and taste slides are deliberately unnumbered so the numbering never means two things.

**Where it fits**: knowledge carousels on Xiaohongshu, WeChat, Instagram and similar feeds: beginner tutorials, parameter lists, mistake-avoidance guides, recipe cards, study notes, product how-tos. It works best for topics that boil down to a few key numbers: fitness (sets · reps · rest · frequency), baking (temperature · time · ratio), personal finance (ratio · years · fees), skincare (order · amount · interval).

**Why it's reusable**: **real example content plus a reusable visual system: swap the content and it still works.** Every number in the example has a public source (the SCA Golden Cup standard, James Hoffmann's V60 recipe published on Hario USA, Crema's V60 guide). Sources sit in the footers and on the last slide, and the deck gives ranges instead of falsely precise figures. There are no "comment 1 below" or "follow to get it" prompts, no external links and no contact details. What carries over is the structure and visual system: hook cover → prep slide → N big-number slides → one non-number "scale" slide → time-stamped steps → contrast slide → cheat-sheet closer. For a new topic, edit only the text, numbers and sources in `build_pour_over.py`; the color rotation, counter kicker, ledger table and source footers follow automatically. Everything is native, editable text and shapes with no images, so it can be reflowed, edited and re-exported on any machine.

## Structure

1. Cover (cobalt) — hook "Great pour-over comes down to four numbers", with "four numbers" highlighted in acid yellow and a giant "4"; the subtitle names the four numbers without giving their values.
2. Before you start (acid yellow) — "Get your gear ready", an unnumbered ruled list: cone dripper + filters / gooseneck kettle / digital scale (ideally with a timer) / grinder.
3. The four numbers · 1/4 (ink black) — big **1:15–1:17**: ratio, 25 g coffee to 375–425 g water.
4. No number to memorize (signal orange) — Grind: medium-fine. A five-step fine-to-coarse scale with medium-fine filled in; "brew runs too fast → go finer / too slow → go coarser".
5. The four numbers · 2/4 (cobalt) — big **90–96°C**: the temperature where the water hits the coffee, about 1 minute off the boil.
6. The four numbers · 3/4 (acid yellow) — big **0:30–0:45**: bloom, with 2–3× the coffee's weight in water.
7. The pour (ink black) — "Bloom, then pour twice": the three timestamps 0:00 / 0:45 / 1:15 are the stars, each with a water-level bar (10–20% / 60% / full).
8. The four numbers · 4/4 (signal orange) — big **2:30–3:30**: total time, from the bloom pour at 0:00 until the dripper stops dripping.
9. Tastes off? (cobalt) — stacked contrast: **Sour** → grind a little finer or brew hotter; **Bitter** → grind a little coarser or brew cooler; get the time into range first, then fine-tune by taste, changing one thing at a time.
10. Pour-over cheat sheet (acid yellow) — ledger-style closer: the four numbers 01–04 plus "＋ Grind", one line of how-to per row, and the full four-line source list at the bottom.

## Fonts & Colors

**Fonts (assigned by role)**
- Display / numbers / headlines: `Impact` (the poster language's display face; set at poster scale it stays tall, even and legible from a distance).
- Body text and sources: `Arial`; page numbers, kickers and small labels: `Courier New` (the kit's meta face).
- Type scale: giant cover "4" at 320pt → the four number slides all at 114pt (same size, same baseline) → labels 52pt → slide headlines 44pt → supporting text 15–22pt → sources 11pt (about 8pt on a phone: quiet but readable).

**Colors (semantic rules · the color field is the swipe rhythm)**
- Color fields rotate by slide: cobalt `#1F3BFF` → acid yellow `#D7FF3B` → ink black `#141414` → signal orange `#FF4B1F`, one cycle every four slides; text color on each slide is picked against its own field (≥4.5:1).
- Ink `#141414` / off-white `#F3F0E8`: body text and big type, swapped according to how light or dark the field is.
- The accent color does one job only: **actions or values you can follow**. Acid yellow on cobalt slides ("→ Grind a little finer…"), cobalt on acid-yellow slides (the four values in the cheat sheet).
- Coffee brown is deliberately avoided: each card jumps out of the feed, and the template carries no "coffee flavor" when reused for any other topic.

**Signature motif**: the "THE FOUR NUMBERS n/4" counter kicker (0/4 on the gear slide) plus the 01–04 labels reserved for the four numbers, all gathered into one small ledger on the cheat sheet.

> Font note: `Impact`, `Arial` and `Courier New` ship with both macOS and Windows, so the English deck renders the same on either platform. If you put Chinese text back in, the build script's East Asian fallback (`Hiragino Sans GB` on macOS; swap in `Microsoft YaHei` or Source Han Sans on Windows) picks it up automatically.
