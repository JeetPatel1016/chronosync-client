export function extractPage(s: string) {
  return s
    .replace("/", "")
    .split("-")
    .map((word: string) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

export function greetingMsg() {
  const date = new Date();
  const hours = date.getHours();
  let greeting;
  if (hours < 12) {
    greeting = "Good morning";
  } else if (hours < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }
  return greeting;
}
enum dueDateStatus {
  overdue = "text-red-500",
  upcoming = "text-teal-500",
  today = "text-amber-500",
  default = "text-slate-500",
}

export function parseDate(dueDateString: string) {
  let string = "";
  let status = dueDateStatus.default;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  const dueDate = new Date(dueDateString);
  const isToday = dueDate.toDateString() === today.toDateString();
  const isTomorrow = dueDate.toDateString() === tomorrow.toDateString();
  // Generate the String to display in task row
  if (isToday) string = "Today";
  else if (isTomorrow) string = "Tomorrow";
  else
    string = dueDate.toLocaleDateString("ban", {
      day: "numeric",
      month: "long",
    });
  // Select the appropriate status
  if (dueDate < today) {
    status = dueDateStatus.overdue;
  } else if (isToday) {
    status = dueDateStatus.today;
  } else if (dueDate.getTime() - today.getTime() < 604800000) {
    status = dueDateStatus.upcoming;
  }

  return { string, status };
}
