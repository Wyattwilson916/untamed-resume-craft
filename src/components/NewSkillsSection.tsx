const NewSkillsSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-800 mb-3">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium text-slate-800 mb-2">Technical Support & IT</h3>
          <ul className="space-y-1">
            <li className="text-slate-600 flex items-start">
              <span className="text-indigo-500 mr-2">•</span>
              <span>Troubleshooting, Helpdesk Support, macOS 12+, Windows 10+</span>
            </li>
            <li className="text-slate-600 flex items-start">
              <span className="text-indigo-500 mr-2">•</span>
              <span>Hardware Installation & Maintenance, System Configuration</span>
            </li>
            <li className="text-slate-600 flex items-start">
              <span className="text-indigo-500 mr-2">•</span>
              <span>Customer Communication</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium text-slate-800 mb-2">Cybersecurity & Networking</h3>
          <ul className="space-y-1">
            <li className="text-slate-600 flex items-start">
              <span className="text-indigo-500 mr-2">•</span>
              <span>Cisco CCNA (in progress), TCP/IP, Subnetting, VLANs</span>
            </li>
            <li className="text-slate-600 flex items-start">
              <span className="text-indigo-500 mr-2">•</span>
              <span>Routers & Switches, Access Control Concepts</span>
            </li>
            <li className="text-slate-600 flex items-start">
              <span className="text-indigo-500 mr-2">•</span>
              <span>Endpoint Security Awareness</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium text-slate-800 mb-2">Programming & Tools</h3>
          <ul className="space-y-1">
            <li className="text-slate-600 flex items-start">
              <span className="text-indigo-500 mr-2">•</span>
              <span>C#, JavaScript, HTML/CSS, SQL</span>
            </li>
            <li className="text-slate-600 flex items-start">
              <span className="text-indigo-500 mr-2">•</span>
              <span>Git, GitHub, Visual Studio, Unity, Node.js</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium text-slate-800 mb-2">Project Management & Collaboration</h3>
          <ul className="space-y-1">
            <li className="text-slate-600 flex items-start">
              <span className="text-indigo-500 mr-2">•</span>
              <span>Agile Workflows, Trello, Miro</span>
            </li>
            <li className="text-slate-600 flex items-start">
              <span className="text-indigo-500 mr-2">•</span>
              <span>Microsoft Office, Google Workspace</span>
            </li>
            <li className="text-slate-600 flex items-start">
              <span className="text-indigo-500 mr-2">•</span>
              <span>Remote Team Collaboration</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NewSkillsSection;