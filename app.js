const superagent = require("superagent");
const inquirer = require("inquirer");
const figlet = require("figlet");
const moviesearch = require("moviesearch");

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
    // Array of results
    const searchResults = await moviesearch.search(query);

    // Print results
    _printResults(searchResults);

    // Choosing a result through a prompt
    const movieChoice = await _choose();

    const movieInfo = await moviesearch.getMovieById(
        searchResults[movieChoice.choice].imdbID
    );
    _printMovieDesc(movieInfo);
}

module.exports = {
    search
};
