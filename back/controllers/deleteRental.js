const Rentals = require('../models/rentals');


const deleteRental = async (req, res)=>{

    try{
        const {id} = req.params;
        //checking if the rental exist or not 
        const rentalDeleted = await Rentals.findByIdAndDelete(id);
        if(rentalDeleted){  
            return res.status(200).json({
                message : "Rental deleted successfully"
            })
        }
        else{
            return res.status(500).json({
                message : "Couldn't delete the rental"
            })
        }


    }
    catch(error){
        return res.status(500).json({
            message : error.message
        })
    }

}





module.exports  = deleteRental;








