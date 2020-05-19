const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const feedTransactionSchema = new Schema({
	userId: {
		type: String
	},
	animalId: {
		type: String,
		default: 'none'
	},
	type: {
		type: String,
		default: 'buy'
	},
	regularFeedType: {
		type: String,
		default: 'none'
	},
	regularFeedAmount: {
		type: Number,
		default: 0
	},
	premiumFeedType: {
		type: String,
		default: 'none'
	},
	premiumFeedAmount: {
		type: Number,
		default: 0
	},
	paymentMethod: {
		type: String,
		default: 'none'
	},
	total: {
		type: Number,
		default: 0
	}
});

const FeedTransaction = mongoose.model('feedTransaction', feedTransactionSchema);

module.exports = FeedTransaction;
