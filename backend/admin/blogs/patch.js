const blogs = require('../../blogs/models/blogs');
const commune = require('../../blogs/models/commune');
const hero = require('../../blogs/models/hero');
const interaction = require('../../blogs/models/interaction');
const notification = require('../../blogs/models/notification');
const userInfo = require('../../ecommerce/models/userInfo');
const mongoose = require('mongoose');

async function patchBlogs(req, res){
    const id = req.params.id;
    
    const { title, content , tags,read_time, richTextContent,items } = req.body;
  
    try {
      
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid user ID' });
      }
  

      const updatedUser = await blogs.findByIdAndUpdate(id, { title, content , tags,read_time, richTextContent,items }, { new: true });
  
      
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }

}

async function patchuserInfo(req,res){
    const { id } = req.params; // Assuming you have the user ID in the request parameters
    const { name, email, address } = req.body;
  try {
    // Validaste ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    // Find the user by ID and update all values
    const updatedUser = await userInfo.findByIdAndUpdate(
      id,
      {
        name,
        email,
        address,
      },
      { new: true }
    );

    // Check if the user exists
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function patchNotification(req,res){
    const { id } = req.params; // Assuming you have the notification ID in the request parameters
  const { status } = req.body;

  try {
    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid notification ID' });
    }

    // Find the notification by ID and update the 'status' field
    const updatedNotification = await notification.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    // Check if the notification exists
    if (!updatedNotification) {
      return res.status(404).json({ message: 'Notification not found' });
    }

    res.json(updatedNotification);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function patchInteraction(req,res){
    const { id } = req.params; // Assuming you have the interaction ID in the request parameters
    const { interaction_content } = req.body;
  
    try {
      // Validate ObjectId format
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid interaction ID' });
      }
  
      // Find the interaction by ID and update the 'interaction_content' field
      const updatedInteraction = await interaction.findByIdAndUpdate(
        id,
        { interaction_content },
        { new: true }
      );
  
      // Check if the interaction exists
      if (!updatedInteraction) {
        return res.status(404).json({ message: 'Interaction not found' });
      }
  
      res.json(updatedInteraction);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }   /////////////////////////check this one

async function patchHero(req,res){
    const { id } = req.params; // Assuming you have the hero ID in the request parameters
    const { page, key, value } = req.body;
  
    try {
      // Validate ObjectId format
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid hero ID' });
      }
  
      // Find the hero by ID and update the 'hero_content' field
      const updatedHero = await hero.findByIdAndUpdate(
        id,
        { page, key, value },
        { new: true }
      );
  
      // Check if the hero exists
      if (!updatedHero) {
        return res.status(404).json({ message: 'Hero not found' });
      }
  
      res.json(updatedHero);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

async function patchCommune(req,res){
    const { id } = req.params; // Assuming you have the commune ID in the request parameters
    const { settings, questions, interest } = req.body;
  
    try {
      // Validate ObjectId format
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid commune ID' });
      }
  
      // Find the commune by ID and update the 'commune_content' field
      const updatedCommune = await commune.findByIdAndUpdate(
        id,
        { settings, questions, interest },
        { new: true }
      );
  
      // Check if the commune exists
      if (!updatedCommune) {
        return res.status(404).json({ message: 'Commune not found' });
      }
  
      res.json(updatedCommune);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

async function patchAdminInfo(req,res){
  const userId = req.params.id;
    const { name, email, password } = req.body;

    try {
        // Prepare the update fields
        const updateFields = {};
        
        if (name) {
            updateFields.name = name;
        }

        if (email) {
            updateFields.email = email;
        }

        if (password) {
            // Hash the new password
            const saltRounds = 10;
            updateFields.password = await bcrypt.hash(password, saltRounds);
        }

        // Find the user by ID and update the specified fields
        const updatedUser = await userInfoModel.findByIdAndUpdate(
            userId,
            updateFields,
            { new: true, projection: { password: 0 } }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
}

module.exports = {patchBlogs, patchuserInfo, patchNotification, patchInteraction, patchHero, patchCommune, patchAdminInfo};