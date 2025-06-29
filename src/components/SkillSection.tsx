
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
        {skills.map((skill, index) => (
          <div key={index} className="text-slate-600 flex items-start">
            <span className="text-indigo-500 mr-2">•</span>
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
