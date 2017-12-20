// import mongoose
const mongoose = require('mongoose');
// get Schema from mongoose
const Schema = mongoose.Schema;

// define schema for Album
const AlbumSchema = new Schema({
    title: String,
    date: Date,
    copiesSold: Number,
    numberTracks: Number,
    image: String,
    revenue: Number
});

// export AlbumSchema for future usage
module.exports = AlbumSchema;

