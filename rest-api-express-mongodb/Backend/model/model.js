const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        type: String
    },
    salary: {
        type: Number
    },
    age: {
        type: Number
    }
})

module.exports = mongoose.model('Data', dataSchema)