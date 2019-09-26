// Import the necessary Node.js Packages
var SpotifyInstance = require('node-spotify-api');

// Load the environment variables from the .env file
require("dotenv").config();

// Load a new Spotify object
var spotify = new SpotifyInstance(require('../keys').spotify);

// Import the necessary Node.js Packages
var axios = require('axios');
var moment = require('moment');

// Import our custom packages
var logger = require('../logger');

// Export the method we want for running the song-finding logic
module.exports = {
    query: function (song) {

        // Make the spotify call to retrieve the information about this song
        spotify.search({
            type: 'track',
            query: song,
        },
        function (err, data) {

            // If we didn't encounter an error when retrieving track information
            if (!err) {

                // If we found track information
                if (data.tracks.items.length !== 0) {

                    // Print the track information
                    var printMessage = `\nSong Information for "${song}":\n`;
                    printMessage += `\nArtist(s): ${data.tracks.items[0].artists.reduce(
                        function(accumulator, currentValue) {
                            accumulator.push(currentValue.name);
                            return accumulator;
                        },
                        []
                    ).join(', ')}`;
                    printMessage += `\nTrack Name: ${data.tracks.items[0].name}`;
                    printMessage += `\nLink: ${data.tracks.items[0].external_urls.spotify}`;
                    printMessage += `\nAlbum: ${data.tracks.items[0].album.name}`;
                    printMessage += logger.getStrDivider();
                    logger.print(printMessage);
                }
                // If we didn't find track information
                else {

                    // Print that we didn't find anything
                    logger.print(`Spotify didn't find anything for "${song}"` + logger.getStrDivider())
                }
            }
            // If we encountered an error during track information retrieval
            else {

                // Print the error information
                logger.print(`Error occurred: ${err}` + logger.getStrDivider());
            }
        });
    }
}