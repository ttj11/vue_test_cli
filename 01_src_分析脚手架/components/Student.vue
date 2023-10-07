<template>
  <!-- 组件的结构 -->
  <div>
    <h2>学生的名字：{{ studentName }}</h2>
    <h2>学生的年龄：{{ studentAge }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等）
export default{
  name:"Student",
  data() {
    return {
      studentName: "孙悟空",
      studentAge: "20",
    };
  },
  methods: {
    showName() {
      alert(this.studentName);
    },
  },
};

// export default student;
</script>

<style>
/* 组件的样式 */

</style>