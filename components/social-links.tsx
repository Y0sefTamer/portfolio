import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon, MailIcon, XIcon } from "./icons";

const items = [
  { label: "GitHub", href: profile.socials.github, Icon: GithubIcon },
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: LinkedinIcon },
  { label: "X (Twitter)", href: profile.socials.x, Icon: XIcon },
  { label: "Email", href: `mailto:${profile.email}`, Icon: MailIcon },
];

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      {items.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted backdrop-blur transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-foreground hover:shadow-glow"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
