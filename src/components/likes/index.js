//add style sheet

import React, { useState, useEffect } from "react";

const Likes = () => {
    const [likes, setLikes] = useState(0);

    useEffect(() => {
    }, [likes]);


    //what gets rendered
    return (
        <div>
            <button onClick={() => setLikes(likes + 1)}
            >Like</button>
            <button onClick={() => {
                if (likes !== 0) {
                    setLikes(likes - 1);
                };
                //have something so user knows it cant go below 0
            }}>Dislike</button>
            <p>This post has been liked by {likes} Users</p>
        </div>
    );
};

export default Likes;