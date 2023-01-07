const express = require("express");
const {createSponser, getAllSponsers,deleteSponser} = require("../controller/SponserController");
const {isAutheticatedUser,authorizeRoles} =  require("../middleware/auth");
const router =  express.Router();

router.route("/admin/sponser/new").post(isAutheticatedUser,authorizeRoles("admin"),createSponser);
router.route("/sponsers").get(getAllSponsers);

router.route("/admin/sponser/:id").delete(isAutheticatedUser,authorizeRoles("admin"),deleteSponser);

module.exports = router;