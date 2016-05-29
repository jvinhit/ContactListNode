var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
app.use(express.static(__dirname+"/public"));
var bodyParser =require('body-parser');
app.use(bodyParser.json());
// app.get('/', function(req, res){
// 	res.send("vl");
// });
app.get('/contactlist', function(req, res){
	db.contactlist.find(function(err, docs){
		res.json(docs);
	});
	// res.json(contactlist);
});

app.post('/contactlist', function(req, res){
	console.log(req.body);
	db.contactlist.insert(req.body,function(err,docs){
		res.json(docs);
	});
});
app.listen(3000);	
console.log("jserver is running");