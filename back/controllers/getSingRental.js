const Rentals = require('../models/rentals');


const getSingRental = async(req, res)=>{
    try{
        //we gonna fecth the id from params 
        const {id} = req.params;
        const Singlerental = await Rentals.findById(id)
            .populate("bookId", ["title"    , "author"] )
            .populate("userId", ["username" , "email"  ] );
        if(Singlerental){
            return res.status(200).json(Singlerental);
        }
        else{
            return res.status(500).json({
                message : `Could not find the rental with the id ${id}`
            })
        }
        
    }
    catch(error){
        return res.status(500).json({
            message : error.message
        })
    }
}




module.exports = getSingRental;



