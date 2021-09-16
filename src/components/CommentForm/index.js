import React, { useState } from "react";
//create style sheet
import * as PostActions from "../../api/PostActions";
import { func, string } from "prop-types";

const CommentForm = ({ id, getCommentsAgain, getPostsAgain, user }) => {
    const [body, setBody] = useState("");
    const handleSubmit = async () => {
        const newComment = {author: user, body, id};
        const res = await PostActions.createComment(id, newComment);
        if (res.status === 201) {
            setBody("");
            getCommentsAgain(id);
            getPostsAgain();
        }
        else {
            alert("server error, you probably broke something.");
        }
    };

    //what gets shown to the user
    return (
        <div className="comment-inputs">
            <input 
                onChange={(e) => setBody(e.target.value)}
                value={body}
                type="text"
                name="body"
                placeholder="WRITE STUFF HERE"
            />
            <button onClick={handleSubmit}>Comment</button>
        </div>
    );
};

CommentForm.protoTypes = {
    id: string.isRequired,
    getPostsAgain: func,
};

export default CommentForm;