const Rentals = require('../models/rentals');



//I believe this paths should be used by admin only. So that he can see all the orders ...
//obviously 
const getRentals = async(req, res)=>{
    try{
        const rentals = await Rentals.find()
            .populate("bookId", ["title"    , "author"] )
            .populate("userId", ["username" , "role"  ] );
        if(rentals){
            return res.status(200).json(rentals);
        }
        else{
            return res.status(500).json({
                message : "No rentals to display"
            })
        }
    }
    catch(error){
        return res.status(500).json({
            message : error.message
        })
    }
}







module.exports = getRentals;







