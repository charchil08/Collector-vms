const express = require("express");
const { receiveComplain, editComplainStatus, deleteComplain, getAllComplains, getComplainDetails, getDepartmentComplains, exportComplainPdf } = require("../controllers/comaplain");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();


router.route("/complain")
    .get(isAuthenticatedUser, authorizeRoles("collector"), getAllComplains)
    .post(isAuthenticatedUser, authorizeRoles("go"), receiveComplain);


router.route("/complain/:id")
    .put(isAuthenticatedUser, authorizeRoles("hod", "collector"), editComplainStatus)
    .get(isAuthenticatedUser, getComplainDetails)
    .delete(isAuthenticatedUser, authorizeRoles("hod"), deleteComplain);


router.route("/complain/hod/dept")
    .get(isAuthenticatedUser, getDepartmentComplains)

router.route("/complain/pdf")
    .post(isAuthenticatedUser, exportComplainPdf)    


module.exports = router;