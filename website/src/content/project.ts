import type { ProjectProof } from "./types";

export const projectProof: ProjectProof = {
  blockTitle: "Proof: AI-assisted speed, human-audited shipping",
  artifactTitle: "Artifact: Scroll-triggered theme system (excerpt)",
  artifactBody:
    "// Museum: theme transition bootstrap\n\n\"use client\";\n\nimport { useEffect } from 'react';\nimport gsap from 'gsap';\nimport { ScrollTrigger } from 'gsap/ScrollTrigger';\n\nexport function TransitionTrigger() {\n  useEffect(() => {\n    gsap.registerPlugin(ScrollTrigger);\n    const rootBody = document.body;\n\n    const setSpaceEra = (enabled: boolean) => {\n      rootBody.classList.toggle('is-space-era', enabled);\n    };\n\n    const bootstrapTrigger = ScrollTrigger.create({\n      id: 'transition-bootstrap',\n      onEnter: () => setSpaceEra(true),\n      onLeaveBack: () => setSpaceEra(false),\n    });\n\n    return () => bootstrapTrigger.kill();\n  }, []);\n\n  return null;\n}",
  impact:
    "Shipped a scroll-driven museum experience that transitions themes reliably, stays accessible (reduced-motion + keyboard), and can be deployed as a static export on GitHub Pages.",
  methodNote: {
    challenge:
      "Translate a museum curation concept (eras + milestones) into a clear reading order that survives responsive layouts, without letting motion override readability.",
    architecturalChoice:
      "Model the content as eras and milestones and render it through reusable components; keep motion minimal and subordinate to hierarchy (headings, measure, spacing tokens). The theme change is a system toggle, not scattered one-off styling.",
    audit:
      "Manual audit record:\n- Reviewed breakpoints to confirm grid alignment and controlled paragraph measure.\n- Confirmed focus visibility and keyboard navigation flow across sections.\n- Verified reduced-motion behavior so the story remains readable without animation.\n- Replaced the inner-scroll artifact box with an excerpt + GitHub link for clarity.",
  },
  caption:
    "This is the promise in practice: I’ll use AI for speed, but I only ship what I can audit, explain, and maintain.",
  githubUrl: "https://github.com/joey33o/IS117-Museum-",
  specs: [
    { label: "Tech stack", value: "Next.js (App Router), TypeScript, Tailwind, GSAP ScrollTrigger" },
    { label: "Build", value: "Static prerender (GitHub Pages-friendly)" },
    { label: "Tests", value: "Manual QA + build gate" },
    { label: "Performance", value: "Static pages prerendered" },
    { label: "Validation", value: "Skip link + visible focus + reduced-motion checks" },
  ],
};
