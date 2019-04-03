<template>
  <div id="flowIntr">
    <div class="banner">
      <img src="./banner.jpg" alt="">
    </div>
    <div class="page_title">
        <h1 class="title">业务介绍</h1>
        <h2 class="eng_title">IYOU.MX</h2>
        <p class="eng">
          ONE-STOP SERVICE ENTERPRISE<br>
          LIFE CYCLE
        </p>
    </div>
    <ul class="con clear">
      <li><img src="./bg1.jpg" alt=""></li>
      <li class="item">
        <p class="num">Item No.</p>
        <h2 class="number">01</h2>
        <p class="title">沟通评估</p>
        <p class="eng">
          Communication assessment
        </p>
      </li>
      <li class="item">
        <p class="num">Item No.</p>
        <h2 class="number">02</h2>
        <p class="title">商务沟通</p>
        <p class="eng">
          The business communication
        </p>
      </li>
      <li><img src="./bg2.jpg" alt=""></li>
      <li><img src="./bg3.jpg" alt=""></li>
      <li class="item">
        <p class="num">Item No.</p>
        <h2 class="number">03</h2>
        <p class="title">立项</p>
        <p class="eng">
          Project
        </p>
      </li>
      <li class="item">
        <p class="num">Item No.</p>
        <h2 class="number">04</h2>
        <p class="title">原型制作</p>
        <p class="eng">
          Prototyping
        </p>
      </li>
      <li><img src="./bg4.jpg" alt=""></li>
      <li><img src="./bg5.jpg" alt=""></li>
      <li class="item">
        <p class="num">Item No.</p>
        <h2 class="number">05</h2>
        <p class="title">确认</p>
        <p class="eng">
          Confirm
        </p>
      </li>
      <li class="item">
        <p class="num">Item No.</p>
        <h2 class="number">06</h2>
        <p class="title">UI设计</p>
        <p class="eng">
          UI design
        </p>
      </li>
      <li><img src="./bg6.jpg" alt=""></li>
      <li><img src="./bg7.jpg" alt=""></li>
      <li class="item">
        <p class="num">Item No.</p>
        <h2 class="number">07</h2>
        <p class="title">程序开发</p>
        <p class="eng">
          Program development
        </p>
      </li>
      <li class="item">
        <p class="num">Item No.</p>
        <h2 class="number">08</h2>
        <p class="title">测试</p>
        <p class="eng">
          Test
        </p>
      </li>
      <li><img src="./bg8.jpg" alt=""></li>
      <li><img src="./bg9.jpg" alt=""></li>
      <li class="item">
        <p class="num">Item No.</p>
        <h2 class="number">09</h2>
        <p class="title">验收上线</p>
        <p class="eng">
          Acceptance of online
        </p>

      </li>
      <li class="item">
        <p class="num">Item No.</p>
        <h2 class="number">10</h2>
        <p class="title">后期维护</p>
        <p class="eng">
          Later period maintenance
        </p>
      </li>
      <li><img src="./bg10.jpg" alt=""></li>

    </ul>
    <div class="end eng">END</div>
  </div>

</template>

<script>
  export default {
    name: 'flowIntr',
    data () {
      return {}
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../../common/css/mixins";

  #flowIntr {
   .banner{
     width:100%;
     margin-bottom:70px;
     img{
       width:100%;
       vertical-align: top;
     }
   }

    .page_title{
      width:1200px;
      margin:0 auto 60px;
      .title{
        margin-bottom:30px;
        font-size: 32px;
      }
      .eng_title{
        margin-bottom:14px;
      }
    }
    .con{
      width:1200px;
      margin:0 auto;
    }
    li {
      width: 300px;
      height:300px;
      float: left;
      img {
        width: 100%;
      }
    }
    .item {
      padding: 36px 0;
      box-sizing: border-box;
      background: #fff;
      .number {
        font-size: 80px;
      }
      .eng {
        font-size: 14px;
        color: #949494;
      }
      .title {
        position: relative;
        font-size: 24px;
        line-height: 30px;
        padding-bottom: 40px;
        &:after {
          position: absolute;
          bottom:20px;
          content: '';
          display: block;
          width: 36px;
          height: 2px;
          background: #949494;
        }
      }
      &:nth-child(2n) {
        padding-left: 50px;
        text-align: left;
      }
      &:nth-child(2n-1) {
        padding-right: 50px;
        text-align: right;
        .title:after {
          right: 0;
        }

      }
    }
  }

  .end {
    position: relative;
    width: 120px;
    height:40px;
    font-size: 30px;
    margin: 60px auto;
    text-align: center;
    $width: 240px;
    &:after, &:before {
      position: absolute;
      top: 20px;
      content: '';
      display: block;
      width: $width;
      height: 1px;;
      background: #949494;
      right: -$width;
    }
    &:before {
      left: -$width
    }
  }
</style>
