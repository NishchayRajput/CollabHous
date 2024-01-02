const hero = require('../../blogs/models/hero');
const blogs = require('../../blogs/models/blogs');

async function postHero(req,res){
    try {
        // Create a new instance of the 'Hero' model with data from the request body
        const newHero = new hero({
            page: req.body.page,
            key: req.body.key,
            value: req.body.value,
        });

        // Save the new hero to the database
        const savedHero = await newHero.save();

        // Respond with the saved hero data
        res.status(201).json(savedHero);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

async function postBlogs(req ,res){
    try {
        // Create a new instance of the 'Blog' model with data from the request body
        const newBlog = new blogs({
            user_id: req.body.user_id,
            title: req.body.title,
            content: req.body.content,
            tags: req.body.tags,
            like: req.body.like || 0,
            time: req.body.time || new Date(),
            read_time: req.body.read_time,
            richTextContent: req.body.richTextContent,
            items: req.body.items || [],
        });

        // Save the new blog to the database
        const savedBlog = await newBlog.save();

        // Respond with the saved blog data
        res.status(201).json(savedBlog);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}



module.exports = {postHero, postBlogs};