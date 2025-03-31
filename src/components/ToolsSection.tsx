
import { Badge } from "@/components/ui/badge";

const ToolsSection = () => {
  const tools = [
    "Unity – custom tooling, animation systems, and editor scripting",
    "Visual Studio – structured C# development and debugging",
    "Unity Version Control (UVCS) & GitHub",
    "Unity Cloud & Unity Analytics for backend data tracking",
    "Blender – 3D asset prep and basic integration",
    "Miro – system design and planning",
    "Trello – solo task management and workflow organization",
    "Unity Profiler – mobile performance testing and optimization"
  ];

  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-800 mb-3">Tools & Tech</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {tools.map((tool, index) => (
          <div key={index} className="flex items-center">
            <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
            <span className="text-slate-600">{tool}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
