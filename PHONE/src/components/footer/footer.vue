<template>
  <div class="footer">
    <div class="content">
      <img src="./logo.png" alt="">
      <b class="line"></b>
      <p class="eng">
        ONE-STOP SERVICE ENTERPRISE<br>
        LIFE CYCLE
      </p>
      <button @click="goContact">更多</button>
    </div>
    <p class="bei">苏ICP备17070263号</p>
    <div class="backTop"><img src="./top.png" alt=""></div>
  </div>
</template>

<script>
  export default {
    name: 'footer',
    data () {
      return {}
    },
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
      })
      $('.backTop').backTop();
    },
    methods:{
      goContact(){
        $('.backTop').trigger('click');
        this.$router.push('/contact');
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../../common/css/mixins";

  .content {
    padding: 0.7rem 0.6rem 0.5rem;
    background: #f0f4f7;
    text-align: center;
    color: $themeColor;
    img {
      width: 3rem;
    }
    .line {
      width: 100%;
      display: block;
      height: 1px;
      margin: 0.26rem 0;
      background: $themeColor;
    }
    p {
      font-size: 12px;
      padding-bottom: 0.9rem;
    }
    button {
      width: 1.4rem;
      font-size: 14px;
      height: 0.52rem;
      line-height: 0.56rem;
      font-weight: bold;
      color: #fff;
      background: $themeColor;
      border-radius: 0.26rem;
    }
  }

  .bei {
    font-size: 14px;
    text-align: center;
    line-height: 1.5rem;
    padding-top: 0.3rem;
    color: #d9d9d9;
  }

  .backTop{
    position:fixed;
    bottom:0.2rem;
    right:0.44rem;
    z-index:100;
    img{
      width:0.9rem;
      height:0.9rem;
    }
  }
</style>
