import type { FeaturedProject } from "@/src/content/types";

export const featuredProject: FeaturedProject = {
  eyebrow: "Featured Project",
  title: "IS117 Museum — The Celestial Eye",
  summary:
    "A scroll-driven, single-page museum experience that transitions from terrestrial to celestial using CSS variables and GSAP ScrollTrigger, exported for GitHub Pages.",
  bullets: [
    "ScrollTrigger-driven theme transition with reduced-motion fallback.",
    "Structured content model: 5 eras, 8 milestones, 6 major milestones.",
    "Static export + basePath/assetPrefix for reliable project-pages deployment.",
  ],
  repoUrl: "https://github.com/joey33o/IS117-Museum-",
  ctaLabel: "View Museum Repo",
  stats: [
    { label: "Eras", value: "5", helper: "Curated chapters" },
    { label: "Milestones", value: "8", helper: "Timeline entries" },
    { label: "Major", value: "6", helper: "High-signal moments" },
  ],
};
