/*
Expose the production config.
*/

/**
 * Module dependencies.
 * @private
 */
require('dotenv').config();

const {PRODUCTION_PORT, PRODUCTION_MONGO_URI} = process.env;

/**
 * Module exports.
 * @public
 */
module.exports = {
	port: PRODUCTION_PORT,
	mongoURI: String(PRODUCTION_MONGO_URI),
};
