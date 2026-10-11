import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-muted sm:flex-row">
        <p>© 2026 {profile.name}. All rights reserved.</p>
        <p className="font-mono">
          Built with Next.js &amp; Tailwind CSS · {profile.location}
        </p>
      </div>
    </footer>
  );
}
