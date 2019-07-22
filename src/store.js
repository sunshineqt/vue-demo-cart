import Vue from 'vue'
import Vuex from 'vuex'
// import Axios from 'axios';
// 挂载插件
Vue.use(Vuex)
// 创建store实例
export default new Vuex.Store({
  state: {
    // 想保存的全局共享数据
    count:88888888,
    // 是否登录状态存于store
    isLogin:false
  },
  // 修改数据
  mutations: {
    // 操作数据的方法
    increase(state){
      state.count += 1;
    },
    login(state){
      state.isLogin = true;
    },
    logout(state){
      state.isLogin = false;
    }
  },
  getters:{
    // getters里面都是函数 对state中的数据进行加工处理 类似computed计算属性功能
    money:state => {
      return state.count +'元'
    }
  },
  // 异步操作时使用 {state,commit}从store中解构
  actions: {
    // increaseAsync({state,commit},payload){
    increaseAsync({commit}){
      setTimeout(() => {
        commit('increase')
      }, 1000)
    },
    submitLogin({commit}){
      return new Promise(resolve => {
              // 模拟登录成功
          setTimeout(() => {
            commit('login');
            // 成功
            resolve(true);
          },1000)
      })

      // return Axios.post('/api/login').then(resp => {
      //   // 根据接口返回数据进行下面的操作
      // })
    
    }
  }
})
