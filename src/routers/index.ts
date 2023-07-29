import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  createWebHashHistory,
  Router,
} from "vue-router";
interface extendRoute {
  hidden?: boolean;
}

import Layout from "@/layout/index.vue";
// import tableRouter from "./modules/table";
// import dataScreenRouter from "./modules/dataScreen";
// import excelRouter from "./modules/excel";
// import nestedRouter from "./modules/nested";
// import systemRouter from "./modules/system";
// import echartsRouter from "./modules/echarts";
// import chatRouter from "./modules/chat";
// import othersRouter from "./modules/other";
// import externalLink from "./modules/externalLink";
// import formRouter from "./modules/form";
// import functionPageRouter from "./modules/functionPage";

// // 异步组件
export const asyncRoutes = [
  // ...dataScreenRouter,
  // ...echartsRouter,
  // ...tableRouter,
  // ...formRouter,
  // ...othersRouter,
  // ...functionPageRouter,
  // ...chatRouter,
  // ...nestedRouter,
  // ...excelRouter,
  // ...externalLink,
  // ...systemRouter,
];

export const constantRoutes: Array<RouteRecordRaw & extendRoute> = [
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/errorPages/404.vue"),
    hidden: true,
  },
  {
    path: "/403",
    name: "403",
    component: () => import("@/views/errorPages/403.vue"),
    hidden: true,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
    hidden: true,
    meta: { title: "登录" },
  },
  {
    path: "/",
    name: "layout",
    component: Layout,
    redirect: "/home",
    meta: { title: "首页", icon: "House" },

    children: [
      {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
        name: "home",
        meta: { title: "首页", icon: "House", affix: true, role: ["other"] },
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: Layout,
    meta: { title: "关于", icon: "management" },
    children: [
      {
        path: "/about",
        component: () => import("@/views/about/about.vue"),
        name: "about",
        meta: {
          title: "关于",
          icon: "management",
          affix: true,
          role: ["other"],
        },
      },
      {
        path: "/space",
        component: () => import("@/views/home/space.vue"),
        name: "space",
        meta: {
          title: "我的空间",
          icon: "Histogram",
          affix: true,
          role: ["other"],
        },
      },
    ],
  },
];

export const notFoundRouter = {
  path: "/:pathMatch(.*)",
  name: "notFound",
  redirect: "/404",
};

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
});

export default router;
