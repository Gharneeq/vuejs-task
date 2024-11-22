import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import { pageRoutes } from "../lib/constants";

Vue.use(VueRouter);

const routes = [
  {
    path: pageRoutes.home,
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: pageRoutes.users,
    name: "Users",
    component: () => import("../views/Users.vue"),
    beforeEnter: (to, from, next) => {
      const hasPermission =
        store.state.currentUser.profile !== "eng" &&
        store.state.currentUser.profile !== "obr" &&
        store.state.currentUser.profile !== "opr";
      if (!hasPermission) {
        next("/unauthorized");
      } else {
        next();
      }
    },
  },
  {
    path: pageRoutes.assets,
    name: "Assets",
    component: () => import("../views/Assets.vue"),
    beforeEnter: (to, from, next) => {
      const hasPermission =
        store.getters.userPermissions.includes("view_assets_admin");
      if (!hasPermission) {
        next("/unauthorized");
      } else {
        next();
      }
    },
  },
  {
    path: pageRoutes.changelog,
    name: "ChangeLog",
    component: () => import("../views/ChangeLog.vue"),
    beforeEnter: (to, from, next) => {
      const hasPermission =
        store.getters.userPermissions.includes("view_change_log");
      if (!hasPermission) {
        next("/unauthorized");
      } else {
        next();
      }
    },
  },
  {
    path: pageRoutes.pqview,
    name: "PQView",
    component: () => import("../views/PQView.vue"),
  },
  {
    path: pageRoutes.unauthorized,
    name: "Unauthorized",
    component: () => import("../views/Unauthorized.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
