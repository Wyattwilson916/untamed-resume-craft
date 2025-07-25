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

  // Skills data - matching original exactly
  const [skills, setSkills] = useState({
    "Customer & Communication": [
      "Phone-based client scheduling and problem-solving",
      "Professional, responsive communication in customer-facing settings",
      "Experience resolving and tracking client issues independently"
    ],
    "Technical Troubleshooting": [
      "Diagnosing home networking issues (routers, modems, basic configurations)",
      "Building and configuring personal computers",
      "Foundational knowledge of networking concepts (LAN, WAN, VLANs, IP addressing)"
    ],
    "Software & Tools": [
      "Microsoft Office Suite (Excel, Word, Outlook)",
      "Unity + Visual Studio (custom system design, C# scripting)",
      "Database architecture and management (player tracking + data systems in BeTuned)"
    ],
    "Certifications & Learning": [
      "Currently studying for Cisco CCNA certification",
      "Graduate of Full Stack web development bootcamp (JavaScript, HTML/CSS, API integration)"
    ]
  });

  // Experience data - matching original exactly
  const [experiences, setExperiences] = useState([
    {
      title: "Manager & Spray Technician — Ross Turf & Ornamental Inc.",
      location: "Jacksonville, FL",
      dates: "Sep. 2016 – Apr. 2021",
      responsibilities: [
        "Managed day-to-day operations for a small landscaping business, including scheduling, customer communication, and service coordination",
        "Supervised and trained one employee while maintaining personal responsibility for on-site treatments and service quality",
        "Handled all inbound client calls, scheduled jobs, and resolved service-related issues independently",
        "Maintained strong customer relationships through regular follow-up and personalized support",
        "Built internal systems to track appointments, job completion, and recurring customer needs"
      ]
    },
    {
      title: "Lead Developer – BeTuned",
      location: "Remote",
      dates: "Aug. 2024 – Apr. 2025",
      responsibilities: [
        "Built all technical systems for a mobile rhythm game, including gameplay mechanics, UI, and backend logic",
        "Designed and implemented a custom data tracking system to collect and manage player performance metrics",
        "Managed scene transitions, global settings, and feedback systems with modular, scalable code",
        "Collaborated with designers and stakeholders to align game features with therapeutic goals",
        "Debugged and optimized the application for mobile performance, handling all technical problem-solving independently"
      ]
    }
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

  const updateSkill = (category: string, index: number, value: string) => {
    setSkills(prev => ({
      ...prev,
      [category]: prev[category].map((skill, i) => i === index ? value : skill)
    }));
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3 className="font-medium text-indigo-700 mb-2">{category}</h3>
                  <div className="grid grid-cols-1 gap-y-2">
                    {skillList.map((skill, index) => (
                      <div key={index} className="text-slate-600 flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <Textarea
                          value={skill}
                          onChange={(e) => updateSkill(category, index, e.target.value)}
                          className="border-none p-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 resize-none min-h-[20px] flex-1 text-slate-600"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section - Matching original exactly */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-slate-800 mb-3">Experience</h2>
            
            <div className="space-y-4">
              {experiences.map((experience, expIndex) => (
                <Card key={expIndex} className="p-5 border-l-4 border-l-indigo-500 bg-indigo-50/50">
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <Input
                      value={experience.title}
                      onChange={(e) => updateExperience(expIndex, 'title', e.target.value)}
                      className="text-lg font-semibold text-indigo-900 border-none p-0 h-auto bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <div className="text-sm text-slate-600 flex gap-2">
                      <Input
                        value={experience.location}
                        onChange={(e) => updateExperience(expIndex, 'location', e.target.value)}
                        className="border-none p-0 h-auto bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-sm text-slate-600"
                      />
                      <span>|</span>
                      <Input
                        value={experience.dates}
                        onChange={(e) => updateExperience(expIndex, 'dates', e.target.value)}
                        className="border-none p-0 h-auto bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-sm text-slate-600"
                      />
                    </div>
                  </div>
                  
                  <ul className="space-y-1.5 text-slate-700">
                    {experience.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start">
                        <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                        <Textarea
                          value={responsibility}
                          onChange={(e) => updateExperienceResponsibility(expIndex, respIndex, e.target.value)}
                          className="border-none p-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 resize-none min-h-[20px] flex-1 text-slate-700"
                        />
                      </li>
                    ))}
                  </ul>
                </Card>
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