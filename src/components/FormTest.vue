<template>
    <div>
        <h3>{{title}}</h3>
        <!-- model数据模型  rules校验规则 ref表单名字，可以通过它访问当前表单实例，调用其api-->
        <el-form :model="ruleForm" :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
            <!-- prop用于当前表单校验，如果不需要校验的话可以不要prop -->
            <el-form-item label="用户名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pwd">
                <el-input v-model="ruleForm.pwd"></el-input>
            </el-form-item>
            
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            </el-form-item>

         </el-form>


             <!-- KFormItem-KInput -->
         <k-form-item label="名称" prop="name">
            <k-input v-model="ruleForm.name"></k-input>
         </k-form-item>
         <k-form-item label="密码" prop="pwd">
            <k-input v-model="ruleForm.pwd" type="password"></k-input>
         </k-form-item>
       
        ruleForm:{{ruleForm}}
       
    </div>
</template>

<script>
import KInput from './Input.vue';
import KFormItem from './FormItem.vue';
    export default {
        name:'FormTest',
        // props:['title'],
        // props校验
        props:{
            title:{type:String, required:true}
        },
        components:{
            KInput,
            KFormItem
        },
        data() {
            return {
                ruleForm: {
                    name:'',
                    pwd:''
                },
                rules:{
                    name:[
                        {required:true,message:'请输入名称'},
                        {min:3, max:10,message:'请输入3~10位用户名'}
                    ],
                    pwd:[
                        {required:true,message:'请输入密码'}
                    ]
                },
                someValue:'today is nice'
            }
        },
        methods: {
            submitForm() {
                this.$refs.loginForm.validate(valid => {
                    if(valid) {
                        alert('提交登录')
                    } else {
                        alert('校验失败');
                        return false; //避免浏览器默认提交行为
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>