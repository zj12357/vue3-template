import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
    {
      path: "/",
      name: "Home",
      meta: {
        title: "首页",
        keepAlive: true
      },
      component: () => import("./Home.vue"),
    },
    {
      path: "/login",
      name: "Login",
      meta: {
        title: "登录",
        keepAlive: true
      },
      component: () => import("./Login.vue"),
    },
    {
      path: "/tsxPage",
      name: "TsxPage",
      meta: {
        title: "登录",
        keepAlive: true
      },
      component: () => import('./TsxPage.tsx'),
    },
  ];
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  export default router;