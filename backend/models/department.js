const mongoose = require("mongoose");

const departmentSchema = mongoose.Schema({

    department_name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    }

}, { timestamps: true })



module.exports = mongoose.model("Department", departmentSchema);