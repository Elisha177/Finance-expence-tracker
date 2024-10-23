const mongoose = require("mongoose")

const transactionalSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['income','expense'],
        required: true
    },
    category: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: Date.now
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Transaction" , transactionalSchema);