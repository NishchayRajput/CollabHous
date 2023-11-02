const express = require('express');
const router = express.Router();
const app = express();
const {like, comment , reply} = require('./controllers/interaction');
const blogs = require('./controllers/iblogs');
const blog_card = require('./controllers/blogs');
// const auth = require('./middleware/auth');

// router.get('/verify', auth);
// router.use(auth);
router.get('/like', like);
router.post('/comment', comment);
router.get('/', blog_card);
router.post('/reply', reply);
router.get('/:id', blogs);

module.exports = router; 