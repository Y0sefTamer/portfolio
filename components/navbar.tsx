import { navLinks } from "@/lib/data";
import SocialLinks from "./social-links";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/60 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight"
        >
          <span className="text-gradient">yosef</span>
          <span className="text-muted">.eth</span>
        </a>

        <div className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <SocialLinks className="hidden sm:flex" />
        <a
          href="#contact"
          className="rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-foreground ring-1 ring-white/10 transition-colors hover:bg-white/10 sm:hidden"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
