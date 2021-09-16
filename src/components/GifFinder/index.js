import React, {useState, useEffect} from "react";
import * as GifActions from "../../api/GifActions";

/* This file is used to test the API before we try to incorporate it into our code */
const apiKey = "VR5MXJ8fw0BYcpei2IQf0AUzzmtXirfd";
const searchTerm = 'Ice Cream';
/* How many searchTerms should we include? */
const fetchURL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_Key}&q=${searchTerm}&limit=20&offset=0&rating=g&lang=en`;

const GifFinder = () => {
    const [search, setSearch] = useState("");

    const grabGifs = async (event) => {
        event.preventDefault();
        await GifActions.get(search);
    }
    const [apiData, setApiData] = React.useState([]);
    React.useEffect(() => {
        (async () => {
        const response = await fetch(fetchURL);
        const incomingData = await response.json();
        setApiData(incomingData.data);
        console.log("here's the api data", apiData);
        })();
      }, []);
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