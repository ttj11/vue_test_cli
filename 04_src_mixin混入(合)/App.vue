<template>
    <div>
        <School/>
        <Student/>
    </div>
</template>

<script>
//引入需要的组件
import School from "./components/School";
import Student from "./components/Student"

export default {
    name: "App",
    components: {
        School,
        Student,
    },
}
</script>

<style></style>