var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    namr: String,
    email: {type: String, lowercase: true},
    age: Number,
    books: [String],
    grades: [Number]
})

