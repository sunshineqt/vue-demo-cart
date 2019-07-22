<template>
    <div>
        <h3>dashboard</h3>
        <!-- 当父亲的组件必须有一个路由的出口，负责显示子路由内容，这里Dashboard为父组件 -->
        <router-view></router-view>
        <!-- 取出store中值 -->
        <button @click="inc">inc</button>
        <button @click="incAsync">incAsync</button>
        <!-- 也可以直接调用increase -->
        <button @click="increase">increase</button>
        <p>count1:{{$store.state.count}}</p>
        <p>mapState-count:{{count}}</p>
        <p> 余额：{{$store.getters.money}} </p>
        <p> mapGetters余额：{{money}} </p>
    </div>
</template>

<script>
// 具名导出，映射方法 
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
    export default {
        methods: {
            // {increase:this.$store.commit('increase')}
            ...mapMutations(['increase']),
            ...mapActions(['increaseAsync']),
            inc() {
                // this.$store.commit('increase')
                this.increase()
            },
            incAsync(){
                // this.$store.dispatch('increaseAsync')
                this.increaseAsync()
            }
        },
        computed: {
            // mapState是函数，最终会返回对象，把对象解构放到computed中
            // {count:this.$store.state.count}
           ...mapState(['count']),
           ...mapGetters(['money'])
        },
    }
</script>

<style lang="scss" scoped>

</style>