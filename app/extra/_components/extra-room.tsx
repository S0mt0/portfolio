import Link from "next/link";
import { ArrowUpRight, Gamepad2, Music2, Video } from "lucide-react";

import {
  MotionBlock,
  MotionItem,
  MotionList,
} from "@/components/common/motion-primitives";
import { PageShell } from "@/components/common/page-shell";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import { extraItems, pageIntros } from "@/lib/portfolio-data";

export function ExtraRoom() {
  const intro = pageIntros.extra;

  return (
    <PageShell>
      <SectionHeading {...intro} tag="PLAY" />

      <section className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <MotionList className="grid gap-4 sm:grid-cols-2">
          {extraItems.map((item, index) => (
            <MotionItem
              key={item.title}
              className={`${item.color} group min-h-52 border border-border/25 p-5 transition-transform hover:-rotate-1`}
            >
              <div className="flex items-start justify-between gap-4">
                <p className="font-sketch text-4xl font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <span className="rotate-6 border border-border/30 bg-background/50 px-2 py-1 text-xs font-black uppercase tracking-[0.14em]">
                  off clock
                </span>
              </div>
              <h2 className="mt-8 text-3xl font-black tracking-[-0.04em]">
                {item.title}
              </h2>
              <p className="mt-4 text-sm font-semibold leading-7 text-foreground/80">
                {item.note}
              </p>
            </MotionItem>
          ))}
        </MotionList>

        <aside className="space-y-6">
          <MotionBlock className="border-y border-border/25 py-6">
            <p className="font-sketch text-3xl font-bold text-primary">
              Quick facts
            </p>
            <div className="mt-4 grid gap-3 text-sm font-semibold leading-7">
              <p className="border-b border-border/20 pb-3">
                I can spend too long on one chess position.
              </p>
              <p className="border-b border-border/20 pb-3">
                8 ball is half aim, half mood.
              </p>
              <p>I like music that feels handmade.</p>
            </div>
          </MotionBlock>

          <MotionBlock className="relative overflow-hidden border border-border/25 bg-card/55 p-5">
            <div className="absolute -right-6 -top-6 h-20 w-20 rotate-12 bg-accent" />
            <Music2 className="relative h-5 w-5 text-primary" />
            <h2 className="relative mt-5 text-2xl font-black tracking-[-0.03em]">
              Music corner
            </h2>
            <p className="relative mt-3 text-sm leading-7 text-muted-foreground">
              When the music links are ready, this is where they should live:
              YouTube, TikTok, SoundCloud, or whatever feels honest.
            </p>
            <div className="relative mt-5 flex flex-wrap gap-2">
              <Button
                asChild
                size="sm"
                variant="outline"
                className="rounded-none border-border/35 bg-transparent"
              >
                <Link href="/contact">
                  Send a link
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </MotionBlock>

          <MotionBlock className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 border border-border/25 bg-secondary/70 px-3 py-2 text-xs font-black uppercase tracking-[0.12em]">
              <Gamepad2 className="h-4 w-4" />
              games
            </span>
            <span className="inline-flex items-center gap-2 border border-border/25 bg-accent/70 px-3 py-2 text-xs font-black uppercase tracking-[0.12em]">
              <Video className="h-4 w-4" />
              videos
            </span>
          </MotionBlock>
        </aside>
      </section>
    </PageShell>
  );
}
