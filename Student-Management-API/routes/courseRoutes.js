const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const { getCourses } = require("../controllers/courseController");

router.get("/", protect, getCourses);

module.exports = router;