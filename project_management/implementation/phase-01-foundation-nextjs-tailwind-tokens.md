# Phase 01 — Foundation (Next.js + Tailwind + Brutalist Tokens)

## Objective
Create a working Next.js App Router project in `website/` with Tailwind enabled and a global CSS-variable token system (Brutalist defaults).

## Scope
- Next.js scaffold (App Router + TypeScript)
- Tailwind + PostCSS
- Global tokens in `app/globals.css`
- Baseline layout shell in `app/layout.tsx` and a minimal `app/page.tsx`

## Non-Goals
- No final hero/proof content
- No deployment yet

## Commands (run from repo root)
1. Create the Next.js app inside `website/`:
   - `cd website`
   - `npm create next-app@latest . -- --ts --app --src-dir --eslint --tailwind`

If the scaffold prompts interactively, choose:
- App Router: Yes
- TypeScript: Yes
- Tailwind: Yes
- src/ directory: Yes

## Required file contents

### website/app/globals.css
Replace with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Colors */
  --bg-color: #F3F3EF;
  --text-color: #101010;
  --surface-color: #FFFFFF;
  --border-color: #111111;
  --accent-color: #0A84FF;

  /* Typography */
  --font-primary: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji",
    "Segoe UI Emoji";

  /* Borders */
  --border-w: 3px;

  /* Spacing scale */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-7: 3rem;
  --space-8: 4rem;

  /* Measure */
  --measure: 68ch;
}

html,
body {
  height: 100%;
}

body {
  background: var(--bg-color);
  color: var(--text-color);
  font-family: var(--font-primary);
}

/* Brutalist defaults: no rounded corners */
* {
  border-radius: 0 !important;
}

/* Visible focus always */
:focus-visible {
  outline: var(--border-w) solid var(--accent-color);
  outline-offset: 2px;
}
```

### website/app/layout.tsx
Replace with:

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hero Portfolio",
  description: "AI-AUGMENTED. HUMAN-AUDITED. BUILT TO SCALE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          <header className="border-b-[var(--border-w)] border-[var(--border-color)]">
            <div className="mx-auto max-w-6xl px-4 py-4">
              <div className="grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-12">
                <div className="col-span-4 md:col-span-6 lg:col-span-12">
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="font-semibold tracking-tight">Your Name</div>
                    <div className="text-sm">Single-Project Portfolio</div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>

          <footer className="border-t-[var(--border-w)] border-[var(--border-color)]">
            <div className="mx-auto max-w-6xl px-4 py-6 text-sm">
              Built with human audit discipline.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
```

### website/app/page.tsx
Replace with:

```tsx
export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-12">
      <section className="col-span-4 md:col-span-6 lg:col-span-12 border-[var(--border-w)] border-[var(--border-color)] p-6">
        <h1 className="text-3xl font-black tracking-tight">
          AI-AUGMENTED. HUMAN-AUDITED. BUILT TO SCALE.
        </h1>
        <p className="mt-4 max-w-[var(--measure)] text-base">
          This is a single-project masterclass portfolio. It prioritizes clarity, auditability, and engineered reliability over
          decorative motion.
        </p>
      </section>
    </div>
  );
}
```

## Verification Gate
From `website/`:
- `npm run dev`
- `npm run build`

Expected:
- Dev server runs
- Build succeeds
- Borders are heavy (3px), corners are square, focus outline is obvious
