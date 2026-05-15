import type { PortfolioProject } from "@/src/content/types";
import { ProofArtifactBlock } from "./ProofArtifactBlock";

type ProjectCaseStudyProps = {
  project: PortfolioProject;
};

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="border border-[var(--border-color)] p-4">
      <h3 className="text-xs font-black uppercase tracking-wider text-[var(--accent-color)]">
        {title}
      </h3>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
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

function ProjectImageGallery({ project }: { project: PortfolioProject }) {
  if (project.images.length === 0) {
    return null;
  }

  return (
    <div>
      <h3 className="text-xs font-black uppercase tracking-wider text-[var(--accent-2-color)]">Visual Evidence</h3>

      <div className={`mt-4 grid gap-4 ${project.images.length > 1 ? "md:grid-cols-2" : ""}`}>
        {project.images.map((image) => (
          <figure
            key={image.src}
            className="border border-[var(--border-color)] bg-[var(--bg-color)]"
          >
            <div className="aspect-video border-b border-[var(--border-color)] bg-black">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
            <figcaption className="p-3 text-xs font-semibold uppercase tracking-wider text-white/70">
              {image.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const showImagesInRightColumn = project.id === "celestial-eye";

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

      <div className="border-b-[var(--border-w)] border-[var(--border-color)] bg-[var(--bg-color)] p-5">
        <dl className="grid gap-4 text-sm md:grid-cols-3">
          <div>
            <dt className="font-black uppercase text-[var(--accent-color)]">Type</dt>
            <dd className="mt-1 text-white/80">{project.status}</dd>
          </div>
          <div>
            <dt className="font-black uppercase text-[var(--accent-color)]">Focus</dt>
            <dd className="mt-1 text-white/80">{project.role}</dd>
          </div>
          <div>
            <dt className="font-black uppercase text-[var(--accent-color)]">Main Proof</dt>
            <dd className="mt-1 text-white/80">{project.proofAngle}</dd>
          </div>
        </dl>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="border-b-[var(--border-w)] border-[var(--border-color)] p-6 lg:col-span-7 lg:border-b-0 lg:border-r-[var(--border-w)]">
          <ProofArtifactBlock artifact={project.artifact} />
        </div>

        <div className="p-6 lg:col-span-5">
          <h3 className="text-xs font-black uppercase tracking-wider text-[var(--accent-2-color)]">Impact</h3>
          <p className="mt-3 max-w-[var(--measure)] text-white/85">{project.impact}</p>

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

          {showImagesInRightColumn ? (
            <div className="mt-6 border-t border-[var(--border-color)] pt-4">
              <ProjectImageGallery project={project} />
            </div>
          ) : null}
        </div>
      </div>

      {!showImagesInRightColumn ? (
        <div className="border-t-[var(--border-w)] border-[var(--border-color)] p-6">
          <ProjectImageGallery project={project} />
        </div>
      ) : null}

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
