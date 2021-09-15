import CommonsCommands from "./CommonsCommands";
import * as TokenAction from "../Tools/TokenAction";

const make = (data) => {
    // Should this have a different route?
    // Changing from /auth/login to /users since that makes more sense.
    return CommonsCommands.post("/users", data);
};

const login = (data) => {
    return CommonsCommands.post("/auth/login", data);
};

const getUser = () => {
    let user = TokenAction.getUserFromToken();
    console.log("Ladies and gentlemen, We got em: ", user);
    return user;
};

export { make, login, getUser };