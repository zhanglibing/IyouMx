<template>
  <div class="details">
    <div class="info">
      <h2 class="title">{{list[$route.params.id-1].title}}</h2>
      <p class="time">{{list[$route.params.id-1].time}}</p>
      <p class="des">{{list[$route.params.id-1].des}}</p>
      <div class="line"></div>
    </div>
    <div class="main_img">
      <img :src="`static/images/${$route.params.id}.jpg`" alt="" >
      <img :src="`static/images/${$route.params.id}.jpg`" alt="" v-if="$route.params.id!=7">
      <img :src="`static/images/${$route.params.id}.png`" alt=""  v-else="" >
    </div>
  </div>
</template>

<script>
  export default {
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
            title: '香水官网',
            time: '2015/05/07',
          },
          {
            title: '霁朝咨询',
            time: '2016/12/06',
          },
          {
            title: '亚昆供应链',
            time: '2017/08/10',
          },
          {
            title: '萌牙客',
            time: '2016/04/07',
          },
          {
            title: '设计类网站',
            time: '2017/02/10',
          },
          {
            title: '酷跑',
            time: '2015/03/14',
          },
          {
            title: '食社',
            time: '2016/09/02',
          },
        ]
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
  @import "../../common/css/mixins";
  .info{
    .title{
      margin-bottom:10px;
    }
    .des{
      font-size: 12px;
    }
    .line{
      width:660px;
      height:1px;
      margin-top:20px;
      margin-bottom:40px;
      background: #d2d2d2;
    }
  }
  .main_img{
    padding-bottom:100px;
    img{
      width:700px;
    }
  }
</style>
