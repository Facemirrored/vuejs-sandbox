import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"
import VueRouter from "vue-router"
import {routes} from "@/routes";
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { store } from "./store/store"

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
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

Vue.http.options.root = "https://vuejs-sandbox-f80fd.firebaseio.com/"
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
