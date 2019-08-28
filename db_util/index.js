/*
DB utility. This file is used to establish connection with mongo db.
*/

/**
 * Module dependencies.
 * @private
 */
const mongoose = require('mongoose');
const logger = require('../config/winston-config/winston');

/**
 * Connect to DB
 * @param {object} config The config object that will contain the mongo URI.
 * @public
 */
const connect = (config) => {
	logger.info('Database: ', {message: 'DB connection started'});
	mongoose.Promise = global.Promise,

	mongoose.connect(config.mongoURI, {
		useNewUrlParser: true,
		reconnectTries: Number.MAX_VALUE,
		reconnectInterval: 4000,
	})
		.then(() => {
			logger.info('Database: ',
				{message: 'Successfully connected to the database'});
		})
		.catch((err) => {
			logger.error('Database: ', {message: err});
			process.exit();
		});
};

/**
 * Module exports.
 * @public
 */
module.exports = {
	connect,
};
