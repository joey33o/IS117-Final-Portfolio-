# Phase 04 — Static Export + GitHub Pages Deployment

## Objective
Make the portfolio deployable to GitHub Pages via static export.

## Scope
- Next.js static export configuration
- GitHub Actions Pages workflow

## Non-Goals
- No custom domain

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
Create this file at repo root:

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
          # Set to '/<repo-name>' if deploying to project pages.
          # Leave empty for user/organization pages.
          NEXT_PUBLIC_BASE_PATH: /<repo-name>
        run: npm run build

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: website/out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Verification Gate
Local:
- From `website/`: `npm run build`
- Confirm `website/out/` exists

GitHub:
- Push to `main`
- Confirm Actions workflow succeeds
- Open Pages URL and confirm assets load and layout matches local
