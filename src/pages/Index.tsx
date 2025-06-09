
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import CoverLetter from "@/components/CoverLetter";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container max-w-6xl px-4 py-8 mx-auto">
        <Card className="p-8 shadow-md bg-white">
          <Header />
          <Separator className="my-6" />
          <CoverLetter />
        </Card>
      </div>
    </div>
  );
};

export default Index;
