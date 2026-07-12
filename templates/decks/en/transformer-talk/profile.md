# Academic-Editorial · Paper Deep-Dive Deck Template (Transformer example)

## Template File
`template.pptx` — 15 slides, 16:9 (10 × 5.625 in), all English, natively editable (real text / shapes / native charts / typeset equations, no AI-generated imagery).
Companions: `build_transformer.py` (the reproducible build script — the template's "source of truth"), `assets_gen.py` (generates the equation PNGs and the real computed figures), `render/slide01–15.png` (per-slide renders), `template.notes.txt` (exported English speaker notes).

## Summary
This is an "academic-editorial" slide template for **paper deep-dives / lab reading groups / technical talks**: a warm ivory paper ground + serif display titles + sans-serif body + Computer-Modern typeset equations, tied together by one semantic accent color running through the whole deck (vermilion-orange = this paper's method / indigo-teal = the old paradigm it contrasts with). It deliberately avoids the "template look" — no default blue, no grid of generic cards — and instead uses **native graphics purpose-built for the content** to express formulas and architecture: the encoder–decoder diagram, the scaled dot-product attention formula, multi-head parallelism, sinusoidal positional encoding (a real computed heatmap), a BLEU bar comparison, a training-compute meter comparison, and more — every slide a different form.

Good fit for: paper walkthroughs, method explainers, courses/teaching, research reading groups, technical reviews — any **diagram-first talk that needs formulas and structure diagrams**.

**This template ships a "real content example," not placeholders** — the body is a genuine deep-dive of *Attention Is All You Need*, with every number verified. Reuse it as a **transferable visual system**: keep the layout skeleton (paper ground, serif titles, mono eyebrows, semantic colors, the attention-edge motif, the component usage for native diagrams / formulas / charts) and swap the text and data for your own topic. Make changes by editing `build_transformer.py` and rebuilding — never hand-edit the binary — so it stays reproducible.

## Structure (per slide)
1. **Cover** — paper title + English subtitle + authors/source; the "attention-edge" motif top-right.
2. **Background & problem** — RNN hidden-state chain + long-range dependency arc; three pain-point cards (icons).
3. **The claim** — big-type assertion "drop recurrence and convolution, attention alone is enough," three consequence cards + the paper's own quote.
4. **The complexity argument** — Table 1, complexity of three layer types (self-attention row highlighted) + an O(1) takeaway rail.
5. **Architecture overview** — native encoder/decoder stack diagram (sublayers + ×6 + cross-attention dashed link + embeddings/positional encoding).
6. **Scaled dot-product attention** — CM-typeset hero formula + Q/K/V glossary + four-step compute flow.
7. **Why divide by √dₖ** — a four-step cause→effect + a real computed softmax weight-distribution comparison (native chart).
8. **Multi-head attention** — the 8-heads parallel pattern (repeat_row) + Concat/Wᴼ formula + three reasons.
9. **Positional encoding** — sine/cosine formula (CM) + a real computed positional-encoding heatmap (deck palette).
10. **Configuration & training** — base / big dual spec cards + a shared-training-setup strip.
11. **Results** — WMT'14 English→German BLEU zero-based bar chart (big highlighted in orange) + a numeric takeaway rail.
12. **Training efficiency** — three big numbers + a "so" insight band + an English→French training-compute meter comparison (<1/4).
13. **Limits & legacy** — a two-panel "Limitations" (left) / "Legacy" (right) contrast.
14. **Recap** — a five-line numbered spine + a right-hand "in one line" thesis panel.
15. **Closing / references** — a colophon payoff line + source; the "attention-edge" motif echoing the cover.

## Fonts & Colors
**Fonts (cross-platform, editable)**
- Titles (CJK): Songti SC (serif, editorial feel); titles/numerals (Latin): Helvetica Neue.
- Body (CJK): Hiragino Sans GB (safe on macOS, clear weights); Latin body: Helvetica Neue.
- Eyebrows / chrome / page numbers / technical labels: Menlo (monospace, a cool technical signature).
- Equations: Computer Modern (classic LaTeX look), rasterized via `equation_png` — **font-independent, tofu-free**, identical on any machine.
- Tip: if Songti SC is missing on another machine the CJK titles fall back; switch it to Hiragino Sans GB via `set_palette(eadisplay=...)`.

**Colors (a semantic contract — one color, one meaning, throughout)**
- Paper ground `#F4F1E9` (warm ivory) · card `#FBFAF6` · ink body `#1C1D22` · secondary body `#5A5E68` · warm-grey chrome `#6F6656` · warm hairline `#D9D2C4`.
- **Vermilion-orange `#B84020` = attention / this paper's method / Transformer** (the signature signal color, running through titles, eyebrows, emphasis, highlights).
- **Indigo-teal `#16656B` = the old paradigm (RNN/CNN) / contrast baselines / sequential computation**.
- Navy `#2A3F57` = structural neutral (feed-forward, structural blocks) · ochre `#B0873E` = a third-category accent.
- All body text clears ≥ 4.5:1 contrast on its ground; vermilion-orange also meets ≥ 4.5:1 as small text.

> **Fonts:** This deck uses macOS system fonts (Hiragino Sans GB / PingFang SC / Songti SC for Chinese; Helvetica Neue / Avenir Next / Georgia for Latin). On Windows or other systems, install **Noto Sans CJK SC / Source Han Sans** (and swap Latin display fonts) to reproduce the exact look; otherwise your app will substitute a system font. The online preview is a pixel-accurate render, so it always looks correct regardless of your fonts.
