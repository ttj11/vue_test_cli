<template>
    <div>
        <Student name="猪八戒" sex="男" :age=22 />
    </div>
</template>

<script>
//引入需要的组件
import Student from "./components/Student";

export default {
    name: "App",
    components: { Student },
}
</script>

<style></style>