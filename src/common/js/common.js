import $ from 'jquery'
//检查密码格式
function checkPassword(str) {
  if(str.length < 6) {
    return false;
  }
  return true;
}
//检查手机号码格式
function checkPhone(phone) {
  var preg = /^1[34578]\d{9}$/;
  if(preg.test(phone)) {
    return true;
  }
  return false;
}
function msg(title) {
  if ($(".msg").length > 0) $(".msg").remove();
  var msg = $("<div class='msg'></div>").appendTo("body");
  var windowW = $(window).outerWidth();
  msg.text("提示："+title);
  var w = windowW / 2 - msg.outerWidth() / 2;
  msg.css({"left": w + "px"});
  msg.css({"opacity": "1", "z-index": "10000"});
  setTimeout(function () {
    msg.css({"opacity": "0", "z-index": "-1"});
  }, 1000);
}

//核对患者基本信息
function checkPatientInfo(obj){
  if(!obj.patientName){return msg("患者姓名不能为空")}
  if(!obj.patientAge){return msg("患者生日不能为空")}
  if(!obj.patientTel){return msg("患者手机号不能为空")}
  if(!checkPhone(obj.patientTel)){return msg("患者手机号格式不正确")}
  if(!obj.mailing){return msg("邮寄地址不能为空")}
  return true;
}

// //核对模型数据
function checkMode(obj,isSelect=false){
  if(!obj.filepath){
    if(isSelect){
      return false; //四选一不提示
    }
    return msg("模型未上传");
  }
  return true;
}
//核对图片等信息
function checkImg(obj,isSelect=false){
  if(isSelect){ //四选一
    if((obj.f0&&obj.f1&&obj.f2&&obj.f3)||(obj.d0&&obj.d1&&obj.d2&&obj.d3&&obj.d4)||(obj.r0&&obj.r1)){
       return true;
    }
    return msg('四项必须上传一项');
  }
  if(!obj.f0||!obj.f1||!obj.f2||!obj.f3){return msg("形象照四张为必须上传")}
  if(!obj.d0||!obj.d1||!obj.d2||!obj.d3||!obj.d4){return msg("牙冠照五张张为必须上传")}
  if(!obj.r0||!obj.r1){return msg("牙根照两张为必须上传")}
  return true;
}
//核对主诉等信息
function checkSays(obj){
  if(!obj.main_suit){return msg("患者主诉不能为空")}
  if(!obj.allergy_history){return msg("患者过敏史不能为空")}
  if(!obj.Medical_history){return msg("患者治疗史不能为空")}
  if(!obj.therapeutic_schedule){return msg("患者治疗方案不能为空")}
  return true;
}
//核对所有患者信息
function checkAll(a,b,c,d){
  if(!checkPatientInfo(a)) return false;
  if(!checkMode(b)) {return false}
  if(!checkImg(c)) return false;
  if(!checkSays(d)) return false;
  return true
}

//核对四选一
function checkFourChooseOne(a,b){
  if(!checkMode(a,true)) {
    if(!checkImg(b,true)){return false;}
  }
  setImgDefault(b);
  return true;
}
//默认图片赋值
function setImgDefault(a){
  const pathPre='http://www.clearbos.cn/images/';
  a.f0=a.f0?a.f0:pathPre+'add1.jpg';
  a.f1=a.f1?a.f1:pathPre+'add2.jpg';
  a.f2=a.f2?a.f2:pathPre+'add3.jpg';
  a.f3=a.f3?a.f3:pathPre+'add4.jpg';
  a.d0=a.d0?a.d0:pathPre+'teeth1.jpg';
  a.d1=a.d1?a.d1:pathPre+'teeth2.jpg';
  a.d2=a.d2?a.d2:pathPre+'teeth3.jpg';
  a.d3=a.d3?a.d3:pathPre+'teeth4.jpg';
  a.d4=a.d4?a.d4:pathPre+'teeth5.jpg';
  a.r0=a.r0?a.r0:pathPre+'yagen1.jpg';
  a.r1=a.r1?a.r1:pathPre+'yagen2.jpg';
}

//启动专业软件
function runExe(list){
  var options = {
    modelfile: list.DentalModel ? list.DentalModel[0].ImagePath : '',
    schemefile: list.DesignScheme ? list.DesignScheme[0].ImagePath : '',
    fileId:  list.DesignScheme ? list.DesignScheme[0].Id : '',
  };
  var operationstyle = list.EmrStatus==5? 5 : 1;  //5:edit  1:read
  var path = 'WebClearCheck://ID='+list.EMRCode + '&name=' + list.EMRCode + '-Data'+list.PhaseNumber + '&operationstyle=' + operationstyle + '&phase=' + 'Data'+list.PhaseNumber + '&modelfile=' + options.modelfile + '&schemefile=' + options.schemefile;
  window.open(path,"_self");
}

//获取当前年月日 星期
function getTime(){
  var myDate = new Date();
  var year=myDate.getFullYear();    //获取完整的年份(4位,1970-????)
  var month=myDate.getMonth()+1;       //获取当前月份(0-11,0代表1月)
  var day=myDate.getDate();        //获取当前日(1-31)
  var seven=myDate.getDay();         //获取当前星期X(0-6,0代表星期天)
  var h=myDate.getHours();
  var s=myDate.getMinutes();
  var m=myDate.getSeconds();
  month=(month<10)?("0"+month):month;
  day=(day<10)?("0"+day):day;
  h=(h<10)?("0"+h):h;
  s=(s<10)?("0"+s):s;
  m=(m<10)?("0"+m):m;
  return year+'.'+month+'.'+day+' '+h+":"+s+":"+m;
}

//保存用户信息
function saveUserInfo(data) {
  var string_userInfo = JSON.stringify(data);//数组转换成字符串
  sessionStorage.setItem("ss_userInfo", string_userInfo);
}
//获取用户信息
function getUserInfo() {
  return JSON.parse(sessionStorage.getItem("ss_userInfo")); //将字符串转换为数组
}
function setCookie(name, value) {
  var Days = 3;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
export default({ //项目公用方法
  /* eslint-disable no-new */
  setCookie,
  runExe,
  msg,
  checkPhone,
  checkPassword,
})
export { //很关键
  checkPhone,
  msg,
  checkPatientInfo,
  checkImg,
  checkSays,
  checkAll,
  checkFourChooseOne,
  runExe,
  getTime,
  saveUserInfo,
  getUserInfo,
  setCookie,
  checkMode
}
