import type { ProjectProof } from "./types";

export const singleProjectProof: ProjectProof = {
  slug: "hero-reliability-portfolio",

  blockTitle: "Single-Project Masterclass: AI-Augmented Engineering with Human Audit Gates",

  problemGoal:
    "Demonstrate that AI-assisted development can meet production-grade reliability standards "
    + "when a human engineer owns architecture decisions, quality gates, and defect verification.",

  artifactTitle: "Sprint Gate — Build Verification Contract",

  artifactSnippet: `// Sprint gate enforced after every build
const sprintGate = {
  claim: "AI-AUGMENTED. HUMAN-AUDITED. BUILT TO SCALE.",
  checks: [
    { id: "typed-contracts",   pass: true, verifiedBy: "human" },
    { id: "build-succeeds",    pass: true, verifiedBy: "CI + human" },
    { id: "defect-reviewed",   pass: true, verifiedBy: "human" },
  ],
  status: "verified",
} as const;`,

  impact:
    "Delivered a production-ready static Next.js portfolio with zero build regressions "
    + "across 14 sprint slices — each gated by a human-reviewed acceptance checklist "
    + "before advancing. AI generated the initial scaffold and boilerplate; every "
    + "architecture decision, type contract, and quality check was owned and validated by hand.",

  methodNote: {
    challenge:
      "AI tools produce fast first drafts but introduce invisible gaps: "
      + "placeholder copy that bypasses real claims, inline data that drifts from the "
      + "content model, and build passes that hide semantic inconsistencies. "
      + "The challenge was proving that AI speed and human reliability can coexist "
      + "in a single, auditable workflow.",

    architecturalChoice:
      "Implemented a typed content contract in `src/content/types.ts` so every proof field "
      + "has a compile-time shape — including a literal type lock on `ctaLabel` "
      + "(`\"AUDIT MY CODE ON GITHUB\"`) that makes copy drift a build error, not a visual mistake. "
      + "Sprint slices were kept intentionally narrow so each one had a single testable outcome "
      + "and a gate before the next slice could start.",

    audit:
      "Human review during sprint 02c identified two defects: "
      + "(1) `page.tsx` duplicated all proof copy inline instead of consuming `singleProjectProof` "
      + "— a single data change would not have propagated to the UI. Fixed by refactoring `page.tsx` "
      + "to import and render directly from the dataset. "
      + "(2) The specs table was missing the required `Validation Status` metric from Project-Plan.md §9.5. "
      + "Fixed by adding the metric to the `specs` array with a concrete value. "
      + "Both fixes were revalidated with `npm run build` before sprint close.",
  },

  caption:
    "Reliability is not claimed — it is demonstrated through typed contracts, "
    + "narrow sprint gates, and a named human audit trail. Every element on this page "
    + "traces back to a verified build.",

  ctaLabel: "AUDIT MY CODE ON GITHUB",
  ctaHref: "https://github.com/joey33o/IS117-Final-Portfolio-",

  specs: [
    {
      label: "Test Coverage",
      value: "14 sprint acceptance checklists — each manually verified before close",
    },
    {
      label: "Performance",
      value: "Static Next.js export — zero server round-trips, instant first byte",
    },
    {
      label: "Stack",
      value: "Next.js 15 (App Router) · TypeScript · Tailwind CSS · GitHub Actions",
    },
    {
      label: "Validation Status",
      value: "Build passing · All sprint gates closed · Human audit complete",
    },
  ],
};
