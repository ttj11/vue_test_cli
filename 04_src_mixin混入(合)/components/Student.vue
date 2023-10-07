<template>
    <div>
        <h2 @click="showName">学生姓名:{{ name }}</h2>
        <h2>学生性别:{{ sex }}</h2>
    </div>
</template>

<script>
//引入一个混合
import {hunhe} from "../mixin";

export default {
    name: "Student",
    data() {
        return {
            name:"孙悟空",
            sex:"男",
        }
    },
    //使用hunhe,这里的 mixins 要加 s 
    mixins:[hunhe]
}
</script>

<style>
</style>