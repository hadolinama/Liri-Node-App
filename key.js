console.log('this is loaded');

var twitterKeys = {
  consumer_key: '<capII6ZgewPTLq07LhgAdQUbT>',
  consumer_secret: '<ygXxxzTtsJJL9B00wrgEnZZyerdO827i9yupQsALfRH1NQuSGs>',
  access_token_key: '<22569646-9slsKmk7KC0qimrsZnRiTHFsQ2rddQ5cuJOkbCwZu>',
  access_token_secret: '<A4oF3sqiPjrGc0lunSzYWIm7SxVFHRGdOKpZNPPR29yiX>',
};

var spotifyKeys = {
  client_id: '0d1dbb592cd147c38e1faeffc59fd842',
  client_secret: '72bd3eef75484ae5937453ac8ec936b6'
};



module.exports = twitterKeys ={
  twitterKeys,
  spotifyKeys,
  omdb_api

};
// *****************************************************************************
// SPOTIFY
function getSong() {

  var playList = '';
  var query = '';

  var spotifyKeys = require('node-spotify-api');

var spotifyKeys = new Spotify({
  id: '0d1dbb592cd147c38e1faeffc59fd842',
  secret: '72bd3eef75484ae5937453ac8ec936b6'
});

spotifyKeys.search({ type: 'track', query: 'All my favorite songs' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

console.log(data);
});

// *************************************************************************
  // TWITTER
  function tweetMessages() {
  var profile = {
    screen_name: 'hfyle'
  };



// ******************************************************************************
  // OMDB

  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "tt3896198&apikey=2252c36b", function(error, response, body) {

    if (!error && response.statusCode === 200) {

      console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
    }
  });
