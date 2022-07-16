var mongoose = require ('mongoose')
var Schema = require ('schema');

var userSchema = new Schema ({
    name: String,
    email: { type: String, lowercase: true},
    age: { type: Number, default: 0}
})

