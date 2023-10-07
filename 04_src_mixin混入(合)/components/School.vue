<template>
    <div>
        <h2 @click="showName">学校名称:{{ name }}</h2>
        <h2>学校地址:{{ address }}</h2>
        <hr>
    </div>
</template>

<script>
//引入一个混合
import {hunhe} from "../mixin"

export default {
    name: "School",
    data() {
        return {
            name:"尚硅谷",
            address:"北京-昌平",
        }
    },
    //使用hunhe,这里的 mixins 要加 s 
    mixins:[hunhe]
}
</script>

<style>
</style>