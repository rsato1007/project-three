import React, {useEffect, useState} from "react";
import { getUserFromToken } from "../../Tools/TokenAction";
import Post from "../../components/Post";

const CommonsPage = () => {
    const [Name, setName] = useState("");

    /* Todo: Write a function that gathers all the information from friend posts */

    useEffect(() => {
        const tokenInfo = getUserFromToken();
        setName(tokenInfo[0].Name);
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