<template>
  <div class="technical">
      <common-title :index="4"></common-title>
      <div class="content">
         <h2 class="title">内容介绍</h2>
         <div class="banner_img">
           <img src="./technical_bg.jpg" alt="">
         </div>
       </div>
      <ul class="list">
        <li>稳定的系统</li>
        <li>强大的安全防御</li>
        <li>高弹性扩展能力</li>
        <li>多服务器均衡负载</li>
      </ul>
      <consulting-model></consulting-model>
  </div>
</template>

<script>
  export default{
    name:'technical'
  }
</script>

<style lang="scss" scoped>
  @import "../../common/css/mixins";
  .technical{
    margin-top:$mainTop;
    padding: 0 0.44rem;
  }

  .content{
   margin-bottom:0.4rem;
    .title{
      margin-bottom:0.4rem;
    }
    .banner_img{
      margin-bottom:0.8rem;
      img{width:100%;}
    }

  }

  .list{
    margin-bottom:0.4rem;
    li{
      background: $themeColor;
      line-height: 1rem;
      margin-bottom:0.3rem;
      text-align: center;
      color:#fff;
      font-size: 0.34rem;
    }
  }
</style>
