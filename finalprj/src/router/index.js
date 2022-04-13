import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Shop from '@/components/Shop'
import Location from '@/components/Location'
import Feedbacks from '@/components/Feedbacks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/Location',
      name: 'Location',
      component: Location 
    },
    {
      path: '/Feedbacks',
      name: 'Feedbacks',
      component: Feedbacks
    }
  ]
})
