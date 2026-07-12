# Jincheng · City Guide Template (Chengdu example, **with mood photography**)

An editorial deck template for **city promotion / travel features / destination guides**, in English.
Chengdu is the real-content example; what it really ships is a **reusable visual system** — swap the
words and data and the same design applies to any city or region. **This is the "with-images" edition:**
three full-bleed, text-free mood photographs (cover skyline, teahouse, panda-in-bamboo) carry the
atmosphere, while every fact, number and label lives in native type and graphics laid over them.

## Template File

- `template.pptx` — the finished deck (14 pages, 16:9, English).
- `build_chengdu.py` — **source of truth**: re-run it to reproduce the whole deck (self-made emblem,
  icon pre-fetch, page-by-page build). English edition — same design and same photography as the
  Chinese original; only the language changes.
- `render/slide01.png … slide14.png` — per-page renders.
- `moodimg/` — the three text-free mood photographs (`cd_cover`, `cd_teahouse`, `cd_panda`).
- `assets/` — build-time assets (`gen/` Sun-Bird emblem PNGs, `icons/` Phosphor icons).

## Summary

**What it is**: an "editorial magazine" city-introduction template. The design language, "Jincheng"
(Brocade City), pairs a warm rice-paper ground + a bookish serif (`Songti SC`) display face + a clean
sans body, with a **semantic colour system** and a **self-made Jinsha "Sun Bird" emblem** as the
through-line brand mark, sealed with a red "蓉" (Róng) chop that bookends cover and colophon. Pages
7 / 11 / 14 go dark for "light-and-shade" beats, giving the 14 pages a rhythm.

**What it's for**: city / city-cluster promotion, tourism-destination guides, investment and city
identity decks, travel itineraries, regional culture features — any case that needs "one restrained,
authored visual system to explain a place clearly."

**Why it's reusable**: content and visuals are **decoupled**. Every fact and figure in the example is
checked against public sources (see `运行记录.md`), but what carries over is the **visual system**: the
colour-as-meaning convention, the layout family (big-number card / timeline / feature card / dark
highlight page / three-day itinerary), the type pairing, and the emblem + chop signature. **To change
cities, swap only the words and data and keep the system.** The three mood photographs sit purely as
atmosphere and hold **no** text or data — every number and label is native type over them — so pages
stay legible, re-typesettable and portable even if the photos are swapped for another city's.

## Structure (page by page)

1. Cover — "Chengdu / Land of Abundance · The Brocade City", oversized display title over the
   morning-mist skyline photo, Sun-Bird emblem + Róng chop.
2. City Profile · Chengdu by the numbers — residents / GDP / area / urbanization as four big figures
   + an alias identity bar (Hibiscus City / Brocade City / Land of Abundance).
3. City Profile · Land & Climate — a "location at a glance" card (position / elevation / rivers) +
   three icon facts on climate, water and flora.
4. History & Culture · 3,000 unbroken years — Jinsha → Dujiangyan → named under Qin → World Heritage,
   as a horizontal timeline.
5. History & Culture · Three Kingdoms & the poet-sage — Wuhou Shrine / Du Fu Cottage feature cards +
   a Du Fu pull quote.
6. History & Culture · The grace of Shu — brocade & embroidery / opera & face-changing / old alleys,
   three colour-coded intangible-heritage cards.
7. Cuisine · City of Gastronomy (dark) — the big "2010" anchor + a chip grid of signature dishes.
8. Giant Pandas · Panda homeland — a "260" big-number card + a share-of-global-population meter +
   a conservation narrative, beside the panda mood photo.
9. Way of Life · Slow living — a covered-bowl-tea pull quote + teahouse / ear-cleaning / nightlife
   facts, beside the teahouse mood photo.
10. Way of Life · A park city below snow peaks — three pillars (birthplace of the idea, etc.).
11. Industry & Tech · The hard core (dark) — an electronics/IT column chart + four KPI cards.
12. Travel Guide · How to do Chengdu — when to go / what to see / getting around, three checklists.
13. Travel Guide · Three days in Chengdu — Day 1/2/3 classic-route cards.
14. Colophon (dark) — "Easy to arrive, hard to leave" sign-off + emblem + source footnote, echoing
    the cover.

## Fonts & Colors

**Fonts (role-based pairing)**
- Display / big type: a serif (`Songti SC`; on macOS it renders as a calligraphic serif, carrying the
  bookish, authored feel). Latin glyphs render in the same family for continuity.
- Body / captions: a clean sans (`Hiragino Sans GB`) — legible and portable.
- Numbers / Latin / kickers: `Helvetica Neue` (lining figures; big numbers stay crisp).
- Section numbers use Roman numerals (I · II · III …) rather than "01/02" — the small move that keeps
  the deck editorial rather than template-stock.
- Portability note: the display face relies on the system font library; on a machine without
  `Songti SC` the titles fall back — substitute another CJK/serif such as `STSong` / a Song/serif
  face (the `.pptx` embeds font tags by name).

**Colour (semantic convention · one colour, one meaning, deck-wide)**
- Rice-paper ground `#F5EFE2` / card `#FBF7EC` / ink `#25201A` / warm-grey body `#4A4034` /
  caption `#8B8271`.
- Brocade red `#BE3A2C` — emphasis, sections I/III/VII, the chop, the sign-off.
- Shu gold `#B9863A` — history & craft (section II), emblem gold.
- Bamboo green `#3E6B52` — nature / pandas / park city (sections IV·V).
- Slate blue `#2E5A69` — industry & tech (section VI).
- Dark event grounds: cuisine `#2A1C18`, tech `#14303A`, colophon `#22211C`.
- The kicker numeral and the short bar under each title take the section's fixed semantic colour, so
  "colour = meaning" acts as a credibility anchor.

**Signature motif**: the Jinsha "Sun Bird" — a twelve-ray rotating sun disc (generated purely
geometrically in PIL, no text) — runs as the emblem / brand mark in every corner, enlarged on the
cover and colophon, and together with the red "蓉" (Róng) chop forms the visual signature.

> **Fonts:** This deck uses macOS system fonts. On Windows, install Noto Sans CJK SC / Source Han Sans to reproduce the exact look; otherwise your app substitutes a system font. The online preview is a pixel-accurate render, always correct.
