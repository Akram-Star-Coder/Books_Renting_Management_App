const Books = require('../models/books');
  

const createBook = async (req, res)=>{
    try{
        //we'll fetch a data like this : 
        /*
        {
            "title"   : "The Lord Of Rings", 
            "author"  : "Keller.J Serge", 
            "genre"   : ["Action", "Adventure", "Drama", "Horror"], 
            "image"   : "https/exemple...",
            "pages"   : 523
        }
        */
       const data = req.body;
       //creating the book
       const newBook = await Books.create(data);
       if(newBook){
        //it has been created successfully ..
        return res.status(200).json(newBook);
       } 
       else{
        return res.status(500).json({
            message  : "Book hasn't been created"
        })
       }
        
    }
    catch(error){
        return res.status(500).json({
            message : error.message
        })
    }
}






module.exports = createBook;