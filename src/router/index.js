import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage/HomePage.vue";

const routes = [
  { path: "/", component: HomePage, name: "home" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
