import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Pap from '@/components/Pap'
import Alternative from '@/components/Alternative'
import Avendus from '@/components/Avendus'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path:'/pap',
        component: Pap
    },
    {
        path: '/alternative',
        component: Alternative
    },
    {
        path: '/avendus',
        component: Avendus
    },
    {
        path: '/contact',
        component: Contact
    }
  ]
})
