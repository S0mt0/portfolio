"use client";

import { Heart, Send } from "lucide-react";
import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { likeNoteComment, sendNoteComment } from "@/lib/api/pages";
import type { PublicNoteComment } from "@/lib/types/notes";

type NoteCommentsProps = {
  slug: string;
  initialComments: PublicNoteComment[];
};

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));

export function NoteComments({ slug, initialComments }: NoteCommentsProps) {
  const [comments, setComments] = useState(initialComments);
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    content: "",
  });
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  const updateField =
    (key: keyof typeof form) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: event.target.value }));
    };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    startTransition(async () => {
      const response = await sendNoteComment(slug, form);

      if (!response?.success || !response.data) {
        setMessage(response?.message || "Could not post comment.");
        return;
      }

      setComments((prev) => [response.data!, ...prev]);
      setForm({ name: "", email: "", website: "", content: "" });
      setMessage("Comment posted.");
    });
  };

  const onLike = (id: string) => {
    startTransition(async () => {
      const response = await likeNoteComment(slug, id);
      if (!response?.data) return;

      setComments((prev) =>
        prev.map((comment) =>
          comment.id === id
            ? { ...comment, likes: response.data?.likes || comment.likes }
            : comment
        )
      );
    });
  };

  return (
    <section className="border-t border-border/20 pt-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-sketch text-3xl font-bold text-primary">
            Comments
          </p>
          <p className="text-sm text-muted-foreground">
            Leave a useful note. Name and email are required.
          </p>
        </div>
        <span className="font-mono text-xs font-black uppercase tracking-[0.18em] text-muted-foreground">
          {comments.length} total
        </span>
      </div>

      <form
        onSubmit={onSubmit}
        className="mt-5 grid gap-3 border border-border/25 bg-card/45 p-4"
      >
        <div className="grid gap-3 sm:grid-cols-3">
          <input
            value={form.name}
            onChange={updateField("name")}
            placeholder="Name"
            required
            className="h-11 rounded-none border border-border/35 bg-background/50 px-3 text-sm outline-none focus:border-primary"
          />
          <input
            value={form.email}
            onChange={updateField("email")}
            type="email"
            placeholder="Email"
            required
            className="h-11 rounded-none border border-border/35 bg-background/50 px-3 text-sm outline-none focus:border-primary"
          />
          <input
            value={form.website}
            onChange={updateField("website")}
            placeholder="Website, optional"
            className="h-11 rounded-none border border-border/35 bg-background/50 px-3 text-sm outline-none focus:border-primary"
          />
        </div>
        <textarea
          value={form.content}
          onChange={updateField("content")}
          placeholder="Join the discussion..."
          required
          className="min-h-32 rounded-none border border-border/35 bg-background/50 p-3 text-sm outline-none focus:border-primary"
        />
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-semibold text-muted-foreground">
            {message}
          </p>
          <Button type="submit" disabled={isPending}>
            <Send className="h-4 w-4" />
            Post comment
          </Button>
        </div>
      </form>

      {comments.length ? (
        <div className="mt-6 space-y-5">
          {comments.map((comment) => (
            <article
              key={comment.id}
              className="grid gap-3 border-b border-border/20 pb-5 sm:grid-cols-[3rem_minmax(0,1fr)]"
            >
              <div className="flex h-11 w-11 items-center justify-center bg-accent font-black">
                {comment.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-bold">{comment.name}</p>
                  <span className="text-xs text-muted-foreground">
                    {formatDate(comment.createdAt)}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {comment.content}
                </p>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => onLike(comment.id)}
                  className="mt-2 h-8 px-0 text-muted-foreground hover:text-primary"
                >
                  <Heart className="h-4 w-4" />
                  {comment.likes}
                </Button>
              </div>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
}
