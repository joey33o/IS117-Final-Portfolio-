# 04 — Hero and Opening Composition Spec

## 1. Objective

Deliver a first-viewport Hero composition that instantly communicates the Hero archetype and the promise statement, with proof visible early.

## 2. Scope

- First screen hero layout
- Promise statement in first viewport: `AI-AUGMENTED. HUMAN-AUDITED. BUILT TO SCALE.`
- Supporting copy (2–3 sentences)
- Primary GitHub CTA
- Ensure first proof element appears without deep scrolling

## 3. Non-Goals

- No decorative motion
- No multi-project gallery

## 4. Dependencies

- Foundation layout and tokens (Spec 01)
- Content model for hero text/links (Spec 02)

## 5. Implementation Tasks

- [ ] Build `Hero` component with strict grid layout
- [ ] Add headline + promise + supporting copy
- [ ] Add primary CTA button labeled per `Concept.md`:
  - `AUDIT MY CODE ON GITHUB`
- [ ] Place first proof artifact “near the promise” in reading flow

## 6. Acceptance Criteria

- Promise statement is visible in the first viewport on common laptop sizes
- CTA is visible without scrolling (or within the immediate hero flow)
- First proof element is visible without “deep scroll” (appears immediately below hero or within hero)
- Visual language reads as Brutalist/engineered:
  - strict grid
  - heavy borders
  - no rounded corners
  - no fade-in animations

## 7. Verification Steps

1. Load page at 100% zoom and confirm promise + CTA are visible
2. Scroll slightly and confirm proof element appears immediately

## 8. Deliverables

- `Hero` component
- Updated home page composition to include hero + early proof

## 9. Sprint Status Board

### Planned

- [ ] sprint-04a-hero-headline-and-lead-structure

### Active

- [ ] (none)

### Completed

- [ ] (none)
