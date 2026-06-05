import { ArrowUpRight } from "lucide-react";

import { PageShell } from "@/components/common/page-shell";
import { SectionHeading } from "@/components/common/section-heading";
import { Badge } from "@/components/ui/badge";
import { notes, pageIntros } from "@/lib/portfolio-data";

export function NotesArchive() {
  const intro = pageIntros.notes;

  return (
    <PageShell>
      <SectionHeading {...intro} />

      <section className="mt-8 divide-y divide-border/30">
        {notes.map((note) => (
          <article
            key={note.index}
            className="grid gap-4 py-6 first:pt-0 md:grid-cols-[8rem_minmax(0,1fr)]"
          >
            <div>
              <p className="font-sketch text-3xl font-bold text-primary">
                {note.index}
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
                {note.date}
              </p>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-2xl font-extrabold">{note.title}</h2>
                <Badge variant="outline">{note.status}</Badge>
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
                {note.excerpt}
              </p>
              <a href={note.href} className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Read when published / {note.readTime}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
