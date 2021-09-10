// Post Controller
const db = require("../models");
const mongoose = require("mongoose");

// Index 
const index = (req, res) => {
    console.log("REQ.USER: ", req.user);
    db.Post.find()
        .populate("author").exec((err, populatePosts) => {
            return res.status(200).json({
                message: "Success",
                data: populatePosts,
            });
        });
};

// Show -Get (id)

const show = (req, res) => {
    db.Post.findById(req.params.id, (err, foundPost) => {
        if (err) return console.log("Error in Posts#show:", err);

        return res.status(200).json({
            message: "Success",
            data: foundPost,
        });
    });
};

// Show -get - Comments

const showComments = (req, res) => {
    db.Post.findById(req.params.id)
        .then((foundPost) => {
            if (!foundPost) return console.log("Error in Comment#show");

            return res.status(200).json({
                message: "Success",
                data: foundPost.comments,
            });
        })
        .catch((err) => console.log(err));
};

//Create Post STATUS 201
const create = (req, res ) => {
    req.body.author = mongoose.Types.ObjectsId(req.body.author);
    db.Post.create(req.body, (err, savedPost) => {
        savedPost.populate("author");
        console.log(savedPost, "Saved Post In Create Post");
        if (err) return console.log("Error in Posts#create:", err);

        return res.status(201).json({
            message: "Success",
            data: savedPost,
        });
    });
};

//Create- Post -For Comments
const createComment = (req, res) => {
    db.Post.findById(req.params.id)
        .then((foundPost) => {
            if (!foundPost) return console.log("Error in Comment#create:");
            
            foundPost.comments.push(req.body);
            foundPost.save();

            return res.status(201).json({
                message: "Success",
                data: foundPost.comments,
            });
        })
        .catch((err) => console.log(err));
};

// Update(Posts)- put - (id)
const update = (req, res) => {
    db.Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true },
        (err, updatePost) => {
            if (err) console.log("Error in Posts#update:", err);

            return res.status(202).json({
                data: updatePost,
            });
        }
    );
};

//Update - Put - Comments(Edit)
const updateComment = (req, res) => {
    db.Post.findById(req.params.id).then((foundPost) => {
        if (!foundPost) return console.log("Error in Comment#update");

        const commentById = foundPost.comments.id(req.params.commentId);
        commentById.author = req.body.author;
        commentById.body = req.body.body;
        foundPost.save();

        return res.status(202).json({
            message: "Success",
            data: commentById,
        });
    });
};

// Remove - Delete - (ID)

const destroy = (req, res) => {
    db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
        if (err) console.log("Error in Posts#destroy:", err);
        
        return res.status(200).json({
            data: deletedPost,
        });
    });
};

//Remove - delete- For comments
const destroyComment = (req, res) => {
    db.Post.findById(req.params.id).then((foundPost) => {
        if (!foundPost) return console.log("error in comment#destroy");

        const commentById = foundPost.comments.id(req.params.commentId);
        console.log(commentId);
        commentById.remove();
        foundPost.save();

        return res.status(200).json({
            message: "Success",
            data: commentById,
        });
    });
};

module.exports = {
    index,
    show,
    showComments,
    create,
    createComment,
    update,
    updateComment,
    destroy,
    destroyComment,
};