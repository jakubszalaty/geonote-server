/**
 * Attachment.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: http://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    type: {
      type: 'string',
      enum: ['image', 'video',]
    },

    value: {
      type: 'string'
    },

    description: {
      type: 'string'
    },

    note: {
      model: 'note'
    },

  },

};

