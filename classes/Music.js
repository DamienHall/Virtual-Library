// import the Media class:
const Media = require('./Media');
// create your Music class:
class Music extends Media{
    static shortestAlbum(music){
        let shortest = music[0];
        for (let music of music){
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
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length}`;
    }
}
// don't change below
module.exports = Music;
