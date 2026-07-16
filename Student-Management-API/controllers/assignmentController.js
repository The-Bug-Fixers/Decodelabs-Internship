const User = require("../models/User");
const Assignment = require("../models/Assignment");
const Submission = require("../models/Submission");

exports.getAssignments = async (req, res, next) => {
    try {
        console.log("Logged in User:", req.user);

        const user = await User.findById(req.user._id)
            .populate("assignedAssignments");

        console.log("User from DB:", user);
        console.log("Assignments:", user.assignedAssignments);

        res.status(200).json({
            success: true,
            assignments: user.assignedAssignments
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

exports.uploadAssignment = async (req, res, next) => {
    try {

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Please upload a file"
            });
        }

        const assignmentId = req.params.assignmentId;

        const submission = await Submission.create({
            student: req.user._id,
            assignment: assignmentId,
            file: req.file.filename
        });

        await Assignment.findByIdAndUpdate(
            assignmentId,
            {
                status: "Submitted"
            }
        );

        res.status(201).json({
            success: true,
            message: "Assignment uploaded successfully",
            submission
        });

    } catch (error) {
        next(error);
    }
};