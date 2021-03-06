import React, {useEffect, useState} from "react";
import { getUserFromToken } from "../../Tools/TokenAction";
import Post from "../../components/Post";
import PostForm from "../../components/PostForm";
import * as PostActions from "../../api/PostActions";
import "./styles.css";

const CommonsPage = () => {
    const [Token, setToken] = useState(getUserFromToken());
    const [Posts, setPosts] = useState([]);

    const getPosts = async (event) => {
        if (event) {
            event.preventDefault();
        }
        // Eventually we'll change to grab only posts from friends.
        const res = await PostActions.getAll();
        setPosts(res.data.data);
    }

    /* Todo: Write a function that gathers all the information from friend posts */

    useEffect(() => {
        /* This is emulating a simplied version of actual friends posts before we implement data. */
        setToken(Token._id ? Token : Token[0]);
        getPosts();
    },[]);
    return (
        <div className="commons-page">
        {/* Search for a friend component */}
            <div className="create-post">
            <PostForm  Token={Token} getPosts={(e) => getPosts(e)}/>
            <div className="welcome">
                Welcome Back {Token.Name}!
            </div>
            </div>
            {Posts.map((post) => {
                // This code determines if gif or not
                const regex = /(https):\/\/(media)[0-9].(giphy).(com)\/(media)/;
                const result = regex.test(post.body);
                return (
                    <Post 
                        Body={post.body} 
                        Author={post.author} 
                        Date={post.date} 
                        Token={Token} 
                        id={post._id} 
                        getPosts={getPosts} 
                        comments={post.comments}
                        gif={result}/>
                )
            })}
        </div>
    )
}

export default CommonsPage