import AppLayout from "../AppLayout";
import { DataTable } from "./data-table";
import { tasks } from "@/data/my-tasks/tasks";
import { columns } from "./columns";

const MyTasks = () => {
  return (
    <AppLayout>
      {/* DataTable */}
      <DataTable data={tasks} columns={columns} />
    </AppLayout>
  );
};

export default MyTasks;
