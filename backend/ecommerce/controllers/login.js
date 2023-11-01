const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userInfo = require('../models/userinfo');
require('dotenv').config();

async function login(req, res) {
    const { email, password, g_id } = req.body;

    try {
        // Check if either email or Google ID and password are provided
        if ((!email && !g_id) || (!password && !g_id)) {
            return res.status(400).json({ message: "Please enter all fields." });
        }
        let user;

        // Find the user based on the login method (email or Google ID)
        if (g_id) {
            user = await userInfo.findOne({ g_id: g_id });
        } else if (email) {
            user = await userInfo.findOne({ email: email });
        } else {
            return res.status(400).json({ message: "Email or Google ID is required." });
        }

        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }

        // If using Google ID, ensure it matches the stored Google ID
        if (g_id && g_id !== user.g_id) {
            return res.status(401).json({ message: "Google ID does not match." });
        }

        // Check if a password is provided when not using Google ID login
        if (!g_id && !password) {
            return res.status(400).json({ message: "Password is required." });
        }

        // Verify the provided password (if not using Google ID)
        if (!g_id && !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Incorrect password" });
        }

        // Create a JWT token for the user
        const token = jwt.sign({ userId: user._id }, process.env.secret);

        // Set the token as a cookie with HTTP-only and expiration time
        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 60 * 60 * 1000, // Cookie expires in 1 hour
        });
        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "An error occurred while processing your request" });
    }
}

module.exports = login;
