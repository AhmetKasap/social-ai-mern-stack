const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {type : String, required : true, trim:true},
    lastname : {type : String, required : true, trim:true}, 
    email : {type : String, required : true, trim:true, unique:true},
    username : {type : String, trim:true, unique:true},
    explanation : {type : String, trim:true},
    password : {type : String, required : true, trim:true}

},{
    timestamps:true,
   
})

const User = mongoose.model('USERS', userSchema)

module.exports = User