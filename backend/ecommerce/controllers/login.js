const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userInfo = require('../../ecommerce/models/userInfo');
require('dotenv').config();
// const DB = process.env.DB;

async function login(req, res) {
    const { email, password, g_id, name } = req.body;
console.log(req.body);
    try {
        const isGoogleSignup = !!g_id;

        // Check if either email or Google ID and password are provided
        if (isGoogleSignup) {
            const user = await userInfo.findOne({ g_id: g_id });
            // console.log(g_id);
            console.log(email, name);
            // console.log(user);
            if (!user) {
                const newUser = new userInfo({
                    name: name,
                    email: email,
                    g_id: g_id,
                    isGoogleSignup: isGoogleSignup
                });
                const savedUser = await newUser.save();
                const token = jwt.sign({ userId: savedUser._id }, process.env.secret);
                req.session.user = { id: user._id, username: user.username };
                // res.cookie('token', token, {
                //     httpOnly: true,
                //     maxAge: 60 * 60 * 1000, // Cookie expires in 1 hour
                // });
                console.log('Google login with signup successful');
                return res.status(201).json({ message: "Google login successful" });
            } else {
                const token = jwt.sign({ userId: user._id }, process.env.secret);
                req.session.user = { id: user._id, username: user.username };
                // res.cookie('token', token, {
                //     httpOnly: true,
                //     maxAge: 60 * 60 * 1000, // Cookie expires in 1 hour
                // });
                return res.status(201).json({ message: "Google login successful" });
            }
        } else {
            if (!email || !password) {
                return res.status(400).json({ message: "Please enter all fields." });
            }

            const user = await userInfo.findOne({ email: email });

            if (!user) {
                return res.status(400).json({ message: "User does not exist" });
            } else {
                const passwordMatch = await bcrypt.compare(password, user.password);
                if (!passwordMatch) {
                    return res.status(401).json({ message: "Incorrect password" });
                } else {
                    const token = jwt.sign({ userId: user._id }, process.env.secret);
                    // req.session.user = user._id;s
                    console.log(token)
                    console.log(token.length);
                    res.cookie('token', token, {
                        httpOnly: true,
                        maxAge: 60 * 60 * 1000, // Cookie expires in 1 hour
                        sameSite : 'none',
                        secure : true,
                    });
                    // console.log(res.getHeaders());
                    return res.status(201).json({ message: "Login successful" });
                }
            }
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "An error occurred while processing your request" });
    }
}

module.exports = login;
