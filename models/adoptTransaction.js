const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const adoptTransactionSchema = new Schema({
    animalId: {
        type: String,
        required: true
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
        type: Number,
        required: true,
        default: 0
    },
    paymentMethod: {
        type: String,
        required: true
    },
})

const AdoptTrans = mongoose.model("adoptTransaction", adoptTransactionSchema);

module.exports = AdoptTrans;