import React, { useState } from "react";
import * as PostActions from "../../api/PostActions";
import { func, string } from "prop-types";

const Comments = ({ id, author, body, getCommentsAgain, commentId}) => {
    /* Author on page is the id number and the actual author name */
    const [isEditing, setIsEditing] = useState(false);
    const [editedAuthor, setAuthor] = useState(author);
    const [editedBody, setBody] = useState(body);

    //deals with editing comments
    const handleEdit = async (event) => {
        if (event) {
            event.preventDefault();
        }
        setIsEditing(!isEditing);
        if (isEditing) {
            let editedComment = {
                author: editedAuthor,
                body: editedBody,
            };
            const res = await PostActions.editComment(id, commentId, editedComment);
            getCommentsAgain(id);
        }
    };

    //handles deleting comments
    const handleDelete = async () => {
        const res = await PostActions.removeComment(id, commentId);
        getCommentsAgain(id);
    };

    //what is actually rendered to the user
    return (
        <div className="comment">
            <span className="enter-comment">
                {!isEditing && (
                    <div className="comment-wrapper">
                        <p>{author}: {body}</p>
                    </div>
                )}
                {isEditing && (
                    <input 
                        onChange={(e) => setBody(e.target.value)}
                        value={editedBody}
                        type="text"
                        name="author"
                        placeholder="AUTHOR"
                    />
                )}
            </span>
            <span className="comment-buttons">
                <button onClick={(e) => handleEdit(e)}>
                    {isEditing ? "SUBMIT" : "EDIT"}
                </button>
                <button onClick={handleDelete}>
                    DELETE
                </button>
            </span>
        </div>
    );
};

Comment.prototypes = {
    id: string.isRequired,
    author: string.isRequired,
    body: string.isRequired,
    commentId: string.isRequired,
    getCommentsAgain: func,
};

export default Comments;