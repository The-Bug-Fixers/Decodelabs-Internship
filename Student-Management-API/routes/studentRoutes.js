const express = require("express");
const router = express.Router();

const {
    getStudents,
    getStudent,
    addStudent,
    updateStudent,
    deleteStudent
} = require("../controllers/studentController");

const protect = require("../middleware/authMiddleware");

// Public
router.get("/", getStudents);
router.get("/:id", getStudent);

// Protected
router.post("/", protect, addStudent);
router.put("/:id", protect, updateStudent);
router.delete("/:id", protect, deleteStudent);
module.exports = router;