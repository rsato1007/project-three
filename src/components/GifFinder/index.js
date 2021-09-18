import React, {useState, useEffect} from "react";
import * as GifActions from "../../api/GifActions";

const GifFinder = ({ setPostBody, submitPost }) => {
    const [search, setSearch] = useState("");
    const [gifNum, setGifNum] = useState(6);
    const [apiData, setApiData] = React.useState([]);
    const [showButton, setButtonStatus] = useState(false);

    const grabGifs = async (event) => {
        event.preventDefault();
        setButtonStatus(false);
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

    // Only show button when the search has been done.
    const selectGif = (event) => {
        event.preventDefault();
        setButtonStatus(true);
        setPostBody(event.target.src);
    }

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
                    <img src={gif.images.original.url} height="80" width="80" onClick={(e) => selectGif(e)}></img>
                )
            })}
            {showButton &&
                <button onClick={(e) => submitPost(e)}>Use This Gif</button>
            }
        </div>
    )
}

export default GifFinder