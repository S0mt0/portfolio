import type { LucideIcon } from "lucide-react";

type SectionHeadingProps = {
  eyebrow: string;
  heading: string;
  description?: string;
  icon?: LucideIcon;
};

export function SectionHeading({
  eyebrow,
  heading,
  description,
  icon: Icon,
}: SectionHeadingProps) {
  return (
    <header className="rounded-[2rem] border-2 border-border bg-white/80 p-5 shadow-[3px_4px_0_rgba(25,31,43,0.8)]">
      <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
        {Icon ? <Icon className="h-4 w-4 text-primary" /> : null}
        <span>{eyebrow}</span>
      </div>
      <h1 className="mt-4 max-w-4xl font-sketch text-4xl font-bold leading-none text-foreground sm:text-5xl lg:text-6xl">
        {heading}
      </h1>
      {description ? (
        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
    </header>
  );
}
