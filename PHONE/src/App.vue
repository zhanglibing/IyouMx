<template>
  <div id="app">
    <keep-alive>
      <head-model></head-model>
    </keep-alive>
    <router-view></router-view>
    <keep-alive>
      <v-footer></v-footer>
    </keep-alive>
  </div>
</template>

<script>
import Scroll from '@/scroll'
import VFooter from '@/footer/footer'
export default {
  name: 'app',
  components:{
    VFooter,
    Scroll
  }
}
</script>

<style lang="scss">
  @font-face {
    font-family: sans; /*这里是说明调用来的字体名字*/
    src: url('./common/css/sanfranciscodisplay-light-webfont.ttf'); /*这里是字体文件路径*/
  }
  @font-face {
    font-family: sans_blod; /*这里是说明调用来的字体名字*/
    src: url('./common/css/sanfranciscodisplay-bold-webfont.ttf'); /*这里是字体文件路径*/
  }
  a{
    color:inherit;
  }
  .eng,.title_eng{
    font-family: sans;
  }
  .num,eng_blod{
    font-family:sans_blod;
  }
  #app{
    position: relative;
    /*transition: all 0.38s ease;*/
    /*&.active{*/
     /*left:83%;*/
    /*}*/
  }
</style>
