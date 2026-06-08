import { builds, notes, profile, skillGroups } from "@/lib/portfolio-data";

export type LandingContent = {
  hero: {
    pageLabel: string;
    greeting: string;
    headline: string;
    intro: string;
    portraitImageUrl: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
    snapshots: {
      label: string;
      value: string;
    }[];
  };
  selectedWorks: {
    eyebrow: string;
    title: string;
    linkLabel: string;
    linkHref: string;
    featuredIndexes: string[];
  };
  selectedNotes: {
    eyebrow: string;
    title: string;
    linkLabel: string;
    linkHref: string;
    featuredSlugs: string[];
  };
  aside: {
    studyTitle: string;
    studyDescription: string;
    studyItems: string[];
    toolboxTitle: string;
    skillGroups: {
      title: string;
      skills: string[];
    }[];
  };
};

export const fallbackLandingContent: LandingContent = {
  hero: {
    pageLabel: "Page 01 / working note",
    greeting: `Hi, I'm ${profile.name}`,
    headline:
      "I'm a full-stack web developer, and I'm currently learning more about smart contract development and security.",
    // headline:
    //   "I build web products and backend systems, while growing deeper into smart contract development and security.",
    intro: profile.intro,
    portraitImageUrl: "/dp.png",
    primaryCta: {
      label: "See builds",
      href: "/builds",
    },
    secondaryCta: {
      label: "Contact",
      href: "/contact",
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
    featuredIndexes: builds.slice(0, 2).map((build) => build.index),
  },
  selectedNotes: {
    eyebrow: "Selected notes",
    title: "Writing on engineering, Web3, and other fun stuff (maybe 😉)",
    linkLabel: "All notes",
    linkHref: "/notes",
    featuredSlugs: notes.slice(0, 2).map((note) => note.slug),
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
    skillGroups,
  },
};

export async function getLandingContent() {
  const cmsUrl =
    process.env.PORTFOLIO_CMS_URL || process.env.NEXT_PUBLIC_PORTFOLIO_CMS_URL;

  if (!cmsUrl) return fallbackLandingContent;

  try {
    const response = await fetch(`${cmsUrl}/api/public/landing`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) return fallbackLandingContent;

    const payload = (await response.json()) as { data?: LandingContent };
    return payload.data ?? fallbackLandingContent;
  } catch {
    return fallbackLandingContent;
  }
}
