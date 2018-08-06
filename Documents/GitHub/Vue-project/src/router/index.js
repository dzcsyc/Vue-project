import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from '@/page/login'
import main from '@/page/main'
import info from '@/page/info'
import balance from '@/page/balance'
import benefit from '@/page/benefit'
import points from '@/page/points'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/balance',
      name: 'balance',
      component: balance
    },
    {
      path: '/benefit',
      name: 'benefit',
      component: benefit
    },
    {
      path: '/points',
      name: 'points',
      component: points
    }
  ]
})
