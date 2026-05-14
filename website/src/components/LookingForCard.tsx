type LookingForCardProps = {
  email: string;
  githubProfileUrl: string;
};

export function LookingForCard({ email, githubProfileUrl }: LookingForCardProps) {
  return (
    <section
      className="allow-radius pop-panel panel-surface border-[var(--border-w)] border-[var(--border-color)] p-6 md:p-8"
      aria-label="Looking for"
    >
      <div className="grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-12">
        <div className="col-span-4 md:col-span-6 lg:col-span-8">
          <div className="inline-flex items-center gap-2 border border-[var(--border-color)] px-3 py-2 text-xs font-black uppercase tracking-wider">
            <span className="h-2 w-2 bg-[var(--accent-2-color)]" aria-hidden="true" />
            <span>Looking For</span>
          </div>

          <h2 className="mt-6 text-4xl font-black leading-[0.95] tracking-tight md:text-5xl lg:text-6xl">
            Teams looking for a junior product-minded developer who can use AI responsibly, build maintainable
            front-end systems, document decisions, and validate work before release.
          </h2>

          <p className="mt-6 max-w-[var(--measure)] text-sm text-white/80">
            I am especially interested in front-end, product engineering, and AI workflow internships where
            careful implementation and clear communication matter.
          </p>
        </div>

        <div className="col-span-4 md:col-span-6 lg:flex lg:col-span-4 lg:items-end lg:justify-end">
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
            <a
              className="inline-flex items-center justify-center border-[var(--border-w)] border-[var(--border-color)] bg-[var(--accent-color)] px-5 py-3 font-black uppercase tracking-tight text-[var(--bg-color)] transition-colors hover:bg-[var(--accent-2-color)]"
              href={`mailto:${email}`}
            >
              Email Joseph
            </a>
            <a
              className="inline-flex items-center justify-center border-[var(--border-w)] border-[var(--border-color)] bg-[var(--surface-color)] px-5 py-3 font-black uppercase tracking-tight transition-colors hover:bg-[var(--accent-2-color)] hover:text-[var(--bg-color)]"
              href={githubProfileUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
