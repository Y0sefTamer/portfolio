import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yosef Tamer — Web3 & Smart Contract Engineer",
  description:
    "Focused on EVM smart contracts (Solidity, Foundry), Next.js fullstack DApps, and Agentic AI workflows.",
  keywords: [
    "Yosef Tamer",
    "Web3 Developer",
    "Smart Contract Engineer",
    "Solidity",
    "Foundry",
    "Next.js",
    "EVM",
  ],
  authors: [{ name: "Yosef Tamer" }],
  openGraph: {
    title: "Yosef Tamer — Web3 & Smart Contract Engineer",
    description:
      "Focus on EVM smart contracts, Next.js fullstack DApps, and Agentic AI workflows.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute -left-40 -top-40 h-[42rem] w-[42rem] rounded-full bg-accent/20 blur-[130px] animate-drift" />
          <div className="absolute -right-40 top-1/3 h-[38rem] w-[38rem] rounded-full bg-accent-2/20 blur-[130px] animate-drift [animation-delay:-7s]" />
          <div className="absolute bottom-0 left-1/3 h-[34rem] w-[34rem] rounded-full bg-accent-3/10 blur-[130px] animate-drift [animation-delay:-13s]" />
        </div>
        <div className="relative z-10 flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  );
}
