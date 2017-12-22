const Artist = require('../models/artist');

/**
 * Sets a group of Artists as retired
 * @param {array} _ids - An array of the _id's of of artists to update
 * @return {promise} A promise that resolves after the update
 */
module.exports = (_ids) => {
    return Artist.update({          // update artist records
            _id: { $in: _ids }      // find all artists whose _ids are on the given array of _ids
        },
        { retired: true },          // set retired flag to true
        { multi: true });           // allow multiple update at once
};
