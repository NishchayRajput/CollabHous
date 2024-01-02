const blogs = require('../../blogs/models/blogs');
const commune = require('../../blogs/models/commune');
const hero = require('../../blogs/models/hero');
const interaction = require('../../blogs/models/interaction');
const notification = require('../../blogs/models/notification');
const userInfo = require('../../ecommerce/models/userInfo');

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
module.exports = {deleteBlogs, deleteCommune, deleteHero, deleteInteraction, deleteNotification, deleteUserinfo}