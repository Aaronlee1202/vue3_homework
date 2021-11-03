import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../view/home.vue";
import Chat from "../view/chat.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
