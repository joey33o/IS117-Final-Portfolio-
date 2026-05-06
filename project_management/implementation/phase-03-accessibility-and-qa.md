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

### Heading rules (manual enforcement)
- One `<h1>` on the page (already in hero)
- Proof block uses `<h2>` for the block title
- Sub-headers inside method note remain as plain text or `<h3>` (optional). If you convert them to `<h3>`, keep the label text EXACT.

## Verification Gate
Manual QA (5 minutes):
- Tab from the top:
  - skip link appears on focus
  - focus ring is visible on every interactive element
- Resize checks:
  - phone width: no overflow
  - tablet: grid remains aligned
  - desktop: paragraphs do not become full-width; keep measure controlled
- Build:
  - From `website/`: `npm run build`
