/**
 * Test '/api/info' API
*/

/**
 * Module dependencies
 * @private
 */
const supertest = require('supertest');
require('should');
const dbHelper = require('./DBHelper');
const configuration = require('./config');

// Server URL where the testing will ber performed
const server = supertest.agent(configuration.server);

// Insert test data into info collection before any test run
before(function before(done) {
	dbHelper.connectToDatabase().then(() => {
		dbHelper.insertInfoData().then(() => {
			done();
		}).catch((err) => {
			throw err;
		});
	}).catch((err) => {
		console.error(`Can't connect to database : ${err}`);
	});
});

// Remove test data from binaryinfo collection after all tests
after(function(done) {
	dbHelper.removeInfoData().then(() => {
		done();
	}).catch((err) => {
		throw err;
	});
});

// API URL which will be tested
const API_URL = '/api/info';

describe('/api/info', function() {
	it('Request: "Correct" SHA of the binary, Expect: Document from binaryInfo collection for provided SHA ', function(done) {
		server
			.post(API_URL)
			.send({'SHA': '0000000000000000000000000000000000000000000000000000000000000000'})
			.expect('Content-type', /json/)
			.expect(200)
			.end(function(err, response) {
				response.status.should.equal(200);
				response.body.data.sha.should.equal('0000000000000000000000000000000000000000000000000000000000000000');
				done();
			});
	});

	it('Request: "Wrong" SHA of the binary, Expect: Data field should not exist & Message field should exist', function(done) {
		server
			.post(API_URL)
			.send({'SHA': '0000000000000000000000000000000000000000000000000000000000000001'})
			.expect('Content-type', /json/)
			.expect(200)
			.end(function(err, response) {
				response.status.should.equal(200);
				(response.body.data == undefined).should.be.true;
				(response.body.message != undefined).should.be.true;
				done();
			});
	});

	it('Request: "Empty" SHA of the binary, Expect: Data should not exist in response & Message field should exist', function(done) {
		server
			.post(API_URL)
			.send({'SHA': ''})
			.expect('Content-type', /json/)
			.expect(400)
			.end(function(err, response) {
				response.status.should.equal(400);
				(response.body.data == undefined).should.be.true();
				(response.body.message != undefined).should.be.true;
				done();
			});
	});

	it('Request: Wrong SHA format, Expect: Data should not exist in response & Message field should exist', function(done) {
		server
			.post(API_URL)
			.send({'SHA': 'wrong-sha-format'})
			.expect('Content-type', /json/)
			.expect(400)
			.end(function(err, response) {
				response.status.should.equal(400);
				(response.body.data == undefined).should.be.true();
				(response.body.message != undefined).should.be.true;
				done();
			});
	});
});
