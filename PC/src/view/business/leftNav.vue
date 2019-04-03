<template>
    <div class="leftNav">
      <div class="title">
        <b class="img_box"><img src="./news.png" alt=""></b>
        <span>TOPICS</span>
      </div>
      <router-link :to="`/business/${nav[pageType].title}`" tag="div" class="paper">简述/The paper</router-link>
      <div class="list_show" @click="showList">案例/Case</div>
      <ul class="list">
        <router-link :to="`/business/${nav[pageType].title}/details/${item.id}`" tag="li" v-for="(item,index) in nav[pageType].list" :key="index">{{item.name}}</router-link>
      </ul>
    </div>
</template>
<script>
  export default{
      name:'leftNav',
      props:{
        pageType:{
            type:String,
            required:true
        }
      },
      data(){
          return{
            nav:{
               web: {
                  title:'website',
                  list:[
                    {name:'柏名城企业官网',id:1},
                    {name:'香水官网',id:2},
                    {name:'霁朝健康咨询',id:3},
                    {name:'亚昆供应链',id:4},
                    {name:'萌牙客',id:5},
                    {name:'设计类网站',id:6},
                  ]
               },
              pay: {
                  title:'pay',
                  list:[]
               },
              technical: {
                  title:'technical',
                  list:[]
              },
              smallProgram: {
                  title:'smallProgram',
                  list:[]
              },
              planeDesign: {
                  title:'planeDesign',
                  list:[]
              },
              mobileDev: {
                  title:'mobileDev',
                  list:[
                    {name:'酷跑',id:7},
                    {name:'食社',id:8},
                  ]
              },
            },
            isShowList:false
          }
      },
      mounted(){

      },
      methods:{
        showList(){
            $('.list_show').toggleClass('active');
            $('.leftNav .list').slideToggle(200)
        }
      }
  }
</script>
<style lang="scss" scoped="">
  @import "../../common/css/mixins";
  %list{
    line-height: 50px;
    position: relative;
    padding-left:30px;
    font-size: 16px;
    cursor: pointer;
    &:before{
      content:'';
      width:3px;
      height:100%;
      position: absolute;
      top:0;
      left:0;
      background: #b8b8b8;
    }
    &:hover,&.router-link-exact-active,&.active{
      background: #ebebeb;
      &:before{
        background: $themeColor;
      }
      &:after{
        background: url("arrow_hover.png") center no-repeat;
      }
    }
    &:after{
      position: absolute;
      right:20px;
      top:25px;
      content:'';
      display: block;
      width:13px;
      height:13px;
      background: url("arrow.png") center no-repeat;
    }
  }
  .leftNav{
    width:280px;
    float:left;
    .title{
      margin:50px 0 14px;
      .img_box{
        position: relative;
        display: inline-block;
        width:32px;
        height:32px;
        border-radius: 10px;
        margin-right:30px;
        background: $themeColor;
        img{
          @include middle;
        }
      }
      span{
        line-height: 34px;
        vertical-align: top;
      }
    }
    .paper,.list_show{
      @extend %list;
    }
    .list_show.active:after{
      background: url("arrow_show.png") center no-repeat;
    }
    .list{
      display: none;
      li{
        line-height: 50px;
        padding-left:40px;
        font-size: 14px;
        cursor: pointer;
        &:hover,&.router-link-exact-active{
          background: $themeColor;
          color:#fff;
        }
      }
    }
  }
</style>

