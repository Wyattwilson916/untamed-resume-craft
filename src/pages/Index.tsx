
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import SummarySection from "@/components/SummarySection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container max-w-6xl px-4 py-8 mx-auto">
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
