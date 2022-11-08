//导入包
const express = require('express');
const cors = require('cors');
//创建
const app = express();
//解决跨域,支持全局
app.use(cors());
//连接
app.listen(3007, function () {
    console.log('sucess,127.0.0.1');
})
//配置解析表单数据的中间件,注意只能解析x-www-from-urlencoded格式的表单数据
app.use(express.urlencoded({ extends: false }))

//导入并注册用户路由模块
const userRouter = require('./router/user')
app.use('./api', userRouter)