# Phase 05 - Portfolio Proof Expansion

## Related Spec

`project_management/specs/09-portfolio-proof-expansion-spec.md`

## Objective

Expand the portfolio from a single-project proof page into a three-project proof system that better supports AI-forward product engineering, front-end systems work, and business/e-commerce website positioning.

The implementation should preserve the current portfolio voice while making the role fit clearer:

> AI-augmented product/front-end developer who uses AI for speed, then verifies, documents, and ships maintainable software.

## Scope

- Update hero positioning and supporting copy.
- Replace the current operating model copy with responsible AI workflow language.
- Remove or replace the placeholder faculty note.
- Convert the single proof content model into a reusable project proof model.
- Add three portfolio projects:
  - IS117 Museum - The Celestial Eye
  - AI Support Triage Dashboard
  - Grounded Coffee Co.
- Add a compact project overview section.
- Render one expanded proof block per project.
- Update the closing "Looking For" section.
- Fix visible encoding artifacts.
- Verify the site builds from `website/`.

## Non-Goals

- Do not create real backend services.
- Do not add payment, auth, database, or checkout integrations.
- Do not claim real clients, real revenue, or production AI/ML training.
- Do not create separate full apps for the two new projects during this phase.
- Do not add unnecessary animation.

## File Targets

Likely files to update:

- `website/app/page.tsx`
- `website/app/layout.tsx`
- `website/src/content/types.ts`
- `website/src/content/project.ts`
- `website/src/content/featuredProject.ts`
- `website/src/content/operatingModel.ts`
- `website/src/components/ProjectProofBlock.tsx`
- `website/src/components/FeaturedProjectCard.tsx`
- `website/src/components/OperatingModelSection.tsx`
- `website/src/components/LookingForCard.tsx`

Likely files to add:

- `website/src/content/projects.ts`
- `website/src/components/ProjectsOverviewSection.tsx`
- `website/src/components/ProjectProofCard.tsx`
- `website/src/components/ProjectCaseStudy.tsx`
- `website/src/components/ProofArtifactBlock.tsx`

The exact component split can be adjusted if the existing components can be reused cleanly.

## Implementation Sequence

### Step 1 - Content Cleanup

Fix visible encoding artifacts throughout portfolio-facing copy.

Look for:

- `Â·`
- `â€™`
- `â†’`
- `Ã—`
- `â€”`
- `â€œ`
- `â€`

Replace with normal ASCII equivalents unless a file already clearly supports intentional Unicode.

Recommended replacements:

- `Â·` -> `-` or `|`
- `â€™` -> `'`
- `â†’` -> `->`
- `Ã—` -> `x`
- `â€”` -> `-`
- `â€œ` and `â€` -> `"`

### Step 2 - Update Hero Positioning

In `website/app/page.tsx`, update the role label.

Recommended text:

```text
AI-Augmented Product Engineer - Front-End / Full-Stack Systems
```

Keep the main headline concept, but update the body copy to emphasize implementation plus verification.

Recommended body:

```text
I use AI to move faster through implementation, then verify the result through readable code, accessible UI, deployment checks, and documented decisions.
```

Replace the single-project proof framing with multi-project framing.

Recommended direction:

```text
This portfolio is organized as proof: project need -> artifact -> AI workflow -> human audit -> impact.
```

### Step 3 - Update Metadata and Header Copy

In `website/app/layout.tsx`, update metadata and header copy so the site no longer reads as only a generic hero portfolio.

Recommended metadata:

```ts
export const metadata: Metadata = {
  title: "Joseph Martinez - AI-Augmented Product Engineer",
  description:
    "Front-end and product systems portfolio focused on responsible AI workflows, maintainable UI, and human-audited shipping.",
};
```

Recommended header subline:

```text
Newark, NJ - Seeking front-end, product engineering, and AI workflow internships
```

### Step 4 - Replace Operating Model Copy

In `website/src/content/operatingModel.ts`, update the three operating cards.

Recommended cards:

1. `FRAME THE PROBLEM BEFORE PROMPTING`
   - Define the user, decision, and success criteria before asking AI to generate anything.
2. `GENERATE, TEST, AND REVIEW`
   - Use AI for speed, then validate behavior through code review, edge states, accessibility checks, and build verification.
3. `DOCUMENT THE DECISION PATH`
   - Ship the reasoning, constraints, and audit notes so the next person can maintain the system.

Remove or replace the placeholder faculty note.

Recommended replacement:

```ts
export const facultyNote = {
  eyebrow: "Working Principle",
  quote:
    "AI can accelerate the draft, but the developer owns the decision, the interface, and the release.",
  name: "Portfolio Standard",
  title: "Responsible AI workflow",
  disclaimer: "No placeholder testimonial. This is a stated working principle.",
};
```

### Step 5 - Define Multi-Project Types

Update `website/src/content/types.ts` with a reusable project type.

Suggested shape:

```ts
export type ProjectArtifact = {
  title: string;
  body: string;
  ctaLabel?: string;
  ctaUrl?: string;
};

export type PortfolioProject = {
  id: string;
  title: string;
  summary: string;
  role: string;
  stack: string[];
  status: string;
  proofAngle: string;
  problem: string;
  userNeed: string;
  whatIBuilt: string[];
  aiWorkflow: string[];
  humanAudit: string[];
  impact: string;
  artifact: ProjectArtifact;
};
```

Keep existing types temporarily if components still depend on them during the transition.

### Step 6 - Create Project Dataset

Add `website/src/content/projects.ts`.

Create three entries:

#### IS117 Museum - The Celestial Eye

Focus:

- Front-end systems
- Visual hierarchy
- Accessibility
- Static deployment

Suggested stack:

- Next.js
- TypeScript
- Tailwind CSS
- GSAP ScrollTrigger
- GitHub Pages

#### AI Support Triage Dashboard

Focus:

- AI workflow
- Automation
- Human-in-the-loop review
- Dashboard states

Suggested stack:

- Next.js
- TypeScript
- Tailwind CSS
- Mock AI classifier
- Local sample dataset

Important copy rule:

Do not claim a real trained model. Frame this as a simulated or prototype AI workflow unless a real model/API is later added.

#### Grounded Coffee Co.

Focus:

- E-commerce UX
- Business website
- Product filtering
- Conversion-focused content

Suggested stack:

- Next.js
- TypeScript
- Tailwind CSS
- Local product data
- Static export

Important copy rule:

Do not claim a real client. Frame as a concept storefront or business-site prototype.

### Step 7 - Build Project Overview Section

Add `website/src/components/ProjectsOverviewSection.tsx`.

Purpose:

- Show all three projects early.
- Make each project's proof role obvious.
- Provide anchor links to expanded case-study sections.

Each card should display:

- Title
- Summary
- Role/focus
- Stack chips or compact list
- Status
- CTA to the detailed proof section

### Step 8 - Convert Proof Block Into Reusable Case Study

Either refactor `ProjectProofBlock.tsx` or replace it with:

- `ProjectCaseStudy.tsx`
- `ProofArtifactBlock.tsx`

Each expanded project block should use the same sections:

- Problem
- User or business need
- What I built
- AI-assisted workflow
- Human audit / validation
- Impact
- Key artifact

Keep the structure scannable. Avoid large repeated paragraphs.

### Step 9 - Update Home Page Composition

In `website/app/page.tsx`, target this order:

1. Hero section
2. Projects overview section
3. Operating model section
4. Expanded project proof sections
5. Looking For / contact section

Remove the old single featured project + single proof duplication once the new system covers the same information.

### Step 10 - Update Closing Section

In `LookingForCard.tsx`, update the language.

Recommended headline direction:

```text
Teams looking for a junior product-minded developer who can use AI responsibly, build maintainable front-end systems, document decisions, and validate work before release.
```

Recommended supporting copy:

```text
I am especially interested in front-end, product engineering, and AI workflow internships where careful implementation and clear communication matter.
```

### Step 11 - Responsive and Accessibility Pass

Check that:

- The project overview cards do not become too dense on mobile.
- Expanded case studies remain readable.
- Headings preserve a logical order.
- Anchor links have visible focus styles.
- Buttons and links have descriptive labels.
- No section relies on color alone.
- No placeholder testimonial remains.

### Step 12 - Build Verification

Run from `website/`:

```bash
npm run build
```

The implementation is not complete until the build succeeds.

## Suggested Sprint Breakdown

### Sprint 05a - Copy Alignment and Encoding Cleanup

- Fix encoding artifacts.
- Update hero role and body copy.
- Update metadata and header copy.
- Update closing section copy.

### Sprint 05b - Responsible AI Operating Model

- Replace operating model cards.
- Remove placeholder testimonial.
- Add working-principle card.

### Sprint 05c - Project Data Model

- Add `PortfolioProject` types.
- Create `projects.ts`.
- Draft all three project entries.

### Sprint 05d - Overview Grid

- Add project overview component.
- Render all three projects near the top of the page.
- Add anchor links to each case study.

### Sprint 05e - Multi-Project Proof Blocks

- Refactor proof rendering into reusable case-study components.
- Render one proof block per project.
- Remove old single-project duplication.

### Sprint 05f - QA and Build

- Review copy for honesty and role alignment.
- Check responsive layout.
- Check keyboard focus.
- Run `npm run build` from `website/`.

## Acceptance Criteria

- Three projects are visible in the portfolio.
- Each project has a distinct proof purpose:
  - Museum: front-end systems and deployment.
  - AI Support Triage: AI workflow and human review.
  - Grounded Coffee Co.: business/e-commerce UX.
- Hero and closing copy align with AI-forward product/front-end roles.
- Operating model explains responsible AI use.
- No fake testimonial appears.
- No broken encoding artifacts appear in visible copy.
- No project falsely claims real clients, real metrics, or production ML experience.
- `npm run build` succeeds from `website/`.

## Manual Review Checklist

- [ ] Hero reads clearly in under 10 seconds.
- [ ] Projects overview makes the three proof areas obvious.
- [ ] AI Support Triage does not imply blind automation.
- [ ] Grounded Coffee Co. reads as a business/e-commerce project.
- [ ] Museum project still carries the original class-project proof.
- [ ] Every case study includes AI workflow and human audit.
- [ ] Published copy contains no placeholder language.
- [ ] Build passes.

