const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
	fullname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	avatar: {
		type: String,
		required: false,
		default: 'https://via.placeholder.com/150'
	},
	token: {
		type: String,
		required: false,
		default: ''
	}
});

const User = mongoose.model('users', userSchema);

module.exports = User;
