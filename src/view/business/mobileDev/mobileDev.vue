<template>
  <div class="mobileDev">
    <left-nav pageType="mobileDev"></left-nav>
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
