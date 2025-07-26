
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
            margin: 0.5in;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
