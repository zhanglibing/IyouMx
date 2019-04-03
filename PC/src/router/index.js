import Vue from 'vue'
import Router from 'vue-router'
import index from 'view/index/index'
import flowIntr from 'view/flowIntr/flowIntr'

import partners from 'view/partners/partners'
import business from 'view/business/business'
import website from 'view/business/web/website'
import indexPage from 'view/business/web/indexPage'

import details from 'view/business/details'

import pay from 'view/business/pay/pay'
import payIndex from 'view/business/pay/payIndex'


import technical from 'view/business/technical/technical'
import tecIndex from 'view/business/technical/tecIndex'

import smallProgram from 'view/business/smallProgram/smallProgram'
import smallIndex from 'view/business/smallProgram/smallIndex'

import planeDesign from 'view/business/planeDesign/planeDesign'
import planeIndex from 'view/business/planeDesign/planeIndex'

import mobileDev from 'view/business/mobileDev/mobileDev'
import mobileIndex from 'view/business/mobileDev/mobileIndex'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'index' }
      },
    {
      path: '/index',
      name:'index',
      component: index
    },
    {
      path: '/flowIntr',
      name:'flowIntr',
      component: flowIntr
    },
    {
      path: '/partners',
      name:'partners',
      component: partners
    },
    {
      path: '/business',
      name:'business',
      component: business, //业务介绍
      children:[
        {path:'/', redirect:{ path: 'website' }},
        {
          path:'website',name:'website',component:website, //网站建设
          children:[
            {path:'/',component:indexPage},
            {path:'indexPage',component:indexPage},
            {path:'details/:id',component:details},
          ]
        },
        {
          path:'pay',component:pay, //移动支付
          children:[
            {path:'/',component:payIndex},
            {path:'payIndex',component:payIndex},
          ]
        },
        {
          path:'technical',component:technical, //技术支持
          children:[
            {path:'/',component:tecIndex},
            {path:'tecIndex',component:tecIndex},
          ]
        },
        {
          path:'smallProgram',component:smallProgram, //小程序
          children:[
            {path:'/',component:smallIndex},
            {path:'smallIndex',component:smallIndex},
          ]
        },
        {
          path:'planeDesign',component:planeDesign, //平面设计
          children:[
            {path:'/',component:planeIndex},
            {path:'planeIndex',component:planeIndex},
          ]
        },
        {
          path:'mobileDev',component:mobileDev, //平面设计
          children:[
            {path:'/',component:mobileIndex},
            {path:'mobileIndex',component:mobileIndex},
            {path:'details/:id',component:details},
          ]
        },
      ]
    },
  ]
})
