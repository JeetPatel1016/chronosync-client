import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { FaEllipsis, FaRegPenToSquare } from "react-icons/fa6";
import MessageTile from "./MessageTile";

export type MessageTileData = {
  title: string;
  sender: string;
  message: string;
  avatar_url: string;
  timestamp: string;
};

const messageData: MessageTileData[] = [
  {
    title: "QA changes in Feature #348",
    sender: "John Doe",
    message: "We are almost done, pls check the changes",
    avatar_url: "https://picsum.photos/100",
    timestamp: new Date("2023/12/21").toISOString(),
  },
  {
    title: "Documentation updates",
    sender: "Alice Bob",
    message: "The formatting isn't upto the standards",
    avatar_url: "https://picsum.photos/100",
    timestamp: new Date("2023/12/22").toISOString(),
  },
  {
    title: "ChronoSync: Backend",
    sender: "Joe Biden",
    message: "Can you please review my PR?",
    avatar_url: "https://picsum.photos/100",
    timestamp: new Date("2023/12/25").toISOString(),
  },
  {
    title: "JS Dev Team",
    sender: "John Doe",
    message: "Everyone is supposed to prepare a copy of their resume.",
    avatar_url: "https://picsum.photos/100",
    timestamp: new Date("2023/12/29").toISOString(),
  },
];
const ActiveMessages = () => {
  return (
    <div className="flex flex-grow ">
      {/* Left Pane */}
      <div className="flex flex-1 flex-col">
        <div className="flex items-center">
          <Button className="mr-auto border-2" size="sm" variant={"outline"}>
            <FaRegPenToSquare className="mr-2" />
            Send Message
          </Button>
          {/* Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"ghost"} size="icon" className="mr-4">
                <FaEllipsis />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-20 w-24 bg-white">
              <DropdownMenuItem>Archive All</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Separator className="mt-4" />
        <ScrollArea className="h-72 flex-grow">
          {/* Notification Panes */}
          {messageData.map((message) => (
            <MessageTile data={message} />
          ))}
        </ScrollArea>
      </div>
      <Separator className="h-full -my-4" orientation="vertical" />
      {/* Right Pane */}
      <div className="flex w-1/2">decorative stuff</div>
    </div>
  );
};

export default ActiveMessages;
