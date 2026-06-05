import { CheckCircle2 } from "lucide-react";

import { MotionItem, MotionList } from "@/components/common/motion-primitives";
import { experience } from "@/lib/portfolio-data";

export function ExperienceTimeline() {
  return (
    <MotionList className="mt-8 grid gap-6">
      {experience.map((item) => (
        <MotionItem
          key={item.index}
          className="group grid gap-4 border-b border-border/30 pb-6 transition-colors hover:bg-secondary/25 last:border-b-0 md:grid-cols-[9rem_minmax(0,1fr)]"
        >
          <div>
            <p className="font-sketch text-3xl font-bold text-primary transition-transform group-hover:-rotate-3">
              {item.index}
            </p>
            <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-muted-foreground">
              {item.period}
            </p>
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-extrabold">{item.role}</h2>
              <span className="border border-border/25 bg-accent/45 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em]">
                {item.status}
              </span>
            </div>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
              {item.summary}
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {item.signals.map((signal) => (
                <li
                  key={signal}
                  className="flex gap-3 text-sm leading-6 text-muted-foreground"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
          </div>
        </MotionItem>
      ))}
    </MotionList>
  );
}
