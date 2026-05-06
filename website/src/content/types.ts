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

export type StatTile = {
  label: string;
  value: string;
  helper?: string;
};

export type FeaturedProject = {
  eyebrow: string;
  title: string;
  summary: string;
  bullets: string[];
  repoUrl: string;
  ctaLabel: string;
  stats: StatTile[];
};
