const { FeedTransaction } = require('../../models');

module.exports = {
	getAll: async (req, res) => {
		try {
			const transaction = await FeedTransaction.find({}).populate('userId');
			res.status(200).json({ message: 'Get all transaction data', data: transaction });
		} catch (error) {
			console.log(error);
		}
	},
	getByUserId: async (req, res) => {
		try {
			const { id } = req.params;
			const transaction = await FeedTransaction.findOne({ userId: id });

			res.status(200).send({ message: 'Get transaction data', data: transaction });
		} catch (error) {
			console.log(error);
		}
	},
	create: async (req, res) => {
		try {
			const {
				userId,
				type,
				regularFeedType,
				regularFeedAmount,
				premiumFeedType,
				premiumFeedAmount,
				paymentMethod,
				total
			} = req.body;

			const storage = await FeedTransaction.create({
				userId,
				type,
				regularFeedType,
				regularFeedAmount,
				premiumFeedType,
				premiumFeedAmount,
				paymentMethod,
				total
			});
			res.status(201).json({ message: 'New transaction successfully created', data: storage });
		} catch (error) {
			console.log(error);
		}
	},
	deleteById: async (req, res) => {}
};
