// import the Media class:
const Media = require('./Media');
// create your Movie class:
class Movie{
    static longestMovie(movie){
        let longest = movie[0];
        for (let movie of movies){
            if (movie.duration > longest.duration){
                longest = movie;
            }
        }
        return longest;
    }

    constructor( title, year, genre, director, rating ){
    super(title, year, genre);    
    this.director = director;
    this.rating = rating;
}
   summary(){
    return `Title: ${this.title}, Director: ${this.director}, Year: ${year}, Genre: ${this.year}, Duration: ${this.duration}, Rating: ${this.rating}`;
}
}

// don't change below
module.exports = Movie;