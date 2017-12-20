// import mongoose
const mongoose = require('mongoose');
// import AlbumSchema
const AlbumSchema = require('./album');

// get Schema from mongoose
const Schema = mongoose.Schema;

// define schema for artist
const ArtistSchema = new Schema({
    name: String,
    age: Number,
    yearsActive: Number,
    image: String,
    genre: String,
    website: String,
    netWorth: Number,
    labelName: String,
    retired: Boolean,
    albums: [AlbumSchema]
});

// create Artist model
const Artist = mongoose.model('artist', ArtistSchema);

// export artist model for future usage
module.exports = Artist;
