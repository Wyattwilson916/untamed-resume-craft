
import { Button } from "@/components/ui/button";

const ContactFooter = () => {
  return (
    <section className="mt-10 pt-4 border-t border-slate-200">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-slate-600">
          <p className="italic">(Portfolio link to be added once ready)</p>
        </div>
        
        <Button variant="outline" className="border-indigo-500 text-indigo-600 hover:bg-indigo-50">
          <a href="mailto:wyattwilson916@gmail.com" className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            Contact Me
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ContactFooter;
