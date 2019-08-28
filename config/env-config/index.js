/*
Expose the proper config files according to the
node environement.
*/

/**
 * Module dependencies.
 * @private
 */
const configProd = require('./config.prod');
const configDev = require('./config.dev');

const {NODE_ENV} = process.env;

/**
 * Module exports.
 * Expose config according to the NODE_ENV
 * @public
 */
module.exports = NODE_ENV === 'production' ?
	configProd :
	configDev;
