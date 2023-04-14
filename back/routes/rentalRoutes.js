const express        =  require('express');
const accessValidate =  require('../middlewares/jwtValidate');
const getRentals     =  require("../controllers/getRentals");
const createRental   =  require('../controllers/createRental');
const getSingRental  =  require('../controllers/getSingRental');
const updateRental   =  require('../controllers/updateRental');
const deleteRental   =  require('../controllers/deleteRental');


const router = express.Router();


// path => localhost:666/rental
//function : get All rentals
router.get('/', getRentals);

//function : get single rental
// path => localhost:666/rental/id
router.get('/:id', getSingRental);

// path => localhost:666/rental/create
router.post('/create', createRental);

// path => localhost:666/rental/id
router.put('/:id', updateRental);

// path => localhost:666/rental/id
router.delete('/:id', deleteRental);







module.exports = router;