# Portfolio Proof Expansion Spec

## Objective

Expand the final portfolio from a single-project proof page into a multi-project proof system that better matches AI-forward product engineering and front-end/business website roles.

The portfolio should communicate one central promise:

> I am a product-minded front-end / full-stack developer who uses AI responsibly to build, test, document, and ship maintainable software.

## Scope

This spec covers content strategy, project positioning, proof-section structure, and recommended component/data model changes for the portfolio site in `website/`.

The expanded portfolio will feature three projects:

1. **IS117 Museum - The Celestial Eye**
   - Proof role: front-end systems, visual hierarchy, accessibility, deployment.
2. **AI Support Triage Dashboard**
   - Proof role: AI workflow, automation, human-in-the-loop review, product judgment.
3. **Grounded Coffee Co.**
   - Proof role: e-commerce/business website, conversion UX, product content, buyer trust.

## Non-Goals

- Do not claim production AI/ML model training experience unless it is actually built.
- Do not present fictional projects as paid client work.
- Do not overstate business metrics that were not measured.
- Do not create unnecessary backend, database, authentication, or payment functionality.
- Do not edit live portfolio content until the project structure and copy direction are approved.

## Dependencies

- Existing portfolio app in `website/`.
- Existing proof content in `website/src/content/project.ts`.
- Existing featured project content in `website/src/content/featuredProject.ts`.
- Existing components:
  - `FeaturedProjectCard`
  - `ProjectProofBlock`
  - `OperatingModelSection`
  - `LookingForCard`
- AI-forward positioning from `AI-Forward -engineer.txt`.

## Content Strategy

### Hero Positioning

Keep the core idea from the current hero, but make the role clearer.

Recommended label:

```text
AI-Augmented Product Engineer - Front-End / Full-Stack Systems
```

Recommended supporting copy:

```text
I use AI to move faster through implementation, then verify the result through readable code, accessible UI, deployment checks, and documented decisions.
```

The hero should emphasize speed plus accountability, not AI novelty alone.

### Operating Model

Revise the operating model cards so they directly express responsible AI workflow:

1. **Frame the Problem Before Prompting**
   - Define the user, decision, and success criteria before asking AI to generate anything.
2. **Generate, Test, and Review**
   - Use AI for speed, then validate behavior through code review, edge states, accessibility checks, and build verification.
3. **Document the Decision Path**
   - Ship the reasoning, constraints, and audit notes so the next person can maintain the system.

### Testimonial / Faculty Note

Remove or replace the placeholder testimonial before publishing.

Acceptable alternatives:

- A real testimonial with permission.
- A neutral project-context note.
- A "Working Principle" card that does not pretend to quote another person.

Placeholder language should not appear on the published site.

### Looking For Section

Update the closing section to match AI-forward product engineering and business website work.

Recommended direction:

```text
Teams looking for a junior product-minded developer who can use AI responsibly, build maintainable front-end systems, document decisions, and validate work before release.
```

## Project Proof System

Replace the single proof block with a repeatable case-study system.

Each project should include:

- Project name
- One-line summary
- Role / focus
- Stack
- Status
- Problem
- User or business need
- What I built
- AI-assisted workflow
- Human audit / validation
- Intended or measured impact
- Key artifact
- Repo or demo CTA

### Project 1: IS117 Museum - The Celestial Eye

#### Positioning

A scroll-driven museum website that transitions from a terrestrial visual system to a celestial visual system using CSS variables, GSAP ScrollTrigger, and static export deployment.

#### Proof Angle

This project proves front-end craft, responsive layout discipline, accessibility awareness, and deployment follow-through.

#### Problem

Tell a visual story through scroll interaction without sacrificing readability, keyboard access, or static deployment reliability.

#### What I Built

- Next.js App Router site.
- Content modeled as eras and milestones.
- Scroll-triggered theme transition.
- CSS-variable-based design system.
- Static export configured for GitHub Pages.
- Accessibility considerations including reduced motion and focus visibility.

#### AI-Assisted Workflow

AI was used to help scaffold, iterate, and review implementation options.

#### Human Audit

- Reviewed breakpoints.
- Checked paragraph measure.
- Validated keyboard and focus behavior.
- Confirmed reduced-motion behavior.
- Verified static build and deployment configuration.

#### Impact

Demonstrates a complete designed front-end system from concept to deployable artifact.

#### Artifact Ideas

- ScrollTrigger transition excerpt.
- Content model excerpt.
- Responsive layout screenshot set.

### Project 2: AI Support Triage Dashboard

#### Positioning

A human-in-the-loop support dashboard that turns unstructured customer messages into categorized, prioritized review queues with draft response suggestions.

#### Proof Angle

This project proves AI workflow design, automation thinking, structured data handling, review states, and product judgment.

#### Problem

Support teams lose time sorting repetitive messages, identifying urgency, and drafting first responses.

#### What I Built

- Dashboard for incoming support messages.
- Ticket categories.
- Urgency labels.
- Confidence states.
- Suggested reply drafts.
- Approve / edit / reject review flow.
- Empty, loading, error, and low-confidence states.

#### AI-Assisted Workflow

Use a mock or simulated AI classification layer to produce:

- Category
- Urgency
- Summary
- Suggested response
- Confidence score

The UI must make clear that AI suggestions are not final until reviewed.

#### Human Audit

- Every AI output requires approve, edit, or reject.
- Low-confidence items are visually separated.
- Suggested replies are editable before use.
- Evaluation notes compare expected labels against generated labels for a sample dataset.

#### Impact

Shows how AI can reduce sorting work while preserving human responsibility and review.

#### Artifact Ideas

- Ticket schema.
- Sample evaluation table.
- Review queue screenshot.
- State model for approve / edit / reject.

### Project 3: Grounded Coffee Co.

#### Positioning

A responsive e-commerce storefront for a small coffee brand with product discovery, flavor filtering, subscription prompts, and buyer-trust content.

#### Proof Angle

This project proves business-facing web design, conversion UX, product content structure, e-commerce states, and brand trust.

#### Problem

A small coffee brand needs a clear mobile-first storefront that helps buyers compare products quickly and feel confident purchasing.

#### What I Built

- Homepage.
- Product grid.
- Product detail cards.
- Flavor and roast filters.
- Cart summary mockup.
- Subscription CTA.
- FAQ section.
- Shipping / returns trust content.
- Empty cart and sale states.

#### AI-Assisted Workflow

AI can be used to draft:

- Product descriptions.
- Flavor note variations.
- FAQ copy.
- Category metadata.
- First-pass brand voice options.

#### Human Audit

- Review copy for accuracy, tone, and consistency.
- Check product descriptions for buyer clarity.
- Confirm filter labels match product metadata.
- Validate mobile purchase path.
- Confirm accessible form and button labels.

#### Impact

Demonstrates the ability to build a polished business website that supports product comparison, trust, and conversion.

#### Artifact Ideas

- Product data model.
- Filter component screenshot.
- Cart state screenshot.
- Before/after copy example showing AI draft and human-edited final.

## Recommended Content Model

Create a project array, likely in:

```text
website/src/content/projects.ts
```

Recommended data shape:

```ts
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
  artifact: {
    title: string;
    body: string;
    ctaLabel?: string;
    ctaUrl?: string;
  };
};
```

## Recommended Component Changes

The current single-project proof block should become a reusable project proof system.

Recommended components:

- `ProjectsOverviewSection`
- `ProjectProofCard`
- `ProjectCaseStudy`
- `ProofArtifactBlock`

The page should show:

1. Compact three-project overview grid.
2. Expanded case-study block for each project.
3. A consistent proof structure across all projects.
4. One artifact per project to avoid overwhelming the page.

## Acceptance Criteria

- The portfolio contains three project proofs.
- Each project proves a different employer-relevant capability.
- The hero clearly communicates AI-augmented product/front-end positioning.
- The operating model explains responsible AI workflow.
- The proof system includes AI-assisted workflow and human audit sections for each project.
- Grounded Coffee Co. is clearly framed as a business/e-commerce website, not an AI dashboard.
- AI Support Triage Dashboard is clearly framed as human-in-the-loop and does not imply blind automation.
- Placeholder testimonial copy is removed or replaced before publishing.
- Broken encoding artifacts such as `Â·`, `â€™`, `â†’`, and `Ã—` are fixed.
- Claims remain honest and do not imply real clients, real revenue, or production ML experience unless true.

## Verification Steps

- Review page copy for role alignment with AI-forward product engineering.
- Check all three projects for distinct proof value.
- Confirm no placeholder testimonial remains.
- Confirm no fake metrics are presented as real results.
- Confirm all visible text is free from encoding artifacts.
- Run the portfolio build from `website/`:

```bash
npm run build
```

- Review the page at desktop and mobile widths to ensure the expanded proof section remains scannable.

## Deliverables

- Updated portfolio content strategy.
- Three-project proof content model.
- Revised hero, operating model, proof, and closing-section copy.
- Optional new project demo pages or static case-study sections.
- Successful production build from `website/`.

## Sprint Status Board

### Planned

- [ ] Revise hero role label and supporting copy.
- [ ] Replace operating model copy with responsible AI workflow framing.
- [ ] Remove or replace placeholder faculty note.
- [ ] Define `PortfolioProject` content type.
- [ ] Create project content for IS117 Museum.
- [ ] Create project content for AI Support Triage Dashboard.
- [ ] Create project content for Grounded Coffee Co.
- [ ] Convert single proof block into reusable multi-project proof section.
- [ ] Add three-project overview grid.
- [ ] Update closing "Looking For" section.
- [ ] Fix visible encoding artifacts.
- [ ] Run build verification from `website/`.

### Active

- [ ] None.

### Completed

- [ ] None.
