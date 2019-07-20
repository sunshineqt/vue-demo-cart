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
import scheme from 'async-validator';
    export default {
        // 注入form，获取model和rules
        inject:['form'], 
        props:['label','prop'],
        data() {
            return {
                validateStatus: '',
                errorMessage:''
            }
        },
        created(){
            // 监听
            this.$on('validate',this.validate)
        },
        mounted(){
            // 挂载到form上，派发一个添加事件
            if(this.prop){
                this.$parent.$emit('formItemAdd', this)
            }
        },
        methods: {
            // value为FormItem收到的input的值，然后进行校验
            validate() {
                // 多个异步校验项，不确定是否都校验ok，则选择放到Promise中处理，Promise在成功的时候调用resolve
                return new Promise(resolve => {
                    // 校验当前项，依赖async-validate，需要安装element库
                    const descriptor = {
                        [this.prop]:this.form.rules[this.prop]
                    }
                    // const descriptor = {};
                    // descriptor[this.prop] = this.form.rules[this.prop];

                    // 校验器 scheme实例
                    const validator = new scheme(descriptor);
                    validator.validate({[this.prop]:this.form.model[this.prop]}, errors =>{
                            if(errors){
                                // 校验失败
                                this.validateStatus = 'error';
                                this.errorMessage = errors[0].message;
                                // 校验失败，给父级用的
                                resolve(false);
                            }else{
                                this.validateStatus = '';
                                this.errorMessage = '';
                                resolve(true);
                            }
                        }
                    )
                })
                

            }
        },
    }
</script>

<style lang="scss" scoped>
    .error{
        color:#f00;
    }
</style>