<template>
  <div class="mobile">
    <common-title :index="5"></common-title>
    <div class="content">
      <h3 class="title">移动端开发-简述</h3>
      <div class="banner_img">
        <img src="./mobile_bg.jpg" alt="">
      </div>
      <p class="text">
        App开发，是指专注于手机应用软件开发与服务。App是application的缩写，通常专指手机上的应用软件，或称手机客户端。另外目前有很多在线app开发平台。
      </p>
    </div>
    <div class="type">
      <h3>操作系统</h3>
      <div class="type_con">
        <div>
          <img src="./ios.png" alt="">
          <p>IOS</p>
        </div>
        <div>
          <img src="./android.png" alt="">
          <p>Android</p>
        </div>
      </div>
    </div>
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
    margin-bottom:40px;
    .title{
      margin-bottom:40px;
    }
    .banner_img{
      margin-bottom:60px;
      img{width:100%;}
    }
    .text{
      font-size: 12px;
      line-height:24px;
      margin-bottom:60px;
    }

  }

  .type{
    .type_con{
      padding:40px 100px;
      display: flex;
      flex-direction: row;
      &>div{
        flex:1;
        text-align: center;
      }
    }
    img{
      height:140px;
    }
    p{
      text-align: center;
      font-size: 24px;
    }
  }
</style>
