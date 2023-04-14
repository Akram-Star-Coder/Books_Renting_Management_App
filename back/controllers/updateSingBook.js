const Books  = require('../models/books');


const updateSingBook = async (req, res)=>{
    try{
        //fetch data dorm req.body 

        const { id } = req.params;
        const updatedBook   = await Books.findByIdAndUpdate(id, req.body, {new : true});

        if(updatedBook){
            return res.status(200).json(updatedBook);
        }
        else{
            return res.status(500).json({
                message : `Couldn't update the book with id = ${id}`
            })
        }

    }
    catch(error){
        return res.status(500).json({
            message  :  error.message
        })
    }
}





module.exports = updateSingBook;