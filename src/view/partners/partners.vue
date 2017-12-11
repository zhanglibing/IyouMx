<template>
  <div id="partners">
    <div class="title_box">
      <h2>合作伙伴</h2>
      <p>IYOU.MX合作伙伴</p>
      <p class="eng">
        ONE-STOP SERVICE ENTERPRISE <br>
        LIFE CYCLE
      </p>
    </div>
    <ul class="lists">
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
      <div class="btn">期待您的加入</div>
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

  #partners {
    padding: 0.44rem;
  }

  .title_box {
    margin-bottom: 0.6rem;
    h2 {
      font-size: 0.5rem;
      margin-bottom: 0.4rem;
    }
    .eng {
      padding-top: 0.1rem;
      color: #b5b5b5;
    }
  }

  .lists {
    li {
      position: relative;
      height: 3.2rem;
      width: 100%;
      color: #fff;
      box-sizing: border-box;
      margin-bottom: 0.4rem;
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
        padding: 0.5rem 0.44rem;
      }
      h2 {
        font-size: 0.5rem;
        margin-bottom: 0.5rem;
        line-height: 0.7rem;
      }
      .time {
        text-align: right;
      }
    }
  }

  .join {
    padding: 0.8rem 0 0.6rem;
    text-align: center;
    .btn {
      position: relative;
      width: 2.2rem;
      height: 0.54rem;
      border-radius: 0.26rem;
      background: $themeColor;
      color: #fff;
      line-height: 0.6rem;
      margin: 0 auto 0.1rem;
      $width: 1.4rem;
      &:after, &:before {
        position: absolute;
        top: 0.25rem;
        content: '';
        display: block;
        width: $width;
        height: 1px;;
        background: $themeColor;
        right: -($width + 0.45rem);
      }
      &:before {
        left: -($width + 0.45rem);
      }
    }
    p {
      color: #b5b5b5;
    }
  }
</style>
