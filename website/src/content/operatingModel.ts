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
  eyebrow: "Working Principle",
  quote:
    "AI can accelerate a draft, but the developer remains responsible for the decisions, interface, and release quality.",
  name: "Portfolio Standard",
  title: "Responsible AI workflow",
  disclaimer: "No placeholder testimonial. This is a stated working principle.",
};
