var express = require('express');
var app = express();
var mongoose = require('mongoose');
var restaurantModel = require('./models')

app.get('/', function (req, res) {
   res.send('Hello World');
})

var mongoDB = 'mongodb+srv://fbla:codingandprogramming@cluster0.aciwf.mongodb.net/TourismFBLA?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})



