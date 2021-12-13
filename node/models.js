var mongoose = require("mongoose")

var RestaurantSchema = new mongoose.Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    phone_number: {
        type: String
    },
});

var fun = mongoose.model("fun", RestaurantSchema);
module.exports = fun;