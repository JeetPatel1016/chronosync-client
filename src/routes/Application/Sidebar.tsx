import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BiChevronLeft } from "react-icons/bi";
import { BsBarChartSteps, BsBell, BsHouse } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC<{ isOpen: boolean; closeHandler: () => void }> = ({
  isOpen,
  closeHandler,
}) => {
  const { pathname } = useLocation();
  return (
    <Card
      className={`absolute z-10 h-full w-60 rounded-none transit ${
        isOpen ? "translate-x-0" : "-translate-x-72"
      } lg:translate-x-0 px-0 lg:relative`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 mb-6 cursor-pointer px-3 lg:pr-5">
        <img src={"/logo-md.png"} width={28} height={28} alt="logo" />
        <h1 className="text-2xl">ChronoSync</h1>
        <BiChevronLeft
          className="ml-4 lg:hidden text-zinc-500"
          onClick={closeHandler}
          size={32}
        />
      </div>
      {/* Quick Links */}
      <div className="space-y-1 px-2">
        <Button
          variant={pathname === "/dashboard" ? "secondary" : "ghost"}
          className="w-full justify-start px-2 "
        >
          <Link className="flex gap-2" to="/dashboard">
            <BsHouse size={18} />
            <span>Dashboard</span>
          </Link>
        </Button>
        <Button
          variant={pathname === "/my-tasks" ? "secondary" : "ghost"}
          className="w-full justify-start px-2 gap-2"
        >
          <Link className="flex gap-2" to="/my-tasks">
            <BsBarChartSteps size={18} />
            <span>My Tasks</span>
          </Link>
        </Button>
        <Button
          variant={pathname === "/inbox" ? "secondary" : "ghost"}
          className="w-full justify-start px-2 gap-2"
        >
          <Link className="flex gap-2" to="/inbox">
            <BsBell size={18} />
            <span>Inbox</span>
          </Link>
        </Button>
      </div>
      {/* Workspaces */}
      <div className="space-y-1 mt-2 px-2">
        <span className="text-xs text-neutral-500 font-bold tracking-wider uppercase px-1">
          Projects
        </span>
        <div className="flex flex-col gap-0.5">
          <Button
            variant="ghost"
            size="sm"
            className="px-2 flex gap-2 justify-start"
          >
            <div className="w-3.5 aspect-square rounded-sm bg-red-500"></div>
            Design Team
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="px-2 flex gap-2 justify-start"
          >
            <div className="w-3.5 aspect-square rounded-sm bg-blue-500"></div>
            UI/UX Team
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="px-2 flex gap-2 justify-start"
          >
            <div className="w-3.5 aspect-square rounded-sm bg-amber-500"></div>
            Developers and Testers
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="px-2 flex gap-2 justify-start"
          >
            <div className="w-3.5 aspect-square rounded-sm bg-violet-500"></div>
            Product Design
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Sidebar;
