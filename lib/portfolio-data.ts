import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  BriefcaseBusiness,
  Code2,
  Mail,
  Network,
  NotebookText,
  X,
} from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
  code: string;
};

export type SocialLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export type ProfileInfo = {
  name: string;
  handle: string;
  role: string;
  status: string;
  location: string;
  availability: string;
  intro: string;
  summary: string;
  stats: {
    label: string;
    value: string;
    note: string;
  }[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type ExperienceItem = {
  index: string;
  role: string;
  period: string;
  status: "active" | "archived" | "building";
  summary: string;
  signals: string[];
};

export type BuildItem = {
  index: string;
  name: string;
  category: string;
  status: "shipped" | "active" | "lab";
  description: string;
  stack: string[];
  proof: string;
  githubHref?: string;
  liveHref?: string;
};

export type NoteItem = {
  index: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  status: "drafting" | "planned" | "published";
  excerpt: string;
  body: string[];
};

export const navItems: NavItem[] = [
  { href: "/", label: "Profile", code: "home" },
  { href: "/experience", label: "Experience", code: "xp" },
  { href: "/builds", label: "Builds", code: "builds" },
  { href: "/notes", label: "Notes", code: "notes" },
  { href: "/contact", label: "Contact", code: "hello" },
];

export const profile: ProfileInfo = {
  name: "Somto",
  handle: "0xSomto",
  role: "Fullstack developer transitioning into smart contract engineering and security review",
  status: "building",
  location: "Nigeria / remote",
  availability: "Open to fullstack, Web3, Solidity, and junior audit-facing roles",
  intro:
    "I build web products end to end. Lately I have been spending more time with Solidity, Foundry, and the small mistakes that make protocol logic unsafe.",
  summary:
    "Since 2022 I have worked across interfaces, backend flows, dashboards, and Web3-adjacent systems. This site is a simple working note: what I have shipped, what I am learning, and the direction I am taking next.",
  stats: [
    { label: "since", value: "2022", note: "fullstack development" },
    { label: "track", value: "EVM", note: "Solidity + auditing" },
    { label: "mode", value: "Practice", note: "proof over claims" },
  ],
};

export const socialLinks: SocialLink[] = [
  { href: "https://github.com/0xsomto", label: "GitHub", icon: Code2 },
  { href: "https://x.com/0xsomto", label: "X", icon: X },
  { href: "https://linkedin.com/in/0xsomto", label: "LinkedIn", icon: Network },
  { href: "mailto:hello@0xsomto.xyz", label: "Email", icon: Mail },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Build apps",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "NestJS",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
    ],
  },
  {
    title: "Shape interfaces",
    skills: [
      "Zustand",
      "Redux Toolkit",
      "React Query",
      "React Hook Form",
      "Zod",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
    ],
  },
  {
    title: "Work with chains",
    skills: [
      "Solidity",
      "Foundry",
      "EVM",
      "ethers.js",
      "web3.js",
      "Wagmi",
      "Viem",
      "RainbowKit",
      "Hardhat",
    ],
  },
  {
    title: "Study security",
    skills: [
      "Invariant thinking",
      "Access control",
      "Reentrancy",
      "Fuzz testing",
      "Threat modeling",
      "Writeups",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    index: "01",
    role: "Fullstack Developer",
    period: "2022 - present",
    status: "active",
    summary:
      "Building web applications end to end: public interfaces, admin systems, API flows, data models, and production polish.",
    signals: [
      "Transforms ambiguous product ideas into usable interfaces",
      "Keeps UI work modular and reusable",
      "Comfortable with frontend, backend, and deployment constraints",
    ],
  },
  {
    index: "02",
    role: "Web3 / Smart Contract Learner",
    period: "current track",
    status: "building",
    summary:
      "Moving from application delivery into Solidity development, Foundry workflows, and audit-style reasoning.",
    signals: [
      "Practicing small contracts with adversarial tests",
      "Reading common exploit classes and postmortems",
      "Documenting security notes without overstating audit experience",
    ],
  },
  {
    index: "03",
    role: "Independent Builder",
    period: "ongoing",
    status: "active",
    summary:
      "Maintaining a portfolio of shipped and in-progress systems that show engineering judgment beyond isolated UI work.",
    signals: [
      "Fullstack project ownership",
      "Reusable component architecture",
      "Preference for proof, constraints, and clean delivery",
    ],
  },
];

export const builds: BuildItem[] = [
  {
    index: "001",
    name: "Zita-Onyeka Foundation Platform",
    category: "Public site + CMS ecosystem",
    status: "active",
    description:
      "A polished foundation web experience with public pages, CMS-driven content, donation flows, events, blogs, gallery, and admin-facing management surfaces.",
    stack: ["Next.js", "TypeScript", "Tailwind", "CMS", "Payments"],
    proof: "Shows production frontend taste, content architecture, and end-to-end delivery.",
    liveHref: "https://zitaonyekafoundation.org",
    githubHref: "https://github.com/0xsomto",
  },
  {
    index: "002",
    name: "Personal Portfolio",
    category: "Personal site",
    status: "active",
    description:
      "A personal web presence shaped around clear writing, selected fullstack proof, and the transition into smart contract security.",
    stack: ["Next.js 16", "React 19", "shadcn", "Tailwind CSS"],
    proof: "Shows design direction, modular code structure, and personal technical positioning.",
    liveHref: "https://0xsomto.xyz",
    githubHref: "https://github.com/0xsomto/portfolio",
  },
  {
    index: "003",
    name: "Solidity Practice Track",
    category: "Current study",
    status: "lab",
    description:
      "A growing set of small contracts, tests, and study notes focused on understanding how protocol logic fails.",
    stack: ["Solidity", "Foundry", "EVM", "Tests"],
    proof: "In progress; intended to become public proof as exercises mature.",
    githubHref: "https://github.com/0xsomto",
  },
];

export const notes: NoteItem[] = [
  {
    index: "01",
    slug: "from-fullstack-assumptions-to-protocol-assumptions",
    title: "From fullstack assumptions to protocol assumptions",
    date: "Drafting",
    readTime: "6 min",
    status: "drafting",
    excerpt:
      "A practical note on how product engineering instincts transfer into smart contract review, and where they do not.",
    body: [
      "Fullstack work teaches you to think about users, states, permissions, and failure paths. That maps well into smart contract work, but it does not transfer perfectly.",
      "In a web app, a bad assumption can often be patched behind an API, a dashboard, or a database migration. In a protocol, the assumption may already be public, funded, and hard to reverse.",
      "That is the shift I am practicing: less trust in happy paths, more attention to who can call what, when state changes, and what value can move when the system is under pressure.",
    ],
  },
  {
    index: "02",
    slug: "what-i-check-first-in-a-small-solidity-contract",
    title: "What I check first in a small Solidity contract",
    date: "Planned",
    readTime: "8 min",
    status: "planned",
    excerpt:
      "A repeatable review path for access control, external calls, state transitions, and accounting assumptions.",
    body: [
      "For a small Solidity contract, I start by reading the permission model before reading the clever parts. Who owns the contract, who can change settings, and which functions move value?",
      "After that, I look at external calls and state updates. If the contract sends ETH, calls tokens, or depends on another contract, the ordering matters more than the surface-level intent.",
      "Then I write down the assumptions in plain language. If the contract expects balances, roles, or totals to stay true, those expectations should become tests or invariants.",
    ],
  },
];

export function getNoteBySlug(slug: string) {
  return notes.find((note) => note.slug === slug);
}

export const pageIntros = {
  experience: {
    icon: BriefcaseBusiness,
    eyebrow: "professional timeline",
    heading: "Experience that explains the transition.",
    description:
      "The fullstack track is not background noise. It is the operating base for learning protocol security with practical engineering judgment.",
  },
  builds: {
    icon: Boxes,
    eyebrow: "project notes",
    heading: "A few things I can point to.",
    description:
      "A small set of work notes. Some are shipped products; some are learning tracks that are clearly marked as in progress.",
  },
  notes: {
    icon: NotebookText,
    eyebrow: "research notes",
    heading: "A quiet archive for technical writing.",
    description:
      "Short, practical notes on fullstack engineering, smart contract development, and the path toward security review.",
  },
  contact: {
    icon: Mail,
    eyebrow: "open desk",
    heading: "Tell me what you want to build.",
    description:
      "Send a clear note about the work, the timeline, and what kind of help you need. I read useful details faster than vague intros.",
  },
};

export const homeHighlights = [
  {
    label: "Profile",
    value: "Fullstack base, security direction",
  },
  {
    label: "Security",
    value: "Solidity, Foundry, audit-style drills",
  },
  {
    label: "Research",
    value: "Writeups planned as proof improves",
  },
  {
    label: "Growth",
    value: "Transition tracked in public",
  },
];
