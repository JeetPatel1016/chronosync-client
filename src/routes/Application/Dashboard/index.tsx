import { Link } from "react-router-dom";
import AppLayout from "../AppLayout";
import { FaPlus, FaCircleCheck } from "react-icons/fa6";
import { MdAssignmentAdd } from "react-icons/md";
import { greetingMsg } from "@/lib/utils/myUtils";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function Dashboard() {
  return (
    <AppLayout>
      <main className="grid grid-cols-6 gap-4 gap-x-6">
        {/* Welcome Card */}
        <section className="col-span-6 bg-gradient-to-bl from-teal-500 to-cyan-800 rounded-lg h-40 md:h-48 lg:56 flex flex-col items-center justify-center">
          <span className="text-white/90 font-medium">12 December, 1203</span>
          <p className="text-teal-50 text-2xl md:text-3xl font-medium mb-4">
            {`${greetingMsg()}, User`}
          </p>
          <div className="bg-white/20 text-white py-1 md:py-2 rounded-full flex items-center">
            <div className="pl-3 pr-1 md:pl-5 md:pr-3 py-1">
              <Select>
                <SelectTrigger className="h-4 sm:py-1 md:h-8 w-24 bg-transparent border-0 focus-visible:border-0 hover:bg-white/20 transition-colors">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">Weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Separator className="opacity-50" orientation="vertical" />
            <div className="px-4 md:px-6 py-0.5 md:py-1 flex-grow flex gap-2 md:gap-8 justify-around">
              <div className="flex flex-col md:flex-row  items-center">
                <span className="text-xs md:text-sm mr-2 -mb-0.5 text-white/80">
                  Tasks Done
                </span>
                <span className="font-medium text-lg md:text-xl">564</span>
              </div>
              <div className="flex flex-col md:flex-row  items-center">
                <span className="text-xs md:text-sm mr-2 -mb-0.5 text-white/80">
                  Tasks Created
                </span>
                <span className="font-medium text-lg md:text-xl">153</span>
              </div>
              {/* <div className="flex items-center">
                <span className="text-sm mr-2">Tasks Created</span>
                <span className="font-medium text-xl">124</span>
              </div> */}
            </div>
          </div>
        </section>
        {/* Notifications Table */}
        <section className="col-span-6 md:col-span-3">
          {/* Heading section */}
          <Card>
            <CardHeader className="p-2 flex-row items-center">
              <CardTitle className="inline">Your Notifications</CardTitle>
              <CardDescription className="ml-auto">
                <Link to={"/inbox"}>View Inbox</Link>
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2">
              {/* eslint-disable-next-line no-constant-condition*/}
              {false ? (
                <div className="h-56 flex flex-col items-center justify-center">
                  <p className="text-xl text-center text-zinc-500">
                    You do not have any new notifications
                  </p>
                </div>
              ) : (
                <>
                  {/* For first element pt-4, rest pt-8  */}
                  <li className="pt-4 flex gap-4 items-center">
                    <FaPlus size={18} className="text-teal-500" />
                    <p className="text-zinc-500 leading-none">
                      <span className="font-semibold">John Doe</span> added you
                      to a new project{" "}
                      <span className="font-semibold">Vuexy</span>
                    </p>
                    <span className="leading-none text-xs text-neutral-400 ml-auto">
                      9:32AM
                    </span>
                  </li>
                  <li className="pt-8 flex gap-4 items-center">
                    <FaCircleCheck size={18} className="text-teal-500" />
                    <p className="text-zinc-500 leading-none">
                      <span className="font-semibold">Alice Bob</span> marked
                      task <span className="font-semibold">Refactor UI</span> as
                      complete.
                    </p>
                    <span className="leading-none text-xs text-neutral-400 ml-auto">
                      9:32AM
                    </span>
                  </li>
                  <li className="pt-8 flex gap-4 items-center">
                    <MdAssignmentAdd size={18} className="text-teal-500" />
                    <p className="text-zinc-500 leading-none">
                      <span className="font-semibold">John Doe</span> added you
                      to a new project{" "}
                      <span className="font-semibold">Vuexy</span>
                    </p>
                    <span className="leading-none text-xs text-neutral-400 ml-auto">
                      9:32AM
                    </span>
                  </li>
                  <li className="pt-8 flex gap-4 items-center">
                    <FaCircleCheck size={18} className="text-teal-500" />
                    <p className="text-zinc-500">
                      <span className="font-semibold">Alice Bob</span> marked
                      task <span className="font-semibold">Refactor UI</span> as
                      complete.
                    </p>
                    <span className="leading-none text-xs text-neutral-400 ml-auto">
                      9:32AM
                    </span>
                  </li>
                </>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Recent Projects section*/}
        <div className="col-span-6 md:col-span-3">
          <Card>
            <CardHeader className="p-2 flex-row items-center">
              <CardTitle className="inline">Recent Projects</CardTitle>
              <CardDescription className="ml-auto">
                <Link to={"/projects"}>View all Projects</Link>
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2">
              {/* Project Section */}
              {/* Empty section */}
              {/* eslint-disable-next-line no-constant-condition*/}
              {false ? (
                <div className="h-56 flex flex-col items-center justify-center">
                  <p className="text-xl text-center text-zinc-500">
                    You do not have any recent projects
                  </p>
                  <p className="text-zinc-400">
                    {" "}
                    <Link to="">Click here</Link> to start a new project
                  </p>
                </div>
              ) : (
                <ul>
                  <li className="pt-4 flex gap-4 items-center">
                    <span className="bg-red-500/50 p-2 rounded-full"></span>
                    <p className="text-zinc-600 font-medium leading-none">
                      EXRisk
                    </p>
                    <span className="leading-none text-xs text-neutral-400 ml-auto">
                      Last viewed: 1d ago
                    </span>
                  </li>
                  <li className="pt-8 flex gap-4 items-center">
                    <span className="bg-cyan-400/75 p-2 rounded-full"></span>
                    <p className="text-zinc-600 font-medium leading-none">
                      ChronoSync
                    </p>
                    <span className="leading-none text-xs text-neutral-400 ml-auto">
                      Last viewed: 3w ago
                    </span>
                  </li>
                  <li className="pt-8 flex gap-4 items-center">
                    <span className="bg-fuchsia-400/75 p-2 rounded-full"></span>
                    <p className="text-zinc-600 font-medium leading-none">
                      EXRisk
                    </p>
                    <span className="leading-none text-xs text-neutral-400 ml-auto">
                      Last viewed: 6m ago
                    </span>
                  </li>
                </ul>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </AppLayout>
  );
}
