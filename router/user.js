//创建用户路由模块

//导入
const express = require('express');
//创建路由实例对象router,将路由挂在实例上，然后暴露出去，方便了管理
const router = express.Router();
//挂载注册新用户路由
router.post('/reguser', (req, res) => {
    res.send('reguser OK');
})
//挂载登录路由
router.post('/login', (req, res) => {
    res.send('login OK');
})
//将路由对象暴露出去
module.exports = router;