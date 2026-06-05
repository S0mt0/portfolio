import { MotionBlock } from "@/components/common/motion-primitives";
import { profile } from "@/lib/portfolio-data";

export function OperatingNote() {
  return (
    <MotionBlock className="mt-8 border border-border/20 bg-card/45 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        Operating note
      </p>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
        {profile.summary}
      </p>
    </MotionBlock>
  );
}
