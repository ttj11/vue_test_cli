<template>
    <div>
        <button @click="reverShow">显示/隐藏</button>
        <!-- 
            :appear="true"或者简写 apper初始化动画  
            name="hello" 下面动画名称 v-enter-active的 v 就改写成hello 
        -->
        <transition name="hello" appear>
            <h2 class="bg" v-show="isShow">你好啊</h2>
        </transition>
        
    </div>
</template>

<script>
export default {
    name:"Test",
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

<style scoped>
    
    .hello-enter-active{
        animation: ttj .5s linear;
    }
    .hello-leave-active{
        animation: ttj .5s linear reverse;
    }
    @keyframes ttj {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>