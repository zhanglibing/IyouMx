<template>
  <div class="website">
      <left-nav pageType="web"></left-nav>
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
