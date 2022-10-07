module.exports = catchAsyncHandler => (req, res, next) => {
    Promise
        .resolve(catchAsyncHandler(req, res, next))
        .catch(next)
}