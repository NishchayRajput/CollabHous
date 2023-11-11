const mongoose = require('mongoose');

async function like(req, res) {
    try {
        const { uId, bId, iId, it, pId } = req.body;
        if (it == 'unlike') {
            // Delete the interaction with specific details
            await Interaction.deleteOne({
                user_id: uId,
                blog_id: bId,
                interaction_id: iId,
                interaction_type: 'like', // Make sure to match the interaction type
            });

            res.status(200).json({ message: 'Interaction deleted successfully.' });
        }
        else {

            // Create a new Interaction document
            const newInteraction = new Interaction({
                user_id: uId,            // Assuming 'uId' is the user ID
                blog_id: bId,            // Assuming 'bId' is the blog ID
                interaction_id: iId,    // Assuming 'iId' is the interaction ID
                interaction_type: it,  // Assuming 'it' is the interaction type

            });

            // Save the new interaction to the database
            const savedInteraction = await newInteraction.save();

            // Create a new Notifications document
            const newNotification = new Notifications({
                parent_id: pId, // Assuming 'uId' is the parent user ID
                user_id: uId,
                type: it, // You can specify the type for interactions
            });

            // Save the new notification to the database
            const savedNotification = await newNotification.save();

            res.status(200).json(savedInteraction);
        }
    } catch (error) {
        res.status(500).json({ error: 'Error saving interaction: ' + error.message });
    }
}

async function comment(req, res) {
    try {
        const { uId, bId, iId, it, content, pId } = req.body;

        // Create a new Interaction document
        const newInteraction = new Interaction({
            user_id: uId,            // Assuming 'uId' is the user ID
            blog_id: bId,            // Assuming 'bId' is the blog ID
            interaction_id: iId,    // Assuming 'iId' is the interaction ID
            interaction_type: it,  // Assuming 'it' is the interaction type
            interaction_content: content,  // Assuming 'content' is the interaction content
        });

        // Save the new interaction to the database
        const savedInteraction = await newInteraction.save();

        // Create a new Notifications document
        const newNotification = new Notifications({
            parent_id: pId, // Assuming 'uId' is the parent user ID
            user_id: uId,
            type: it, // You can specify the type for interactions
            content: content, // Customize the content as needed
        });

        // Save the new notification to the database
        const savedNotification = await newNotification.save();

        res.status(200).json(savedInteraction);
    } catch (error) {
        res.status(500).json({ error: 'Error saving interaction: ' + error.message });
    }
}
async function reply(req, res) {
    try {
        const { uId, bId, iId, it, content, pId } = req.body;

        // Create a new Interaction document
        const newInteraction = new Interaction({
            user_id: uId,            // Assuming 'uId' is the user ID
            blog_id: bId,            // Assuming 'bId' is the blog ID
            interaction_id: iId,    // Assuming 'iId' is the interaction ID
            interaction_type: it,  // Assuming 'it' is the interaction type
            interaction_content: content,  // Assuming 'content' is the interaction content
        });

        // Save the new interaction to the database
        const savedInteraction = await newInteraction.save();

        // Create a new Notifications document
        const newNotification = new Notifications({
            parent_id: pId, // Assuming 'uId' is the parent user ID
            user_id: uId,
            type: it, // You can specify the type for interactions
            content: content, // Customize the content as needed
        });

        // Save the new notification to the database
        const savedNotification = await newNotification.save();

        res.status(200).json(savedInteraction);
    } catch (error) {
        res.status(500).json({ error: 'Error saving interaction: ' + error.message });
    }

}

module.exports = { like, comment, reply };