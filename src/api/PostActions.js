import CommonsCommands from "./CommonsCommands";

//gets every post for main page
const getAll = () => {
    return CommonsCommands.get("/posts");
};
//will get posts from friends. somehow.
const getFriends = () => {
    return CommonsCommands.get(/*POST ID IN HERE*/);
};
//gets one post 
const get = () => {
    return CommonsCommands.get(/*POST ID IN HERE*/);
};
//gets all comments o0n a post
const getAllComments = () => {
    return CommonsCommands.get(/*POST ID IN HERE*/);
};
// make a post
const create = () => {
    return CommonsCommands.post("/posts");
};
// make comments
const createComment = () => {
    return CommonsCommands.get(/*POST ID IN HERE*/);
};
//Updates post to new info
const edit = () => {
    return CommonsCommands.put(/*POST ID IN HERE*/);
};
//updates comments to new info
const editComment = () => {
    return CommonsCommands.put(/*POST ID IN HERE*/);
};
//deletes post
const remove = () => {
    return CommonsCommands.delete(/*POST ID IN HERE*/);
};
//deletes comment
const removeComment = () => {
    return CommonsCommands.delete(/*POST ID IN HERE*/);
};


//exports from the api
export { get, getAll, getFriends, getAllComments, create, createComment, edit, editComment, remove, removeComment, };