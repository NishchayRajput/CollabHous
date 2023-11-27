const userInfo = require('../../ecommerce/models/userInfo');
const notification = require('../models/notification');

// Corrected export statement, directly exporting the async function
module.exports = async (req, res) => {
    try {

        // Assuming uId is a valid user ID, find the user using userInfo.findById
        const {uId} = req.body;
        const user = await userInfo.findById(uId);

        res.status(200).json({user});

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error saving interaction: ' + error.message });
    }
};
