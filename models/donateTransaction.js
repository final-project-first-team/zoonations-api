const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const donateTransactionSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	zooId: {
		type: Schema.Types.ObjectId,
		ref: 'zoos'
	},
	status: {
		type: String,
		default: 'Not Anonymous'
	},
	name: {
		type: String,
		required: false
	},
	email: {
		type: String,
		required: false
	},
	phone: {
		type: String,
		required: false
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

const DonateTransaction = mongoose.model('donateTransaction', donateTransactionSchema);

module.exports = DonateTransaction;
