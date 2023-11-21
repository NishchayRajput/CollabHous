const jwt = require('jsonwebtoken');
const userInfo = require('../../ecommerce/models/userInfo');
require('dotenv').config();

function authenticateMiddleware(req, res, next) {
  // Function to extract the token value from a cookie string
  function extractTokenValue(tokenString) {
    const tokenIndex = tokenString.indexOf('token=');

    if (tokenIndex !== -1) {
      // Extract the substring starting from 'token=' and up to the end of the string
      const tokenValue = tokenString.substring(tokenIndex + 6);
      return tokenValue;
    } else {
      return null; // 'token=' not found in the string
    }
  }

  // Extract the token from the request's cookies
  const token = extractTokenValue(req.headers.cookie);
  // console.log(token);
  // next();
  if (!token) {
    // If no token is provided, return a 401 (Unauthorized) response
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  // Verify the token using your secret key
  jwt.verify(token, process.env.secret, (err, user) => {
    if (err) {
      // If the token is invalid or expired, return a 401 (Unauthorized) response
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
    // console.log(user);
    const existuser = userInfo.findById(user.userId);

    if(existuser){
      console.log('Token verified');
      req.body.uId=  user.userId;
    }
    else{
      console.log('Token not verified');
    }
    // console.log(user.id);
    next();
  });
}

module.exports = authenticateMiddleware;
