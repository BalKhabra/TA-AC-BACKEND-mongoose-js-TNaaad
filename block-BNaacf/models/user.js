var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    village: String,
    city: String,
    state: String,
    pin: Number,
    user: ObjectId

    
})

var user = {
    village: kaharpur,
    city: mahilpur,
    state: punjab,
    pin: 2323,
    user: khabra

}