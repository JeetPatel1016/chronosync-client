export type Task = {
  id: string;
  title: string;
  due_date: string;
  status: string;
  project: string | null;
  label: string;
  priority: string;
};
