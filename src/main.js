import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"
import VueRouter from "vue-router"
import {routes} from "@/routes";

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueRouter)

const router = new VueRouter({
    routes: routes,
    mode: "history"
});

Vue.http.options.root = "https://vuejs-sandbox-f80fd.firebaseio.com/"
Vue.http.interceptors.push((request, next) => {
    if (request.method === 'POST')
        request.method = 'PUT'
    next(response => {
        response.json = () => {
            return {messages: response.body}
        }
    });
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
