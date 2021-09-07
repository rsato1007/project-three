import { urlencoded } from 'body-parser';
import React from 'react';

/* This file is used to test the API before we try to incorporate it into our code */
const apiKey = "VR5MXJ8fw0BYcpei2IQf0AUzzmtXirfd";
const searchTerm = 'Ice Cream';
/* How many searchTerms should we include? */
const fetchURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=20&offset=0&rating=g&lang=en`;

function App() {
  const [apiData, setApiData] = React.useState([]);
  React.useEffect(() => {
    (async () => {
    const response = await fetch(fetchURL);
    const incomingData = await response.json();
    setApiData(incomingData.data);
    console.log("here's the api data", apiData);
    })();
  }, []);

  return (
    <div className="App">
      {apiData.map((item, i) => {
        return <img src={item.url} alt={`Search Result ${i}`} width="500" height="600" />
      })}
    </div>
  );
}

export default App;
