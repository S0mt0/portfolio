import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, UserRound } from "lucide-react";
import { notFound } from "next/navigation";

import { MotionBlock } from "@/components/common/motion-primitives";
import { PageShell } from "@/components/common/page-shell";
import { RichTextContentRenderer } from "@/components/common/render-richtext";
import { Badge } from "@/components/ui/badge";
import { getNoteContent } from "@/lib/api/pages";
import { NoteComments } from "./_components/note-comments";
import { RelatedNotes } from "./_components/related-notes";

type NotePageProps = {
  params: Promise<{ slug: string }>;
};

const formatDate = (value?: string | null) =>
  value
    ? new Intl.DateTimeFormat("en", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).format(new Date(value))
    : "Unpublished";

export async function generateMetadata({
  params,
}: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const response = await getNoteContent(slug);
  const note = response?.data;

  if (!note) return { title: "Note" };

  return {
    title: note.title,
    description: note.excerpt,
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const response = await getNoteContent(slug);
  const note = response?.data;

  if (!note) notFound();

  return (
    <PageShell>
      <MotionBlock className="space-y-10">
        <Link
          href="/notes"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to notes
        </Link>

        <article className="space-y-8">
          <header className="border-b border-border/20 pb-8">
            <div className="flex flex-wrap items-center gap-2">
              {note.tags?.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="rounded-none bg-background/60"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl">
              {note.title}
            </h1>
            {note.excerpt ? (
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                {note.excerpt}
              </p>
            ) : null}

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <UserRound className="h-4 w-4 text-primary" />
                {note.author?.name || "Somto"}
              </span>
              <span>{formatDate(note.publishedAt)}</span>
              <span>Updated {formatDate(note.updatedAt)}</span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                {note.readTime}
              </span>
            </div>
          </header>

          {note.bannerImage ? (
            <figure className="space-y-3">
              <div className="relative aspect-[16/9] overflow-hidden border border-border/25 bg-accent/35">
                <Image
                  src={note.bannerImage}
                  alt={note.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 1024px"
                  className="object-cover"
                  priority
                />
              </div>
              {note.bannerCaption ? (
                <figcaption className="text-sm text-muted-foreground">
                  {note.bannerCaption}
                </figcaption>
              ) : null}
            </figure>
          ) : null}

          <RichTextContentRenderer
            content={note.content}
            className="notes-prose max-w-none text-base leading-8 text-foreground/88"
          />
        </article>

        {note.allowComments ? (
          <NoteComments slug={note.slug} initialComments={note.comments || []} />
        ) : null}

        <RelatedNotes notes={note.relatedPosts || []} />
      </MotionBlock>
    </PageShell>
  );
}
