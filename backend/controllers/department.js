const catchAsyncError = require("../middleware/catchAsyncError");
const Department = require("../models/department");
const ErrorHandler = require("../utils/errorHandler");


exports.getAllDepartments = catchAsyncError(async (req, res, next) => {
    const departments = await Department.find();

    return res.status(200).json({
        success: true,
        departments
    })
})

exports.getDepartmentById = catchAsyncError(async (req, res, next) => {
    const department = await Department.findById(req.params.id);

    if (!department) {
        return next(new ErrorHandler("Department does not exist", 404));
    }

    return res.status(200).json({
        success: true,
        department
    })
})