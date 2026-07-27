# Raspberry Pi 5 — A Product Launch Keynote

A flagship, presentation-grade example deck for the slide-maker public template gallery: a
**cinematic dark-stage product launch keynote**, built as a real, source-cited deck rather than a
lorem-ipsum mockup. Every specification, ratio and price on these slides is quoted from an official
Raspberry Pi Ltd document. The look — a deep gradient auditorium with one continuous lighting arc,
where the spec numbers are the only light source — is the reusable part: swap the product, keep the
system.

## Template File

- `template.pptx` — the editable 16:9 deck (native text, shapes and one editable native chart; fully
  editable in PowerPoint / Keynote).
- `render/slide01.png … slide13.png` — one 1920×1080 PNG per slide (layout proof).
- `build_pi5.py` — the source-of-truth build script (re-run to regenerate the deck end to end).
- `assets/generated/` — the six text-free atmospheric plates plus `manifest.json`, the exact prompts
  that produced them.
- `assets/icons/` — the recoloured Tabler icon family used on slides 7, 10 and 11.
- `assets/cache/` — derived rasters (numeral reflections, radial blooms), rebuilt on demand.

## Summary

**What it is.** A 13-page English product launch keynote for the Raspberry Pi 5, following the shape
a real launch takes: cold open → the one big idea → hero reveal → the spec wall → three signature
features → measured performance → ecosystem → price and availability → closing line → sources. Every
figure is traced to a first-party source — the *Raspberry Pi 5 Product Brief* (published April 2026),
Raspberry Pi's own launch and benchmarking posts, two product/announcement pages, three price posts,
and Raspberry Pi Holdings' FY2025 results — and cited in the footnote strip of the slide that uses
it, with the full list on page 13. Nothing is estimated, rounded up, or inferred; where Raspberry Pi
does not publish a number, the deck leaves it out. Where a ratio was *published* rather than
computed, the slide says so. Where two first-party documents disagree, the deck names which one it
followed. The 2026 price rises are not buried: the price ladder carries a grey mark showing what each
variant originally cost.

**Where it fits.** Any launch or reveal that has to land in a dark room and be believed afterwards:
hardware launches, product keynotes, release announcements, spec-led technical reveals, conference
keynote openers, roadmap "here's what we shipped" sessions. It suits a subject with **real published
numbers** — the whole visual system is built around treating a specification figure as the hero
graphic, so it rewards content that has facts to put on screen. It is a **self-read / screen-shared**
deck by default (static, no click builds), and each page carries a spoken script in the speaker notes
if you present it live.

**How to reuse it.** Treat the *content* as a worked example and the *visual system* as the asset.
The palette, the type pairing, the emitting-numeral helper, the `HORIZON` lighting arc, the four
title treatments and the footnote-citation strip are all defined once at the top of `build_pi5.py`,
so re-skinning is a handful of edits: change the three semantic hues, swap the wordmark string,
replace the plates, and pour in your own numbers. The structure holds because it is a *shape*, not a
decoration — a cold open, one idea, a reveal, a wall of evidence, three proofs, measured results, an
ecosystem, a price, one line. Swap the content and it still holds.

## Structure

1. **Cold open** — a full-bleed dark plate and one lit numeral: **2016**, the year RP1 went into
   development. No product name yet.
2. **The one big idea** — "For the first time, a full-size Raspberry Pi runs on silicon built
   in-house", with the three facts underneath it: since 2016, $15m, TSMC 40LP.
3. **Hero reveal** — the numeral **5** alone at display scale, lit and reflected on the stage floor,
   over "The everything computer." and the three headline specs. *(The signature slide.)*
4. **The spec wall** — eight figures direct on the canvas, no cards at all: the numbers ARE the
   layout, and only the two that are *new* on this board (the 16 Gb/s link and the single PCIe lane)
   are lit. The rest of the specification runs as a mono strip along the bottom.
5. **Signature 01 — BCM2712** — the cache hierarchy drawn natively (4 × Cortex-A76 → 2 MB shared L3 →
   LPDDR4X-4267) against a **2–3×** rail.
6. **Signature 02 — RP1** — the topology: BCM2712 over a 4-lane PCIe 2.0 link at 16 Gb/s into RP1,
   fanning out to every interface, with the ×2 / ×3 / ×2 bandwidth uplifts stated underneath. *(The
   lighting arc peaks here.)*
7. **Signature 03 — PCI Express** — a hero **×1** standing in a pool of the deck's own light, and
   what a single exposed lane buys, with Raspberry Pi's own adapter caveat quoted rather than buried.
8. **Measured** — **×2.4** as the slide's light source beside an editable native column chart of
   Raspberry Pi's own Geekbench 6.2 runs (340 → 764, 723 → 1,604). *(The money slide.)*
9. **Measured, everyday** — a before→after dumbbell board over five real workloads, each row carrying
   its own published ratio, attributed to Core Electronics as reproduced in Raspberry Pi's post.
10. **The ecosystem** — the **75 million+** installed base as the protagonist, beside three things
    that actually plug in (MIPI, AI HAT+ 2, the HAT+ standard), over a field of lit boards.
11. **Price & availability** — a zero-based price ladder from $45 to $305, each variant marked with
    what it originally cost, beside the availability and longevity facts.
12. **Closing line** — "The everything computer." on a full-bleed horizon, and the 2036 promise.
13. **Colophon** — the eight first-party sources, numbered, with what each one supplied.

## Fonts & Colors

**Fonts (role-based pairing).**
- **Futura** — display: every title, every statement line, and **every hero numeral**. Geometric,
  cinematic, and a lining-figure face, so "2016", "×2.4" and "$305" stay even-height and on one line
  at 148 pt. Its default leading is very open, so the deck sets `line_spacing≈0.88` on display blocks
  and derives every display block's height from real font metrics rather than from `pt/72`.
- **Helvetica Neue** — body, captions, diagram labels and icon-row copy.
- **Menlo** — mono chrome: the tracked eyebrows, the spec strip, the footnote citations, the footer
  lockup and the page markers. This is the deck's quiet "engineering" voice.
- Type scale: four text tokens (8.0 micro / 9.4 chrome / 11.0 small / 12.5 body) plus one title token
  (27) plus a per-slide hero size — so a slide never invents a size.

**Colours — "Auditorium", a semantic contract on a gradient canvas.**
- **Canvas:** a vertical gradient from `#03060F` (near-black, top) through `#060C24` to `#0B1435`
  (deep indigo, bottom). Panels `#101B40`, hairlines `#24345F`.
- **Cyan `#35E0F0`** = *silicon and measured performance* — BCM2712, RP1, the internal 16 Gb/s link,
  every measured ×N, the eyebrows and the register hairline. The deck's "we built this" hue.
- **Violet `#9A7BFF`** = *interfaces, and what plugs into them* — USB, HDMI, the PCIe lane, the 40-pin
  header, MIPI, HAT+, the AI HAT+, M.2.
- **Raspberry `#F2537E`** = *the product and its commercial facts* — the memory ceiling, the price
  ladder, the installed base.
- **Steel `#6E86B4`** = *Raspberry Pi 4*, the previous generation: on the charts the old numbers do
  not glow.
- Text: ink `#EDF3FF` · secondary `#AEBFDD` · muted `#7E93BC`. Every text hue clears 4.5:1 against the
  canvas, and the spec wall's unlit tier clears the 3:1 large-text bar — both asserted in the build
  script before a single slide is drawn.
- **The lighting arc:** the horizon bloom is not a constant. A `HORIZON` table indexes intensity by
  page, so the light climbs from the cover's floor to a full stage-flood on the RP1 slide and falls
  away to the closer's aurora — one continuous arc rather than thirteen independently lit pages.
- **The one signature move:** a spec number is the slide's only light source — a soft radial bloom
  plus a mirrored, squashed, fading reflection on the stage floor. Both are rasterised rather than
  drawn as shapes, so they render identically in PowerPoint, Keynote and the PNG export. The full
  device appears on three pages only (1, 3, 8); on page 4 the same idea does structural work instead,
  with the numerals becoming the layout and only two of the eight lit.

*Font-substitution note:* Futura, Helvetica Neue and Menlo are macOS system fonts. A `.pptx` stores
font **names**, not the fonts themselves, so on Windows or Linux they will substitute — the layout
holds, but the character changes. For full portability swap `FUT` / `HN` / `MONO` at the top of
`build_pi5.py` (Century Gothic or Jost for Futura, Arial for Helvetica Neue, Consolas for Menlo), or
install the originals. The rendered PNGs in `render/` are the reference for how the deck should look.
