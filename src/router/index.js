import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import login from '@/components/login'
import index from '@/components/index'
import shoppcart from '@/components/shoppcart'
import usercenter from '@/components/usercenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/shoppcart',
      name: 'shoppcart',
      component: shoppcart
    },
    {
      path: '/usercenter',
      name: 'usercenter',
      component: usercenter
    }
  ]
})
