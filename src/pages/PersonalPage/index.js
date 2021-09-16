import React, {useEffect, useState} from "react";
import { getUserFromToken } from "../../Tools/TokenAction";
import Post from "../../components/Post";
import PostForm from "../../components/PostForm";
import * as PostActions from "../../api/PostActions";
import { TokenExpiredError } from "jsonwebtoken";

const PersonalPage = () => {
    const [Token, setToken] = useState(getUserFromToken());
    const [Posts, setPosts] = useState([]);

    const getPosts = async (event) => {
        if (event) {
            event.preventDefault();
        }
        //Get all posts from user("Author")
        const res = await PostActions.getAllPostsByAuthor(author);
        setPosts(res.data.data);
    }
    useEffect(() => {
        getPosts();
    }, []);
    return (
        <div className="personal-page">
            <div className="title-pp">
                {Token.Name} Commons Page!
            </div>
            <PostForm Token={Token} getPosts={(e) => getPosts(e)}/>
            {Posts.map((post) => {
                return (
                    <Post 
                        Body={post.body}
                        Author={post.author} 
                        Date={post.date} 
                        Token={Token} 
                        id={post._id} 
                        getPosts={getPosts}
                        comments={post.comments}/>
                )
            })}
        </div>
    )
}

export default PersonalPage