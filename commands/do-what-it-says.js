// Import our Node.js Packages
var fs = require('fs');

// Import our custom packages
var logger = require('../logger');

module.exports = {
    do: function (filepath) {
    
        // If no filepath was supplied
        if (!filepath) {
    
            // Set our default file here
            filepath = 'random.txt';
        }
    
        // Read the first line of the supplied file
        fs.readFile(filepath, 'utf8', function(err, data) {
    
            // If we got information back from the file
            if (!err) {
    
                // Extract our command and term from the data
                var command = data.slice(0, data.indexOf(','));
                var term = data.slice(data.indexOf(',') + 1);
    
                // If the term is surrounded by quotation marks
                if (term.charAt(0) === '"' && term.charAt(term.length - 1) === '"') {
    
                    // Remove the surrounding quotation marks
                    term = term.slice(1, -1);
                }

                // Run the appropriate command depending on file input
                switch (command) {
                    case 'concert-this': require('./concert-this').query(term); break;
                    case 'spotify-this-song': require('./spotify-this-song').query(term); break;
                    case 'movie-this': require('./movie-this').query(term); break;
                }
            }
            // If an error occurred during reading the file
            else {
    
                // Log the error
                logger.print('Error: ' + err + logger.getStrDivider());
            }
        })
    }
}