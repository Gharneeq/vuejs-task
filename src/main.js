import Vue from "vue";
import VueCompositionAPI, { createApp, h } from "@vue/composition-api";
import "./assets/base.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.use(VueCompositionAPI);

const app = createApp({
  router,
  store,
  render: () => h(App),
});

app.mount("#app");
