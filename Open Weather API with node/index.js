var express = require('express')
var parser = require('body-parser')
const request = require('request');
var app = express()

app.use(parser.urlencoded({extended:false}));
app.set("view engine","ejs")
var city
var message = ""
var weather

app.get("/",function(req, res){
    //res.sendFile(__dirname + "/input.html");
    res.render('input',{mess:message})
})
app.post("/input1",function(req, res){
    city = req.body.city
    console.log(city)
    var apiKey = 'add your API key here';
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    request(url, function (err, response, body) {
    if(err){
        console.log('error:', error);
    } else {
        console.log('body:', body);
        weather = JSON.parse(body)
        message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        res.render("input",{mess:message})
        console.log(message);
    }
    }) 
    
    
})
app.listen(3000,()=> console.log("App running on 3000"))