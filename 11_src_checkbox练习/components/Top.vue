<template>
    <div>
        <label>请选择的爱好：
            <input type="checkbox" v-model="isEquality" />全选
        </label>
    </div>
</template>

<script>
export default {
    name: "Top",
    props: ["bolls"],
    methods: {
    },
    computed: {
        //总长度
        getCkeckCount(){
            return this.bolls.length;
        },
        //选中的长度
        isAllCheck(){
                return this.bolls.reduce((pre,bollObj)=>{
                    return pre + (bollObj.status === true ? 1 : 0 )
                },0)
        },
        /* 
            全选 or 反选  
            bolls长度和选中的长度是否一致，要是一致就返回true选择 

        */
        isEquality:{
            get(){
                return  this.isAllCheck === this.getCkeckCount
            },
            set(val){
                console.log(val);
                this.$emit("allChecked",val)
            }
            
        }

    }
}
</script>

<style scoped></style>