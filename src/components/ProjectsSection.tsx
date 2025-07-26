import { Card } from "@/components/ui/card";

const ProjectsSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-800 mb-3">Projects</h2>
      
      <div className="space-y-4">
        <Card className="p-5 border-l-4 border-l-indigo-500 bg-indigo-50/50">
          <div className="flex flex-col md:flex-row md:justify-between mb-2">
            <h3 className="text-lg font-semibold text-indigo-900">BeTuned – Full Stack Mobile Rhythm Game</h3>
            <div className="text-sm text-slate-600 flex items-center whitespace-nowrap">
              <span>Solo Developer</span>
              <span className="mx-2">|</span>
              <span>Aug. 2024 – Apr. 2025</span>
            </div>
          </div>
          
          <ul className="space-y-1.5 text-slate-700">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span>Built using Unity (C#), with custom logic for gameplay mechanics, timing-based interactions, and user feedback</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span>Designed and implemented a REST-style data tracking system to record tap accuracy and player progression</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span>Integrated local storage and backend logic to maintain state across scenes and support multi-stage gameplay</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span>Used Unity Cloud Build and GitHub for CI/CD-style automated testing and builds</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span>Structured the project for modularity using prefab-based architecture and scriptable objects</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span>Secured user data to ensure anonymous collection during clinical trials; designed access control logic so only authorized clinicians could view identifiable information</span>
            </li>
          </ul>
          <div className="mt-3 text-sm text-slate-600">
            <strong>Tools:</strong> Unity, C#, Git, GitHub, Miro, JSON, JWT, Google Docs, Trello, Unity Cloud Build
          </div>
        </Card>

        <Card className="p-5 border-l-4 border-l-indigo-500 bg-indigo-50/50">
          <div className="flex flex-col md:flex-row md:justify-between mb-2">
            <h3 className="text-lg font-semibold text-indigo-900">Blue Box – Full Stack E-Commerce Movie Platform</h3>
            <div className="text-sm text-slate-600 flex items-center whitespace-nowrap">
              <span>Team Project | Fullstack Academy</span>
              <span className="mx-2">|</span>
              <span>Deployed via Heroku (now offline)</span>
            </div>
          </div>
          
          <ul className="space-y-1.5 text-slate-700">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span>Built a digital movie purchasing and streaming site modeled after commercial platforms like Vudu, using a Node.js, PostgreSQL, and React stack</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span>Led development of administrative features, including secure product creation/editing, user management, and role-based access control</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span>Contributed to frontend state management, protected routes, and form validations to ensure data integrity and clean UX</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span>Participated in Agile team practices including daily standups, project board planning, code reviews, and protected GitHub branching workflows</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span>Implemented RESTful APIs and helped manage data persistence for cart, orders, and user sessions</span>
            </li>
          </ul>
          <div className="mt-3 text-sm text-slate-600">
            <strong>Tools:</strong> JavaScript, React, Node.js, PostgreSQL, Sequelize, GitHub, Trello, Heroku
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProjectsSection;