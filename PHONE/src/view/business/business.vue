<template>
  <div>
    <ul id="business">
      <li>
        <h2 class="title">开发服务</h2>
        <p class="title_eng">Development services</p>
        <p class="list">
          移动支付 <br>
          网站定制开发<br>
          线上支付接口<br>
          二维码支付<br>
          短信服务<br>
          技术支持
        </p>
        <button @click="goContact">更多</button>
      </li>
      <li>
        <h2 class="title">界面设计</h2>
        <p class="title_eng">Interface design</p>
        <p class="list">
          双11电商首页设计<br>
          个人站设计<br>
          企业网站设计<br>
          app界面优化设计<br>
          电商海报<br>
          微信，小程序设计<br>
        </p>
        <button @click="goContact">更多</button>
      </li>
      <li>
        <h2 class="title">平面设计</h2>
        <p class="title_eng">The plane design</p>
        <p class="list">
          LOGO设计<br>
          VI手册设计<br>
          名片设计<br>
          宣传折页设计<br>
          商用招贴海报<br>
          书籍装帧设计<br>
        </p>
        <button @click="goContact">更多</button>
      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: 'business',
    data () {
      return {}
    },
    methods:{
      goContact(){
        this.$router.push('/contact')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../../common/css/mixins";

  #business {
    padding: 0.44rem;
    color: #fff;
  }

  li {
    position: relative;
    width: 100%;
    height: 6.5rem;
    margin-bottom: 0.44rem;
    box-sizing: border-box;
    padding: 0.7rem 0.5rem;
    border-radius: 12px;
    &:nth-child(1) {
      background: url("./bg1.png") center no-repeat;
      background-size: 100%;
    }
    &:nth-child(2) {
      background: url("./bg2.png") center no-repeat;
      background-size: 100%;
    }
    &:nth-child(3) {
      background: url("./bg3.png") center no-repeat;
      background-size: 100%;
    }
    .title {
      font-size: 0.7rem;
    }
    .title_eng {
      margin-bottom: 0.6rem;
    }
    .list {
      line-height: 0.6rem;
    }
    button {
      width: 1.34rem;
      height: 0.54rem;
      background: #ffffff;
      position: absolute;
      bottom: 0.7rem;
      right: 0.5rem;
      color: $themeColor;
      border-radius: 0.27rem;
    }
  }
</style>
