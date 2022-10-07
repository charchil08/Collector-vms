const mongoose = require("mongoose");
const validator = require("validator");

const complainSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "please provide first name"],
        trim: true,
        maxLength: [30, "Please enter short name"],
        minLength: [2, "Please provide full name"],
    },
    last_name: {
        type: String,
        required: [true, "please provide first name"],
        trim: true,
        maxLength: [30, "Please enter short name"],
        minLength: [2, "Please provide full name"],
    },
    middle_name: {
        type: String,
        trim: true,
        maxLength: [30, "Please enter short name"],
    },
    mobile_no: {
        type: String,
        required: [true, "please provide first name"],
        minLength: 10,
        maxLength: 10,
    },
    email: {
        type: String,
        validate: [validator.isEmail, "Please provide valid email"]
    },
    address: {
        type: String,
        required: [true, "please provide address"],
        trim: true,
        minLength: [4, "Please provide at least 4 character address"],
    },
    details: {
        type: String,
        required: [true, "please provide complain details"],
        trim: true,
        minLength: [4, "Too small complain"],
    },
    image: {
        type: String
    },
    department_name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department",
        required: true,
    },
    serverity: {
        type: String,
        enum: ["cosmetic", "minor", "moderate", "major", "critical"],
        default: "minor"
    },

    remarks: {
        type: String,
        trim: true,
    },
    feedback: {
        type: String,
        trim: true,
    },
    rating: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: "pending",
        enum: ["pending", "working", "solved", "rejected"]
    }
}, {
    timestamps: true
})
    
module.exports = mongoose.model("Complain", complainSchema);