const Artist = require('../models/artist');

/**
 * Finds a single artist in the artist collection.
 * @param {object} artistProps - Object containing a name, age, yearsActive, and genre
 * @return {promise} A promise that resolves with the Artist that was created
 */
module.exports = (artistProps) => {
    // create new artist object
    const artist = new Artist(artistProps);
    // save the artist object into database and return promise
    return artist.save();
};
