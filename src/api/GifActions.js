import CommonsCommands from "./CommonsCommands";

// Get gifs
const getGifs = (data) => {
    return CommonsCommands.post("/gifs", data);
};

export { getGifs };