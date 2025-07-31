import { Card } from "@/components/ui/card";

const NewExperienceSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-800 mb-3">Experience</h2>
      
      <div className="space-y-6">
        <Card className="p-4 border-l-4 border-l-indigo-500">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <h3 className="font-medium text-slate-800">Lead Developer — BeTuned</h3>
            <span className="text-slate-600 text-sm">Remote | Aug. 2024 – Apr. 2025</span>
          </div>
          <ul className="space-y-2">
            <li className="text-slate-600 flex items-start">
              <span className="text-indigo-500 mr-2 mt-1">•</span>
              <span>Built the entire technical foundation for a Unity-based mobile rhythm game used in therapeutic research</span>
            </li>
            <li className="text-slate-600 flex items-start">
              <span className="text-indigo-500 mr-2 mt-1">•</span>
              <span>Created a secure data tracking system with anonymized player metrics and clinician-facing access controls</span>
            </li>
            <li className="text-slate-600 flex items-start">
              <span className="text-indigo-500 mr-2 mt-1">•</span>
              <span>Debugged gameplay, UI, and performance issues across Android and iOS using Unity, Git, and remote testing workflows</span>
            </li>
            <li className="text-slate-600 flex items-start">
              <span className="text-indigo-500 mr-2 mt-1">•</span>
              <span>Integrated CI/CD using Unity Cloud Build and GitHub to support rapid iteration and deployment</span>
            </li>
            <li className="text-slate-600 flex items-start">
              <span className="text-indigo-500 mr-2 mt-1">•</span>
              <span>Worked closely with non-technical stakeholders to align development with research and performance goals</span>
            </li>
          </ul>
        </Card>
        
        <Card className="p-4 border-l-4 border-l-indigo-500">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <h3 className="font-medium text-slate-800">Manager & Spray Technician — Ross Turf & Ornamental Inc.</h3>
            <span className="text-slate-600 text-sm">Orlando, FL | Sep. 2016 – Apr. 2021</span>
          </div>
          <ul className="space-y-2">
            <li className="text-slate-600 flex items-start">
              <span className="text-indigo-500 mr-2 mt-1">•</span>
              <span>Managed service operations, scheduling, and technical equipment support for a busy residential/commercial turf company</span>
            </li>
            <li className="text-slate-600 flex items-start">
              <span className="text-indigo-500 mr-2 mt-1">•</span>
              <span>Resolved technical issues with field hardware, including spray rigs and irrigation systems, minimizing downtime</span>
            </li>
            <li className="text-slate-600 flex items-start">
              <span className="text-indigo-500 mr-2 mt-1">•</span>
              <span>Built internal systems to track appointments, job history, and recurring customer needs</span>
            </li>
            <li className="text-slate-600 flex items-start">
              <span className="text-indigo-500 mr-2 mt-1">•</span>
              <span>Delivered customer support independently in the field, developing strong communication and troubleshooting skills</span>
            </li>
            <li className="text-slate-600 flex items-start">
              <span className="text-indigo-500 mr-2 mt-1">•</span>
              <span>Oversaw logistics, training, and quality control for a small service team</span>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default NewExperienceSection;