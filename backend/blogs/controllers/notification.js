const notification = require('../models/notification');
// const {ObjectId} = require('mongoose');
const mongoose = require('mongoose');
const {ObjectId} = mongoose.Types;


async function update_status(req, res) {
    try {
        const id = req.body.uId;

        // Find notifications based on the parent_id
        const notifidArray = await notification.find({ parent_id: new ObjectId(id) }).select('_id');

        // Check if notifidArray is not empty
        if (notifidArray.length > 0) {
            // Update the status of each notification
            const updatePromises = notifidArray.map(async (notif) => {
                return notification.findByIdAndUpdate(notif, { status: 'read' });
            });

            // Wait for all updates to complete
            await Promise.all(updatePromises);

            res.status(200).json({ success: true, message: 'Notification status updated successfully' });
        } else {
            res.status(404).json({ success: false, message: 'No notifications found for the given user ID' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}

module.exports= update_status;
