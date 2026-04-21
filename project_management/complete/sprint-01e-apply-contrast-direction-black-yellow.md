# Sprint: 01e apply contrast direction black yellow

## Objective
Apply a single approved contrast direction (black + signal yellow) to establish a stronger Hero/Brutalist visual identity.

## Scope
- Update global design tokens to a black + signal-yellow palette.
- Adjust key UI surfaces so the direction is visible above the fold.
- Apply geometric, angular hero background treatment with black-dominant composition.
- Preserve readability and keyboard-focus visibility.

## Non-Goals
- No structural rewrites of layout or content model.
- No additional feature work beyond visual direction.

## Dependencies
- Completed foundation sprints 01a to 01d
- Existing hero/page shell in website/app/page.tsx

## Implementation Tasks
- [x] Set black/yellow theme tokens in globals.css
- [x] Apply token usage in page-level UI classes
- [x] Add geometric black/yellow hero background treatment
- [x] Validate production build

## Acceptance Criteria
- [x] The page clearly reads as black + signal-yellow direction
- [x] CTA and key borders visibly express the direction
- [x] Text contrast remains readable
- [x] Hero section reads as black-dominant with strong yellow signal geometry

## Verification Steps
1. Run npm run build in website/
2. Review first viewport for contrast direction and hierarchy
3. Confirm focus state remains visible

## Deliverables
- Updated palette tokens and UI class usage
- Build verification evidence

## Sprint Status Board
### Planned
- [x] Sprint created
- [x] Tasks not started

### Active
- [ ] None

### Completed
- [x] Black/yellow direction strengthened and verified
