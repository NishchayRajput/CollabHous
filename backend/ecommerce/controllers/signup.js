const mongoose = require('mongoose');
const userInfo = require('../models/userinfo');
const bcrypt = require('bcrypt');
async function signup(req, res) {
    const { name, email, password, g_id } = req.body;
    // const validationErrors = {};

    // Detect Google signup by the presence of g_id
    const isGoogleSignup = !!g_id;

    // Perform validation
    if (!name || !email || (!isGoogleSignup && !password)) {
        return res.status(400).json({ message: "Please fill in all required fields." });
    }

    // Validate email format using regex
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
        return res.status(400).json({ message: "Invalid Email. Please enter correct email." });
    }

    if (!isGoogleSignup && password.length < 5) {
        return res.status(400).json({ message: "Password should be at least 5 characters long." });
    }

    try {
        // Check if the user with the given email or Google ID already exists
        const existingUser = await userInfo.findOne({
            $or: [{ email: email }, { g_id: g_id }]
        });

        if (existingUser) {
            return res.status(400).json({ message: "User with this email or Google ID already exists." });
        }

        // Modify signup logic for Google signups
        let hashedPassword = null;
        if (!isGoogleSignup) {
            // Hash the password before storing it
            hashedPassword = await bcrypt.hash(password, 10);
        }

        // Create a new user using the userInfo schema
        const newUser = new userInfo({
            name: name,
            email: email,
            g_id: isGoogleSignup ? g_id : undefined, // Set g_id only for Google signups
            password: hashedPassword, // Store the hashed password
            isGoogleSignup: isGoogleSignup
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: "Signup successful" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "An error occurred while processing your request" });
    }
}

module.exports = signup;
