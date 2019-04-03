<template>
  <div class="mobile">
      <common-title :index="5"></common-title>
      <div class="content">
         <h2 class="title">移动端开发-简述</h2>
         <div class="banner_img">
           <img src="./mobile_bg.jpg" alt="">
         </div>
        <p class="text">
          App开发，是指专注于手机应用软件开发与服务。App是application的缩写，通常专指手机上的应用软件，或称手机客户端。另外目前有很多在线app开发平台。
        </p>
      </div>
      <div class="type">
        <h2>操作系统</h2>
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

    <consulting-model></consulting-model>
  </div>
</template>

<script>
  export default{
    name:'mobile'
  }
</script>

<style lang="scss" scoped>
  @import "../../common/css/mixins";
  .mobile{
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
  .text{
    font-size: 12px;
    line-height: 0.5rem;
    margin-bottom:0.6rem;
  }

  }

  .type{
  .type_con{
    padding:0.8rem 1rem 1rem;
    display: flex;
    flex-direction: row;
    &>div{
      flex:1;
      text-align: center;
    }
   }

    img{
      height:1.4rem;
    }
    p{
      text-align: center;
    }
  }
</style>
