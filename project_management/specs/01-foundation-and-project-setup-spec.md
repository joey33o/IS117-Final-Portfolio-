# 01 — Foundation and Project Setup Spec

## 1. Objective

Initialize a production-ready Next.js App Router project in `website/` with static export capability and repo governance intact.

## 2. Scope

- Create the Next.js app inside `website/`
- Set up TypeScript, Tailwind CSS, and global token approach via CSS variables
- Establish baseline layout shell and routing (`app/layout.tsx`, `app/page.tsx`)
- Ensure root-level restriction is respected (no runnable app artifacts outside `website/`)

## 3. Non-Goals

- No full visual design polish (handled in later specs)
- No complex animations or interactive effects
- No backend services

## 4. Dependencies

- Node.js LTS + npm
- Next.js (App Router)
- Tailwind CSS

## 5. Implementation Tasks

- [ ] Scaffold Next.js App Router project in `website/`
- [ ] Configure Tailwind + PostCSS in `website/`
- [ ] Add global CSS variable tokens (Brutalist tokens from `Project-Plan.md`)
- [ ] Add baseline page shell (header/main/footer skeleton)
- [ ] Validate `npm run build` succeeds from `website/`

## 6. Acceptance Criteria

- `website/` contains the only runnable app source and dependency manifests
- `npm run build` succeeds from `website/`
- Global CSS variables exist for:
  - `--bg-color`, `--text-color`, `--surface-color`, `--border-color`, `--accent-color`
  - spacing tokens `--space-1` … `--space-8`
- No rounded corners and border system is token-driven (no one-off borders)

## 7. Verification Steps

1. From `website/`, run `npm install` (or `npm ci` if lockfile exists)
2. From `website/`, run `npm run build`
3. Confirm no new `package.json` or app folders exist at repo root

## 8. Deliverables

- Next.js App Router project under `website/`
- Tailwind configured under `website/`
- Baseline layout + globals

## 9. Sprint Status Board

### Planned

- [ ] sprint-01a-init-nextjs-in-website
- [ ] sprint-01b-configure-tailwind-and-postcss
- [ ] sprint-01c-create-layout-and-global-tokens
- [ ] sprint-01d-verify-build-and-root-restrictions

### Active

- [ ] (none)

### Completed

- [ ] (none)
