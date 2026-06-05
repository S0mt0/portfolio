import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { MotionItem, MotionList } from "@/components/common/motion-primitives";
import { Badge } from "@/components/ui/badge";
import { notes } from "@/lib/portfolio-data";

export function NotesList() {
  return (
    <MotionList className="mt-8 divide-y divide-border/30">
      {notes.map((note) => (
        <MotionItem
          key={note.index}
          className="group grid gap-4 py-6 transition-colors hover:bg-secondary/25 first:pt-0 md:grid-cols-[8rem_minmax(0,1fr)]"
        >
          <div>
            <p className="font-sketch text-3xl font-bold text-primary transition-transform group-hover:-rotate-3">
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
            <Link
              href={`/notes/${note.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Read note / {note.readTime}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </MotionItem>
      ))}
    </MotionList>
  );
}
