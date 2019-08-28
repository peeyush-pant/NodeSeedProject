/*
Entry point of the application.
*/

/**
 * Module dependencies.
 * @private
 */
const server = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const logger = require('./config/winston-config/winston');

// Config files injection
const config = require('./config/env-config');
const { port } = config;

// Start Adding express middlewares

/* Extract the entire body portion of an incoming request
   stream and exposes it on req.body
*/
server.use(bodyParser.json());
// Support parsing of application/x-www-form-urlencoded post data
server.use(bodyParser.urlencoded({ extended: true }));

// Secure apps by setting various HTTP headers
server.use(helmet());

// Enable CORS - Cross Origin Resource Sharing
server.use(cors());

// Use the winston stream with the morgan utility so that
// winston specific logs are generated with each API requests.
server.use(morgan('combined', { stream: logger.stream }));

// Mongo configuration util initialisation
require('./db_util').connect(config);

// All route files initialisation
require('./app/routes/test.route.js')(server);

// Runs if the API requested by the user is not right.
server.use(function (req, res) {
	res.status(404).send({ url: req.originalUrl + ' not found' });
});

server.listen(port, () => {
	logger.info('Server: ', { message: 'Server started successfully' });
	logger.info('Server: ', { message: `Listening at port ${port}` });
});
