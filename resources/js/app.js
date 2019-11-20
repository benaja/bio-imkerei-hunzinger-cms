import "./bootstrap";
import Vue from "vue";
import axios from "axios";
import router from "./router";
import App from "./views/App";
import VueAxios from "vue-axios";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

Vue.use(VueAxios, axios);
UIkit.use(Icons);

Vue.prototype.$UIkit = UIkit;

axios.defaults.baseURL = "/api";

new Vue({
    router: router,
    render: h => h(App)
}).$mount("#app");
