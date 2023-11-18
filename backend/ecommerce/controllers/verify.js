const jwt = require('jsonwebtoken');
require('dotenv').config();
const userInfo = require('../models/userInfo');

async function tokenValidationMiddleware(req, res) {
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

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Token not found' });
    }

    jwt.verify(token, process.env.secret, async (err, user) => {
        if (err) {
            // If the token is invalid or expired, return a 401 (Unauthorized) response
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }

        try {
            // Use await here to wait for the result of the asynchronous operation
            const existuser = await userInfo.findById(user.userId);

            if (existuser) {
                req.body.uId = user.userId;
                res.status(200).json({ message: 'Token verified' });
                // next(); // Continue with the next middleware or route handler
            } else {
                res.status(401).json({ message: 'Unauthorized: Token not verified' });
            }
        } catch (error) {
            console.error('Error while verifying user:', error);
            res.status(500).json({ error: 'An error occurred while processing the request' });
        }
    });
}

module.exports = tokenValidationMiddleware;
