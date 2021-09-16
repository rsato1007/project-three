import React, {useState, useEffect} from "react";
import Comments from "../Comment";
import Likes from "../likes";
//IMPORT STYLE HERE
import * as PostActions from "../../api/PostActions";
//comments again

const Post = ({ id, getPosts, Body, Author, Date, comments, Token }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedBody, setBody] = useState(Body);
    const [postComments, setComments] = useState([]);
    //function for editing post
    const handleEdit = async (event) => {
        event.preventDefault();
        console.log("many edits, Handle it!");
        setIsEditing(!isEditing);
        // submit is visible
        if (isEditing) {
            let editedPost = {
                author: Token._id,
                body: editedBody,
            };
            await PostActions.edit(id, editedPost);
            getPosts();
        }
    };
    //function for deleting post
    const handleDelete = async () => {
        await PostActions.remove(id);
        //reload posts
        getPosts();
    };
    //function for showing comments
    const fetchComments = async (id) => {
        let res = await PostActions.getAllComments(id);
        if (res.status === 200) {
            setComments(res.data.data);
        }
    };

    useEffect(() => {
        fetchComments(id);
    }, []);

    return (
        <div className="common-post">
            {isEditing
             ? (<form className="editPostForm-wrapper" onSubmit={(e) => handleEdit(e)}>
                    <input 
                        onChange={(e) => setBody(e.target.value)}
                        value={editedBody}
                        type="text"
                        name="body"
                        placeholder="Edit Post"
                    />
                    <button type="submit">Edit Post</button>
                </form>)
            //  This appears when user is not editing post
             : (<div className="post-wrapper">
                    <div>{Body}</div>
                    <div>{Author.Name}</div>
                    <div>{Date}</div>
                </div>)
            }
            {/* Get rid of edit button if logged in user is editing post */}
            {Author._id === Token._id && !isEditing &&
            <div className="edit-delete-wrapper">
                <button onClick={() => setIsEditing(true)}>Edit Post</button>
                <button onClick={() => handleDelete()}>Delete Post</button>
             </div>
            }
            <div className="comments">
                <h3>Comments</h3>
                {comments.map((comment) => {
                    console.log("this is the comments: ", comment);
                    return (
                        <Comments 
                            author={comment.author}
                            body={comment.body}
                            key={comment._id}
                            commentId={comment._id}
                            id={id}
                            getCommentsAgain={(id) => fetchComments(id)}
                        />
                    );
                })}
            </div>
            
        </div>
    )
}

export default Post