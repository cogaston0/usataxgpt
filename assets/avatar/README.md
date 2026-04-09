# Avatar Walking Assets

## Current state
Only a single static image is present (`femaleOffice.png` in the repo root).
The avatar currently uses a **bob-while-moving** fallback so it still looks
lively, but it is not true frame-based walking animation.

---

## To enable true walking animation

Drop **one** of the following into this folder and follow the matching
instructions in `index.html`:

### Option A — Sprite sheet (preferred)

| Property | Value |
|---|---|
| File name | `femaleOffice_walk.png` |
| Frames | 8 (walking cycle) |
| Frame width | 170 px |
| Frame height | auto (keep aspect ratio of original) |
| Total sheet width | 1360 px (170 × 8) |
| Background | transparent (PNG with alpha) |
| Direction | frames read left → right |

In `index.html`, uncomment the `/* SPRITE SHEET SECTION */` blocks in both
the `<style>` section and the `<script>` section.

### Option B — Individual frame PNGs

| File name pattern | Count |
|---|---|
| `femaleOffice_walk_01.png` … `femaleOffice_walk_08.png` | 8 files |

Each frame must be the same width × height.
Use the JS scaffold already present in `index.html` (search for
`INDIVIDUAL FRAMES SECTION`).

---

## Current placeholder image
`../../femaleOffice.png` — 5 124 × 6 591 px, RGBA PNG, single frame.
