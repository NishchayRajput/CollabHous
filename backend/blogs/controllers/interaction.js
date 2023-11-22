const Interaction = require('../models/interaction');
const Notifications = require('../models/notification');
const Blog = require('../models/blogs');

async function like(req, res) {
    try {
        
        const { uId, bId, iId, it, pId } = req.body;
        console.log(req.body);
        if (!it) {
            // Delete the interaction with specific details
            await Interaction.deleteOne({
                user_id: uId,
                blog_id: bId,
                interaction_id: iId,
                interaction_type: 'like',
            });
            console.log('1');
            await Notifications.deleteOne({
                parent_id: pId,
                blog_id: bId,
                user_id: uId,
                type : 'like',
            });
            console.log('2');
            // Decrease the 'like' count of the blog by 1
            await Blog.findByIdAndUpdate(bId, { $inc: { like: -1 } });
            console.log('3');
            res.status(200).json({ message: 'Interaction deleted successfully.' });
        } 
        if(it) {
          console.log('1');
            // Create a new Interaction document
            const newInteraction = new Interaction({
                user_id: uId,
                blog_id: bId,
                interaction_id: iId,
                interaction_type: it,
            });
            
            console.log('2');
            // Save the new interaction to the database
            const savedInteraction = await newInteraction.save();
            console.log('3');
            // Increase the 'like' count of the blog by 1
            await Blog.findByIdAndUpdate(bId, { $inc: { like: 1 } });
            console.log('4');
            // Create a new Notifications document
            const newNotification = new Notifications({
                parent_id: pId,
                user_id: uId,
                blog_id: bId,
                type: it,
            });
            console.log('5');
            // Save the new notification to the database
            const savedNotification = await newNotification.save();
            
            res.status(200).json({savedInteraction, newNotification});
        }
        // console.log('1');
    } catch (error) {
        res.status(500).json({ error: 'Error saving interaction: ' + error.message });
    }
}


async function comment(req, res) {
    try {
        const { uId, bId, iId, it, content, pId } = req.body;
        
        
        if(it == 'comment')
        {
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
                blog_id: bId,
                type: it, // You can specify the type for interactions
                content: content, // Customize the content as needed
            });
    
            // Save the new notification to the database
            const saveNotification = await newNotification.save();
            
            res.status(200).json(savedInteraction);
            
        }
        else if(it == 'deletecomment')
        {
            // Delete the interaction with specific details
            await Interaction.deleteOne({
                user_id: uId,
                blog_id: bId,
                interaction_id: iId,
                interaction_type: 'comment',
            });
            
            await Notifications.deleteOne({
                parent_id: pId,
                blog_id: bId,
                user_id: uId,
                type : 'comment',
            });
            
            res.status(200).json({ message: 'Interaction deleted successfully.' });
        }else if(it == 'editcomment')
        {
            // Delete the interaction with specific details
            await Interaction.deleteOne({
                user_id: uId,
                blog_id: bId,
                interaction_id: iId,
                interaction_type: 'comment',
            });
            
            await Notifications.deleteOne({
                parent_id: pId,
                blog_id: bId,
                user_id: uId,
                type : 'comment',
            });
            
            // Create a new Interaction document
            const newInteraction = new Interaction({
                user_id: uId,            // Assuming 'uId' is the user ID
                blog_id: bId,            // Assuming 'bId' is the blog ID
                interaction_id: iId,    // Assuming 'iId' is the interaction ID
                interaction_type: 'comment',  // Assuming 'it' is the interaction type
                interaction_content: content,  // Assuming 'content' is the interaction content
            });
            
            // Save the new interaction to the database
            const savedInteraction = await newInteraction.save();
            
            // Create a new Notifications document
            const newNotification = new Notifications({
                parent_id: pId, // Assuming 'uId' is the parent user ID
                user_id: uId,
                blog_id: bId,
                type: 'comment', // You can specify the type for interactions
                content: content, // Customize the content as needed
            });
    
            // Save the new notification to the database
            const savedNotification = await newNotification.save();
            
            res.status(200).json(savedInteraction);
        }
        
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
            blog_id: bId,
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