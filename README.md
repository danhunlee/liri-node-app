# liri-node-app

In this assignment, you will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

### Beginning
Here are some of the guidelines to follow so that when you download the copy of these files, you are able to run it on your own device. Make sure you have Node.js installed.

## In the bigger picture,
a) The main file that we are using is lirl.js which is using your own terminal command lines.
b) In your own terminal, clone these files from the github.
c) Install npm install dotenv node-spotify-api axios moment
d) Create a file called .env
e) Input this on your file
    # Spotify API keys
    SPOTIFY_ID=your-spotify-id
    SPOTIFY_SECRET=your-spotify-secret
## Run the function
a) Search for an artist concert schedule on Bands in Town Artist Events using the following format:
node liri.js concert-this <artist>
Example: node liri.js concert-this Ariana Grande
b) Search for a song on Spotify using the following format:
node liri.js spotify-this-song <song>
Example: node liri.js spotify-this-song Reality
c) Search for movie information on OMDB using the following format:
node liri.js movie-this <movie>
Example: node liri.js movie-this The Avengers
d) Perform a search specified by the text in the file random.txt by using the following format:
node liri.js do-what-it-says
Example: node liri.js do-what-it-says
    1) Format of random.txt:
    command,"search argument"
    Example: spotify-this-song,"I Want it That Way"

## Preview of what it looks like
1. [node liri.js concert-this Ariana Grande](previews/concert-this.mov)  
3. [node liri.js spotify-this-song Reality](previews/Spotify-this-song.mov)  
5. [node liri.js movie-this infinity war](previews/movie-this.mov)  
7. [node liri.js do-what-it-says](previews/do-what-it-says.mov) 

## Author
    Hun Lee 

## APIs used
1) OMDB
2) Spotify
3) Bands in Town Artist Events API