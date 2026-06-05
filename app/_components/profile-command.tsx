import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Boxes,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { PageShell } from "@/components/common/page-shell";
import { SkillTags } from "@/components/common/skill-tags";
import { StatusBadge } from "@/components/common/status-badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  builds,
  profile,
  securityLab,
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
  const railItems = [
    { href: "/", label: "Home", icon: Sparkles, active: true },
    { href: "/experience", label: "Experience", icon: BookOpen },
    { href: "/builds", label: "Builds", icon: Boxes },
    { href: "/security-lab", label: "Lab", icon: ShieldCheck },
  ];

  return (
    <PageShell>
      <section className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <nav
          aria-label="Portfolio shortcut rail"
          className="order-2 flex gap-2 overflow-x-auto border-y border-border/30 py-2 lg:col-span-2"
        >
          {railItems.map(({ href, label, icon: Icon, active }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className={[
                "inline-flex h-10 shrink-0 items-center gap-2 rounded-xl border px-3 text-sm font-bold transition-colors",
                active
                  ? "border-border bg-[#ffc7e8] text-foreground"
                  : "border-border/50 bg-white/65 text-muted-foreground hover:bg-white",
              ].join(" ")}
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        <div className="order-1 grid gap-4 lg:order-none">
          <section className="rounded-2xl bg-white/72 p-5 sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-sketch text-3xl font-bold text-primary">
                  Hi, I&apos;m {profile.name}
                </p>
                <h1 className="mt-3 max-w-3xl text-balance text-4xl font-extrabold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl">
                  I build useful web products and I&apos;m growing into smart contract security.
                </h1>
              </div>
              <StatusBadge status={profile.status} />
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
              {profile.intro}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="h-11 rounded-xl border border-border bg-[#ffc7e8] px-5 text-foreground shadow-sm hover:bg-[#ffb7e2]"
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
                className="h-11 rounded-xl border border-border bg-white px-5 shadow-sm"
              >
                <Link href="/security-lab">
                  Security lab
                  <ShieldCheck className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>

          <section className="grid gap-3 border-y border-border/30 py-5 sm:grid-cols-3">
            {snapshotItems.map((item) => (
              <div key={item.label}>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-foreground/82">
                  {item.value}
                </p>
              </div>
            ))}
          </section>

          <section className="py-3">
            <div className="mb-3 flex items-center justify-between gap-4">
              <div>
                <p className="font-sketch text-3xl font-bold text-primary">Selected work</p>
                <h2 className="text-2xl font-extrabold">Proof, not decoration</h2>
              </div>
              <Link href="/builds" className="inline-flex items-center gap-1 text-sm font-bold">
                All builds
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="divide-y divide-border/30">
              {featuredBuilds.map((build) => (
                <article key={build.index} className="py-5 first:pt-2 last:pb-0">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-muted-foreground">
                        {build.category}
                      </p>
                      <h3 className="mt-2 text-xl font-extrabold text-foreground">
                        {build.name}
                      </h3>
                    </div>
                    <span className="w-fit rounded-full border border-border/50 bg-white/70 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em]">
                      {build.status}
                    </span>
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                    {build.description}
                  </p>
                  <div className="mt-4">
                    <SkillTags items={build.stack} />
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="order-3 grid gap-4 lg:order-none">
          <section className="rounded-2xl bg-[#dff7ff]/70 p-5">
            <p className="font-sketch text-3xl font-bold">Now</p>
            <p className="mt-2 text-sm font-semibold leading-6">
              Fullstack proof stays visible while I build public Solidity and security-review artifacts.
            </p>
            <Separator className="my-4 bg-border" />
            <div className="space-y-3 text-sm leading-6 text-muted-foreground">
              <p>
                <span className="font-bold text-foreground">Now:</span>{" "}
                {securityLab[0].title}
              </p>
              <p>{securityLab[0].description}</p>
              <Link
                href="/security-lab"
                className="inline-flex items-center gap-2 font-bold text-foreground"
              >
                Open lab
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </section>

          <section className="rounded-2xl border border-border/40 bg-white/64 p-5">
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

          <section className="flex flex-wrap gap-2">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <Button
                key={label}
                asChild
                variant="outline"
                size="sm"
                className="h-10 rounded-full border border-border/70 bg-white"
              >
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              </Button>
            ))}
          </section>
        </aside>
      </section>
    </PageShell>
  );
}
