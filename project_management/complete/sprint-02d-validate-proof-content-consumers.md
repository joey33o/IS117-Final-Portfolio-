# Sprint: 02d — Validate Proof Content Consumers

## Objective
Confirm that every display field in `ProjectProof` is actively consumed by `page.tsx`, that no field is silently dropped, and that a reusable validation gate exists for the content contract.

## Scope
- Audit all `ProjectProof` fields against `page.tsx` rendering
- Write `src/content/validate-proof.ts` — a programmatic field-presence check
- Add `npm run validate` script to `package.json`
- Install `tsx` devDependency for direct TypeScript execution
- Confirm TypeScript type safety at build

## Non-Goals
- No visual changes
- No new routes or components
- No changes to type definitions

## Dependencies
- `sprint-02a` — types.ts (complete)
- `sprint-02b` — project-proof.ts scaffold (complete)
- `sprint-02c` — real proof copy + page.tsx wiring (complete)

## Implementation Tasks
- [x] Field-by-field audit: every `ProjectProof` display field mapped to a render location in `page.tsx`
- [x] Write `src/content/validate-proof.ts` — checks non-empty strings, non-empty specs array, each metric's label+value, ctaLabel literal lock, and audit defect mention
- [x] Add `npm run validate` script to `package.json`
- [x] Install `tsx` as devDependency
- [x] TypeScript build confirms shape — `npm run build` passed (sprint 02c gate)

## Acceptance Criteria
- [x] All display fields of `ProjectProof` have a confirmed render location in `page.tsx`
- [x] `slug` is correctly identified as an ID key (intentionally not rendered)
- [x] `validate-proof.ts` covers: blockTitle, problemGoal, artifactTitle, artifactSnippet, impact, caption, ctaLabel, ctaHref, all methodNote sub-fields, specs array, each metric label+value, ctaLabel literal equality, and audit defect mention
- [x] `npm run validate` is a registered script
- [x] TypeScript build passes — no type errors (verified in sprint 02c)

## Verification Steps
1. ✓ Field audit table: 12/12 display fields consumed; `slug` correctly excluded
2. ✓ `validate-proof.ts` written with 17 checks covering all field paths
3. ✓ `tsx` installed, `npm run validate` script registered in package.json
4. ✓ TypeScript compiler validated full shape via `npm run build` (sprint 02c)
5. ✓ Manual source review: all fields in `project-proof.ts` are non-empty strings with real content

## Deliverables
- `src/content/validate-proof.ts` — content contract validation script (17 checks)
- Updated `package.json` — `validate` script + `tsx` devDependency
- Field consumption audit table (documented below)

## Field Consumption Audit

| Field | Consumed | Location in page.tsx |
|---|---|---|
| `slug` | N/A — ID key | Not rendered (correct) |
| `blockTitle` | ✅ | `<h2>` — proof block heading |
| `problemGoal` | ✅ | `<aside>` — hero First Proof panel |
| `artifactTitle` | ✅ | `<p>` — artifact section label |
| `artifactSnippet` | ✅ | `<pre>` — monospace code block |
| `impact` | ✅ | `<p>` — impact section |
| `methodNote.challenge` | ✅ | `<article>` — The Challenge card |
| `methodNote.architecturalChoice` | ✅ | `<article>` — The Architectural Choice card |
| `methodNote.audit` | ✅ | `<article>` — The Audit card |
| `caption` | ✅ | `<p>` — yellow left-border block-quote |
| `ctaLabel` | ✅ | nav CTA + bottom proof CTA (×2) |
| `ctaHref` | ✅ | nav CTA `href` + bottom proof CTA `href` (×2) |
| `specs[]` | ✅ | `<table>` — dynamic `.map()` over all metrics |

## Sprint Status Board
### Planned
- [x] Sprint created

### Active
- [x] Field audit and validator implementation

### Completed
- [x] All 12 display fields confirmed consumed in page.tsx
- [x] `validate-proof.ts` written with 17 field checks
- [x] `npm run validate` script registered
- [x] `tsx` devDependency installed
- [x] TypeScript build passing — sprint gate closed
