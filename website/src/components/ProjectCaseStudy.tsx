import type { PortfolioProject } from "@/src/content/types";
import { ProofArtifactBlock } from "./ProofArtifactBlock";

type ProjectCaseStudyProps = {
  project: PortfolioProject;
};

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="border border-[var(--border-color)] p-4">
      <div className="poster-header inline-flex items-baseline px-2 py-1 text-xs font-black uppercase tracking-wider">
        {title}
      </div>
      <ul className="mt-3 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2 w-2 bg-[var(--accent-color)]" aria-hidden="true" />
            <span className="max-w-[var(--measure)]">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return (
    <section
      id={project.id}
      className="scroll-mt-8 pop-panel panel-surface border-[var(--border-w)] border-[var(--border-color)]"
      aria-labelledby={`${project.id}-heading`}
    >
      <div className="poster-header border-b-[var(--border-w)] border-[var(--border-color)] p-6">
        <div className="text-xs font-black uppercase tracking-wider">{project.role}</div>
        <h2 id={`${project.id}-heading`} className="mt-2 text-2xl font-black tracking-tight md:text-3xl">
          {project.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="border-b-[var(--border-w)] border-[var(--border-color)] p-6 lg:col-span-7 lg:border-b-0 lg:border-r-[var(--border-w)]">
          <ProofArtifactBlock artifact={project.artifact} />
        </div>

        <div className="p-6 lg:col-span-5">
          <div className="inline-flex items-baseline gap-2 border border-[var(--border-color)] px-3 py-2 text-xs font-black uppercase tracking-wider">
            <span className="h-2 w-2 bg-[var(--accent-2-color)]" aria-hidden="true" />
            <span>Impact</span>
          </div>
          <p className="mt-3 max-w-[var(--measure)]">{project.impact}</p>

          <dl className="mt-6 space-y-4 border-t border-[var(--border-color)] pt-4 text-sm">
            <div>
              <dt className="font-black uppercase text-[var(--accent-color)]">Problem</dt>
              <dd className="mt-1 text-white/80">{project.problem}</dd>
            </div>
            <div>
              <dt className="font-black uppercase text-[var(--accent-color)]">User Need</dt>
              <dd className="mt-1 text-white/80">{project.userNeed}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="border-t-[var(--border-w)] border-[var(--border-color)] p-6">
        <div className="grid gap-3 md:grid-cols-3">
          <DetailList title="What I Built" items={project.whatIBuilt} />
          <DetailList title="AI Workflow" items={project.aiWorkflow} />
          <DetailList title="Human Audit" items={project.humanAudit} />
        </div>
      </div>
    </section>
  );
}
