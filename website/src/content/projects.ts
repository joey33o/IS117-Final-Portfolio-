import type { PortfolioProject } from "./types";

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "celestial-eye",
    title: "IS117 Museum - The Celestial Eye",
    summary:
      "A scroll-driven museum experience that shifts from a terrestrial visual system to a celestial one using CSS variables, GSAP ScrollTrigger, and static export deployment.",
    role: "Front-end systems, accessibility, deployment",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP ScrollTrigger", "GitHub Pages"],
    status: "Deployed academic project",
    proofAngle:
      "Proves responsive front-end craft, content modeling, motion restraint, and follow-through from concept to deployable artifact.",
    problem:
      "Tell a visual story through scroll interaction without sacrificing readability, keyboard access, reduced-motion support, or static deployment reliability.",
    userNeed:
      "A visitor should be able to understand the museum narrative on any device, with or without animation.",
    whatIBuilt: [
      "Modeled telescope history as eras and milestones rendered through reusable sections.",
      "Built a CSS-variable theme system controlled by a body-level state class.",
      "Configured a static export path for GitHub Pages project hosting.",
      "Checked responsive layout, paragraph measure, focus visibility, and reduced-motion behavior.",
    ],
    aiWorkflow: [
      "Used AI to compare implementation paths for the scroll-triggered theme transition.",
      "Used AI to pressure-test wording, component boundaries, and deployment checklists.",
      "Kept the final implementation small enough to explain and maintain by hand.",
    ],
    humanAudit: [
      "Reviewed breakpoints to confirm grid alignment and readable text measure.",
      "Checked keyboard flow and visible focus states.",
      "Verified reduced-motion behavior so the story remains readable without animation.",
      "Ran build and deployment checks for static export assumptions.",
    ],
    impact:
      "Demonstrates a complete front-end system: concept, content structure, interaction logic, accessibility checks, and static deployment.",
    artifact: {
      title: "Artifact: Scroll-triggered theme state",
      body:
        '"use client";\n\nimport { useEffect } from "react";\nimport gsap from "gsap";\nimport { ScrollTrigger } from "gsap/ScrollTrigger";\n\nexport function TransitionTrigger() {\n  useEffect(() => {\n    gsap.registerPlugin(ScrollTrigger);\n    const setSpaceEra = (enabled: boolean) => {\n      document.body.classList.toggle("is-space-era", enabled);\n    };\n\n    const trigger = ScrollTrigger.create({\n      id: "transition-bootstrap",\n      onEnter: () => setSpaceEra(true),\n      onLeaveBack: () => setSpaceEra(false),\n    });\n\n    return () => trigger.kill();\n  }, []);\n\n  return null;\n}',
      ctaLabel: "View museum repo",
      ctaUrl: "https://github.com/joey33o/IS117-Museum-",
    },
  },
  {
    id: "support-triage",
    title: "AI Support Triage Dashboard",
    summary:
      "A prototype dashboard that turns unstructured support messages into categorized, prioritized review queues with editable draft replies.",
    role: "AI workflow, automation, human review",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Mock AI classifier", "Local sample data"],
    status: "Portfolio prototype",
    proofAngle:
      "Proves product judgment around AI: automation helps with sorting and drafting, but humans approve the final action.",
    problem:
      "Support teams lose time sorting repetitive messages, identifying urgency, and writing first-response drafts.",
    userNeed:
      "A support lead needs faster triage without blindly trusting generated labels or suggested replies.",
    whatIBuilt: [
      "Designed a ticket queue with urgency, category, confidence, and response status.",
      "Defined states for new, low-confidence, approved, edited, and rejected suggestions.",
      "Created a review flow where AI output stays provisional until a person acts.",
      "Mapped empty, loading, error, and low-confidence states before polishing the interface.",
    ],
    aiWorkflow: [
      "Simulated AI-generated category, urgency, summary, confidence score, and reply draft.",
      "Separated high-confidence suggestions from items that need closer review.",
      "Captured expected labels in a sample evaluation table to compare against generated output.",
    ],
    humanAudit: [
      "Every suggestion requires approve, edit, or reject.",
      "Low-confidence messages are visually flagged and sorted into a review lane.",
      "Draft replies are editable before use.",
      "Evaluation notes make false positives visible instead of hiding them.",
    ],
    impact:
      "Shows how AI can reduce sorting work while preserving review, accountability, and clear product states.",
    artifact: {
      title: "Artifact: Ticket review schema",
      body:
        "type TicketSuggestion = {\n  id: string;\n  message: string;\n  category: 'billing' | 'technical' | 'account' | 'general';\n  urgency: 'low' | 'medium' | 'high';\n  confidence: number;\n  summary: string;\n  suggestedReply: string;\n  reviewStatus: 'pending' | 'approved' | 'edited' | 'rejected';\n};",
    },
  },
  {
    id: "grounded-coffee",
    title: "Grounded Coffee Co.",
    summary:
      "A responsive concept storefront for a small coffee brand with product discovery, roast filtering, subscription prompts, and trust-building purchase content.",
    role: "Business website, e-commerce UX, conversion copy",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Local product data", "Static export"],
    status: "Portfolio storefront concept",
    proofAngle:
      "Proves business-facing web design: product comparison, clear calls to action, buyer trust, and mobile-first shopping flow.",
    problem:
      "A small coffee brand needs a clear storefront that helps buyers compare products quickly and feel confident choosing a roast.",
    userNeed:
      "A shopper should understand flavor, roast level, subscription options, shipping expectations, and cart state without friction.",
    whatIBuilt: [
      "Planned a homepage, product grid, product detail cards, and cart summary mockup.",
      "Structured products by roast, flavor notes, format, price, and subscription eligibility.",
      "Outlined filter states for roast level, flavor profile, and subscription-friendly products.",
      "Added FAQ, shipping, returns, and empty-cart content to reduce purchase hesitation.",
    ],
    aiWorkflow: [
      "Used AI to draft product descriptions, flavor note variations, FAQ copy, and brand voice options.",
      "Converted draft language into consistent product metadata and buyer-facing descriptions.",
      "Compared copy variants against the purchase path to keep the page practical rather than decorative.",
    ],
    humanAudit: [
      "Reviewed product copy for tone, consistency, and buyer clarity.",
      "Checked that filter labels match the product metadata.",
      "Validated mobile calls to action and cart-state language.",
      "Removed any claims that would require real sourcing, reviews, or fulfillment data.",
    ],
    impact:
      "Demonstrates the ability to build a polished business website that supports product discovery, trust, and conversion.",
    artifact: {
      title: "Artifact: Product data model",
      body:
        "type CoffeeProduct = {\n  id: string;\n  name: string;\n  roast: 'light' | 'medium' | 'dark';\n  flavorNotes: string[];\n  format: 'whole bean' | 'ground' | 'pods';\n  price: number;\n  subscriptionEligible: boolean;\n  inventoryState: 'in-stock' | 'low-stock' | 'sold-out';\n};",
    },
  },
];
