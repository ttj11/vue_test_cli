<template>
    <div class="bg">
        <h2>学校的名称：{{ name }}</h2>
        <h2>学校的地址：{{ address }}</h2>
    </div>
</template>

<script>

export default {
    name: "School",
    props:["getSchoolName"],
    data(){
        return {
            name:"尚硅谷",
            address:"北京-昌平",
        }
    },
    mounted(){
        this.$bus.$on("getStudenName",(data)=>{
            console.log("我是school组件，我收到了数据",data);
        })
    },
    beforeDestroy(){
        this.$bus.$off("getStudenName")
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