import Vue from 'vue'
import App from './App.vue'
import VuePostgrest  from 'vue-postgrest'
import router from './router'

Vue.use(VuePostgrest, {
  apiRoot:  'http://192.168.1.119:3000/'
})


Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
