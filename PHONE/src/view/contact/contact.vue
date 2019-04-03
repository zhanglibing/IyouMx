<template>
  <div id="contact">
    <ul>
      <li>
        <div class="qrCode"><img src="./jack.png" alt=""></div>
        <p class="name">Jack</p>
        <p class="phone">13636661623</p>
        <div class="logo"><img src="./logo.png" alt=""></div>
      </li>
      <li>
        <div class="qrCode"><img src="./yongsheng.png" alt=""></div>
        <p class="name">Sleeve</p>
        <p class="phone">15383469010</p>
        <div class="logo"><img src="./logo.png" alt=""></div>
      </li>
      <li>
        <div class="qrCode"><img src="./libing.png" alt=""></div>
        <p class="name">Li Bing</p>
        <p class="phone">13620676550</p>
        <div class="logo"><img src="./logo.png" alt=""></div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'contact',
    data () {
      return {}
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../../common/css/mixins";

  #contact {
    margin-top:$mainTop;
    padding-bottom: 1.2rem;
  }

  li {
    border-top: 3.2rem solid #fff;
    background: $themeColor;
    color: #fff;
    text-align: center;
    margin-bottom:0.6rem;
    .qrCode {
      width: 3rem;
      height: 3rem;
      margin: -1.5rem auto 0.4rem;
      border: 1px solid $themeColor;
      padding: 0.1rem;
      img {
        width: 100%;
      }
    }
    .name {
      position: relative;
      width: 2.6rem;
      line-height: 0.5rem;
      text-align: center;
      font-size: 0.5rem;
      font-weight: bold;
      margin: 0 auto 0.5rem;
      //局部变量
      $width: 1.9rem;
      &:after, &:before {
        position: absolute;
        top: 0.25rem;
        content: '';
        display: block;
        width: $width;
        height: 1px;;
        background: #fff;
        right: -$width;
      }
      &:before {
        left: -$width
      }
    }
    .phone {
      margin-bottom: 0.2rem;
    }
    .logo {
      padding-bottom: 0.6rem;
      img {
        width: 1.5rem;
      }
    }
  }
</style>
