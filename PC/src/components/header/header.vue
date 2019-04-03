<template>
  <div class="header">
    <div class="nav_box">
      <ul class="nav">
        <router-link to="/index" class="logo" tag="li"><img src="./logo.png" alt=""></router-link>
        <router-link to="/index" tag="li">首页</router-link>
        <router-link to="/business" tag="li">业务介绍</router-link>
        <router-link to="/flowIntr" tag="li">流程介绍</router-link>
        <router-link to="/partners" tag="li">合作伙伴</router-link>
        <li class="contact">联系我们
          <div class="con_box">
            <ul>
              <li>
                <img src="./jack.png" alt="">
                <p class="name">Jack</p>
                <p class="phone">13636661623</p>
              </li>
              <li>
                <img src="./yongsheng.png" alt="">
                <p class="name">Sleeve</p>
                <p class="phone">15383469010</p>
              </li>
              <li>
                <img src="./libing.png" alt="">
                <p class="name">Li Bing</p>
                <p class="phone">13620676550</p>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{}
</script>
<style lang="scss" scoped="">
  @import "../../common/css/mixins";

  .header {
    height: 45px;
    width: 100%;
    background: #191919;
  }

  .nav_box {
    width: 1000px;
    margin: 0 auto;
  }

  .nav {
    width:100%;
    color: #fff;
    display: inline-block;
    text-align: justify;
    &:after {
      content: '';
      width: 100%;
      height: 0;
      display: inline-block;
    }
    li {
      line-height: 45px;
      display: inline-block;
      text-align: center;
      width: 110px;
      cursor: pointer;
      &.logo {
        display: inline-block;
        img {
          vertical-align: middle;
        }
      }
      &:hover,&.router-link-active {
        background:$themeColor;
        &.logo{
          background: #191919;
        }
      }
      //联系我们
      &.contact{
        position: relative;
        &:hover{
          .con_box{
            display: block;
          }
        }
        .con_box{
          display: none;
          position: absolute;
          top:60px;
          height:200px;
          right:-100px;
          width:584px;
          padding:40px 45px;
          background: $themeColor;
          z-index: 200;
          &:before{
            position: absolute;
            top:-36px;
            right:140px;
            content:'';
            display: block;
            width:0;
            height:0;
            border-bottom:20px solid $themeColor;
            border-top:20px solid transparent;
            border-left:13px solid transparent;
            border-right:13px solid transparent;
          }
          ul{
            height:100%;
            text-align: justify;
            &:after{
              content:'';
              display: inline-block;
              width:100%;
              height:0;
            }
            li{
              width:144px;
              display: inline-block;
              line-height: 24px;
              img{
                width:100%;
                vertical-align: top;
                margin-bottom:10px;
              }
              .name{
                font-size: 18px;
                font-weight: bold;
              }
            }
          }
        }
      }
    }
  }
</style>
