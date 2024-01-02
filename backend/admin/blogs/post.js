const hero = require('../../blogs/models/hero');
const blogs = require('../../blogs/models/blogs');
const adminInfo = require('../models/adminInfo');

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

async function postAdminInfo(req,res){
    const {name, email, password} = req.body;
    try {
        // Validate inputs
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Please enter all required fields." });
        }

        // Check if the email is already in use
        const existingUser = await adminInfo.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "Email is already registered. Please choose a different one." });
        }

        // Hash the password
        const saltRounds = 12; // Adjust according to your security needs
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new adminInfo document
        const newAdmin = new adminInfo({
            name: name,
            email: email,
            password: hashedPassword,
        });

        // Save the new adminInfo to the database
        await newAdmin.save();

        // Create and send a JWT token for immediate login after signup

        return res.status(201).json({ message: "Signup successful" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "An error occurred while processing your request" });
    }
}


module.exports = {postHero, postBlogs, postAdminInfo};