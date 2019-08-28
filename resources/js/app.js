import "./bootstrap";
import Vue from "vue";
import axios from "axios";
import router from "./router";
import App from "./views/App";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

axios.defaults.baseURL = "/api";

new Vue ({
  router: router,
  render: h => h(App)
}).$mount("#app");
