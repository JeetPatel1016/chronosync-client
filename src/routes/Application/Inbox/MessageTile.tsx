import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageTileData } from "./ActiveMessages";
import { parseDate } from "@/lib/utils/myUtils";

const MessageTile: React.FC<{ data: MessageTileData }> = ({ data }) => {
  return (
    <div className="h-40 p-4 flex flex-wrap border-b border-b-zinc-200/70 hover:bg-slate-100/50 transition-colors">
      <p className="font-medium text-xl">{data.title}</p>
      <div className="w-3 h-3 my-2.5 ml-auto rounded-full bg-blue-500"></div>
      <div className="basis-full h-0"></div>
      <Avatar>
        <AvatarImage src={data.avatar_url + "s"} />
        <AvatarFallback className="bg-zinc-200">
          {data.sender.split(" ").map((word) => word[0])}
        </AvatarFallback>
      </Avatar>
      <div className="ml-3">
        <p className="font-medium">{data.sender}</p>
        <p className="text-sm truncate max-w-[300px]">{data.message}</p>
        <p className="text-xs text-zinc-400 mt-2">
          {parseDate(data.timestamp)["string"]}
        </p>
      </div>
      <div className="basis-full h-0"></div>
    </div>
  );
};

export default MessageTile;
