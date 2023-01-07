const express = require("express");
const {createUpcomingEvent,getAllUpcomingEvents,getUpcomingEventsDetails,deleteUpcomingEvent} = require("../controller/upcomingEventController");
const {isAutheticatedUser,authorizeRoles} =  require("../middleware/auth");
const router = express.Router();

router.route("/admin/upcomingevent/new")
.post(isAutheticatedUser,authorizeRoles("admin"),createUpcomingEvent);
router.route("/upcomingevents").get(getAllUpcomingEvents);
router.route("/upcomingevent/:id").get(getUpcomingEventsDetails);

router.route("/admin/upcomingevent/:id").delete(isAutheticatedUser,authorizeRoles("admin"),deleteUpcomingEvent);

module.exports = router;