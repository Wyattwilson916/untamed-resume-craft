import { Card } from "@/components/ui/card";

const NewProjectsSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-800 mb-3">Projects</h2>
      
      <Card className="p-4 border-l-4 border-l-indigo-500">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
          <h3 className="font-medium text-slate-800">Blue Box – Full Stack E-Commerce Movie Platform</h3>
          <span className="text-slate-600 text-sm">Team Project | Fullstack Academy</span>
        </div>
        <ul className="space-y-2 mb-3">
          <li className="text-slate-600 flex items-start">
            <span className="text-indigo-500 mr-2 mt-1">•</span>
            <span>Developed a secure web application for digital movie sales and streaming, modeled after platforms like Vudu</span>
          </li>
          <li className="text-slate-600 flex items-start">
            <span className="text-indigo-500 mr-2 mt-1">•</span>
            <span>Led development of admin tools for product creation/editing, user roles, and access control</span>
          </li>
          <li className="text-slate-600 flex items-start">
            <span className="text-indigo-500 mr-2 mt-1">•</span>
            <span>Built protected routes, validated forms, and implemented REST APIs for user sessions and orders</span>
          </li>
        </ul>
        <div>
          <span className="text-sm font-medium text-slate-700">Tools: </span>
          <span className="text-sm text-slate-600">JavaScript, React, Node.js, PostgreSQL, Sequelize, GitHub, Trello</span>
        </div>
      </Card>
    </section>
  );
};

export default NewProjectsSection;