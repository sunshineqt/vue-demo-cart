<template>
    <div>
        <p>{{name}}</p>
        <!-- 购物车列表 -->
        <table border="1">
            <tr>
                <td>#</td>
                <td>商品</td>
                <td>单价</td>
                <td>数量</td>
                <td>价格</td>
            </tr>  
            <tr v-for="(c,i) in cart" v-bind:key="c.id" :class="{active:c.active}">
                <td>
                    <input type="checkbox" v-model="c.active">
                </td>
                <td> {{c.text}} </td>
                <td> ￥{{c.price}} </td>
                <td> 
                    <button @click="minus(i)">-</button>
                    {{c.count}} 
                    <button @click="add(i)">+</button>
                </td>
                <td> ￥{{c.price * c.count}} </td>
            </tr>
            <tr>
                <td></td>
                <td colspan="2"> {{activeCount}}/{{count}} </td>
                <td colspan="2">￥{{total}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name:'Cart',
        props:['name'],
        data() {
            return {
                cart:[]
            }
        },
        created(){
            // 监听一下父组件添加商品事件
            // console.log(this,'cart-this')
            this.$bus.$on('addCart', good => {
                 // 查找购物车中是否已有该项
                const ret = this.cart.find(v => v.id===good.id)
                if(ret){
                    // 购物车里已有该商品
                    ret.count += 1;
                }else{
                    this.cart.push({
                    // 展开good中已有属性，即id，text，price
                    ...good,
                    count:1,
                    // 是否选择
                    active:true
                    });
                }
            });
        },
        computed: {
            activeCount() {
                // filter返回全新数组，过滤出激活项的数量
                if(this.cart.length>0){
                       return this.cart.filter(v=>v.active).length   
                }else{
                    return 0
                }
        
            },
            count() {
                // 计算
                return this.cart.length;
            },
            total() {
                // 计算激活项总价
                let num = 0;
                this.cart.forEach(c => {
                    if(c.active){
                      num += c.price * c.count;
                    }
                });
                 return num;
            }
        },
        methods: {
            minus(i) {
                const count = this.cart[i].count;
                if(count > 1) {
                    this.cart[i].count -= 1;
                }else {
                    this.remove(i)
                }
           
            },
            add(i) {
                this.cart[i].count += 1;
            },
            remove(i) {
                if(window.confirm('确定删除？')) {
                    this.cart.splice(i,1);
                }
            }
        },
    }
</script>

<style scoped>
    .active{
        color:pink;
    }
</style>