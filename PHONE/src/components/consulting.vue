<template>
   <div class="consulting">
        <router-link to="/contact" tag="div" class="btn">期待您的咨询</router-link>
        <p>
          ONE-STOP SERVICE ENTERPRISE <br>
          LIFE CYCLE
        </p>
   </div>
</template>

<script>
  export default{

  }
</script>

<style lang="scss" scoped>
    @import "../common/css/mixins";
    .consulting {
      padding: 0.8rem 0 1rem;
      text-align: center;
    .btn {
      position: relative;
      width: 2.2rem;
      height: 0.54rem;
      border-radius: 0.26rem;
      background: $themeColor;
      color: #fff;
      line-height: 0.6rem;
      margin: 0 auto 0.1rem;
      $width: 1.4rem;
    &:after, &:before {
                position: absolute;
                top: 0.25rem;
                content: '';
                display: block;
                width: $width;
                height: 1px;;
                background: $themeColor;
                right: -($width + 0.45rem);
              }
    &:before {
       left: -($width + 0.45rem);
     }
    }
    p {
      color: #b5b5b5;
    }
    }
</style>
