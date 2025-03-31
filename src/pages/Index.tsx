
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import SkillSection from "@/components/SkillSection";
import ProjectSection from "@/components/ProjectSection";
import ToolsSection from "@/components/ToolsSection";
import EducationSection from "@/components/EducationSection";
import ContactFooter from "@/components/ContactFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container max-w-4xl px-4 py-8 mx-auto">
        <Card className="p-8 shadow-md bg-white">
          <Header />
          <Separator className="my-6" />
          
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-slate-800 mb-2">Summary</h2>
            <p className="text-slate-600 leading-relaxed">
              Unity developer who fell into game development through a mission-driven project and stayed because of a deep love for coding gameplay and solving tough design problems. I solo-developed BeTuned from start to finish — designing every system, writing every script, and building a fully playable experience from the ground up. I thrive when I can take raw ideas and turn them into polished, responsive systems that just feel good to play.
            </p>
          </section>

          <SkillSection />
          <ToolsSection />
          <ProjectSection />
          <EducationSection />
          <ContactFooter />
        </Card>
      </div>
    </div>
  );
};

export default Index;
