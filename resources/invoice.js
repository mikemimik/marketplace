'use strict';

let ObjectId = require('mongoose').SchemaTypes.ObjectId;

let Invoice = {
  attributes: {
    session: { type: String, max: 200, required: true, slug: true },
    payment: { type: String, enum: ['visa', 'mastercard', 'paypal'] },
    created: { type: Date, default: Date.now, required: true },
    _creator: { type: ObjectId, ref: 'User' },
    _items: [ { type: ObjectId, ref: 'Item' } ]
  }
};

module.exports = Invoice;