import React, {useState, useEffect} from "react";
import * as GifActions from "../../api/GifActions";

const GifFinder = () => {
    const [search, setSearch] = useState("");
    const [gifNum, setGifNum] = useState(6);
    const [apiData, setApiData] = React.useState([]);

    const grabGifs = async (event) => {
        event.preventDefault();
        const gifInfo = {
            searchTerm: search,
            limit: gifNum
        }
        const res = await GifActions.getGifs(gifInfo);

        if (res.data.data.data) {
            setApiData(res.data.data.data);
            setSearch("");
        }
    }
    // Write a function that goes into the backend to grab the API information.

    return (
        <div>
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
            {apiData.map((gif) => {
                return (
                    <img src={gif.url}/>
                )
            })}
        </div>
    )
}

export default GifFinder