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

        console.log("Here's what being sent to the backend:", post);

        // const res = await PostActions.create(post);
        // console.log("Post created, here's the response:", res);
        // if (res.data.data) {
        //     setPostBody("");
        //     // Maybe add functiont that grabs posts again?
        // } else {
        //     alert("Post Error. Try Again.")
        // }
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