const { resource } = require('adminjs');
const { text, boolean } = require('adminjs/design-system');

const userInfoResource = resource({
  resource: mongoose.model('userInfo', userInfo), // Your Mongoose model
  options: {
    navigation: {
      name: 'User Info', // Display name for the resource in the Admin Panel
      icon: 'User', // Icon to represent the resource
    },
    properties: {
      name: {
        type: text,
        isRequired: true,
        isVisible: { list: true, show: true, edit: true },
      },
      g_id: {
        type: text,
        isRequired: false, // You can change this as needed
        isVisible: { list: true, show: true, edit: true },
      },
      email: {
        type: text,
        isRequired: true,
        isVisible: { list: true, show: true, edit: true },
      },
      password: {
        type: text,
        isVisible: false, // Hide the password field
      },
      address: {
        type: text,
        isVisible: { list: true, show: true, edit: true },
      },
      isGoogleSignup: {
        type: boolean,
        isVisible: { list: true, show: true, edit: true },
      },
    },
  },
});

module.exports = userInfoResource;
