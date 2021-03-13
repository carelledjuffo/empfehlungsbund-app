import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import AxiosPlugin from 'vue-axios-cors';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(AxiosPlugin)

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


