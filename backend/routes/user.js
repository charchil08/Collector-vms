const express = require("express");
const { registerUser, loginUser, logout, bulkUserCreation } = require("../controllers/user");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();


router.route("/register").post(isAuthenticatedUser, registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(isAuthenticatedUser, logout);

module.exports = router;