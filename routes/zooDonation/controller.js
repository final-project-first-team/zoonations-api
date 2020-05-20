const { ZooDonation } = require('../../models');

module.exports = {
    getAll: async (req, res) => {
		try {
			const donation = await ZooDonation.find({});

			res.status(200).json({ message: 'Get all donation data', data: donation });
		} catch (error) {
			console.log(error);
			throw error;
		}
	},

    getByUserId: async (req, res) => {
        try {
            const { id } = req.params;
            const donation = await ZooDonation.findOne({ userId: id });
            res.status(200).send({ message: 'Get donation data', data: donation });
        } catch (error) {
            console.log(error);

        }
    },

    create: async (req, res) => {
        try {
            const {
                userId,
                zooId,
                name,
                email,
                phone,
                message,
                amount,
                paymentMethod,
            } = req.body;

            const donationPost = await ZooDonation.create({
                userId,
                zooId,
                name,
                email,
                phone,
                message,
                amount,
                paymentMethod,
            });
            res.status(201).json({ message: 'New donatioan successfully created', data: donationPost });
        } catch (error) {
            console.log(error);
        }
    },

    deleteById: async (req, res) => {}
}
