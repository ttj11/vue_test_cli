<template>
    <div>
        <h1 class="title">{{ msg }}</h1>
        <h2>学生姓名:{{ name }}</h2>
        <h2>学生性别:{{ sex }}</h2>
        <h2>学生年龄:{{ myAge }}</h2>
        <button @click="updateAge">修改年龄</button>
    </div>
</template>

<script>
export default {
    name: "Student",
    data() {
        return {
            msg:"我是一个尚硅谷的学生",
            myAge:this.age,
        }
    },
    // props:["name","sex","age"]//简单声明接收

    //接收的同时对数据进行类型限制
    /* props:{
        name:String,
        age:Number,
        sex:String
    } */

    //接收的同时对数据进行类型限制 + 默认值的指定 + 必要性的限制
    props:{
        name:{
            type:String,
            require:true
        },
        age:{
            type:Number,
            default:99
        },
        sex:{
            type:String,
            require:true
        }
    },
    methods:{
        updateAge(){
            console.log(this.age);
            this.myAge++
        }
    }
}
</script>

<style>
.title{
    color: brown;
}
</style>