// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
// import VueResource from 'vue-resource'
import router from './router'
// import store from './vuex/store'

import $ from 'jquery'

import 'common/css/common.css';

Vue.config.productionTip = false
// Vue.use(ElementUI)
// Vue.use(VueResource);


//全局组件
import HeadModel from './components/header/header'
import ConsultingModel from './components/consulting'
import CommonTitle from './components/commonTitle'
Vue.component('HeadModel', HeadModel)
Vue.component('ConsultingModel', ConsultingModel)
Vue.component('CommonTitle', CommonTitle)

Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.innerText
    el.remove()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,

  template: '<App/>',
  components: { App }
})


