<template>
    <div>
        login
        <button @click="login">login</button>
    </div>
</template>

<script>
    export default {
        methods: {
            async login() {
                console.log('login')
                // 登陆成功
                // window.isLogin = true;
                // 异步，需要拿到下面的结果再继续操作，可以选择在action操作时返回promise
                const ret = await this.$store.dispatch('submitLogin'); 
                // 此时可以拿到this.$store.state.isLogin，也可以通过这个判断是否登陆成功
                console.log(ret,'ret')
                if(ret){
                    // 登陆成功
                    const {redirect} = this.$route.query;
                    // const redirect = this.$route.query.redirect;
                    // 有回调地址就去回调地址，没有去首页
                    console.log(redirect,'redirect')
                    if(redirect) {
                        this.$router.push(redirect);
                    } else {
                        this.$router.push('/')
                    } 
                }else{
                    alert('登陆失败，请重试')
                }
              
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>