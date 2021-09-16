const index = async (req, res) => {
    // Relevant Variables
    const apiKey = "VR5MXJ8fw0BYcpei2IQf0AUzzmtXirfd";
    const searchTerm = 'Ice Cream';

    // fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_Key}&q=${searchTerm}&limit=20&offset=0&rating=g&lang=en`)
	// .then(response => response.json())
	// .then(data => console.log(data))
	// .catch(err => console.error(err));
    /* This file is used to test the API before we try to incorporate it into our code */

    /* How many searchTerms should we include? */
    // const fetchURL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_Key}&q=${searchTerm}&limit=20&offset=0&rating=g&lang=en`;
    // const response = await fetch(fetchURL);
    // const incomingData = await response.json();
    console.log("welp");
};

module.exports = {
    index,
}