var mongoose = require('mongoose');
var restaurantModel = require('./models')

var mongoDB = 'mongodb+srv://fbla:codingandprogramming@cluster0.aciwf.mongodb.net/TourismFBLA?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

restaurant_data = {
    "name":"Burnside Plantation",
    "address":"1461 Schoenersville Rd, Bethlehem, PA 18018",
    "phone_number":"(610) 882-0450"
}

var fun = new restaurantModel(restaurant_data);
fun.save()
.then(() => {
    console.log("saving data to mongo")
    mongoose.disconnect()
}
);


