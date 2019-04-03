<template>
  <div class="business">
    <div class="nav_box">
       <ul class="nav_list">
           <router-link to="/business/website" tag="li">网站建设</router-link>
           <router-link to="/business/pay" tag="li">移动支付</router-link>
           <router-link to="/business/technical" tag="li">技术支持</router-link>
           <router-link to="/business/mobileDev" tag="li">移动端开发</router-link>
           <router-link to="/business/smallProgram" tag="li">小程序开发</router-link>
           <router-link to="/business/planeDesign" tag="li">平面设计</router-link>
       </ul>
    </div>
    <router-view class="views clear"></router-view>
  </div>
</template>
<script>
  export default{
     mounted(){
       setTimeout(()=>{
         $('.backTop').trigger('click');
       },10)
     }
  }
</script>
<style lang="scss" scoped="">
@import "../../common/css/mixins";
  .nav_box{
    width:100%;
    position: fixed;
    top:45px;
    left:0;
    z-index: 10;
    background: #fff;
    box-shadow: 0 1px 8px #aaa;
    .nav_list{
       width:620px;
       padding:20px 0;
       height:60px;
       margin:0 auto;
       @include justify;
       li{
         padding-top:40px;
         display: inline-block;
         cursor: pointer;
       }
      @for $i from 1 through 6{
         li:nth-child(#{$i}){
             background:url("./navImg/" + $i + ".png") top center no-repeat;
             &:hover,&.router-link-active{
               background:url("./navImg/" + $i + "_hover.png") top center no-repeat;
               color:$themeColor;
             }
         }
      }
     }
  }
  .views{
    width:1200px;
    padding-top:100px;
    margin:0 auto;
  }
</style>
