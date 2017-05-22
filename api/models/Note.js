/**
 * Note.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: http://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    coords: {
      type: 'json'
      // {'lat': 34, 'lng': 151}
    },

    text: {
      type: 'string'
    },

    user: {
      model: 'user'
    },

    attachments: {
      collection: 'attachment',
      via: 'note'
    }



  },

};

