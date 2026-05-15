export type OperatingCard = {
  title: string;
  body: string;
};

export type FacultyNote = {
  eyebrow: string;
  quote: string;
  name: string;
  title: string;
  disclaimer: string;
};

export const operatingCards: OperatingCard[] = [
  {
    title: "DEFINE THE PROBLEM FIRST",
    body: "I define the user, decision, and success criteria before asking AI to generate anything.",
  },
  {
    title: "REVIEW THE AI-ASSISTED DRAFT",
    body: "I use AI for speed, then validate behavior through code review, edge states, accessibility checks, and build verification.",
  },
  {
    title: "DOCUMENT THE SYSTEM",
    body: "I ship the reasoning, constraints, and audit notes so the next person can maintain the system.",
  },
];

export const facultyNote: FacultyNote = {
  eyebrow: "Concept Client Review",
  quote:
    "Joseph was easy to work with because he explained the tradeoffs clearly. He connected design choices to business goals, then documented the structure so the site could keep improving.",
  name: "Small Business Website Concept",
  title: "Representative review goal for Grounded Coffee Co.",
  disclaimer: "Future-state client-style feedback for the portfolio storefront concept.",
};
