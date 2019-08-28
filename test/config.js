/**
 * Server where the microservice is deployed.
 */

const server = 'http://localhost:3001';

/**
 * MongoDB used by the deployed microservice
 */
const mongoDB = 'mongodb://217.0.0.1:27017/k2db';

module.exports = {
	server,
	mongoDB,
};
