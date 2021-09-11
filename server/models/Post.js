// Post Model

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        author: {type: Schema.Types.ObjectId, ref: "User" },
        body: { type: String, require: true },
    },
    {
        timestamps: true,
    }
);

const postSchema = new Schema(
    {
        body: {type: String, require: true },
        author: {type: Schema.Types.ObjectId, ref: "User" },
        date: {type: Date },
        comments: [commentSchema],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Post", postSchema);