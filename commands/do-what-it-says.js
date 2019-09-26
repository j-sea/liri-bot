
// Import our custom packages
var logger = require('../logger');

module.exports = {
    do: function (term) {

        // Put in custom logic to replace the command and term here
        var fs = require('fs');
    
        // If no term was supplied
        if (!term) {
    
            // Set our default file here
            term = 'random.txt';
        }
    
        // Read the first line of the supplied file
        fs.readFile(term, 'utf8', function(err, data) {
    
            // If we got information back from the file
            if (!err) {
    
                // Extract our command and term from the data
                command = data.slice(0, data.indexOf(','));
                term = data.slice(data.indexOf(',') + 1);
    
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