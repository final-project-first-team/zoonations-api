const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const zooDonationSchema = new Schema({
<<<<<<< HEAD
	userId: {
		type: String
	},
	zooId: {
		type: String
	},
	zooName: {
		type: String,
		default: 'none'
	},
	name: {
		type: String,
		default: 'none'
	},
	email: {
		type: String,
		default: 'none'
	},
	phone: {
		type: Number,
		default: 0
	},
	message: {
		type: String,
		default: 'none'
	},
	amount: {
		type: Number,
		default: 0
	},
	paymentMethod: {
		type: String,
		default: 'none'
	}
=======
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    zooId: {
        type: String,
    },
    zooName: {
        type: String,
        default: 'none'
    },
    name: {
        type: String,
        default: 'none',
    },
    email: {
        type: String,
        default: 'none',
    },
    phone: {
        type: Number,
        default: 0,
    },
    message: {
        type: String,
        default: 'none'
    },
    amount: {
        type: Number,
        default: 0,
    },
    paymentMethod: {
        type: String,
        default: 'none'
    },
>>>>>>> 0e8dd78bf2d162f2bbbe209496608389002738e2
});

const ZooDonation = mongoose.model('zooDonation', zooDonationSchema);

module.exports = ZooDonation;
