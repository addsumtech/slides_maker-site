# Attention Is All You Need — a paper-talk deck

A lab-meeting / paper-talk deck that walks an ML-literate room through the Transformer
paper (Vaswani et al., *Attention Is All You Need*, NeurIPS 2017): the problem with
recurrence, the core claim, the encoder–decoder architecture, the attention mechanism and
its equations, multi-head attention, positional encoding, why it wins, results, limitations,
and takeaways. 16 slides, 16:9.

## Template File

`template.pptx` — 16 native slides (fully editable text, shapes, tables, and equations;
no flattened images except the two typeset equation plates and the computed positional-encoding
figure). Rebuildable from `build_transformer.py`.

## Summary

This template is a **worked example, not a skin**: every slide carries real, source-verified
content (BLEU scores, hyperparameters, and equations transcribed from arXiv:1706.03762), so it
reads the way a strong paper-talk actually reads. The value on offer is the **visual system** —
*"The paper, reframed"* — which you can keep while swapping in your own material.

Best for: **research / lab-meeting paper walkthroughs, conference method talks, teaching a
technical concept, and any deck that must express equations and architecture as native, editable
shapes.** The system handles the hard cases most decks fumble: typeset math sized to body text, a
native encoder–decoder architecture diagram, a real *computed* figure (the sinusoidal positional
encoding is generated from the paper's own formula, not drawn by hand), a semantic colour contract
(one hue = one idea, deck-wide), and a light↔dark rhythm that keeps a 16-slide talk from going flat.

**To reuse:** keep the design language (palette, type, the "attention weave" motif, the section-
divider rhythm, the callout / stat-card / native-equation / native-diagram components) and replace
the content. Edit `build_transformer.py` and re-run it, or edit `template.pptx` directly in
PowerPoint / Keynote. The claim ledger, per-slide takeaways, and speaker notes travel with the deck
so the *method* of building it — not just the look — is reusable.

## Structure

1. **Cover** — title, subtitle, authors, venue; dark, with the attention-weave motif.
2. **Why this paper** — the one-idea hook + three grounding facts (2017 · 8 GPUs · the backbone).
3. **Divider 01 — The problem.**
4. **Recurrence forces one step at a time** — native token chain, no-parallelism + fading-signal, O(n) path.
5. **The core claim** — "dispense with recurrence and convolution entirely"; attention alone.
6. **Divider 02 — The architecture.**
7. **Two stacks of six layers** — native encoder–decoder diagram (sub-layers, embeddings, cross-attention, head).
8. **Inside one layer** — native residual + LayerNorm wrapper diagram; the FFN equation.
9. **Divider 03 — The attention mechanism.**
10. **Scaled dot-product attention** — the hero equation (typeset), Q/K/V legend, native op-pipeline, why √d_k.
11. **Multi-head attention** — MultiHead / head_i equations; native head-split diagram; h=8, 64 dims/head.
12. **Positional encoding** — the sinusoid equations + a *real computed* PE figure; why order must be injected.
13. **Why attention wins** — native complexity table (self-attention vs recurrent vs conv) + three advantage tiles.
14. **Results** — 28.4 / 41.8 BLEU hero stats, comparison table, training-cost banner.
15. **Limitations & legacy** — quadratic cost / fixed context, and what was built on top (flagged as added framing).
16. **Takeaways** — three memory points + source; dark closing that bookends the cover.

## Fonts & Colors

**Fonts** (role-based pairing; all present on macOS — flag as a dependency when sharing):
- **Charter** — display serif for headlines and big statements; gives the deck literal "paper" gravitas and keeps it from reading as a generic-sans template.
- **Helvetica Neue** — body, labels, diagram text, and the big lining-figure numerals.
- **Menlo** — mono for tensor shapes / dimensions.
- **Computer Modern** (via typeset equation plates) and **STIX Two Math** (native `equation_native` runs) — the mathematics, so it looks like the paper.

**Colors** — a semantic contract (each hue means one thing, everywhere):
- **Coral `#E5484D`** = *attention / the new idea* — the star accent (darkened to `#BE2A2F` for small text on light; brightened to `#F07872` for labels on dark).
- **Steel-blue `#37678F`** = *the sequential past & the encoder*.
- **Teal `#0E8B93`** = *the decoder* (text variant `#096970`).
- **Amber `#C8974B`** = *positional encoding* (text variant `#926828`).
- **Navy `#132435`** = ink and the dark grounds (cover / dividers / closing).
- **Ivory `#F7F4EE`** = the warm paper interior; **warm white `#FFFDF9`** cards; **hairline `#C4BDAF`**.
Contrast is held at ≥4.5:1 for body-size text (large hero numerals meet the ≥3:1 large-text bar); meaning is never carried by colour alone.
