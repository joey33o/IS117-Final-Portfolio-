import type { PortfolioProject } from "@/src/content/types";

type ProjectProofCardProps = {
  project: PortfolioProject;
};

export function ProjectProofCard({ project }: ProjectProofCardProps) {
  return (
    <article className="border border-[var(--border-color)] bg-[var(--bg-color)] p-5">
      <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[var(--accent-2-color)]">
        <span className="h-2 w-2 bg-[var(--accent-2-color)]" aria-hidden="true" />
        <span>{project.status}</span>
      </div>

      <h3 className="mt-4 text-2xl font-black tracking-tight">{project.title}</h3>
      <p className="mt-3 max-w-[var(--measure)] text-sm text-white/80">{project.summary}</p>

      <dl className="mt-5 space-y-3 text-sm">
        <div>
          <dt className="font-black uppercase text-[var(--accent-color)]">Role</dt>
          <dd className="mt-1 text-white/80">{project.role}</dd>
        </div>
        <div>
          <dt className="font-black uppercase text-[var(--accent-color)]">Proof</dt>
          <dd className="mt-1 text-white/80">{project.proofAngle}</dd>
        </div>
      </dl>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} stack`}>
        {project.stack.map((item) => (
          <li
            key={item}
            className="border border-[var(--border-color)] px-2 py-1 text-xs font-semibold uppercase tracking-wider text-white/80"
          >
            {item}
          </li>
        ))}
      </ul>

      <a
        className="mt-5 inline-flex items-center justify-center border-[var(--border-w)] border-[var(--border-color)] bg-[var(--accent-color)] px-4 py-3 font-black uppercase tracking-tight text-[var(--bg-color)] transition-colors hover:bg-[var(--accent-2-color)]"
        href={`#${project.id}`}
      >
        View proof
      </a>
    </article>
  );
}
