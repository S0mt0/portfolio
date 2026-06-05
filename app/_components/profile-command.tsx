import Link from "next/link";
import { ArrowUpRight, Boxes, Mail } from "lucide-react";

import { PageShell } from "@/components/common/page-shell";
import { SkillTags } from "@/components/common/skill-tags";
import { Button } from "@/components/ui/button";
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
      label: "Since 2022",
      value: "Fullstack developer shipping production web systems.",
    },
    {
      label: "Current track",
      value: "Learning Solidity, Foundry, EVM security, and audit-style review.",
    },
    {
      label: "Open to",
      value: "Fullstack, Web3 frontend, Solidity, and junior audit-facing work.",
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
    <PageShell className="py-10 sm:py-14">
      <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
        <div>
          <p className="font-sketch text-3xl font-bold text-primary">
            Hi, I&apos;m {profile.name}
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-5xl font-black leading-[0.95] tracking-[-0.06em] text-foreground sm:text-7xl">
            I build fullstack products. I&apos;m learning how smart contracts break.
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
              <a href="mailto:hello@0xsomto.xyz">
                Contact
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <aside className="border-l-0 border-border/20 lg:border-l lg:pl-6">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-primary">
            Margin note
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
      </section>

      <section className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div>
          <div className="flex items-end justify-between gap-4 border-b border-border/20 pb-3">
            <div>
              <p className="font-sketch text-3xl font-bold text-primary">Selected work</p>
              <h2 className="text-2xl font-black tracking-[-0.03em]">Proof, not decoration</h2>
            </div>
            <Link href="/builds" className="inline-flex items-center gap-1 text-sm font-bold">
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
            <p className="font-sketch text-3xl font-bold text-primary">Current study</p>
            <p className="mt-3 text-sm font-semibold leading-6">
              The smart-contract track is shown as active study until there is stronger public proof.
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
            <p className="font-sketch text-3xl font-bold text-primary">Toolbox</p>
            <div className="mt-5 grid gap-5">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.14em]">
                    {group.title}
                  </p>
                  <SkillTags items={group.skills} />
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
                rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
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
