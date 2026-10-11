import { techStack } from "@/lib/data";
import { CodeIcon, ServerIcon, TerminalIcon } from "./icons";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

const icons = [CodeIcon, ServerIcon, TerminalIcon];

export default function TechStack() {
  return (
    <section id="stack" className="mx-auto w-full max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Toolbox"
        title="Tech Stack"
        description="The tools and technologies I use to design, build, test, and ship Web3 products end to end."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {techStack.map((category, index) => {
          const Icon = icons[index] ?? CodeIcon;
          return (
            <Reveal key={category.title} delay={index * 100} className="h-full">
              <div className="gradient-border flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/25 to-accent-2/20 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-white/10 bg-background/60 px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent/40 hover:text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
