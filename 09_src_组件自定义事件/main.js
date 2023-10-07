// 引入vue
import Vue from "vue";
//引入App
import App from "./App.vue";
//引入插件
// import plugins from "./plugins";

//关闭vue的生产提示
Vue.config.productionTip = false;

//应用(使用)插件
// Vue.use(plugins);

//创建vm
new Vue({
    el:"#app",
    render:(h)=>{
        return h(App)
    },
    //vm挂载后
    mounted(){
        /* //3秒后vm被自动销毁
        setTimeout(() => {
            this.$destroy();
        }, 3000); */
    }
})