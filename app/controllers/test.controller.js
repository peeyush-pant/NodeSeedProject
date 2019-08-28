/*
All the buisness logic that is related to the interaction
with the test collection is present in this controller.
*/

/**
 * Module dependencies.
 * @private
 */
const model = require('../models/test.model.js');
const logger = require('../../config/winston-config/winston');


/**
 * Get the document from db.
 * @param {object} req The request object.
 * @param {object} res The response object.
 * @public
 */
const callback = (req, res) => {
	// Fetch parameters from 'req.body'

	model.findOne({
	}).select('-_id')
		.then((data) => {
			if (!data) {
				res.send({
					'message': 'No data available.',
				});
			} else {
				res.send({
					'data': data,
				});
			}
		}).catch((err) => {
			res.status(500).send({
				error: 'Some error occurred.',
			});
			logger.error('BinaryInfo: ', { message: err });
		});
};
/**
 * Module exports.
 * @public
 */
module.exports = {
	callback,
};
