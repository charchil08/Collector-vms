const express = require("express");
const { getAllDepartments, getDepartmentById } = require("../controllers/department");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

router.route("/departments").get(isAuthenticatedUser, getAllDepartments);
router.route("/departments/:id").get(isAuthenticatedUser, getDepartmentById);

module.exports = router;