import type { FeaturedProject } from "@/src/content/types";

type FeaturedProjectCardProps = {
  project: FeaturedProject;
};

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <section className="pop-panel panel-surface border-[var(--border-w)] border-[var(--border-color)] p-6" aria-label={project.eyebrow}>
      <div className="grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-12">
        <div className="col-span-4 md:col-span-6 lg:col-span-8">
          <div className="inline-flex items-center gap-2 border border-[var(--border-color)] px-3 py-2 text-xs font-black uppercase tracking-wider">
            <span className="h-2 w-2 bg-[var(--accent-2-color)]" aria-hidden="true" />
            <span>{project.eyebrow}</span>
          </div>

          <h2 className="mt-4 text-2xl font-black tracking-tight">{project.title}</h2>
          <p className="mt-3 max-w-[var(--measure)]">{project.summary}</p>

          <ul className="mt-5 space-y-2 text-sm">
            {project.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-2 w-2 bg-[var(--accent-color)]" aria-hidden="true" />
                <span className="max-w-[var(--measure)]">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <a
              className="inline-flex items-center justify-center border-[var(--border-w)] border-[var(--border-color)] bg-[var(--surface-color)] px-4 py-3 font-black uppercase tracking-tight transition-colors hover:bg-[var(--accent-2-color)] hover:text-[var(--bg-color)]"
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              {project.ctaLabel}
            </a>
          </div>
        </div>

        <div className="col-span-4 md:col-span-6 lg:col-span-4">
          <div className="grid grid-cols-3 gap-3">
            {project.stats.map((stat) => (
              <article
                key={stat.label}
                className="border border-[var(--border-color)] bg-[var(--bg-color)] p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-white/75">{stat.label}</p>
                <p className="mt-2 text-2xl font-black tracking-tight text-[var(--accent-color)]">{stat.value}</p>
                {stat.helper ? <p className="mt-2 text-xs text-white/70">{stat.helper}</p> : null}
              </article>
            ))}
          </div>

          <div className="mt-4 border border-[var(--border-color)] p-4 text-sm">
            <div className="font-black uppercase">Why this matters</div>
            <p className="mt-2">It proves I can ship a designed system: content model → motion logic → static deployment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
