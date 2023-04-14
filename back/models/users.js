const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const UserSchema = Schema({
    username : {
        type     : String, 
        required : true, 
        trim     : true
    },
    email : {
        type     : String, 
        required : true, 
        unique   : true, 
        trim     : true 
    },
    password : {
        type     : String, 
        required : true 
    },
    //role means what are the types of rights the user have in this application which means user or admin
    role :{
        type     : String, 
        required : true, 
        enum     : ["User", "Admin"],
        default  : "User"
    },
    favoriteBooks: {
        type     : Array, 
        default  : [], 
        ref      : "Books"
    }, 
    rentedBooks  : {
        type     : Array, 
        default  : [], 
        ref      : "Books"
    } 

});

module.exports = model('Users',UserSchema);




