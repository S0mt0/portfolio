import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

import { PageShell } from "@/components/common/page-shell";
import { Badge } from "@/components/ui/badge";
import { getNoteBySlug, notes } from "@/lib/portfolio-data";

type NotePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return notes.map((note) => ({
    slug: note.slug,
  }));
}

export async function generateMetadata({
  params,
}: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    return {
      title: "Note",
    };
  }

  return {
    title: note.title,
    description: note.excerpt,
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  return (
    <PageShell>
      <article className="border-y border-border/25 py-8 sm:py-12">
        <Link
          href="/notes"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to notes
        </Link>

        <div className="mt-8 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-sketch text-4xl font-bold text-primary">
              {note.index}
            </span>
            <Badge variant="outline" className="rounded-none bg-background/55">
              {note.status}
            </Badge>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
              {note.date} / {note.readTime}
            </p>
          </div>

          <h1 className="mt-5 text-balance text-4xl font-black leading-tight tracking-[-0.04em] sm:text-6xl">
            {note.title}
          </h1>
          <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
            {note.excerpt}
          </p>
        </div>

        <div className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-foreground/85">
          {note.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </PageShell>
  );
}
