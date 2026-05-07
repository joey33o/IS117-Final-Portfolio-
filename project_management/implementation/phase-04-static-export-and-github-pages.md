# Phase 04 — Static Export + GitHub Pages Deployment

## Objective
Make the portfolio deployable to GitHub Pages via static export.

## Scope
- Next.js static export configuration
- GitHub Actions Pages workflow

## Non-Goals
- No custom domain

## Important (avoid the common deployment pitfall)
GitHub Pages has two different deployment modes:
- **GitHub Actions (recommended for this repo):** builds the Next.js static export from [website](website) and publishes [website/out](website/out).
- **Deploy from a branch (not recommended here):** GitHub runs Jekyll against the repository root and tries to render markdown files into a site.

This project is a Next.js static export, so set **Settings → Pages → Source = GitHub Actions**.

## Exact code needed

### website/next.config.ts
Create or replace with:

```ts
import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
```

Notes:
- For GitHub project pages, set `NEXT_PUBLIC_BASE_PATH` to `/<repo-name>` in the workflow.
- For user/organization pages (username.github.io), leave it empty.

### .github/workflows/deploy.yml
Use the workflow file at [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

If you need to recreate it, the key requirements are:
- Runs `npm ci` and `npm run build` from the `website/` folder
- Publishes the exported output from `website/out`
- Sets `NEXT_PUBLIC_BASE_PATH` to `/<repo-name>` for project pages (leave empty for `<owner>.github.io`)
- Writes `website/out/.nojekyll` before uploading

Reference shape (placeholders only):

```yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
          cache-dependency-path: website/package-lock.json

      - name: Install
        working-directory: website
        run: npm ci

      - name: Build
        working-directory: website
        env:
          # For project pages, set this to '/<repo-name>'.
          # For user/org pages (<owner>.github.io), set this to '' (empty).
          NEXT_PUBLIC_BASE_PATH: /<repo-name>
        run: npm run build

      - name: Disable Jekyll
        working-directory: website
        run: touch out/.nojekyll

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: website/out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Verification Gate
Local:
- From `website/`: `npm run build`
- Confirm `website/out/` exists

Deployment note:
- For project pages, avoid root-absolute asset URLs like `src="/hero-poster.svg"` because they resolve to `https://<user>.github.io/...` (missing `/<repo>/`). Prefer relative URLs (`src="hero-poster.svg"`) or prefix with your base path.

GitHub:
- Push to `main`
- Confirm Actions workflow succeeds
- Open Pages URL and confirm assets load and layout matches local
