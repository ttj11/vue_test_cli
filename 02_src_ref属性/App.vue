<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showDom">点我输出上方的dom元素</button>
        <School ref="sch"  id="sch"/>
    </div>
</template>

<script>
//引入需要的组件
import School from "./components/School.vue"

export default {
    name: "App",
    data() {
        return {
            msg:"欢迎学习Vue！！！"
        }
    },
    components: { School },
    methods:{
        showDom(){
            console.log(this.$refs.title);//真实dom元素
            console.log(this.$refs.btn);//真实dom元素
            console.log(document.getElementById("sch"));//真实dom元素
            console.log(this.$refs.sch);//School组件的实例对象(vc)
        }
    }
}
</script>

<style></style>