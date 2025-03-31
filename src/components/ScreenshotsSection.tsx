
import { Card } from "@/components/ui/card";

const ScreenshotsSection = () => {
  return (
    <section className="mb-2">
      <h2 className="text-lg font-semibold text-slate-800 mb-4">Screenshots</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="overflow-hidden rounded-lg shadow-md">
          <img 
            src="/lovable-uploads/7e6c0aa2-2d94-44dd-85df-187a0657e6dc.png" 
            alt="BeTuned start screen" 
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-md">
          <img 
            src="/lovable-uploads/a23d9262-3837-4a0e-852b-26950cea0c51.png" 
            alt="BeTuned feeling assessment screen" 
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-md">
          <img 
            src="/lovable-uploads/40a7e014-76e1-4dfe-abe3-5e4eaeaaa630.png" 
            alt="BeTuned gameplay screen" 
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
