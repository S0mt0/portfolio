import { BASE_URL, VERSION } from "../constants";

const ogImage = `${BASE_URL}/seo/opengraph-image.png?v=${VERSION}`;

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: "Somtochukwu Nkem",
  alternateName: ["Somto Nkem", "talktosomto", "Sewkito"],
  url: BASE_URL,
  image: ogImage,

  jobTitle: "Full-Stack Developer",
  description:
    "Somtochukwu Nkem is a full-stack developer building web products and backend systems, with growing work in smart contract development and security.",

  nationality: {
    "@type": "Country",
    name: "Nigeria",
  },

  address: {
    "@type": "PostalAddress",
    addressCountry: "NG",
  },

  knowsAbout: [
    "Full-stack web development",
    "Backend development",
    "Frontend development",
    "Web product development",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Prisma",
    "MongoDB",
    "PostgreSQL",
    "Solidity",
    "Foundry",
    "Smart contract development",
    "Smart contract security",
  ],

  sameAs: [
    "https://github.com/s0mt0",
    "https://x.com/0xsomto_",
    "https://www.linkedin.com/in/sewkito",
  ],

  mainEntityOfPage: {
    "@type": "WebSite",
    name: "Somtochukwu Nkem",
    url: BASE_URL,
    description:
      "Portfolio, selected work, and notes by Somtochukwu Nkem, a full-stack developer building web products and backend systems.",
    inLanguage: "en-NG",
    publisher: {
      "@type": "Person",
      name: "Somtochukwu Nkem",
      url: BASE_URL,
    },
  },
};
