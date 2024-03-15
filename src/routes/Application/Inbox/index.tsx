import { Separator } from "@/components/ui/separator";
import AppLayout from "../AppLayout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ActiveMessages from "./ActiveMessages";

enum tabState {
  isActive = 0,
  isArchive = 1,
}

const Inbox = () => {
  const [activeTabIndex, setActiveTab] = useState<0 | 1>(tabState.isActive);
  const changeTab = (value: 0 | 1) => {
    setActiveTab(value);
  };

  return (
    <AppLayout>
      <div className="flex flex-col h-full">
        <div className="flex">
          <Button
            variant={"ghost"}
            size={"sm"}
            className={`tab ${
              activeTabIndex === tabState.isActive && "active-tab"
            }`}
            onClick={() => changeTab(tabState.isActive)}
          >
            Activity
          </Button>
          <Button
            variant={"ghost"}
            size={"sm"}
            className={`tab ${
              activeTabIndex === tabState.isArchive && "active-tab"
            }`}
            onClick={() => changeTab(tabState.isArchive)}
          >
            Archive
          </Button>
        </div>
        <Separator className="mb-4" />
        {/* Active Messages */}
        {activeTabIndex === tabState.isActive && (
          <ActiveMessages />
        )}
        {/* Archive Messages */}
        {activeTabIndex === tabState.isArchive && (
          <div className="flex flex-grow ">
            {/* Left Pane */}
            <div className="flex flex-1 gap-4 flex-col">
              <ul>
                <li>Hello World</li>
                <li>Hello World</li>
                <li>Hello World</li>
                <li>Hello World</li>
                <li>Hello World</li>
                <li>Hello World</li>
                <li>Hello World</li>
                <li>Hello World</li>
                <li>Hello World</li>
                <li>Hello World</li>
                <li>Hello World</li>
              </ul>
            </div>
            <Separator className="h-full -my-4" orientation="vertical" />
            {/* Right Pane */}
            <div className="flex w-3/5">decorative stuff</div>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Inbox;
