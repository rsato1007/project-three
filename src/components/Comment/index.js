import React, { useState } from "react";
//make style page and import
import * as PostActions from "../../api/PostActions";
import { func, string } from "prop-types";

const Comment = ({ id, author, body, getCommentsAgain, commentId}) => {
    console.log(author, "Wrote the comment")
    const [isEditing, setIsEditing] = useState(false);
    const [editedAuthor, setAuthor] = useState(author);
    const [editedBody, setBody] = useState(body);

    //deals with editing comments
    const handleEdit = async () => {
        console.log("handled the edit")
        setIsEditing(!isEditing);
        if (isEditing) {
            let editedComment = {
                author: editedAuthor,
                body: editedBody,
            };
            await PostActions.editComment(id, commentId, editedComment);
            getCommentsAgain();
        }
    };

    //handles deleting comments
    const handleDelete = async () => {
        await PostActions.removeComment(id, commentId);
        getCommentsAgain(id);
    };

    //what is actually rendered to the user
    return (
        <div className="comment">
            <span className="enter-comment">
                {!isEditing && <b>{author}</b>}
                {isEditing && (
                    <input 
                        onChange={(e) => setAuthor(e.target.value)}
                        value={editedBody}
                        type="text"
                        name="author"
                        placeholder="AUTHOR"
                    />
                )}
            </span>
            <span className="comment-buttons">
                <button onClick={handleEdit}>
                    {isEditing ? "SUBMIT" : "EDIT"}
                </button>
                <button onClick={handleDelete}>
                    DELETE
                </button>
            </span>
        </div>
    );
};

Comment.propTypes = {
    id: string.isRequired,
    author: string.isRequired,
    body: string.isRequired,
    commentId: string.isRequired,
    getCommentsAgain: func,
};

export default Comment;