const express = require("express");
const { createQuestion, getAllQuestions, getAdminQuestions, getQuestionDetails, deleteQuestion, updateQuestion } = require("../controller/QuestionController");
const { isAutheticatedUser , authorizeRoles, authorizeState } = require("../middleware/auth");

const router = express.Router();


router.route("/questions").get(isAutheticatedUser,authorizeState,getAllQuestions);
router
  .route("/admin/questions")
  .get(isAutheticatedUser, authorizeRoles("admin"), getAdminQuestions);

router.route('/admin/question/new').post(isAutheticatedUser ,authorizeRoles("admin") , createQuestion);

router
.route('/admin/question/:id')
.put( isAutheticatedUser ,authorizeRoles("admin") ,updateQuestion)
.delete( isAutheticatedUser , authorizeRoles("admin") ,deleteQuestion);

router.route('/question/:id').get(getQuestionDetails);

module.exports = router;