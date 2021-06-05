import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/:tenant",
    name: "TenantHome",
    component: () => import("../views/TenantHome.vue"),
  },
  {
    path: "/:tenant/sub-page",
    name: "TenantSubPage",
    component: () => import("../views/SubPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
