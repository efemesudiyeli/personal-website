import { Progress } from "@/components/ui/progress";

export default function SkillProgress({
  value,
  skillName,
}: {
  value: number;
  skillName: string;
}) {
  return (
    <div className="flex flex-col">
      <h3 className="font-bold">{skillName}</h3>
      <Progress value={value} />
    </div>
  );
}
