// Import the necessary Node.js Packages
var axios = require('axios');
var moment = require('moment');

// Import our custom packages
var logger = require('../logger');

// Export the method we want for running the concert-finding logic
module.exports = {
    query: function (artist) {

        // Form the artist query URL
        var artistQueryURL = 'https://rest.bandsintown.com/artists/' + artist + '/events?app_id=codingbootcamp';

        // Make the axios API GET call to retrieve the information about this artist's upcoming shows
        axios.get(artistQueryURL)
            .then(function (response) {

                var printMessage = '';

                // If we found some shows for the given artist
                if (response.data.length !== 0) {

                    // For each one of our results, add it to our print message
                    printMessage += `\nUpcoming Shows for "${artist}":\n`;
                    for (let i = 0; i < response.data.length; i++) {
                        const currentShow = response.data[i];

                        printMessage += '\n';
                        printMessage += [
                            `Venue: ${currentShow.venue.name}`,
                            `Location: ${currentShow.venue.city}${(currentShow.venue.region !== '') ? ', ' + currentShow.venue.region : ''}, ${currentShow.venue.country}`,
                            `Date: ${moment(currentShow.datetime).format('MM/DD/YYYY')}`,
                        ].join('\n');
                        printMessage += logger.getStrDivider();
                    }
                }
                // If we didn't find any shows for the given artist
                else {

                    // Add that we didn't find anything to our print message
                    printMessage += `Could not find any upcoming shows for "${artist}"!`;
                    printMessage += logger.getStrDivider();
                }

                // Print our message
                logger.print(printMessage);
            })
            .catch(function (error) {

                // If we encountered an error, console log it out
                logger.print(error);
            });
    }
}