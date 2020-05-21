const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const adoptTransactionSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	animalId: {
		type: Schema.Types.ObjectId,
		ref: 'animals'
	},
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	message: {
		type: String,
		required: false
	},
	amount: {
		type: String,
		required: true,
		default: ''
	},
	paymentMethod: {
		type: String,
		required: true
	},
	time: {
		type: Date,
		default: Date.now
	}
});

const AdoptTransaction = mongoose.model('adoptTransaction', adoptTransactionSchema);

module.exports = AdoptTransaction;
