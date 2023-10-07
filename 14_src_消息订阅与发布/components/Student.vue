<template>
   <div class="bg">
        <h2>学生的姓名：{{ name }}</h2>
        <h2>学生的年龄：{{ age }}</h2>
        <button @click="getStuName">把学生的名字给School</button>


   </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: "Student",
    data(){
        return{
            name:"孙悟空",
            age:20,
            num:0
        }
    },
    methods:{
        getStuName(){
            pubsub.publish("hello",this.name)//发布消息
        }
    }

}
</script>

<style scoped>
.bg{
    background-color: rgb(173, 225, 208);
    padding:10px
}
</style>