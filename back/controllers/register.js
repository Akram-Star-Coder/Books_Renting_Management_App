const Users    = require('../models/users');
const bcrypt   = require('bcrypt');


const register = async (req, res)=>{
    try{
        const {username, email, password} = req.body;
        /*
        Now we'll get this data : 
        {
            "username" : "Akram", 
            "email"    : "basri2001@gmail.com", 
            "password" : "1966"
        }
        */
       //checking if email is unique
       const isFound = await Users.findOne({email});
       if(isFound){
        //user found => not unique => STOP 
        return res.status(500).json({
            message : 'Please provide a unique email'
        })
       }
       else{
        //otherwise user not found => unique => we hash the password
        if(password){
            //password is not empty 
            //we hash it
            const hashedPassword = await bcrypt.hash(password, 10);
            //creating a new user 
            const newUser = await new Users({
                username, 
                email, 
                password : hashedPassword
            });
            newUser.save();
            return res.status(200).json(newUser);
            console.log('User created')
        }
        else{
            return res.status(500).json({
                message : "Empty Password"
            })
        }
       }


    }catch(error){
        return res.status(500).json({
            message1 : error.message, 
            message2 : "Could not create user"
        })
    }
}

module.exports = register