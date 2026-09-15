---
name: lay-cong-thuc
description: Adds an F2L setup formula button on the Rubik trainer from a case screenshot or description. Use when the user says "lấy công thức", "lay cong thuc", or asks to add a setup button like F2L -1 that runs a setup sequence.
---

# Lấy công thức F2L

When the user says **lấy công thức ...** (with a screenshot and/or case details), add or update one case card on the trainer.

Also follow `.cursor/skills/rubik-requirements/SKILL.md` and update `docs/rubik-requirements.md`.

## Extract from the source

From the image/text, read:

1. **Case number** — e.g. `F2L 1` → id `F2L -1`
2. **Active slot tab** — map to key:
   - Front Right → `FR`
   - Front Left → `FL`
   - Back Left → `BL`
   - Back Right → `BR`
3. **Setup moves** — the `setup:` box for that slot
4. **Solution algorithms** — every listed solve alg under the active slot (not setup). Normalize `'` → `′`.

## Ids + preview

- Case id: `F2L -{n}` (no slot suffix; slots live under `slots`)
- Preview: `previews/f2l-{n}.png` (or reuse existing `previews/f2l-{n}-r.png` if already present)

## Preview image

1. Create `previews/` if missing.
2. Copy attached case diagram/screenshot to the preview path when available.

## Implement in `index.html`

1. Find `f2lSetups`.
2. If case `id` exists, merge into `slots[FR|FL|BL|BR]`; otherwise append a new case with all four slot keys.
3. **Setup rule (always):** when FR setup is known, derive the other slots as:
   - `FL.setup = FR.setup + ' U'`
   - `BL.setup = FR.setup + ' U2'`
   - `BR.setup = FR.setup + " U′"`
   Do not invent independent FL/BL/BR setups unless the user explicitly overrides.
4. Example shape:

```js
{
  id:'F2L -1',
  preview:'previews/f2l-1-r.png',
  slots:{
    FR:{setup:'F R′ F′ R', solutions:['U R U′ R′','R′ F R F′', '...']},
    FL:{setup:'F R′ F′ R U', solutions:['...']},
    BL:{setup:'F R′ F′ R U2', solutions:['...']},
    BR:{setup:'F R′ F′ R U′', solutions:['...']}
  }
}
```

5. UI (already wired):
   - click case → open options with tabs `FR FL BL BR`
   - active tab shows that slot’s **SETUP** + **GIẢI n**
   - SETUP resets to solved then runs setup; GIẢI runs from current state
6. Validate JS syntax.
7. Update `docs/rubik-requirements.md` if needed.

## Do not

- Auto-run setup when opening the case
- Claim solutions verify arbitrary scrambles
- Delete other cases/slots unless asked
