const Rentals = require('../models/rentals');


const updateRental = async (req, res)=>{

    try{
        //id should be the same as id syntactly in path 
        //fetching data
        const {id} = req.params;
        const data = req.body;

        const updatedRental = await Rentals.findByIdAndUpdate(id, data, {new : true});
        if(updatedRental){
            return res.status(200).json(updatedRental);
        }
        else{
            return res.status(500).json({
                message  : "Couldn't update the rental"
            })
        }
    }
    catch(error){
        return res.status(500).json({
            message : error.message
        })
    }



}








module.exports = updateRental;








