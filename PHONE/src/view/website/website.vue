<template>
  <div class="website">
    <common-title :index="1"></common-title>
    <div class="content">
      <h2 class="title">网站简述</h2>
      <p class="text">
        网站建设是指使用标识语言（markup language)，通过一系列设计、建模、和执行的过程将电子格式的信息通过互联网传输，最终以图形用户界面（GUI）的形式被用户所浏览。简单来说，网页设计的目的就是产生网站。简单的信息如文字，图片（GIF，JPEG，PNG）和表格，都可以通过使超文件标示语言、可扩展超文本标记语言等标示语言放置到网站页面上。而更复杂的信息如矢量图形、动画、视频、声频等多媒体档案则需要插件程序来运行，同样地它们亦需要标示语言移植在网站内。
      </p>
    </div>
    <div class="cover_bg">
      <img src="static/images/web/website_bg1.jpg" alt="">
    </div>
    <div class="content">
      <h2 class="title">内容介绍</h2>
      <p class="text">
        一、申请域名 <br>
        二、申请空间<br>
        三、定位网站<br>
        四、分析网站功能和需求（网站策划）<br>
        五、网站风格设计<br>
        六、网站代码制作<br>
        七、测试网站<br>
        八、FTP上传网站<br>
        九、完善资料<br>
        十、网站推广维护<br>
      </p>
    </div>
    <div class="cover_bg">
      <img src="static/images/web/website_bg2.jpg" alt="">
    </div>
    <div class="content">
      <h2 class="title">我们的优势</h2>
      <p class="text">
        IYOU·MX网站建设，致力于提供一站式网站建设服务，包括品牌及企业网站建设、网站制作、网站设计、网站营销策划、企业网站建设改版等。以精而专的态度和优质化的建站服务，成为值得信赖的网站建设品牌。拥有多元化的人才队伍，经验丰富的设计团队、精准策划人员和完善的服务顾问，保障优高水准网站建设。每个网站都进行独立策划设计，打造出个性鲜明的企业网站，助力品牌突破成长，是IYOU·MX永不停止的追求！
      </p>
    </div>

    <consulting-model></consulting-model>
  </div>
</template>

<script>
  export default{
    name:'website'
  }
</script>

<style lang="scss" scoped>
  @import "../../common/css/mixins";
  .website{
    margin-top:$mainTop;
    padding: 0 0.44rem;
  }

  .content{
    margin-bottom:0.8rem;
  .title{
    margin-bottom:0.4rem;
  }
  .text{
    font-size: 12px;
    line-height: 0.5rem;
    margin-bottom:0.6rem;
  }

  }

  .cover_bg{
  width:7.5rem;
  margin-left:-0.44rem;
  margin-bottom:1rem;
    img{
      width:100%;
    }
  }

</style>
