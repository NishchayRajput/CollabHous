const jwt = require('jsonwebtoken');
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

    // If the token is valid, you can attach the user data to the request for use in protected routes
    // req.user = user;
    console.log('Token verified');

    // Continue to the next middleware or route handler
    next();
  });
}

module.exports = authenticateMiddleware;
