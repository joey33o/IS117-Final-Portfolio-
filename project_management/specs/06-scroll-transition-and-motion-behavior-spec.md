# 06 — Motion Policy and Interaction Spec

## 1. Objective

Ensure motion is minimal, purposeful, and respects reduced-motion preferences. The Brutalist portfolio should not rely on animation to communicate structure.

## 2. Scope

- Define motion policy: no decorative fades
- Respect `prefers-reduced-motion`
- Allow only minimal transitions needed for usability (e.g., focus outlines, skip-link visibility)

## 3. Non-Goals

- No GSAP/ScrollTrigger requirements for this portfolio unless explicitly added later
- No scroll-driven theme transitions

## 4. Dependencies

- Baseline CSS in place (Spec 01)

## 5. Implementation Tasks

- [ ] Add reduced-motion CSS rules
- [ ] Ensure any transitions are subtle and non-essential
- [ ] Avoid scroll-triggered animation dependencies

## 6. Acceptance Criteria

- With reduced-motion enabled, no disruptive motion occurs
- No fade-in animations are required for comprehension

## 7. Verification Steps

1. Enable reduced-motion (OS setting) and verify site remains usable
2. Confirm no scroll-triggered animations exist

## 8. Deliverables

- Reduced-motion CSS rules and documented motion constraints

## 9. Sprint Status Board

### Planned

- [ ] Add reduced-motion fallback rules

### Active

- [ ] (none)

### Completed

- [ ] (none)
