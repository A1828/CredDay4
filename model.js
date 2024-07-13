// importing mongoose
var mongoose = require("mongoose");
// schema creation
var schema = mongoose.Schema({
    sname :String,
    age:Number,
    place:String
})

//model creation
var crud = mongoose.model("sample",schema)

//exporting
module.exports =crud
