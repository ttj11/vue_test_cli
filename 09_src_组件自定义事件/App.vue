<template>
    <div class="main">
        <h1>{{ msg }}{{ studentName }}同学</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName"/>

        <!-- 通过父组件给子组件绑定一个自定义事件实现： 子给父传递数据 (第一种写法，使用 @ 或 v-on)-->
        <!-- <Student @aaa="getStudentName" @demo="m1" /> -->

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法，使用 ref) -->
        <Student ref="student"/>
    </div>
</template>

<script>
//引入需要的组件
import Student from "./components/Student";
import School from "./components/School";

export default {
    name: "App",
    components: {
        School,
        Student,
    },
    data(){
        return{
            msg:"你好啊~~",
            studentName:"",
        }
    }, 
    methods:{
        //是以props接收方式传递
        getSchoolName(name){
            // console.log("我得到了学校名",name);
            alert("我得到了学校名~ "+name)
        },
        getStudentName(name){
            // alert("我得到了学生名~ "+name);
            console.log("学生名",name);
            this.studentName = name;
        },
        m1(){
            console.log("demo事件被触发了");
        }
    },
    mounted(){
        // $once只执行一次
        // this.$refs.student.$once("aaa",this.getStudentName)
        this.$refs.student.$on("aaa",this.getStudentName)
    }

}
</script>

<style>
    .main{
        background-color: #b89b9b;
        padding: 10px;
    }
    h1{
        text-align: center;
    }
</style>