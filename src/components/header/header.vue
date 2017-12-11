<template>
  <div class="header">
    <div class="title">
      <span class="menu" @click="showMenu"><img src="./menu.png" alt=""></span>
      <span class="logo"><img src="./logo.png" alt=""></span>
      <span class="wechat" @click="goContact"><img src="./wechat.png" alt=""></span>
    </div>
    <div class="menu_box" :class="{active:menuShow}">
      <div class="mask" @click="hideMenu"></div>
      <div class="contain">
        <div class="logo"><img src="./logo.png" alt=""></div>
        <ul class="nav_links">
          <!--<li class="active" @click="goPage('/')">-->
          <!--<p>首页</p>-->
          <!--<p>HomePage</p>-->
          <!--</li>-->
          <!--<li @click="goPage('/business')">-->
          <!--<p>业务介绍</p>-->
          <!--<p>Business</p>-->
          <!--</li>-->
          <!--<li @click="goPage('/flowIntr')">-->
          <!--<p>流程介绍</p>-->
          <!--<p>Process</p>-->
          <!--</li>-->
          <!--<li @click="goPage('/contact')">-->
          <!--<p>联系我们</p>-->
          <!--<p>Contact us</p>-->
          <!--</li>-->
          <!--<li @click="goPage('/partners')">-->
          <!--<p>合作伙伴</p>-->
          <!--<p>Partners</p>-->
          <!--</li>-->
          <router-link to="/" tag="li" @click.native="hideMenu" :class="{active:homeIsActive}">
            <p>首页</p>
            <p class="eng">HomePage</p>
          </router-link>
          <router-link to="/business" tag="li" @click.native="hideMenu">
            <p>业务介绍</p>
            <p class="eng">Business</p>
          </router-link>
          <router-link to="/flowIntr" tag="li" @click.native="hideMenu">
            <p>流程介绍</p>
            <p class="eng">Process</p>
          </router-link>
          <router-link to="/contact" tag="li" @click.native="hideMenu">
            <p>联系我们</p>
            <p class="eng">Contact us</p>
          </router-link>
          <router-link to="/partners" tag="li" @click.native="hideMenu">
            <p>合作伙伴</p>
            <p class="eng">Partners</p>
          </router-link>
        </ul>
        <div class="zixun">
          <p class="z_title">咨询 | 服务</p>
          <p  class="eng">ONE-STOP SERVICE ENTERPRISE </p>
          <P class="life eng">LIFE CYCLE</P>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
        menuShow: false,
        homeIsActive:false,
      }
    },
    mounted(){
      this.init()
      this.moveLeft();
    },
    methods: {
      init(){
        this.homeIsActive=false;
         if(this.$route.path=="/details"){
           this.homeIsActive=true;
         }
      },
      goContact(){
        this.$router.push('/contact')
      },
      showMenu(){
        this.init()
//        $('#app').animate({left:'84%'},380);
//        $('#app').addClass('active');
        this.menuShow = true;
      },
      hideMenu(){
        this.menuShow = false;
//        $('#app').removeClass('active');
//        $('#app').animate({left:'0'},380);
      },
      goPage(name){
        this.$router.push(name);
        this.hideMenu();
      },
      moveLeft(){
        var left = null;
        let that = this;
        $('.menu_box').on('touchstart', function (e) {
          left = e.originalEvent.changedTouches[0].pageX;
        });

        $('.menu_box').on('touchmove', function (e) {
          let n = e.originalEvent.changedTouches[0].pageX;
          if (n - left > 40) {

          }
          if (n - left < -50) {
            that.hideMenu();
          }
        });
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../../common/css/mixins";

  img {
    width: 100%;
    height: 100%;
  }

  .header {
    height: 0.52rem;
    background: #fff;
    padding: 0.24rem 0.4rem;
    box-shadow: 0 1px 3px #eee;
    .title {
      text-align: justify;
      &:after {
        display: inline-block;
        width: 100%;
        height: 0;
        content: '';
      }
    }
    span {
      display: inline-block;

    }
    .menu, .wechat {
      width: 0.52rem;
      height: 0.52rem;
    }
    .logo {
      width: 2rem;
      height: 0.52rem;
    }
  }

  .menu_box {
    position: fixed;
    z-index: 20;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: transparent;
    transition: all 0.4s ease;
    .mask{
      @include fullScreen;
      position: absolute;
    }
    &.active {
      left: 0;
    }
    .contain {
      position: relative;
      z-index: 10;
      width: 6rem;
      height: 100%;
      background: #fff;
      padding: 0 0.44rem;
      box-sizing: border-box;
      .logo {
        padding: 0.24rem 0;
        width: 2rem;
        margin: 0 auto 0.44rem;
      }
    }
  }

  .nav_links {
    li {
      position: relative;
      padding-left: 0.6rem;
      line-height: 0.35rem;
      margin-bottom: 0.5rem;
      &.active, &.router-link-exact-active {
        color:$themeColor;
        &:after {
          position: absolute;
          left: 0;
          top: 0;
          display: block;
          content: '';
          width: 0.1rem;
          height: 100%;
          background: $themeColor;

        }
      }
    }
  }

  .zixun {
    position: absolute;
    bottom: 0.6rem;
    left: 1rem;
    line-height: 0.4rem;
    .z_title {
      margin-bottom: 0.6rem;
    }
    .life {
      color: #bfbfbf;
    }
  }
</style>
