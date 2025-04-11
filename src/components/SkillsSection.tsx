
const SkillsSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-800 mb-3">Skills</h2>
      
      <div className="mb-4">
        <h3 className="font-medium text-indigo-700 mb-2">Customer & Communication</h3>
        <div className="grid grid-cols-1 gap-y-2">
          <div className="text-slate-600 flex items-start">
            <span className="text-indigo-500 mr-2">•</span>
            <span>Phone-based client scheduling and problem-solving</span>
          </div>
          <div className="text-slate-600 flex items-start">
            <span className="text-indigo-500 mr-2">•</span>
            <span>Professional, responsive communication in customer-facing settings</span>
          </div>
          <div className="text-slate-600 flex items-start">
            <span className="text-indigo-500 mr-2">•</span>
            <span>Experience resolving and tracking client issues independently</span>
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <h3 className="font-medium text-indigo-700 mb-2">Technical Troubleshooting</h3>
        <div className="grid grid-cols-1 gap-y-2">
          <div className="text-slate-600 flex items-start">
            <span className="text-indigo-500 mr-2">•</span>
            <span>Diagnosing home networking issues (routers, modems, basic configurations)</span>
          </div>
          <div className="text-slate-600 flex items-start">
            <span className="text-indigo-500 mr-2">•</span>
            <span>Building and configuring personal computers</span>
          </div>
          <div className="text-slate-600 flex items-start">
            <span className="text-indigo-500 mr-2">•</span>
            <span>Foundational knowledge of networking concepts (LAN, WAN, VLANs, IP addressing)</span>
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <h3 className="font-medium text-indigo-700 mb-2">Software & Tools</h3>
        <div className="grid grid-cols-1 gap-y-2">
          <div className="text-slate-600 flex items-start">
            <span className="text-indigo-500 mr-2">•</span>
            <span>Microsoft Office Suite (Excel, Word, Outlook)</span>
          </div>
          <div className="text-slate-600 flex items-start">
            <span className="text-indigo-500 mr-2">•</span>
            <span>Unity + Visual Studio (custom system design, C# scripting)</span>
          </div>
          <div className="text-slate-600 flex items-start">
            <span className="text-indigo-500 mr-2">•</span>
            <span>Database architecture and management (player tracking + data systems in BeTuned)</span>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="font-medium text-indigo-700 mb-2">Certifications & Learning</h3>
        <div className="grid grid-cols-1 gap-y-2">
          <div className="text-slate-600 flex items-start">
            <span className="text-indigo-500 mr-2">•</span>
            <span>Currently studying for Cisco CCNA certification</span>
          </div>
          <div className="text-slate-600 flex items-start">
            <span className="text-indigo-500 mr-2">•</span>
            <span>Graduate of Full Stack web development bootcamp (JavaScript, HTML/CSS, API integration)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
