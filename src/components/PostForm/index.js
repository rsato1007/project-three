import React, {useState} from "react";
import * as UserActions from "../../api/UserActions";

const PostForm = (props) => {
    const [postBody, setPostBody] = useState('');

    const submitPost = async (event) => {
        event.preventDefault();

        const post = {
            body: postBody,
            author: props.Token._id,
            date: new Date(),
        }

        //fill with relevant code when hooked to back-end user api.
        const res = await UserActions.sendPost(post);
        console.log("Here's the response I get:", res);
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