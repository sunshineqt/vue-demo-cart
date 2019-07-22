import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// @相当于src
// import Page1 from '@/views/Page1.vue';
import Page1 from './views/Page1.vue';
import Page2 from '@/views/Page2.vue';
import Dashboard from '@/views/Dashboard.vue';
import Login from '@/views/Login.vue';
import store from './store';
// 插件挂载
Vue.use(Router)
/* function func(route) {
  return {
    id:route.params.id,
    msg:route.params.msg,
    foo:route.query.foo
  }
} */
function func({params,query}) {
  return {
    id:params.id,
    msg:params.msg,
    foo:query.foo
  }
}

// 路由的前置守卫
const router = new Router({
    // 加  mode: 'history'则为history模式，否则为hash模式
    // localhost:8080/#/page1   hash模式查看page1组件的页面
    // localhost:8080/page1   history模式查看page1组件的页面
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      // 重定向，默认首页
      {path:'/', redirect:'/dashboard/static'},
      {
        path:'/dashboard',
        component:Dashboard,
        // 路由独享的守卫
        beforeEnter(to,from,next){
            //  如果不是去登陆页面，则判断当前是否登陆
            // if(window.isLogin){
              // 改为redux方式取
              console.log('store.state.isLogin',store.state.isLogin)
              if(store.state.isLogin){
              // 假设在window上存了个是否登陆的标志
              // 已经登陆
              next();
            }else {
              // 没有登陆,先登陆，登陆之后再重定向这个地址
              next('/login?redirect='+to.path);
            }
        },
        children:[
          // children下的路由的path要用相对路径，即首位不要/，即拼接之后如/dashboard/static
            // 给组件传静态值
            {path:'static', component:Page1, props:{foo:'bar'}},
            {path:'page1/:foo', component:Page1,props:true}, //将route.params作为参数传
            // 还可以传递函数
            {path:'page2/:id/:msg',name:'page2', component:Page2,props:func}
        ]
      },
      {path:'/login', name:'login', component:Login}
    ]
  })
  // 每次路由跳转都会经过这里，全局路由守卫
  router.beforeEach((to, from, next) => {
    console.log(to,'to')
  //  if(to.path !== '/login') {
  //   //  如果不是去登陆页面，则判断当前是否登陆
  //   if(window.isLogin){
  //     // 假设在window上存了个是否登陆的标志
  //     // 已经登陆
  //     next();
  //   }else {
  //     // 没有登陆,先登陆，登陆之后再重定向这个地址
  //     next('/login?redirect='+to.path);
  //   }
  //  } else {
  //    next();
  //  }
     next()
    
  })

  export default router

// export default new Router({
//   // 加  mode: 'history'则为history模式，否则为hash模式
//   // localhost:8080/#/page1   hash模式查看page1组件的页面
//   // localhost:8080/page1   history模式查看page1组件的页面
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     // 重定向，默认首页
//     {path:'/', redirect:'/dashboard/page1'},
//     {
//       path:'/dashboard',
//       component:Dashboard,
//       children:[
//         // children下的路由的path要用相对路径，即首位不要/，即拼接之后如/dashboard/static
//           // 给组件传静态值
//           {path:'static', component:Page1, props:{foo:'bar'}},
//           {path:'page1/:foo', component:Page1,props:true}, //将route.params作为参数传
//           // 还可以传递函数
//           {path:'page2/:id/:msg',name:'page2', component:Page2,props:func}
//       ]
//     },
//     {path:'/login', name:'login', component:Login}
//   ]
// })

  // {path:'/page2/:msg',name:'page2', component:Page2}
  // {path:'/page2/:id/:msg',name:'page2', component:Page2}
  // {path:'/page2/:id/:msg',name:'page2', component:Page2,props:func}
 