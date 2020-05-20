const { Animals } = require('../../models');

module.exports = {
	getAll: async (req, res) => {
		try {
			const animals = await Animals.find({}).populate('feeds');

			res.status(200).json({ message: 'Get all animals data', data: animals });
		} catch (error) {
			console.log(error);
			throw error;
		}
	},
	getById: async (req, res) => {
		try {
			const { id } = req.params;
			const result = await Animals.findById(id).populate('feeds');
			res.status(200).json({
				message: `Get data by id = ${id} success`,
				data: result
			});
		} catch (error) {
			console.log(error);
			throw error;
		}
	},
	create: async (req, res) => {
		try {
			const {
				name,
				scientificName,
				height,
				weight,
				populations,
				habitats,
				status,
				threats,
				feeds,
				zoo,
				image1,
				image2,
				image3,
				caption
			} = req.body;
			const newAnimal = await Animals.create({
				name,
				scientificName,
				height,
				weight,
				populations,
				habitats,
				status,
				threats,
				feeds,
				zoo,
				image1,
				image2,
				image3,
				caption
			});
			res.status(201).json({
				message: 'New animal successfully created',
				data: newAnimal
			});
		} catch (error) {
			console.log(error);
			throw error;
		}
	},
	editById: async (req, res) => {
		try {
			const { id } = req.params;
			const {
				// name,
				// scientificName,
				// height,
				// weight,
				// populations,
				// habitats,
				// status,
				// threats,
				// feeds,
				// zoo,
				// image1,
				// image2,
				// image3,
				caption
			} = req.body;

			const updatedAnimal = await Animals.findByIdAndUpdate(
				id,
				{
					$set: {
						// name,
						// scientificName,
						// height,
						// weight,
						// populations,
						// habitats,
						// status,
						// threats,
						// feeds,
						// zoo,
						// image1,
						// image2,
						// image3,
						caption
					}
				},
				{ new: true }
			);

			res.status(200).json({
				message: `Animal by id-${id} successfully updated`,
				data: updatedAnimal
			});
		} catch (error) {
			console.log(error);
			throw error;
		}
	},
	deleteById: async (req, res) => {
		try {
			const { id } = req.params;
			const result = await Animals.findByIdAndRemove(id);

			res.status(200).json({
				message: `Animal by id-${id} successfully deleted`,
				data: result
			});
		} catch (error) {
			console.log(error);
			throw error;
		}
	},
	filterByName: async (req, res) => {
		try {
			const { name } = req.query;
			const filteredAnimals = await Animals.filter((element) => {
				return element.name.toLowerCase() === name.toLowerCase();
			});

			res.status(200).json({
				message: 'Data has been filtered by name',
				data: filteredAnimals
			});
		} catch (error) {
			console.log(error);
			throw error;
		}
	},
	filterByZoo: async (req, res) => {
		try {
			const { zoo } = req.query;
			const filteredAnimals = await Animals.filter((element) => {
				return element.zoo.toLowerCase() === zoo.toLowerCase();
			});

			res.status(200).json({
				message: 'Data has been filtered by zoo',
				data: filteredAnimals
			});
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
};
