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
    <header className="border-b border-border/20 pb-8">
      <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
        {Icon ? <Icon className="h-4 w-4 text-primary" /> : null}
        <span>{eyebrow}</span>
      </div>
      <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
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
