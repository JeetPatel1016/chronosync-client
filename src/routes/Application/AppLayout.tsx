import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import Sidebar from "./Sidebar";
import AuthGuard from "./AuthGuard";
import { useLocation } from "react-router-dom";
import { extractPage } from "@/lib/utils/myUtils";

import { LuUser, LuLogOut, LuSettings } from "react-icons/lu";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const openDrawer = () => {
    setIsSidebarOpen(true);
  };
  const closeDrawer = () => {
    setIsSidebarOpen(false);
  };
  return (
    <AuthGuard>
      <div className="relative h-screen flex">
        <Sidebar isOpen={isSidebarOpen} closeHandler={closeDrawer} />
        <div className="p-4 lg:p-6 flex flex-col gap-4 flex-grow">
          <div className="flex items-center gap-2 text-zinc-700 relative">
            <BiMenu className="lg:hidden" size={28} onClick={openDrawer} />
            <span className="text-xl lg:text-2xl font-semibold">
              {extractPage(location.pathname)}
            </span>
            {/* Dropdown component here */}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-7 h-7 rounded-full ml-auto outline-none">
                  <img
                    className="w-full h-full object-cover"
                    width={28}
                    height={28}
                    src={"/user-md.png"}
                    alt="User"
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mr-6 w-48">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="py-2">
                  <LuUser className="mr-2 text-zinc-500" size={16} />
                  <span className="leading-none">Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-2">
                  <LuSettings className="mr-2 text-zinc-500" size={16} />
                  <span className="leading-none">Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="py-2">
                  <LuLogOut className="mr-2 text-zinc-500" size={16} />
                  <span className="leading-none">Log Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="h-full overflow-y-auto">{children}</div>
        </div>
      </div>
    </AuthGuard>
  );
};
export default AppLayout;
