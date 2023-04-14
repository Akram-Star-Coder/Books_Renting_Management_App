const jwt = require('jsonwebtoken'); 


const profile = async (req, res)=>{
    try{
        const user = userData;
        if(user){
            console.log("User data "+user);
            return res.status(200).json(user);
        }
        else{
            return res.status(404).json({
                message :! 'error occurred'
            })
        }
    }
    catch(error){
        return res.status(500).json({
            message : error.message
        })
    }
}




module.exports = profile;





