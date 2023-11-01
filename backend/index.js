const express = require('express');
const dbConnection = require('./connection/db');
const cors = require('cors');
const ecommerce = require('./ecommerce/routes');
const blogs = require('./blogs/routes');
// const auth = require('./routes/auth');
// const wishlist = require('./routes/wishlist');
// const auth = require('./blogs/middleware/auth');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
dbConnection();



// app.get('/verify', auth);
app.use('/ecommerce', ecommerce);
app.use('/blogs', blogs);
// app.use('/api', wishlist);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on", PORT);
});
