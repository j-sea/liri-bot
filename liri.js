// Import the necessary Node.js Packages
var moment = require('moment');

// Grab the <command> from the command line
var command = process.argv[2];

// Grab the <term> from the command line
var term = process.argv.slice(3).join(' ');

// Run the appropriate command depending on user input
switch (command) {
    case 'concert-this': break;
    case 'spotify-this-song': break;
    case 'movie-this': break;
    case 'do-what-it-says': break;
}