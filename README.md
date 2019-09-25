# LIRI Bot

## Summary
This is a text-recognition bot that will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

## Overview
Created in JavaScript, this app takes user input via the command line, conducts the relevant search queries, displays the results in the console, and also writes the results to `log.txt`.

## Installation

From inside **Git Bash**, enter in the following line by line:

```
git clone https://github.com/j-sea/liri-bot.git
cd liri-bot
npm install
touch .env
```

Finally, inside your new `.env` file, copy in the following text replacing `your-spotify-id` and `your-spotify-secret` with your relevant info:

```
SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret
```

## Run

```
node liri <command> <term>
````

where `<command>` and `<term>` can be one of the following combinations:

* `concert-this` and `artist/band name`
* `spotify-this-song` and `song name`
* `movie-this` and `movie name`
* `do-what-it-says` and `file name` (e.g. `random.txt`)

## Node.js Package Dependencies

* `node-spotify-api`
* `axios`
* `moment`
* `dotenv`

## About

This app was programmed by Jonathan Chan.

For help on this project, you can send an email towards jsea@uw.edu.