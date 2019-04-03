<template>
   <div class="planeDesign">
     <common-title :index="6"></common-title>
     <div class="content">
       <h2 class="title">简述</h2>
       <div class="banner_img">
         <img src="./banner_pingmian.jpg" alt="">
       </div>
       <p class="text">平面设计（graphic design），也称为视觉传达设计，是以“视觉”作为沟通和表现的方式，透过多种方式来创造和结合符号、图片和文字，借此作出用来传达想法或讯息的视觉表现。平面设计师可能会利用字体排印、视觉艺术、版面（page layout）、电脑软件等方面的专业技巧，来达成创作计划的目的。平面设计通常可指制作（设计）时的过程，以及最后完成的作品。<br>
         平面设计的常见用途包括标识（商标和品牌）、出版物（杂志，报纸和书籍）、平面广告，海报，广告牌，网站图形元素、标志和产品包装。例如，产品包装可能包括的商标或其他的艺术作品、编排文本和纯粹的设计元素，如风格统一的图像，形状，大小和颜色。组合是平面设计的最重要的特性之一，尤其是当产品使用预先存在的材料或多种元素融合。
       </p>
     </div>
     <div class="type_list">
        <h2>类型介绍</h2>
         <p>
           1.标志设计 <br>
           2.吉祥物设计<br>
           3.艺术字设计<br>
           4.展板设计 <br>
           5.指示牌设计<br>
           6.证卡设计<br>
           7.名片设计<br>
           8.宣传折页设计<br>
           9.展架设计<br>
           10.店面门头设计<br>
           11.画册设计<br>
           12.商业海报设计<br>
           13.企业形象识别系统(VI)设计<br>
           14.广告设计<br>
           15.包装设计<br>
           16.综合广告设计<br>
         </p>
     </div>
     <div class="case_box">
       <h2>案例欣赏</h2>
       <ul class="clear">
         <li><img src="./1.jpg" alt=""></li>
         <li><img src="./2.jpg" alt=""></li>
         <li><img src="./3.jpg" alt=""></li>
         <li><img src="./4.jpg" alt=""></li>
         <li><img src="./5.jpg" alt=""></li>
         <li><img src="./6.jpg" alt=""></li>
       </ul>
     </div>
     <consulting-model></consulting-model>
   </div>
</template>

<script>
  export default{
     name:'planeDesign',
  }
</script>

<style lang="scss" scoped>
@import "../../common/css/mixins";
.planeDesign{
  margin-top:$mainTop;
  padding:0 0.44rem;
}

  .content{
    .title{
      margin-bottom:0.4rem;
    }
    .banner_img{
      margin-bottom:0.4rem;
      img{width:100%;}
    }
    .text{
      font-size: 12px;
      line-height: 0.5rem;
      margin-bottom:0.6rem;
    }
  }
  .type_list{
    margin-bottom:0.5rem;
    h2{
      margin-bottom:0.5rem;
    }
    p{
      line-height: 0.5rem;
    }
  }

  .case_box{
    h2{
      margin-bottom:0.4rem;
    }
    ul{
      li{
        float: left;
        width:3.15rem;
        height:1.92rem;
        margin-bottom:0.3rem;
        img{
          width:100%;
        }
        &:nth-child(2n-1){
          margin-right:0.3rem;
        }
      }
    }
  }
</style>
