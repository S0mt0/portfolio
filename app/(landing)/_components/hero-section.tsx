import Link from "next/link";
import { Boxes, Mail } from "lucide-react";

import { MotionBlock } from "@/components/common/motion-primitives";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio-data";
import { HeroPortraitCursor } from "./hero-portrait-cursor";

const snapshotItems = [
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
    value: "Product engineering, Web3 frontend, and early security-facing work.",
  },
];

export function HeroSection() {
  return (
    <HeroPortraitCursor className="border-b border-border/25 py-8 sm:py-12">
      <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-start">
        <MotionBlock>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
            Page 01 / working note
          </p>
          <p className="font-sketch text-3xl font-bold text-primary">
            Hi, I&apos;m {profile.name}
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-black leading-[0.95] tracking-[-0.06em] text-foreground sm:text-5xl lg:text-6xl">
            I build useful web products and I&apos;m growing into smart contract
            security.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="h-11 rounded-none bg-foreground px-5 text-background hover:bg-foreground/85"
            >
              <Link href="/builds">
                See builds
                <Boxes className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 rounded-none border-border/40 bg-transparent px-5"
            >
              <Link href="/contact">
                Contact
                <Mail className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </MotionBlock>

        <MotionBlock className="border-t border-border/25 pt-6 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <p className="font-sketch text-3xl font-bold text-primary">
            Side notes
          </p>
          <div className="mt-4 space-y-5">
            {snapshotItems.map((item) => (
              <div key={item.label}>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-semibold leading-6">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </MotionBlock>
      </div>
    </HeroPortraitCursor>
  );
}
