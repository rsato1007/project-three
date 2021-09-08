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
    const user = this;
    if (!user.isModified("Password")) return next();
    // password has been changed - salt and hash it
    bcrypt.hash(user.Password, SALT_ROUNDS, function (err, hash) {
        if (err) return next(err);
        // replace the user provided password with the hash
        user.Password = hash;
        next();
    });
});

const User = mongoose.model("User", schema);
module.exports = User;