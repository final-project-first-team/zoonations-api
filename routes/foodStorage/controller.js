const { FoodStorage } = require('../../models');

module.exports = {
	getAll: async (req, res) => {
		try {
			const storage = await FoodStorage.find({}).populate('userId');
			res.status(200).json({ message: 'Get all storage data', data: storage });
		} catch (error) {
			console.log(error);
		}
	},
	// restricted route
	getById: async (req, res) => {
		try {
		} catch (error) {
			console.log(error);
		}
	},
	create: async (req, res) => {
		try {
			const { userId } = req.body;
			// const storage = await FoodStorage.create({
			// 	userId
			// });
			res.status(201).json({ message: 'New storage successfully created', data: userId });
		} catch (error) {
			console.log(error);
		}
	},
	// restricted route
	updateAmount: async (req, res) => {
		try {
			const { id } = req.params;
			const {
				regularMeat,
				premiumMeat,
				regularFodder,
				premiumFodder,
				regularFruit,
				premiumFruit,
				regularBean,
				premiumBean
			} = req.body;

			const updatedStorage = await FoodStorage.findByIdAndUpdate(
				id,
				{
					$set: {
						regularMeat,
						premiumMeat,
						regularFodder,
						premiumFodder,
						regularFruit,
						premiumFruit,
						regularBean,
						premiumBean
					}
				},
				{ new: true }
			);

			res.status(200).json({
				message: 'Storage updated',
				data: updatedStorage
			});
		} catch (error) {
			console.log(error);
		}
	}
};
