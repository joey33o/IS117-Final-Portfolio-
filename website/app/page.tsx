import { PrimaryCTA } from "@/src/components/PrimaryCTA";
import { FeaturedProjectCard } from "@/src/components/FeaturedProjectCard";
import { ProjectProofBlock } from "@/src/components/ProjectProofBlock";
import { featuredProject } from "@/src/content/featuredProject";
import { projectProof } from "@/src/content/project";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="pop-panel border-[var(--border-w)] border-[var(--border-color)] bg-[var(--surface-color)] p-6">
        <div className="grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-12">
          <div className="col-span-4 md:col-span-6 lg:col-span-8">
            <h1 className="text-4xl font-black tracking-tight">AI-AUGMENTED. HUMAN-AUDITED. BUILT TO SCALE.</h1>
            <p className="mt-4 max-w-[var(--measure)]">
              I use AI for speed, but I ship only what I can explain, verify, and maintain.
            </p>
            <p className="mt-2 max-w-[var(--measure)]">
              This page is one project, presented as proof: problem → artifact → impact → architectural choice → audit record.
            </p>
            <div className="mt-6">
              <PrimaryCTA href={projectProof.githubUrl} />
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

            <div className="mt-4 border border-[var(--border-color)] bg-[var(--surface-color)] p-4 text-sm">
              <div className="font-black uppercase">First proof (visible early)</div>
              <p className="mt-2">The proof block starts immediately below—no buried content, no template fluff.</p>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProjectCard project={featuredProject} />

      <ProjectProofBlock proof={projectProof} />
    </div>
  );
}
