import React, {useEffect, useState} from "react";
import { getUserFromToken } from "../../Tools/TokenAction";
import Post from "../../components/Post";

const CommonsPage = () => {
    const [Name, setName] = useState("");
    const [Posts, setPosts] = useState('');

    /* Todo: Write a function that gathers all the information from friend posts */

    useEffect(() => {
        const tokenInfo = getUserFromToken();
        setName(tokenInfo[0].Name);
        /* This is emulating a simplied version of actual friends posts before we implement data. */
        setPosts([
            {Body: "I went to the beach this weekend.", Author: "tacoDog", Date: "09/11/2021"},
            {}
        ])
    },[]);
    return (
        <div className="commons-page">
        {/* Search for a friend component */}
            <div>
                Welcome Back {Name}!
            </div>
            <Post />
        </div>
    )
}

export default CommonsPage