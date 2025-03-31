
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-900">Wyatt Wilson</h1>
        <div className="flex items-center gap-2 mt-1">
          <h2 className="text-xl font-medium text-indigo-600">Unity Developer</h2>
        </div>
      </div>
      <div className="flex flex-col items-start md:items-end">
        <a href="mailto:wyattwilson916@gmail.com" className="text-slate-600 hover:text-indigo-600 transition-colors">
          wyattwilson916@gmail.com
        </a>
      </div>
    </header>
  );
};

export default Header;
