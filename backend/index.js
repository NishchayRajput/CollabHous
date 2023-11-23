const express = require("express");
const dbConnection = require("./connection/db");
const cors = require("cors");
const ecommerce = require("./ecommerce/routes");
const blogs = require("./blogs/routes");
const cookieParser = require("cookie-parser");
// const passport = require("passport");
// const session = require("express-session");
// const mongoStore = require("connect-mongo");

const app = express();
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true,
  exposedHeaders: ["Set-Cookie"],
}));
app.use(express.json());
app.use(cookieParser());
// app.use(passport.initialize());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});
// app.use(
//   session({    
//     secret: 'sV4T3Qnxjd8',
//     resave: false,
//     saveUninitialized: false,
//     cookie: { maxAge: 60000000000 },
//     store: mongoStore.create({ 
//       mongoUrl: "mongodb+srv://nishchayr:Ou0W2oqa7q0J6YQ9@cluster0.vxa7fey.mongodb.net/CollabHous?retryWrites=true&w=majority",
//       collection: 'sessions',
//       ttl: 60 * 60 ,
//       autoRemove: 'native',
//     }),
//   })
// );
app.use(express.urlencoded({ extended: true }));
dbConnection();

// app.get('/verify', auth);
// Middleware to check if the user is logged in
// app.use((req, res, next) => {
//   if (req.session.userId) { // If the user ID exists in the session
//     // req.userId = req.session.userId; // Attach the user's ID to the request object
//     next(); // Call the next middleware
//   } else {
//     console.log('redirection')
//     // res.redirect('/login'); // Redirect to the login page
//   }
// });
app.use("/ecommerce", ecommerce);

app.use("/blogs", blogs);
// app.use('/api', wishlist);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on", PORT);
});
