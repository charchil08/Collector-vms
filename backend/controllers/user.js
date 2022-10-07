const User = require("../models/user");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncHandler = require("../middleware/catchAsyncError");
const sendToken = require("../utils/jwtToken");

const Department = require("../models/department");

exports.registerUser = catchAsyncHandler(async (req, res, next) => {
    const { department_name, email, password, role } = req.body;

    const user = await User.create({
        department_name,
        email,
        password,
        role
    })

    const department = await Department.create({ department_name });

    if (!department) {
        return next(new ErrorHandler("Department name is not valid", 500));
    }

    await sendToken(user, 201, res);
})


exports.loginUser = catchAsyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    // checking if user has given email & password
    if (!email || !password) {
        next(new ErrorHandler("Please enter Email and password"), 400)
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHandler("Invalid Email or password", 401))
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid Email or password", 401))
    }

    await sendToken(user, 200, res);
})


exports.logout = catchAsyncHandler(async (req, res, next) => {

    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: "Logged out"
    })

})


const users = [
    {
        "department_name": "ASSESSMENT CELL DEPARTMENT",
        "email": "1@gmail.com",
        "role": "hod",
        "password": "password"
    },
    {
        "department_name": "BUILDING DEPARTMENT",
        "email": "2@gmail.com",
        "role": "hod",
        "password": "password"
    },
    {
        "department_name": "CATTLE POUND DEPARTMENT",
        "email": "3@gmail.com",
        "role": "hod",
        "password": "password"
    },
    {
        "department_name": "COMPUTER DEPARTMENT",
        "email": "4@gmail.com",
        "role": "hod",
        "password": "password"
    },
    {
        "department_name": "DRAINAGE DEPARTMENT",
        "email": "5@gmail.com",
        "role": "hod",
        "password": "password"
    },
    {
        "department_name": "ELECTRICITY DEPARTMENT",
        "email": "6@gmail.com",
        "role": "hod",
        "password": "password"
    }, {
        "department_name": "ESTATE DEPARTMENT",
        "email": "7@gmail.com",
        "role": "hod",
        "password": "password"
    }, {
        "department_name": "FILTER DEPARTMENT",
        "email": "8@gmail.com",
        "role": "hod",
        "password": "password"
    }, {
        "department_name": "FIRE AND EMERGENCY DEPARTMENT",
        "email": "9@gmail.com",
        "role": "hod",
        "password": "password"
    }, {
        "department_name": "GARDEN DEPARTMENT",
        "email": "10@gmail.com",
        "role": "hod",
        "password": "password"
    }, {
        "department_name": "HEALTH DEPARTMENT",
        "email": "11@gmail.com",
        "role": "hod",
        "password": "password"
    }, {
        "department_name": "HOUSE TAX DEPARTMENT",
        "email": "12@gmail.com",
        "role": "hod",
        "password": "password"
    }, {
        "department_name": "ICDS DEPARTMENT",
        "email": "13@gmail.com",
        "role": "hod",
        "password": "password"
    }, {
        "department_name": "MID DAY MEAL DEPARTMENT",
        "email": "14@gmail.com",
        "role": "hod",
        "password": "password"
    }, {
        "department_name": "PROFESSIONAL TAX DEPARTMENT",
        "email": "15@gmail.com",
        "role": "hod",
        "password": "password"
    }, {
        "department_name": "PROJECT DEPARTMENT",
        "email": "16@gmail.com",
        "role": "hod",
        "password": "password"
    }, {
        "department_name": "ROAD DEPARTMENT",
        "email": "17@gmail.com",
        "role": "hod",
        "password": "password"
    }, {
        "department_name": "SHOP DEPARTMENT",
        "email": "18@gmail.com",
        "role": "hod",
        "password": "password"
    }, {
        "department_name": "SOLID WASTE MANAGEMENT DEPARTMENT",
        "email": "19@gmail.com",
        "role": "hod",
        "password": "password"
    }, {
        "department_name": "TOWN DEVELOPMENT DEPARTMENT",
        "email": "20@gmail.com",
        "role": "hod",
        "password": "password"
    }, {
        "department_name": "TOWN PLANNING DEPARTMENT",
        "email": "21@gmail.com",
        "role": "hod",
        "password": "password"
    }, {
        "department_name": "URBAN COMMUNITY DEVELOPMENT DEPARTMENT",
        "email": "22@gmail.com",
        "role": "hod",
        "password": "password"
    }, {
        "department_name": "VEHICLE TAX DEPARTMENT",
        "email": "23@gmail.com",
        "role": "hod",
        "password": "password"
    }, {
        "department_name": "WATERWORKS DEPARTMENT",
        "email": "24@gmail.com",
        "role": "hod",
        "password": "password"
    },
]