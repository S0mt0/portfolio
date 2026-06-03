import { CheckCircle2 } from "lucide-react";

import { PageShell } from "@/components/common/page-shell";
import { RegistryCard } from "@/components/common/registry-card";
import { SectionHeading } from "@/components/common/section-heading";
import { Separator } from "@/components/ui/separator";
import { experience, pageIntros, profile } from "@/lib/portfolio-data";

export function ExperienceRegistry() {
  const intro = pageIntros.experience;

  return (
    <PageShell>
      <SectionHeading {...intro} />

      <section className="mt-8 grid gap-5">
        {experience.map((item) => (
          <RegistryCard
            key={item.index}
            index={item.index}
            title={item.role}
            meta={item.period}
            status={item.status}
          >
            <p className="text-sm leading-7 text-muted-foreground">{item.summary}</p>
            <Separator className="my-5" />
            <ul className="grid gap-3 sm:grid-cols-2">
              {item.signals.map((signal) => (
                <li key={signal} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
          </RegistryCard>
        ))}
      </section>

      <section className="mt-8 border border-border bg-card/72 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          {"// operating note"}
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
          {profile.summary}
        </p>
      </section>
    </PageShell>
  );
}
