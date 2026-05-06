# 08 — Deployment and CI/CD Spec

## 1. Objective

Enable static export and GitHub Pages deployment so the portfolio is accessible publicly with repeatable builds.

## 2. Scope

- `next.config.*` configured for static export
- GitHub Actions workflow to build and deploy `website/` output
- Pages pathing (basePath/assetPrefix) for project pages deployment

## 3. Non-Goals

- No server-side rendering requirements
- No custom deployment platform beyond GitHub Pages

## 4. Dependencies

- Next.js project exists in `website/` (Spec 01)
- Repo is hosted on GitHub

## 5. Implementation Tasks

- [ ] Configure Next.js static export:
  - [ ] `output: 'export'`
  - [ ] `images: { unoptimized: true }`
  - [ ] `basePath`/`assetPrefix` set for `/<repo-name>` when needed
- [ ] Add `.github/workflows/deploy.yml` to:
  - [ ] install with `npm ci`
  - [ ] run `npm run build`
  - [ ] upload `website/out/`
  - [ ] deploy via `actions/deploy-pages`

## 6. Acceptance Criteria

- `npm run build` succeeds in `website/` and produces `out/`
- Deployed site loads assets correctly on GitHub Pages

## 7. Verification Steps

1. Run `npm run build` in `website/` and confirm `out/` exists
2. Confirm workflow references `website/` working directory
3. Confirm Pages deployment uses built artifact

## 8. Deliverables

- `website/next.config.*` updated for static export
- `.github/workflows/deploy.yml`

## 9. Sprint Status Board

### Planned

- [ ] sprint-08a-next-config-static-export
- [ ] sprint-08b-github-pages-workflow

### Active

- [ ] (none)

### Completed

- [ ] (none)
