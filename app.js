const superagent = require("superagent");
const inquirer = require("inquirer");
const figlet = require("figlet");

// Setting up ability to use environment file
require("dotenv").config();

const _printResults = results => {
    results.forEach((result, index) => {
        console.log(`${index}) ${result.Title}`);
    });
};

const _printMovieDesc = result => {
    console.log();
    console.log(figlet.textSync(result.Title));
    console.log();
    console.log(`Year: ${result.Year}`);
    console.log(`Rating: ${result.Rated}`);
    console.log(`Actors: ${result.Actors}`);
    console.log(`Plot: ${result.Plot}`);
    console.log();
};

const _choose = () => {
    return inquirer.prompt([
        {
            type: "number",
            name: "choice",
            message: "What movie would you like to choose?"
        }
    ]);
};

// Main function
async function search(query) {
    // Base Url
    const baseUrl = `https://www.omdbapi.com/?apiKey=${process.env.API_KEY}`;

    const searchResponse = await superagent.get(baseUrl + `&s=${query}`);

    // Array of results
    const searchResults = searchResponse.body.Search;

    // Print results
    _printResults(searchResults);

    // Choosing a result through a prompt
    const movieChoice = await _choose();

    // The choice will be in movieChoice.choice <- A number(index)
    const movieInfoResponse = await superagent.get(
        baseUrl + `&i=${searchResults[movieChoice.choice].imdbID}`
    );

    _printMovieDesc(movieInfoResponse.body);
}

module.exports = {
    search
};
