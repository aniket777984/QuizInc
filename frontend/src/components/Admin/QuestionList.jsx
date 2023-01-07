import React,{Fragment, useEffect} from 'react';
import "./QuestionList.css";
import {useDispatch,useSelector} from "react-redux";
import {getQuestion,clearErrors,deleteQuestion} from "../../actions/questionAction";
import {useAlert} from "react-alert";
import {DELETE_QUESTION_RESET} from "../../constants/questionConstants";
import Loader from "../layout/Loader/Loader";

const QuestionList = ({history}) => {

  const dispatch = useDispatch();
  const alert = useAlert();

  const {questions,error,loading}  = useSelector((state) => state.questions)
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.question
  );
  
  const deleteQuestiontHandler = (id) => {
    dispatch(deleteQuestion(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Question Deleted Successfully");
      history.push("/admin/dashboard");
      dispatch({ type: DELETE_QUESTION_RESET });
    }

    dispatch(getQuestion());
  }, [dispatch, alert, error,deleteError,history,isDeleted]);

  return (
    <Fragment>
    {loading ? <Loader /> : (
      <Fragment>
       <div className="box">
       <h1 className='questionHeading'>Question List</h1>
       <div className="questionRow">
       {questions && questions.map((ques,index)=> (
        <div className="questionCol" key={index}>
        <h4>Question :- {index+1}</h4>   
        <p>{ques.question}</p>
        <p>Options :- {ques.option1} , {ques.option2} , {ques.option3} , {ques.option4}</p>
        <p>Correct Option :- {ques.correct_answer}</p>
        <p>Score Alloted :- {ques.score}</p>
        <p>Category :- {ques.category}</p>
        <button className='delete' onClick={() => deleteQuestiontHandler(ques._id)} >Delete This Question</button>   
        </div>
       ))}
       </div>
       </div> 
      </Fragment>     
    )}   
    </Fragment>
  )
}

export default QuestionList