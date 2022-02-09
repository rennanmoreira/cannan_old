import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import axios from 'axios'
import AxiosPlugin from 'vue-axios-cors';
 
Vue.use(AxiosPlugin)

Vue.config.productionTip = false

new Vue({
  axios,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
