/**
 * http://www.treejs.cn/v3/main.php#_zTreeInfo
 * zTree v3.5 Demo 演示
 * 异步树的后台
 */
var express = require('express');
var app = express();
var fs = require("fs");
const url = require("url");
var qs=require('querystring');//解析参数的库

app.post('/getNodes', function(req, res) {
	res.header('Access-Control-Allow-Origin', '*');

   var arg=url.parse(req.url).query;
    //把参数转换成键值对，再从中拿值
    var nameValue=qs.parse(arg)['id'];
    //打印出来是价值对
    console.log(qs.parse(arg));
    //打印出来是值
    console.log(nameValue);

    if(nameValue==='01'){
		fs.readFile(__dirname + "/data/" + "ztreeChild.json", 'utf8', function(err, data) {
	        console.log(data);
	        res.end(data);
	    });
    }else{
	   fs.readFile(__dirname + "/data/" + "ztreeFu.json", 'utf8', function(err, data) {
	        console.log(data);
	        res.end(data);
	    });
    }

})

var server = app.listen(8081, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})




















