import type { Metadata } from "next";
import { Caveat, JetBrains_Mono, Raleway } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";
import { cn } from "@/lib/utils";

import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  fallback: ["Arial"],
  variable: "--font-raleway",
});

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: {
    default: "0xSomto | Fullstack Developer & Smart Contract Security Lab",
    template: "%s | 0xSomto",
  },
  description:
    "Somto's portfolio: fullstack engineering work, Web3 builds, Solidity learning, and a transparent smart contract security lab.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn(
        "h-full scroll-smooth antialiased",
        raleway.variable,
        jetbrainsMono.variable,
        caveat.variable
      )}
    >
      <body className="min-h-full text-foreground">
        {/* <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(252,207,232,0.75),transparent_26%),radial-gradient(circle_at_85%_20%,rgba(192,225,255,0.85),transparent_25%),radial-gradient(circle_at_50%_90%,rgba(255,227,139,0.55),transparent_30%)]" /> */}
        {/* <div className="fixed inset-0 -z-10 opacity-45 [background-image:linear-gradient(120deg,transparent_0_46%,rgba(76,88,110,0.16)_47%,transparent_48%_100%)] [background-size:64px_64px]" /> */}
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

/*
Hi, I'm Somto

I build useful web products and I'm growing into smart contract security.
building
I build production web systems, then study how protocol logic breaks. The current mission is to turn fullstack delivery experience into smart contract development and security depth.


 */
