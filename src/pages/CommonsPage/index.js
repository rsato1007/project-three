import React, {useEffect, useState} from "react";
import { getUserFromToken } from "../../Tools/TokenAction";
import Post from "../../components/Post";
import PostForm from "../../components/PostForm";
import * as PostActions from "../../api/PostActions";

const CommonsPage = () => {
    const [Token, setToken] = useState(getUserFromToken());
    const [Posts, setPosts] = useState([]);

    const getPosts = async () => {
        // Eventually we'll change to grab only posts from friends.
        const res = await PostActions.getAll();
    }

    /* Todo: Write a function that gathers all the information from friend posts */

    useEffect(() => {
        /* This is emulating a simplied version of actual friends posts before we implement data. */
        getPosts();
        setPosts([...Posts, 
            {Body: "I went to the beach this weekend.", Author: "tacoDog", Date: "09/11/2021"},
            {Body: "Go Sports Team", Author: "Paper John", Date: "09/12/2021"}
        ]);
    },[]);
    return (
        <div className="commons-page">
        {/* Search for a friend component */}
            <div>
                Welcome Back {Token.Name ? Token.Name : Token[0].Name}!
            </div>
            <PostForm Token={Token}/>
            {Posts.map((post) => {
                return (
                    <Post Body={post.Body} Author={post.Author} Date={post.Date}/>
                )
            })}
        </div>
    )
}

export default CommonsPage