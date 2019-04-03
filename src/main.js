// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require("es6-promise").polyfill();


require("es6-promise").polyfill();
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
// import qs from 'qs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';


import $ from 'jquery'

import 'common/css/common.css';
import VueLazyload from 'vue-lazyload' //引入插件


Vue.use(VueLazyload, {
  loading: require('common/images/arrow.png') //设置一个默认图片 引入默认图片路径
})
Vue.config.productionTip = false
Vue.use(ElementUI)


var wapUrl = '/phone/index.html';
function IsPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}
if (!IsPC()) {
  window.location.href = wapUrl;
}

//全局title
Vue.directive('title', {
  inserted: (el, binding)=> {
    document.title = el.innerText
    $(el).css({display:'none'});
  },
  update:(el, binding)=>{//组件更新后重新赋值
    document.title = el.innerText
  },
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})


