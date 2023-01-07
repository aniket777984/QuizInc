import "./Result.css";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import Loader from "../../components/layout/Loader/Loader";
import MetaData from "../layout/MetaData";

import logo from "../../assets/logo.png";


const Result = () => {
  const { user, loading } = useSelector((state) => state.user);

  return (
    <Fragment>
      <MetaData title="Quiz Result"/>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div class="resultQuizBox">
            <img src={logo} alt="quizinc" className="quizinclogo" />  
            <div class="resultQuizCard">
              <div class="resultBox" id="card">
                <div class="result-card-front">
                  <div class="resultProfile">
                    <img src={user.avatar.url} alt="Aniket" class="user-img" />
                    <h2>{user.name}</h2>
                    <p>Quizinc Weekley Quiz Result</p>
                    <p class="result-btn">Score:- {user.score}</p>
                  </div>
                </div>
                <div class="result-card-back">
                  <div class="result-data">
                    <img src={logo} alt="Aniket" class="logo-img" />
                    <h2>QUIZINC</h2>
                    <p>QuizInc Heartly Thanks You For Participating</p>
                    <a href="/display/leaderboard" class="result-btn">
                      LeaderBoard
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Fragment>
  );
};

export default Result;
