export const pageRoutes = {
  home: "/",
  addUser: "/addUser",
  users: "/users",
  assets: "/assets",
  changelog: "/changelog",
  pqview: "/pqview",
  unauthorized: "/unauthorized",
};

export const sidebarRoutes = [
  {
    path: pageRoutes.home,
    name: "Home",
  },
  {
    path: pageRoutes.users,
    name: "Users",
  },
  {
    path: pageRoutes.assets,
    name: "Assets",
  },
  {
    path: pageRoutes.changelog,
    name: "ChangeLog",
  },
  {
    path: pageRoutes.pqview,
    name: "PQView",
  },
];
