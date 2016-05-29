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
app.delete('/contactlist/:id', function(req, res){
	var id = req.params.id;
	console.log('node server listen delete contact with id :' + id);
	db.contactlist.remove({_id:mongojs.ObjectId(id)}, function(err,docs){
		res.json(docs);
	});
});

app.get('/contactlist/:id', function(req, res){
	var id = req.params.id;
	console.log('edit contact with id : ' + id);
	db.contactlist.findOne({_id: mongojs.ObjectId(id)} , function(err, docs){
		res.json(docs);
	});
});
app.put('/contactlist/:uid', function(req, res){
	var id = req.params.uid;
	db.contactlist.findAndModify({query:{_id:mongojs.ObjectId(id)}, 
		update:{
			$set:{
				name:  req.body.name,
				email:req.body.email,
				number: req.body.number
			}
		},
		new : true
	}, function(err, docs){
		res.json(docs);
	});
});
app.listen(3000);	
console.log("jserver is running");