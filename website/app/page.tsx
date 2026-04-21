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
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            Audit My Code On GitHub
          </a>
        </div>
      </header>

      <main className="grid-wrap py-8 md:py-12">
        <section className="hero-panel grid gap-6 border-[3px] border-[var(--border-color)] p-6 md:grid-cols-12 md:p-8">
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
              Single-project masterclass with explicit challenge, architecture,
              and manual audit evidence.
            </p>
          </aside>
        </section>

        <section className="content-card mt-6 grid gap-4 border-[3px] border-[var(--border-color)] p-6 md:p-8">
          <h2 className="text-2xl font-black uppercase md:text-3xl">
            Project Proof Block
          </h2>

          <div className="border-[2px] border-[var(--border-color)] bg-[#0f0f0f] p-4">
            <p className="text-xs font-black uppercase tracking-[0.14em]">
              Artifact
            </p>
            <pre className="mt-3 overflow-x-auto bg-[var(--panel-muted)] p-4 text-sm font-mono leading-6 text-[var(--text-color)]">
{`const promise = "AI-AUGMENTED. HUMAN-AUDITED. BUILT TO SCALE.";
const audit = {
  foundByHuman: 1,
  fixedByHuman: 1,
  status: "verified"
};`}
            </pre>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="border-[2px] border-[var(--border-color)] bg-[#0f0f0f] p-4">
              <h3 className="text-sm font-black uppercase">The Challenge</h3>
              <p className="mt-2 text-sm leading-6">
                Convert fast AI output into employer-trustworthy production work.
              </p>
            </article>
            <article className="border-[2px] border-[var(--border-color)] bg-[#0f0f0f] p-4">
              <h3 className="text-sm font-black uppercase">
                The Architectural Choice
              </h3>
              <p className="mt-2 text-sm leading-6">
                Strong typed contracts, measurable checks, and narrow sprint slices.
              </p>
            </article>
            <article className="border-[2px] border-[var(--border-color)] bg-[#0f0f0f] p-4">
              <h3 className="text-sm font-black uppercase">The Audit</h3>
              <p className="mt-2 text-sm leading-6">
                Human review found one logic gap and one copy inconsistency, both
                fixed and revalidated in build checks.
              </p>
            </article>
          </div>

          <div className="overflow-x-auto border-[2px] border-[var(--border-color)]">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="border-b-[2px] border-[var(--border-color)] bg-[var(--panel-muted)] p-3 text-left text-xs font-black uppercase tracking-[0.14em] text-[var(--accent-color)]">
                Project Specs Table
              </caption>
              <tbody>
                <tr className="border-b-[2px] border-[var(--border-color)]">
                  <th className="w-1/2 border-r-[2px] border-[var(--border-color)] p-3 font-black uppercase">
                    Test Coverage
                  </th>
                  <td className="p-3">Baseline set for sprint validation</td>
                </tr>
                <tr className="border-b-[2px] border-[var(--border-color)]">
                  <th className="border-r-[2px] border-[var(--border-color)] p-3 font-black uppercase">
                    Performance
                  </th>
                  <td className="p-3">Static Next.js route build passed</td>
                </tr>
                <tr>
                  <th className="border-r-[2px] border-[var(--border-color)] p-3 font-black uppercase">
                    Stack
                  </th>
                  <td className="p-3">Next.js, TypeScript, Tailwind CSS</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
