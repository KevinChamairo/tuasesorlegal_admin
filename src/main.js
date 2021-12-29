import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/element.js'
import axios from 'axios'
Vue.prototype.$http = axios
require('@/assets/css/reset.css')
//axios.defaults.baseURL = 'http://142.93.14.230:8091/api/abogados'
axios.defaults.baseURL = 'http://localhost:8090/api/abogados'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
