const superagent = require("superagent");

// Setting up ability to use environment file
require("dotenv").config();

const _print = results => {
    results.forEach((result, index) => {
        console.log(`${index}) ${result.Title}`);
    });
};

// Main function
async function search(query) {
    // Base Url
    const baseUrl = `https://www.omdbapi.com/?apiKey=${process.env.API_KEY}`;

    const searchResponse = await superagent.get(baseUrl + `&s=${query}`);

    // Array of results
    const searchResults = searchResponse.body.Search;

    // Print results
    _print(searchResults);
}

module.exports = {
    search
};
