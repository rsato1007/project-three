import CommonsCommands from "../api/CommonsCommands";

 const createToken = (token) => {

    //puts token into local storage and adds auth header
    if (token) {
        localStorage.setItem("token", token);
        CommonsCommands.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
    else {
        localStorage.removeItem("token");
        CommonsCommands.defaults.headers.common["Authorization"] = null;
    }
};

const getToken = () => {
    let token = localStorage.getItem("token");
    CommonsCommands.defaults.headers.common["Authorization"] = "Bearer " + token;
    console.log("We got the token!", token);

    //checks for token expiration, deletes if expired
    if (token) {
        const payload = JSON.parse(atob(token.split(".")[1]));
        console.log("Plain ol token! ", payload);
        //convert seconds to miliseconds
        if (payload.exp < Date.now() / 1000) {
            localStorage.removeItem("token");
            CommonsCommands.defaults.headers.common["Authorization"] = null;
            token = null;
        }
    }
    return token;
};

//finds out who the user is through the token
const getUserFromToken = () => {
    const token = getToken();
    return token ? JSON.parse(atob(token.split(".")[1])).user : null;
};

export { createToken, getToken, getUserFromToken };