import { useHistory } from "react-router";
import "./Question.css";
import { updateScore, updateState } from "../../actions/userAction";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import React, { useState} from "react";
import "./Question.css";
import logo from "../../assets/logo.png";


const Question = ({
  currQues,
  setCurrQues,
  questions,
  noOfQuestions,
  option1,
  option2,
  option3,
  option4,
  correct,
  score,
  questionScore,
  setScore,
}) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [selected, setSelected] = useState("");

  const history = useHistory();

  const handleNext = async (e) => {
    e.preventDefault();
    if (selected) {
      setCurrQues(currQues + 1);
      if (selected === correct) setScore(score + questionScore);
      else
        alert.error(
          `The answer to the Previous question was wrong`
        );
      setSelected("");
    } else {
      alert.error("Pls select any option");
    }
    if (currQues === noOfQuestions - 1 && selected) {
      if (selected === correct)
        await dispatch(updateScore(score + questionScore));
      else await dispatch(updateScore(score));

      dispatch(updateState());
      history.push("/play/quiz/end");
    }
  };

  const handleQuit = () => {
    dispatch(updateState());
  };

  return (
    <>
      <div class="questionBox">
      <img src={logo} alt="quizinc" className="quizinclogo" />  
        <div className="quiz-card">
          <h1>Question {currQues+1}</h1>
          <h3>
            {questions[currQues].question}
            <br />
          </h3>

          <form onSubmit={handleNext}>
            <fieldset>
              <legend class="hint">
                Please select your preferred contact method:
              </legend>
              <div class="quiz-row">
                <div class="col">
                  <input
                    type="radio"
                    id="contactChoice1"
                    name="contact"
                    value={option1}
                    onChange={(e) => setSelected(e.target.value)}
                  />
                  <label for="contactChoice1">{option1}</label>
                </div>
                <div class="col">
                  <input
                    type="radio"
                    id="contactChoice2"
                    name="contact"
                    value={option2}
                    onChange={(e) => setSelected(e.target.value)}
                  />
                  <label for="contactChoice2">{option2}</label>
                </div>

                <div class="col">
                  <input
                    type="radio"
                    id="contactChoice3"
                    name="contact"
                    value={option3}
                    onChange={(e) => setSelected(e.target.value)}
                  />
                  <label for="contactChoice3">{option3}</label>
                </div>
                <div class="col">
                  <input
                    type="radio"
                    id="contactChoice3"
                    name="contact"
                    value={option4}
                    onChange={(e) => setSelected(e.target.value)}
                  />
                  <label for="contactChoice3">{option4}</label>
                </div>
              </div>
              <div class="question-btn">
                <button type="submit">Submit</button>
                <button type="button" onClick={handleQuit}>Exit</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default Question;


