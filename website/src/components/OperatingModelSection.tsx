import { facultyNote, operatingCards } from "@/src/content/operatingModel";

export function OperatingModelSection() {
  return (
    <section
      className="grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-12"
      aria-labelledby="operating-model-heading"
    >
      <h2 id="operating-model-heading" className="sr-only">
        Operating model and working principle
      </h2>
      <div className="col-span-4 md:col-span-6 lg:col-span-8">
        <div className="pop-panel panel-surface border-[var(--border-w)] border-[var(--border-color)] p-6">
          <div className="inline-flex items-center gap-2 border border-[var(--border-color)] px-3 py-2 text-xs font-black uppercase tracking-wider">
            <span className="h-2 w-2 bg-[var(--accent-2-color)]" aria-hidden="true" />
            <span>Operating Model</span>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {operatingCards.map((card) => (
              <article key={card.title} className="border border-[var(--border-color)] bg-[var(--bg-color)] p-5">
                <h3 className="text-xl font-black tracking-tight">{card.title}</h3>
                <p className="mt-4 max-w-[var(--measure)] text-sm text-white/80">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="col-span-4 md:col-span-6 lg:col-span-4">
        <div className="pop-panel panel-surface border-[var(--border-w)] border-[var(--border-color)] p-6">
          <div className="inline-flex items-center gap-2 border border-[var(--border-color)] px-3 py-2 text-xs font-black uppercase tracking-wider">
            <span className="h-2 w-2 bg-[var(--accent-color)]" aria-hidden="true" />
            <span>{facultyNote.eyebrow}</span>
          </div>

          <blockquote className="mt-6 text-3xl font-black leading-tight tracking-tight">
            "{facultyNote.quote}"
          </blockquote>

          <div className="mt-6">
            <div className="text-sm font-black uppercase tracking-wider text-[var(--accent-color)]">
              {facultyNote.name}
            </div>
            <div className="mt-1 text-sm text-white/80">{facultyNote.title}</div>
            <p className="mt-4 text-xs text-white/60">{facultyNote.disclaimer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
