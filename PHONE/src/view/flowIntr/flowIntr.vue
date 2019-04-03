<template>
  <div id="flowIntr">
    <ul class="clear">
      <li class="bg1"><img src="static/images/flow/bg1.jpg" alt=""></li>
      <li class="item">
        <p class="num">Item No.</p>
        <h2 class="number">01</h2>
        <p class="title">沟通评估</p>
        <p class="eng">
          ONE-STOP SERVICE ENTERPRISE<br>
          LIFE CYCLE
        </p>

      </li>
      <li class="item">
        <p class="num">Item No.</p>
        <h2 class="number">02</h2>
        <p class="title">商务沟通</p>
        <p class="eng">
          ONE-STOP SERVICE ENTERPRISE<br>
          LIFE CYCLE
        </p>
      </li>
      <li class="bg1"><img src="static/images/flow/bg2.jpg" alt=""></li>
      <li class="bg1"><img src="static/images/flow/bg3.jpg" alt=""></li>
      <li class="item">
        <p class="num">Item No.</p>
        <h2 class="number">03</h2>
        <p class="title">立项</p>
        <p class="eng">
          ONE-STOP SERVICE ENTERPRISE<br>
          LIFE CYCLE
        </p>

      </li>
      <li class="item">
        <p class="num">Item No.</p>
        <h2 class="number">04</h2>
        <p class="title">原型制作</p>
        <p class="eng">
          ONE-STOP SERVICE ENTERPRISE<br>
          LIFE CYCLE
        </p>
      </li>
      <li><img src="static/images/flow/bg4.jpg" alt=""></li>
      <li><img src="static/images/flow/bg5.jpg" alt=""></li>
      <li class="item">
        <p class="num">Item No.</p>
        <h2 class="number">05</h2>
        <p class="title">确认</p>
        <p class="eng">
          ONE-STOP SERVICE ENTERPRISE<br>
          LIFE CYCLE
        </p>

      </li>
      <li class="item">
        <p class="num">Item No.</p>
        <h2 class="number">06</h2>
        <p class="title">UI设计</p>
        <p class="eng">
          ONE-STOP SERVICE ENTERPRISE<br>
          LIFE CYCLE
        </p>
      </li>
      <li><img src="static/images/flow/bg6.jpg" alt=""></li>
      <li><img src="static/images/flow/bg7.jpg" alt=""></li>
      <li class="item">
        <p class="num">Item No.</p>
        <h2 class="number">07</h2>
        <p class="title">程序开发</p>
        <p class="eng">
          ONE-STOP SERVICE ENTERPRISE<br>
          LIFE CYCLE
        </p>

      </li>
      <li class="item">
        <p class="num">Item No.</p>
        <h2 class="number">08</h2>
        <p class="title">测试</p>
        <p class="eng">
          ONE-STOP SERVICE ENTERPRISE<br>
          LIFE CYCLE
        </p>
      </li>
      <li><img src="static/images/flow/bg8.jpg" alt=""></li>
      <li><img src="static/images/flow/bg9.jpg" alt=""></li>
      <li class="item">
        <p class="num">Item No.</p>
        <h2 class="number">09</h2>
        <p class="title">验收上线</p>
        <p class="eng">
          ONE-STOP SERVICE ENTERPRISE<br>
          LIFE CYCLE
        </p>

      </li>
      <li class="item">
        <p class="num">Item No.</p>
        <h2 class="number">10</h2>
        <p class="title">后期维护</p>
        <p class="eng">
          ONE-STOP SERVICE ENTERPRISE<br>
          LIFE CYCLE
        </p>
      </li>
      <li><img src="static/images/flow/bg10.jpg" alt=""></li>

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
    padding: 0.44rem 0 0.6rem;

    li {
      width: 50%;
      height: 3.5rem;
      float: left;
      img {
        width: 100%;
      }
    }
    .item {
      padding: 0.4rem 0;
      box-sizing: border-box;
      background: #fff;
      .number {
        font-size: 1rem;
      }
      .eng {
        font-size: 9px;
        color: #949494;
      }
      .title {
        position: relative;
        font-size: 0.3rem;
        line-height: 0.3rem;
        padding-bottom: 0.6rem;
        &:after {
          position: absolute;
          bottom: 0.3rem;
          content: '';
          display: block;
          width: 0.4rem;
          height: 3px;
          background: #949494;
        }
      }
      &:nth-child(2n) {
        padding-left: 0.6rem;
        text-align: left;
      }
      &:nth-child(2n-1) {
        padding-right: 0.6rem;
        text-align: right;
        .title:after {
          right: 0;
        }

      }
    }
  }

  .end {
    position: relative;
    width: 1.3rem;
    height: 0.4rem;
    font-size: 0.3rem;
    margin: 0.8rem auto;
    text-align: center;
    $width: 2.4rem;
    &:after, &:before {
      position: absolute;
      top: 0.2rem;
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
