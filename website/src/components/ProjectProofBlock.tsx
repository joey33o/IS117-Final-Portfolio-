import type { ProjectProof } from "@/src/content/types";
import { PrimaryCTA } from "./PrimaryCTA";
import { SpecsTable } from "./SpecsTable";

type ProjectProofBlockProps = {
  proof: ProjectProof;
};

export function ProjectProofBlock({ proof }: ProjectProofBlockProps) {
  return (
    <section className="grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-12">
      <div className="col-span-4 md:col-span-6 lg:col-span-12 pop-panel panel-surface border-[var(--border-w)] border-[var(--border-color)]">
        <div className="poster-header border-b-[var(--border-w)] border-[var(--border-color)] p-6">
          <h2 className="text-2xl font-black tracking-tight">{proof.blockTitle}</h2>
        </div>

        <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
          <div className="lg:col-span-7 border-b-[var(--border-w)] lg:border-b-0 lg:border-r-[var(--border-w)] border-[var(--border-color)] p-6">
            <div className="inline-flex items-baseline gap-2 border border-[var(--border-color)] px-3 py-2 text-xs font-black uppercase tracking-wider">
              <span className="h-2 w-2 bg-[var(--accent-2-color)]" aria-hidden="true" />
              <span>Artifact</span>
            </div>

            <div className="mt-3 text-sm font-black uppercase">{proof.artifactTitle}</div>

            <pre className="mt-3 max-h-64 overflow-auto whitespace-pre-wrap border border-[var(--border-color)] bg-[var(--bg-color)] p-4 text-sm">
              {proof.artifactBody}
            </pre>

            <p className="mt-3 text-xs text-white/70">Scroll inside the artifact box to read full details.</p>
          </div>

          <div className="lg:col-span-5 p-6">
            <div className="inline-flex items-baseline gap-2 border border-[var(--border-color)] px-3 py-2 text-xs font-black uppercase tracking-wider">
              <span className="h-2 w-2 bg-[var(--accent-2-color)]" aria-hidden="true" />
              <span>Impact</span>
            </div>
            <p className="mt-3 max-w-[var(--measure)]">{proof.impact}</p>

            <div className="mt-6">
              <PrimaryCTA href={proof.githubUrl} />
            </div>

            <p className="mt-6 max-w-[var(--measure)] border-t border-[var(--border-color)] pt-4 text-sm">
              {proof.caption}
            </p>
          </div>
        </div>

        <div className="border-t-[var(--border-w)] border-[var(--border-color)] p-6">
          <div className="inline-flex items-baseline gap-2 border border-[var(--border-color)] px-3 py-2 text-xs font-black uppercase tracking-wider">
            <span className="h-2 w-2 bg-[var(--accent-color)]" aria-hidden="true" />
            <span>Method Note</span>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <article className="border border-[var(--border-color)] p-4">
              <div className="poster-header inline-flex items-baseline px-2 py-1 text-xs font-black uppercase tracking-wider">
                The Challenge
              </div>
              <p className="mt-3 text-sm max-w-[var(--measure)]">{proof.methodNote.challenge}</p>
            </article>

            <article className="border border-[var(--border-color)] p-4">
              <div className="poster-header inline-flex items-baseline px-2 py-1 text-xs font-black uppercase tracking-wider">
                Architectural Choice
              </div>
              <p className="mt-3 text-sm max-w-[var(--measure)]">{proof.methodNote.architecturalChoice}</p>
            </article>

            <article className="border border-[var(--border-color)] p-4">
              <div className="poster-header inline-flex items-baseline px-2 py-1 text-xs font-black uppercase tracking-wider">
                The Audit
              </div>
              <p className="mt-3 text-sm whitespace-pre-wrap max-w-[var(--measure)]">{proof.methodNote.audit}</p>
            </article>
          </div>
        </div>
      </div>

      <div className="col-span-4 md:col-span-6 lg:col-span-12">
        <SpecsTable rows={proof.specs} />
      </div>
    </section>
  );
}
