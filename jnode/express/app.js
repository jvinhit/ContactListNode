var express = require("express");
var app= express();
var server = require("http").createServer(app);

server.listen(3000);

// app.get("/",function(req, res){
// 	// res.send("<b>Vinh dep trai</b>");
// 	res.sendFile(__dirname +"/index.html");
// });


app.get('/tinhtong/:so1/:so2', function(req, res){
	var n= parseInt(req.params.so1);
	var m= parseInt(req.params.so2);

	var tong = n + m;
	res.send("<h1>" + tong + "</h1>");

});