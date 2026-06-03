import { Badge } from "@/components/ui/badge";

type SkillTagsProps = {
  items: string[];
};

export function SkillTags({ items }: SkillTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Badge key={item} variant="outline" className="rounded-full bg-white normal-case tracking-normal">
          {item}
        </Badge>
      ))}
    </div>
  );
}
