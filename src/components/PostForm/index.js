import React, {useState} from "react";
import * as PostActions from "../../api/PostActions";

const PostForm = (props) => {
    const [postBody, setPostBody] = useState('');

    const submitPost = async (event) => {
        event.preventDefault();

        const post = {
            body: postBody,
            author: props.Token._id,
            date: new Date(),
        }

        const res = await PostActions.create(post);

        if (res.data.data) {
            setPostBody("");
            props.getPosts(event);
        } else {
            alert("Post Error. Try Again.")
        }
    }
    
    return (
        <form className="login-inputs" onSubmit={(e) => submitPost(e)}>
        <input 
            onChange={(e) => setPostBody(e.target.value)}
            value={postBody}
            type="text"
            name="body"
            placeholder="Say Something"
        />
        <button type="submit">Post</button>
    </form>
    )
}

export default PostForm