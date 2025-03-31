
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import FeaturedProjectSection from "@/components/FeaturedProjectSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container max-w-4xl px-4 py-8 mx-auto">
        <Card className="p-8 shadow-md bg-white">
          <Header />
          <Separator className="my-6" />
          
          <AboutSection />
          <FeaturedProjectSection />
          <ScreenshotsSection />
        </Card>
      </div>
    </div>
  );
};

export default Index;
