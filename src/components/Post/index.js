import React from "react";

const Post = ({Body, Author, Date}) => {
    return (
        <div className='post-contents'>
            <div>I went to the beach this weeked it was dope!</div>
            <div>By Robert Sato</div>
            <div>Date Posted: 09/11/2021</div>
        </div>
    )
}

export default Post