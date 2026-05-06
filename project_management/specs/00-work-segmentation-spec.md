# 00 — Work Segmentation Spec

## 1. Objective

Establish lightweight execution discipline for building the Hero single-project portfolio inside `website/`.

## 2. Scope

- Define how work is split into small, verifiable phases
- Define implementation governance:
  - `implementation/` contains a small set of phase playbooks
  - Each phase playbook includes the exact commands + code snippets needed to complete the specs
- Define completion gates for moving to the next phase

## 3. Non-Goals

- No implementation work in this spec
- No UI/UX decisions beyond what is already defined in `Concept.md` and `Project-Plan.md`

## 4. Dependencies

- Repository contains `Concept.md`, `MyNotes.md`, `Project-Plan.md`
- Node.js LTS and npm available locally

## 5. Implementation Tasks

- [ ] Create and maintain `project_management/specs/` as the spec source of truth
- [ ] Create and maintain `implementation/` phase playbooks
- [ ] Keep the number of phase files small to reduce churn
- [ ] Enforce “website-only runnable code” rule

## 6. Acceptance Criteria

- Phases are narrow, measurable slices (one outcome per phase)
- Each phase ends with a verification gate
- Phase progression rule:
  - do not start the next phase until the current phase verification steps pass
  - `npm run build` succeeds from `website/` at the end of each phase where it’s applicable

## 7. Verification Steps

1. Confirm folder structure matches governance rules
2. Confirm phase playbooks exist under `implementation/`
3. Confirm runnable app code exists only under `website/`

## 8. Deliverables

- `project_management/specs/00-work-segmentation-spec.md`
- Phase playbooks under `implementation/`

## 9. Status Board

### Planned

- [ ] Create initial phase set (foundation → content/UI → accessibility → deployment)
- [ ] Define verification gates in each phase file

### Active

- [ ] (not used — phases tracked in `implementation/`)

### Completed

- [ ] (tracked by checkboxes inside each phase file)
