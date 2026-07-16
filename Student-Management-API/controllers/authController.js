const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");


// Register User
exports.registerUser = async (req, res, next) => {
    try {

        const {
            name,
            rollNo,
            email,
            phone,
            branch,
            semester,
            password
        } = req.body;

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            rollNo,
            email,
            phone,
            branch,
            semester,
            password: hashedPassword
        });

        res.status(201).json({
            success: true,
            token: generateToken(user._id),
            user
        });

    } catch (error) {
        next(error);
    }
};


// Login User---------------------------------------------------------------------------
exports.loginUser = async (req, res, next) => {

    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid Email"
            });

        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {

            return res.status(401).json({
                success: false,
                message: "Invalid Password"
            });

        }

        res.status(200).json({
            success: true,
            token: generateToken(user._id),
            user
        });
    }

    catch (error) {
        next(error);
    }

};

// Get Logged-in User Profile-------------------------------------------------------------
exports.getProfile = async (req, res, next) => {

    try {

        const user = await User.findById(req.user._id).select("-password");

        res.status(200).json({
            success: true,
            user
        });

    } catch (error) {
        next(error);
    }

};

// Update User Profile-----------------------------------------------------------------------
exports.updateProfile = async (req, res, next) => {
    try {

        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        user.name = req.body.name || user.name;
        user.phone = req.body.phone || user.phone;
        user.branch = req.body.branch || user.branch;
        user.semester = req.body.semester || user.semester;
        user.rollNo = req.body.rollNo || user.rollNo;

        const updatedUser = await user.save();

        res.status(200).json({
            success: true,
            message: "Profile Updated Successfully",
            user: updatedUser
        });

    } catch (error) {
        next(error);
    }
};