
const SkillsSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-800 mb-3">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        <div>
          <h3 className="font-medium text-indigo-700 mb-2">Programming & Tools</h3>
          <div className="grid grid-cols-1 gap-y-2">
            <div className="text-slate-600 flex items-start">
              <span className="text-indigo-500 mr-2">•</span>
              <span>JavaScript, HTML, CSS, Node.js, C#, SQL, Git, GitHub, Visual Studio, VS Code</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium text-indigo-700 mb-2">API & Backend Development</h3>
          <div className="grid grid-cols-1 gap-y-2">
            <div className="text-slate-600 flex items-start">
              <span className="text-indigo-500 mr-2">•</span>
              <span>RESTful APIs, Fetch API, JSON, JSON Web Tokens (JWT), Insomnia, Thunder Client, PostgreSQL, Postico, Postbird</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium text-indigo-700 mb-2">DevOps, Deployment & Cloud</h3>
          <div className="grid grid-cols-1 gap-y-2">
            <div className="text-slate-600 flex items-start">
              <span className="text-indigo-500 mr-2">•</span>
              <span>CI/CD workflows, Unity Cloud Build, Unity DevOps, Netlify, Heroku, Unity IAM, basic cloud-based access control</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium text-indigo-700 mb-2">Networking & Project Management</h3>
          <div className="grid grid-cols-1 gap-y-2">
            <div className="text-slate-600 flex items-start">
              <span className="text-indigo-500 mr-2">•</span>
              <span>TCP/IP, subnets, VLANs, routers, switches (CCNA in progress), Trello (Kanban), Agile methodologies, Google Docs, Miro, Microsoft Office Suite</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
