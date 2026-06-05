import { ArrowUpRight } from "lucide-react";

import { PageShell } from "@/components/common/page-shell";
import { SectionHeading } from "@/components/common/section-heading";
import { SkillTags } from "@/components/common/skill-tags";
import { builds, pageIntros } from "@/lib/portfolio-data";

export function BuildRegistry() {
  const intro = pageIntros.builds;

  return (
    <PageShell>
      <SectionHeading {...intro} />

      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        {builds.map((build, index) => (
          <article
            key={build.index}
            className={index === 0 ? "lg:col-span-2" : undefined}
          >
            <div className="border-t border-border/35 pt-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-muted-foreground">
                    {build.category}
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold">{build.name}</h2>
                </div>
                <span className="font-sketch text-3xl font-bold text-primary">
                  {build.index}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {build.description}
              </p>
              <p className="mt-4 text-sm font-semibold leading-7 text-foreground/80">
                {build.proof}
              </p>
              <div className="mt-5">
                <SkillTags items={build.stack} />
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-10 bg-white/42 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Next upload
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
          Real repository links, demos, and case-study breakdowns can be attached as soon as the curated project list is finalized.
        </p>
        <a href="mailto:hello@0xsomto.xyz" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          Request project details
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </section>
    </PageShell>
  );
}
