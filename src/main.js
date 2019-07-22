import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 修改vue原型
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,

  // h渲染函数，渲染app组件
  render: h => h(App)
}).$mount('#app')
// .$mount挂载