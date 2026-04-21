# Project Plan: Hero Single-Project Portfolio

## 1. Objective

Create a production-ready Next.js single-page portfolio using the AGENTS.md structure, sprint discipline, and folder governance.

Primary positioning goal:

- Present a Hero archetype on first read: dependable, high-capacity, human-audited AI engineer.

Primary message goal:

- Place the professional promise in the first viewport: AI-AUGMENTED. HUMAN-AUDITED. BUILT TO SCALE.

## 2. Scope

- Build the runnable web app inside website/
- Use Next.js App Router with static export
- Implement global Brutalist token system with CSS variables
- Implement strict grid and hierarchy system for first-read clarity
- Implement single-project proof framework section with:
  - Block title
  - Artifact
  - Impact
  - Method note:
    - THE CHALLENGE
    - THE ARCHITECTURAL CHOICE
    - THE AUDIT
  - Reliability caption
  - GitHub CTA
- Implement specs table for proof metrics
- Add accessibility checks and reduced-motion handling
- Add GitHub Pages deployment workflow

## 3. Non-Goals

- No custom cursor
- No external database
- No Three.js or 3D rendering
- No user accounts
- No backend API unless required for static content loading

## 4. Required Repository Structure

```text
Final-Portfolio/
├── AGENTS.md
├── Concept.md
├── MyNotes.md
├── project_management/
│   ├── specs/
│   │   ├── 00-work-segmentation-spec.md
│   │   ├── 01-foundation-and-project-setup-spec.md
│   │   ├── 02-content-and-data-modeling-spec.md
│   │   ├── 03-adaptive-navigation-spec.md
│   │   ├── 04-hero-and-opening-composition-spec.md
│   │   ├── 05-single-project-proof-framework-spec.md
│   │   ├── 06-interaction-and-motion-behavior-spec.md
│   │   ├── 07-accessibility-and-qa-validation-spec.md
│   │   └── 08-deployment-and-cicd-spec.md
│   ├── planning/
│   ├── active/
│   └── complete/
└── website/
    └── (all runnable app code, dependencies, and build outputs)
```

## 5. Dependencies

- Node.js LTS
- npm
- Next.js (App Router)
- Tailwind CSS
- GitHub Actions

## 6. Design and System Constraints

- Theme variables must be driven by CSS custom properties
- Adaptive nav must remain sticky
- Editorial hierarchy must be role-based and consistent
- Grid discipline:
  - Mobile: 4 columns
  - Tablet: 6 columns
  - Desktop: 12 columns
- Spacing must be token-driven
- Contrast and focus must be accessible
- Reduced-motion preferences must be respected

Brutalist constraints:

- Heavy type hierarchy with high contrast
- 2px to 3px structural borders
- No rounded corners
- No decorative fade-in effects

## 7. Global Theme Variable Targets

- --bg-color: #F3F3EF
- --text-color: #101010
- --surface-color: #FFFFFF
- --border-color: #111111
- --accent-color: #0A84FF
- --font-primary: 'Inter', system-ui, sans-serif
- --space-1 through --space-8: tokenized spacing scale

## 8. Component Plan

- Hero.tsx
- AdaptiveNav.tsx
- ProjectProofBlock.tsx
- MethodNote.tsx
- SpecsTable.tsx
- PrimaryCTA.tsx

## 9. Acceptance Criteria

### 9.1 First-Read Hero Validation

- First viewport contains the full promise statement
- Headline, support copy, and GitHub CTA are visible in first read flow
- First proof artifact appears without requiring deep scrolling
- Archetype signal reads as dependable and engineered, not template-like

### 9.2 Adaptive Nav

- Sticky top behavior is always maintained
- Border remains high-contrast and structurally visible
- Keyboard focus states are always visible on nav links

### 9.3 Editorial + Brutalist Proof Layer

- First screen communicates Hero promise
- First proof element appears near top reading flow
- Single-project proof includes all required proof framework parts
- CTA label is exactly: AUDIT MY CODE ON GITHUB
- Specs table is visible and readable
- Layout uses strict grid, hard edges, and tokenized spacing only

### 9.4 Accessibility and Motion

- Keyboard navigation works throughout
- Focus states are visible in both visual modes
- Color contrast passes practical readability checks
- Reduced-motion fallback prevents disruptive animation
- No decorative motion is required for comprehension

### 9.5 Human-Audited Proof Evidence

- Method note must include a concrete manual audit record
- Audit record must include at least one defect found and one fix verified by hand
- Specs table must include measurable quality signals:
  - Test coverage or test count
  - Performance metric (for example load timing)
  - Stack summary
  - Validation status

### 9.6 Build and Deployment

- npm run build succeeds from website/
- Static output generated and deployable to GitHub Pages
- Production page retains visual integrity and readable hierarchy

## 10. Verification Steps

1. Run install/build commands from website/ only
2. Verify first viewport contains promise, support copy, and CTA
3. Verify first proof artifact appears early in reading flow
4. Verify proof framework content order and CTA label
5. Verify human-audit evidence is concrete and measurable
6. Verify keyboard/focus/contrast checks
7. Verify reduced-motion behavior
8. Verify static export and Pages workflow

## 11. Deliverables

- A complete website/ Next.js app
- project_management/specs multi-spec package
- project_management/planning sprint files
- .github/workflows/deploy.yml
- next.config.ts configured for static export and project pages pathing

## 12. Multi-Spec Package Plan

Each spec file must contain:

1. Objective
2. Scope
3. Non-Goals
4. Dependencies
5. Implementation Tasks
6. Acceptance Criteria
7. Verification Steps
8. Deliverables
9. Sprint Status Board

Planned spec files:

- 00-work-segmentation-spec.md
- 01-foundation-and-project-setup-spec.md
- 02-content-and-data-modeling-spec.md
- 03-adaptive-navigation-spec.md
- 04-hero-and-opening-composition-spec.md
- 05-single-project-proof-framework-spec.md
- 06-interaction-and-motion-behavior-spec.md
- 07-accessibility-and-qa-validation-spec.md
- 08-deployment-and-cicd-spec.md

## 13. Sprint Work Style and Rules

- All not-started sprint files live in project_management/planning/
- Only one sprint file can exist in project_management/active/ at a time
- Completed sprint files move to project_management/complete/
- Large tasks must be split into small, focused sprints
- Each sprint must minimize file churn and avoid mixed concerns

## 14. Sprint Backlog (Initial)

- sprint-01a-init-nextjs-in-website.md
- sprint-01b-configure-tailwind-and-postcss.md
- sprint-01c-create-layout-and-global-tokens.md
- sprint-01d-verify-build-and-root-restrictions.md
- sprint-02a-define-content-types.md
- sprint-02b-create-single-project-dataset.md
- sprint-02c-add-proof-copy-and-claims-mapping.md
- sprint-02d-validate-proof-content-consumers.md
- sprint-03a-build-sticky-nav-shell.md
- sprint-03b-add-brutalist-style-state.md
- sprint-03c-add-high-contrast-accessible-nav-state.md
- sprint-03d-keyboard-and-focus-nav-validation.md
- sprint-04a-hero-headline-and-lead-structure.md
- sprint-04b-grid-aligned-asymmetry-layout.md
- sprint-04c-hero-top-visual-and-artifact-placement.md
- sprint-04d-typography-measure-and-rhythm-polish.md
- sprint-05a-proof-block-title-and-artifact.md
- sprint-05b-impact-and-caption-clarity.md
- sprint-05c-method-note-challenge.md
- sprint-05d-method-note-architectural-choice.md
- sprint-05e-method-note-human-audit-evidence.md
- sprint-05f-github-cta-and-click-flow.md
- sprint-06a-hero-first-viewport-verification.md
- sprint-06b-specs-table-metrics-and-labels.md
- sprint-06c-brutalist-border-and-grid-polish.md
- sprint-06d-reduced-motion-fallbacks.md
- sprint-07a-heading-and-landmark-audit.md
- sprint-07b-focus-order-and-keyboard-flow.md
- sprint-07c-contrast-validation-both-themes.md
- sprint-07d-responsive-regression-checks.md
- sprint-08a-next-config-static-export.md
- sprint-08b-github-pages-workflow.md
- sprint-08c-deploy-verification.md
- sprint-08d-production-behavior-smoke-test.md

## 15. Completion Gate

A sprint can move to complete only when:

1. All sprint acceptance criteria are checked
2. Verification steps pass
3. npm run build succeeds in website/

## 16. Sprint Status Board

### Planned

- [ ] Approve this Project-Plan.md as baseline governance
- [ ] Generate project_management/specs package files
- [ ] Generate project_management/planning sprint files
- [ ] Initialize website/ Next.js app
- [ ] Implement Hero first-read and proof system
- [ ] Run accessibility and deployment verification

### Active

- [ ] None

### Completed

- [x] Initial planning source review completed
