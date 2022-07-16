var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    email: {type: String, lowercase: true},
    age: Number,
    books: [String],
    grades: [Number]
})