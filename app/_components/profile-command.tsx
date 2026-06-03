import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Boxes,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { PageShell } from "@/components/common/page-shell";
import { RegistryCard } from "@/components/common/registry-card";
import { SkillTags } from "@/components/common/skill-tags";
import { StatusBadge } from "@/components/common/status-badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  builds,
  homeHighlights,
  profile,
  securityLab,
  skillGroups,
  socialLinks,
} from "@/lib/portfolio-data";

export function ProfileCommand() {
  const featuredBuilds = builds.slice(0, 2);
  const primarySkillGroups = skillGroups.slice(0, 3);
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

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {profile.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={[
                    "rounded-xl border border-border/60 p-4",
                    index === 0 && "bg-[#ffe07a]",
                    index === 1 && "bg-[#b9ebf5]",
                    index === 2 && "bg-[#eee8ff]",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-3xl font-black">{stat.value}</p>
                  <p className="mt-2 text-xs font-semibold leading-5">{stat.note}</p>
                </div>
              ))}
            </div>

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

          <section className="grid gap-x-6 gap-y-4 border-y border-border/30 py-5 sm:grid-cols-2 xl:grid-cols-4">
            {homeHighlights.map(({ icon: Icon, label, value }, index) => (
              <div
                key={label}
                className={[
                  "relative pl-12",
                  index === 1 && "",
                  index === 2 && "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <span className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-xl border border-border/70 bg-white/80">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="font-bold">{label}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {value}
                </p>
              </div>
            ))}
          </section>

          <section className="rounded-2xl border border-border/60 bg-[#f8f5ff]/80 p-4 sm:p-5">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="font-sketch text-3xl font-bold text-primary">Work table</p>
                <h2 className="text-2xl font-extrabold">Selected proof</h2>
              </div>
              <Link href="/builds" className="inline-flex items-center gap-1 text-sm font-bold">
                All builds
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              {featuredBuilds.map((build) => (
                <RegistryCard
                  key={build.index}
                  index={build.index}
                  title={build.name}
                  meta={build.category}
                  status={build.status}
                  className="bg-white"
                >
                  <p className="text-sm leading-7 text-muted-foreground">{build.description}</p>
                  <div className="mt-5">
                    <SkillTags items={build.stack} />
                  </div>
                </RegistryCard>
              ))}
            </div>
          </section>
        </div>

        <aside className="order-3 grid gap-4 lg:order-none">
          <section className="rounded-2xl bg-[#dff7ff]/82 p-5">
            <p className="font-sketch text-3xl font-bold">Current focus</p>
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

          <section className="rounded-2xl border border-border/50 bg-white/70 p-5">
            <p className="font-sketch text-3xl font-bold text-primary">Toolbox</p>
            <div className="mt-5 grid gap-4">
              {primarySkillGroups.map((group) => (
                <div key={group.title}>
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.14em]">
                    {group.title}
                  </p>
                  <SkillTags items={group.skills.slice(0, 4)} />
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
