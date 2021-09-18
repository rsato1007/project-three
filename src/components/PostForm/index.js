import React, {useState} from "react";
import "./styles.css";
import * as PostActions from "../../api/PostActions";
import GifFinder from "../GifFinder";

const PostForm = (props) => {
    const [postBody, setPostBody] = useState('');
    const [useGif, setPostType] = useState(false);

    const useGifInstead = () => {
        setPostType(!useGif);
    }

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
            alert("Post Error. Try Again.");
        }
    }
    
    return (
        <div className="form">
            {!useGif &&
                <form className="login-inputs" onSubmit={(e) => submitPost(e)}>
                        <input className="comment"
                            onChange={(e) => setPostBody(e.target.value)}
                            value={postBody}
                            type="text"
                            name="body"
                            placeholder="Say Something"
                        />

                    <button className="form-submit-button " type="submit">Post</button>
                </form>
            }
            {useGif &&
                <div>
                    <GifFinder setPostBody={setPostBody} submitPost={(e) => submitPost(e)}/>
                </div>
            }
            <button className="form-submit-button" onClick={useGifInstead}>
                {useGif ? "Write a Post" : "Use a Gif" }
            </button>
        </div>
    )
}

export default PostForm