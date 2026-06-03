import { AlertTriangle, CheckCircle2 } from "lucide-react";

import { PageShell } from "@/components/common/page-shell";
import { RegistryCard } from "@/components/common/registry-card";
import { SectionHeading } from "@/components/common/section-heading";
import { SkillTags } from "@/components/common/skill-tags";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { pageIntros, securityLab } from "@/lib/portfolio-data";

const principles = [
  "No invented audit rankings, clients, or findings.",
  "Practice work should become reproducible public proof.",
  "Writeups should explain assumptions, risk, and fix direction.",
  "Fullstack experience remains useful when reviewing protocol-facing apps.",
];

export function SecurityLabRegistry() {
  const intro = pageIntros.securityLab;

  return (
    <PageShell>
      <SectionHeading {...intro} />

      <section className="mt-8 border border-primary/35 bg-primary/10 p-5">
        <div className="flex gap-3">
          <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-primary" />
          <div>
            <p className="font-semibold text-foreground">Transparent status</p>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              This is a learning and practice registry, not a claim of completed professional audits. Entries are labeled by current maturity.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-5">
        {securityLab.map((item) => (
          <RegistryCard
            key={item.index}
            index={item.index}
            title={item.title}
            meta={item.mode}
            status={item.status}
          >
            <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
            <Separator className="my-5" />
            <SkillTags items={item.tags} />
          </RegistryCard>
        ))}
      </section>

      <section className="mt-8 grid gap-4 border border-border bg-card/72 p-5 sm:grid-cols-2">
        {principles.map((principle) => (
          <div key={principle} className="flex gap-3 text-sm leading-6 text-muted-foreground">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{principle}</span>
          </div>
        ))}
      </section>

      <div className="mt-6 flex flex-wrap gap-2">
        <Badge variant="warning">audit claims: none</Badge>
        <Badge variant="outline">practice: active</Badge>
        <Badge variant="outline">public proof: growing</Badge>
      </div>
    </PageShell>
  );
}
