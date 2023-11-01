const express = require('express');
const router = express.Router();
const app = express();
const {like, comment , reply} = require('./controllers/interaction');
const auth = require('./middleware/auth');

// router.get('/verify', auth);
router.use(auth);
router.get('/like', like);
router.post('/comment', comment);
router.post('/reply', reply);

module.exports = router; 