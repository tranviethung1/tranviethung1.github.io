---
name: rubik-requirements
description: Maintains the Rubik F2L trainer requirements whenever the user changes its functionality, visuals, controls, practice state, or interaction. Use for every requested change to this project.
---

# Rubik Requirements Maintenance

Before changing the Rubik trainer:

1. Read `docs/rubik-requirements.md` and inspect the relevant implementation.
2. Preserve all compatible requirements, especially the white cross on the bottom for F2L practice.
3. Implement the requested change.
4. Update `docs/rubik-requirements.md` in the same change:
   - add newly accepted requirements;
   - revise requirements that changed;
   - remove superseded requirements.
5. Validate JavaScript syntax and check the affected interaction behavior.
6. For any generated solving guide, verify `setup → solution` restores the recorded cubie state and preserves the white cross. Never present a fixed algorithm as a solution for an arbitrary cube state.

Do not silently weaken the F2L practice constraint. If a new request conflicts with it, explain the conflict and ask the user which requirement takes precedence.
