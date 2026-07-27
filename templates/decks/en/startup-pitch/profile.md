# AirBed & Breakfast — A Seed Pitch Deck, Restaged

A flagship, presentation-grade example deck for the slide-maker public template gallery: a
**seed-round fundraising deck on a near-black stage with a single electric accent**, built from a
real, publicly documented pitch rather than a lorem-ipsum mockup. Every figure on these fourteen
pages comes from the 2008 AirBed & Breakfast seed deck, from reporting published the week the site
launched, or from the founders' own account of the financing — and each page names its source in a
footnote. The look — a flat matte black room, one high-voltage colour used with discipline, and a
number treated as the only thing on screen — is the reusable part: swap the company, keep the
system.

## Template File

- `template.pptx` — the editable 16:9 deck (native text and shapes throughout; fully editable in
  PowerPoint / Keynote). No rasterised layout, no picture-of-a-slide.
- `render/slide01.png … slide14.png` — one 1920×1080 PNG per page (layout proof).
- `build_seed_pitch.py` — the source-of-truth build script (re-run it and the whole deck rebuilds).
- `assets/generated/` — the single text-free atmospheric plate used on the cover, plus
  `manifest.json`, the exact prompt that produced it.
- `assets/icons/` — the recoloured Tabler icon family used on pages 6, 9 and 11.
- `assets/listing_detail.png` — the real 2008 listing page, cropped from page 6 of the original deck.

## Summary

**What it is.** A 14-page English seed pitch, following the shape a fundraise actually takes:
problem → solution → market validation → market size → product → traction → business model → go to
market → competition → why us → team → the ask → sources. It is a *restaging*: the pitch is
presented as it was pitched in 2008, with a single clearly-labelled epilogue on page 13 stating what
actually happened. Every number traces to one of five named sources — the original 14-page deck, the
TechCrunch article published the day the site went live, the founders' own account of the financing,
the attributions printed inside the original deck, and arithmetic computed here and labelled as
such. Nothing is estimated or rounded up. Where the original gave a figure with no source, this deck
says so on the slide instead of laundering it — and where two first-party accounts disagree, it
prints both rather than picking one. Quoted source text is reproduced exactly as printed, the
original's own grammatical slip on page 2 included; wherever this deck speaks in its own voice, the
block is labelled `READING` or `EDITOR'S NOTE`.

**Where it fits.** Any deck whose job is to make an argument under uncertainty and be believed
afterwards: seed and Series A pitches, investor updates, internal funding requests, business-case
decks, board proposals, demo-day talks, strategy readouts. It suits a subject with **real numbers
of mixed quality** — some measured, some cited, some frankly assumed — because the whole visual
system is built around showing which is which. It is a **self-read / screen-shared** deck by default
(static, no click builds), and every page carries a spoken script in the speaker notes if you
present it live.

**How to reuse it — real example content plus a reusable visual system.** Treat the *content* as a
worked example and the *visual system* as the asset. The palette, the two-font pairing, the
confidence meter, the KPI unit, the three title treatments, the spine-and-progress-node chrome and
the per-page citation strip are all defined once at the top of `build_seed_pitch.py`, so re-skinning
is a handful of edits: change the one accent hex, swap the wordmark string, replace the cover plate,
and pour in your own numbers. The structure holds because it is a *shape*, not a decoration — a
problem, a mechanism, proof the demand exists, an honest market, a product, traction, a model, a
channel, a map, a moat, a team, an ask. Swap the content and it still holds. The signature move
survives the swap too, and is the reason to keep it: the meters do not care whose numbers they are.

**One thing this deck is trying to prove.** That a pitch deck can be *loud and honest at the same
time*. It puts the display type at 106 points and then, on the market-size page, renders the biggest
number on the slide as the darkest thing on it — because that is the one figure the original pitch
could not source. Most decks make the big number the brightest. This one lights only what it can
defend.

## Structure

1. **Cover** — a full-bleed dark plate (an air mattress on the floor of an empty loft) under the
   pitch's one line: "Book rooms with locals, rather than hotels." A volt band across the foot
   carries the round, the city and the year.
2. **The problem** — three full-width ledger rows, no cards, in the original deck's own words
   (its own “a important” included). The first two complaints are set quiet; the third — that no
   easy way exists to book a room with a local — is the page's hero, because it is the only one
   that names a missing product.
3. **The solution** — the platform, then SAVE MONEY / MAKE MONEY / SHARE CULTURE hanging off one
   hairline as a three-column grid, with a labelled reading: only the middle one is a business.
4. **Market validation** — two hero KPIs direct on the canvas, 660,000 and 50,000, both lit. The
   demand already exists on both sides; neither incumbent takes a transaction.
5. **Market size** — 2B+ / 560M / 84M on one shared baseline, and the baseline rule runs volt under
   the two sourced figures and goes dark under the third. *(The signature slide.)*
6. **Product** — a three-step rail (search → review → book) beside the real August 2008 listing
   page, placed bare on a hairline frame: the artefact carries its own period browser chrome, so
   the deck does not add a second one.
7. **Traction** — the launch, dated. One shared-axis range bar for San Francisco's nightly rates
   ($10–$175, median $85) and a rail of three readings from the day's TechCrunch report — including
   the 20,000 expected for the convention, which is left unlit because the article gives it without
   a source. The wider $20–$3,000 range is stated in words, not forced onto the same axis, because
   it is a different scale and the article never locates it in a city.
8. **Business model** — the 10% commission as the one lit figure, marked POLICY, then a chain of
   three unlit projections joined by real × and = operators; plus the note that the original page
   carries three different prices — the $25 it prints, the $24 its own stated method produces, and
   the $21 implied by its own source note — and what each does to the forecast.
   *(Signature carried.)*
9. **Go to market** — events as a zero-based bar chart (grey, because the attendances carry no
   source), then partnerships and the Craigslist dual-post.
10. **Competition** — ten named players on two continuous axes, affordable–expensive against
    offline–online. The top-right corner is nearly empty, and that emptiness is the argument.
11. **Why us** — the six claimed advantages as a numbered ledger with icons, reproduced exactly as
    printed, beside a dated editor's note on which of the six was actually a moat.
12. **Team** — three monogram rows and an advisor line; biographies verbatim.
13. **The ask** — the deck's one inverted page: volt ground, near-black type, and all four figures
    of the ask rendered dim with empty meters, because not one of them can be sourced. A near-black
    band across the foot carries the epilogue and the only lit number on the page: what was
    actually raised, from whom and when — including the fact that two first-party accounts
    disagree about the amount. *(Signature carried.)*
14. **Sources & method** — five numbered sources, the four meters defined, the disclosure of which
    original pages were not restaged, and a volt colophon band closing the deck against the cover's.

## Fonts & Colors

**Fonts — deliberately two, split by role.**
- **Helvetica Neue** — everything *spoken*: display numerals, slide titles, body prose, the editor's
  notes. Lining figures, so a 106-point numeral sits on one baseline without bobbing. Sizes run
  8.5 → 124 pt across a seven-token, role-bound scale: display · title 34 · lead 20 · body 16 ·
  sub 13.5 · dense 12 · micro 8.5.
- **Menlo** — everything *metadata*: eyebrows, page markers, axis ticks, unit labels, confidence
  words, source lines, the colophon. If it describes rather than asserts, it is monospaced and
  letter-tracked. This is the whole hierarchy device — the deck has no third font and no italics.
- The two never mix inside a line. A reader learns in one page that mono means "this is a label or a
  citation", which is what lets the display type stay completely unadorned.

**Colours — one accent, one meaning.**
- **Canvas:** flat matte near-black `#0B0B0C`. No gradient, no vignette, no panels, no cards —
  content sits directly on the canvas and is separated by hairlines only. `#141416` raised black on
  the closing colophon.
- **Volt `#D6FF3A`** (17.1:1 on the canvas) — *the* accent, under a rule the deck does not break:
  **volt marks a traced figure, and the deck's own navigation. It never marks the deck's opinions.**
  So it lights the confidence meters, the numerals that earned it, the one policy in the business
  model, the progress node, the title tab and the two bands that bookend the deck — and nothing
  else. Every block where this deck speaks in its own voice is set in plain grey under a `READING`
  or `EDITOR'S NOTE` label, so commentary can never be mistaken for the 2008 page.
- **Unlit `#6E6E6A`** (3.8:1, **display sizes only** — clears the WCAG 3:1 large-text bar, and is
  never used below 40 pt) — its opposite: **a figure the pitch asserts with no source.** An
  assumption, a projection, or the ask.
- **Under-driven volt `#5A6B18`** (5.1:1 on volt ground) — the same "unsourced" meaning, inverted,
  so the ask on page 13 can be the dimmest thing on the brightest page.
- Ink `#F2F2EE` (17.5:1) · secondary `#A6A6A0` (8.0:1) · mono captions `#82827C` (5.1:1). Every text
  hue clears 4.5:1 against its ground and every ratio is **asserted in the build script before a
  single slide is drawn** — the build fails rather than shipping a dim label.
- Hairlines `#26262A` and `#3A3A3E`. They carry all the structure the deck would otherwise need
  boxes for.

**The signature move — the confidence ledger.** Every figure on the deck carries a three-segment
hairline *voltage meter* and is set lit or unlit, so a reader can see at a glance which numbers are
evidence and which are the leap: **MEASURED** (three lit) an observed count published by a third
party at the time · **CITED** (two lit) an external source is named · **UNSOURCED** (none lit, grey
numeral) asserted with no source — an assumption, a projection, or the ask · **POLICY** (one solid
bar, off the scale entirely) something the company sets rather than estimates. The legend appears on
page 5 at its first contrasting use and again in full on page 14. It is a law, not a motif: it binds
on the deck's own ask, where all four figures are unlit on the brightest page in the deck. On page 5
the baseline rule itself goes dark under the unsourced number; on page 8 a chain of projections has
exactly one lit link, and that link is the commission, because a commission is a policy. Colour and
typography are doing the epistemics, which is what makes the deck honest without any page having to
apologise.

**Quiet register on every page.** A left spine hairline with a volt node that descends it as the
deck progresses, a mono `NN / 14` page marker, a footer hairline, and one mono source line per page.
No page is without its citation.

*Font-substitution note:* Helvetica Neue and Menlo are macOS system fonts. A `.pptx` stores font
**names**, not the fonts themselves, so on Windows or Linux they will substitute — the layout holds,
but the character changes. For full portability swap `FONT` / `MONO` at the top of
`build_seed_pitch.py` (Arial or Inter for Helvetica Neue, Consolas or JetBrains Mono for Menlo), or
install the originals. The rendered PNGs in `render/` are the reference for how the deck should look.
