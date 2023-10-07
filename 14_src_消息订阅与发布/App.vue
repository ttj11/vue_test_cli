<template>
    <div class="main">
        <h1>{{ msg }}</h1>
        <School/>
        <Student  />
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
    data() {
        return {
            msg: "你好啊~~",
        }
    }
}
</script>

<style>
.main {
    background-color: #b89b9b;
    padding: 10px;
}

h1 {
    text-align: center;
}
</style>