<template>
  <div class="planeDesign">
    <common-title :index="2"></common-title>
    <div class="content">
      <h3 class="title">移动支付-简述</h3>
      <div class="banner_img">
        <img src="/static/images/pay/mobilePay_bg.jpg" alt="">
      </div>
      <p class="text">
        移动支付也称为手机支付，就是允许用户使用其移动终端（通常是手机）对所消费的商品或服务进行账务支付的一种服务方式。单位或个人通过移动设备、互联网或者近距离传感直接或间接向银行金融机构发送支付指令产生货币支付与资金转移行为，从而实现移动支付功能。移动支付将终端设备、互联网、应用提供商以及金融机构相融合，为用户提供货币支付、缴费等金融业务。
      </p>
    </div>
    <div class="type_list">
      <h3 class="title">内容介绍</h3>
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
      <h3 class="title">面向对象</h3>
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
      <h3 class="title">我们的优势</h3>
      <ul class="list">
        <li>
          <p class="small_titl">1.提供多方案收银解决方案</p>
          <div class="flex_box">
            <div>
              <img src="/static/images/pay/1.jpg" alt="">
              <p>智能pos机</p>
            </div>
            <div>
              <img src="/static/images/pay/2.jpg" alt="">
              <p>扫码枪</p>
            </div>
            <div>
              <img src="/static/images/pay/3.jpg" alt="">
              <p>支付盒子</p>
            </div>
            <div>
              <img src="/static/images/pay/4.png" alt="">
              <p>二维码</p>
            </div>
          </div>
        </li>
        <li>
          <p class="small_titl">2.支持一码双扫</p>
          <div class="img_box"><img src="/static/images/pay/list_bg2.png" alt=""></div>
        </li>
        <li>
          <p class="small_titl">3.24小时客服，解决您的一切问题</p>
          <div class="img_box"><img src="/static/images/pay/list_bg3.jpg" alt=""></div>
        </li>
        <li>
          <p class="small_titl">4.赠送完美的收银软件和财务对账软件</p>
          <div class="img_box"><img src="/static/images/pay/list_bg4.jpg" alt=""></div>
        </li>
        <li>
          <p class="small_titl">5.超低费率</p>
          <div class="img_box"><img src="/static/images/pay/list_bg5.jpg" alt=""></div>
        </li>
        <li>
          <p class="small_titl">6.支持花呗，信用卡，支付宝，微信，银联等多种支付方式</p>
          <div class="img_box"><img src="/static/images/pay/list_bg6.jpg" alt=""></div>
        </li>
        <li>
          <p class="small_titl">7.免费技术培训</p>
          <div class="img_box"><img src="/static/images/pay/list_bg7.jpg" alt=""></div>
        </li>
      </ul>
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

  .content {
    .title {
      margin-bottom:40px;
      font-weight: 16px;
    }
    .banner_img {
      margin-bottom: 30px;
      img {
        width: 100%;
      }
    }
    .text {
      font-size: 12px;
      line-height:24px;
      margin-bottom: 70px;
    }
  }

  .type_list {
    margin-bottom: 60px;
    .title {
      margin-bottom: 30px;
    }
    p {
      line-height: 20px;
    }
  }

  .case_box {
    .title {
      margin-bottom: 30px;
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
    .title {
      margin-bottom: 50px;
    }
    .list {
      li {
        margin-bottom: 30px;
        .small_titl {
          margin-bottom: 20px;
          font-size:14px;
        }
        img {
          width: 100%;
        }

        &:nth-child(6) {
          img {
            display: block;
            margin: 0 auto;
            width: 525px;
          }
        }
      }
    }
    .flex_box {
      display: flex;
      flex-direction: row;
      & > div {
        flex: 1;
        text-align: center;
        img {
          width: 160px;
        }
      }
    }
  }


</style>
