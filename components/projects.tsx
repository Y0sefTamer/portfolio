import { projects } from "@/lib/data";
import { CodeIcon, ExternalLinkIcon, GithubIcon } from "./icons";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import SpotlightCard from "./spotlight-card";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Portfolio"
        title="Featured Projects"
        description="Deployed Web3 applications spanning smart contracts, fullstack DApps, and on-chain tooling."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={(index % 3) * 90}
            variant="scale"
            className="h-full"
          >
            <SpotlightCard className="h-full">
              <div className="relative z-10 flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-accent/25 to-accent-2/20 text-accent">
                    <CodeIcon className="h-5 w-5" />
                  </div>
                  {project.featured && (
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-accent">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-muted transition-colors hover:border-accent/40 hover:text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gradient inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-transform hover:scale-[1.02]"
                  >
                    <ExternalLinkIcon className="h-3.5 w-3.5" />
                    Live DApp
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:border-accent/50 hover:bg-white/10"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    GitHub Repo
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
