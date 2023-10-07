const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages:{
    index:{
      //入口
      entry:"src/main.js"
    }
  },
  transpileDependencies: true,
  lintOnSave:false,//关闭语法检查
  //开启服务器代理（方式一）
 /*  devServer:{
    proxy:"http://localhost:5000"
  }, */
  //开启服务器代理（方式二）
  devServer: {
    proxy: {
      '/atguigu': {
        target: 'http://localhost:5000',
        pathRewrite:{
          "^/atguigu":""
        },
        ws: true,//用于支持websocket
        // changeOrigin: true//用于控制请求头中的host值
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite:{
          "^/demo":""
        },
        ws: true,//用于支持websocket
        // changeOrigin: true//用于控制请求头中的host值
      }
    }
  }
})

/* 
  changeOrigin
        设置为true时，服务器收到的请求头中的host为: localhost:5000
        设置为false时，服务器收到的请求头的host为:  localhost:8080
        
        默认值是false
*/