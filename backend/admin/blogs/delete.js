const blogs = require('../../blogs/models/blogs');
const commune = require('../../blogs/models/commune');
const hero = require('../../blogs/models/hero');
const interaction = require('../../blogs/models/interaction');
const notification = require('../../blogs/models/notification');
const userInfo = require('../../ecommerce/models/userInfo');
const adminInfo = require('../models/adminInfo');
const mongoose = require('mongoose');

async function deleteBlogs(req,res){
    const id = req.params.id;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid user ID' });
          }
      
          const updatedUser = await blogs.findByIdAndDelete(id);
      
          
          if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
          }
      
          res.json(updatedUser);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
        }
}
async function deleteCommune(req, res){
    const id = req.params.id;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid user ID' });
          }
      
          const updatedUser = await commune.findByIdAndDelete(id);
      
          
          if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
          }
      
          res.json(updatedUser);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
        }

}
async function deleteHero(req, res){
    const id = req.params.id;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid user ID' });
          }
      
          const updatedUser = await hero.findByIdAndDelete(id);
      
          
          if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
          }
      
          res.json(updatedUser);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
        }

}
async function deleteInteraction(req, res){
    const id = req.params.id;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid user ID' });
          }
      
          const updatedUser = await interaction.findByIdAndDelete(id);
      
          
          if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
          }
      
          res.json(updatedUser);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
        }

}
async function deleteNotification(req, res){
    const id = req.params.id;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid user ID' });
          }
      
          const updatedUser = await notification.findByIdAndDelete(id);
      
          
          if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
          }
      
          res.json(updatedUser);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
        }

}
async function deleteUserinfo(req, res){
    const id = req.params.id;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid user ID' });
          }
      
          const updatedUser = await userInfo.findByIdAndDelete(id);
      
          
          if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
          }
      
          res.json(updatedUser);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
        }

}
async function deleteAdminInfo(req,res){
  const userId = req.params.id;

  try {
      // Find the user by ID and delete
      const deletedUser = await adminInfo.findByIdAndDelete(userId);

      if (!deletedUser) {
          return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while processing your request' });
  }
}
module.exports = {deleteBlogs, deleteCommune, deleteHero, deleteInteraction, deleteNotification, deleteUserinfo, deleteAdminInfo}