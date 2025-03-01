const jwt = require('jsonwebtoken');
require('dotenv').config();
const userInfo = require('../models/userInfo');

// Middleware for validating JWT token in the request
async function tokenValidationMiddleware(req, res) {
    // Function to extract the value of the 'token' from the cookie header
    function extractTokenValue(tokenString) {
        if (tokenString && typeof tokenString === 'string') {
            const tokenIndex = tokenString.indexOf('token=');

            if (tokenIndex !== -1) {
                const tokenStartIndex = tokenIndex + 6;
                const tokenEndIndex = tokenString.indexOf(';', tokenStartIndex);
                const tokenValue = tokenEndIndex !== -1
                    ? tokenString.substring(tokenStartIndex, tokenEndIndex)
                    : tokenString.substring(tokenStartIndex);

                return tokenValue;
            } else {
                return null; // 'token=' not found in the string
            }
        } else {
            return null; // Handle the case where tokenString is undefined or not a string
        }
    }

    // Extract the token from the request's cookies
    const token = extractTokenValue(req.headers.cookie);

    // If the token is not found, return a 401 (Unauthorized) response
    if (!token) {
        return res.status(200).json({ message: 'User not logged in' });
    }

    // Verify the JWT token
    jwt.verify(token, process.env.secret, async (err, user) => {
        if (err) {
            // If the token is invalid or expired, return a 401 (Unauthorized) response
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }

        try {
            // Use await here to wait for the result of the asynchronous operation
            const existuser = await userInfo.findById(user.userId);

            // Check if the user exists in the database
            if (existuser) {
                res.status(200).json({ message: 'Ok' });
            } else {
                res.status(401).json({ message: 'NOT OK' });
            }
        } catch (error) {
            // Handle any errors that occur during the verification process
            console.error('Error while verifying user:', error);
            res.status(500).json({ error: 'An error occurred while processing the request' });
        }
    });
}

// Export the middleware function for use in other modules
module.exports = tokenValidationMiddleware;
