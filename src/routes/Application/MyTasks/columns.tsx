import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";

import { FaCircleCheck, FaRegCircleCheck } from "react-icons/fa6";
import { priorities, statuses } from "@/data/my-tasks/tasks";
import { Task } from "@/data/my-tasks/tasks.schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { parseDate } from "@/lib/utils/myUtils";

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "Completed",
    header: ({ column }) => <DataTableColumnHeader column={column} title="" />,
    cell: () => {
      const prob = Math.random();
      return prob > 0.5 ? (
        <FaCircleCheck className="ml-auto text-xl text-green-500" />
      ) : (
        <FaRegCircleCheck className="ml-auto text-xl text-slate-500" />
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex justify-items-start max-w-[400px]">
          <span className="truncate font-medium">{row.getValue("title")}</span>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "due_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Due Date" />
    ),
    cell: ({ row }) => {
      const { string, status } = parseDate(row.getValue("due_date") as string);
      return <div className={status}>{string}</div>;
    },
    sortingFn: "datetime",
  },
  {
    accessorKey: "project",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Project" />
    ),
    cell: ({ row }) => {
      const projectName = row.getValue("project");
      return projectName ? <div>{row.getValue("project")}</div> : "";
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "priority",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Priority" />
    ),
    cell: ({ row }) => {
      const priority = priorities.find(
        (priority) => priority.value === row.getValue("priority")
      );

      if (!priority) {
        return null;
      }

      return (
        <div className={`flex items-center`}>
          <Badge
            className={`${priority.color} bg-opacity-70 hover:bg-opacity-100 hover:${priority.color} `}
          >
            {priority.label}
          </Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
