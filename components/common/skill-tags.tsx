import { Badge } from "@/components/ui/badge";

type SkillTagsProps = {
  items: string[];
};

export function SkillTags({ items }: SkillTagsProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <Badge
          key={item}
          variant="outline"
          className="rounded-full bg-white/72 px-2 py-0.5 text-[0.66rem] normal-case tracking-normal"
        >
          {item}
        </Badge>
      ))}
    </div>
  );
}
