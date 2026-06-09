import { profile, skillGroups } from "@/lib/fallbacks/portfolio-data";

export const fallbackLandingContent: ILandingContent = {
  hero: {
    pageLabel: "Page 01 / working note",
    greeting: `Hi, I'm ${profile.name}`,
    headline:
      "I'm a full-stack web developer, and I'm currently learning more about smart contract development and security.",
    intro: profile.intro,
    portraitImageUrl: "/dp.png",
    primaryCta: {
      label: "See builds",
      href: "/builds",
      published: true,
      variant: "primary",
    },
    secondaryCta: {
      label: "Contact",
      href: "/contact",
      published: true,
      variant: "secondary",
    },
    snapshots: [
      {
        label: "Started",
        value: "Fullstack work since 2022.",
      },
      {
        label: "Now",
        value: "Building deeper Solidity and security habits.",
      },
      {
        label: "Open to",
        value:
          "Product engineering, Web3 frontend, and early security-facing work.",
      },
    ],
  },
  selectedWorks: {
    eyebrow: "Selected work",
    title: "Small proof I can explain",
    linkLabel: "All builds",
    linkHref: "/builds",
    featuredCount: 2,
    items: [],
  },
  selectedNotes: {
    eyebrow: "Selected notes",
    title: "Writing on engineering, Web3, and other fun stuff (maybe 😉)",
    linkLabel: "All notes",
    linkHref: "/notes",
    featuredCount: 2,
    items: [],
  },
  aside: {
    studyTitle: "Current study",
    studyDescription:
      "I am treating smart contract security as practice first, proof later.",
    studyItems: [
      "Solidity fundamentals",
      "Foundry tests",
      "Access control",
      "Reentrancy",
      "Protocol assumptions",
    ],
    toolboxTitle: "Toolbox",
    toolboxDescription:
      "The tools I reach for when I need to build, shape, ship, or study a system properly.",
    skillGroups,
  },
};
