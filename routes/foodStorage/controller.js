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
	getById: async (req, res) => {
		try {
			const { id } = req.params;
			const storage = await FoodStorage.findOne({ userId: id });

			res.status(200).send({ message: 'Get storage data', data: storage });
		} catch (error) {
			console.log(error);
		}
	},
	create: async (req, res) => {
		try {
			const { userId } = req.body;
			const storage = await FoodStorage.create({
				userId
			});
			res.status(201).json({ message: 'New storage successfully created', data: storage });
		} catch (error) {
			console.log(error);
		}
	},
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

			const userData = await FoodStorage.findOne({ userId: id });

			const updatedStorage = await FoodStorage.findByIdAndUpdate(
				userData._id,
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
