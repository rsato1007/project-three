import CommonsCommands from "./CommonsCommands";

//gets every post for main page
const getAll = () => {
    return CommonsCommands.get("/api/posts");
};
//will get posts from friends. somehow.
const getFriends = () => {
    return CommonsCommands.get(/*POST ID IN HERE*/);
};
//gets one post 
const get = (id) => {
    return CommonsCommands.get(`/api/posts/${id}`);
};
//get all posts by author
const getAllPostsByAuthor = (author) => {
    return CommonsCommands.get(`/api/posts/${author}/`);
};
//gets all comments o0n a post
const getAllComments = (id) => {
    return CommonsCommands.get(`/api/posts/${id}/comments`);
};
// make a post
const create = (data) => {
    return CommonsCommands.post(`/api/posts`, data);
};
// make comments
const createComment = (id, data) => {
    return CommonsCommands.post(`/api/posts/${id}/comment`, data);
};
//Updates post to new info
const edit = (id, data) => {
    return CommonsCommands.put(`/api/posts/${id}`, data);
};
//updates comments to new info
const editComment = (id, commentId, data) => {
    return CommonsCommands.put(`/api/posts/${id}/comment/${commentId}`, data);
};
//deletes post
const remove = (id) => {
    return CommonsCommands.delete(`/api/posts/${id}`);
};
//deletes comment
const removeComment = (id, commentId) => {
    return CommonsCommands.delete(`/api/posts/${id}/comment/${commentId}`);
};

//exports from the api
export { get, getAll, getFriends, getAllComments, create, createComment, edit, editComment, remove, removeComment, };