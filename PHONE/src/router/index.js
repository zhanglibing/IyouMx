import Vue from 'vue'
import Router from 'vue-router'

import index from 'view/index/index'
import contact from 'view/contact/contact'
import partners from 'view/partners/partners'
import flowIntr from 'view/flowIntr/flowIntr'
import business from 'view/business/business'
import details from 'view/details/details'
import planeDesign from 'view/planeDesign/planeDesign'
import technical from 'view/technical/technical'
import mobile from 'view/mobile/mobile'
import website from 'view/website/website'
import mobilePay from 'view/mobilePay/mobilePay'
import applet from 'view/applet/applet'

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
    {
      path: '/planeDesign/:index',
      name:'planeDesign',
      component: planeDesign
    },
    {
      path: '/technical',
      name:'technical',
      component: technical
    },
    {
      path: '/mobile',
      name:'mobile',
      component: mobile
    },
    {
      path: '/website',
      name:'website',
      component: website
    },
    {
      path: '/mobilePay',
      name:'mobilePay',
      component: mobilePay
    },
    {
      path: '/applet',
      name:'applet',
      component: applet
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
