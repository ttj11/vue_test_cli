<template>
    <div class="contain">
        <Top :bolls="bolls" @allChecked="allChecked"/>
        <List :bolls="bolls"  :oneChecked="oneChecked"/>
        <Bottom 
            @all="allChecked" 
            @reverse="reverseChecked"
            @cancel="cancelChecked"
        />
    </div>
</template>

<script>
//引入需要的组件
import Top from "./components/Top";
import List from "./components/List"
import Bottom from "./components/Bottom"

export default {
    name: "App",
    data(){
        return{
            bolls:[
                {id:"001",type:"篮球",status:true,name:"hobby",idFor:"lq"},
                {id:"002",type:"排球",status:false,name:"hobby",idFor:"pq"},
                {id:"003",type:"足球",status:false,name:"hobby",idFor:"zq"},
                {id:"004",type:"乒乓球",status:true,name:"hobby",idFor:"ppq"},
            ],
        }
    },
    components: {
        Top,
        List,
        Bottom,
    },
    methods:{
        //checkbox单个选中或不选中
        oneChecked(id){
            this.bolls.forEach((bollObj)=>{
                if(bollObj.id === id){
                    bollObj.status = !bollObj.status
                }
            })
        },
        //全部选中或不选中
        allChecked(checked){
            this.bolls.forEach((bollObj)=>{
                bollObj.status = checked;
            })
        },
        //反选
        reverseChecked(checked){
            this.bolls.forEach((bollObj)=>{
                bollObj.status = !bollObj.status;
            })
        },
        //取消全部
        cancelChecked(){
            this.bolls.forEach((bollObj)=>{
                bollObj.status = false;
            })
        }
    },
    watch:{
        "bolls":{
            deep:true,
            handler(){
                /* 
                    reduce参数
                        1. pre是上次执行的返回值
                        2.遍历的数组对象
                */
                const a =this.bolls.reduce((pre,bollObj)=>{
                    return pre+(bollObj.status ? 1 : 0);
                },0);
            }
        }
    }
    
}
</script>

<style>
.contain {
    width: 300px;
    margin: 50px auto;
}
</style>