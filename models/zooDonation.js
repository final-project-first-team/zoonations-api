const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const zooDonationSchema = new Schema({
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
});

const ZooDonation = mongoose.model('zooDonation', zooDonationSchema);

module.exports = ZooDonation;