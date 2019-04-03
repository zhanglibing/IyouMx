<template>
  <div id="details">
     <div class="info">
         <h2 class="title">{{list[path-1].title}}</h2>
         <p class="time">{{list[path-1].time}}</p>
         <p class="des">{{list[path-1].des}}</p>
         <button @click="goHome">返回</button>
     </div>
     <div class="main_img">
       <img :src="`./static/images/${path}.jpg`" alt="" v-if="path<7">
       <img :src="`./static/images/${path}.png`" alt="" v-else="">
     </div>
  </div>
</template>

<script>
  export default {
    name: 'details',
    data () {
      return {
        path:'1',
        list: [
          {
            title: '柏名城',
            time: '2014/02/23',
            des:"房地产外包宣传企业官网"
          },
          {
            title: '酷跑',
            time: '2015/03/14',
          },
          {
            title: '香水官网',
            time: '2015/05/07',
          },
          {
            title: '萌牙客',
            time: '2016/04/07',
          },
          {
            title: '食社',
            time: '2016/09/02',
          },
          {
            title: '霁朝咨询',
            time: '2016/12/06',
          },
          {
            title: '设计类网站',
            time: '2017/02/10',
          },
          {
            title: '亚昆供应链',
            time: '2017/08/10',
          }]
      }
    },
    mounted(){
      this.path =this.$route.query.pathIndex;
    },
    methods:{
      goHome(){
          this.$router.push('/')
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
  @import "../../common/css/mixins";
  #details{
    padding:0.44rem 0.24rem;
  }
  .info{
    position: relative;
    width:6.6rem;
    margin:0 auto 0.3rem;
    .title{
      font-size: 0.6rem;
      margin-bottom:0.45rem;
    }
    .des{
      font-size: 12px;
      padding-bottom:0.6rem;
    }
    button{
      position: absolute;
      top:0;
      right:0;
      width:1.36rem;
      height:0.54rem;
      background: $themeColor;
      border-radius: 0.52rem;
      color:#fff;
    }
  }
  .main_img{
   padding-bottom:1.6rem;
    img{
      width:100%;
    }
  }
</style>
