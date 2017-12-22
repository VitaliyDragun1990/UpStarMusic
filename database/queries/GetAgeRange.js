const Artist = require('../models/artist');

/**
 * Finds the lowest and highest age of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
 */
module.exports = () => {
      const minQuery = Artist
        .find({})                           // find all artists
        .sort({age: 1})                     // sort them by age property asc order
        .limit(1)                           // return the 1 instance in the list
        .then(artists => artists[0].age);   // return just the age of that artist

    const maxQuery = Artist
        .find({})                           // find all artists
        .sort({age: -1})                    // sort them by age property desc order
        .limit(1)                           // return the 1 instance in the list
        .then(artists => artists[0].age);   // return just the age of that artist

    return Promise.all([minQuery, maxQuery])
        .then((result) => {
        return { min: result[0], max: result[1] };
        });
};
