
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import SummarySection from "@/components/SummarySection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container max-w-6xl px-4 py-8 mx-auto">
        <div className="mb-4 flex justify-end">
          <Link to="/cover-letter">
            <Button variant="outline">Create Cover Letter</Button>
          </Link>
        </div>
        <Card className="p-8 shadow-md bg-white">
          <Header />
          <Separator className="my-6" />
          <SummarySection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
        </Card>
      </div>
    </div>
  );
};

export default Index;
