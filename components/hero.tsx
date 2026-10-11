import { profile } from "@/lib/data";
import { ArrowRightIcon, SparklesIcon } from "./icons";
import Reveal from "./reveal";
import SocialLinks from "./social-links";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-6 pb-24 pt-24 text-center sm:pt-32"
    >
      <Reveal variant="fade">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-muted backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for Web3 work
        </span>
      </Reveal>

      <Reveal delay={80}>
        <h1 className="mt-8 text-5xl font-bold tracking-tight sm:text-7xl">
          <span className="text-gradient">{profile.name}</span>
        </h1>
      </Reveal>

      <Reveal delay={160}>
        <p className="mt-4 font-mono text-lg text-accent-3 sm:text-xl">
          <span className="text-muted">{"// "}</span>
          {profile.title}
        </p>
      </Reveal>

      <Reveal delay={240}>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {profile.bio}
        </p>
      </Reveal>

      <Reveal delay={320}>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#projects"
            className="btn-gradient group inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold shadow-glow transition-transform hover:scale-[1.03]"
          >
            <SparklesIcon className="h-4 w-4" />
            View Projects
          </a>
          <a
            href="#contact"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 text-sm font-semibold text-foreground backdrop-blur transition-all hover:border-accent/50 hover:bg-white/10"
          >
            Contact Me
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </Reveal>

      <Reveal delay={400}>
        <SocialLinks className="mt-10 justify-center" />
      </Reveal>
    </section>
  );
}
