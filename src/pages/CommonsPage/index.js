import React, {useEffect, useState} from "react";
import { getUserFromToken } from "../../Tools/TokenAction";
import Post from "../../components/Post";
import PostForm from "../../components/PostForm";

const CommonsPage = () => {
    const [Name, setName] = useState("");
    const [Posts, setPosts] = useState([]);

    const getPosts = async () => {

    }

    /* Todo: Write a function that gathers all the information from friend posts */

    useEffect(() => {
        const tokenInfo = getUserFromToken();
        setName(tokenInfo.Name);
        /* This is emulating a simplied version of actual friends posts before we implement data. */
        setPosts([...Posts, 
            {Body: "I went to the beach this weekend.", Author: "tacoDog", Date: "09/11/2021"},
            {Body: "Go Sports Team", Author: "Paper John", Date: "09/12/2021"}
        ]);
    },[]);
    return (
        <div className="commons-page">
        {/* Search for a friend component */}
            <div>
                Welcome Back {Name}!
            </div>
            <PostForm />
            {Posts.map((post) => {
                return (
                    <Post Body={post.Body} Author={post.Author} Date={post.Date}/>
                )
            })}
        </div>
    )
}

export default CommonsPage