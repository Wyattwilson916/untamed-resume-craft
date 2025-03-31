
import { Badge } from "@/components/ui/badge";

const SkillSection = () => {
  const skills = [
    "Unity (2D gameplay & mobile deployment)",
    "C# (OOP, event systems, coroutines)",
    "Custom spline-based movement systems",
    "ScriptableObject-driven architecture",
    "Timing-based input and feedback systems",
    "UI/UX design for mobile and touch input",
    "Performance optimization for mobile",
    "Scene/state management and transitions",
    "Data tracking and Unity Analytics",
    "Solo development workflow"
  ];

  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-800 mb-3">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 py-1.5 px-3">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
