import { urlencoded } from 'body-parser';
import React from 'react';
import SignupPage from './pages/SignUpPage';

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
      <div>
        {apiData.map((item, i) => {
          return <img src={item.url} alt={`Search Result ${i}`} width="500" height="600" />
        })}
      </div>
      <div>
        <SignupPage />
      </div>
    </div>
  );
}

export default App;
