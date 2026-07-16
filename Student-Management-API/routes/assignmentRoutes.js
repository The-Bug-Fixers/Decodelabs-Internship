const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadAssignment");
const {
    getAssignments,
    uploadAssignment
} = require("../controllers/assignmentController");

router.get("/", protect, getAssignments);
router.post(
    "/upload/:assignmentId",
    protect,
    upload.single("file"),
    uploadAssignment
);

module.exports = router;