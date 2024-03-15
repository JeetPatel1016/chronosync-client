import {
  FaCheckCircle,
  FaCircle,
  FaQuestionCircle,
  FaStopwatch,
} from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: FaQuestionCircle,
  },
  {
    value: "todo",
    label: "Todo",
    icon: FaCircle,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: FaStopwatch,
  },
  {
    value: "done",
    label: "Done",
    icon: FaCheckCircle,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: FaCircleXmark,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    color: "bg-emerald-500",
  },
  {
    label: "Medium",
    value: "medium",
    color: "bg-amber-500",
  },
  {
    label: "High",
    value: "high",
    color: "bg-rose-500",
  },
];

const MAX_DAYS = 20;

function generateDate(maxDays: number) {
  const today = new Date();
  const modifier = Math.floor((Math.random() - 0.5) * 2 * maxDays);
  today.setDate(today.getDate() + modifier);
  return today.toISOString();
}

export const tasks = [
  {
    id: "TASK-8782",
    title:
      "You can't compress the program without quantifying the open-source SSD pixel!",
    status: "in progress",
    label: "documentation",
    due_date: generateDate(MAX_DAYS),
    project: "PIXELATES",
    priority: "medium",
  },
  {
    id: "TASK-7878",
    title:
      "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
    status: "backlog",
    label: "documentation",
    due_date: generateDate(MAX_DAYS),
    project: null,
    priority: "medium",
  },
  {
    id: "TASK-7839",
    title: "We need to bypass the neural TCP card!",
    status: "todo",
    label: "bug",
    due_date: generateDate(MAX_DAYS),
    project: "TCP DCP",
    priority: "high",
  },
  {
    id: "TASK-5562",
    title:
      "The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!",
    status: "backlog",
    label: "feature",
    due_date: generateDate(MAX_DAYS),
    project: null,
    priority: "medium",
  },
  {
    id: "TASK-8686",
    title:
      "I'll parse the wireless SSL protocol, that should driver the API panel!",
    status: "canceled",
    label: "feature",
    due_date: generateDate(MAX_DAYS),
    project: "SSLAPIt",
    priority: "medium",
  },
  {
    id: "TASK-1280",
    title:
      "Use the digital TLS panel, then you can transmit the haptic system!",
    status: "done",
    label: "bug",
    due_date: generateDate(MAX_DAYS),
    project: "TCP DCP",
    priority: "high",
  },
  {
    id: "TASK-7262",
    title:
      "The UTF8 application is down, parse the neural bandwidth so we can back up the PNG firewall!",
    status: "done",
    label: "feature",
    due_date: generateDate(MAX_DAYS),
    project: "Hello world",
    priority: "high",
  },
  {
    id: "TASK-1138",
    title:
      "Generating the driver won't do anything, we need to quantify the 1080p SMTP bandwidth!",
    status: "in progress",
    label: "feature",
    due_date: generateDate(MAX_DAYS),
    project: null,
    priority: "medium",
  },
  {
    id: "TASK-7184",
    title: "We need to program the back-end THX pixel!",
    status: "todo",
    label: "feature",
    due_date: generateDate(MAX_DAYS),
    project: null,
    priority: "low",
  },
  {
    id: "TASK-5160",
    title:
      "Calculating the bus won't do anything, we need to navigate the back-end JSON protocol!",
    status: "in progress",
    label: "documentation",
    due_date: generateDate(MAX_DAYS),
    project: "SSLAPIt",
    priority: "high",
  },
  {
    id: "TASK-5618",
    title:
      "Generating the driver won't do anything, we need to index the online SSL application!",
    status: "done",
    label: "documentation",
    due_date: generateDate(MAX_DAYS),
    project: "SSLAPIt",
    priority: "medium",
  },
  {
    id: "TASK-6699",
    title:
      "I'll transmit the wireless JBOD capacitor, that should hard drive the SSD feed!",
    status: "backlog",
    label: "documentation",
    due_date: generateDate(MAX_DAYS),
    project: null,
    priority: "medium",
  },
  {
    id: "TASK-2858",
    title: "We need to override the online UDP bus!",
    status: "backlog",
    label: "bug",
    due_date: generateDate(MAX_DAYS),
    project: null,
    priority: "medium",
  },
  {
    id: "TASK-9864",
    title:
      "I'll reboot the 1080p FTP panel, that should matrix the HEX hard drive!",
    status: "done",
    label: "bug",
    due_date: generateDate(MAX_DAYS),
    project: "TCP DCP",
    priority: "high",
  },
  {
    id: "TASK-8404",
    title: "We need to generate the virtual HEX alarm!",
    status: "in progress",
    label: "bug",
    due_date: generateDate(MAX_DAYS),
    project: null,
    priority: "low",
  },
];
