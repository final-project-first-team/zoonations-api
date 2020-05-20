const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const animalsSchema = new Schema({
	name: {
		type: String,
		required: false
	},
	scientificName: {
		type: String,
		required: false
	},
	height: {
		type: Number,
		required: false
	},
	weight: {
		type: Number,
		required: false
	},
	populations: {
		type: Number,
		required: false
	},
	habitats: {
		type: String,
		required: false
	},
	status: {
		type: String,
		required: false
	},
	threats: {
		type: String,
		required: false
	},
	feeds: {
		type: Schema.Types.ObjectId,
		ref: 'feeds'
	},
	zoo: {
		type: String,
		required: false
	},
	image1: {
		type: String,
		required: false,
		default: 'https://wallpaperaccess.com/full/2136603.jpg'
	},
	image2: {
		type: String,
		required: false
	},
	image3: {
		type: String,
		required: false
	}
});

const Animals = mongoose.model('animals', animalsSchema);

module.exports = Animals;
