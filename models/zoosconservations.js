const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const zooSchema = new Schema({
    zooName: {
        type: String,
        required: false,
    },
    photo: {
        type: String,
        required: false,
    },
    about: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: false,
    },
    city: {
        type: String,
        required: false,
    },
    since: {
        type: String,
        required: false,
    },
    animalType: {
        type: String,
        required: false,
    },
    animalNumber: {
        type: String,
        required: false,
    }
})

const Zoos = mongoose.model("zoos", zooSchema);

module.exports = Zoos;