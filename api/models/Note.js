/**
 * Note.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: http://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    cords: {
      type: 'json'
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

