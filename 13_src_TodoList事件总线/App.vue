<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <MyHeader @add="addTodo"/>
            <List :todos="todos"/>
            <MyFooter :todos="todos"/>
        </div>
    </div>
</template>

<script>
//引入需要的组件
import MyHeader from "./components/MyHeader";
import List from "./components/List"
import MyFooter from "./components/MyFooter"

export default {
    name: "App",
    components: {
        MyHeader,
        List,
        MyFooter,
    },
    data() {
        return {
            todos: JSON.parse(localStorage.getItem("todos")) || [],
        }
    },
    methods: {
        //添加一个todo
        addTodo(todoObj) {
            // console.log("我是app组件，我收到你的信息",x);
            this.todos.unshift(todoObj);
        },
        //勾选 or 取消勾选
        checkedTodo(id) {
            //遍历todos
            this.todos.forEach((todo) => {
                //如果传进来的id和遍历的id一致就把data里的数据取反
                if (id === todo.id) {
                    todo.done = !todo.done
                }
            })
        },
        //删除某个todo
        deleteTodo(todoObj) {
            if (confirm(`您确定要删除【${todoObj.title}】吗?`)) {
                //filter是返回一个新的数组，不改变原数组,所以要重新赋值
                this.todos = this.todos.filter((todo) => {
                    return todo.id !== todoObj.id
                })
            }
        },
        //底部是否全选和全不选
        isCheckedAll(check) {
            this.todos.forEach((todo) => {
                todo.done = check
            })
        },
        //删除已完成的事项
        delDoneFun() {
            if (confirm("确定删除已完成的任务吗?")) {
                return this.todos = this.todos.filter((todo) => {
                    return todo.done !== true;
                })
            }
        }


    },
    //监视todos 只要todos一发生变化就重新给localStorage.setItem更新数据
    watch:{
        "todos":{
            //开启深度监视，如果没有开只会浅监视
            deep:true,
            handler(nowVal,oldVal){
                // 修改了
                localStorage.setItem("todos",JSON.stringify(nowVal))
            }
        }
    },
    mounted(){
        this.$bus.$on("checkedTodo",this.checkedTodo)
        this.$bus.$on("deleteTodo",this.deleteTodo)
    },
    beforeDestroy(){
        //在组件被销毁之前给 $bus里的绑定的事件解绑
        this.$bus.$off(["checkedTodo","deleteTodo"])
    }
}
</script>

<style>
/*base*/
body {
    background: #fff;
}

.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn:focus {
    outline: none;
}

.todo-container {
    width: 600px;
    margin: 0 auto;
}

.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>