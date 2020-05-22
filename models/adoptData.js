const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const adoptDataSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	animalId: {
		type: Schema.Types.ObjectId,
		ref: 'animals'
	},
	long: {
		type: String,
		default: '0'
	},
	status: {
		type: String,
		default: 'inactive'
	},
	time: {
		type: Date,
		default: Date.now
	}
});

const AdoptData = mongoose.model('adoptData', adoptDataSchema);

module.exports = AdoptData;
