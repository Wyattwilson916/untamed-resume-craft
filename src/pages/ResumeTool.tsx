import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";

const ResumeTool = () => {
  // Header data
  const [name, setName] = useState("Wyatt Wilson");
  const [title, setTitle] = useState("Technical Support Specialist");
  const [location, setLocation] = useState("Jacksonville, FL");
  const [email, setEmail] = useState("wyattwilson916@gmail.com");

  // Summary data
  const [summary, setSummary] = useState(
    "Customer-focused technical specialist with hands-on experience solving network, hardware, and software issues in real-world settings. Strong background in client communication, system troubleshooting, and independent tech projects. Previously handled customer operations solo for a small business, and independently developed and shipped a mobile game. Currently studying for CCNA certification and seeking to grow in a client-facing support role."
  );

  // Skills data - using the same structure as the original
  const [skills, setSkills] = useState([
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
  ]);

  // Experience data
  const [experiences, setExperiences] = useState([
    {
      title: "Independent Game Developer",
      company: "Personal Project",
      location: "Remote",
      dates: "2022 – 2024",
      responsibilities: [
        "Developed and shipped a complete mobile game using Unity and C#, handling all aspects from concept to deployment",
        "Implemented custom spline-based movement systems and timing-sensitive gameplay mechanics",
        "Created scalable ScriptableObject architecture for game data and configuration management",
        "Optimized performance for mobile platforms, ensuring smooth gameplay across various device specifications",
        "Integrated Unity Analytics for player behavior tracking and data-driven design decisions",
        "Managed solo development workflow including version control, testing, and iterative design processes"
      ]
    },
    {
      title: "Operations Specialist",
      company: "Local Business",
      location: "Jacksonville, FL",
      dates: "2021 – 2022",
      responsibilities: [
        "Independently managed all customer-facing operations for a small business, serving as the primary point of contact",
        "Handled technical troubleshooting, order processing, and customer relationship management",
        "Developed efficient workflows and documentation to streamline operations and improve customer satisfaction",
        "Collaborated cross-functionally to resolve complex issues and implement process improvements",
        "Maintained detailed records and provided regular reporting on operational metrics and customer feedback"
      ]
    }
  ]);

  // Tools data
  const [tools, setTools] = useState([
    "Unity – custom tooling, animation systems, and editor scripting",
    "Visual Studio – structured C# development and debugging",
    "Unity Version Control (UVCS) & GitHub",
    "Unity Cloud & Unity Analytics for backend data tracking",
    "Blender – 3D asset prep and basic integration",
    "Miro – system design and planning",
    "Trello – solo task management and workflow organization",
    "Unity Profiler – mobile performance testing and optimization"
  ]);

  // Education data
  const [education, setEducation] = useState([
    {
      title: "Cisco CCNA Certification",
      details: "Currently Studying, Expected 2025"
    },
    {
      title: "Full Stack Academy — Web Development Bootcamp",
      details: "Completed Feb. 2022"
    },
    {
      title: "Florida State College at Jacksonville — Associate of Arts (AA)",
      details: "Earned Jan. 2022"
    },
    {
      title: "Sandalwood High School — High School Diploma",
      details: "Graduated 2016"
    }
  ]);

  const handlePrint = () => {
    window.print();
  };

  const updateSkill = (index: number, value: string) => {
    setSkills(prev => prev.map((skill, i) => i === index ? value : skill));
  };

  const updateTool = (index: number, value: string) => {
    setTools(prev => prev.map((tool, i) => i === index ? value : tool));
  };

  const updateExperience = (expIndex: number, field: string, value: string | string[]) => {
    setExperiences(prev => prev.map((exp, i) => 
      i === expIndex ? { ...exp, [field]: value } : exp
    ));
  };

  const updateExperienceResponsibility = (expIndex: number, respIndex: number, value: string) => {
    setExperiences(prev => prev.map((exp, i) => 
      i === expIndex ? {
        ...exp,
        responsibilities: exp.responsibilities.map((resp, j) => j === respIndex ? value : resp)
      } : exp
    ));
  };

  const updateEducation = (index: number, field: string, value: string) => {
    setEducation(prev => prev.map((edu, i) => 
      i === index ? { ...edu, [field]: value } : edu
    ));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container max-w-6xl px-4 py-8 mx-auto">
        <div className="mb-4 flex justify-between items-center print:hidden">
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Resume
            </Button>
          </Link>
          <Button onClick={handlePrint} className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>

        <Card className="p-8 shadow-md bg-white">
          {/* Header Section - Matching original exactly */}
          <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-3xl md:text-4xl font-bold text-indigo-900 border-none p-0 h-auto bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <div className="flex items-center gap-2 mt-1">
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="text-xl font-medium text-indigo-600 border-none p-0 h-auto bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end">
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="text-slate-600 border-none p-0 h-auto bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-right"
              />
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-slate-600 hover:text-indigo-600 transition-colors border-none p-0 h-auto bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-right"
              />
            </div>
          </header>

          <Separator className="my-6" />

          {/* Summary Section - Matching original exactly */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-slate-800 mb-2">Professional Summary</h2>
            <Textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="text-slate-600 leading-relaxed border-none p-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 resize-none min-h-[100px]"
            />
          </section>

          {/* Skills Section - Matching original exactly */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-slate-800 mb-3">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
              {skills.map((skill, index) => (
                <div key={index} className="text-slate-600 flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <Input
                    value={skill}
                    onChange={(e) => updateSkill(index, e.target.value)}
                    className="border-none p-0 h-auto bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 flex-1 text-slate-600"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Tools Section - Matching original exactly */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-slate-800 mb-3">Tools & Tech</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                  <Input
                    value={tool}
                    onChange={(e) => updateTool(index, e.target.value)}
                    className="text-slate-600 border-none p-0 h-auto bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 flex-1"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section - Matching original exactly */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-slate-800 mb-3">Experience</h2>
            <div className="space-y-6">
              {experiences.map((experience, expIndex) => (
                <div key={expIndex}>
                  <div className="mb-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                      <div>
                        <Input
                          value={experience.title}
                          onChange={(e) => updateExperience(expIndex, 'title', e.target.value)}
                          className="font-semibold text-slate-800 border-none p-0 h-auto bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                        <Input
                          value={experience.company}
                          onChange={(e) => updateExperience(expIndex, 'company', e.target.value)}
                          className="text-slate-600 border-none p-0 h-auto bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-slate-600">
                        <Input
                          value={experience.location}
                          onChange={(e) => updateExperience(expIndex, 'location', e.target.value)}
                          className="border-none p-0 h-auto bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-right text-sm"
                        />
                        <Input
                          value={experience.dates}
                          onChange={(e) => updateExperience(expIndex, 'dates', e.target.value)}
                          className="border-none p-0 h-auto bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-right text-sm"
                        />
                      </div>
                    </div>
                    <ul className="space-y-1 text-slate-600">
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start">
                          <span className="text-indigo-400 mr-2 mt-1">•</span>
                          <Textarea
                            value={responsibility}
                            onChange={(e) => updateExperienceResponsibility(expIndex, respIndex, e.target.value)}
                            className="border-none p-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 resize-none min-h-[20px] flex-1 text-slate-600"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section - Matching original exactly */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-slate-800 mb-3">Education & Certification</h2>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index}>
                  <Input
                    value={edu.title}
                    onChange={(e) => updateEducation(index, 'title', e.target.value)}
                    className="font-medium text-slate-800 border-none p-0 h-auto bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <Input
                    value={edu.details}
                    onChange={(e) => updateEducation(index, 'details', e.target.value)}
                    className="text-slate-600 border-none p-0 h-auto bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              ))}
              
              <div className="pt-4">
                <h3 className="font-medium text-slate-800">Referral</h3>
                <p className="text-slate-600">References available upon request.</p>
              </div>
            </div>
          </section>
        </Card>
      </div>

      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .container, .container * {
            visibility: visible;
          }
          .print\\:hidden {
            display: none !important;
          }
          @page {
            margin: 0.5in;
          }
        }
      `}</style>
    </div>
  );
};

export default ResumeTool;