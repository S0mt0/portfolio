import { MotionBlock } from "@/components/common/motion-primitives";
import { socialLinks } from "@/lib/fallbacks";
import type { LandingContent } from "@/lib/fallbacks/landing-content";

type LandingAsideProps = {
  content: LandingContent["aside"];
};

export function LandingAside({ content }: LandingAsideProps) {
  return (
    <aside className="space-y-10">
      <MotionBlock>
        <p className="font-sketch text-3xl font-bold text-primary">
          {content.studyTitle}
        </p>
        <p className="mt-3 text-sm font-semibold leading-6">
          {content.studyDescription}
        </p>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
          {content.studyItems.map((item) => (
            <li key={item} className="border-b border-border/15 pb-2">
              {item}
            </li>
          ))}
        </ul>
      </MotionBlock>

      <MotionBlock>
        <p className="font-sketch text-3xl font-bold text-primary">
          {content.toolboxTitle}
        </p>
        <p className="mt-3 text-sm font-semibold leading-6">
          {content.toolboxDescription}
        </p>
        <div className="mt-4 divide-y divide-border/20 border-y border-border/20">
          {content.skillGroups.map((group) => (
            <div key={group.title} className="py-4">
              <p className="text-xs font-black uppercase tracking-[0.14em]">
                {group.title}
              </p>
              {group.description ? (
                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  {group.description}
                </p>
              ) : null}
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {group.skills.join(" / ")}
              </p>
            </div>
          ))}
        </div>
      </MotionBlock>

      <MotionBlock className="flex flex-wrap gap-3">
        {socialLinks.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
            className="inline-flex items-center gap-2 border-b border-border/40 py-1 text-xs font-black uppercase tracking-[0.12em] hover:text-primary"
          >
            <Icon className="h-4 w-4" />
            {label}
          </a>
        ))}
      </MotionBlock>
    </aside>
  );
}
