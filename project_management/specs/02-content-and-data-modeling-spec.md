# 02 — Content and Data Modeling Spec

## 1. Objective

Model the single-project content (proof framework + specs table) as local, typed data so the site remains static, fast, and maintainable.

## 2. Scope

- Define content types for:
  - hero promise text
  - single project proof block fields
  - specs table rows
  - outbound links (GitHub)
- Store content locally under `website/src/content/` (JSON/TS/MD — pick one, keep it simple)

## 3. Non-Goals

- No CMS
- No external DB
- No dynamic runtime fetching

## 4. Dependencies

- TypeScript enabled in `website/`

## 5. Implementation Tasks

- [ ] Create content model types/interfaces
- [ ] Create a single source of truth dataset for the project proof block
- [ ] Create a dataset for the specs table (measurable quality signals)
- [ ] Ensure page components consume data (no duplicated hard-coded copies)

## 6. Acceptance Criteria

- All proof framework fields exist (from `Concept.md` and `Project-Plan.md`):
  - Block title (problem/goal)
  - Artifact (visual placeholder / image / code snippet)
  - Impact (plain language)
  - Method note with exactly 3 sub-headers:
    - THE CHALLENGE
    - THE ARCHITECTURAL CHOICE
    - THE AUDIT
  - Caption tying back to the “Hero / Reliable” promise
  - CTA label exactly: `AUDIT MY CODE ON GITHUB`
- Specs table includes measurable signals (at least): test count/coverage, performance metric, stack summary, validation status

## 7. Verification Steps

1. Build compiles with typed content imports
2. Confirm all required proof fields render from data

## 8. Deliverables

- `website/src/content/*` datasets
- `website/src/content/types.ts` (or equivalent) with exported types

## 9. Sprint Status Board

### Planned

- [ ] Define content types for hero/proof/specs
- [ ] Create single-project dataset and wire to UI

### Active

- [ ] (none)

### Completed

- [ ] (none)
