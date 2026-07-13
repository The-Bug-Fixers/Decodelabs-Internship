const express = require("express");
const studentRoutes = require("./routes/students");

const app = express();

// Middleware
app.use(express.json());

// Default Route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Student Management API"
    });
});

// Student Routes
app.use("/students", studentRoutes);

// Invalid Route
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});

// Server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});