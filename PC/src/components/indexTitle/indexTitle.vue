<template>
  <div class="indexTitle">
    <img src="./logo.png" alt="">
    <p class="eng">{{titles[showIndex].eng}} &nbsp;INTRODUCTION</p>
    <p> / <span class="blod">{{titles[showIndex].title}}</span>介绍 /</p>
  </div>
</template>
<script>
   export default{
       props:{
         showIndex:{
             type:Number,
             default:0
         }
       },
       data(){
           return {
              titles:[
                {eng:'BUSINESS',title:"业务"},
                {eng:'PROJECT',title:"项目"},
                {eng:'ADVANTAGE  IS',title:"优势"}
              ]
           }
       }
   }
</script>
<style lang="scss" scoped="">
.indexTitle{
  text-align: center;
  font-size: 24px;
  margin-bottom:70px;
  .eng,.blod{
    font-weight: bold;
  }
  .eng{
    font-size: 18px;
  }
}
</style>
