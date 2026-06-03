import { ArrowUpRight } from "lucide-react";

import { PageShell } from "@/components/common/page-shell";
import { RegistryCard } from "@/components/common/registry-card";
import { SectionHeading } from "@/components/common/section-heading";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { notes, pageIntros } from "@/lib/portfolio-data";

export function NotesArchive() {
  const intro = pageIntros.notes;

  return (
    <PageShell>
      <SectionHeading {...intro} />

      <section className="mt-8 grid gap-5">
        {notes.map((note) => (
          <RegistryCard
            key={note.index}
            index={note.index}
            title={note.title}
            meta={`${note.date} / ${note.readTime}`}
            status={note.status}
          >
            <p className="text-sm leading-7 text-muted-foreground">{note.excerpt}</p>
            <Separator className="my-5" />
            <div className="flex items-center justify-between gap-4">
              <Badge variant="outline">writeup</Badge>
              <a href={note.href} className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Read when published
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </RegistryCard>
        ))}
      </section>
    </PageShell>
  );
}
