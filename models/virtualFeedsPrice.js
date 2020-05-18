const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const virtualFeedsPriceSchema = new Schema({
	type: {
		type: String
	},
	regularMeat: {
		type: Number,
		default: 0
	},
	premiumMeat: {
		type: Number,
		default: 0
	},
	regularFodder: {
		type: Number,
		default: 0
	},
	premiumFodder: {
		type: Number,
		default: 0
	},
	regularFruit: {
		type: Number,
		default: 0
	},
	premiumFruit: {
		type: Number,
		default: 0
	},
	regularBean: {
		type: Number,
		default: 0
	},
	premiumBean: {
		type: Number,
		default: 0
	}
});

const VirtualFeedsPrice = mongoose.model('virtualFeedsPrice', virtualFeedsPriceSchema);

module.exports = VirtualFeedsPrice;
