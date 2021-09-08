const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 6;

const schema = new mongoose.Schema ({
    Name: {type: string, required: true},
    Email: {type: Email, required: true},
    Password: {type: string, required: true},
    Bio: {type: string},
});

schema.pre("save", function (next) {
    
});

const User = mongoose.model("User", schema);
module.exports = User;