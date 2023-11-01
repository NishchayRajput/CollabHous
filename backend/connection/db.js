const mongoose = require('mongoose');

function dbConnection() {
    mongoose
        .connect(
            "mongodb+srv://nishchayr:Ou0W2oqa7q0J6YQ9@cluster0.vxa7fey.mongodb.net/CollabHous?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        .then(() => console.log("Connected to MongoDB Atlas"))
        .catch((err) => console.log("Error connecting to MongoDB Atlas:", err));
}

module.exports = dbConnection ;