const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    subject: {
        type: String,
        required: true
    },

    dueDate: {
        type: Date,
        required: true
    },

    status: {
        type: String,
        enum: ["Pending", "Submitted"],
        default: "Pending"
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Assignment", assignmentSchema);