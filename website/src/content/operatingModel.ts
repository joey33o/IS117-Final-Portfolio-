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
    title: "FIND THE REPEATED DECISION",
    body: "I look for the rule the interface keeps forcing people to relearn, then turn that into a reusable component or status pattern.",
  },
  {
    title: "PROVE THE EDGE STATES EARLY",
    body: "I validate empty states, loading states, errors, and navigation paths before polishing. If the states hold, the UI holds.",
  },
  {
    title: "SHIP THE EXPLANATION WITH IT",
    body: "I document the naming, decisions, and constraints so the next person can extend the system without guessing.",
  },
];

export const facultyNote: FacultyNote = {
  eyebrow: "Faculty Note",
  quote:
    "Joseph doesn’t stop at the clean frame. The work gets stronger when it reaches naming, states, and release notes—where a product becomes maintainable.",
  name: "Avery Kim",
  title: "NJIT Design Studio Staff",
  disclaimer: "Placeholder quote for layout. Replace with a real testimonial before publishing.",
};
