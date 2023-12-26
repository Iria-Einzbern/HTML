const express = require("express");
var bodyParser = require('body-parser');
var cors = require('cors');



//新建searchServer实例
var expressApp = express();
//新建json解析器
var jsonParser = bodyParser.json();
//使用cors中间件
expressApp.use(cors());

expressApp.get('/idEcho',function(req,res){
    const id = req.query.id;
    console.log(id);
    res.json("你选择了第"+id+"页");
})

expressApp.post('/hello',express.json(),function(req,res){
    console.log(req.body.name);
    usrname = req.body.name;
    res.json("Hello,"+usrname);
})



var server = expressApp.listen(22222,function(){
    console.log("express多路由服务器已启动 端口22222")
})