<template>
  <div class="planeDesign">
    <common-title :index="2"></common-title>
    <div class="content">
      <h2 class="title">移动支付-简述</h2>
      <div class="banner_img">
        <img src="./mobilePay_bg.jpg" alt="">
      </div>
      <p class="text">
        移动支付也称为手机支付，就是允许用户使用其移动终端（通常是手机）对所消费的商品或服务进行账务支付的一种服务方式。单位或个人通过移动设备、互联网或者近距离传感直接或间接向银行金融机构发送支付指令产生货币支付与资金转移行为，从而实现移动支付功能。移动支付将终端设备、互联网、应用提供商以及金融机构相融合，为用户提供货币支付、缴费等金融业务。
      </p>
    </div>
    <div class="type_list">
      <h2>内容介绍</h2>
      <p>
        1、购买请求 <br>
        2、收费请求<br>
        3、认证请求<br>
        4、认证<br>
        5、授权请求<br>
        6、授权<br>
        7、收费完成<br>
        8、支付完成<br>
        9、支付商品<br>
      </p>
    </div>
    <div class="type_list">
      <h2>面向对象</h2>
      <p>
        需要每日对账的企业 <br>
        有公共账户的商家<br>
        连锁店（吃、喝、住、行）<br>
        医院、社区卫生院<br>
        牙科诊所<br>
        金融机构<br>
        食堂<br>
        商超<br>
        客流量较大的个体工商户<br>
      </p>
    </div>

    <!--优势-->
    <div class="ascendancy">
      <h2>我们的优势</h2>
      <ul class="list">
        <li>
          <h3>1.提供多方案收银解决方案</h3>
          <div class="flex_box">
            <div>
              <img src="./1.jpg" alt="">
              <p>智能pos机</p>
            </div>
            <div>
              <img src="./2.jpg" alt="">
              <p>扫码枪</p>
            </div>
            <div>
              <img src="./3.jpg" alt="">
              <p>支付盒子</p>
            </div>
            <div>
              <img src="./4.png" alt="">
              <p>二维码</p>
            </div>
          </div>
        </li>
        <li>
          <h3>2.支持一码双扫</h3>
          <div class="img_box"><img src="./list_bg2.png" alt=""></div>
        </li>
        <li>
          <h3>3.24小时客服，解决您的一切问题</h3>
          <div class="img_box"><img src="./list_bg3.jpg" alt=""></div>
        </li>
        <li>
          <h3>4.赠送完美的收银软件和财务对账软件</h3>
          <div class="img_box"><img src="./list_bg4.jpg" alt=""></div>
        </li>
        <li>
          <h3>5.超低费率</h3>
          <div class="img_box"><img src="./list_bg5.jpg" alt=""></div>
        </li>
        <li>
          <h3>6.支持花呗，信用卡，支付宝，微信，银联等多种支付方式</h3>
          <div class="img_box"><img src="./list_bg6.jpg" alt=""></div>
        </li>
        <li>
          <h3>7.免费技术培训</h3>
          <div class="img_box"><img src="./list_bg7.jpg" alt=""></div>
        </li>
      </ul>
    </div>
    <consulting-model></consulting-model>
  </div>
</template>

<script>
  export default{
    name: 'planeDesign',
  }
</script>

<style lang="scss" scoped>
  @import "../../common/css/mixins";

  .planeDesign {
    margin-top: $mainTop;
    padding: 0 0.44rem;
  }

  .content {
    .title {
      margin-bottom: 0.4rem;
    }
    .banner_img {
      margin-bottom: 0.4rem;
      img {
        width: 100%;
      }
    }
    .text {
      font-size: 12px;
      line-height: 0.5rem;
      margin-bottom: 0.6rem;
    }
  }

  .type_list {
    margin-bottom: 0.5rem;
    h2 {
      margin-bottom: 0.5rem;
    }
    p {
      line-height: 0.5rem;
    }
  }

  .case_box {
    h2 {
      margin-bottom: 0.4rem;
    }
    ul {
      li {
        float: left;
        width: 3.15rem;
        height: 1.92rem;
        margin-bottom: 0.3rem;
        img {
          width: 100%;
        }
        &:nth-child(2n-1) {
          margin-right: 0.3rem;
        }
      }
    }
  }

  .ascendancy {
    h2 {
      margin-bottom: 0.66rem;
    }
    .list {
      li {
        margin-bottom: 0.6rem;
        h3 {
          margin-bottom: 0.4rem;
          font-size: 0.24rem;
        }
        img {
          width: 100%;
        }

        &:nth-child(6) {
          img {
            display: block;
            margin: 0 auto;
            width: 5.25rem;
          }
        }
      }
    }
    .flex_box {
      width: 7.02rem;
      margin-left: -0.2rem;
      display: flex;
      flex-direction: row;
      & > div {
        flex: 1;
        text-align: center;
        img {
          width: 1.54rem;
        }
      }
    }
  }



</style>
