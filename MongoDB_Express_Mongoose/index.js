var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require("mongoose");
var app = express()
var MongoClient  = require('mongodb').MongoClient
var url = "mongodb:localhost:27107/lab6"
var f_name, l_name, en;

mongoose.connect("mongodb://localhost/lab6");

app.use(bodyParser.urlencoded({ extended: true ,useNewUrlParser: true}))
app.use(express.static('public'));
app.set('view engine', 'ejs')

app.get("/",function(req, res){
    var obj = {Fname:"", Lname:"", Date:""}
	var message="Hello!!"
		res.render("interact",{mess:message,fname: obj.Fname,lname: obj.Lname,en: obj.Date})
})

var dataSchema = new mongoose.Schema({
	Fname:String, 
	Lname:String,
	Date:Date
});
var Enroll_data = mongoose.model("enroll_data",dataSchema);

app.post("/add",function(req, res){
    f_name = req.body.fn;
    l_name = req.body.ln;
    en = req.body.enroll;
    addemp_obj = {Fname:f_name, Lname:l_name, Date: en}
	 console.log(addemp_obj)
	 Enroll_data.create( addemp_obj,

	function(err, enroll_data){
		if(err)
		{
			console.log(err);
		}
		else
		{
			console.log("NEWLY CREATED Volunteer");
			console.log(enroll_data);
		}
	});
	var obj = {Fname:"", Lname:"", Date:""}
	res.render("interact",{mess:"Entry Inserted",fname: obj.Fname,lname: obj.Lname,en: obj.Date})
})

// app.post("/update", function(req,res)
// {
// 	console.log("Inside update " + req.body.fn);
// 	//var db = MongoClient.db("lab6")
// 	MongoClient.connect(url, function (err, db) {
// 		var dbo = db.db("lab6");
// 		if (err) throw err;
// 		var query = { Fname:req.body.fn, Lname:req.body.ln };
// 		var newvalues = { Fname: req.body.fn, Lname: req.body.ln, enroll:req.body.enroll };
// 		console.log("hello")
		
// 		console.log(newvalues)
// 		dbo.collection("enroll_datas").updateOne(query, newvalues, function (err, res) {
// 			if (err) throw err;
// 			console.log("1 document updated");
// 			db.close();
// 		});
// 	});
// 	res.render('interact')
// });

app.post("/update",function(req, res){
	var query = { Fname:req.body.fn };
	Enroll_data.findOneAndUpdate(query, { Lname:req.body.ln,Date:req.body.enroll },{new: true}, function(err, doc){
		if(err){
			console.log("Something wrong when updating data!");
		}
		var obj = {Fname:"", Lname:"", Date:""}
		console.log(doc);
		res.render("interact",{mess:"Entry Updated",fname: obj.Fname,lname: obj.Lname,en: obj.Date})
	})
})

app.post("/delete",function(req, res){
	var query = { Fname:req.body.fn };
	Enroll_data.findOneAndDelete(query, { Lname:req.body.ln,Date:req.body.enroll }, function(err, doc){
		if(err){
			console.log("Something wrong when updating data!");
		}
		var obj = {Fname:"", Lname:"", Date:""}
		console.log(doc);
		res.render("interact",{mess:"Entry Deleted",fname: obj.Fname,lname: obj.Lname,en: obj.Date})
	})
})

app.post("/delete",function(req, res){
	var query = { Fname:req.body.fn };
	Enroll_data.findOneAndDelete(query, { Lname:req.body.ln,Date:req.body.enroll }, function(err, doc){
		if(err){
			console.log("Something wrong when updating data!");
		}
		var obj = {Fname:"", Lname:"", Date:""}
		console.log(doc);
		res.render("interact",{mess:"Entry Deleted",fname: obj.Fname,lname: obj.Lname,en: obj.Date});
	})
})

app.post("/find",function(req, res){
	var query = { Fname:req.body.fn };
	Enroll_data.findOne(query, function(err, obj){
		if(err){
			console.log("Something wrong when updating data!");
		}
		var message=""
		res.render("interact",{mess:message,fname: obj.Fname,lname: obj.Lname,en: obj.Date});
	})	 
})
app.listen(3000, ()=>console.log('Server running at 3000'))