const axios = require('axios');

const index = async (req, res) => {
    // Relevant Variables

    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${req.body.searchTerm}&limit=20&offset=0&rating=g&lang=en`)
        .then((response) => {
            return res.status(200).json({
                message: "Success",
                data: response.data,
            });
        });
};

module.exports = {
    index,
}