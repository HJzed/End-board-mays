var express = require('express');
var app = express();
var router = require("./router.js");

app.use("/api",router);

app.listen(3008,function(){
  console.log("服务器运行在3008端口上");
})
