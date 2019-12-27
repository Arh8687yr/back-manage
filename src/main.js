import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/base.css'
import axios from 'axios'

axios.defaults.baseURL ="https://www.liulongbin.top:8888/api/private/v1/"

Vue.use(ElementUI)
Vue.prototype.$http =axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
