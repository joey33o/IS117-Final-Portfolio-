import { singleProjectProof as proof } from "@/src/content/project-proof";

export default function Home() {
  return (
    <div className="page-shell flex-1">
      <header className="sticky top-0 z-10 border-b-[3px] border-[var(--border-color)] bg-[var(--panel-deep)]">
        <div className="grid-wrap grid grid-cols-1 items-center gap-4 py-4 md:grid-cols-[1fr_auto]">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--accent-color)]">
            Reliable Engineering Portfolio
          </p>
          <a
            className="border-[3px] border-[var(--border-color)] bg-[var(--accent-color)] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#0a0a0a]"
            href={proof.ctaHref}
            target="_blank"
            rel="noreferrer"
          >
            {proof.ctaLabel}
          </a>
        </div>
      </header>

      <main className="grid-wrap py-8 md:py-12">
        {/* ── Hero Panel ── */}
        <section
          className="hero-panel grid gap-6 border-[3px] border-[var(--border-color)] p-6 md:grid-cols-12 md:p-8"
          aria-label="Hero — professional promise"
        >
          <div className="md:col-span-8 relative z-[1]">
            <div className="hero-copy">
              <p className="hero-kicker mb-3 text-xs font-black uppercase tracking-[0.18em]">
                Hero Archetype
              </p>
              <h1 className="hero-headline text-[2.65rem] font-black uppercase leading-[1.03] md:text-[4.1rem]">
                <span className="block">AI-AUGMENTED.</span>
                <span className="block">HUMAN-AUDITED.</span>
                <span className="block">BUILT TO SCALE.</span>
              </h1>
              <p className="hero-lead mt-5 text-base font-semibold leading-7 md:text-lg">
                I build with AI speed, then enforce human judgment on architecture,
                quality, and delivery confidence.
              </p>
            </div>
          </div>

          <aside className="md:col-span-4 relative z-[1] border-[2px] border-[var(--border-color)] bg-[rgba(8,8,8,0.84)] p-4">
            <p className="text-xs font-black uppercase tracking-[0.14em]">
              First Proof
            </p>
            <p className="mt-3 text-sm leading-6">
              {proof.problemGoal}
            </p>
          </aside>
        </section>

        {/* ── Project Proof Block ── */}
        <section
          className="content-card mt-6 grid gap-4 border-[3px] border-[var(--border-color)] p-6 md:p-8"
          aria-label="Project proof block"
        >
          <h2 className="text-2xl font-black uppercase md:text-3xl">
            {proof.blockTitle}
          </h2>

          {/* Artifact */}
          <div className="border-[2px] border-[var(--border-color)] bg-[#0f0f0f] p-4">
            <p className="text-xs font-black uppercase tracking-[0.14em]">
              {proof.artifactTitle}
            </p>
            <pre className="mt-3 overflow-x-auto bg-[var(--panel-muted)] p-4 text-sm font-mono leading-6 text-[var(--text-color)]">
              {proof.artifactSnippet}
            </pre>
          </div>

          {/* Impact */}
          <div className="border-[2px] border-[var(--border-color)] bg-[#0f0f0f] p-4">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--accent-color)]">
              Impact
            </p>
            <p className="mt-2 text-sm leading-6">{proof.impact}</p>
          </div>

          {/* Method Note */}
          <div className="grid gap-4 md:grid-cols-3">
            <article className="border-[2px] border-[var(--border-color)] bg-[#0f0f0f] p-4">
              <h3 className="text-sm font-black uppercase">The Challenge</h3>
              <p className="mt-2 text-sm leading-6">
                {proof.methodNote.challenge}
              </p>
            </article>
            <article className="border-[2px] border-[var(--border-color)] bg-[#0f0f0f] p-4">
              <h3 className="text-sm font-black uppercase">
                The Architectural Choice
              </h3>
              <p className="mt-2 text-sm leading-6">
                {proof.methodNote.architecturalChoice}
              </p>
            </article>
            <article className="border-[2px] border-[var(--border-color)] bg-[#0f0f0f] p-4">
              <h3 className="text-sm font-black uppercase">The Audit</h3>
              <p className="mt-2 text-sm leading-6">
                {proof.methodNote.audit}
              </p>
            </article>
          </div>

          {/* Caption */}
          <p className="border-l-[3px] border-[var(--accent-color)] pl-4 text-sm font-semibold italic leading-6">
            {proof.caption}
          </p>

          {/* Specs Table */}
          <div className="overflow-x-auto border-[2px] border-[var(--border-color)]">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="border-b-[2px] border-[var(--border-color)] bg-[var(--panel-muted)] p-3 text-left text-xs font-black uppercase tracking-[0.14em] text-[var(--accent-color)]">
                Project Specs Table
              </caption>
              <tbody>
                {proof.specs.map((metric, i) => (
                  <tr
                    key={metric.label}
                    className={
                      i < proof.specs.length - 1
                        ? "border-b-[2px] border-[var(--border-color)]"
                        : ""
                    }
                  >
                    <th className="w-1/3 border-r-[2px] border-[var(--border-color)] p-3 font-black uppercase align-top">
                      {metric.label}
                    </th>
                    <td className="p-3 align-top">{metric.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Primary CTA */}
          <div className="flex justify-end pt-2">
            <a
              href={proof.ctaHref}
              target="_blank"
              rel="noreferrer"
              className="border-[3px] border-[var(--border-color)] bg-[var(--accent-color)] px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-[#0a0a0a]"
            >
              {proof.ctaLabel}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
