<template>
    <div>
        <button @click="reverShow">显示/隐藏</button>
        <!-- 
            :appear="true"或者简写 apper初始化动画  
            name="hello" 下面动画名称 v-enter-active的 v 就改写成hello 
        -->
        <transition-group 
            appear
            name="animate__animated animate__bounce" 
            enter-active-class="animate__swing"
            leave-active-class="animate__bounceOutUp"
        >
            <h2 class="bg" v-show="!isShow" key="1">你好啊</h2>
            <h2 class="bg" v-show="isShow" key="2">唐唐酱</h2>
        </transition-group>
        
    </div>
</template>

<script>
/* 集成动画 */
// 引入集成动画  import "animate.css";  要先安装 npm install animate.css
import "animate.css";

export default {
    name:"Test3",
    data(){
        return{
            isShow:true,
        }
    },
    methods:{
        reverShow(){
            this.isShow = !this.isShow
        }
    },
    watch:{
        "isShow":{
            deep:true,
            handler(){
                console.log(this.isShow);
            }
        }
    }

}
</script>

<style>
   
</style>