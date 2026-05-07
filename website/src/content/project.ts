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
      "The risk: a portfolio that looks AI-generated and untrustworthy. The constraint: motion + static export + content structure must hold up under real deployment rules (GitHub Pages) and accessibility expectations.",
    architecturalChoice:
      "Use a token-driven UI and a typed content model, keep the transition logic explicit (CSS variables + body class), and design the layout so the proof is visible early (not buried).",
    audit:
      "Manual audit record:\n- Verified: `npm run build` passes (static prerender).\n- Verified: keyboard flow (visible focus + skip link).\n- Verified: reduced-motion behavior (no required animation to read/understand).\n- Fix: removed the ‘scroll inside artifact box’ pattern in favor of an excerpt + GitHub link.",
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
