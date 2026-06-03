import { ArrowUpRight } from "lucide-react";

import { PageShell } from "@/components/common/page-shell";
import { RegistryCard } from "@/components/common/registry-card";
import { SectionHeading } from "@/components/common/section-heading";
import { SkillTags } from "@/components/common/skill-tags";
import { Separator } from "@/components/ui/separator";
import { builds, pageIntros } from "@/lib/portfolio-data";

export function BuildRegistry() {
  const intro = pageIntros.builds;

  return (
    <PageShell>
      <SectionHeading {...intro} />

      <section className="mt-8 grid gap-5">
        {builds.map((build) => (
          <RegistryCard
            key={build.index}
            index={build.index}
            title={build.name}
            meta={build.category}
            status={build.status}
          >
            <p className="text-sm leading-7 text-muted-foreground">{build.description}</p>
            <Separator className="my-5" />
            <div className="grid gap-5 lg:grid-cols-[1fr_0.75fr]">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {"// tech stack"}
                </p>
                <SkillTags items={build.stack} />
              </div>
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {"// proof signal"}
                </p>
                <p className="text-sm leading-7 text-muted-foreground">{build.proof}</p>
              </div>
            </div>
          </RegistryCard>
        ))}
      </section>

      <section className="mt-8 border border-border bg-card/72 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          {"// next upload"}
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
