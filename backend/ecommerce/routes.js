const express = require('express');
const router = express.Router();
const login = require('./controllers/login');
const signup = require('./controllers/signup');
const tokenvalidation = require('./controllers/verify');

// router.get('/verify',tokenvalidation);
router.post('/login', login);
router.post('/signup', signup);
// router.get('/l', tokenvalidation)



module.exports = router;