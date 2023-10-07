<template>
    <div>
        <button @click="allCheck" >全选</button>
        <button @click="reverseCheck" >反选</button>
        <button @click="cancelCheck" >取消</button>
        <button>提交</button>
    </div>
</template>

<script>
export default {
    name: "Bottom",
    methods:{
        //全选
        allCheck(){
            this.$emit("all",true)
        },
        //反选
        reverseCheck(){
            this.$emit("reverse");
        },
        //取消
        cancelCheck(){
            this.$emit("cancel");
        }
    }
}
</script>

<style scoped>
    button{
        margin: 10px;
    }
    button:nth-child(1){
        margin-left: 0;
    }
</style>