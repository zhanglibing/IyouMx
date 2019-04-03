<template>
  <div id="partners">
    <div class="banner"><img src="./banner.jpg" alt=""></div>
    <div class="page_title">
      <h1 class="title">合作伙伴</h1>
      <h2 class="eng_title">IYOU.MX合作伙伴</h2>
      <p class="eng">
        ONE-STOP SERVICE ENTERPRISE <br>
        LIFE CYCLE
      </p>
    </div>
    <ul class="lists clear">
      <li v-for="(item,index) in list">
         <div class="img_box">
            <img :src="`./static/images/part/${index+1}.jpg`" alt="">
          </div>
        <div class="con">
           <h2>{{item.title}}<br>有限公司</h2>
           <p class="time">{{item.time}}</p>
        </div>
      </li>
    </ul>
    <div class="join">
      <div class="btn1">期待您的加入<b></b></div>
      <p>
        ONE-STOP SERVICE ENTERPRISE <br>
        LIFE CYCLE
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'partners',
    data () {
      return {
          list:[
            {
                title:'上海优竺信息科技',
                time:'2016-08-08'
            },
            {
                title:'上海讯联数据服务',
                time:'2017-07-20'
            },
            {
                title:'上海霁朝健康管理咨询',
                time:'2017-03-21'
            }
          ]
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../../common/css/mixins";
  .banner{
    width:100%;
    margin-bottom:70px;
    img{
      width:100%;
      vertical-align: top;
    }
  }

  .page_title{
    width:930px;
    margin:0 auto 60px;
    .title{
      margin-bottom:30px;
      font-size: 32px;
    }
    .eng_title{
      margin-bottom:14px;
    }
  }

  .lists {
    width:930px;
    margin:0 auto;
    li {
      position: relative;
      float:left;
      height: 210px;
      width: 440px;
      color: #fff;
      box-sizing: border-box;
      margin-bottom:46px;
      &:nth-child(2n-1){
        margin-right:46px;
      }
      .img_box{
        position: absolute;
        top:0;
        left:0;
        img{
          width:100%;
          height:100%;
        }
      }
      .con{
        position: relative;
        z-index: 2;
        height:100%;
        box-sizing: border-box;
        padding: 34px;
      }
      h2 {
        font-size: 24px;
        margin-bottom: 50px;
        line-height:40px;
      }
      .time {
        text-align: right;
      }
    }
  }

  .join {
    padding: 80px 0;
    text-align: center;
    .btn1 {
      position: relative;
      padding-left:7px;
      width:140px;
      line-height: 40px;
      border-radius: 20px;
      margin: 0 auto 20px;
      background: $themeColor;
      color:#fff;
      $width:140px;
      &:after, &:before {
        position: absolute;
        top: 20px;
        content: '';
        display: block;
        width: $width;
        height: 1px;;
        background: $themeColor;
        right: -($width + 50px);
      }
      &:before {
        left: -($width + 50px);
      }
      b{
        display: inline-block;
        width:0;
        height:0;
        margin-left:5px;
        border-right:7px solid transparent;
        border-top:5px solid transparent;
        border-bottom:5px solid transparent;
        border-left:7px solid #fff;
      }
    }
    p {
      color: #b5b5b5;
    }
  }
</style>
