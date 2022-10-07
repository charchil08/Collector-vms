const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server error";

    // Mongodb error (CastError)
    if (err.name === "CastError") {
        const message = "Resource not valid : " + err.path;
        err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
    success: false,
        message: err.message,
        err: err.stack
    })

    next()
}  