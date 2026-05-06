# Phase 02 — Content + Hero + Proof Block (Single-Project Masterclass)

## Objective
Implement the single-project proof framework (artifact/impact/method/audit/specs) driven from local typed content, matching `Concept.md` and `Project-Plan.md`.

## Scope
- Local content model and dataset
- Hero section with promise and primary CTA
- Proof block with required headings and exact CTA label
- Specs table with measurable signals

## Non-Goals
- No extra pages
- No animations or scroll effects

## Important repo notes (from Phase 01)
- `@/*` maps to the `website/` folder root (see `website/tsconfig.json`).
- This phase uses `website/src/` for content + components while keeping App Router in `website/app/`.
- Imports will look like `@/src/...`.

## Create these files

### website/src/content/types.ts
```ts
export type SpecsRow = {
  label: string;
  value: string;
};

export type MethodNote = {
  challenge: string;
  architecturalChoice: string;
  audit: string;
};

export type ProjectProof = {
  blockTitle: string;
  artifactTitle: string;
  artifactBody: string;
  impact: string;
  methodNote: MethodNote;
  caption: string;
  githubUrl: string;
  specs: SpecsRow[];
};
```

### website/src/content/project.ts
Fill with real details later; keep structure stable:

```ts
import type { ProjectProof } from "./types";

export const projectProof: ProjectProof = {
  blockTitle: "Problem: Prove AI output is production-auditable",
  artifactTitle: "Artifact: Portfolio system skeleton",
  artifactBody:
    "Example artifact placeholder: replace with a diagram screenshot, a code excerpt, or a build report snippet that demonstrates real engineering work.",
  impact:
    "Impact placeholder: describe what changed in plain language (e.g., faster build, fewer bugs, clearer architecture, safer AI usage).",
  methodNote: {
    challenge:
      "What was hard: define the real constraint (time, requirements ambiguity, accessibility, static export limitations, etc.).",
    architecturalChoice:
      "What you chose: single source of truth content model + strict grid + token-driven styling to keep changes auditable.",
    audit:
      "Manual audit record (required):\n- Defect found by hand: <describe a specific bug or mismatch you spotted>\n- Fix verified by hand: <describe how you verified the fix (build output, keyboard nav check, etc.)>",
  },
  caption:
    "Reliability caption placeholder: tie the proof back to the Hero promise (dependable, engineered, human-audited).",
  githubUrl: "https://github.com/<your-username>/<your-repo>",
  specs: [
    { label: "Tech stack", value: "Next.js (App Router), TypeScript, Tailwind" },
    { label: "Build", value: "Static prerender (Phase 01/02)" },
    { label: "Tests", value: "<test count or coverage>" },
    { label: "Performance", value: "<metric, e.g., Lighthouse or load timing>" },
    { label: "Validation", value: "Keyboard nav + focus visibility verified" },
  ],
};
```

## Add these components

### website/src/components/PrimaryCTA.tsx
```tsx
type PrimaryCTAProps = {
  href: string;
};

export function PrimaryCTA({ href }: PrimaryCTAProps) {
  return (
    <a
      className="inline-flex items-center justify-center border-[var(--border-w)] border-[var(--border-color)] bg-[var(--surface-color)] px-4 py-3 font-black uppercase tracking-tight"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      AUDIT MY CODE ON GITHUB
    </a>
  );
}
```

### website/src/components/SpecsTable.tsx
```tsx
import type { SpecsRow } from "@/src/content/types";

type SpecsTableProps = {
  rows: SpecsRow[];
};

export function SpecsTable({ rows }: SpecsTableProps) {
  return (
    <div className="border-[var(--border-w)] border-[var(--border-color)]">
      <div className="border-b-[var(--border-w)] border-[var(--border-color)] px-4 py-3 font-black uppercase">
        Specs Table
      </div>
      <dl className="grid grid-cols-1">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-1 gap-2 border-b border-[var(--border-color)] px-4 py-3 md:grid-cols-12"
          >
            <dt className="md:col-span-4 font-semibold">{row.label}</dt>
            <dd className="md:col-span-8">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
```

### website/src/components/ProjectProofBlock.tsx
```tsx
import type { ProjectProof } from "@/src/content/types";
import { PrimaryCTA } from "./PrimaryCTA";
import { SpecsTable } from "./SpecsTable";

type ProjectProofBlockProps = {
  proof: ProjectProof;
};

export function ProjectProofBlock({ proof }: ProjectProofBlockProps) {
  return (
    <section className="grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-12">
      <div className="col-span-4 md:col-span-6 lg:col-span-12 border-[var(--border-w)] border-[var(--border-color)]">
        <div className="border-b-[var(--border-w)] border-[var(--border-color)] p-6">
          <h2 className="text-2xl font-black tracking-tight">{proof.blockTitle}</h2>
        </div>

        <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
          <div className="lg:col-span-7 border-b-[var(--border-w)] lg:border-b-0 lg:border-r-[var(--border-w)] border-[var(--border-color)] p-6">
            <div className="font-black uppercase">{proof.artifactTitle}</div>
            <pre className="mt-4 whitespace-pre-wrap border border-[var(--border-color)] bg-[var(--surface-color)] p-4 text-sm">
              {proof.artifactBody}
            </pre>
          </div>

          <div className="lg:col-span-5 p-6">
            <div className="font-black uppercase">Impact</div>
            <p className="mt-3 max-w-[var(--measure)]">{proof.impact}</p>

            <div className="mt-6 font-black uppercase">Method Note</div>

            <div className="mt-3 border border-[var(--border-color)] p-4">
              <div className="font-black">THE CHALLENGE</div>
              <p className="mt-2 max-w-[var(--measure)]">{proof.methodNote.challenge}</p>
            </div>

            <div className="mt-3 border border-[var(--border-color)] p-4">
              <div className="font-black">THE ARCHITECTURAL CHOICE</div>
              <p className="mt-2 max-w-[var(--measure)]">{proof.methodNote.architecturalChoice}</p>
            </div>

            <div className="mt-3 border border-[var(--border-color)] p-4">
              <div className="font-black">THE AUDIT</div>
              <p className="mt-2 whitespace-pre-wrap max-w-[var(--measure)]">{proof.methodNote.audit}</p>
            </div>

            <div className="mt-6">
              <PrimaryCTA href={proof.githubUrl} />
            </div>

            <p className="mt-6 max-w-[var(--measure)] border-t border-[var(--border-color)] pt-4 text-sm">
              {proof.caption}
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-4 md:col-span-6 lg:col-span-12">
        <SpecsTable rows={proof.specs} />
      </div>
    </section>
  );
}
```

## Wire it into the page

### website/app/page.tsx
Replace with:

```tsx
import { ProjectProofBlock } from "@/src/components/ProjectProofBlock";
import { PrimaryCTA } from "@/src/components/PrimaryCTA";
import { projectProof } from "@/src/content/project";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="border-[var(--border-w)] border-[var(--border-color)] p-6">
        <div className="grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-12">
          <div className="col-span-4 md:col-span-6 lg:col-span-8">
            <h1 className="text-4xl font-black tracking-tight">AI-AUGMENTED. HUMAN-AUDITED. BUILT TO SCALE.</h1>
            <p className="mt-4 max-w-[var(--measure)]">
              I use AI for speed, but I ship only what I can explain, verify, and maintain.
            </p>
            <p className="mt-2 max-w-[var(--measure)]">
              This page is one project, presented as proof: problem → artifact → impact → architectural choice → audit record.
            </p>
            <div className="mt-6">
              <PrimaryCTA href={projectProof.githubUrl} />
            </div>
          </div>
          <div className="col-span-4 md:col-span-6 lg:col-span-4">
            <div className="border border-[var(--border-color)] p-4 text-sm">
              <div className="font-black uppercase">First proof (visible early)</div>
              <p className="mt-2">
                The proof block starts immediately below—no buried content, no template fluff.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProjectProofBlock proof={projectProof} />
    </div>
  );
}
```

## Verification Gate
From `website/`:
- `npm run build`
- Manual checks:
  - CTA label is exactly `AUDIT MY CODE ON GITHUB`
  - Method note headings are exactly:
    - THE CHALLENGE
    - THE ARCHITECTURAL CHOICE
    - THE AUDIT
  - Proof content appears immediately after the hero
