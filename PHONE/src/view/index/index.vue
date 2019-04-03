<template>
  <div id="index">
      <div class="slider-wrapper">
      <div class="slider-content">
        <slider ref="slider">
          <a v-for="item in 3" :key="item"><img class="needsclick" :src="`./static/images/index/${item}.jpg`"><button @click="goContact">MORE +</button></a>
          <!--<a><img class="needsclick" src="static/images/index/2.jpg"><button @click="goContact">MORE +</button></a>-->
          <!--<a><img class="needsclick" src="static/images/index/3.jpg"><button @click="goContact">MORE +</button></a>-->
        </slider>
      </div>
    </div>
    <ul class="tab_box clear">
      <router-link to="/website" tag="li">
        <div class="icon"><img src="./web.png" alt=""></div>
        <p>网站建设</p>
      </router-link>
      <router-link tag="li" to="/mobilePay">
        <div class="icon"><img src="./pay.png" alt=""></div>
        <p>移动支付</p>
      </router-link>
      <router-link to="/applet" tag="li">
        <div class="icon"><img src="./xiaochengxu.png" alt=""></div>
        <p>小程序开发</p>
      </router-link>
      <router-link to="/technical" tag="li">
        <div class="icon"><img src="./jishu.png" alt=""></div>
        <p>技术支持</p>
      </router-link>
      <!--<li>-->
      <!--<div class="icon ww"><img src="./jiemian.png" alt=""></div>-->
      <!--<p>界面设计</p>-->
      <!--</li>-->
      <router-link to="/mobile" tag="li">
        <div class="icon"><img src="./yidong.png" alt=""></div>
        <p>移动端开发</p>
      </router-link>
      <!--<li>-->
      <!--<div class="icon"><img src="./taobao.png" alt=""></div>-->
      <!--<p>淘宝店铺设计</p>-->
      <!--</li>-->
      <router-link to="/planeDesign/1" tag="li">
        <div class="icon"><img src="./sheji.png" alt=""></div>
        <p>平面设计</p>
      </router-link>
    </ul>
      <!--推荐-->
    <div class="recommend">
      <h2 class="title"><span class="eng_blod">IYOU</span> 推荐</h2>
      <ul class="lists">
        <li class="item" @click="goDetails(index)" v-for="(item,index) in list">
          <div class="img_box">
            <img :src="`./static/images/index/${item.path}`" alt="">
          </div>
          <div class="con">
            <p class="item_title">{{item.title}}</p>
            <p class="time">{{item.time}}</p>
            <div class="but">了解</div>
          </div>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Slider from '@/slider'
  export default {
    name: 'index',
    data () {
      return {
        list: [
          {
            title: '柏名城',
            time: '2014/02/23',
            path:'baimingcheng.jpg'
          },
          {
            title: '酷跑',
            time: '2015/03/14',
            path:'paoku.jpg'
          },
          {
            title: '香水官网',
            time: '2015/05/07',
            path:'xiangshui.jpg'
          },
          {
            title: '萌牙客',
            time: '2016/04/07',
            path:'menyake.jpg'
          },
          {
            title: '食社',
            time: '2016/09/02',
            path:'shishe.jpg'
          },
          {
            title: '霁朝咨询',
            time: '2016/12/06',
            path:'jizhao.jpg'
          },
          {
            title: '设计类网站',
            time: '2017/02/10',
            path:'sheji.jpg'
          },
          {
            title: '亚昆供应链',
            time: '2017/08/10',
            path:'yakong.jpg'
          },

        ],
      }
    },
    methods: {
      goDetails(index){
        this.$router.push({name: 'details', query: {pathIndex: index + 1}})
      },
      goContact(){
        this.$router.push('/contact')
      }
    },
    components:{
      Slider,
    }

  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../../common/css/mixins";

  .banner {
    img {
      width: 100%;
    }
  }
  .slider-wrapper{
    width:7.5rem;
    overflow: hidden;
    a{
      position: relative;
      button{
        width:1.36rem;
        height:0.54rem;
        border-radius: 0.27rem;
        background: $themeColor;
        position: absolute;
        bottom:0.44rem;
        left:0.44rem;
        color:#fff;
      }
    }
  }
  .tab_box {
    padding: 0.6rem 0.44rem 0.2rem;
    text-align: center;
    border-bottom: 1px solid #d2d2d2;
    li {
      width: 33.3%;
      float: left;
      margin-bottom: 0.7rem;
      box-sizing: border-box;
      &:nth-child(3n){
        padding-left:0.5rem;
      }
      &:nth-child(3n-2){
        padding-right:0.4rem;
      }
       p{
         color:#585858;
       }
    }
    .icon {
      margin-bottom: 0.2rem;
      font-size: 14px;
      min-height: 0.5rem;
      max-height: 0.5rem;
      line-height: 0.5rem;
      font-weight: bold;
      img {
        width: 0.5rem;
      }
      &.ww{
        img{
          margin-top:0.1rem;
          width:auto;
          height:0.31rem;
        }
      }
    }
  }

  .recommend {
    padding: 0.6rem 0.44rem;
    .title {
      font-size: 24px;
      margin-bottom: 0.2rem;
      font-weight: bold;
    }
    .lists {
      .item {
        position: relative;
        width: 100%;
        height: 8.4rem;
        margin-bottom: 0.5rem;
        box-sizing: border-box;
        color: #fff;
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
          padding: 1rem 0.5rem;
        }

        .item_title {
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }
        .but {
          position: absolute;
          bottom: 0.7rem;
          right: 0.4rem;
          width: 1.35rem;
          height: 0.56rem;
          border-radius: 0.28rem;
          background: #ffffff;
          color: $themeColor;
          text-align: center;
          line-height: 0.6rem;
        }
      }
    }
  }
</style>
