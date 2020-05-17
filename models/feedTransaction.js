const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const feedTransactionSchema = new Schema({
	userId: {
		type: String
	},
	animalId: {
		type: String
	},
	type: {
		type: String
	},
	regularFeedType: {
		type: String
	},
	regularFeedAmount: {
		type: Number,
		default: 0
	},
	premiumFeedType: {
		type: String
	},
	premiumFeedAmount: {
		type: Number,
		default: 0
	},
	total: {
		type: Number,
		default: 0
	}
});

const FeedTransaction = mongoose.model('feedTransaction', feedTransactionSchema);

module.exports = FeedTransaction;
