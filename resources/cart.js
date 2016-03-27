'use strict';

let ObjectId = require('mongoose').SchemaTypes.ObjectId;

let Cart = {
  attributes: {
    session: { type: String, max: 200, required: true, slug: true },
    created: { type: Date, default: Date.now, required: true },
    _creator: { type: ObjectId, ref: 'User' },
    _items: [ { type: ObjectId, ref: 'Item' } ]
  }
};

module.exports = Cart;