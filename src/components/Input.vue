<template>
    <div>
        {{someValue}}
        <input :type="type" :value="inputValue" @input="inputHandler" />
    </div>
</template>

<script>
    export default {
        // 上上层的值
        inject:['someValue'],
        props:{
            value:{
                type:String,
                default:''
            },
            type:{
                type:String,
                default:'text'
            },
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
                this.$emit('input',this.inputValue)
                // 通知FormItem做校验,this.$parent为FormItem，则在FormItem组件内可进行自我监听
                this.$parent.$emit('validate', this.inputValue)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>