const jwt = require('jsonwebtoken');

const logout = (req, res) => {
  try {
    // fetch the token from the Authorization/Bearer in the header
    const token = req.headers.authorization.split(' ')[1];
    if (token) {
      // set token expiration to 1 second
      const decodedToken = jwt.verify(token, process.env.tokenPass);
      const newToken = jwt.sign(
        { _id: decodedToken._id, username: decodedToken.username },
        process.env.tokenPass,
        { expiresIn: '1s' }
      );
      return res.status(200).json({ message: 'Logged out successfully', token: newToken });
    } else {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = logout;