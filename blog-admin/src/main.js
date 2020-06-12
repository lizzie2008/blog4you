import Vue from 'vue'
import Cookies from 'js-cookie'
import 'normalize.css/normalize.css'

import Element from 'element-ui'

import '@/assets/styles/element-variables.scss'


// global css
import '@/assets/styles/index.scss'

import App from './App'
import store from './store'
import router from './router'

import '@/assets/icons' // icon

Vue.use(Element, {
  size: Cookies.get('size') || 'small' // set element-ui default size
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

// console.log(process.env.VUE_APP_BASE_API)
// console.log(process.env.NODE_ENV)
