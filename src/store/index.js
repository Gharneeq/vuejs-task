import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const permissions = {
  gea: [
    "assign_gea",
    "assign_sea",
    "assign_eng",
    "assign_opr",
    "add_modify_assets",
    "view_assets_admin",
    "view_change_log",
    "manage_table_applications",
    "access_pqview",
  ],
  sea: [
    "assign_sea",
    "assign_eng",
    "assign_opr",
    "add_modify_assets",
    "view_assets_admin",
    "view_change_log",
    "manage_table_applications",
    "access_pqview",
  ],
  eng: [
    "assign_opr",
    "add_modify_assets",
    "view_assets_admin",
    "view_change_log",
    "manage_table_applications",
    "access_pqview",
  ],
  opr: [
    "add_modify_assets",
    "view_assets_admin",
    "view_change_log",
    "access_pqview",
  ],
  obr: ["access_pqview"],
};

const store = new Vuex.Store({
  state: {
    currentUser: {
      profile: import.meta.env.VITE_USER_ROLE,
    },
    roleOptions: {
      gea: "Global Engineering Admin",
      sea: "Site Engineering Admin",
      eng: "Engineering",
      opr: "Operator",
      obr: "Observer",
    },
  },
  getters: {
    userPermissions: (state) => permissions[state.currentUser.profile] || [],
    availableRoles: (state) => {
      const userRole = state.currentUser.profile;
      const roles = {};

      switch (userRole) {
        case "gea":
          return state.roleOptions;
        case "sea":
          return {
            sea: state.roleOptions.sea,
            eng: state.roleOptions.eng,
            opr: state.roleOptions.opr,
          };
        case "eng":
          return {
            opr: state.roleOptions.opr,
          };
        default:
          return {};
      }
    },
  },
  mutations: {
    setUserProfile(state, profile) {
      state.currentUser.profile = profile;
    },
  },
  actions: {
    checkPermission({ state }, action) {
      const userPerms = permissions[state.currentUser.profile] || [];
      return userPerms.includes(action);
    },
    changeUserProfile({ commit }, profile) {
      commit("setUserProfile", profile);
    },
  },
});

export default store;
