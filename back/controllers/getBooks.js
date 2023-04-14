const Books  =  require('../models/books');



const getBooks = async (req, res)=>{
    try{
        const books = await Books.find();
        
        if(books){
            return res.status(200).json(books);
            //the res returns an array of objects [{},{},{}, ..., {}]
        }
        else{
            //no books in database
            return res.status(500).json({
                message : 'Empty database - No books to rent'
            })
        }

    }
    catch(error){
        return res.status(500).json({
            error : error.message
        })
    }
}







module.exports = getBooks;