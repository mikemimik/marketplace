'use strict';

let ObjectId = require('mongoose').SchemaTypes.ObjectId;

let Item = {
  attributes: {
    name: { type: String, max: 40, slug: true, require: true },
    type: [{ type: String, enum: ['fruit', 'vegatable', 'dairy', 'wheat', 'junk'] }]
  }
};

module.exports = Item;
