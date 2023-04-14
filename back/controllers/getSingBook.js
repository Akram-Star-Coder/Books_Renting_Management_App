const Books  = require('../models/books');


const getSingBook = async (req, res)=>{
    try{
        //REMARQUE !!===> we putted /:id  ===> So we should pu tbellow id and not bookId
        /*====>id !!!*/const { id } = req.params;
        const book   = await Books.findById( id );

        if(book){
            //not empty 
            return res.status(200).json(book);
        }
        else{
            return res.status(500).json({
                message : `Couldn't find the book with id = ${id}`
            })
        }

    }
    catch(error){
        return res.status(500).json({
            message  :  error.message
        })
    }
}





module.exports = getSingBook;