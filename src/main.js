import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"
import VueRouter from "vue-router"
import {routes} from "@/routes";
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {store} from "./store/store"
import axios from "axios"

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.use(VueRouter);

export const router = new VueRouter({
  routes: routes,
  mode: "history",
  scrollBehavior(to, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {selector: to.hash}
    }
    return {
      x: 0,
      y: 0
    };
  }
});

// Axios global setup
axios.defaults.baseURL = "https://vuejs-sandbox-f80fd.firebaseio.com/";
//axios.defaults.headers.common['Authorization'] = 'test';
axios.defaults.headers.get['Accepts'] = 'application/json';
// check axios request configs for example for validation
const reqInterceptor = axios.interceptors.request.use(config => {
  console.log("Request interceptor", config);
  return config;
});
axios.interceptors.response.use(res => {
  console.log("Response interceptor", res);
  return res;
});
// Remove interceptor again
axios.interceptors.request.eject(reqInterceptor);

// vue resource
Vue.http.options.root = "https://vuejs-sandbox-f80fd.firebaseio.com/";
Vue.http.interceptors.push((request, next) => {
  if (request.method === 'POST') {
    request.method = 'PUT'
  }
  next(response => {
    response.json = () => {
      return {messages: response.body}
    }
  });
})

new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app');
