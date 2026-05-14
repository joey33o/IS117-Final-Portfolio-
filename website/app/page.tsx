import { LookingForCard } from "@/src/components/LookingForCard";
import { OperatingModelSection } from "@/src/components/OperatingModelSection";
import { ProjectCaseStudy } from "@/src/components/ProjectCaseStudy";
import { ProjectsOverviewSection } from "@/src/components/ProjectsOverviewSection";
import { portfolioProjects } from "@/src/content/projects";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="pop-panel border-[var(--border-w)] border-[var(--border-color)] bg-[var(--surface-color)] p-6">
        <div className="grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-12">
          <div className="col-span-4 md:col-span-6 lg:col-span-8">
            <div className="inline-flex items-center gap-2 border border-[var(--border-color)] px-3 py-2 text-xs font-black uppercase tracking-wider">
              <span className="h-2 w-2 bg-[var(--accent-2-color)]" aria-hidden="true" />
              <span>AI-Augmented Product Engineer - Front-End / Full-Stack Systems</span>
            </div>

            <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
              AI-AUGMENTED. HUMAN-AUDITED.
              <br />
              BUILT TO SCALE.
            </h1>

            <p className="mt-6 max-w-[var(--measure)]">
              I use AI to move faster through implementation, then verify the result through readable code,
              accessible UI, deployment checks, and documented decisions.
            </p>
            <p className="mt-2 max-w-[var(--measure)]">
              This portfolio is organized as proof: project need -&gt; artifact -&gt; AI workflow -&gt; human
              audit -&gt; impact.
            </p>
            <p className="mt-2 max-w-[var(--measure)]">If I cannot explain it, it does not ship.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center border border-[var(--border-color)] px-3 py-2 text-xs font-black uppercase tracking-wider">
                Responsible AI workflow
              </span>
              <span className="inline-flex items-center border border-[var(--border-color)] px-3 py-2 text-xs font-black uppercase tracking-wider">
                Front-end systems and business UX
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center border-[var(--border-w)] border-[var(--border-color)] bg-[var(--accent-color)] px-4 py-3 font-black uppercase tracking-tight text-[var(--bg-color)] transition-colors hover:bg-[var(--accent-2-color)]"
                href="#contact"
              >
                Contact Me
              </a>
              <a
                className="inline-flex items-center justify-center border-[var(--border-w)] border-[var(--border-color)] bg-[var(--surface-color)] px-4 py-3 font-black uppercase tracking-tight transition-colors hover:bg-[var(--accent-2-color)] hover:text-[var(--bg-color)]"
                href="#projects-overview-heading"
              >
                View Projects
              </a>
            </div>

            <div className="mt-6 border border-[var(--border-color)] bg-[var(--bg-color)] p-4 text-sm">
              <div className="font-black uppercase">Proof areas</div>
              <p className="mt-2 text-white/80">
                Museum system - AI support triage - Grounded Coffee Co. storefront
              </p>
            </div>
          </div>

          <div className="col-span-4 md:col-span-6 lg:col-span-4">
            <div className="allow-radius overflow-hidden border-[var(--border-w)] border-[var(--border-color)] bg-[var(--surface-color)]">
              <div className="relative aspect-[4/5]">
                <img
                  src="hero-poster.svg"
                  alt="Abstract black-and-yellow poster composition"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-baseline justify-between gap-4 bg-[var(--accent-color)] px-4 py-3 text-black">
                <div className="text-lg font-black uppercase tracking-tight">Proof</div>
                <div className="text-xs font-semibold uppercase tracking-wider">AI / Audit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectsOverviewSection projects={portfolioProjects} />

      <OperatingModelSection />

      {portfolioProjects.map((project) => (
        <ProjectCaseStudy key={project.id} project={project} />
      ))}

      <div id="contact">
        <LookingForCard email="jm2569@njit.edu" githubProfileUrl="https://github.com/joey33o" />
      </div>
    </div>
  );
}
