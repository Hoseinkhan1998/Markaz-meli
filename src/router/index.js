import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage/HomePage.vue";
import Chat from "../components/Chat/Chat.vue";
import FoodManagment from "../components/FoodManagment/FoodManagment.vue";
import Tasks from "../components/Tasks/Tasks.vue";
import Processes from "../components/Processes/Processes.vue";
import Calendar from "../components/Calendar/Calendar.vue";
import Salary from "../components/Salary/Salary.vue";
import Efficiency from "../components/Efficiency/Efficiency.vue";
import Programs from "../components/Programs/Programs.vue";
import Report from "../components/Report/Report.vue";
import Allocations from "../components/Allocations/Allocations.vue";
import Contracts from "../components/Contracts/Contracts.vue";
import Payment from "../components/Payment/Payment.vue";
import AnnouncementManager from "../components/AnnouncementManager/AnnouncementManager.vue";

const routes = [
  { path: "/", component: HomePage, name: "home" },
  { path: "/chat", component: Chat, name: "chat" },
  { path: "/foodmanagment", component: FoodManagment, name: "foodmanagment" },
  { path: "/tasks", component: Tasks, name: "tasks" },
  { path: "/processes", component: Processes, name: "processes" },
  { path: "/calendar", component: Calendar, name: "calendar" },
  { path: "/salary", component: Salary, name: "salary" },
  { path: "/efficiency", component: Efficiency, name: "efficiency" },
  { path: "/programs", component: Programs, name: "programs" },
  { path: "/report", component: Report, name: "report" },
  { path: "/allocations", component: Allocations, name: "allocations" },
  { path: "/contracts", component: Contracts, name: "contracts" },
  { path: "/payment", component: Payment, name: "payment" },
  { path: "/announcementManager", component: AnnouncementManager, name: "announcementManager" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
