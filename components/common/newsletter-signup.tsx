"use client";

import { Mail, Send, X } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import Confetti from "react-confetti";

import { Button } from "@/components/ui/button";
import { subscribeToNewsletter } from "@/lib/api/pages";
import { cn } from "@/lib/utils";

const SUBSCRIBED_KEY = "somto_newsletter_subscribed";
const PROMPT_COUNT_KEY = "somto_newsletter_prompt_count";
const MAX_PROMPTS = 3;

type NewsletterSignupProps = {
  mode?: "button" | "prompt";
  source?: string;
  triggerAtHalfway?: boolean;
  targetId?: string;
  className?: string;
};

export function NewsletterSignup({
  mode = "button",
  source = "footer",
  triggerAtHalfway = false,
  targetId,
  className,
}: NewsletterSignupProps) {
  const [openConfetti, setOpenConfetti] = useState(false);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (!triggerAtHalfway || !targetId) return;
    if (window.localStorage.getItem(SUBSCRIBED_KEY) === "1") return;

    const promptCount = Number(
      window.localStorage.getItem(PROMPT_COUNT_KEY) ?? "0"
    );
    if (promptCount >= MAX_PROMPTS) return;

    const onScroll = () => {
      const target = document.getElementById(targetId);
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const targetTop = rect.top + window.scrollY;
      const halfway = targetTop + target.offsetHeight * 0.6;
      const viewportBottom = window.scrollY + window.innerHeight;

      if (viewportBottom < halfway) return;

      window.localStorage.setItem(PROMPT_COUNT_KEY, String(promptCount + 1));
      setOpen(true);
      window.removeEventListener("scroll", onScroll);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [targetId, triggerAtHalfway]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    startTransition(async () => {
      const response = await subscribeToNewsletter({
        email,
        source,
        page: typeof window === "undefined" ? undefined : window.location.href,
      });

      console.log({ response });

      if (!response?.success) {
        setMessage(response?.message || "Could not subscribe yet.");
        return;
      }

      if (response.data?.subscribed) {
        window.localStorage.setItem(SUBSCRIBED_KEY, "1");
        setMessage(
          response.message || "Thank you for signing up to my newsletters"
        );
        setEmail("");
        window.setTimeout(() => setOpenConfetti(false), 7000);
      }
    });
  };

  return (
    <>
      {openConfetti ? (
        <Confetti
          gravity={0.1}
          initialVelocityX={2}
          initialVelocityY={3.435}
          numberOfPieces={200}
          opacity={1}
          recycle
          run
          wind={0}
        />
      ) : null}
      {mode === "button" ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={cn(
            "inline-flex cursor-pointer items-center gap-2 border-b border-border/40 py-1 text-xs font-bold uppercase tracking-[0.12em] transition-colors hover:text-primary",
            className
          )}
        >
          <Mail className="h-3.5 w-3.5" />
          Newsletters
        </button>
      ) : null}
      {open ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-background/35 px-4">
          <div className="w-full max-w-md border border-border/30 bg-background p-5 shadow-[8px_8px_0_hsl(var(--foreground)/0.08)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-sketch text-3xl font-bold text-primary">
                  Stay in the loop.
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  I occasionally write about building products, backend
                  engineering, my journey into smart contract security, and
                  other relevant articles or news in the tech ecosystem.
                </p>
                <p className="mt-2 text-sm font-semibold">
                  No spam. Just new articles and things I am learning.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close newsletter prompt"
                className="text-muted-foreground hover:text-primary cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={onSubmit} className="mt-5 grid gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="h-12 rounded-none border border-border/35 bg-background px-3 text-sm outline-none focus:border-primary"
              />
              <Button type="submit" disabled={isPending}>
                <Send className="h-4 w-4" />
                {isPending ? "Subscribing..." : "Subscribe"}
              </Button>
              {message ? (
                <p className="text-xs font-semibold text-muted-foreground">
                  {message}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
