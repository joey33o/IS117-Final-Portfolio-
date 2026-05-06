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
  githubUrl: "https://github.com/joey33o/IS117-Museum-",
  specs: [
    { label: "Tech stack", value: "Next.js (App Router), TypeScript, Tailwind" },
    { label: "Build", value: "Static prerender" },
    { label: "Tests", value: "<test count or coverage>" },
    { label: "Performance", value: "<metric, e.g., Lighthouse or load timing>" },
    { label: "Validation", value: "Keyboard nav + focus visibility verified" },
  ],
};
