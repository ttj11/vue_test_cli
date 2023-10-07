<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="changeChecked(todo.id)" />
            <!-- 如下代码也能实现功能，但是不太推荐，因为修改了props -->
            <!-- <input type="checkbox" v-model="todo.done"/> -->

            <span v-show="!todo.isEdit">{{ todo.title }}</span>
            <input 
                type="text" 
                v-show="todo.isEdit" 
                ref="inputTitle"
                :value="todo.title" 
                @blur="handBlur(todo,$event)"
            >
        </label>
        <button class="btn btn-danger" @click="delTodo(todo)">删除</button>
        <button class="btn btn-edit" v-show="!todo.isEdit"  @click="editTodo(todo)">修改</button>
    </li>
</template>

<script>
import pubsub from "pubsub-js"

export default {
    name: "Item",
    //声明接收todo对象
    props: ["todo"],
    methods: {
        //修改勾选
        changeChecked(id) {
            pubsub.publish("checkedTodo", id)
        },
        //删除某个todo
        delTodo(todoObj) {
            pubsub.publish("deleteTodo", todoObj)
        },
        //修改todo名 input框获取焦点
        editTodo(todo) {
            //先判断todo身上有没有isEdit属性，用API hasOwnProperty
            if (todo.hasOwnProperty("isEdit")) {
                //说明isEdit已经在todo身上了，直接修改它的值即可
                todo.isEdit = true;
            }else{
                //往todo里添加isEdit属性来判断是编辑还是不编辑 
                this.$set(todo, "isEdit", true);
            }
            //等下一次DOM更新结束后再来执行这里面的回调
            this.$nextTick(function(){
                console.log(this);
                this.$refs.inputTitle.focus();
            })
        },
        //修改框失去焦点
        handBlur(todo,e) {
            this.todo.isEdit = false;
            if(!e.target.value.trim()) return alert("输入不能为空")
            this.$bus.$emit("updateTodo",todo.id,e.target.value)
        }

    }
}
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover {
    background-color: #ddd;
}

li:hover button {
    display: block;
}

</style>