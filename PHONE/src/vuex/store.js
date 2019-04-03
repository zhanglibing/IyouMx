import Vue from 'vue';
import Vuex from 'vuex';
import { saveUserInfo, getUserInfo} from '../common/js/common';

Vue.use(Vuex)



//获取session值
function getSessionByName(name){
  var val=name=='clearPageIndex'?1:0;
  if(name=='activeUserInfo'){
    val={}
  }
  if(sessionStorage[name]!="-1"&&sessionStorage[name]){
    val=JSON.parse(sessionStorage[name]);
  }
  return val;
}
//设置session值
function setSessionVal(name,val){
  sessionStorage[name]=JSON.stringify(val);
}

//状态
const state={
    role:"doctor",  //角色
    authorizd:getSessionByName('clearAuthorizd'),  //是否登录
    userInfo:getUserInfo(),
    activeUserInfo:getSessionByName('activeUserInfo'),
    currentIndex:getSessionByName('clearPageIndex'),
    isFourChooseOne:false, //是否为评估病例、四选一 默认为正式病例
    addCaseStep:getSessionByName('addCaseStep')
}

const mutations={
  setCurrent(state,val){ //设置首页所在页面
    state.currentIndex=val;
    setSessionVal('clearPageIndex',val);
  },
  setFourChooseOne(state,val){ //是否为四选一
    state.isFourChooseOne=val;
  },
  setUserInfo(state,val){ //
    state.userInfo=val;
    saveUserInfo(val);
  },
  setActiveUserInfo(state,val){ //激活选中诊所信息
    state.activeUserInfo=val;
    setSessionVal('activeUserInfo',val);
  },
  setAuthorizd(state,val){ //激活登录状态
    state.authorizd=val;
    setSessionVal('clearAuthorizd',val);
  },
  setAddCaseStep(state,val){ //设置登录步骤数
    state.addCaseStep=val;
    setSessionVal('addCaseStep',val);
  }
}

const getters = {
  // count:function(state){
  //   return state.count +=100;
  // }
}

const actions ={
  addAction(context){
    context.commit('add',10)
  },
  reduceAction({commit}){
    commit('reduce')
  }
}

export default new Vuex.Store({
  state,mutations,getters,actions
})
