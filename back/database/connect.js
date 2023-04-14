const mongoose = require('mongoose');

const connect = async () => {
    try{    
        const connect = await mongoose.connect("mongodb+srv://krimo:krimo@cluster0.xv6enue.mongodb.net/library?retryWrites=true&w=majority");
        console.log("=> Connected to Database");
    }
    catch(error){
        console.log("=> disConnected to Database");
        process.exit(1);
    }

}


module.exports = connect;