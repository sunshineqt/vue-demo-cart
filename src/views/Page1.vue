<template>
    <div>
        <h3>page11</h3>
        <p><button @click="gotoPage2()">跳转到page2</button></p>
        <!-- 传过来的静态值 -->
        foo:<p>{{foo}}</p>
        <!-- count2:{{$store.state.count}} -->
    </div>
</template>

<script>
    export default {
        props: {
            foo: {
                type: String,
                default: ''
            },
        },
        // 也可监听路由变化做处理
        // watch:{
        //     $route(){}
        // },
        methods: {
            gotoPage2() {
                // 进行路由跳转是路由器$router
                // this.$router.push('/page2/vv');
                // 单个参数传递
                // this.$router.push({name:'page2', params:{msg:'vv'}})

                // 多个参数传递,此时定义路由时也需要调整支持几个参数    {path:'/page2/:id/:msg',name:'page2', component:Page2}
                this.$router.push({name:'page2', params:{id:1, msg:'hhh'}})
            }
        },
        // 组件级别的路由守卫  当守卫执行前，组件实例还没被创建 
        // 作用范围太小，一般不用
        // beforeRouteEnter(){
        //       //  如果不是去登陆页面，则判断当前是否登陆
        //     if(window.isLogin){
        //       // 假设在window上存了个是否登陆的标志
        //       // 已经登陆
        //       next();
        //     }else {
        //       // 没有登陆,先登陆，登陆之后再重定向这个地址
        //       next('/login?redirect='+to.path);
        //     }
        // }

        // beforeRouteUpdate(to, from, next) {
        //     // 仅路由参数发生变化时触发，如/page/vue  /page/react 组件复用
                // next()
        // }
    }
</script>

<style lang="scss" scoped>

</style>