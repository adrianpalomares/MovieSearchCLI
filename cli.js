const yargs = require("yargs");
const app = require("./app.js");

yargs
    .usage("$0: Usage <cmd> [options]")
    .command({
        command: "search",
        desc: "Search for a movie",
        builder: yargs => {
            return yargs.options("q", {
                alias: "query",
                describe: "query for a movie"
            });
        },
        handler: argv => {
            app.search(argv.query);
        }
    })
    .help("help").argv;
