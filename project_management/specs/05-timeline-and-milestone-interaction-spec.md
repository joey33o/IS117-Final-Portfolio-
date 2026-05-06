# 05 — Proof Block and Artifact Presentation Spec

> Note: This repo is a single-project portfolio. This spec replaces “timeline” with the required single-project proof framework block.

## 1. Objective

Implement the “Single-Project Masterclass” proof block: artifact + impact + method note + specs table + caption + GitHub CTA.

## 2. Scope

- `ProjectProofBlock` component (or equivalent)
- Artifact presentation (image, code snippet, or diagram placeholder)
- Method note with 3 required sub-headers
- Specs table
- Caption tying back to the Hero promise

## 3. Non-Goals

- No complex hover previews
- No multi-step interactions
- No galleries or carousels

## 4. Dependencies

- Content model exists for proof block and specs (Spec 02)
- Token system exists for grid/spacing/borders (Spec 01)

## 5. Implementation Tasks

- [ ] Implement proof block layout in a strict grid
- [ ] Implement method note sub-sections:
  - [ ] THE CHALLENGE
  - [ ] THE ARCHITECTURAL CHOICE
  - [ ] THE AUDIT (must contain concrete manual audit record)
- [ ] Implement `SpecsTable` component
- [ ] Implement CTA button labeled `AUDIT MY CODE ON GITHUB`

## 6. Acceptance Criteria

- Proof block includes all required parts and correct heading labels
- “THE AUDIT” includes at least:
  - one defect found manually
  - one fix verified by hand
- Specs table shows measurable quality signals (not vague claims)
- Layout remains Brutalist: borders, no rounded corners, tokenized spacing

## 7. Verification Steps

1. Confirm proof block fields render from content model
2. Confirm CTA label matches exactly
3. Confirm table is readable at mobile and desktop widths

## 8. Deliverables

- Proof block components
- Specs table component

## 9. Sprint Status Board

### Planned

- [ ] sprint-05a-proof-block-structure-and-specs-table

### Active

- [ ] (none)

### Completed

- [ ] (none)
