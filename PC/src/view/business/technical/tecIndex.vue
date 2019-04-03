<template>
  <div class="tecIndex">
    <common-title :index="4"></common-title>
    <div class="content">
      <h3 class="title">内容介绍</h3>
      <div class="banner_img">
        <img src="/static/images/technical/technical_bg.jpg" alt="">
      </div>
    </div>
    <ul class="list">
      <li>稳定的系统</li>
      <li>强大的安全防御</li>
      <li>高弹性扩展能力</li>
      <li>多服务器均衡负载</li>
    </ul>
  </div>
</template>

<script>
  import CommonTitle from '../commonTitle'
  export default{
    components:{
      CommonTitle
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../common/css/mixins";
  .content{
    margin-bottom:30px;
    .title{
      margin-bottom:20px;
    }
    .banner_img{
      margin-bottom:60px;
      img{width:100%;}
    }

  }

  .list{
    margin-bottom:60px;
    li{
      background: $themeColor;
      line-height: 50px;
      margin-bottom:20px;
      text-align: center;
      color:#fff;
      font-size: 16px;
    }
  }
</style>
