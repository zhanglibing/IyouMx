<template>
  <div id="app">
    <header-model class="header"></header-model>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VFooter from './components/footer/footer'
import HeaderModel from './components/header/header'
export default {
  name: 'app',
  components:{
    VFooter,
    HeaderModel
  }
}
</script>

<style lang="scss">
  #app{
    padding-top:45px;
  }
  .header{
    position: fixed;
    z-index: 50000;
    top:0;
    left:0;
  }
  .webView{
    float:left;
    width:920px;
    padding:50px;
    box-sizing: border-box;
  }

  #app{
    min-width: 1200px;
  }
  input,button,select,textarea {
    outline: none;
    box-shadow: none;
    border:1px solid #ccc;
  }
  //去掉默认黄色背景
  input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset !important;
    background-color: rgb(0, 0, 0) !important;
    background-image: none !important;
    color: rgb(0, 0, 0) !important;
    -webkit-tap-highlight-color:rgba(0,0,0,0) !important;
  }
  .btn{
    position: relative;
    line-height: 40px;
    padding-right:34px;
    padding-left:20px;
    color:#fff;
    border-radius: 20px;
    background: #004fff;
    border:none;
    box-shadow: 0 1px 10px #bad5f8;
    &:hover{
      background: #3070ff;
    }
    &:after{
      position: absolute;
      top:16px;
      right:14px;
      content:'';
      display: inline-block;
      width:0;
      height:0;
      border-right:7px solid transparent;
      border-top:5px solid transparent;
      border-bottom:5px solid transparent;
      border-left:7px solid #fff;
    }
  }

</style>
