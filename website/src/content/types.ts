export type SpecsRow = {
  label: string;
  value: string;
};

export type ProjectArtifact = {
  title: string;
  body: string;
  ctaLabel?: string;
  ctaUrl?: string;
};

export type PortfolioProject = {
  id: string;
  title: string;
  summary: string;
  role: string;
  stack: string[];
  status: string;
  proofAngle: string;
  problem: string;
  userNeed: string;
  whatIBuilt: string[];
  aiWorkflow: string[];
  humanAudit: string[];
  impact: string;
  artifact: ProjectArtifact;
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
