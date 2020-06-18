const mongoose = require("mongoose");

// const { mongouser, mongopass } = process.env;

exports.connectToDB = () => {
    return mongoose.connect("mongodb+srv://<user>:<pass>@jasondevconnector-xi2qh.mongodb.net/toplearn?retryWrites=true&w=majority", {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

//'mongodb://localhost:27017/toplearn'