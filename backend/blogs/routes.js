const express = require('express');
const router = express.Router();
const app = express();
const {like, comment , reply} = require('./controllers/interaction');
const blogs = require('./controllers/iblogs');
const blog_card = require('./controllers/blogs');
const blog_hero = require('./controllers/blog_hero');
const auth = require('./middleware/auth');
const headers = require('./controllers/headers');
const setting = require('./controllers/setting');
const logout = require('./controllers/logout');

router.use(['/like*', '/comment*', '/reply*', '/headers*', '/setting*'], auth);
router.get('/like', like);
router.get('/logout', logout);
router.get('/headers', headers ); 
router.get('/setting', setting );
router.post('/comment', comment);
router.get('/', blog_card);
router.get('/hero', blog_hero);
router.post('/reply', reply);
router.get('/:id', blogs);

module.exports = router;