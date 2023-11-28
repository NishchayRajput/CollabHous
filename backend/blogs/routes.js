const express = require('express');
const router = express.Router();
const app = express();
const {like, comment , reply} = require('./controllers/interaction');
const blogs = require('./controllers/iblogs');
const blog_card = require('./controllers/blogs');
const blog_hero = require('./controllers/blog_hero');
const auth = require('./middleware/auth');
const headers = require('./controllers/headers');
const profile = require('./controllers/profile');
const logout = require('./controllers/logout');
const {settings, questions, get_settings} = require('./controllers/commune');


// router.use((req,res,next)=>{
//     console.log(req);
//     next();
// })
router.use(['/like*', '/comment*', '/reply*', '/headers*', '/profile*', '/settings*', '/questions*', '/get_settings*'], auth);
router.post('/like', like);
router.get('/logout', logout);
router.get('/headers', headers ); 
router.get('/profile', profile );
router.post('/comment', comment);
router.get('/', blog_card);
router.post('/hero', blog_hero);
router.post('/reply', reply);
router.post('/settings', settings);
router.post('/questions', questions);
router.get('/get_settings', get_settings);
router.get('/:id', blogs);

module.exports = router;