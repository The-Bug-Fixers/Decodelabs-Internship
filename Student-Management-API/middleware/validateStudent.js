module.exports = (req, res, next) => {

    const { name, email, age, branch } = req.body;

    if (!name || name.trim() === "") {
        return res.status(400).json({
            success: false,
            message: "Name is required"
        });
    }

    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: "Invalid Email"
        });
    }

    if (age < 16 || age > 30) {
        return res.status(400).json({
            success: false,
            message: "Age should be between 16 and 30"
        });
    }

    if (!branch || branch.trim() === "") {
        return res.status(400).json({
            success: false,
            message: "Branch is required"
        });
    }

    next();

};