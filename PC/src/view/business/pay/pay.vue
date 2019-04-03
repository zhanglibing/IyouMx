<template>
  <div class="pay">
    <div class="nav">
      <left-nav pageType="pay"></left-nav>
    </div>
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
