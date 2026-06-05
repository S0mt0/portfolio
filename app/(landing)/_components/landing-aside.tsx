import { MotionBlock } from "@/components/common/motion-primitives";
import { skillGroups, socialLinks } from "@/lib/portfolio-data";

const currentStudy = [
  "Solidity fundamentals",
  "Foundry tests",
  "Access control",
  "Reentrancy",
  "Protocol assumptions",
];

export function LandingAside() {
  return (
    <aside className="space-y-10">
      <MotionBlock>
        <p className="font-sketch text-3xl font-bold text-primary">
          Current study
        </p>
        <p className="mt-3 text-sm font-semibold leading-6">
          I am treating smart contract security as practice first, proof later.
        </p>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
          {currentStudy.map((item) => (
            <li key={item} className="border-b border-border/15 pb-2">
              {item}
            </li>
          ))}
        </ul>
      </MotionBlock>

      <MotionBlock>
        <p className="font-sketch text-3xl font-bold text-primary">Toolbox</p>
        <div className="mt-4 divide-y divide-border/20 border-y border-border/20">
          {skillGroups.map((group) => (
            <div key={group.title} className="py-4">
              <p className="text-xs font-black uppercase tracking-[0.14em]">
                {group.title}
              </p>
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
