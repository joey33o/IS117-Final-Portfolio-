import type { ProjectArtifact } from "@/src/content/types";

type ProofArtifactBlockProps = {
  artifact: ProjectArtifact;
};

export function ProofArtifactBlock({ artifact }: ProofArtifactBlockProps) {
  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-wider text-[var(--accent-2-color)]">Key Artifact</h3>

      <div className="mt-3 text-sm font-black uppercase">{artifact.title}</div>

      <pre className="mt-3 whitespace-pre-wrap border border-[var(--border-color)] bg-[var(--bg-color)] p-4 text-sm text-white/85">
        {artifact.body}
      </pre>

      {artifact.ctaUrl && artifact.ctaLabel ? (
        <a
          className="mt-4 inline-flex items-center justify-center border-[var(--border-w)] border-[var(--border-color)] bg-[var(--accent-color)] px-4 py-3 text-xs font-black uppercase tracking-wider text-[var(--bg-color)] transition-colors hover:bg-[var(--accent-2-color)]"
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
