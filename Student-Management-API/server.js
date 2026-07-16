const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const errorHandler = require("./middleware/errorMiddleware");
const courseRoutes = require("./routes/courseRoutes");
const assignmentRoutes = require("./routes/assignmentRoutes");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(
    "/uploads",
    express.static(path.join(__dirname, "uploads"))
);
app.get("/", (req, res) => {
    res.json({
        message: "Student Management System API Running"
    });
});

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use(errorHandler);
app.use("/api/courses", courseRoutes);
app.use("/api/assignments", assignmentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});