import React from "react";

const Post = ({Body, Author, Date}) => {
    return (
        <div className='post-contents'>
            <div>{Body}</div>
            <div>{Author}</div>
            <div>{Date}</div>
        </div>
    )
}

export default Post