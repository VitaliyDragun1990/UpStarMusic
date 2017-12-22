const Artist = require('../models/artist');

/**
 * Searches through the Artist collection
 * @param {object} criteria An object with a name, age, and yearsActive
 * @param {string} sortProperty The property to sort the results by
 * @param {integer} offset How many records to skip in the result set
 * @param {integer} limit How many records to return in the result set
 * @return {promise} A promise that resolves with the artists, count, offset, and limit
 * like this: {all: [artists], count: count, offset: offset, limit: limit }
 */
module.exports = (criteria, sortProperty, offset = 0, limit = 20) => {
    const query = Artist
        .find(buildQuery(criteria))     // find all user using given search criteria
        .sort({ [sortProperty]: 1} )    // sort result with given sortProperty
        .skip(offset)                   // skip given number of artists
        .limit(limit);                  // limit result using given argument

    return Promise.all([query,
        Artist.find(buildQuery(criteria)).count()]) // count the exact number of artists that that satisfy our criteria
        .then(results => {
            return {
                all: results[0],
                count: results[1],
                offset: offset,
                limit: limit
            };
        });
};

const buildQuery = (criteria) => {
  const query = {};

  if (criteria.age) {
      query.age = {
          $gte: criteria.age.min,
          $lte: criteria.age.max
      };
  }
  if (criteria.yearsActive) {
      query.yearsActive = {
        $gte: criteria.yearsActive.min,
        $lte: criteria.yearsActive.max
      };
  }
  if (criteria.name) {
      // // using regexp method
      // const regex = new RegExp(criteria.name);
      // query.name = {
      //     $regex: regex
      // };

      // using text search method - first we need create text index for 'name' property in our database
      // like so: open mongo shell, use upstar_music, db.artists.createIndex({name: "text"})
      query.$text = { $search: criteria.name };
  }

  return query;
};


