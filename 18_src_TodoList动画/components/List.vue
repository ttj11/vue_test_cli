<template>
    <ul class="todo-main">
        <transition-group appear name="todo">
            <Item 
                v-for="todoObj in todos" 
                :key="todoObj.id" 
                :todo="todoObj"
            />
        </transition-group>
        
    </ul>
</template>

<script>
import Item from "./Item"

export default {
    name: "List",
    components: {
        Item,
    },
    props:["todos"],
}
</script>

<style scoped>
/*main*/
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
/* 动画效果 */
.todo-enter-active{
    animation: ttj .2s linear;
}
.todo-leave-active{
    animation: leaveAnimation .2s linear reverse;
}
/* 进入效果 */
@keyframes ttj {
    from{
        transform: translateY(-40px);
    }
    to{
        transform: translateY(0);
    }
}
/* 离开效果 */
@keyframes leaveAnimation {
    from{
        transform: translateX(100px);
    }
    to{
        transform: translateX(0);
    }
}
</style>