import AdminJS from 'adminjs';
import express from 'express';
import AdminJSExpress from '@adminjs/express';
import mongoose from 'mongoose';
import userInfoResource from './userInfoResource';


// Connect to your MongoDB database
mongoose.connect('mongodb+srv://nishchayr:Ou0W2oqa7q0J6YQ9@cluster0.vxa7fey.mongodb.net/CollabHous?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const adminJs = new AdminJS({
  // Add your resource configurations here
  databases: [mongoose], // Use 'databases', not 'database'
  resources: [userInfoResource],
});

const app = express();

const adminRouter = AdminJSExpress.buildRouter(adminJs);

app.use('/admin', adminRouter);

// Start your app
app.listen(3000, () => console.log('AdminJS is running on http://localhost:3000/admin'));
