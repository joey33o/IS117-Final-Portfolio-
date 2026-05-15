import type { PortfolioProject } from "@/src/content/types";
import { ProjectProofCard } from "./ProjectProofCard";

type ProjectsOverviewSectionProps = {
  projects: PortfolioProject[];
};

export function ProjectsOverviewSection({ projects }: ProjectsOverviewSectionProps) {
  return (
    <section
      className="pop-panel panel-surface border-[var(--border-w)] border-[var(--border-color)] p-6"
      aria-labelledby="projects-overview-heading"
    >
      <div className="grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-12">
        <div className="col-span-4 md:col-span-6 lg:col-span-8">
          <div className="inline-flex items-center gap-2 border border-[var(--border-color)] px-3 py-2 text-xs font-black uppercase tracking-wider">
            <span className="h-2 w-2 bg-[var(--accent-2-color)]" aria-hidden="true" />
            <span>Selected Projects</span>
          </div>

          <h2 id="projects-overview-heading" className="mt-5 text-3xl font-black tracking-tight md:text-4xl">
            A focused set of projects across front-end systems, AI workflows, and business UX.
          </h2>
          <p className="mt-4 max-w-[var(--measure)] text-white/80">
            Each case study shows the project need, implementation artifact, AI-assisted workflow, review process,
            and intended impact.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectProofCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
