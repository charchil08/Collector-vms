const Complain = require("../models/complain");
const Department = require("../models/department");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncHandler = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/ApiFeatures");
const department = require("../models/department");

exports.receiveComplain = catchAsyncHandler(async (req, res, next) => {
    const {
        first_name,
        last_name,
        middle_name,
        mobile_no,
        email,
        address,
        details,
        image,
        department_name,
        serverity,
    } = await req.body;

    if (!first_name
        || !last_name
        || !mobile_no
        || !address
        || !details
        || !serverity
        || !department_name) {
        return next(new ErrorHandler("Please provide necessary details", 404));
    }

    const complain = await Complain.create({
        first_name,
        last_name,
        middle_name,
        mobile_no,
        email,
        address,
        details,
        image,
        department_name,
        serverity
    })

    return res.status(201).json({
        success: true,
        message: "New complain registered",
        complain
    })
})


exports.deleteComplain = catchAsyncHandler(async (req, res, next) => {
    const complain = await Complain.findById(req.params.id);

    if (!complain) {
        return next(new ErrorHandler("Complain does not exist", 404));
    }

    await complain.remove();

    return res.status(200).json({
        success: true,
        message: "Complain deleted successfully"
    })

})

// need to send remarks and status updated
exports.editComplainStatus = catchAsyncHandler(async (req, res, next) => {
    let complain = await Complain.findById(req.params.id);

    if (!complain) {
        return next(new ErrorHandler("Complain does not exist", 404));
    }

    const { status, remarks } = req.body;

    complain = await Complain.findByIdAndUpdate(req.params.id, { status, remarks }, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    return res.status(200).json({
        success: true,
        complain
    })
})

const exportComplainPdf = catchAsyncHandler(async (req, res, next) => {

})

// receive complain
// delete complain
// edit phase 1 -> status, remarks
// phase 2 -> feedback, rating

exports.getComplainDetails = catchAsyncHandler(async (req, res, next) => {
    const complain = await Complain.findById(req.params.id);

    if (!complain) {
        return next(new ErrorHandler("Complain does not exist", 404));
    }

    return res.status(200).json({
        success: true,
        complain
    })
})

exports.getAllComplains = catchAsyncHandler(async (req, res, next) => {

    const apiFeature = new ApiFeatures(Complain.find(), req.query);

    complains = await apiFeature.
        search().
        filter().
        pagination(5).
        query;

    return res.status(200).json({
        success: true,
        complains
    })
})

exports.getDepartmentComplains = catchAsyncHandler(async (req, res, next) => {
    const { department_name } = await req.user;


    const department = await Department.find({ department_name });

    if (!department) {
        return next(new ErrorHandler("Department does not exist", 404));
    }

    const complains = await Complain.find({ department_name: { $in: department[0]._id } });

    return res.status(200).json({
        success: true,
        complains
    })
})



