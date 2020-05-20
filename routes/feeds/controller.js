const { Feeds } = require('../../models');

module.exports = {
	getAll: async (req, res) => {
		try {
			const feeds = await Feeds.find({}).populate('userId');
			res.status(200).json({ message: 'Get all feeds data', data: feeds });
		} catch (error) {
			console.log(error);
		}
	},
	create: async (req, res) => {
		try {
			const { type, feeds1, sources1, perDay1, feeds2, sources2, perDay2 } = req.body;

			const feeds = await Feeds.create({
				type,
				feeds1,
				sources1,
				perDay1,
				feeds2,
				sources2,
				perDay2
			});
			res.status(201).json({ message: 'New feeds data successfully created', data: feeds });
		} catch (error) {
			console.log(error);
		}
	},
	updateFeeds: async (req, res) => {}
};
