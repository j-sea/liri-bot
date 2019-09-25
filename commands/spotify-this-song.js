// Import the necessary Node.js Packages
var Spotify = require('node-spotify-api');

// Load the environment variables from the .env file
require("dotenv").config();

// Load the relevant keys
var keys = require('./keys');

// Load a new Spotify object
var spotifyObj = new Spotify(keys.spotify);