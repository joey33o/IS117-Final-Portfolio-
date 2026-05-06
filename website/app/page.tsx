import { FeaturedProjectCard } from "@/src/components/FeaturedProjectCard";
import { LookingForCard } from "@/src/components/LookingForCard";
import { OperatingModelSection } from "@/src/components/OperatingModelSection";
import { ProjectProofBlock } from "@/src/components/ProjectProofBlock";
import { featuredProject } from "@/src/content/featuredProject";
import { projectProof } from "@/src/content/project";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="pop-panel border-[var(--border-w)] border-[var(--border-color)] bg-[var(--surface-color)] p-6">
        <div className="grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-12">
          <div className="col-span-4 md:col-span-6 lg:col-span-8">
            <div className="inline-flex items-center gap-2 border border-[var(--border-color)] px-3 py-2 text-xs font-black uppercase tracking-wider">
              <span className="h-2 w-2 bg-[var(--accent-2-color)]" aria-hidden="true" />
              <span>Front-End Developer · Systems-minded</span>
            </div>

            <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
              AI-AUGMENTED. HUMAN-AUDITED.
              <br />
              BUILT TO SCALE.
            </h1>

            <p className="mt-6 max-w-[var(--measure)]">
              I use AI for speed, but I ship only what I can explain, verify, and maintain.
            </p>
            <p className="mt-2 max-w-[var(--measure)]">
              This page is one project, presented as proof: problem → artifact → impact → architectural choice → audit record.
            </p>
            <p className="mt-2 max-w-[var(--measure)]">If I can’t explain it, it doesn’t ship.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center border border-[var(--border-color)] px-3 py-2 text-xs font-black uppercase tracking-wider">
                Employers investing in a reliable developer
              </span>
              <span className="inline-flex items-center border border-[var(--border-color)] px-3 py-2 text-xs font-black uppercase tracking-wider">
                Hero × Audit discipline
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center border-[var(--border-w)] border-[var(--border-color)] bg-[var(--accent-color)] px-4 py-3 font-black uppercase tracking-tight text-[var(--bg-color)] transition-colors hover:bg-[var(--accent-2-color)]"
                href="#contact"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-6 border border-[var(--border-color)] bg-[var(--bg-color)] p-4 text-sm">
              <div className="font-black uppercase">First proof (visible early)</div>
              <p className="mt-2 text-white/80">
                5 eras · 8 milestones · Scroll-triggered theme system · Static export deployment
              </p>
            </div>
          </div>

          <div className="col-span-4 md:col-span-6 lg:col-span-4">
            <div className="allow-radius border-[var(--border-w)] border-[var(--border-color)] bg-[var(--surface-color)] overflow-hidden">
              <div className="relative aspect-[4/5]">
                <img
                  src="/hero-poster.svg"
                  alt="Abstract black-and-yellow poster composition"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-baseline justify-between gap-4 bg-[var(--accent-color)] px-4 py-3 text-black">
                <div className="text-lg font-black uppercase tracking-tight">Hero</div>
                <div className="text-xs font-semibold uppercase tracking-wider">Black / Yellow</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProjectCard project={featuredProject} />

      <OperatingModelSection />

      <ProjectProofBlock proof={projectProof} />

      <div id="contact">
        <LookingForCard email="jm2569@njit.edu" githubProfileUrl="https://github.com/joey33o" />
      </div>
    </div>
  );
}
