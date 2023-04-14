const express        = require('express');
const jwt            = require('jsonwebtoken');
const Users          = require('../models/users'); 
const register       = require('../controllers/register');
const login          = require('../controllers/login');
const accessValidate = require('../middlewares/jwtValidate');
const logout         = require('../controllers/logout');
const profile        = require("../controllers/profile");
const profileInfos   = require('../controllers/profileInfos');
const updateUser     = require("../controllers/updateUser");

const router  = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/profile', accessValidate , profile);


router.get('/profile/:id', profileInfos);


// locaslhost:666/user/logout
router.put('/profile/:id', updateUser);



// locaslhost:666/user/logout
router.get('/logout', logout);

 

module.exports = router;