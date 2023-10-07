<template>
    <!-- v-show="getCount > 0"  总个数大于0显示 -->
    <div class="todo-footer" v-show="getCount > 0">
        <label>
            <input type="checkbox"  v-model="isAllCheck" />
        </label>
        <span>
            <span>已完成{{ doneTotal }}</span> / 全部{{ getCount }}
        </span>
        <button class="btn btn-danger" @click="delDone">清除已完成任务</button>
    </div>
</template>

<script>
import pubsub from "pubsub-js"

export default {
    name: "MyFooter",
    props:["todos"],
    computed:{
        //获取选中的个数
        doneTotal(){
            return this.todos.reduce((pre,todo)=>{
                //pre是函数上次的返回值
                return pre + (todo.done ? 1 : 0)
            },0)
            // console.log("一共",t);
        },
        //获取总个数
        getCount(){
            return this.todos.length
        },
        // 初始化是否全部选中
        isAllCheck:{
            get(){
               return  this.getCount === this.doneTotal 
            },
            //这里的value是布尔值，因为checkbox的返回不是true就是false
            set(value){
                pubsub.publish("isCheckedAll",value)
            }
        }
       
        
    },
    methods:{
        //删除已完成的事项
        delDone(){
            pubsub.publish("delDoneFun")
        }
    }

}
</script>

<style scoped>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>