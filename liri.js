// Grab the <command> from the command line
var command = process.argv[2];

// Grab the <term> from the command line
var term = process.argv.slice(3).join(' ');

// Run the appropriate command depending on user input
switch (command) {
    case 'concert-this': require('./commands/concert-this').query(term); break;
    case 'spotify-this-song': require('./commands/spotify-this-song').query(term); break;
    case 'movie-this': require('./commands/movie-this').query(term); break;
    case 'do-what-it-says': require('./commands/do-what-it-says').do(term); break;
}