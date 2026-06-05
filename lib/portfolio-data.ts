import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Boxes,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Mail,
  Network,
  NotebookText,
  ShieldCheck,
  Terminal,
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
};

export type SecurityLabItem = {
  index: string;
  title: string;
  mode: string;
  status: "active" | "queued" | "documented";
  description: string;
  tags: string[];
};

export type NoteItem = {
  index: string;
  title: string;
  date: string;
  readTime: string;
  status: "drafting" | "planned" | "published";
  excerpt: string;
  href: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Profile", code: "home" },
  { href: "/experience", label: "Experience", code: "xp" },
  { href: "/builds", label: "Builds", code: "builds" },
  { href: "/notes", label: "Notes", code: "notes" },
];

export const profile: ProfileInfo = {
  name: "Somto",
  handle: "0xSomto",
  role: "Fullstack developer transitioning into smart contract engineering and security review",
  status: "building",
  location: "Nigeria / remote",
  availability: "Open to fullstack, Web3, Solidity, and junior audit-facing roles",
  intro:
    "I build production web systems, then study how protocol logic breaks. The current mission is to turn fullstack delivery experience into smart contract development and security depth.",
  summary:
    "Since 2022 I have worked across product interfaces, backend flows, dashboards, and Web3-adjacent systems. This portfolio is structured as a live operating log: what I have shipped, what I am studying, and where the security track is becoming real proof.",
  stats: [
    { label: "since", value: "2022", note: "fullstack development" },
    { label: "track", value: "EVM", note: "Solidity + auditing" },
    { label: "mode", value: "Lab", note: "proof over claims" },
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
    title: "Fullstack Engineering",
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
    title: "Frontend State & UI",
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
    title: "Web3 & Smart Contracts",
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
    title: "Security Practice",
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
  },
];

export const securityLab: SecurityLabItem[] = [
  {
    index: "001",
    title: "Access Control Review Practice",
    mode: "audit drill",
    status: "active",
    description:
      "Mapping role boundaries, privileged flows, and unsafe assumptions in small Solidity systems.",
    tags: ["Solidity", "Roles", "Threat model"],
  },
  {
    index: "002",
    title: "Reentrancy and External Call Notes",
    mode: "vulnerability class",
    status: "documented",
    description:
      "Studying call ordering, state transitions, and defensive patterns through small reproducible examples.",
    tags: ["Reentrancy", "Foundry", "CEI"],
  },
  {
    index: "003",
    title: "Invariant Testing Routine",
    mode: "testing practice",
    status: "queued",
    description:
      "Turning protocol expectations into testable invariants before writing longer security reports.",
    tags: ["Invariant", "Fuzzing", "Foundry"],
  },
];

export const notes: NoteItem[] = [
  {
    index: "01",
    title: "From fullstack assumptions to protocol assumptions",
    date: "Drafting",
    readTime: "6 min",
    status: "drafting",
    excerpt:
      "A practical note on how product engineering instincts transfer into smart contract review, and where they do not.",
    href: "#",
  },
  {
    index: "02",
    title: "What I check first in a small Solidity contract",
    date: "Planned",
    readTime: "8 min",
    status: "planned",
    excerpt:
      "A repeatable review path for access control, external calls, state transitions, and accounting assumptions.",
    href: "#",
  },
];

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
    eyebrow: "project registry",
    heading: "Systems shipped, labs in progress.",
    description:
      "Selected work is grouped by proof. Some entries are shipped products; some are intentionally labeled as learning infrastructure.",
  },
  securityLab: {
    icon: ShieldCheck,
    eyebrow: "security lab",
    heading: "Audit practice without fake audit claims.",
    description:
      "This page tracks the vulnerability classes, Foundry routines, and security notes that will become stronger public proof over time.",
  },
  notes: {
    icon: NotebookText,
    eyebrow: "research notes",
    heading: "A quiet archive for technical writing.",
    description:
      "Short, practical notes on fullstack engineering, smart contract development, and the path toward security review.",
  },
};

export const homeHighlights = [
  {
    icon: Terminal,
    label: "Profile",
    value: "Fullstack base, security direction",
  },
  {
    icon: ShieldCheck,
    label: "Security",
    value: "Solidity, Foundry, audit-style drills",
  },
  {
    icon: BookOpen,
    label: "Research",
    value: "Writeups planned as proof improves",
  },
  {
    icon: GraduationCap,
    label: "Growth",
    value: "Transition tracked in public",
  },
];
