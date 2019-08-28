/**
 * Database helper methods to insert or delete test data from MongoDB
 */
const MongoClient = require('mongodb').MongoClient;
const configuration = require('./config');

// To store the database reference
let databaseSingleton;

// Collection names
const TEST = 'test';

/**
 * Connect to database. If already connected return the saved mongoDB instance
 *
 * @returns database reference
 */
async function connectToDatabase() {
	if (!databaseSingleton) {
		const client = await MongoClient.connect(configuration.mongoDB, { useNewUrlParser: true });
		const db = client.db('info');

		databaseSingleton = db;
	}
	return databaseSingleton;
}
/**
 * Insert test data into binaryinfo collection
 *
 * @returns Promise which will resolved on successful data insertion
 */
function insertInfoData() {
	const infoObj = {
		'name': 'nginx__test',
		'registry': 'https://hub.docker.com/_/centos__test',
		'sha': '0000000000000000000000000000000000000000000000000000000000000000',
		'tag': 'official_release__test',
	};
	return databaseSingleton.collection(TEST).insertOne(tnfoObj);
}
/**
 * Remove test binary info data
 *
 * @returns Promise which will resolved on successful test data deletion
 */
function removeInfoData() {
	const query = {
		'name': 'nginx__test',
		'sha': '0000000000000000000000000000000000000000000000000000000000000000',
	};
	return databaseSingleton.collection(TEST).deleteOne(query);
}

module.exports = {
	insertInfoData,
	connectToDatabase,
	removeInfoData,
};
