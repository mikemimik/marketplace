'use strict';

let Maki = require('maki');
let config = require('./config');

let Market = new Maki(config);

let User = Market.define('User', require('./resources/user'));
let Item = Market.define('Item', require('./resources/item'));
let Cart = Market.define('Cart', require('./resources/cart'));
let Invoice = Market.define('Invoice', require('./resources/invoice'));

Market.start();
