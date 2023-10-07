<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校的名字：{{ schoolName }}</h2>
    <h2>学校的地址：{{ schoolAddress }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等）
export default{
  name:"School",
  data() {
    return {
      schoolName: "尚硅谷",
      schoolAddress: "北京昌平",
    };
  },
  methods: {
    showName() {
      alert(this.schoolName);
    },
  },
};
// export default school;
</script>

<style>
/* 组件的样式 */
.demo{
    background-color: blue;
}
</style>