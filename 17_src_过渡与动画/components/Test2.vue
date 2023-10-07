<template>
    <div>
        <button @click="reverShow">显示/隐藏</button>
        <!-- 
            :appear="true"或者简写 apper初始化动画  
            name="hello" 下面动画名称 v-enter-active的 v 就改写成hello 
        -->
        <transition-group name="hello" appear>
            <h2 class="bg" v-show="!isShow" key="1">你好啊</h2>
            <h2 class="bg" v-show="isShow" key="2">唐唐酱</h2>
        </transition-group>
        
    </div>
</template>

<script>
/* 
    过渡动画   
    动画组 <transition-group></transition-group>
*/
export default {
    name:"Test2",
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
    /* 进入的起点  离开的终点  */
    .hello-enter,.hello-leave-to{
        transform: translateX(-100%);
    }
    /* 离开的起点  进入的终点 */
    .hello-leave,.hello-enter-t{
        transform: translateX(0);
    }
    /* 动画的速度 */
    .hello-enter-active,.hello-leave-active{
        transition: 0.5s linear;
    }
    
</style>