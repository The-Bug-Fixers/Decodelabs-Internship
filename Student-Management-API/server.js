const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const errorHandler = require("./middleware/errorMiddleware");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.json({
        message: "Student Management System API Running"
    });
});

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});