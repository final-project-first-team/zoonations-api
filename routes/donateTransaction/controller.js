const { DonateTransaction } = require('../../models');

module.exports = {
	getAll: async (req, res) => {
		try {
			const donateTransaction = await DonateTransaction.find({}).populate('zooId').populate('userId');

			res.status(200).send({ message: 'Get all donate transaction data', data: donateTransaction });
		} catch (error) {
			console.log(error);
			throw error;
		}
	},
	create: async (req, res) => {
		try {
			const { userId, zooId, status, name, email, phone, message, amount, paymentMethod } = req.body;
			const newDonateTrans = await DonateTransaction.create({
				userId,
				zooId,
				status,
				name,
				email,
				phone,
				message,
				amount,
				paymentMethod
			});
			res.status(201).json({
				message: `New donate transaction successfully created`,
				data: newDonateTrans
			});
		} catch (error) {
			console.log(error);
			throw error;
		}
	},
	deleteById: async (req, res) => {
		try {
			const { id } = req.params;
			const result = await DonateTransaction.findByIdAndRemove(id);

			res.status(200).json({
				message: `Donate Transaction by id-${id} successfully deleted`,
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
			const result = await DonateTransaction.find({ userId: id }).populate('zooId').populate('userId');

			res.status(200).send({
				data: result
			});
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
};
