/*
Mongoose schema for the collection
*/

/**
 * Module dependencies.
 * @private
 */
const mongoose = require('mongoose');

// eslint-disable-next-line new-cap
const Test = mongoose.Schema({
	category: String,
	lastTimeChecked: Number,
	name: String,
	registry: String,
	sha: String,
	tag: String,
});

/**
 * Module exports.
 * @param {String} modelName
 * @param {*} schema
 * @param {String} collectionName
 * @public
 */
module.exports = mongoose.model('Test', Test, 'test');
