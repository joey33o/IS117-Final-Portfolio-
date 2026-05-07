# Phase 03 — Accessibility + QA Hardening

## Objective
Make the portfolio keyboard-solid and readable, reinforcing the “human-audited” promise.

## Scope
- Skip link (optional but recommended)
- Landmarks and heading hierarchy
- Focus visibility
- Measure constraints and responsive checks
- Reduced-motion rules

## Non-Goals
- No new sections
- No animations

## Exact code changes

### Add a skip link in website/app/layout.tsx
Insert this immediately inside `<body>` and before the main wrapper:

```tsx
<a
  href="#main"
  className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 border-[var(--border-w)] border-[var(--border-color)] bg-[var(--surface-color)] px-4 py-3 font-black"
>
  Skip to content
</a>
```

Update `<main>` to have an id:

```tsx
<main id="main" className="mx-auto max-w-6xl px-4 py-8">{children}</main>
```

Status: `main` already has `id="main"` in this repo; add the skip link if missing.

### Ensure reduced-motion is respected in website/app/globals.css
Append:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition: none !important;
    animation: none !important;
  }
}
```

Status: Reduced-motion rules already exist in this repo; verify nothing re-introduced animations.

### Add explicit headings for non-obvious sections
Some sections rely on visual labels (cards) rather than semantic headings. Add a screen-reader-friendly `<h2>` and wire `aria-labelledby`.

- `website/src/components/OperatingModelSection.tsx`
  - Add `<h2 className="sr-only">Operating model and faculty note</h2>`
  - Set `aria-labelledby` on the `<section>`

### Heading rules (manual enforcement)
- One `<h1>` on the page (already in hero)
- Proof block uses `<h2>` for the block title
- Sub-headers inside method note remain as plain text or `<h3>` (optional). If you convert them to `<h3>`, keep the label text EXACT.

## Verification Gate
Manual QA (5 minutes):
- Tab from the top:
  - skip link appears on focus
  - focus ring is visible on every interactive element
  - “Contact Me” jumps to the contact card and focus remains visible
- Resize checks:
  - phone width: no overflow
  - tablet: grid remains aligned
  - desktop: paragraphs do not become full-width; keep measure controlled
- Build:
  - From `website/`: `npm run build`
