import React, { useState,Fragment,useEffect } from 'react';
import "./NewQuestion.css";
import MetaData from '../layout/MetaData';
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import {Button} from "@material-ui/core";
import { useDispatch,useSelector } from 'react-redux';
import {useAlert} from "react-alert";
import {clearErrors,createQuestion} from "../../actions/questionAction";
import {NEW_QUESTION_RESET} from "../../constants/questionConstants";

const NewQuestion = ({history}) => {

   const dispatch = useDispatch();
   const alert = useAlert();
  
   const { loading, error, success } = useSelector((state) => state.newQuestion);

  const [question,setQuestion] =  useState("");
  const [option1,setOption1] =  useState("");
  const [option2,setOption2] =  useState("");
  const [option3,setOption3] =  useState("");
  const [option4,setOption4] =  useState("");
  const [correctOption,setCorrectOption] =  useState("");
  const [score,setScore] = useState(1);
  const [category,setCategory] =  useState("");

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Question Created Successfully");
      history.push("/admin/dashboard");
      dispatch({ type: NEW_QUESTION_RESET });
    }
  }, [dispatch, alert, error, history, success]);


  const createQuestionSubmitHandler = (e) => {

    e.preventDefault();
    // const myForm = new FormData();

    // myForm.set("question", question);
    // myForm.set("option1", option1);
    // myForm.set("option2", option2);
    // myForm.set("option3", option3);
    // myForm.set("option4", option4);
    // myForm.set("correct_answer", correctOption);
    // myForm.set("score", score);
    // myForm.set("category", category);
    const questionData = {
      "question"  : question,
      "option1"  : option1,
      "option2"  : option2,
      "option3"  : option3,
      "option4" : option4,
      "correct_answer" : correctOption,
      "score" : score,
      "category"  : category,
    }

    dispatch(createQuestion(questionData));
    
  };

  

  return (
    <Fragment>
      <MetaData title="Create Product" />
      <div className="newQuestion">
        <div className="newQuestionContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createQuestionSubmitHandler}
          >
            <h1>Create Question</h1>

            <div>
              <AccountTreeIcon />
              <input
                type="text"
                placeholder="Category"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div>
              <DescriptionIcon />
              <textarea
                placeholder="Question"
                cols="30"
                rows="1"
                required
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              ></textarea>
            </div>
            <div>
              <StorageIcon />
              <input
                type="text"
                placeholder="Option 1"
                required
                value={option1}
                onChange={(e) => setOption1(e.target.value)}
              />
            </div>
            <div>
              <StorageIcon />
              <input
                type="text"
                placeholder="Option 2"
                required
                value={option2}
                onChange={(e) => setOption2(e.target.value)}
              />
            </div>
            <div>
              <StorageIcon />
              <input
                type="text"
                placeholder="Option 3"
                required
                value={option3}
                onChange={(e) => setOption3(e.target.value)}
              />
            </div>
            <div>
              <StorageIcon />
              <input
                type="text"
                placeholder="Option 4"
                required
                value={option4}
                onChange={(e) => setOption4(e.target.value)}
              />
            </div>
            <div>
              <StorageIcon />
              <input
                type="text"
                placeholder="Correct Answer"
                required
                value={correctOption}
                onChange={(e) => setCorrectOption(e.target.value)}
              />
            </div>
            <div>
              <StorageIcon />
              <input
                type="number"
                placeholder="Score"
                required
                value={score}
                onChange={(e) => setScore(e.target.value)}
              />
            </div>

            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default NewQuestion