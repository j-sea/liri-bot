// Import the necessary Node.js Packages
var axios = require('axios');

// Export the method we want for running the concert-finding logic
module.exports = {
    query: function (artist) {
        var artistQueryURL = 'https://rest.bandsintown.com/artists/' + artist + '/events?app_id=codingbootcamp';

        
    }
}