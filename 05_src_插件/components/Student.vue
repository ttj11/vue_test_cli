<template>
    <div>
        <h2>学生姓名:{{ name | mySlice }}</h2>
        <h2>学生性别:{{ sex }}</h2>
        <input type="text" v-fbind:value="name">
        <br><br>
        
    </div>
</template>

<script>

export default {
    name: "Student",
    data() {
        return {
            name:"呢孙悟空空世界经济",
            sex:"男",
        }
    }
}
</script>

<style>
</style>