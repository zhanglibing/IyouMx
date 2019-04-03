<template>
  <div class="planeDesign">
    <left-nav pageType="planeDesign"></left-nav>
    <router-view class="webView"></router-view>
  </div>
</template>
<script>
  import LeftNav from '../leftNav'
  export default{
    components:{
      LeftNav
    }
  }
</script>
<style lang="scss" scoped="">

</style>
