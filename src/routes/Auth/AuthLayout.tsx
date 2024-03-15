import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="px-6 py-8 md:p-8 flex flex-col justify-between items-center min-h-screen gap-8">
      {/* Heading */}
      <div className="flex flex-col items-center gap-2">
        <img
          src={"./logo-lg.png"}
          className="w-auto"
          width={60}
          height={60}
          alt="Logo"
        />
        <p className="text-slate-700 text-3xl">ChronoSync</p>
      </div>
      <Card className="w-full md:w-fit">{children}</Card>
      {/* Footer */}
      <div className="flex items-center justify-center gap-5 md:gap-10 text-sm">
        <Link className="primary-link" to={"/#"}>
          Usage
        </Link>
        <span className="text-sky-500 select-none">•</span>
        <Link className="primary-link" to={"/#"}>
          Docs
        </Link>
        <span className="text-sky-500 select-none">•</span>
        <Link className="primary-link" to={"/#"}>
          Support
        </Link>
      </div>
    </div>
  );
};

export default AuthLayout;
