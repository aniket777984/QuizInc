const mongoose = require("mongoose");
require("dotenv").config();

const connectDatabase = () => {
  mongoose
    .connect(
      "mongodb+srv://aniket777984:Aniket777984@ecommerce.kttni.mongodb.net/QuizInc",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then((data) => {
      console.log(`mongodo connected with server ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;
