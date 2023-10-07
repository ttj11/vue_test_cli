<template>
   <div class="bg">
        <h2>学生的姓名：{{ name }}</h2>
        <h2>学生的年龄：{{ age }}</h2>

        <h2>当前的数值为：{{ num }}</h2>
        <button @click="numAdd">点我num+1</button>

        <button @click="sendStudentName">获取学生名</button>
        <button @click="unbind">解绑aaa事件</button>
        <button @click="death">销毁当前student的vc实例对象</button>

   </div>
</template>

<script>
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
        numAdd(){
            console.log("----num+1");
            this.num++
        }, 
        //获取学生名
        sendStudentName(){
            /* $emit的参数
                1.触发的自定义事件
                2.传的参数 
            */
            this.$emit("aaa",this.name)
            // this.$emit("demo",this.name)
        },
        //解绑自定义事件
        unbind(){
            // this.$off("aaa");//解绑一个
            // this.$off(["aaa","demo"]);//解绑多个
            // this.$off();//解绑所有事件
        },
        death(){
            /*  
                销毁了当前Student组件的实例，
                    销毁后所有Student实例自定义事件都不奏效了
                    原生dom事件也不奏效了
            */
            this.$destroy()
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