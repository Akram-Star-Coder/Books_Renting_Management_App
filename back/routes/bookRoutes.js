const express        = require('express');
const accessValidate = require('../middlewares/jwtValidate');
const getBooks       = require('../controllers/getBooks'); 
const createBook     = require('../controllers/createBook'); 
const getSingBook    = require('../controllers/getSingBook'); 
const updateSingBook = require('../controllers/updateSingBook'); 
const deleteSingBook = require('../controllers/deleteSingBook'); 



const router  = express.Router();
  
// path => localhost:666/books
router.get('/', getBooks );

// path => localhost:666/books/create
router.post('/create', createBook );

// path => localhost:666/books/:id       <=== To get a single book by id given in params
router.get('/:id', getSingBook );

// path => localhost:666/books/:id  
router.put('/:id', updateSingBook);

// path => localhost:666/books/:id  
router.delete('/:id', deleteSingBook);







module.exports = router;