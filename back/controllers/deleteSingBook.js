const Books  = require('../models/books');


const deleteSingBook = async (req, res)=>{
    try{
        const { id } = req.params;
        const bookdeleted   = await Books.findByIdAndDelete(id);

        if(bookdeleted){
            return res.status(200).json({
                message : `Book deleted successfully`
            });
        }
        else{
            return res.status(500).json({
                message : `Couldn't delete the book with id = ${id}`
            })
        }

    }
    catch(error){
        return res.status(500).json({
            message  :  error.message
        })
    }
}





module.exports = deleteSingBook;