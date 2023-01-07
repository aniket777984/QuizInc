const express  = require("express");
const { registerUser, loginUser, logout, getUserDetails, updatePassword, updateProfile, getAllUsers, getSingleUser, updateUserRole, deleteUser, deleteAccount, searchUser, updateStateAndScore, updateScore,updateState, displayLeaderBoard} = require("../controller/UserController");
const router = express.Router();
const {isAutheticatedUser,authorizeRoles} = require('../middleware/auth');


router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route('/me').get( isAutheticatedUser , getUserDetails);
router.route('/password/update').put(isAutheticatedUser , updatePassword);
router.route('/me/update').put(isAutheticatedUser , updateProfile);
router.route("/me/delete").delete(isAutheticatedUser , deleteAccount);
router.route('/users').get(getAllUsers);
router.route('/admin/user/:id').get(isAutheticatedUser,authorizeRoles("admin"), getSingleUser)
.put(isAutheticatedUser,authorizeRoles("admin"),updateUserRole)
.delete(isAutheticatedUser,authorizeRoles("admin"),deleteUser);

router.route("/users/leaderboard").get(isAutheticatedUser,displayLeaderBoard);

router.route("/search/users").get(isAutheticatedUser,searchUser);
router.route("/update/state").get(isAutheticatedUser,authorizeRoles("admin"),updateStateAndScore);
router.route("/update/score").post(isAutheticatedUser,updateScore);
router.route("/update/user/state").get(isAutheticatedUser,updateState);


module.exports = router;