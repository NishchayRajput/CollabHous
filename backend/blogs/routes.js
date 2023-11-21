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


router.use(['/like*', '/comment*', '/reply*', '/headers*', '/setting*'], auth);
router.get('/', blog_card);
router.get('/hero', blog_hero);
router.get('/:id', blogs);
router.use((req,res,next)=>{
    console.log('hello world');
    next();
})
router.use(auth);
router.get('/like', like);
router.get('/headers', headers ); 
router.get('/setting', setting );
router.post('/comment', comment);
router.post('/reply', reply);


module.exports = router; 