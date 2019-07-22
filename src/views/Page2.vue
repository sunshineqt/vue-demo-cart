<template>
    <div>
        <h3>page2</h3> 
        <!-- 获取路由路径参数是路由$route -->
        <p>id: {{$route.params.id}}</p>
        <p>msg: {{$route.params.msg}}</p>
        <p>foo: {{$route.query.foo}}</p>

        <!-- 通过属性传递过来 -->
        <p>id: {{id}}</p>
        <p>msg: {{msg}}</p>
        <p>foo: {{foo}}</p>
    </div>
</template>

<script>
    export default {
        props: ['id','msg','foo'],
        created(){
            // 获取路由路径参数是路由$route 
            console.log(this.$route.params.msg)
            // 查询参的获取方式
            console.log(this.$route.query.foo,'foo')
        }
    }
</script>

<style lang="scss" scoped>

</style>