const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const feedsSchema = new Schema({
	type: {
		type: String
	},
	feeds1: {
		type: String
	},
	sources1: {
		type: String
	},
	perDay1: {
		type: String
	},
	feeds2: {
		type: String
	},
	sources2: {
		type: String
	},
	perDay2: {
		type: String
	}
});

const Feeds = mongoose.model('feeds', feedsSchema);

module.exports = Feeds;
