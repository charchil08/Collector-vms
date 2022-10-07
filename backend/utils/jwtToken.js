// Creating token, sending to cookie, return res

const sendToken = async (user, statusCode, res) => {

    // create token
    const token = await user.getJWTToken();

    // cookie -> 1) options 2) send to server
    const options = {
        httpOnly: true,
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 3600 * 1000
        )
    }

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        token,
        user
    })
}

module.exports = sendToken; 