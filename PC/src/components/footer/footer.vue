<template>
  <div class="footer">
    <div class="content">
      <img src="./logo.png" alt="" class="logo">
      <p>ONE-STOP SERVICE ENTERPRISE LIFE CYCLE</p>
      <div class="bg"><span class="type">SERVICE</span><span class="time">8:00-22:00</span></div>
      <p>TEL: +13636661623</p>
      <div class="line"></div>
      <p>+ INFORMATION TECHNOLOGY STUDIO</p>
      <p>苏ICP备17070267号</p>
    </div>
    <div class="backTop"></div>
  </div>
</template>
<script>
  export default{
    mounted(){
      //返回顶部
      $.fn.extend({
        //返回顶部
        backTop: function (oh) {
          var oh = oh || 300;
          var top;
          var t;
          var that = this;
          this.hide();
          $(window).scroll(function () {
            if ($(window).scrollTop() > oh) {
              that.show();
//              clearTimeout(t);
//              t = setTimeout(function () {
//                that.animate({bottom:16}, 200, function () {
//                  that.animate({bottom: 16}, 200);
//                });
//              }, 200);
            } else {
              that.hide();
            }
          });
          this.click(function () {
            $({someValue: $(window).scrollTop()}).animate(
              {someValue: 0}, {
                duration: 700,
                step: function () {
                  $(window).scrollTop(this.someValue);
                }
              })
          })
        }
      });
      $('.backTop').backTop();
    },
  }
</script>
<style lang="scss" scoped="">
  @import "../../common/css/mixins";
  .footer {
    padding: 60px;
    background: #000;
  }

  .content {
    line-height: 40px;
    color: #FFF;
    text-align: center;
    width: 600px;
    margin: 0 auto;
    .logo {
      margin-bottom: 36px;
    }
    .bg{
      background: $themeColor;
      width:240px;
      margin:0 auto;
      .time{
        font-size: 22px;
        margin-left:10px;
      }
    }
    .line{
      width:100%;
      height:1px;
      margin-bottom:50px;
      background: #fff;
    }
  }

  .backTop{
    position:fixed;
    bottom:60px;
    right:60px;
    z-index:100;
    width:50px;
    height:50px;
    cursor: pointer;
    background: url("./top.png") center no-repeat;
    background-size: 100%;
    &:hover{
      background: url("./top_hover.png") center no-repeat;
      background-size: 100%;
    }
  }
</style>
