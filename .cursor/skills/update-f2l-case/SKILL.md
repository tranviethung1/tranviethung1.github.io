---
name: update-f2l-case
description: Updates an F2L case in the Rubik trainer from screenshots or supplied moves, including its setup, FR solution list, and cropped cube preview. Use when the user asks to add or update an F2L case such as F2L -2 / FL2, its setup, algorithms, tabs, or preview image.
---

# Update an F2L Case

Use this workflow for every F2L case update. Also read and follow `.cursor/skills/rubik-requirements/SKILL.md`.

## Extract the case data

From the screenshot or user-provided moves, record:

1. Case number: `F2L 2` / `FL2` maps to id `F2L -2` and preview `previews/f2l-2.png`.
2. The setup string, normalized to use `′` rather than `'`.
3. The complete list of algorithms for the active tab. If the source shows `FR`, save those in `slots.FR.solutions` in the same visible order.
4. Any explicitly supplied setups or algorithms for `FL`, `BL`, or `BR`. Do not infer or overwrite them unless the user requests it.

Do not claim an algorithm solves arbitrary scrambles. A solution is only for the recorded case/setup.

## Crop the preview

When an attached screenshot contains a cube diagram:

1. Crop tightly around the cube diagram only; exclude surrounding labels, buttons, cards, and whitespace.
2. Preserve a small even padding around the cube and use a square output canvas. Center the Rubik's visual bounding box horizontally and vertically in that square; do not center on the original screenshot/card, which may contain uneven whitespace. Do not stretch the cube.
3. Save the crop as `previews/f2l-{n}.png` (for F2L 2: `previews/f2l-2.png`).
4. Inspect the saved crop to confirm the Rubik—not its source card—is centered, readable, and has no UI text.
5. If the source image does not contain a usable cube diagram, keep an existing preview or ask the user for one; do not fabricate a cube-state preview.

Use available image-processing tooling. If a script is needed, write it to a temporary location outside the repository or delete it once the crop is saved.

## Update `index.html`

1. Locate `f2lSetups`.
2. If the case id is new, append an entry using this shape:

```js
{
  id:'F2L -2',
  preview:'previews/f2l-2.png',
  slots:{
    FR:{setup:'...', solutions:['...']},
    FL:{setup:'', solutions:[]},
    BL:{setup:'', solutions:[]},
    BR:{setup:'', solutions:[]}
  }
}
```

3. If the id already exists, update only the provided slot data and `preview`; preserve unrelated slots.
4. Put the supplied `FR` setup in `slots.FR.setup` and the supplied algorithms in `slots.FR.solutions`, preserving order exactly.
5. Do not auto-run setup on case opening. `SETUP` must reset to solved and then execute the stored setup. `GIẢI` must run from the current cube state.
6. Keep cube rotations (`x`, `y`, `z`) as explicit formula tokens so subsequent moves run within their reoriented frame.

## Document and validate

1. Update `docs/rubik-requirements.md` with the accepted F2L case id, setup, supplied slot(s), and algorithm list; revise any superseded data.
2. Run JavaScript syntax validation for the module script and `git diff --check`.
3. Confirm the preview path exists and the case uses it.
4. Do not delete another F2L case, slot, or solution unless explicitly requested.
