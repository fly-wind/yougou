// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import router from './router'
import { AlertPlugin, ToastPlugin } from 'vux'
import './assets/font-awesome/css/font-awesome.min.css'
import VueScroller from 'vue-scroller'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(VueScroller)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
