const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    rollNo: {
        type: String,
        default: ""
    },

    branch: {
        type: String,
        default: ""
    },

    semester: {
        type: Number,
        default: 1
    },

    phone: {
        type: String,
        default: ""
    },

    cgpa: {
        type: Number,
        default: 0
    },

    attendance: {
        type: Number,
        default: 0
    },

    profileImage: {
        type: String,
        default: "student.png"
    },

    enrolledCourses: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    }
    ],
    assignedAssignments: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Assignment"
    }
    ]
},
{
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);