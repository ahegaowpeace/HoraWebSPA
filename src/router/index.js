import Vue from 'vue'
import Router from 'vue-router'
import calc from '@/components/calc'
import rule from '@/components/rule'
import explain from '@/components/explain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'calc',
      component: calc
    },
    {
      path: '/rule',
      name: 'rule',
      component: rule
    },
    {
      path: '/explain',
      name: 'explain',
      component: explain
    }
  ]
})
