/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: http://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    login: {
      type: 'string',
      unique: true,
      required: true

    },

    email: {
      type: 'string',
      unique: true,
      required: true
    },

    notes: {
      collection: 'note',
      via: 'user'
    }

  },

};

