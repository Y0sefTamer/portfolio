import { profile } from "@/lib/data";
import { MailIcon } from "./icons";
import Reveal from "./reveal";
import SocialLinks from "./social-links";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-4xl px-6 py-24">
      <Reveal variant="scale">
        <div className="gradient-border relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur sm:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.20),transparent_62%)]"
          />
          <div className="relative z-10">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              Contact
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s build something on-chain
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Open to smart contract engineering, fullstack DApp work, and
              agentic AI workflows. Reach out and I&apos;ll get back to you.
            </p>

            <div className="mt-8 flex flex-col items-center gap-6">
              <a
                href={`mailto:${profile.email}`}
                className="btn-gradient inline-flex h-12 items-center gap-2 rounded-full px-7 text-sm font-semibold shadow-glow transition-transform hover:scale-[1.03]"
              >
                <MailIcon className="h-4 w-4" />
                {profile.email}
              </a>
              <SocialLinks className="justify-center" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
