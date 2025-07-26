
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import Header from "@/components/Header";
import SummarySection from "@/components/SummarySection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";

const Index = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container max-w-6xl px-4 py-8 mx-auto">
        <div className="mb-4 flex justify-end gap-2 print:hidden">
          <Link to="/resume-tool">
            <Button variant="outline">Edit Resume</Button>
          </Link>
          <Link to="/cover-letter">
            <Button variant="outline">Create Cover Letter</Button>
          </Link>
          <Button onClick={handlePrint} className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export to PDF
          </Button>
        </div>
        <Card className="p-8 shadow-md bg-white">
          <Header />
          <Separator className="my-6" />
          <SummarySection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
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
            margin: 0.4in;
            size: A4;
          }
          .container {
            max-width: none !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          h1 {
            font-size: 24px !important;
            margin-bottom: 4px !important;
          }
          h2 {
            font-size: 16px !important;
            margin-bottom: 8px !important;
            margin-top: 12px !important;
          }
          h3 {
            font-size: 14px !important;
            margin-bottom: 4px !important;
          }
          p, li {
            font-size: 11px !important;
            line-height: 1.3 !important;
            margin-bottom: 2px !important;
          }
          .card {
            box-shadow: none !important;
            padding: 16px !important;
          }
          .separator {
            margin: 8px 0 !important;
          }
          ul {
            margin-bottom: 8px !important;
          }
          section {
            margin-bottom: 12px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
