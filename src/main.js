import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"

Vue.config.productionTip = false;
Vue.use(VueResource);

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
    render: h => h(App),
}).$mount('#app');
