const catchAsyncHandler = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");
const user = require("../models/user");

exports.isAuthenticatedUser = catchAsyncHandler(async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return next(new ErrorHandler("Please login to access this resource", 401))
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await user.findById(decodedData.id);

    // console.log(req.user)

    next();

})


exports.authorizeRoles = (...roles) => {

    return (req, res, next) => {

        if (!roles.includes(req.user.role)) {
            return next(new ErrorHandler(`Role : ${req.user.role} is not allowed to access this resource`), 403)
        }

        next();
    }
}


//isCollector
// isEmployee
// isHOD