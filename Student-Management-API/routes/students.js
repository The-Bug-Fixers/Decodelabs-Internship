const express = require("express");
const router = express.Router();

const {
    getAllStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent
} = require("../controllers/studentController");

const validateStudent = require("../middleware/validateStudent");

// GET All Students
router.get("/", getAllStudents);

// GET Student by ID
router.get("/:id", getStudentById);

// POST Student
router.post("/", validateStudent, addStudent);

// PUT Student
router.put("/:id", validateStudent, updateStudent);

// DELETE Student
router.delete("/:id", deleteStudent);

module.exports = router;