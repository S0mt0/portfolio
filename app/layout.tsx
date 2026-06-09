import type { Metadata, Viewport } from "next";
import { Caveat, JetBrains_Mono, Raleway } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";
import { ThemeProvider } from "@/components/layout/theme-provider";
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
    default: "Somto | Fullstack Developer",
    template: "%s | Somto",
  },
  description:
    "Somto's portfolio: fullstack engineering work, Web3 builds, Solidity learning, and practical notes.",
};

export const viewport: Viewport = {
  userScalable: false,
  maximumScale: 1.0,
  initialScale: 1,
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
      suppressHydrationWarning
      className={cn(
        "h-full scroll-smooth antialiased",
        raleway.variable,
        jetbrainsMono.variable,
        caveat.variable
      )}
    >
      <body className="min-h-full text-foreground">
        <ThemeProvider>
          <SiteNav />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
