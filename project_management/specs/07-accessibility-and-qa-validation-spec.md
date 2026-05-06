# 07 — Accessibility and QA Validation Spec

## 1. Objective

Validate that the portfolio is keyboard navigable, readable, and trustworthy (focus visibility, contrast, headings, landmarks), reinforcing the “human-audited” positioning.

## 2. Scope

- Keyboard navigation and focus order
- Visible focus styles
- Heading hierarchy and landmarks
- Contrast and readability checks
- Basic responsive regression checks

## 3. Non-Goals

- No external audit tooling requirement (manual checks are acceptable)
- No full automated testing suite requirement (can add later if desired)

## 4. Dependencies

- Hero + proof block components exist (Specs 04–05)

## 5. Implementation Tasks

- [ ] Add skip link (if needed) and ensure visible on focus
- [ ] Verify heading hierarchy (single H1, consistent H2/H3)
- [ ] Verify focus states for links/buttons
- [ ] Verify contrast in primary and surface areas
- [ ] Validate reading measure and layout at common breakpoints

## 6. Acceptance Criteria

- Keyboard can reach all interactive elements
- Focus indicator is always visible
- Headings are structural and consistent
- Text is readable with constrained measure (no full-width paragraphs on desktop)

## 7. Verification Steps

1. Tab through page and confirm all controls are reachable
2. Confirm focus is visible on CTA and nav links
3. Confirm headings and landmarks are semantically correct
4. Resize to mobile/tablet/desktop and confirm grid discipline remains intact

## 8. Deliverables

- Accessibility fixes documented and implemented
- QA checklist completed in sprint files

## 9. Sprint Status Board

### Planned

- [ ] sprint-07a-heading-and-landmark-audit
- [ ] sprint-07b-focus-order-and-keyboard-flow
- [ ] sprint-07c-contrast-validation
- [ ] sprint-07d-responsive-regression-checks

### Active

- [ ] (none)

### Completed

- [ ] (none)
