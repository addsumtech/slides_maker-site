# Chengdu — City Introduction Deck ("Tianfu Editorial")

A 14-slide, 16:9 example deck introducing Chengdu, China — a reference piece for the
slide-maker public template gallery. Built entirely with `deckkit` (native shapes, text
and open-licensed icons; no photos), so it renders identically everywhere and is fully
reproducible from its build script.

## Template File

- `template.pptx` — the deck (14 slides, 16:9, fully editable native objects).
- `build_chengdu.py` — the build script and source of truth; re-run to regenerate the deck.
- `render/slide01.png … slide14.png` — one PNG per slide.
- `assets/icons/` — the recolored Phosphor (duotone) icon family + faint "ghost" plate variants.

## Summary

**What it is.** A city-promotion / travel-talk template shown with *real, verified content*
(Chengdu) rather than lorem-ipsum placeholders — so a reader can see exactly how the layout
system carries facts, numbers, quotes and imagery. It suits city or destination
introductions, travel and culture talks, "place profiles" for tourism boards, relocation or
investment briefings, and any inform-and-inspire deck that mixes hard numbers with warmth.

**How to reuse it.** Treat the *visual system* as the deliverable and swap the *content*:
the palette, type pairing, seal motif, chrome, and the component vocabulary (statement
cover, KPI scorecards, editorial timeline, icon-card grids, change-stat hero, quote + ritual
panel, two-panel reference lists, dark bookends) transfer directly to any subject. Replace
the copy and the icon choices, keep the grid and the semantic colours, and the deck stays
coherent. Every fact here is web-verified as of July 2026; when adapting, re-verify or
soften any figure you can't confirm — the design never depends on a specific number.

**Note on imagery.** The brief allowed AI-generated text-free mood images, but the image
tool was unavailable at build time, so the deck falls back (by design) to a native
icon-and-graphic system: oversized faint duotone icons act as mood plates and a recurring
vermilion 蓉 seal is the brand mark. This keeps the deck 100% portable and reproducible; the
same layouts accept full-bleed photos on the cover / dividers / closing if a photo library
is available.

## Structure

1. **Cover** — dark statement: "Chengdu / 成都 · Land of Abundance" hero, seal, hibiscus plate.
2. **Snapshot** — four KPI scorecards (21M+ people · ¥2tn+ GDP · 315+ Fortune 500 · 2,300 years) + a "Land of Abundance" context bar.
3. **Orientation** — where Chengdu sits: fact list + a jade feature panel (ridge + pinned plain).
4. **History** — alternating editorial timeline: Shu kingdom → Dujiangyan (256 BC) → Brocade City → paper money → today.
5. **Culture** — four icon cards: opera face-changing, Shu brocade, teahouse life, Hibiscus City.
6. **Food (statement)** — dark pivot: "Asia's first UNESCO City of Gastronomy (2010)" + stats.
7. **Food (detail)** — four dish cards under the *málà* flavour idea: hotpot, mapo tofu, dandan, smoked duck.
8. **Pandas (hero)** — change-stat 6 → 244 at the Chengdu Research Base + jade paw feature panel.
9. **Conservation** — stat row (~1,900 wild · IUCN Vulnerable · 6 ranges) + reasons panel + habitat plate.
10. **Pace of life** — pull quote + "30,000+ teahouses" + a "how Chengdu relaxes" panel + the 巴适 / bāshì bar.
11. **Tech** — stat row (¥2tn+ · 315+ · 260M+ players) + three cards: games, electronics, global business.
12. **Getting there** — three transport cards (two airports, HSR, metro) + a 240-hour visa-free transit note.
13. **Travel tips** — two reference panels, SEE (sights + day trips) and KNOW (seasons, spice, cashless, layers).
14. **Closing** — dark bookend: "Come for the pandas, stay for the tea." + Chengdu's own slogan.

## Fonts & Colors

**Fonts (portable; substitute-safe).**
- Display / headings: **Georgia** (serif) — an editorial, travel-magazine voice.
- Body / numerals: **Helvetica Neue** (Arial on Windows) — clean, lining figures for big numbers.
- Chrome / eyebrows / page markers: **Menlo** (Consolas on Windows) — tracked mono labels.
- CJK accents: **Kaiti SC** (brush display, e.g. the 蓉 seal and 成都) + **Hiragino Sans GB** for body CJK.
  Non-macOS machines substitute the CJK faces; the deck is >99% English, so the impact is cosmetic.

**Colors — "Tianfu Editorial" (semantic).**
- Paper `#F5EEE1` (cream) · Ink `#211C18` (warm near-black text + dark statement backgrounds).
- **Lacquer red `#C4442B`** — the primary brand accent (city identity / heat / hibiscus): chrome
  rules, kickers, the recurring 蓉 seal, and the red spine on the dark slides.
- **Bamboo jade `#3F6B54`** — nature / pandas / tea / leisure.
- **Amber gold `#C98A2B`** — heritage / craft / prosperity (and the food-section accent).
- Warm body grey `#55493F`; muted chrome `#7E7365`. Darker hues are used for small-caps labels so
  every text run clears the 4.5:1 contrast floor.
- Rhythm: three dark statement slides (cover · gastronomy · closing) bookend and pivot the warm
  cream interior; each category owns one hue deck-wide (a semantic colour contract).
