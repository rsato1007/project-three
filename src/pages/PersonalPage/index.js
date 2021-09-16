import React, {useEffect, useState} from "react";
import { getUserFromToken } from "../../Tools/TokenAction";
import Post from "../../components/Post";
import PostForm from "../../components/PostForm";
import * as PostActions from "../../api/PostActions";

const PersonalPage = () => {
    const [Posts, setPosts] = useState([]);

    const getPosts = async (event) => {
        if (event) {
            event.preventDefault();
        }
        //Get all posts from user("Author")
        const res = await PostActions.getAllPostsByAuthor();
        setPosts(res.data.data);
    }
}