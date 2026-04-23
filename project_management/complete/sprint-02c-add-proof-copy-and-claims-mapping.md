# Sprint: 02c — Add Proof Copy and Claims Mapping

## Objective
Replace all placeholder copy in `project-proof.ts` with real, brand-aligned Hero archetype content tied to the professional promise "AI-AUGMENTED. HUMAN-AUDITED. BUILT TO SCALE." Wire `page.tsx` to consume data exclusively from `project-proof.ts` (single source of truth).

## Scope
- Rewrite `src/content/project-proof.ts` with specific, evidence-backed copy
- Refactor `app/page.tsx` to import and render from `singleProjectProof`
- Ensure every brand claim maps to a visible proof element on the page
- Add a `Validation Status` metric to the specs table (required by Project-Plan.md §9.5)

## Non-Goals
- No visual/layout changes beyond what's needed to wire data
- No new components
- No new routes

## Dependencies
- `sprint-02a` (types defined in `types.ts`) — complete
- `sprint-02b` (dataset scaffold in `project-proof.ts`) — complete

## Implementation Tasks
- [x] Rewrite proof copy in `src/content/project-proof.ts`
- [x] Refactor `app/page.tsx` to consume `singleProjectProof`
- [x] Add `Validation Status` to specs array
- [x] Run `npm run build` from `website/` — passed ✓

## Acceptance Criteria
- [x] `blockTitle` names the real problem/goal, not "Project Proof Block"
- [x] `artifactSnippet` is a realistic code snippet from this portfolio build
- [x] `impact` is plain-language and specific
- [x] `methodNote.challenge` is concrete and specific to this project
- [x] `methodNote.architecturalChoice` is specific (typed contracts + sprint gates)
- [x] `methodNote.audit` contains at least one named defect and its fix
- [x] `caption` ties directly back to Hero/reliability promise
- [x] `ctaHref` points to the real GitHub repo URL
- [x] `specs` includes: Test Coverage, Performance, Stack, Validation Status
- [x] `page.tsx` renders all fields sourced from `singleProjectProof` (no inline copy duplication)
- [x] Build passes with no errors — `npm run build` ✓

## Verification Steps
1. ✓ `npm run build` ran from `website/` — succeeded with no errors
2. ✓ All proof fields rendered from dataset (no inline copy in page.tsx)
3. ✓ Audit entry names two real defects with their fixes
4. ✓ CTA label is exactly "AUDIT MY CODE ON GITHUB"
5. ✓ Specs table has 4 rows including Validation Status

## Deliverables
- Updated `src/content/project-proof.ts` — real proof copy with concrete audit evidence
- Updated `app/page.tsx` — consumes singleProjectProof as single source of truth
- Build verification: `Next.js 16.2.4 · Compiled successfully · Static pages generated`

## Sprint Status Board
### Planned
- [x] Sprint created

### Active
- [x] Rewrite proof copy and wire page.tsx

### Completed
- [x] Proof copy rewritten with real Hero archetype content
- [x] page.tsx fully wired to singleProjectProof dataset
- [x] Impact section and block-quote caption added to page
- [x] Validation Status metric added to specs table
- [x] Build passing — sprint gate closed
