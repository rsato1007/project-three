import React, {useState, useEffect} from "react";
//IMPORT COMMENTS HERE
//IMPORT LIKES HERE
//IMPORT STYLE HERE
import * as PostActions from "../../api/PostActions";
//comments again

const Post = ({ id, getPosts, Body, Author, Date, comments }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedAuthor, setAuthor] = useState(Author);
    const [editedBody, setBody] = useState(Body);
    const [postComments, setComments] = useState([]);
    //function for editing post
    const handleEdit = async () => {
        console.log("many edits, Handle it!");
        setIsEditing(!isEditing);
        //submit is visible
        if (isEditing) {
            let editedPost = {
                author: editedAuthor,
                body: editedBody,
            };
            await PostActions.edit(id, editedPost);
            //add function to reload posts
        }
    };
    //function for deleting post
    const handleDelete = async () => {
        await PostActions.remove(id);
        //reload posts
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
            <div>{Body}</div>
            <div>{Author}</div>
            <div>{Date}</div>
        </div>
    )
}

export default Post