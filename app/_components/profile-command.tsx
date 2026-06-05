import Link from "next/link";
import { ArrowUpRight, Boxes, Code2, ExternalLink, Mail } from "lucide-react";

import { PageShell } from "@/components/common/page-shell";
import { SkillTags } from "@/components/common/skill-tags";
import { Button } from "@/components/ui/button";
import { HeroPortraitCursor } from "./hero-portrait-cursor";
import {
  builds,
  profile,
  skillGroups,
  socialLinks,
} from "@/lib/portfolio-data";

export function ProfileCommand() {
  const featuredBuilds = builds.slice(0, 2);
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
      value:
        "Product engineering, Web3 frontend, and early security-facing work.",
    },
  ];
  const currentStudy = [
    "Solidity fundamentals",
    "Foundry tests",
    "Access control",
    "Reentrancy",
    "Protocol assumptions",
  ];

  return (
    <PageShell className="py-10 sm:py-16">
      <HeroPortraitCursor className="border-b border-border/25 py-8 sm:py-12">
        <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-start cursor-default">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              Page 01 / working note
            </p>
            <p className="font-sketch text-3xl font-bold text-primary">
              Hi, I&apos;m {profile.name}
            </p>
            <h1 className="mt-4 max-w-4xl text-balance text-5xl font-black leading-[0.95] tracking-[-0.06em] text-foreground sm:text-7xl">
              I build useful web products and I&apos;m growing into smart
              contract security.
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
          </div>

          <aside className="border-t border-border/25 pt-6 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
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
          </aside>
        </div>
      </HeroPortraitCursor>

      <section className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div>
          <div className="flex items-end justify-between gap-4 border-b border-border/20 pb-3">
            <div>
              <p className="font-sketch text-3xl font-bold text-primary">
                Selected work
              </p>
              <h2 className="text-2xl font-black tracking-[-0.03em]">
                Small proof I can explain
              </h2>
            </div>
            <Link
              href="/builds"
              className="inline-flex items-center gap-1 text-sm font-bold"
            >
              All builds
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="divide-y divide-border/20">
            {featuredBuilds.map((build) => (
              <article key={build.index} className="py-6">
                <div className="grid gap-4 sm:grid-cols-[6rem_minmax(0,1fr)]">
                  <p className="font-sketch text-3xl font-bold text-primary">
                    {build.index}
                  </p>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-muted-foreground">
                      {build.category}
                    </p>
                    <h3 className="mt-2 text-xl font-black tracking-[-0.02em]">
                      {build.name}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                      {build.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {build.githubHref ? (
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="rounded-none border-border/35 bg-transparent"
                        >
                          <a
                            href={build.githubHref}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            GitHub
                            <Code2 className="h-3.5 w-3.5" />
                          </a>
                        </Button>
                      ) : null}
                      {build.liveHref ? (
                        <Button
                          asChild
                          size="sm"
                          className="rounded-none bg-foreground text-background hover:bg-foreground/85"
                        >
                          <a
                            href={build.liveHref}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            View
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </Button>
                      ) : null}
                    </div>
                    <div className="mt-4">
                      <SkillTags items={build.stack} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="space-y-10">
          <section>
            <p className="font-sketch text-3xl font-bold text-primary">
              Current study
            </p>
            <p className="mt-3 text-sm font-semibold leading-6">
              I am treating smart contract security as practice first, proof
              later.
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
              {currentStudy.map((item) => (
                <li key={item} className="border-b border-border/15 pb-2">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <p className="font-sketch text-3xl font-bold text-primary">
              Toolbox
            </p>
            <div className="mt-4 divide-y divide-border/20 border-y border-border/20">
              {skillGroups.map((group) => (
                <div key={group.title} className="py-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em]">
                    {group.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {group.skills.join(" / ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="flex flex-wrap gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noreferrer noopener" : undefined
                }
                className="inline-flex items-center gap-2 border-b border-border/40 py-1 text-xs font-black uppercase tracking-[0.12em] hover:text-primary"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </section>
        </aside>
      </section>
    </PageShell>
  );
}
