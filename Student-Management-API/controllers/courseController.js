const Course = require("../models/Course");

// Get All Courses
exports.getCourses = async (req, res, next) => {

    try {

        const courses = await Course.find();

        res.status(200).json({
            success: true,
            courses
        });

    } catch (error) {
        next(error);
    }

};