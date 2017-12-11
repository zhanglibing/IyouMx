import Vue from 'vue'
import Router from 'vue-router'
import index from 'view/index/index'
import contact from 'view/contact/contact'
import partners from 'view/partners/partners'
import flowIntr from 'view/flowIntr/flowIntr'
import business from 'view/business/business'
import details from 'view/details/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/contact',
      component: contact
    },
    {
      path: '/partners',
      component: partners
    },
    {
      path: '/flowIntr',
      component: flowIntr
    },
    {
      path: '/business',
      name:'business',
      component: business
    },
    {
      path: '/details',
      name:'details',
      component: details
    },
  ]
})
