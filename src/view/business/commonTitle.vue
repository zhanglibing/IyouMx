<template>
  <div class="commonTitle">
    <h2>{{list[index].title}}</h2>
    <p class="eng">{{list[index].eng}}</p>
    <div class="line"></div>
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
  @import "../../common/css/mixins";
  .commonTitle{
    position: relative;
    padding-bottom:50px;
    h1{
      margin-bottom:0.5rem;
    }
    .line{
      width:700px;
      height:1px;
      margin-top:20px;
      background: #d2d2d2;
    }
  }
</style>
