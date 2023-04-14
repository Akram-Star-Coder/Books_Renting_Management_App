const Users  = require('../models/users');


const profileInfos = async (req, res)=>{
    try{
        //REMARQUE !!===> we putted /:id  ===> So we should pu tbellow id and not bookId
        /*====>id !!!*/const { id } = req.params;
        const user   = await Users.findById( id );

        if(user){
            //not empty 
            return res.status(200).json(user);
        }
        else{
            return res.status(500).json({
                message : `Couldn't find the user with id = ${id}`
            })
        }

    }
    catch(error){
        return res.status(500).json({
            message  :  error.message
        })
    }
}





module.exports = profileInfos;