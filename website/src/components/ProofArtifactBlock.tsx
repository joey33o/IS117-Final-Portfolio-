import type { ProjectArtifact } from "@/src/content/types";

type ProofArtifactBlockProps = {
  artifact: ProjectArtifact;
};

export function ProofArtifactBlock({ artifact }: ProofArtifactBlockProps) {
  return (
    <div>
      <div className="inline-flex items-baseline gap-2 border border-[var(--border-color)] px-3 py-2 text-xs font-black uppercase tracking-wider">
        <span className="h-2 w-2 bg-[var(--accent-2-color)]" aria-hidden="true" />
        <span>Key Artifact</span>
      </div>

      <div className="mt-3 text-sm font-black uppercase">{artifact.title}</div>

      <pre className="mt-3 whitespace-pre-wrap border border-[var(--border-color)] bg-[var(--bg-color)] p-4 text-sm">
        {artifact.body}
      </pre>

      {artifact.ctaUrl && artifact.ctaLabel ? (
        <a
          className="mt-3 inline-flex items-center justify-center border border-[var(--border-color)] bg-[var(--surface-color)] px-3 py-2 text-xs font-black uppercase tracking-wider transition-colors hover:bg-[var(--accent-2-color)] hover:text-[var(--bg-color)]"
          href={artifact.ctaUrl}
          target="_blank"
          rel="noreferrer"
        >
          {artifact.ctaLabel}
        </a>
      ) : null}
    </div>
  );
}
