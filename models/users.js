const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowerCase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8
    }
})

const Users = mongoose.model("Users",UsersSchema);

module.exports = Users;