'use strict';

let Maki = require('maki');
let config = require('./config');

let Market = new Maki(config);

let User = Market.define('User', require('./resource/user'));
let Item = Market.define('Item', require('./resource/item'));
let Cart = Market.define('Cart', require('./resource/cart'));
let Invoice = Market.define('Invoice', require('./resource/invoice'));

Market.start();