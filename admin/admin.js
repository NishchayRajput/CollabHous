import AdminJS from 'adminjs';
import express from 'express';
import AdminJSExpress from '@adminjs/express';
import mongoose from 'mongoose';
import * as AdminJSMongoose from '@adminjs/mongoose';
// import userInfoResource from './userInfoResource';
// import importExportFeature from '@adminjs/import-export';

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
})

// Define your Mongoose model for 'userInfo'
const userInfoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  g_id: { type: String, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  address: { type: String, default: 'null' },
  isGoogleSignup: { type: Boolean, default: false },
});

const UserInfo = mongoose.model('userInfo', userInfoSchema);

// Define an AdminJS resource for 'userInfo'
const userInfoResource = {
  resource: UserInfo,
  options: {
    navigation: {
      icon: 'User',
    },
    properties: {
      name: { type: 'string', isRequired: true },
      g_id: { type: 'string', isRequired: false },
      email: { type: 'string', isRequired: true },
      password: { type: 'password', isVisible: true },
      address: { type: 'string' },
      isGoogleSignup: { type: 'boolean' },
    },
  },
};

// Define your Mongoose model for 'blogs'
const blogsSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userInfo',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
  },
  like: {
    type: Number,
    default: 0,
  },
  time: {
    type: Date,
    default: function () {
      const moment = require('moment-timezone');
      moment.tz.setDefault('Asia/Kolkata');
      return moment();
    },
  },
});

const Blogs = mongoose.model('blogs', blogsSchema);

// Define an AdminJS resource for 'blogs'
const blogsResource = {
  resource: Blogs,
  options: {
    navigation: {
      name: 'Blogs',
      icon: 'Book',
    },
    actions: {
      list: {
        showFilter: true,
      },
    },
    properties: {
      user_id: { type: 'mixed', reference: 'userInfo', isRequired: true },
      title: { type: 'string', isRequired: true },
      content: { type: 'string', isRequired: true },
      tags: { type: 'string', filter :true },
      like: { type: 'number' , filter :true },
      time: { type: 'datetime', isVisible: { list: true, show: true, edit: false, filter: true } },
    },
  },
};

// Define your Mongoose model for 'hero'
const heroSchema = new mongoose.Schema({
  key: { type: String, required: true },
  value: { type: String, required: true },
});

const Hero = mongoose.model('hero', heroSchema, 'blogshero');

// Define an AdminJS resource for 'hero'
const heroResource = {
  resource: Hero,
  options: {
    navigation: {
      name: 'Blogs',
      icon: 'Book',
    },
    properties: {
      key: { type: 'string', isRequired: true },
      value: { type: 'string', isRequired: true },
    },
  },
};

// Define your Mongoose model for 'interaction'
const interactionSchema = new mongoose.Schema({
  blog_id: { type: mongoose.Schema.Types.ObjectId, ref: 'blogs' },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'userInfo', required: true },
  interaction_id: { type: String, required: true },
  interaction_type: { type: String, required: true },
  interaction_content: { type: String, required: true },
  time: {
    type: Date,
    default: function () {
      const moment = require('moment-timezone');
      moment.tz.setDefault('Asia/Kolkata');
      return moment();
    },
  },
});

const Interaction = mongoose.model('interaction', interactionSchema);

// Define an AdminJS resource for 'interaction'
const interactionResource = {
  resource: Interaction,
  options: {
    navigation: {
      name: 'Blogs',
      icon: 'Book',
    },
    properties: {
      blog_id: { type: 'mixed', reference: 'blogs', isRequired: true },
      user_id: { type: 'mixed', reference: 'userInfo', isRequired: true },
      interaction_id: { type: 'string', isRequired: true },
      interaction_type: { type: 'string', isRequired: true },
      interaction_content: { type: 'string', isRequired: true },
      time: { type: 'datetime', isVisible: { list: true, show: true, edit: false, filter: true } },
    },
  },
};

const app = express();

mongoose.connect("mongodb+srv://nishchayr:Ou0W2oqa7q0J6YQ9@cluster0.vxa7fey.mongodb.net/CollabHous?retryWrites=true&w=majority", {
  
  useUnifiedTopology: true,
});

const adminJs = new AdminJS({
  resources: [userInfoResource, blogsResource, heroResource, interactionResource], // Include all resources
  databases: [mongoose],
  
});

const adminRouter = AdminJSExpress.buildRouter(adminJs);

app.use('/admin', adminRouter);

app.listen(3000, () => console.log('AdminJS is running on http://localhost:3000/admin'));