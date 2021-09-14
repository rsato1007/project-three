import React, {useState} from "react";

const PostForm = (props) => {
    const [postBody, setPostBody] = useState('');

    const submitPost = async (event) => {
        event.preventDefault();
        console.log("My Props thing", props.Token);
        const post = {
            body: postBody,
            author: props.Token._id,
            date: new Date(),
        }
        console.log("Post Submitted", post);
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