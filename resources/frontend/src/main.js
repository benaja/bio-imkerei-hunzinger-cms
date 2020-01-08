// import './bootstrap';
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import App from './App';
import router from './router';

Vue.use(VueAxios, axios);
UIkit.use(Icons);

Vue.prototype.$UIkit = UIkit;

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
