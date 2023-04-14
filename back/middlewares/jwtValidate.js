// Middleware for validating JWT token in the Authorization header

const jwt = require('jsonwebtoken');

const accessValidate = (req, res, next) => {
    try { 
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ message: 'Authorization header missing' });
        }
        
        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: 'Token not provided' });
        }


        const userData = jwt.verify(token, process.env.tokenPass);
        if (!userData) {
            return res.status(401).json({ message: 'Incorrect token' });
        }
        else{
            return res.status(200).json(userData);
        }

        next();
    } catch(error) {
        return res.status(500).json({ message: error.message });
    } 
};

module.exports = accessValidate;
