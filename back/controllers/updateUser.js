const Users = require('../models/users');
const Books = require('../models/books');

const updateUser = async(req, res)=>{
    try{

        const {id} = req.params;
        const body = req.body;
        //now we update the data 
        const updatedUserU = await Users.findByIdAndUpdate(id,body );
        if(updatedUserU){
            return res.status(200).json(updatedUserU);
        }
        else{
            return res.status(500).json({
                message : "User Not Updated"
            })
        }
    }
    catch(error){
        return res.status(500).json({
            message : error.message
        })
    }
}



module.exports = updateUser;


