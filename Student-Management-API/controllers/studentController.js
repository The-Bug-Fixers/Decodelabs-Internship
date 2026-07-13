const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/students.json");

// Read students from JSON file
const readStudents = () => {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
};

// Write students to JSON file
const writeStudents = (students) => {
    fs.writeFileSync(filePath, JSON.stringify(students, null, 4));
};

// GET ALL STUDENTS
exports.getAllStudents = (req, res) => {
    const students = readStudents();

    res.status(200).json({
        success: true,
        count: students.length,
        data: students
    });
};

// GET STUDENT BY ID
exports.getStudentById = (req, res) => {
    const students = readStudents();

    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    res.status(200).json({
        success: true,
        data: student
    });
};

// ADD STUDENT
exports.addStudent = (req, res) => {

    const students = readStudents();

    const newStudent = {
        id: students.length ? students[students.length - 1].id + 1 : 1,
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        branch: req.body.branch
    };

    students.push(newStudent);

    writeStudents(students);

    res.status(201).json({
        success: true,
        message: "Student Added Successfully",
        data: newStudent
    });
};

// UPDATE STUDENT
exports.updateStudent = (req, res) => {

    const students = readStudents();

    const id = parseInt(req.params.id);

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    students[index] = {
        ...students[index],
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        branch: req.body.branch
    };

    writeStudents(students);

    res.status(200).json({
        success: true,
        message: "Student Updated Successfully",
        data: students[index]
    });
};

// DELETE STUDENT
exports.deleteStudent = (req, res) => {

    const students = readStudents();

    const id = parseInt(req.params.id);

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    const deletedStudent = students.splice(index, 1);

    writeStudents(students);

    res.status(200).json({
        success: true,
        message: "Student Deleted Successfully",
        data: deletedStudent
    });
};