/**
 * Food.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: "string"
    },
    category: {
      type: 'string',
      example: 'soup'
    },
    recipe: {
      type: "String"
    },
    amount: {
      type: "number"
    }
  },

};

