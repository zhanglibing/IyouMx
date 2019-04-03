<template>
  <div class="applet">
    <common-title :index="3"></common-title>
    <div class="content">
      <h2 class="title">小程序开发-简述</h2>
      <div class="banner_img">
        <img src="./applet_bg.jpg" alt="">
      </div>
      <p class="text">
        微信小程序（wei xin xiao cheng xu），简称小程序，缩写XCX，英文名Mini Program，是一种不需要下载安装即可使用的应用，它实现了应用“触手可及”的梦想，用户扫一扫或搜一下即可打开应用。
      </p>
    </div>
    <div class="content">
      <h2 class="title">小程序的用户来源渠道</h2>
      <div class="flex_box">
        <div>
          <img src="./flex1.png" alt="">
          <p>个人</p>
        </div>
        <div>
          <img src="./flex2.png" alt="">
          <p>企业</p>
        </div>
        <div>
          <img src="./flex3.png" alt="">
          <p>政府</p>
        </div>
        <div>
          <img src="./flex4.png" alt="">
          <p>媒体</p>
        </div>
        <div>
          <img src="./flex5.png" alt="">
          <p>其他</p>
        </div>
      </div>

    </div>
    <div class="content">
      <h2 class="title">小程序的用户来源渠道</h2>
      <p class="text">
        好友分享 <br>
        扫码使用 <br>
        附近查询 <br>
        微信搜索 <br>
        公众号菜单 <br>
      </p>
    </div>
    <div class="list_box">
      <h2>适用行业</h2>
      <ul class="clear">
        <li>企业官网</li>
        <li>婚纱摄影</li>
        <li>汽车</li>
        <li>教育</li>
        <li>房产</li>
        <li>运动</li>
        <li>金融</li>
        <li>珠宝</li>
        <li>家装</li>
        <li>医疗美容</li>
        <li>资讯</li>
        <li>生活服务</li>
        <li>商场</li>
        <li>婚庆</li>
        <li>商务饭店</li>
        <li>酒店宾馆</li>
        <li>KTV</li>
        <li>旅游</li>
        <li>保险</li>
        <li>纹身</li>
        <li>美容</li>
        <li>美甲</li>
        <li>理发</li>
        <li>洗浴</li>
        <li>学校</li>
        <li>物业</li>
        <li>更多</li>
      </ul>
    </div>
    <consulting-model></consulting-model>
  </div>
</template>

<script>
  export default{
    name: 'applet'
  }
</script>

<style lang="scss" scoped>
  @import "../../common/css/mixins";

  .applet {
    margin-top: $mainTop;
    padding: 0 0.44rem;
  }

  .content {
    margin-bottom: 0.8rem;
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
    .flex_box {
      width: 6rem;
      display: flex;
      margin: 0 auto;
      flex-direction: row;
      & > div {
        text-align: center;
        flex: 1;
        img {
          width: 0.65rem;
        }
      }
    }
  }

  .list_box {
    ul {
      padding: 0.4rem 0 0;
      display: flex;
      flex-wrap: wrap ;
      li {
        width: 30%;
        height: 1.53rem;
        color: #ffffff;
        line-height: 1.53rem;
        text-align: center;
        margin-right: 4.5%;
        margin-bottom: 0.3rem;
        &:nth-child(3n) {
          margin-right: 0;
        }
      }
      @for $i from 1 through 27{
        li:nth-child(#{$i}) {
          background: url("./list" + $i +".jpg");
          background-size: 100%;
        }
      }

    }
  }
</style>
