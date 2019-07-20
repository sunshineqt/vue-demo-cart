<template>
   <input type="text" :value="inputValue" @input="inputHandler" />
</template>

<script>
    export default {
        props:{
            value:{
                type:String,
                default:''
            }
        },
        data() {
            return {
                // 单向数据流原则：组件内不能修改props属性
                inputValue: this.value
            }
        },
        methods: {
            inputHandler(e) {
                this.inputValue = e.target.value
                // 通知父组件值更新

            }
        },
    }
</script>

<style lang="scss" scoped>

</style>