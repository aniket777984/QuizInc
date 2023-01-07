const express = require("express");
const {createEvent,getAllEvents,getEventDetails,deleteEvent} = require("../controller/EventController");
const {isAutheticatedUser,authorizeRoles} =  require("../middleware/auth");
const router = express.Router();

router.route("/admin/event/new")
.post(isAutheticatedUser,authorizeRoles("admin"),createEvent);
router.route("/events").get(getAllEvents);
router.route("/event/:id").get(getEventDetails);

router.route("/admin/event/:id").delete(isAutheticatedUser,authorizeRoles("admin"),deleteEvent)



module.exports = router;