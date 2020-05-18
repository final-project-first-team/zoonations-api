const { VirtualFeedsPrice } = require('../../models');

module.exports = {
	getAll: async (req, res) => {
		try {
			const price = await VirtualFeedsPrice.find({}).populate('userId');
			res.status(200).json({ message: 'Get all price data', data: price });
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
			const {
				type,
				regularMeat,
				premiumMeat,
				regularFodder,
				premiumFodder,
				regularFruit,
				premiumFruit,
				regularBean,
				premiumBean
			} = req.body;

			const price = await FoodStorage.create({
				type,
				regularMeat,
				premiumMeat,
				regularFodder,
				premiumFodder,
				regularFruit,
				premiumFruit,
				regularBean,
				premiumBean
			});
			res.status(201).json({ message: 'New price type successfully created', data: price });
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
