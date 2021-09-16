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

        if (res.data.data.data) {
            setApiData(res.data.data.data);
            console.log("Here's what the backend sent:", res.data.data.data);
        }
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