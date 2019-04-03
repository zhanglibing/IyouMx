<template>
   <div class="commonTitle">
     <h2>{{list[index].title}}</h2>
     <p class="eng">{{list[index].eng}}</p>
     <router-link tag="button" to="/">返回</router-link>
   </div>
</template>

<script>
  export default{
    props:["index"],
    data(){
       return{
         list:[
           {},
           {title:'网站建设',eng:'The website construction'},
           {title:'移动支付',eng:'Mobile payment'},
           {title:'小程序开发',eng:'Small program development'},
           {title:'技术支持',eng:'Technical support'},
           {title:'移动端开发',eng:'Mobile terminal development'},
           {title:'平面设计',eng:'The plane design'},
         ]
       }
    }
  }
</script>

<style lang="scss" scoped>
    @import "../common/css/mixins";
    .commonTitle{
      position: relative;
      padding-bottom:0.44rem;
    h2{
      font-size: 0.48rem;
      margin-bottom:0.5rem;
    }
    button{
      width:1.36rem;
      height:0.54rem;
      color:#fff;
      background: $themeColor;
      border-radius: 0.27rem;
      position: absolute;
      top:0;
      right:0;
    }
    }
</style>
