
import { Card } from "@/components/ui/card";

const ProjectSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-800 mb-3">Projects</h2>
      
      <Card className="p-5 border-l-4 border-l-indigo-500 bg-indigo-50/50">
        <div className="flex flex-col md:flex-row md:justify-between mb-2">
          <h3 className="text-lg font-semibold text-indigo-900">BeTuned — Solo Unity Developer</h3>
          <div className="text-sm text-slate-600">Mobile Rhythm Game | Unity | 2024</div>
        </div>
        
        <p className="text-slate-600 mb-4">
          Designed, developed, and shipped a full rhythm-based mobile game as the sole developer. 
          Rebuilt the project from scratch to replace legacy code, creating clean, scalable systems 
          and a polished mobile experience.
        </p>
        
        <ul className="space-y-1.5 text-slate-700">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
            Engineered spline + indicator system for timing-based gameplay across 20 handcrafted stages
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
            Built modular game architecture using ScriptableObjects, event-driven logic, and editor tools
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
            Designed systems for hit accuracy, animation triggers, and player feedback
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
            Created persistent global settings including speed modifiers and pause functionality
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
            Collected and tracked player performance data for analysis and difficulty tuning
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
            Optimized for mobile performance with seamless transitions and low overhead
          </li>
        </ul>
      </Card>
    </section>
  );
};

export default ProjectSection;
