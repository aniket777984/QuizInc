import React from "react";
import "./EndPage.css";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { loadUser, clearErrors } from "../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { useEffect } from "react";
import Loader from "../layout/Loader/Loader";

import logo from "../../assets/logo.png";

const EndPage = () => {

  const dispatch = useDispatch();
  const alert = useAlert();

  const { user, loading, error } = useSelector((state) => state.user);

  return (
    <>
      {loading == true ? (
        <Loader />
      ) : (
        <div class="endPageBox">
          <img src={logo} alt="quizinc" className="quizinclogo" />  
        <div class="endPagecontent">
            <img src={user.avatar.url} alt="aniket" />
            <h3>The Quiz has Ended</h3>
            <a className="endpagebtn"  href="/quiz/result">View Result</a>
        </div>
    </div>
      )}
    </>
  );
};

export default EndPage;
