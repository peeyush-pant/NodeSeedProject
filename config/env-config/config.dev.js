/*
Expose the development config.
*/

const {DEVELOPMENT_PORT, DEVELOPMENT_MONGO_URI} = process.env;

/**
 * Module exports.
 * @public
 */
module.exports = {
	port: DEVELOPMENT_PORT,
	mongoURI: String(DEVELOPMENT_MONGO_URI),
};
