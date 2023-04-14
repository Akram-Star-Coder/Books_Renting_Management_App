const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const BookSchema = Schema({

    title : {
        type     : String, 
        required : true 
    },
    author : {
        type     : String, 
        required : true 
    },
    genre : {
        type     : Array,
        default  : [], 
        required : true 
    },
    image : {
        type     : String, 
        required : true 
    },
    pages : {
        type     : Number, 
    },
    isRent: {
        type: Boolean,
        default: false
    }
});

module.exports = model('Books',BookSchema);


