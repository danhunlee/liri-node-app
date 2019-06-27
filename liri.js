
require("dotenv").config();
var Spotify = require('node-spotify-api');
var fs = require("fs");
var moment = require('moment');
var axios = require('axios');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var order = process.argv[2].toLowerCase().trim();
var name = process.argv.splice(3).join(' ').trim();


switch(order){
    case "movie-this":
        movieInfo(name);
        break;
    case "spotify-this-song":
        spotifyThisSong(name);
        break;
    case "concert-this":
        concert(name);
        break;
    case "do-what-it-says":
        doIt();
        break;   
    default:
        console.log(order + " is not a valid order.");
}

function movieInfo(movie){
    if(movie === ''){
        movie = "the avengers";  
    }
    var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    axios.get(queryURL).then(
    function(response) {
        console.log("Title: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("IMDB rating: " + response.data.imdbRating);
        var value;
        for(value in response.data.Ratings){
            if(response.data.Ratings[value].Source === "Rotten Tomatoes"){
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[value].Value);
            }
        }
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
    });
}

function spotifyThisSong(song){
    if(song === ''){
        song = "Reality";        
    }

    spotify.search({ type: 'track', query: song }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }

        for(var info in data.tracks.items){
            for(var artist in data.tracks.items[info].artists){
                console.log("Artist: " + data.tracks.items[info].artists[artist].name);
            }
            console.log("Song: " + data.tracks.items[info].name); 
            console.log("Preview: " + data.tracks.items[info].preview_url); 
            console.log("Album: " + data.tracks.items[info].album.name + '\n');        
        };
      });      
}

function concert(artist){
    if(artist === ''){
        console.log("You must include an artist.");
    }
    else{
        var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
        axios.get(queryURL)
            .then(function (response) {
            for(var value in response.data){
                console.log("Venue: " + response.data[value].venue.name);
                console.log("Location: " + response.data[value].venue.city + ", " + response.data[value].venue.region + ", " + response.data[value].venue.country);
                console.log("Date: " + moment(response.data[value].datetime).format('MM/DD/YYYY') + "\n");            
            };
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

function doIt(){
    var ord;
    var nam;

    fs.readFile('./random.txt', 'utf8', (err, data) => {
        if (err) throw err;
        {
            console.log(data);
            ord = data.split(',')[0];                  
            nam = data.split(',')[1].replace(/"/g, ''); 
            ord = lowerCamelCase(ord);                       
            callFunction(ord, nam);                    
        }
      });
}

function callFunction(callback, parameter){
    var searchFunctions = ['concert','spotifyThisSong','movieInfo'];
    if(searchFunctions.indexOf(callback) !== -1){
        callback = eval(callback);  
        callback(parameter);
    }
    else{
        console.log(`Error: ${callback} is not valid search function.`);
    }
}

function lowerCamelCase(string) 
{   string.toLowerCase();
    var strings = string.split('-')
    var cCstring = '';
    cCstring += strings[0]

    for(var i = 1; i < strings.length; i++){
        cCstring += strings[i].charAt(0).toUpperCase() + strings[i].slice(1);
    }
    return cCstring;  
}
