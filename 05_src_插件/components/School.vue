<template>
    <div>
        <h2>学校名称:{{ name }}</h2>
        <h2>学校地址:{{ address }}</h2>
        <button @click="test">点我调用原型上的hello方法</button>
        <hr>
    </div>
</template>

<script>

export default {
    name: "School",
    data() {
        return {
            name:"尚硅谷",
            address:"北京-昌平",
        }
    },
    methods:{
        //调用原型链上的hello方法
        test(){
            this.hello();
        }
    }
    
}
</script>

<style>
</style>