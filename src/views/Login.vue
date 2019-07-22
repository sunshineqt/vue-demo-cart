<template>
    <div>
        login
        <button @click="login">login</button>
    </div>
</template>

<script>
    export default {
        methods: {
            login() {
                // 登陆成功
                window.isLogin = true;
                const {redirect} = this.$route.query;
                // const redirect = this.$route.query.redirect;
                // 有回调地址就去回调地址，没有去首页
                if(redirect) {
                    this.$router.push(redirect);
                } else {
                    this.$router.push('/')
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>