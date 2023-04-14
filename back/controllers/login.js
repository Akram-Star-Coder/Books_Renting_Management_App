const jwt      = require('jsonwebtoken');
const Users    = require('../models/users');
const bcrypt   = require('bcrypt');


const login = async (req, res)=>{

    const tokenPass = process.env.tokenPass;
    
    try{

        /*
        We'll fetch data which looks like this 
        {
            "email"    : "elbasria31@gmail.com", 
            "password" : "basri2001"
        }
        */

        const {email, password} = req.body;
        //verification if the user exists or not 
        const isFound  = await Users.findOne({email});
        if(isFound){
            //user exists => continue checking of password => creating jwt..
            const isPasswordsMatche = await bcrypt.compare(password, isFound.password);
            if(isPasswordsMatche){
                //the passwords matche then we create a json web token and send it to the front end team developper
                
                //creation of the jwt
                const token = jwt.sign(
                    //first arg contain the user informations 
                    {
                        _id      : isFound._id, 
                        username : isFound.username 
                    }, 
                    //the second arg contain the password of the token 
                    tokenPass, 
                    {
                        expiresIn : "7h"
                    }
                )
                //we always send the token in the json file 
                
                return res.status(200).json(token);

            }
            else{
                //otherwise 
                return res.status(500).json({
                    message : "Passwords doesn't match"
                })
            }
        }
        else{
            return res.status(500).json({
                message : "User not found"
            })
        }


    }catch(error){
        return res.status(500).json({
            message1 : error.message, 
            message2 : "Could not login" 
        })
    }
}


module.exports = login;