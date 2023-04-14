const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const RentalSchema = Schema({   

    userId : {
        type     : Schema.Types.ObjectId,
        ref      : "Users", 
        required : true  
    },
    bookId : {
        type     : Schema.Types.ObjectId,
        ref      : "Books", 
        required : true
    }
});

module.exports = model('Rentals',RentalSchema);


