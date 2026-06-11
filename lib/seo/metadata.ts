import type { Metadata } from "next";

import { BASE_URL, VERSION } from "../constants";

const siteName = "Somtochukwu Nkem";
const title = "Welcome to my Developer Portfolio - Somtochukwu Nkem";
const description =
  "Full-stack developer building web products, backend systems, and practical tools. I write about engineering, product building, and my path into smart contract security.";

const ogImage = `/seo/opengraph-image.png?v=${VERSION}`;

export const seoMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: title,
    template: `%s | ${siteName}`,
  },

  description,

  applicationName: siteName,

  authors: [
    {
      name: siteName,
      url: BASE_URL,
    },
  ],

  creator: siteName,

  publisher: siteName,

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    title,
    description,
    url: BASE_URL,
    siteName,
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Somtochukwu Nkemakolam — full-stack developer portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@talktosomto",
    images: [ogImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  keywords: [
    "Somtochukwu Nkemakolam",
    "Somtochukwu Nkem",
    "Somto Nkem",
    "Somto",
    "Somtochukwu",
    "talktosomto",
    "full-stack developer",
    "backend developer",
    "frontend developer",
    "Next.js developer",
    "TypeScript developer",
    "React developer",
    "Node.js developer",
    "Solidity developer",
    "smart contract security",
    "developer portfolio Nigeria",
  ],

  category: "Technology",

  other: {
    "profile:first_name": "Somtochukwu",
    "profile:last_name": "Nkemakolam",
    "profile:username": "0xsomto_",
  },
};
