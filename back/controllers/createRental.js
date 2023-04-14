const Rentals = require('../models/rentals');
const Books   = require('../models/books');
const Users   = require('../models/users');

const createRental = async (req, res)=>{

    try{

        //fetching data from the body 
        const dataRentalToCreate = req.body;
        
        //checking if user id exists and also book id
        const userId = dataRentalToCreate.userId;
        const bookId = dataRentalToCreate.bookId;

        const user  = await Users.findById(userId);
        const book  = await Books.findById(bookId);        

        if(user){
            //if user exist and 
            if(book){
                //book exist
                const newRental  = await Rentals.create(dataRentalToCreate);
                if(newRental){
                    return res.status(200).json(newRental);
                }
                else{
                    return res.status(500).json({
                        message : "Could not rent"
                    })
                }
            }
            else{
                return res.status(500).json({
                    message : "Book Not Found"
                })
            }
        }
        else{
            return res.status(500).json({
                message : "User Not Found"
            })
        }

    
    }
    catch(error){
        return res.status(500).json({
            message : error.message
        })
    }

}





module.exports  = createRental;







