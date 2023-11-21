const userInfo = require('../../ecommerce/models/userInfo');
const notification = require('../models/notification');

// Corrected export statement, directly exporting the async function
module.exports = async (req, res) => {
    try {
        // Destructuring uId from req.body if req.body is an object
        const { uId } = req.body;

        if (!uId) {
            // Sending a JSON response when uId is not provided
            res.json({ message: 'Please login first' });
        }
        // Assuming uId is a valid user ID, find the user using userInfo.findById
        const user = await userInfo.findById(uId);
        res.status(200).json({ user, notification });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error saving interaction: ' + error.message });
    }
};
