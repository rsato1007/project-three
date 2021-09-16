import React, {useState, useEffect} from "react";
import * as GifActions from "../../api/GifActions";

const GifFinder = () => {
    const [search, setSearch] = useState("");
    const [apiData, setApiData] = React.useState([]);

    const grabGifs = async (event) => {
        event.preventDefault();
        const gifInfo = {
            searchTerm: search,
        }
        const res = await GifActions.getGifs(gifInfo);

        // const fetchURL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_Key}&q=${search}&limit=20&offset=0&rating=g&lang=en`;
        // const response = await fetch(fetchURL);
        // const incomingData = await response.json();
    }
    // Write a function that goes into the backend to grab the API information.

    return (
        <form onSubmit={(e) => grabGifs(e)}>
            <input 
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                type="text"
                name="search"
                placeholder="Search for gif"
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default GifFinder