const express = require("express");
const dbConnection = require("./connection/db");
const cors = require("cors");
const ecommerce = require("./ecommerce/routes");
const blogs = require("./blogs/routes");
const cookieParser = require("cookie-parser");

const app = express();

// CORS setup
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true,
  exposedHeaders: ["Set-Cookie"],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


dbConnection();

// Routes
app.post("/login", (req, res) => {
    const { email, password } = req.body;
  
    // Set a cookie with the provided email and password (for demonstration purposes only)
    res.cookie('user', "hello", { httpOnly: true });
  
    // Return the user's email and password in the response (for demonstration purposes only)
    res.json({ email, password });
  });
// app.use("/ecommerce", ecommerce);
// app.use("/blogs", blogs);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running on", PORT);
});
