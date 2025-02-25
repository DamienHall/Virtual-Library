// import the Media class:
const Media = require('./Media');
// create your Music class:
class Music extends Media{
    static shortestAlbum(array){
        let shortest = array[0];
        for (const music of array){
            if (music.length < shortest.length){
                shortest = music;
            }
        }
        return shortest;
    }

    constructor( title, year, genre, artist, length ){
    super(title, year, genre);
    this.artist = artist;
    this.length = length;
    }
    summary(){
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
    }
}
// don't change below
module.exports = Music;
