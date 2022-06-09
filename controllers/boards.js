const Boards = require('../models/boards');

/**
 * Details about the stage
 * 1: TODO
 * 2: In Progress
 * 3: Completed
 */

// ! You can assume that the given body is always valid
const createItem = async (req, res) => {
	const item = await Boards.create(req.body);
	res.status(201).json(item);
};
// ! You can assume that the given id is always valid
const updateItem = async (req, res) => {
	if (req.body.stage === 1 || req.body.stage === 2 || req.body.stage === 3) {
		await Boards.update(req.body, { where: { id: req.params.id } });
		const item = await Boards.findOne({ where: { id: req.params.id } });

		res.status(200).json(item);
	} else {
		// ! since it said no required response, i'll just put a 'invalid request body' as default
		res.status(400).send('invalid request body');
	}
};

module.exports = { createItem, updateItem };
