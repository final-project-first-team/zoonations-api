const { AdoptData } = require('../../models');

module.exports = {
	getAll: async (req, res) => {
		try {
			const adoptData = await AdoptData.find({}).populate('users').populate('animals');

			res.status(200).json({ message: 'Get all adopt data', data: adoptData });
		} catch (error) {
			console.log(error);
			throw error;
		}
	},
	create: async (req, res) => {
		try {
			const { userId, animalId, long, status } = req.body;
			const newAdoptData = await AdoptData.create({
				userId,
				animalId,
				long,
				status
			});
			res.status(201).json({
				message: `New adopt data successfully created`,
				data: newAdoptData
			});
		} catch (error) {
			console.log(error);
			throw error;
		}
	},
	deleteById: async (req, res) => {
		try {
			const { id } = req.params;
			const result = await AdoptData.findByIdAndRemove(id);

			res.status(200).json({
				message: `Adopt Data by id-${id} successfully deleted`,
				data: result
			});
		} catch (error) {
			console.log(error);
			throw error;
		}
	},
	getById: async (req, res) => {
		try {
			const { id } = req.params;
			const result = await AdoptData.findOne({ userId: id }).populate('animalId');

			res.status(200).send({
				data: result
			});
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
};
