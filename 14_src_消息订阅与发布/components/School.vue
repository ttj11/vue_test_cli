<template>
    <div class="bg">
        <h2>学校的名称：{{ name }}</h2>
        <h2>学校的地址：{{ address }}</h2>
    </div>
</template>

<script>
/* 
    终端先安装  npm install pubsub-js@1.6.0 
    老师安装的是 npm i pubsub-js 报错，上面的没报错
    pubsub是一个对象
*/
 import pubsub from "pubsub-js"

export default {
    name: "School",
    props:["getSchoolName"],
    data(){
        return {
            name:"尚硅谷",
            address:"北京-昌平",
        }
    },
    methods:{
        getStuName(msgName,data){
            console.log("我是school组件，我收到你的数据",data);
        }
    },
    mounted(){
        this.pid = pubsub.subscribe("hello",this.getStuName)//订阅消息
    },
    beforeDestroy(){
        pubsub.unsubscribe(this.pid)
    }

}
</script>

<style >
    .bg{
        background-color: rgb(164, 134, 193);
        padding:10px;
        margin: 20px;
    }
</style>