const Student = require("../models/Student");

// Get All Students
exports.getStudents = async (req, res, next) => {

    try {
        const students = await Student.find();
        res.status(200).json({
            success: true,
            count: students.length,
            students
        });
    }
    catch (error) {
        next(error);
    }
};

// Get Student By ID
exports.getStudent = async (req, res, next) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student Not Found"
            });
        }
        res.status(200).json({
            success: true,
            student
        });
    }
    catch (error) {
        next(error);
    }
};

// Add Student
exports.addStudent = async (req, res, next) => {

    try {
        const student = await Student.create(req.body);
        res.status(201).json({
            success: true,
            message: "Student Added",
            student
        });
    }
    catch (error) {
        next(error);
    }
};

// Update Student
exports.updateStudent = async (req, res, next) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );
        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student Not Found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Student Updated",
            student
        });
    }

    catch (error) {
        next(error);
    }
};

// Delete Student
exports.deleteStudent = async (req, res, next) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Student Deleted"
        });
    }
    catch (error) {
        next(error);
    }
};