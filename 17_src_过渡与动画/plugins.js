export default{
    install(Vue){
        //全局过滤器  只要名字前4位
        Vue.filter("mySlice",function(value){
            return value.slice(0,4)
        })
        //定义全局指令 并且input框自动获取焦点
        Vue.directive("fbind",{
            //指令与元素成功绑定时(一上来)
            bind(element,binding){
                element.value = binding.value.slice(0,4);
            },
            //指令所在元素被插入页面时
            inserted(element,binding){element.focus();},
            //指令所在的模板被重新解析时
            update(element,binding){}
        })
        //定义混入
        Vue.mixin({
            data() {
                return {
                    x:100,
                    y:200
                }
            },
        });

        //给Vue原型上添加一个方法(vm和vc就都能调用了)
        Vue.prototype.hello = ()=>{
            alert("hello")
        }

    }
}

// export default obj;