# Movie Search
A command line application to search for movies and get a quick description

## Getting Started
Follow the instructions to get this application running on your local machine

### Prerequisites
* Node.js
* [OMDb](http://www.omdbapi.com/) api key

### Installing
Clone this repository using `https://github.com/adrianpalomares/movie-search.git`

Install dependencies
```
npm install 
```

Navigate to the moviesearch folder and find config.json

Then input your api key into the "apiKey" key
```
"apiKey": "<API KEY GOES HERE>",
```
Save the file

Application should be ready to use!

## Documentation

### ``` node cli.js search -q <QUERY>```
This is the main command. Input the name/query you want to search for.

![Screenshot from 2020-03-20 15-59-54](https://user-images.githubusercontent.com/37012618/77212515-b588d800-6ac4-11ea-8cc8-7b68497c0cc5.png)

If the query contains spaces, make sure to include quotation marks around the query

``` "<QUERY>"```
