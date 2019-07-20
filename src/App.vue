<template>
<!-- 每个组件必须有一个根组件 -->
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- 组件的使用HelloWorld -->
    <HelloWorld msg="beautiful world"/>
    <!-- 条件判断 -->
    <p v-if="showName">{{name}}</p>

    <!-- 循环语句 -->
 <!--    <p>  
      <input type="text" v-model="text">
      <button @click="addGood()">加购</button> 
    </p> -->
    <ul>
      <li v-for="(good,index) in goods" v-bind:key="good.id">
        <span> {{good.text}} </span>
        <span> ￥{{good.price}} </span>
        <button @click="addGood(index)">加购</button> 
      </li>
    </ul>
  <!-- 3组件使用 传参 -->
    <!-- <Cart :name="name" :cart="cart"></Cart>   -->
    <!-- 把添加购物车的实际行为移到购物车组件中，则这里不再需要传cart值 -->
       <Cart :name="name"></Cart> 

       <!-- FormTest测试 两种方式给title传值-->
       <form-test :title="title"></form-test> 
       <!-- <form-test title="ell"></form-test>  -->
       <!-- KButton测试子传父 -->
       <k-button @eventName="handleClick"></k-button>  

       <!-- slot -->
       <win>
         <template slot="head">
           <h3>我们都是好孩子</h3>
         </template>
         content
        <template slot="foot">
           <button>确定</button>
        </template>
       </win>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { setTimeout } from 'timers';
// 用于请求接口
import axios from 'axios';
// 1引入组件
import Cart from './components/Cart.vue';
import FormTest from './components/FormTest.vue';
import KButton from './components/Button.vue';
import Win from './components/Win.vue';
export default {
  name: 'app',
  // 组件中的data需为函数
  data() {
    return {
      name:'beauty',
      provide(){
        return {
          someValue:'来自上上层的礼物'
        }
      },
      showName:false,
      goods:[],
      text:'',
      // cart:[]
      title:'element form test'
    }
  },
  // 2组件的声明
  components: {
    HelloWorld,
    Cart,
    FormTest,
    KButton,
    Win
  },
  // 加async说明是异步
 async created() {
    // 当前组件创建完成后，执行的生命周期钩子且只执行一次
    setTimeout(() => {
      this.showName = true;
    }, 1000)

    try {
  // 请求接口查询商品列表，前面加了async，后面加await处代码此时以可以获取到接口返回数据
      const response =  await axios.get('/api/goods');
      this.goods = response.data.list;
    } catch(error) {
// 错误处理
    }

  // 不用await的写法
  // axios.get('/api/goods').then(resq => {
  //      this.goods = response.data.list;
  // }).catch(err => {
  //   //  错误处理
  // })

  },
  methods:{
    addGood(i){
      // this.goods.push({id:new Date(),text:this.text,price:parseInt(Math.random(1,10)*10)})3

      // 获取goods中对应项
      const good = this.goods[i];
      // 派发事件，第一个参数为事件名称，第二个参数为传参
      // console.log(this,'app-this')
      this.$bus.$emit('addCart',good);
      // 下面这个也可以
      // this.$root.$emit('addCart',good);
    },
    handleClick(obj){
      console.log(obj,'子传父')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>