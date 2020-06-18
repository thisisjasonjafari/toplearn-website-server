const mongoose = require("mongoose");

// const { mongouser, mongopass } = process.env;

exports.connectToDB = () => {
    return mongoose.connect("mongodb+srv://Jason:HL0wqOnk9fuYHQcZ@jasondevconnector-xi2qh.mongodb.net/toplearn?retryWrites=true&w=majority", {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

// exports.connectToDB = () => {
//     return mongoose.connect(`mongodb+srv://Jason:HL0wqOnk9fuYHQcZ@jasondevconnector-xi2qh.mongodb.net/toplearn?retryWrites=true&w=majority`, {
//         useNewUrlParser: true,
//         useCreateIndex: true
//     });
// };

//'mongodb://localhost:27017/toplearn'