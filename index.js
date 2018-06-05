var _ = require('lodash');
var movieData = require('./movies.json');

// movies before 1990 with imdbRating>8.7
var popularOldies = _.filter(movieData, (movie) => movie.year < 1990 && movie.imdbRating > 8.7)
console.log(popularOldies);
var popularOldiesTitles = popularOldies.map((movie) => movie.originalTitle)
console.log(popularOldiesTitles)

// Do any movies start John Travolata in 1994
var travoltaMovies = _.filter(movieData, (movie) => { return _.find(movie.actors, (actor) => actor === "John Travolta") })

// Get a list of distinct actors
var allActors = _.map(movieData, 'actors')
var uniqActors = _.union(...allActors)

// OR
var allActors = _.chain(movieData)
    .map(movieData, 'actors')
    .union(...allActors)
    .value();

var abc = 123;