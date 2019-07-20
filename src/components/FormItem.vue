<template>
    <div>
        <label v-if="label">{{label}}</label>
        <div>
            <slot></slot>
            <!-- 校验错误信息 -->
            <p v-if="validateStatus=='error'" class="error">{{errorMessage}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props:['label','prop'],
        data() {
            return {
                validateStatus: '',
                errorMessage:''
            }
        },
    }
</script>

<style lang="scss" scoped>
    .error{
        color:#f00;
    }
</style>