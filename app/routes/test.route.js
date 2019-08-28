/*
All the API's related to the test collection.
*/

/**
 * Module exports.
 * @public
 */
module.exports = (app) => {
	/**
	* Module dependencies.
	* @private
	*/
	const ctrl = require('../controllers/test.controller.js');

	// Get test info
	app.get('/api/info', ctrl.callback);
};
