<template>
  <div class="index">
      <!--banner-->
      <el-carousel :interval="5000" arrow="always" :height="bannerWidth">
          <el-carousel-item  v-for="(item,index) in items" :key="index">
            <div class="banner">
              <img :src="item.path" alt="">
              <router-link :to="`/business/${bannerPath[index]}`" tag="button" class="btn more">See More</router-link>
            </div>
          </el-carousel-item>
        </el-carousel>
      <div class="slogan"><img src="./11.jpg" alt=""></div>
      <!--业务介绍-->
      <div class="session1">
        <index-title :showIndex="0"></index-title>
        <ul class="list_box clear">
          <li>
            <img src="./session1/1.jpg" alt="">
            <div class="mask">
              <div class="con">
                <img src="./session1/t1.png" alt="">
                <p>网站建设</p>
                <router-link to="/business/website" tag="button" class="btn">See More</router-link>
              </div>
            </div>
          </li>
          <li>
            <img src="./session1/2.jpg" alt="">
            <div class="mask">
              <div class="con">
                <img src="./session1/t2.png" alt="">
                <p>移动支付</p>
                <router-link to="/business/pay" tag="button" class="btn">See More</router-link>
              </div>
            </div>
          </li>
          <li>
            <img src="./session1/3.jpg" alt="">
            <div class="mask">
              <div class="con">
                <img src="./session1/t3.png" alt="">
                <p>小程序开发</p>
                <router-link to="/business/smallProgram" tag="button" class="btn">See More</router-link>
              </div>
            </div>
          </li>
          <li>
            <img src="./session1/4.jpg" alt="">
            <div class="mask">
              <div class="con">
                <img src="./session1/t4.png" alt="">
                <p>技术支持</p>
                <router-link to="/business/technical" tag="button" class="btn">See More</router-link>
              </div>
            </div>
          </li>
          <li>
            <img src="./session1/5.jpg" alt="">
            <div class="mask">
              <div class="con">
                <img src="./session1/t5.png" alt="">
                <p>移动端开发</p>
                <router-link to="/business/mobileDev" tag="button" class="btn">See More</router-link>
              </div>
            </div>
          </li>
          <li>
            <img src="./session1/6.jpg" alt="">
            <div class="mask">
              <div class="con">
                <img src="./session1/t6.png" alt="">
                <p>平面设计</p>
                <router-link to="/business/planeDesign" tag="button" class="btn">See More</router-link>
              </div>
            </div>
          </li>
        </ul>
        <router-link to="/business/website" tag="button" class="btn more">See More</router-link>
      </div>
      <div class="direction"><img src="./direction.png" alt=""></div>
      <div class="session2">
        <index-title :showIndex="1"></index-title>
        <ul class="list_box clear">
          <li v-for="(item,index) in lists" :key="index">

            <!--<img v-lazy="`/static/images/session2/${index+1}.png`" alt="">-->
            <img :src="`./static/images/session2/${index+1}.png`" alt="">
            <div class="mask">
               <div class="con">
                 <h2 class="title">{{item.name}}</h2>
                 <router-link :to="`/business/${item.path}`" tag="button" class="btn more">See More</router-link>
               </div>
            </div>
          </li>
        </ul>
        <router-link to="/business/website" tag="button" class="btn more">See More</router-link>
      </div>
      <div class="session3">
        <index-title :showIndex="2"></index-title>
        <div class="con_box">
          <img src="./session3bg.jpg" alt="">
          <div class="con">
              <div>时间</div>
              <div class="line"></div>
              <div>效率</div>
              <div class="line"></div>
              <div>质量</div>
              <div class="line"></div>
              <div>服务</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import indexTitle from '@/indexTitle/indexTitle'
  import ban1 from './banner1.jpg'
  import ban2 from './banner2.jpg'
  import ban3 from './banner3.jpg'
  export default{
     data(){
         return{
             bannerPath:["website","technical","mobileDev"],
             items:[{path:ban1},{path:ban2},{path:ban3}],
             bannerWidth:'600px',
             lists:[
               {name:'柏名城',path:'website/details/1'},
               {name:'酷跑',path:'mobileDev/details/7'},
               {name:'食社',path:'mobileDev/details/8'},
               {name:'萌牙客',path:'website/details/5'},
               {name:'香水类网站开发',path:'website/details/2'},
               {name:'霁朝咨询',path:'website/details/3'},
               {name:'设计类网站',path:'website/details/6'},
               {name:'亚昆供应链',path:'website/details/4'},
             ]
         }
     },
     mounted(){
         setTimeout(()=>{
           this.init();
         },20)

         window.addEventListener('resize', () => {
           this.init();
         })
     },
     methods:{
        init(){
            let W = $(document).width();
            this.bannerWidth=W*670/1920+'px';
        }
     },
    components:{
      indexTitle
    }
  }
</script>
<style lang="scss" scoped="">
  @import "../../common/css/mixins";
  .el-carousel__item .banner{
    width:100%;
    height:auto;
    position: relative;
    img{
      vertical-align: top;
      width:100%;
    }
    button{
      position: absolute;
      bottom:13%;
      left:50%;
      margin-left:-56px;
    }
  }
  .el-carousel__indicators{
    bottom:40px;
  }
  .slogan{
    width:1058px;
    margin:50px auto;
  }

  .session1{
    .list_box{
      li{
        position: relative;
        float:left;
        width:percentage(1/6);
        img{
          width:100%;
          vertical-align: top;
        }
        .mask{
          box-sizing: border-box;
          position: absolute;
          top:0;
          left:0;
          width:100%;
          height:100%;
          text-align: center;
          color:#fff;
          background: rgba(0,0,0,0.6);
          opacity: 0;
          transition: 0.5s ease;
          .con{
            @include middle;
          }
          img{
            width:auto;
            margin-bottom:50px;
          }
          p{
            font-size: 20px;
            margin-bottom:50px;
          }
        }
        &:hover{
          .mask{
            opacity: 1;
          }
        }
      }
    }
  }
  .direction{
    width:100%;
    margin-bottom:40px;
    img{
      width:100%;
      vertical-align: top;
    }
  }
  .more{
    display: block;
    margin:50px auto;
  }
  .session2{
     .list_box{
       width:100%;
       height:auto;
       li{
         float:left;
         width:25%;
         height:calc(25vw);
         min-height: 300px;
         position: relative;
         img{
           @include middle;
           max-width: 100%;
           max-height: 100%;
         }
         .mask{
           opacity: 0;
           position: absolute;
           top:0;
           left:0;
           width:100%;
           height:100%;
           background: rgba(0,0,0,0.5);
           transition: opacity 0.5s ease;
           .con{
             text-align: center;
             color:#fff;
             @include middle;
             .title{
               font-size: 20px;
               font-weight: 400;
             }
           }
         }
         &:hover{
           .mask{
             opacity: 1;
           }
         }
       }
     }
  }

  .session3{
     $color:#eaeaea;
     .con_box{
       width:100%;
       position: relative;
       color:$color;
       height:auto;
       img{
         width:100%;
         height:auto;
         vertical-align: top;
       }
       .con{
         @include center(1200px,138px);
         text-align: justify;
         &:after{
           content:'';
           display: inline-block;
           width:100%;
           height:0;
         }
         &>div{
            display: inline-block;
            text-align: center;
            @include circle(138px,transparent);
            border:1px solid $color;
            line-height: 138px;
            font-size: 30px;
           &.line{
             position: relative;
             width:170px;
             height:1px;
             border:none;
             background: $color;
             &:after,&:before{
               content:'';
               display: inline-block;
               @include circle(10px,$color);
               position: absolute;
               top:-5px;
             }
             &:before{
               left:-10px;
             }
             &:after{
               right:-10px;
             }
           }
         }
       }
     }
  }
</style>
