export type SocialLinks = {
  github: string;
  linkedin: string;
  x: string;
};

export const profile = {
  name: "Yosef Tamer",
  title: "Web3 & Smart Contract Engineer",
  bio: "Focused on EVM smart contracts (Solidity, Foundry), Next.js fullstack DApps, and Agentic AI workflows.",
  email: "yosefmix12@gmail.com",
  location: "Remote · Worldwide",
  socials: {
    github: "https://github.com/Y0sefTamer",
    linkedin: "https://www.linkedin.com/in/yoseftamer/",
    x: "https://x.com/dkyosef200",
  } satisfies SocialLinks,
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Freelance Escrow DApp",
    description:
      "Trustless escrow for freelance agreements with milestone-based releases, dispute resolution, and on-chain reputation.",
    tags: ["Solidity", "Foundry", "Next.js", "Viem", "Vercel"],
    liveUrl: "https://frontend-seven-ochre-89.vercel.app/",
    repoUrl: "https://github.com/Y0sefTamer/Bootcamp-Escrow",
    featured: true,
  },
  {
    title: "Token Vesting Platform",
    description:
      "Linear and cliff vesting schedules for team and investor allocations, with real-time claim dashboards and admin tooling.",
    tags: ["Solidity", "OpenZeppelin", "Foundry", "Next.js", "Wagmi"],
    liveUrl: "https://bootcamp-token-vesting.vercel.app/",
    repoUrl: "https://github.com/Y0sefTamer/Bootcamp-TokenVesting",
    featured: true,
  },
  {
    title: "My NFT",
    description:
      "This project features a collection of smart contracts designed for minting and managing NFTs. It explores different approaches to metadata and image storage by providing two distinct contract implementations. The first implementation utilizes on-chain SVG generation, allowing for dynamic and customizable NFT visuals directly on the blockchain. The second implementation leverages IPFS for decentralized storage of NFT metadata and images, ensuring permanence and accessibility.",
    tags: ["Solidity", "ERC-721", "SVG", "IPFS"],
    liveUrl: "https://github.com/Y0sefTamer/my-nft",
    repoUrl: "https://github.com/Y0sefTamer/my-nft",
  },
  {
    title: "EnglishAuction",
    description:
      "A foundational English Auction smart contract project built as part of a Web3 Solidity Bootcamp. This repository demonstrates how to write, test, and deploy a decentralized open-ascending auction where participants bid on an asset (e.g., an NFT), and the highest bidder wins when the time expires.",
    tags: ["Solidity", "OpenZeppelin", "Foundry", "Next.js", "Tailwind"],
    liveUrl: "https://englishauction.vercel.app/",
    repoUrl: "https://github.com/Y0sefTamer/Bootcamp-EnglishAuction",
  },
  {
    title: "ERC-20 Faucet & Launchpad",
    description:
      "Getting Sepolia ETH can be a bottleneck for new developers. Fluid lets anyone fund a shared faucet, while giving each wallet a fixed claim after a cooldown. The owner can tune the claim size and cooldown without redeploying, and the UUPS proxy preserves state across future logic upgrades.",
    tags: ["Solidity", "EVM", "Foundry", "Viem", "Next.js"],
    liveUrl: "https://fluidsepolia.vercel.app/",
    repoUrl: "https://github.com/Y0sefTamer/Fluid-Sepolia",
  },
  {
    title: "30-Days-Of-Solidity",
    description:
      "This repository documents my journey mastering Solidity and Smart Contracts over a 30-day challenge. I am building projects and following the curriculum from The Web3Compass YouTube channel.",
    tags: ["Solidity", "Foundry"],
    liveUrl: "https://github.com/Y0sefTamer/30-Days-Of-Solidity",
    repoUrl: "https://github.com/Y0sefTamer/30-Days-Of-Solidity",
  },
  {
    title: "Uniswap V1 Practice DEX",
    description:
      "This repository is a practice implementation of the Uniswap V1 automated market maker (AMM) model, built to learn how constant-product exchanges, liquidity tokens, and factory-based pool creation work.",
    tags: ["Solidity", "Foundry", "Next.js", "Tailwind","vite", "Viem"],
    liveUrl: "https://defi-dex-tau.vercel.app/",
    repoUrl: "https://github.com/Y0sefTamer/defi_dex",
  },
];

export type TechCategory = {
  title: string;
  items: string[];
};

export const techStack: TechCategory[] = [
  {
    title: "Smart Contracts",
    items: ["Solidity", "Foundry", "EVM", "OpenZeppelin"],
  },
  {
    title: "Frontend & Web3",
    items: ["React", "Next.js", "Ethers.js / Viem", "Tailwind CSS"],
  },
  {
    title: "Tools & Environment",
    items: ["Linux (Ubuntu)", "Git", "Agentic AI (OpenCode, MCP, Gemini API)"],
  },
];

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];
