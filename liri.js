require("dotenv").config();

var spotify = new Spotify(keys.spotify);
  var client = new Twitter(keys.twitter);

  var params = {
    screen_name: 'walkemjay'
} && {
    count: 20
};