import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

Vue.config.productionTip = false

// 修改vue原型
Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
  // h渲染函数，渲染app组件
}).$mount('#app')
// .$mount挂载