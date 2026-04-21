export type MethodNote = {
  challenge: string;
  architecturalChoice: string;
  audit: string;
};

export type ProjectSpecMetric = {
  label: string;
  value: string;
};

export type ProjectProof = {
  slug: string;
  blockTitle: string;
  problemGoal: string;
  artifactTitle: string;
  artifactSnippet: string;
  impact: string;
  methodNote: MethodNote;
  caption: string;
  ctaLabel: "AUDIT MY CODE ON GITHUB";
  ctaHref: string;
  specs: ProjectSpecMetric[];
};
