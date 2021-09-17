import CommonsCommands from "./CommonsCommands";

// Get gifs
const getGifs = (data) => {
    return CommonsCommands.post("/api/gifs", data);
};

export { getGifs };