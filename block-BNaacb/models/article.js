var mongoose = require ('mongoose')
var Schema = require ('schema');

var userSchema = new Schema ({
    name: String,
    age: Number
})