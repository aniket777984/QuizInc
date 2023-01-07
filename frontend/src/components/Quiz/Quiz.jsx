import React, { Fragment, useEffect, useState } from "react";
import "./Quiz.css";
import Loader from "../layout/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { getQuestion, clearErrors } from "../../actions/questionAction";
import MetaData from "../layout/MetaData";
import QuestionCard from "./QuestionCard";

const Quiz = () => {

  const dispatch = useDispatch();
  const alert = useAlert();
  const { user } = useSelector((state) => state.user);
  const { questions, loading, error } = useSelector((state) => state.questions);

  

  const [currQues, setCurrQues] = useState(0);
  const [score,setScore] = useState(0);

  useEffect(()=>{
  if(error){
    alert.error(error);
    dispatch(clearErrors());
  }
  },[dispatch,error,alert]);

  useEffect(()=>{
  dispatch(getQuestion());  
  },[dispatch]);

  return (
    <Fragment>
      <MetaData title="QuizInc" />
      {loading===true ? (
        <Loader />
      ) : (
        <Fragment>
        {questions[currQues] &&
          <div className="quiz">
            <QuestionCard 
              currQues={currQues}
              setCurrQues={setCurrQues}
              questions={questions}
              noOfQuestions={questions.length}
              option1={questions[currQues].option1}
              option2={questions[currQues].option2}
              option3={questions[currQues].option3}
              option4={questions[currQues].option4}
              correct={questions[currQues].correct_answer}
              score={score}
              questionScore={questions[currQues].score}
              setScore={setScore}
            />
          </div>
        }
        </Fragment>
      )}
    </Fragment>
  );
};

export default Quiz;
