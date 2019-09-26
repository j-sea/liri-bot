// Import the necessary Node.js Packages
var axios = require('axios');

// Import our custom packages
var logger = require('../logger');

// Export the method we want for running the movie-finding logic
module.exports = {
    query: function (movie) {
        axios.get("").then(
            function(response) {
              console.log("The movie's rating is: " + response.data.imdbRating);
            })
            .catch(function(error) {
            });


        // Form the movie query URL
        var movieQueryURL = 'http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&apikey=trilogy';

        // Make the axios API GET call to retrieve the information about this movie
        axios.get(movieQueryURL)
            .then(function (response) {

                var printMessage = '';
console.log(response.data);
                // If we found some information for the given movie
                if (!response.data.hasOwnProperty('Error')) {

                    // For each one of our results, add it to our print message
                    printMessage += `\nMovie Information for "${movie}":\n`;
                    printMessage += `\nTitle: ${response.data.Title}`;
                    printMessage += `\nYear: ${response.data.Year}`;
                    printMessage += `\nIMDB Rating: ${response.data.imdbRating}/10`;
                    printMessage += `\nRotten Tomatoes Rating: ${response.data.Ratings.reduce(
                        function (accumulator, currentValue){
                            if (currentValue.Source === 'Rotten Tomatoes') {
                                accumulator = currentValue.Value;
                            }
                            return accumulator;
                        }
                        , 'N/A'
                    )}`;
                    printMessage += `\nCountry: ${response.data.Country}`;
                    printMessage += `\nLanguage: ${response.data.Language}`;
                    printMessage += `\nPlot: ${response.data.Plot}`;
                    printMessage += `\nActors: ${response.data.Actors}`;
                    printMessage += logger.getStrDivider();
                }
                // If we didn't find any information for the given movie
                else {

                    // Add that we didn't find anything to our print message
                    printMessage += `\nCould not find any information for "${movie}"!\n`;
                    printMessage += logger.getStrDivider();
                }

                // Print our message
                logger.print(printMessage);
            })
            .catch(function (error) {

                var printMessage = '';
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    printMessage += "---------------Data---------------";
                    printMessage += error.response.data;
                    printMessage += "---------------Status---------------";
                    printMessage += error.response.status;
                    printMessage += "---------------Status---------------";
                    printMessage += error.response.headers;
                }
                else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an object that comes back with details pertaining to the error that occurred.
                    printMessage += error.request;
                }
                else {
                    // Something happened in setting up the request that triggered an Error
                    printMessage += "Error: " + error.message;
                }

                if (error.config) {
                    printMessage += error.config;
                }

                printMessage += logger.getStrDivider();

                // Print our message
                logger.print(printMessage);
            });
    }
}