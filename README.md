#笔记

## 关于不同版本的Vue
 - vue.js与vue.runtime.xxx.js的区别：
    ① vue.js是完整版的Vue，包含：核心功能+模板解析器
    ② vue.runtime.xxx.js是运行版的Vue，只包含：核心功能，没有模板解析器
 - 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用 render函数接收到的createElement函数去指定具体内容

## vue.config.js配置文件
 - 使用vue inspect > putput.js 可以查看到Vue脚手架的默认配置
 - 使用vue.config.js可以对脚手架进行个性化定制，详情见：    https://cli.vuejs.org/zh

## ref属性
    1.被用来给元素或子组件注册引用信息(id的替代者)
    2.应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象(vc)
    3.使用方式：
        打标识：<h1 ref="xxx">...</h1> 或 <School ref="xxx"></School>
        获取：this.$refd.xxx

## 配置项props
    功能：让组件接收外部传过来的数据
        1.传递数据：
            <Demo name="xxx" /> 
        2.接收数据：
            第一种方式(只接收)
                props:["name"]
            第二种方式(限制类型)
                props:{
                    name:String,
                    age:Number
                }
            第三种方式(限制类型、限制必要性、指定默认值)
                props:{
                    name:{
                        type:String,//限制类型
                        required:true,//必要性
                        default:99,//指定默认值
                    }
                }
            备注：
                props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告 ！
                若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据

## mixin(混入)
    功能：可以把多个组件共用的配置提取成一个混入对象
    使用方式：
        第一步定义混合,例如：
            {
                data(){...},
                methods:{...}
                ...
            }
        第二步使用混入，例如：
            1.全局混入：Vue.mixin(xxx)
            2.局部混入：mixins:["xxx"]




## 插件
    功能：
        用于增强Vue
    本质：
        包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用这传递的数据。
    定义插件：
        对象.install = function(Vue,options){
            //1.添加全局过滤器
            Vue.filter("过滤器名",{...})
            //2.添加全局指令
            Vue.directive(...)
            //3.配置全局混入（合）
            Vue.mixin(...)
            //4.添加实例方法
            Vue.prototype.hello = function(){...}
            Vue.prototype.$myProperty = xxx
        }
    使用插件：
        Vue.use()


## scoprd样式
    作用：
        让样式在局部生效，防止冲突
    写法：
        <style scoped>

## 总结TodoList案例
    1.组件化编码流程
        ①拆分静态组件：
            组件要按照功能点拆分，命名不要与html元素冲突
        ②实现动态组件：
            考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：
                - 一个组件在用：放在组件自身即可
                - 一些组件在用：放在他们共同的父组件上(状态提升)
        ③实现交互：从绑定事件开始
    2.props适用于：
        ① 父组件 ==> 子组件 通信
        ② 子组件 ==> 父组件 通信（要求父先给子一个函数）
    3.使用v-model时要切记：
        v-model绑定的值不能是props传过来的值，因为props是不可修改的
    4.props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做

## webStorage  localStorage 和 sessionStorage 统称为webStorage
    1.存储内容大小一般支持5MB左右(不同浏览器可能还不一样)
    2.浏览器端通过 window.sessionStorage 和 window.localStorage属性来实现本地存储机制
    3.相关API：
        1.xxxStorage.setItem("key","value");
            该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值
        2.xxxStorage.getItem("key");
            该方法接受一个键名作为参数，返回键名对应的值
        3.xxxStorage.removeItem("key")
            该方法接受一个键名作为参数，并把该键名从存储中删除
        4.xxxStorage.clear()
            该方法会清空存储中的所有数据
    4.备注：
        1.sessionStorage存储的内容会随着浏览器窗口关闭而消失
        2.localStorage存储的内容，需要手动消除才会消失
        3.xxxStorage.getItem(xxx)如果对应的value获取不到，那么getItem的返回值是null
        4.JSON.parse(null)的结果依然是null
        5.JSON.stringIfy()把一个对象转换为json字符串

## 组件自定义事件
    1.一种组件间通信的方式，适用于： 子组件 -> 父组件
    2.使用场景：
        A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件(事件的回调在A中)
    3.绑定自定义事件：
        ①第一种方式
            - 在父组件中 <Demo @atguigu="test"/> 
                或 
                <Demo v-on:atguigu="test"/>
        ②第二种方式
            在父组件中：
            <Demo ref="demo"/>
                ...
            mounted(){
                this.$refs.xxx.$on("atguigu",this.test)
            }
        ③若想让自定义只能触发一次，可以使用once修饰符，或 $once 方法

    4.触发自定义事件：this.$emit("自定义事件名",数据)
    5.解绑自定义事件：
        this.$off("自定义事件名")  
            解绑单个
        this.$off(["自定义事件名","自定义事件名"])  
            解绑多个
        this.$off()  
            解绑全部
    6.组件上也可以绑定元素DOM事件，需要使用 native 修饰符
    7.注意：
        通过this.$refs.xxx.$on("自定义事件名",回调) 绑定自定义事件时，
            回调要么配置在methods中，要么用箭头函数
            ！！否则this指向会出问题
            - 回调要是用普通函数
                this的指向就是谁调用的就是谁的this

## 全局事件总线(GlobalEventBus)
    1.一种组件间通信的方式，适用于任意 《组件间通信》
    2.安装全局事件总线
        new Vue({
            ...
            beforeCreate(){
                Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
            }
        })
    3.使用事件总线：
        1.接收数据：
            A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身
            methods(){
                demo(data){...}
            }
                ...
            mounted(){
                this.$bus.$on("xxx",this.demo)
            }
        2.提供数据：
            this.$bus.$emit("xxx",数据)
    4.最好在beforeDestroy钩子中，用$off去解绑当前组件所用到的事件

## 消息订阅与发布(pubsub)
    1.一种组件间通信的方式，适用于任意组件间通信
    2.使用步骤：
        ①安装pubsub: npm i pubsub-js
            - 安装报错的话试试下面这个
                npm install pubsub-js@1.6.0 
        ②引入：
            - import pubsub from "pubsub-js"
        ③接收数据：
            A组件想接收数据，则在A组件中订阅消息，订阅的回调留在A组件自身
            methods(){
                demo(msgName,data){...}
            }
                ...
            mounted(){
                this.pid = pubsub.subscribe("xxx",this.demo)//订阅消息
            }
        ④提供数据：
            - pubsub.publish("xxx",数据)
        ⑤最好在beforeDestroy钩子中，用pubsub.unsubscribe(pid)去取消订阅

## $nextTick 等下一次DOM更新结束后再执行其指定的回调
    1.语法
        - this.$nextTick(回调函数)
    2.作用
        - 在下一次DOM更新结束后执行其指定的回调
    3.什么时候用？
        - 当数据发生改变后，要基于更新后的DOM进行其些操作时，
            要在nextTick所指定的回调函数中执行

## Vue封装的过渡与动画
    1.作用：
        - 在插入、更新或移除DOM元素时，在合适的时候给元素添加样式类名
    2.分2大类
        1. enter(进入)
            -  v-enter(进入时的起点)
            -  v-enter-to(进入时的终点)
        2. leave(离开)
            -  v-leave(离开时的起点)
            -  v-leave-to(离开时的终点)
        -  动画的速度
            - v-enter-active{transition: 0.5s linear;}
            - v-leave-active{transition: 0.5s linear;}
    3.写法：
        1.准备好样式：
            - 元素进入的样式
                ① v-enter:进入的起点
                ② v-enter-active:进入过程中
                ③ v-enter-to:进入的终点
            - 元素离开的样式
                ① v-leave:离开的起点
                ② v-leave-active:离开过程中
                ③ v-leave-to:离开的终点
        2.使用<transition>包裹要过渡的元素，并配置name属性
            <transition name="name1">
                <h1 v-show="isShow">你好啊</h1>
            </transition>
        3.备注：
            若有多个元素需要过渡，则需要使用<transition-grounp>
                且每个元素都要指定key值
