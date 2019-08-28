/*
Config file for using winston logger.
*/

/**
 * Module dependencies.
 * @private
 */
const {createLogger, format, transports} = require('winston');
const fs = require('fs');
require('winston-daily-rotate-file');

const env = process.env.NODE_ENV || 'development';
const logDir = 'log';

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
	fs.mkdirSync(logDir);
}
// DailyRotateFile transport config
const transportAllLogs = new (transports.DailyRotateFile)({
	filename: 'binaryInfoManagerAll-%DATE%.log',
	dirname: __dirname + '/../../log/all',
	datePattern: 'DD-MM-YYYY HH',
	zippedArchive: false,
	maxSize: '40m',
	maxFiles: '30d',
});

const transportErrorLogs = new (transports.DailyRotateFile)({
	filename: 'binaryInfoManagerError-%DATE%.log',
	dirname: __dirname + '/../../log/errors',
	datePattern: 'DD-MM-YYYY HH',
	zippedArchive: false,
	level: 'error',
	maxSize: '40m',
	maxFiles: '30d',
});

const transportExceptionLogs = new (transports.DailyRotateFile)({
	filename: 'binaryInfoManagerException-%DATE%.log',
	dirname: __dirname + '/../../log/exceptions',
	datePattern: 'DD-MM-YYYY HH',
	zippedArchive: false,
	maxSize: '40m',
	maxFiles: '30d',
});

// Winston logger
const logger = createLogger({
	// change level if in dev environment versus production
	level: env === 'development' ? 'debug' : 'info',
	format: format.combine(
		format.timestamp({
			format: 'DD-MM-YYYY HH:mm:ss',
		}),
		format.json()
	),
	transports: [
		new transports.Console({
			level: 'info',
			format: format.combine(
				format.colorize(),
				format.printf(
					(info) => `${info.timestamp} ${info.level}: ${info.message}`
				)
			),
		}),
		transportAllLogs,
		transportErrorLogs,
	],
	exceptionHandlers: [
		transportExceptionLogs,
	],
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
	write: function(message) {
		// use the 'info' log level so the output will
		// be picked up by both transports (file and console)
		logger.info(message);
	},
};

/**
 * Module exports.
 * @public
 */
module.exports = logger;
