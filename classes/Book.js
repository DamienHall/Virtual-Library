// import the Media class:
const Media = require("./Media.js");

// create your Book class:
class Book extends Media {
    // static methods
    static highestRating(array) {
        let highestRatedBook = array[0];

        for (const book of array) {
            if (book.rating > highestRatedBook.rating) {
                highestRatedBook = book;
            }
        }

        return highestRatedBook;
    } 

    // Everthing else
    constructor(title, year, genre, author, numPages, rating) {
        super(title, year, genre);
        this.author = author;
        this.numPages = numPages;
        this.rating = rating;
    }

    summary() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
    }
}

// don't change below
module.exports = Book;
